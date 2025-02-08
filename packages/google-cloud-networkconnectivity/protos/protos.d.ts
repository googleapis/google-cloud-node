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

        /** Namespace networkconnectivity. */
        namespace networkconnectivity {

            /** Namespace v1. */
            namespace v1 {

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
                    constructor(properties?: google.cloud.networkconnectivity.v1.IOperationMetadata);

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
                    public static create(properties?: google.cloud.networkconnectivity.v1.IOperationMetadata): google.cloud.networkconnectivity.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.networkconnectivity.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Represents a HubService */
                class HubService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new HubService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new HubService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): HubService;

                    /**
                     * Calls ListHubs.
                     * @param request ListHubsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListHubsResponse
                     */
                    public listHubs(request: google.cloud.networkconnectivity.v1.IListHubsRequest, callback: google.cloud.networkconnectivity.v1.HubService.ListHubsCallback): void;

                    /**
                     * Calls ListHubs.
                     * @param request ListHubsRequest message or plain object
                     * @returns Promise
                     */
                    public listHubs(request: google.cloud.networkconnectivity.v1.IListHubsRequest): Promise<google.cloud.networkconnectivity.v1.ListHubsResponse>;

                    /**
                     * Calls GetHub.
                     * @param request GetHubRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Hub
                     */
                    public getHub(request: google.cloud.networkconnectivity.v1.IGetHubRequest, callback: google.cloud.networkconnectivity.v1.HubService.GetHubCallback): void;

                    /**
                     * Calls GetHub.
                     * @param request GetHubRequest message or plain object
                     * @returns Promise
                     */
                    public getHub(request: google.cloud.networkconnectivity.v1.IGetHubRequest): Promise<google.cloud.networkconnectivity.v1.Hub>;

                    /**
                     * Calls CreateHub.
                     * @param request CreateHubRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createHub(request: google.cloud.networkconnectivity.v1.ICreateHubRequest, callback: google.cloud.networkconnectivity.v1.HubService.CreateHubCallback): void;

                    /**
                     * Calls CreateHub.
                     * @param request CreateHubRequest message or plain object
                     * @returns Promise
                     */
                    public createHub(request: google.cloud.networkconnectivity.v1.ICreateHubRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateHub.
                     * @param request UpdateHubRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateHub(request: google.cloud.networkconnectivity.v1.IUpdateHubRequest, callback: google.cloud.networkconnectivity.v1.HubService.UpdateHubCallback): void;

                    /**
                     * Calls UpdateHub.
                     * @param request UpdateHubRequest message or plain object
                     * @returns Promise
                     */
                    public updateHub(request: google.cloud.networkconnectivity.v1.IUpdateHubRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteHub.
                     * @param request DeleteHubRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteHub(request: google.cloud.networkconnectivity.v1.IDeleteHubRequest, callback: google.cloud.networkconnectivity.v1.HubService.DeleteHubCallback): void;

                    /**
                     * Calls DeleteHub.
                     * @param request DeleteHubRequest message or plain object
                     * @returns Promise
                     */
                    public deleteHub(request: google.cloud.networkconnectivity.v1.IDeleteHubRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListHubSpokes.
                     * @param request ListHubSpokesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListHubSpokesResponse
                     */
                    public listHubSpokes(request: google.cloud.networkconnectivity.v1.IListHubSpokesRequest, callback: google.cloud.networkconnectivity.v1.HubService.ListHubSpokesCallback): void;

                    /**
                     * Calls ListHubSpokes.
                     * @param request ListHubSpokesRequest message or plain object
                     * @returns Promise
                     */
                    public listHubSpokes(request: google.cloud.networkconnectivity.v1.IListHubSpokesRequest): Promise<google.cloud.networkconnectivity.v1.ListHubSpokesResponse>;

                    /**
                     * Calls QueryHubStatus.
                     * @param request QueryHubStatusRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryHubStatusResponse
                     */
                    public queryHubStatus(request: google.cloud.networkconnectivity.v1.IQueryHubStatusRequest, callback: google.cloud.networkconnectivity.v1.HubService.QueryHubStatusCallback): void;

                    /**
                     * Calls QueryHubStatus.
                     * @param request QueryHubStatusRequest message or plain object
                     * @returns Promise
                     */
                    public queryHubStatus(request: google.cloud.networkconnectivity.v1.IQueryHubStatusRequest): Promise<google.cloud.networkconnectivity.v1.QueryHubStatusResponse>;

                    /**
                     * Calls ListSpokes.
                     * @param request ListSpokesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListSpokesResponse
                     */
                    public listSpokes(request: google.cloud.networkconnectivity.v1.IListSpokesRequest, callback: google.cloud.networkconnectivity.v1.HubService.ListSpokesCallback): void;

                    /**
                     * Calls ListSpokes.
                     * @param request ListSpokesRequest message or plain object
                     * @returns Promise
                     */
                    public listSpokes(request: google.cloud.networkconnectivity.v1.IListSpokesRequest): Promise<google.cloud.networkconnectivity.v1.ListSpokesResponse>;

                    /**
                     * Calls GetSpoke.
                     * @param request GetSpokeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Spoke
                     */
                    public getSpoke(request: google.cloud.networkconnectivity.v1.IGetSpokeRequest, callback: google.cloud.networkconnectivity.v1.HubService.GetSpokeCallback): void;

                    /**
                     * Calls GetSpoke.
                     * @param request GetSpokeRequest message or plain object
                     * @returns Promise
                     */
                    public getSpoke(request: google.cloud.networkconnectivity.v1.IGetSpokeRequest): Promise<google.cloud.networkconnectivity.v1.Spoke>;

                    /**
                     * Calls CreateSpoke.
                     * @param request CreateSpokeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createSpoke(request: google.cloud.networkconnectivity.v1.ICreateSpokeRequest, callback: google.cloud.networkconnectivity.v1.HubService.CreateSpokeCallback): void;

                    /**
                     * Calls CreateSpoke.
                     * @param request CreateSpokeRequest message or plain object
                     * @returns Promise
                     */
                    public createSpoke(request: google.cloud.networkconnectivity.v1.ICreateSpokeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateSpoke.
                     * @param request UpdateSpokeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateSpoke(request: google.cloud.networkconnectivity.v1.IUpdateSpokeRequest, callback: google.cloud.networkconnectivity.v1.HubService.UpdateSpokeCallback): void;

                    /**
                     * Calls UpdateSpoke.
                     * @param request UpdateSpokeRequest message or plain object
                     * @returns Promise
                     */
                    public updateSpoke(request: google.cloud.networkconnectivity.v1.IUpdateSpokeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RejectHubSpoke.
                     * @param request RejectHubSpokeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public rejectHubSpoke(request: google.cloud.networkconnectivity.v1.IRejectHubSpokeRequest, callback: google.cloud.networkconnectivity.v1.HubService.RejectHubSpokeCallback): void;

                    /**
                     * Calls RejectHubSpoke.
                     * @param request RejectHubSpokeRequest message or plain object
                     * @returns Promise
                     */
                    public rejectHubSpoke(request: google.cloud.networkconnectivity.v1.IRejectHubSpokeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls AcceptHubSpoke.
                     * @param request AcceptHubSpokeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public acceptHubSpoke(request: google.cloud.networkconnectivity.v1.IAcceptHubSpokeRequest, callback: google.cloud.networkconnectivity.v1.HubService.AcceptHubSpokeCallback): void;

                    /**
                     * Calls AcceptHubSpoke.
                     * @param request AcceptHubSpokeRequest message or plain object
                     * @returns Promise
                     */
                    public acceptHubSpoke(request: google.cloud.networkconnectivity.v1.IAcceptHubSpokeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteSpoke.
                     * @param request DeleteSpokeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteSpoke(request: google.cloud.networkconnectivity.v1.IDeleteSpokeRequest, callback: google.cloud.networkconnectivity.v1.HubService.DeleteSpokeCallback): void;

                    /**
                     * Calls DeleteSpoke.
                     * @param request DeleteSpokeRequest message or plain object
                     * @returns Promise
                     */
                    public deleteSpoke(request: google.cloud.networkconnectivity.v1.IDeleteSpokeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetRouteTable.
                     * @param request GetRouteTableRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RouteTable
                     */
                    public getRouteTable(request: google.cloud.networkconnectivity.v1.IGetRouteTableRequest, callback: google.cloud.networkconnectivity.v1.HubService.GetRouteTableCallback): void;

                    /**
                     * Calls GetRouteTable.
                     * @param request GetRouteTableRequest message or plain object
                     * @returns Promise
                     */
                    public getRouteTable(request: google.cloud.networkconnectivity.v1.IGetRouteTableRequest): Promise<google.cloud.networkconnectivity.v1.RouteTable>;

                    /**
                     * Calls GetRoute.
                     * @param request GetRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Route
                     */
                    public getRoute(request: google.cloud.networkconnectivity.v1.IGetRouteRequest, callback: google.cloud.networkconnectivity.v1.HubService.GetRouteCallback): void;

                    /**
                     * Calls GetRoute.
                     * @param request GetRouteRequest message or plain object
                     * @returns Promise
                     */
                    public getRoute(request: google.cloud.networkconnectivity.v1.IGetRouteRequest): Promise<google.cloud.networkconnectivity.v1.Route>;

                    /**
                     * Calls ListRoutes.
                     * @param request ListRoutesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRoutesResponse
                     */
                    public listRoutes(request: google.cloud.networkconnectivity.v1.IListRoutesRequest, callback: google.cloud.networkconnectivity.v1.HubService.ListRoutesCallback): void;

                    /**
                     * Calls ListRoutes.
                     * @param request ListRoutesRequest message or plain object
                     * @returns Promise
                     */
                    public listRoutes(request: google.cloud.networkconnectivity.v1.IListRoutesRequest): Promise<google.cloud.networkconnectivity.v1.ListRoutesResponse>;

                    /**
                     * Calls ListRouteTables.
                     * @param request ListRouteTablesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRouteTablesResponse
                     */
                    public listRouteTables(request: google.cloud.networkconnectivity.v1.IListRouteTablesRequest, callback: google.cloud.networkconnectivity.v1.HubService.ListRouteTablesCallback): void;

                    /**
                     * Calls ListRouteTables.
                     * @param request ListRouteTablesRequest message or plain object
                     * @returns Promise
                     */
                    public listRouteTables(request: google.cloud.networkconnectivity.v1.IListRouteTablesRequest): Promise<google.cloud.networkconnectivity.v1.ListRouteTablesResponse>;

                    /**
                     * Calls GetGroup.
                     * @param request GetGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Group
                     */
                    public getGroup(request: google.cloud.networkconnectivity.v1.IGetGroupRequest, callback: google.cloud.networkconnectivity.v1.HubService.GetGroupCallback): void;

                    /**
                     * Calls GetGroup.
                     * @param request GetGroupRequest message or plain object
                     * @returns Promise
                     */
                    public getGroup(request: google.cloud.networkconnectivity.v1.IGetGroupRequest): Promise<google.cloud.networkconnectivity.v1.Group>;

                    /**
                     * Calls ListGroups.
                     * @param request ListGroupsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListGroupsResponse
                     */
                    public listGroups(request: google.cloud.networkconnectivity.v1.IListGroupsRequest, callback: google.cloud.networkconnectivity.v1.HubService.ListGroupsCallback): void;

                    /**
                     * Calls ListGroups.
                     * @param request ListGroupsRequest message or plain object
                     * @returns Promise
                     */
                    public listGroups(request: google.cloud.networkconnectivity.v1.IListGroupsRequest): Promise<google.cloud.networkconnectivity.v1.ListGroupsResponse>;

                    /**
                     * Calls UpdateGroup.
                     * @param request UpdateGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateGroup(request: google.cloud.networkconnectivity.v1.IUpdateGroupRequest, callback: google.cloud.networkconnectivity.v1.HubService.UpdateGroupCallback): void;

                    /**
                     * Calls UpdateGroup.
                     * @param request UpdateGroupRequest message or plain object
                     * @returns Promise
                     */
                    public updateGroup(request: google.cloud.networkconnectivity.v1.IUpdateGroupRequest): Promise<google.longrunning.Operation>;
                }

                namespace HubService {

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.HubService|listHubs}.
                     * @param error Error, if any
                     * @param [response] ListHubsResponse
                     */
                    type ListHubsCallback = (error: (Error|null), response?: google.cloud.networkconnectivity.v1.ListHubsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.HubService|getHub}.
                     * @param error Error, if any
                     * @param [response] Hub
                     */
                    type GetHubCallback = (error: (Error|null), response?: google.cloud.networkconnectivity.v1.Hub) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.HubService|createHub}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateHubCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.HubService|updateHub}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateHubCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.HubService|deleteHub}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteHubCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.HubService|listHubSpokes}.
                     * @param error Error, if any
                     * @param [response] ListHubSpokesResponse
                     */
                    type ListHubSpokesCallback = (error: (Error|null), response?: google.cloud.networkconnectivity.v1.ListHubSpokesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.HubService|queryHubStatus}.
                     * @param error Error, if any
                     * @param [response] QueryHubStatusResponse
                     */
                    type QueryHubStatusCallback = (error: (Error|null), response?: google.cloud.networkconnectivity.v1.QueryHubStatusResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.HubService|listSpokes}.
                     * @param error Error, if any
                     * @param [response] ListSpokesResponse
                     */
                    type ListSpokesCallback = (error: (Error|null), response?: google.cloud.networkconnectivity.v1.ListSpokesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.HubService|getSpoke}.
                     * @param error Error, if any
                     * @param [response] Spoke
                     */
                    type GetSpokeCallback = (error: (Error|null), response?: google.cloud.networkconnectivity.v1.Spoke) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.HubService|createSpoke}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateSpokeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.HubService|updateSpoke}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateSpokeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.HubService|rejectHubSpoke}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RejectHubSpokeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.HubService|acceptHubSpoke}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type AcceptHubSpokeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.HubService|deleteSpoke}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteSpokeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.HubService|getRouteTable}.
                     * @param error Error, if any
                     * @param [response] RouteTable
                     */
                    type GetRouteTableCallback = (error: (Error|null), response?: google.cloud.networkconnectivity.v1.RouteTable) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.HubService|getRoute}.
                     * @param error Error, if any
                     * @param [response] Route
                     */
                    type GetRouteCallback = (error: (Error|null), response?: google.cloud.networkconnectivity.v1.Route) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.HubService|listRoutes}.
                     * @param error Error, if any
                     * @param [response] ListRoutesResponse
                     */
                    type ListRoutesCallback = (error: (Error|null), response?: google.cloud.networkconnectivity.v1.ListRoutesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.HubService|listRouteTables}.
                     * @param error Error, if any
                     * @param [response] ListRouteTablesResponse
                     */
                    type ListRouteTablesCallback = (error: (Error|null), response?: google.cloud.networkconnectivity.v1.ListRouteTablesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.HubService|getGroup}.
                     * @param error Error, if any
                     * @param [response] Group
                     */
                    type GetGroupCallback = (error: (Error|null), response?: google.cloud.networkconnectivity.v1.Group) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.HubService|listGroups}.
                     * @param error Error, if any
                     * @param [response] ListGroupsResponse
                     */
                    type ListGroupsCallback = (error: (Error|null), response?: google.cloud.networkconnectivity.v1.ListGroupsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.HubService|updateGroup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateGroupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** LocationFeature enum. */
                enum LocationFeature {
                    LOCATION_FEATURE_UNSPECIFIED = 0,
                    SITE_TO_CLOUD_SPOKES = 1,
                    SITE_TO_SITE_SPOKES = 2
                }

                /** RouteType enum. */
                enum RouteType {
                    ROUTE_TYPE_UNSPECIFIED = 0,
                    VPC_PRIMARY_SUBNET = 1,
                    VPC_SECONDARY_SUBNET = 2,
                    DYNAMIC_ROUTE = 3
                }

                /** State enum. */
                enum State {
                    STATE_UNSPECIFIED = 0,
                    CREATING = 1,
                    ACTIVE = 2,
                    DELETING = 3,
                    ACCEPTING = 8,
                    REJECTING = 9,
                    UPDATING = 6,
                    INACTIVE = 7,
                    OBSOLETE = 10
                }

                /** SpokeType enum. */
                enum SpokeType {
                    SPOKE_TYPE_UNSPECIFIED = 0,
                    VPN_TUNNEL = 1,
                    INTERCONNECT_ATTACHMENT = 2,
                    ROUTER_APPLIANCE = 3,
                    VPC_NETWORK = 4,
                    PRODUCER_VPC_NETWORK = 7
                }

                /** PolicyMode enum. */
                enum PolicyMode {
                    POLICY_MODE_UNSPECIFIED = 0,
                    PRESET = 1
                }

                /** PresetTopology enum. */
                enum PresetTopology {
                    PRESET_TOPOLOGY_UNSPECIFIED = 0,
                    MESH = 2,
                    STAR = 3
                }

                /** Properties of a Hub. */
                interface IHub {

                    /** Hub name */
                    name?: (string|null);

                    /** Hub createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Hub updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Hub labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Hub description */
                    description?: (string|null);

                    /** Hub uniqueId */
                    uniqueId?: (string|null);

                    /** Hub state */
                    state?: (google.cloud.networkconnectivity.v1.State|keyof typeof google.cloud.networkconnectivity.v1.State|null);

                    /** Hub routingVpcs */
                    routingVpcs?: (google.cloud.networkconnectivity.v1.IRoutingVPC[]|null);

                    /** Hub routeTables */
                    routeTables?: (string[]|null);

                    /** Hub spokeSummary */
                    spokeSummary?: (google.cloud.networkconnectivity.v1.ISpokeSummary|null);

                    /** Hub policyMode */
                    policyMode?: (google.cloud.networkconnectivity.v1.PolicyMode|keyof typeof google.cloud.networkconnectivity.v1.PolicyMode|null);

                    /** Hub presetTopology */
                    presetTopology?: (google.cloud.networkconnectivity.v1.PresetTopology|keyof typeof google.cloud.networkconnectivity.v1.PresetTopology|null);

                    /** Hub exportPsc */
                    exportPsc?: (boolean|null);
                }

                /** Represents a Hub. */
                class Hub implements IHub {

                    /**
                     * Constructs a new Hub.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IHub);

                    /** Hub name. */
                    public name: string;

                    /** Hub createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Hub updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Hub labels. */
                    public labels: { [k: string]: string };

                    /** Hub description. */
                    public description: string;

                    /** Hub uniqueId. */
                    public uniqueId: string;

                    /** Hub state. */
                    public state: (google.cloud.networkconnectivity.v1.State|keyof typeof google.cloud.networkconnectivity.v1.State);

                    /** Hub routingVpcs. */
                    public routingVpcs: google.cloud.networkconnectivity.v1.IRoutingVPC[];

                    /** Hub routeTables. */
                    public routeTables: string[];

                    /** Hub spokeSummary. */
                    public spokeSummary?: (google.cloud.networkconnectivity.v1.ISpokeSummary|null);

                    /** Hub policyMode. */
                    public policyMode: (google.cloud.networkconnectivity.v1.PolicyMode|keyof typeof google.cloud.networkconnectivity.v1.PolicyMode);

                    /** Hub presetTopology. */
                    public presetTopology: (google.cloud.networkconnectivity.v1.PresetTopology|keyof typeof google.cloud.networkconnectivity.v1.PresetTopology);

                    /** Hub exportPsc. */
                    public exportPsc?: (boolean|null);

                    /** Hub _exportPsc. */
                    public _exportPsc?: "exportPsc";

                    /**
                     * Creates a new Hub instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Hub instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IHub): google.cloud.networkconnectivity.v1.Hub;

                    /**
                     * Encodes the specified Hub message. Does not implicitly {@link google.cloud.networkconnectivity.v1.Hub.verify|verify} messages.
                     * @param message Hub message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IHub, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Hub message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.Hub.verify|verify} messages.
                     * @param message Hub message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IHub, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Hub message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Hub
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.Hub;

                    /**
                     * Decodes a Hub message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Hub
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.Hub;

                    /**
                     * Verifies a Hub message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Hub message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Hub
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.Hub;

                    /**
                     * Creates a plain object from a Hub message. Also converts values to other types if specified.
                     * @param message Hub
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.Hub, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Hub to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Hub
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RoutingVPC. */
                interface IRoutingVPC {

                    /** RoutingVPC uri */
                    uri?: (string|null);

                    /** RoutingVPC requiredForNewSiteToSiteDataTransferSpokes */
                    requiredForNewSiteToSiteDataTransferSpokes?: (boolean|null);
                }

                /** Represents a RoutingVPC. */
                class RoutingVPC implements IRoutingVPC {

                    /**
                     * Constructs a new RoutingVPC.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IRoutingVPC);

                    /** RoutingVPC uri. */
                    public uri: string;

                    /** RoutingVPC requiredForNewSiteToSiteDataTransferSpokes. */
                    public requiredForNewSiteToSiteDataTransferSpokes: boolean;

                    /**
                     * Creates a new RoutingVPC instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RoutingVPC instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IRoutingVPC): google.cloud.networkconnectivity.v1.RoutingVPC;

                    /**
                     * Encodes the specified RoutingVPC message. Does not implicitly {@link google.cloud.networkconnectivity.v1.RoutingVPC.verify|verify} messages.
                     * @param message RoutingVPC message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IRoutingVPC, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RoutingVPC message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.RoutingVPC.verify|verify} messages.
                     * @param message RoutingVPC message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IRoutingVPC, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RoutingVPC message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RoutingVPC
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.RoutingVPC;

                    /**
                     * Decodes a RoutingVPC message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RoutingVPC
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.RoutingVPC;

                    /**
                     * Verifies a RoutingVPC message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RoutingVPC message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RoutingVPC
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.RoutingVPC;

                    /**
                     * Creates a plain object from a RoutingVPC message. Also converts values to other types if specified.
                     * @param message RoutingVPC
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.RoutingVPC, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RoutingVPC to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RoutingVPC
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Spoke. */
                interface ISpoke {

                    /** Spoke name */
                    name?: (string|null);

                    /** Spoke createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Spoke updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Spoke labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Spoke description */
                    description?: (string|null);

                    /** Spoke hub */
                    hub?: (string|null);

                    /** Spoke group */
                    group?: (string|null);

                    /** Spoke linkedVpnTunnels */
                    linkedVpnTunnels?: (google.cloud.networkconnectivity.v1.ILinkedVpnTunnels|null);

                    /** Spoke linkedInterconnectAttachments */
                    linkedInterconnectAttachments?: (google.cloud.networkconnectivity.v1.ILinkedInterconnectAttachments|null);

                    /** Spoke linkedRouterApplianceInstances */
                    linkedRouterApplianceInstances?: (google.cloud.networkconnectivity.v1.ILinkedRouterApplianceInstances|null);

                    /** Spoke linkedVpcNetwork */
                    linkedVpcNetwork?: (google.cloud.networkconnectivity.v1.ILinkedVpcNetwork|null);

                    /** Spoke linkedProducerVpcNetwork */
                    linkedProducerVpcNetwork?: (google.cloud.networkconnectivity.v1.ILinkedProducerVpcNetwork|null);

                    /** Spoke uniqueId */
                    uniqueId?: (string|null);

                    /** Spoke state */
                    state?: (google.cloud.networkconnectivity.v1.State|keyof typeof google.cloud.networkconnectivity.v1.State|null);

                    /** Spoke reasons */
                    reasons?: (google.cloud.networkconnectivity.v1.Spoke.IStateReason[]|null);

                    /** Spoke spokeType */
                    spokeType?: (google.cloud.networkconnectivity.v1.SpokeType|keyof typeof google.cloud.networkconnectivity.v1.SpokeType|null);
                }

                /** Represents a Spoke. */
                class Spoke implements ISpoke {

                    /**
                     * Constructs a new Spoke.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.ISpoke);

                    /** Spoke name. */
                    public name: string;

                    /** Spoke createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Spoke updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Spoke labels. */
                    public labels: { [k: string]: string };

                    /** Spoke description. */
                    public description: string;

                    /** Spoke hub. */
                    public hub: string;

                    /** Spoke group. */
                    public group: string;

                    /** Spoke linkedVpnTunnels. */
                    public linkedVpnTunnels?: (google.cloud.networkconnectivity.v1.ILinkedVpnTunnels|null);

                    /** Spoke linkedInterconnectAttachments. */
                    public linkedInterconnectAttachments?: (google.cloud.networkconnectivity.v1.ILinkedInterconnectAttachments|null);

                    /** Spoke linkedRouterApplianceInstances. */
                    public linkedRouterApplianceInstances?: (google.cloud.networkconnectivity.v1.ILinkedRouterApplianceInstances|null);

                    /** Spoke linkedVpcNetwork. */
                    public linkedVpcNetwork?: (google.cloud.networkconnectivity.v1.ILinkedVpcNetwork|null);

                    /** Spoke linkedProducerVpcNetwork. */
                    public linkedProducerVpcNetwork?: (google.cloud.networkconnectivity.v1.ILinkedProducerVpcNetwork|null);

                    /** Spoke uniqueId. */
                    public uniqueId: string;

                    /** Spoke state. */
                    public state: (google.cloud.networkconnectivity.v1.State|keyof typeof google.cloud.networkconnectivity.v1.State);

                    /** Spoke reasons. */
                    public reasons: google.cloud.networkconnectivity.v1.Spoke.IStateReason[];

                    /** Spoke spokeType. */
                    public spokeType: (google.cloud.networkconnectivity.v1.SpokeType|keyof typeof google.cloud.networkconnectivity.v1.SpokeType);

                    /**
                     * Creates a new Spoke instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Spoke instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.ISpoke): google.cloud.networkconnectivity.v1.Spoke;

                    /**
                     * Encodes the specified Spoke message. Does not implicitly {@link google.cloud.networkconnectivity.v1.Spoke.verify|verify} messages.
                     * @param message Spoke message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.ISpoke, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Spoke message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.Spoke.verify|verify} messages.
                     * @param message Spoke message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.ISpoke, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Spoke message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Spoke
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.Spoke;

                    /**
                     * Decodes a Spoke message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Spoke
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.Spoke;

                    /**
                     * Verifies a Spoke message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Spoke message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Spoke
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.Spoke;

                    /**
                     * Creates a plain object from a Spoke message. Also converts values to other types if specified.
                     * @param message Spoke
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.Spoke, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Spoke to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Spoke
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Spoke {

                    /** Properties of a StateReason. */
                    interface IStateReason {

                        /** StateReason code */
                        code?: (google.cloud.networkconnectivity.v1.Spoke.StateReason.Code|keyof typeof google.cloud.networkconnectivity.v1.Spoke.StateReason.Code|null);

                        /** StateReason message */
                        message?: (string|null);

                        /** StateReason userDetails */
                        userDetails?: (string|null);
                    }

                    /** Represents a StateReason. */
                    class StateReason implements IStateReason {

                        /**
                         * Constructs a new StateReason.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkconnectivity.v1.Spoke.IStateReason);

                        /** StateReason code. */
                        public code: (google.cloud.networkconnectivity.v1.Spoke.StateReason.Code|keyof typeof google.cloud.networkconnectivity.v1.Spoke.StateReason.Code);

                        /** StateReason message. */
                        public message: string;

                        /** StateReason userDetails. */
                        public userDetails: string;

                        /**
                         * Creates a new StateReason instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StateReason instance
                         */
                        public static create(properties?: google.cloud.networkconnectivity.v1.Spoke.IStateReason): google.cloud.networkconnectivity.v1.Spoke.StateReason;

                        /**
                         * Encodes the specified StateReason message. Does not implicitly {@link google.cloud.networkconnectivity.v1.Spoke.StateReason.verify|verify} messages.
                         * @param message StateReason message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkconnectivity.v1.Spoke.IStateReason, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StateReason message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.Spoke.StateReason.verify|verify} messages.
                         * @param message StateReason message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkconnectivity.v1.Spoke.IStateReason, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StateReason message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StateReason
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.Spoke.StateReason;

                        /**
                         * Decodes a StateReason message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StateReason
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.Spoke.StateReason;

                        /**
                         * Verifies a StateReason message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StateReason message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StateReason
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.Spoke.StateReason;

                        /**
                         * Creates a plain object from a StateReason message. Also converts values to other types if specified.
                         * @param message StateReason
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkconnectivity.v1.Spoke.StateReason, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StateReason to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for StateReason
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace StateReason {

                        /** Code enum. */
                        enum Code {
                            CODE_UNSPECIFIED = 0,
                            PENDING_REVIEW = 1,
                            REJECTED = 2,
                            PAUSED = 3,
                            FAILED = 4
                        }
                    }
                }

                /** Properties of a RouteTable. */
                interface IRouteTable {

                    /** RouteTable name */
                    name?: (string|null);

                    /** RouteTable createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** RouteTable updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** RouteTable labels */
                    labels?: ({ [k: string]: string }|null);

                    /** RouteTable description */
                    description?: (string|null);

                    /** RouteTable uid */
                    uid?: (string|null);

                    /** RouteTable state */
                    state?: (google.cloud.networkconnectivity.v1.State|keyof typeof google.cloud.networkconnectivity.v1.State|null);
                }

                /** Represents a RouteTable. */
                class RouteTable implements IRouteTable {

                    /**
                     * Constructs a new RouteTable.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IRouteTable);

                    /** RouteTable name. */
                    public name: string;

                    /** RouteTable createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** RouteTable updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** RouteTable labels. */
                    public labels: { [k: string]: string };

                    /** RouteTable description. */
                    public description: string;

                    /** RouteTable uid. */
                    public uid: string;

                    /** RouteTable state. */
                    public state: (google.cloud.networkconnectivity.v1.State|keyof typeof google.cloud.networkconnectivity.v1.State);

                    /**
                     * Creates a new RouteTable instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RouteTable instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IRouteTable): google.cloud.networkconnectivity.v1.RouteTable;

                    /**
                     * Encodes the specified RouteTable message. Does not implicitly {@link google.cloud.networkconnectivity.v1.RouteTable.verify|verify} messages.
                     * @param message RouteTable message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IRouteTable, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RouteTable message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.RouteTable.verify|verify} messages.
                     * @param message RouteTable message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IRouteTable, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RouteTable message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RouteTable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.RouteTable;

                    /**
                     * Decodes a RouteTable message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RouteTable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.RouteTable;

                    /**
                     * Verifies a RouteTable message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RouteTable message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RouteTable
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.RouteTable;

                    /**
                     * Creates a plain object from a RouteTable message. Also converts values to other types if specified.
                     * @param message RouteTable
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.RouteTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RouteTable to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RouteTable
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Route. */
                interface IRoute {

                    /** Route name */
                    name?: (string|null);

                    /** Route createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Route updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Route ipCidrRange */
                    ipCidrRange?: (string|null);

                    /** Route type */
                    type?: (google.cloud.networkconnectivity.v1.RouteType|keyof typeof google.cloud.networkconnectivity.v1.RouteType|null);

                    /** Route nextHopVpcNetwork */
                    nextHopVpcNetwork?: (google.cloud.networkconnectivity.v1.INextHopVpcNetwork|null);

                    /** Route labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Route description */
                    description?: (string|null);

                    /** Route uid */
                    uid?: (string|null);

                    /** Route state */
                    state?: (google.cloud.networkconnectivity.v1.State|keyof typeof google.cloud.networkconnectivity.v1.State|null);

                    /** Route spoke */
                    spoke?: (string|null);

                    /** Route location */
                    location?: (string|null);

                    /** Route priority */
                    priority?: (number|Long|string|null);

                    /** Route nextHopVpnTunnel */
                    nextHopVpnTunnel?: (google.cloud.networkconnectivity.v1.INextHopVPNTunnel|null);

                    /** Route nextHopRouterApplianceInstance */
                    nextHopRouterApplianceInstance?: (google.cloud.networkconnectivity.v1.INextHopRouterApplianceInstance|null);

                    /** Route nextHopInterconnectAttachment */
                    nextHopInterconnectAttachment?: (google.cloud.networkconnectivity.v1.INextHopInterconnectAttachment|null);
                }

                /** Represents a Route. */
                class Route implements IRoute {

                    /**
                     * Constructs a new Route.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IRoute);

                    /** Route name. */
                    public name: string;

                    /** Route createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Route updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Route ipCidrRange. */
                    public ipCidrRange: string;

                    /** Route type. */
                    public type: (google.cloud.networkconnectivity.v1.RouteType|keyof typeof google.cloud.networkconnectivity.v1.RouteType);

                    /** Route nextHopVpcNetwork. */
                    public nextHopVpcNetwork?: (google.cloud.networkconnectivity.v1.INextHopVpcNetwork|null);

                    /** Route labels. */
                    public labels: { [k: string]: string };

                    /** Route description. */
                    public description: string;

                    /** Route uid. */
                    public uid: string;

                    /** Route state. */
                    public state: (google.cloud.networkconnectivity.v1.State|keyof typeof google.cloud.networkconnectivity.v1.State);

                    /** Route spoke. */
                    public spoke: string;

                    /** Route location. */
                    public location: string;

                    /** Route priority. */
                    public priority: (number|Long|string);

                    /** Route nextHopVpnTunnel. */
                    public nextHopVpnTunnel?: (google.cloud.networkconnectivity.v1.INextHopVPNTunnel|null);

                    /** Route nextHopRouterApplianceInstance. */
                    public nextHopRouterApplianceInstance?: (google.cloud.networkconnectivity.v1.INextHopRouterApplianceInstance|null);

                    /** Route nextHopInterconnectAttachment. */
                    public nextHopInterconnectAttachment?: (google.cloud.networkconnectivity.v1.INextHopInterconnectAttachment|null);

                    /**
                     * Creates a new Route instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Route instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IRoute): google.cloud.networkconnectivity.v1.Route;

                    /**
                     * Encodes the specified Route message. Does not implicitly {@link google.cloud.networkconnectivity.v1.Route.verify|verify} messages.
                     * @param message Route message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Route message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.Route.verify|verify} messages.
                     * @param message Route message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Route message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Route
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.Route;

                    /**
                     * Decodes a Route message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Route
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.Route;

                    /**
                     * Verifies a Route message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Route message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Route
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.Route;

                    /**
                     * Creates a plain object from a Route message. Also converts values to other types if specified.
                     * @param message Route
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.Route, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Route to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Route
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Group. */
                interface IGroup {

                    /** Group name */
                    name?: (string|null);

                    /** Group createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Group updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Group labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Group description */
                    description?: (string|null);

                    /** Group uid */
                    uid?: (string|null);

                    /** Group state */
                    state?: (google.cloud.networkconnectivity.v1.State|keyof typeof google.cloud.networkconnectivity.v1.State|null);

                    /** Group autoAccept */
                    autoAccept?: (google.cloud.networkconnectivity.v1.IAutoAccept|null);

                    /** Group routeTable */
                    routeTable?: (string|null);
                }

                /** Represents a Group. */
                class Group implements IGroup {

                    /**
                     * Constructs a new Group.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IGroup);

                    /** Group name. */
                    public name: string;

                    /** Group createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Group updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Group labels. */
                    public labels: { [k: string]: string };

                    /** Group description. */
                    public description: string;

                    /** Group uid. */
                    public uid: string;

                    /** Group state. */
                    public state: (google.cloud.networkconnectivity.v1.State|keyof typeof google.cloud.networkconnectivity.v1.State);

                    /** Group autoAccept. */
                    public autoAccept?: (google.cloud.networkconnectivity.v1.IAutoAccept|null);

                    /** Group routeTable. */
                    public routeTable: string;

                    /**
                     * Creates a new Group instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Group instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IGroup): google.cloud.networkconnectivity.v1.Group;

                    /**
                     * Encodes the specified Group message. Does not implicitly {@link google.cloud.networkconnectivity.v1.Group.verify|verify} messages.
                     * @param message Group message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Group message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.Group.verify|verify} messages.
                     * @param message Group message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Group message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Group
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.Group;

                    /**
                     * Decodes a Group message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Group
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.Group;

                    /**
                     * Verifies a Group message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Group message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Group
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.Group;

                    /**
                     * Creates a plain object from a Group message. Also converts values to other types if specified.
                     * @param message Group
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.Group, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Group to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Group
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AutoAccept. */
                interface IAutoAccept {

                    /** AutoAccept autoAcceptProjects */
                    autoAcceptProjects?: (string[]|null);
                }

                /** Represents an AutoAccept. */
                class AutoAccept implements IAutoAccept {

                    /**
                     * Constructs a new AutoAccept.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IAutoAccept);

                    /** AutoAccept autoAcceptProjects. */
                    public autoAcceptProjects: string[];

                    /**
                     * Creates a new AutoAccept instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AutoAccept instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IAutoAccept): google.cloud.networkconnectivity.v1.AutoAccept;

                    /**
                     * Encodes the specified AutoAccept message. Does not implicitly {@link google.cloud.networkconnectivity.v1.AutoAccept.verify|verify} messages.
                     * @param message AutoAccept message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IAutoAccept, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AutoAccept message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.AutoAccept.verify|verify} messages.
                     * @param message AutoAccept message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IAutoAccept, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AutoAccept message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AutoAccept
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.AutoAccept;

                    /**
                     * Decodes an AutoAccept message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AutoAccept
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.AutoAccept;

                    /**
                     * Verifies an AutoAccept message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AutoAccept message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AutoAccept
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.AutoAccept;

                    /**
                     * Creates a plain object from an AutoAccept message. Also converts values to other types if specified.
                     * @param message AutoAccept
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.AutoAccept, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AutoAccept to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AutoAccept
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListHubsRequest. */
                interface IListHubsRequest {

                    /** ListHubsRequest parent */
                    parent?: (string|null);

                    /** ListHubsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListHubsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListHubsRequest filter */
                    filter?: (string|null);

                    /** ListHubsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListHubsRequest. */
                class ListHubsRequest implements IListHubsRequest {

                    /**
                     * Constructs a new ListHubsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IListHubsRequest);

                    /** ListHubsRequest parent. */
                    public parent: string;

                    /** ListHubsRequest pageSize. */
                    public pageSize: number;

                    /** ListHubsRequest pageToken. */
                    public pageToken: string;

                    /** ListHubsRequest filter. */
                    public filter: string;

                    /** ListHubsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListHubsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListHubsRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IListHubsRequest): google.cloud.networkconnectivity.v1.ListHubsRequest;

                    /**
                     * Encodes the specified ListHubsRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListHubsRequest.verify|verify} messages.
                     * @param message ListHubsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IListHubsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListHubsRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListHubsRequest.verify|verify} messages.
                     * @param message ListHubsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IListHubsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListHubsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListHubsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.ListHubsRequest;

                    /**
                     * Decodes a ListHubsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListHubsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.ListHubsRequest;

                    /**
                     * Verifies a ListHubsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListHubsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListHubsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.ListHubsRequest;

                    /**
                     * Creates a plain object from a ListHubsRequest message. Also converts values to other types if specified.
                     * @param message ListHubsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.ListHubsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListHubsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListHubsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListHubsResponse. */
                interface IListHubsResponse {

                    /** ListHubsResponse hubs */
                    hubs?: (google.cloud.networkconnectivity.v1.IHub[]|null);

                    /** ListHubsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListHubsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListHubsResponse. */
                class ListHubsResponse implements IListHubsResponse {

                    /**
                     * Constructs a new ListHubsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IListHubsResponse);

                    /** ListHubsResponse hubs. */
                    public hubs: google.cloud.networkconnectivity.v1.IHub[];

                    /** ListHubsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListHubsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListHubsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListHubsResponse instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IListHubsResponse): google.cloud.networkconnectivity.v1.ListHubsResponse;

                    /**
                     * Encodes the specified ListHubsResponse message. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListHubsResponse.verify|verify} messages.
                     * @param message ListHubsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IListHubsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListHubsResponse message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListHubsResponse.verify|verify} messages.
                     * @param message ListHubsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IListHubsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListHubsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListHubsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.ListHubsResponse;

                    /**
                     * Decodes a ListHubsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListHubsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.ListHubsResponse;

                    /**
                     * Verifies a ListHubsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListHubsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListHubsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.ListHubsResponse;

                    /**
                     * Creates a plain object from a ListHubsResponse message. Also converts values to other types if specified.
                     * @param message ListHubsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.ListHubsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListHubsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListHubsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetHubRequest. */
                interface IGetHubRequest {

                    /** GetHubRequest name */
                    name?: (string|null);
                }

                /** Represents a GetHubRequest. */
                class GetHubRequest implements IGetHubRequest {

                    /**
                     * Constructs a new GetHubRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IGetHubRequest);

                    /** GetHubRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetHubRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetHubRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IGetHubRequest): google.cloud.networkconnectivity.v1.GetHubRequest;

                    /**
                     * Encodes the specified GetHubRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.GetHubRequest.verify|verify} messages.
                     * @param message GetHubRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IGetHubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetHubRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.GetHubRequest.verify|verify} messages.
                     * @param message GetHubRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IGetHubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetHubRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetHubRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.GetHubRequest;

                    /**
                     * Decodes a GetHubRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetHubRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.GetHubRequest;

                    /**
                     * Verifies a GetHubRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetHubRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetHubRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.GetHubRequest;

                    /**
                     * Creates a plain object from a GetHubRequest message. Also converts values to other types if specified.
                     * @param message GetHubRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.GetHubRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetHubRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetHubRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateHubRequest. */
                interface ICreateHubRequest {

                    /** CreateHubRequest parent */
                    parent?: (string|null);

                    /** CreateHubRequest hubId */
                    hubId?: (string|null);

                    /** CreateHubRequest hub */
                    hub?: (google.cloud.networkconnectivity.v1.IHub|null);

                    /** CreateHubRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateHubRequest. */
                class CreateHubRequest implements ICreateHubRequest {

                    /**
                     * Constructs a new CreateHubRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.ICreateHubRequest);

                    /** CreateHubRequest parent. */
                    public parent: string;

                    /** CreateHubRequest hubId. */
                    public hubId: string;

                    /** CreateHubRequest hub. */
                    public hub?: (google.cloud.networkconnectivity.v1.IHub|null);

                    /** CreateHubRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateHubRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateHubRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.ICreateHubRequest): google.cloud.networkconnectivity.v1.CreateHubRequest;

                    /**
                     * Encodes the specified CreateHubRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.CreateHubRequest.verify|verify} messages.
                     * @param message CreateHubRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.ICreateHubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateHubRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.CreateHubRequest.verify|verify} messages.
                     * @param message CreateHubRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.ICreateHubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateHubRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateHubRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.CreateHubRequest;

                    /**
                     * Decodes a CreateHubRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateHubRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.CreateHubRequest;

                    /**
                     * Verifies a CreateHubRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateHubRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateHubRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.CreateHubRequest;

                    /**
                     * Creates a plain object from a CreateHubRequest message. Also converts values to other types if specified.
                     * @param message CreateHubRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.CreateHubRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateHubRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateHubRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateHubRequest. */
                interface IUpdateHubRequest {

                    /** UpdateHubRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateHubRequest hub */
                    hub?: (google.cloud.networkconnectivity.v1.IHub|null);

                    /** UpdateHubRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateHubRequest. */
                class UpdateHubRequest implements IUpdateHubRequest {

                    /**
                     * Constructs a new UpdateHubRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IUpdateHubRequest);

                    /** UpdateHubRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateHubRequest hub. */
                    public hub?: (google.cloud.networkconnectivity.v1.IHub|null);

                    /** UpdateHubRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateHubRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateHubRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IUpdateHubRequest): google.cloud.networkconnectivity.v1.UpdateHubRequest;

                    /**
                     * Encodes the specified UpdateHubRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.UpdateHubRequest.verify|verify} messages.
                     * @param message UpdateHubRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IUpdateHubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateHubRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.UpdateHubRequest.verify|verify} messages.
                     * @param message UpdateHubRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IUpdateHubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateHubRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateHubRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.UpdateHubRequest;

                    /**
                     * Decodes an UpdateHubRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateHubRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.UpdateHubRequest;

                    /**
                     * Verifies an UpdateHubRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateHubRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateHubRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.UpdateHubRequest;

                    /**
                     * Creates a plain object from an UpdateHubRequest message. Also converts values to other types if specified.
                     * @param message UpdateHubRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.UpdateHubRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateHubRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateHubRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteHubRequest. */
                interface IDeleteHubRequest {

                    /** DeleteHubRequest name */
                    name?: (string|null);

                    /** DeleteHubRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteHubRequest. */
                class DeleteHubRequest implements IDeleteHubRequest {

                    /**
                     * Constructs a new DeleteHubRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IDeleteHubRequest);

                    /** DeleteHubRequest name. */
                    public name: string;

                    /** DeleteHubRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteHubRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteHubRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IDeleteHubRequest): google.cloud.networkconnectivity.v1.DeleteHubRequest;

                    /**
                     * Encodes the specified DeleteHubRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.DeleteHubRequest.verify|verify} messages.
                     * @param message DeleteHubRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IDeleteHubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteHubRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.DeleteHubRequest.verify|verify} messages.
                     * @param message DeleteHubRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IDeleteHubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteHubRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteHubRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.DeleteHubRequest;

                    /**
                     * Decodes a DeleteHubRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteHubRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.DeleteHubRequest;

                    /**
                     * Verifies a DeleteHubRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteHubRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteHubRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.DeleteHubRequest;

                    /**
                     * Creates a plain object from a DeleteHubRequest message. Also converts values to other types if specified.
                     * @param message DeleteHubRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.DeleteHubRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteHubRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteHubRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListHubSpokesRequest. */
                interface IListHubSpokesRequest {

                    /** ListHubSpokesRequest name */
                    name?: (string|null);

                    /** ListHubSpokesRequest spokeLocations */
                    spokeLocations?: (string[]|null);

                    /** ListHubSpokesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListHubSpokesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListHubSpokesRequest filter */
                    filter?: (string|null);

                    /** ListHubSpokesRequest orderBy */
                    orderBy?: (string|null);

                    /** ListHubSpokesRequest view */
                    view?: (google.cloud.networkconnectivity.v1.ListHubSpokesRequest.SpokeView|keyof typeof google.cloud.networkconnectivity.v1.ListHubSpokesRequest.SpokeView|null);
                }

                /** Represents a ListHubSpokesRequest. */
                class ListHubSpokesRequest implements IListHubSpokesRequest {

                    /**
                     * Constructs a new ListHubSpokesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IListHubSpokesRequest);

                    /** ListHubSpokesRequest name. */
                    public name: string;

                    /** ListHubSpokesRequest spokeLocations. */
                    public spokeLocations: string[];

                    /** ListHubSpokesRequest pageSize. */
                    public pageSize: number;

                    /** ListHubSpokesRequest pageToken. */
                    public pageToken: string;

                    /** ListHubSpokesRequest filter. */
                    public filter: string;

                    /** ListHubSpokesRequest orderBy. */
                    public orderBy: string;

                    /** ListHubSpokesRequest view. */
                    public view: (google.cloud.networkconnectivity.v1.ListHubSpokesRequest.SpokeView|keyof typeof google.cloud.networkconnectivity.v1.ListHubSpokesRequest.SpokeView);

                    /**
                     * Creates a new ListHubSpokesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListHubSpokesRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IListHubSpokesRequest): google.cloud.networkconnectivity.v1.ListHubSpokesRequest;

                    /**
                     * Encodes the specified ListHubSpokesRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListHubSpokesRequest.verify|verify} messages.
                     * @param message ListHubSpokesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IListHubSpokesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListHubSpokesRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListHubSpokesRequest.verify|verify} messages.
                     * @param message ListHubSpokesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IListHubSpokesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListHubSpokesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListHubSpokesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.ListHubSpokesRequest;

                    /**
                     * Decodes a ListHubSpokesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListHubSpokesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.ListHubSpokesRequest;

                    /**
                     * Verifies a ListHubSpokesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListHubSpokesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListHubSpokesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.ListHubSpokesRequest;

                    /**
                     * Creates a plain object from a ListHubSpokesRequest message. Also converts values to other types if specified.
                     * @param message ListHubSpokesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.ListHubSpokesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListHubSpokesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListHubSpokesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ListHubSpokesRequest {

                    /** SpokeView enum. */
                    enum SpokeView {
                        SPOKE_VIEW_UNSPECIFIED = 0,
                        BASIC = 1,
                        DETAILED = 2
                    }
                }

                /** Properties of a ListHubSpokesResponse. */
                interface IListHubSpokesResponse {

                    /** ListHubSpokesResponse spokes */
                    spokes?: (google.cloud.networkconnectivity.v1.ISpoke[]|null);

                    /** ListHubSpokesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListHubSpokesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListHubSpokesResponse. */
                class ListHubSpokesResponse implements IListHubSpokesResponse {

                    /**
                     * Constructs a new ListHubSpokesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IListHubSpokesResponse);

                    /** ListHubSpokesResponse spokes. */
                    public spokes: google.cloud.networkconnectivity.v1.ISpoke[];

                    /** ListHubSpokesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListHubSpokesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListHubSpokesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListHubSpokesResponse instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IListHubSpokesResponse): google.cloud.networkconnectivity.v1.ListHubSpokesResponse;

                    /**
                     * Encodes the specified ListHubSpokesResponse message. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListHubSpokesResponse.verify|verify} messages.
                     * @param message ListHubSpokesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IListHubSpokesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListHubSpokesResponse message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListHubSpokesResponse.verify|verify} messages.
                     * @param message ListHubSpokesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IListHubSpokesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListHubSpokesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListHubSpokesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.ListHubSpokesResponse;

                    /**
                     * Decodes a ListHubSpokesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListHubSpokesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.ListHubSpokesResponse;

                    /**
                     * Verifies a ListHubSpokesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListHubSpokesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListHubSpokesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.ListHubSpokesResponse;

                    /**
                     * Creates a plain object from a ListHubSpokesResponse message. Also converts values to other types if specified.
                     * @param message ListHubSpokesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.ListHubSpokesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListHubSpokesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListHubSpokesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QueryHubStatusRequest. */
                interface IQueryHubStatusRequest {

                    /** QueryHubStatusRequest name */
                    name?: (string|null);

                    /** QueryHubStatusRequest pageSize */
                    pageSize?: (number|null);

                    /** QueryHubStatusRequest pageToken */
                    pageToken?: (string|null);

                    /** QueryHubStatusRequest filter */
                    filter?: (string|null);

                    /** QueryHubStatusRequest orderBy */
                    orderBy?: (string|null);

                    /** QueryHubStatusRequest groupBy */
                    groupBy?: (string|null);
                }

                /** Represents a QueryHubStatusRequest. */
                class QueryHubStatusRequest implements IQueryHubStatusRequest {

                    /**
                     * Constructs a new QueryHubStatusRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IQueryHubStatusRequest);

                    /** QueryHubStatusRequest name. */
                    public name: string;

                    /** QueryHubStatusRequest pageSize. */
                    public pageSize: number;

                    /** QueryHubStatusRequest pageToken. */
                    public pageToken: string;

                    /** QueryHubStatusRequest filter. */
                    public filter: string;

                    /** QueryHubStatusRequest orderBy. */
                    public orderBy: string;

                    /** QueryHubStatusRequest groupBy. */
                    public groupBy: string;

                    /**
                     * Creates a new QueryHubStatusRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryHubStatusRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IQueryHubStatusRequest): google.cloud.networkconnectivity.v1.QueryHubStatusRequest;

                    /**
                     * Encodes the specified QueryHubStatusRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.QueryHubStatusRequest.verify|verify} messages.
                     * @param message QueryHubStatusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IQueryHubStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryHubStatusRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.QueryHubStatusRequest.verify|verify} messages.
                     * @param message QueryHubStatusRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IQueryHubStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryHubStatusRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryHubStatusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.QueryHubStatusRequest;

                    /**
                     * Decodes a QueryHubStatusRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryHubStatusRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.QueryHubStatusRequest;

                    /**
                     * Verifies a QueryHubStatusRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryHubStatusRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryHubStatusRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.QueryHubStatusRequest;

                    /**
                     * Creates a plain object from a QueryHubStatusRequest message. Also converts values to other types if specified.
                     * @param message QueryHubStatusRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.QueryHubStatusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryHubStatusRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueryHubStatusRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QueryHubStatusResponse. */
                interface IQueryHubStatusResponse {

                    /** QueryHubStatusResponse hubStatusEntries */
                    hubStatusEntries?: (google.cloud.networkconnectivity.v1.IHubStatusEntry[]|null);

                    /** QueryHubStatusResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a QueryHubStatusResponse. */
                class QueryHubStatusResponse implements IQueryHubStatusResponse {

                    /**
                     * Constructs a new QueryHubStatusResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IQueryHubStatusResponse);

                    /** QueryHubStatusResponse hubStatusEntries. */
                    public hubStatusEntries: google.cloud.networkconnectivity.v1.IHubStatusEntry[];

                    /** QueryHubStatusResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new QueryHubStatusResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryHubStatusResponse instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IQueryHubStatusResponse): google.cloud.networkconnectivity.v1.QueryHubStatusResponse;

                    /**
                     * Encodes the specified QueryHubStatusResponse message. Does not implicitly {@link google.cloud.networkconnectivity.v1.QueryHubStatusResponse.verify|verify} messages.
                     * @param message QueryHubStatusResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IQueryHubStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryHubStatusResponse message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.QueryHubStatusResponse.verify|verify} messages.
                     * @param message QueryHubStatusResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IQueryHubStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryHubStatusResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryHubStatusResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.QueryHubStatusResponse;

                    /**
                     * Decodes a QueryHubStatusResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryHubStatusResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.QueryHubStatusResponse;

                    /**
                     * Verifies a QueryHubStatusResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryHubStatusResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryHubStatusResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.QueryHubStatusResponse;

                    /**
                     * Creates a plain object from a QueryHubStatusResponse message. Also converts values to other types if specified.
                     * @param message QueryHubStatusResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.QueryHubStatusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryHubStatusResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueryHubStatusResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a HubStatusEntry. */
                interface IHubStatusEntry {

                    /** HubStatusEntry count */
                    count?: (number|null);

                    /** HubStatusEntry groupBy */
                    groupBy?: (string|null);

                    /** HubStatusEntry pscPropagationStatus */
                    pscPropagationStatus?: (google.cloud.networkconnectivity.v1.IPscPropagationStatus|null);
                }

                /** Represents a HubStatusEntry. */
                class HubStatusEntry implements IHubStatusEntry {

                    /**
                     * Constructs a new HubStatusEntry.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IHubStatusEntry);

                    /** HubStatusEntry count. */
                    public count: number;

                    /** HubStatusEntry groupBy. */
                    public groupBy: string;

                    /** HubStatusEntry pscPropagationStatus. */
                    public pscPropagationStatus?: (google.cloud.networkconnectivity.v1.IPscPropagationStatus|null);

                    /**
                     * Creates a new HubStatusEntry instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HubStatusEntry instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IHubStatusEntry): google.cloud.networkconnectivity.v1.HubStatusEntry;

                    /**
                     * Encodes the specified HubStatusEntry message. Does not implicitly {@link google.cloud.networkconnectivity.v1.HubStatusEntry.verify|verify} messages.
                     * @param message HubStatusEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IHubStatusEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HubStatusEntry message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.HubStatusEntry.verify|verify} messages.
                     * @param message HubStatusEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IHubStatusEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HubStatusEntry message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HubStatusEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.HubStatusEntry;

                    /**
                     * Decodes a HubStatusEntry message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HubStatusEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.HubStatusEntry;

                    /**
                     * Verifies a HubStatusEntry message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HubStatusEntry message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HubStatusEntry
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.HubStatusEntry;

                    /**
                     * Creates a plain object from a HubStatusEntry message. Also converts values to other types if specified.
                     * @param message HubStatusEntry
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.HubStatusEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HubStatusEntry to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for HubStatusEntry
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PscPropagationStatus. */
                interface IPscPropagationStatus {

                    /** PscPropagationStatus sourceSpoke */
                    sourceSpoke?: (string|null);

                    /** PscPropagationStatus sourceGroup */
                    sourceGroup?: (string|null);

                    /** PscPropagationStatus sourceForwardingRule */
                    sourceForwardingRule?: (string|null);

                    /** PscPropagationStatus targetSpoke */
                    targetSpoke?: (string|null);

                    /** PscPropagationStatus targetGroup */
                    targetGroup?: (string|null);

                    /** PscPropagationStatus code */
                    code?: (google.cloud.networkconnectivity.v1.PscPropagationStatus.Code|keyof typeof google.cloud.networkconnectivity.v1.PscPropagationStatus.Code|null);

                    /** PscPropagationStatus message */
                    message?: (string|null);
                }

                /** Represents a PscPropagationStatus. */
                class PscPropagationStatus implements IPscPropagationStatus {

                    /**
                     * Constructs a new PscPropagationStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IPscPropagationStatus);

                    /** PscPropagationStatus sourceSpoke. */
                    public sourceSpoke: string;

                    /** PscPropagationStatus sourceGroup. */
                    public sourceGroup: string;

                    /** PscPropagationStatus sourceForwardingRule. */
                    public sourceForwardingRule: string;

                    /** PscPropagationStatus targetSpoke. */
                    public targetSpoke: string;

                    /** PscPropagationStatus targetGroup. */
                    public targetGroup: string;

                    /** PscPropagationStatus code. */
                    public code: (google.cloud.networkconnectivity.v1.PscPropagationStatus.Code|keyof typeof google.cloud.networkconnectivity.v1.PscPropagationStatus.Code);

                    /** PscPropagationStatus message. */
                    public message: string;

                    /**
                     * Creates a new PscPropagationStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PscPropagationStatus instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IPscPropagationStatus): google.cloud.networkconnectivity.v1.PscPropagationStatus;

                    /**
                     * Encodes the specified PscPropagationStatus message. Does not implicitly {@link google.cloud.networkconnectivity.v1.PscPropagationStatus.verify|verify} messages.
                     * @param message PscPropagationStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IPscPropagationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PscPropagationStatus message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.PscPropagationStatus.verify|verify} messages.
                     * @param message PscPropagationStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IPscPropagationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PscPropagationStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PscPropagationStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.PscPropagationStatus;

                    /**
                     * Decodes a PscPropagationStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PscPropagationStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.PscPropagationStatus;

                    /**
                     * Verifies a PscPropagationStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PscPropagationStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PscPropagationStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.PscPropagationStatus;

                    /**
                     * Creates a plain object from a PscPropagationStatus message. Also converts values to other types if specified.
                     * @param message PscPropagationStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.PscPropagationStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PscPropagationStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PscPropagationStatus
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PscPropagationStatus {

                    /** Code enum. */
                    enum Code {
                        CODE_UNSPECIFIED = 0,
                        READY = 1,
                        PROPAGATING = 2,
                        ERROR_PRODUCER_PROPAGATED_CONNECTION_LIMIT_EXCEEDED = 3,
                        ERROR_PRODUCER_NAT_IP_SPACE_EXHAUSTED = 4,
                        ERROR_PRODUCER_QUOTA_EXCEEDED = 5,
                        ERROR_CONSUMER_QUOTA_EXCEEDED = 6
                    }
                }

                /** Properties of a ListSpokesRequest. */
                interface IListSpokesRequest {

                    /** ListSpokesRequest parent */
                    parent?: (string|null);

                    /** ListSpokesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListSpokesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListSpokesRequest filter */
                    filter?: (string|null);

                    /** ListSpokesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListSpokesRequest. */
                class ListSpokesRequest implements IListSpokesRequest {

                    /**
                     * Constructs a new ListSpokesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IListSpokesRequest);

                    /** ListSpokesRequest parent. */
                    public parent: string;

                    /** ListSpokesRequest pageSize. */
                    public pageSize: number;

                    /** ListSpokesRequest pageToken. */
                    public pageToken: string;

                    /** ListSpokesRequest filter. */
                    public filter: string;

                    /** ListSpokesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListSpokesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSpokesRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IListSpokesRequest): google.cloud.networkconnectivity.v1.ListSpokesRequest;

                    /**
                     * Encodes the specified ListSpokesRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListSpokesRequest.verify|verify} messages.
                     * @param message ListSpokesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IListSpokesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSpokesRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListSpokesRequest.verify|verify} messages.
                     * @param message ListSpokesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IListSpokesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSpokesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSpokesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.ListSpokesRequest;

                    /**
                     * Decodes a ListSpokesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSpokesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.ListSpokesRequest;

                    /**
                     * Verifies a ListSpokesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSpokesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSpokesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.ListSpokesRequest;

                    /**
                     * Creates a plain object from a ListSpokesRequest message. Also converts values to other types if specified.
                     * @param message ListSpokesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.ListSpokesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSpokesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSpokesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListSpokesResponse. */
                interface IListSpokesResponse {

                    /** ListSpokesResponse spokes */
                    spokes?: (google.cloud.networkconnectivity.v1.ISpoke[]|null);

                    /** ListSpokesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListSpokesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListSpokesResponse. */
                class ListSpokesResponse implements IListSpokesResponse {

                    /**
                     * Constructs a new ListSpokesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IListSpokesResponse);

                    /** ListSpokesResponse spokes. */
                    public spokes: google.cloud.networkconnectivity.v1.ISpoke[];

                    /** ListSpokesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListSpokesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListSpokesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSpokesResponse instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IListSpokesResponse): google.cloud.networkconnectivity.v1.ListSpokesResponse;

                    /**
                     * Encodes the specified ListSpokesResponse message. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListSpokesResponse.verify|verify} messages.
                     * @param message ListSpokesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IListSpokesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSpokesResponse message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListSpokesResponse.verify|verify} messages.
                     * @param message ListSpokesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IListSpokesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSpokesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSpokesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.ListSpokesResponse;

                    /**
                     * Decodes a ListSpokesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSpokesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.ListSpokesResponse;

                    /**
                     * Verifies a ListSpokesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSpokesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSpokesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.ListSpokesResponse;

                    /**
                     * Creates a plain object from a ListSpokesResponse message. Also converts values to other types if specified.
                     * @param message ListSpokesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.ListSpokesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSpokesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSpokesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetSpokeRequest. */
                interface IGetSpokeRequest {

                    /** GetSpokeRequest name */
                    name?: (string|null);
                }

                /** Represents a GetSpokeRequest. */
                class GetSpokeRequest implements IGetSpokeRequest {

                    /**
                     * Constructs a new GetSpokeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IGetSpokeRequest);

                    /** GetSpokeRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetSpokeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSpokeRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IGetSpokeRequest): google.cloud.networkconnectivity.v1.GetSpokeRequest;

                    /**
                     * Encodes the specified GetSpokeRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.GetSpokeRequest.verify|verify} messages.
                     * @param message GetSpokeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IGetSpokeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSpokeRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.GetSpokeRequest.verify|verify} messages.
                     * @param message GetSpokeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IGetSpokeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSpokeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSpokeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.GetSpokeRequest;

                    /**
                     * Decodes a GetSpokeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSpokeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.GetSpokeRequest;

                    /**
                     * Verifies a GetSpokeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSpokeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSpokeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.GetSpokeRequest;

                    /**
                     * Creates a plain object from a GetSpokeRequest message. Also converts values to other types if specified.
                     * @param message GetSpokeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.GetSpokeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSpokeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetSpokeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateSpokeRequest. */
                interface ICreateSpokeRequest {

                    /** CreateSpokeRequest parent */
                    parent?: (string|null);

                    /** CreateSpokeRequest spokeId */
                    spokeId?: (string|null);

                    /** CreateSpokeRequest spoke */
                    spoke?: (google.cloud.networkconnectivity.v1.ISpoke|null);

                    /** CreateSpokeRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateSpokeRequest. */
                class CreateSpokeRequest implements ICreateSpokeRequest {

                    /**
                     * Constructs a new CreateSpokeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.ICreateSpokeRequest);

                    /** CreateSpokeRequest parent. */
                    public parent: string;

                    /** CreateSpokeRequest spokeId. */
                    public spokeId: string;

                    /** CreateSpokeRequest spoke. */
                    public spoke?: (google.cloud.networkconnectivity.v1.ISpoke|null);

                    /** CreateSpokeRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateSpokeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateSpokeRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.ICreateSpokeRequest): google.cloud.networkconnectivity.v1.CreateSpokeRequest;

                    /**
                     * Encodes the specified CreateSpokeRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.CreateSpokeRequest.verify|verify} messages.
                     * @param message CreateSpokeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.ICreateSpokeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateSpokeRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.CreateSpokeRequest.verify|verify} messages.
                     * @param message CreateSpokeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.ICreateSpokeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateSpokeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateSpokeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.CreateSpokeRequest;

                    /**
                     * Decodes a CreateSpokeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateSpokeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.CreateSpokeRequest;

                    /**
                     * Verifies a CreateSpokeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateSpokeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateSpokeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.CreateSpokeRequest;

                    /**
                     * Creates a plain object from a CreateSpokeRequest message. Also converts values to other types if specified.
                     * @param message CreateSpokeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.CreateSpokeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateSpokeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateSpokeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateSpokeRequest. */
                interface IUpdateSpokeRequest {

                    /** UpdateSpokeRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateSpokeRequest spoke */
                    spoke?: (google.cloud.networkconnectivity.v1.ISpoke|null);

                    /** UpdateSpokeRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateSpokeRequest. */
                class UpdateSpokeRequest implements IUpdateSpokeRequest {

                    /**
                     * Constructs a new UpdateSpokeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IUpdateSpokeRequest);

                    /** UpdateSpokeRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateSpokeRequest spoke. */
                    public spoke?: (google.cloud.networkconnectivity.v1.ISpoke|null);

                    /** UpdateSpokeRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateSpokeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateSpokeRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IUpdateSpokeRequest): google.cloud.networkconnectivity.v1.UpdateSpokeRequest;

                    /**
                     * Encodes the specified UpdateSpokeRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.UpdateSpokeRequest.verify|verify} messages.
                     * @param message UpdateSpokeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IUpdateSpokeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateSpokeRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.UpdateSpokeRequest.verify|verify} messages.
                     * @param message UpdateSpokeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IUpdateSpokeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSpokeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSpokeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.UpdateSpokeRequest;

                    /**
                     * Decodes an UpdateSpokeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateSpokeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.UpdateSpokeRequest;

                    /**
                     * Verifies an UpdateSpokeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateSpokeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateSpokeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.UpdateSpokeRequest;

                    /**
                     * Creates a plain object from an UpdateSpokeRequest message. Also converts values to other types if specified.
                     * @param message UpdateSpokeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.UpdateSpokeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateSpokeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateSpokeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteSpokeRequest. */
                interface IDeleteSpokeRequest {

                    /** DeleteSpokeRequest name */
                    name?: (string|null);

                    /** DeleteSpokeRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteSpokeRequest. */
                class DeleteSpokeRequest implements IDeleteSpokeRequest {

                    /**
                     * Constructs a new DeleteSpokeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IDeleteSpokeRequest);

                    /** DeleteSpokeRequest name. */
                    public name: string;

                    /** DeleteSpokeRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteSpokeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteSpokeRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IDeleteSpokeRequest): google.cloud.networkconnectivity.v1.DeleteSpokeRequest;

                    /**
                     * Encodes the specified DeleteSpokeRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.DeleteSpokeRequest.verify|verify} messages.
                     * @param message DeleteSpokeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IDeleteSpokeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteSpokeRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.DeleteSpokeRequest.verify|verify} messages.
                     * @param message DeleteSpokeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IDeleteSpokeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteSpokeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteSpokeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.DeleteSpokeRequest;

                    /**
                     * Decodes a DeleteSpokeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteSpokeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.DeleteSpokeRequest;

                    /**
                     * Verifies a DeleteSpokeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteSpokeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteSpokeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.DeleteSpokeRequest;

                    /**
                     * Creates a plain object from a DeleteSpokeRequest message. Also converts values to other types if specified.
                     * @param message DeleteSpokeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.DeleteSpokeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteSpokeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteSpokeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AcceptHubSpokeRequest. */
                interface IAcceptHubSpokeRequest {

                    /** AcceptHubSpokeRequest name */
                    name?: (string|null);

                    /** AcceptHubSpokeRequest spokeUri */
                    spokeUri?: (string|null);

                    /** AcceptHubSpokeRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an AcceptHubSpokeRequest. */
                class AcceptHubSpokeRequest implements IAcceptHubSpokeRequest {

                    /**
                     * Constructs a new AcceptHubSpokeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IAcceptHubSpokeRequest);

                    /** AcceptHubSpokeRequest name. */
                    public name: string;

                    /** AcceptHubSpokeRequest spokeUri. */
                    public spokeUri: string;

                    /** AcceptHubSpokeRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new AcceptHubSpokeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AcceptHubSpokeRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IAcceptHubSpokeRequest): google.cloud.networkconnectivity.v1.AcceptHubSpokeRequest;

                    /**
                     * Encodes the specified AcceptHubSpokeRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.AcceptHubSpokeRequest.verify|verify} messages.
                     * @param message AcceptHubSpokeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IAcceptHubSpokeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AcceptHubSpokeRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.AcceptHubSpokeRequest.verify|verify} messages.
                     * @param message AcceptHubSpokeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IAcceptHubSpokeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AcceptHubSpokeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AcceptHubSpokeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.AcceptHubSpokeRequest;

                    /**
                     * Decodes an AcceptHubSpokeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AcceptHubSpokeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.AcceptHubSpokeRequest;

                    /**
                     * Verifies an AcceptHubSpokeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AcceptHubSpokeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AcceptHubSpokeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.AcceptHubSpokeRequest;

                    /**
                     * Creates a plain object from an AcceptHubSpokeRequest message. Also converts values to other types if specified.
                     * @param message AcceptHubSpokeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.AcceptHubSpokeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AcceptHubSpokeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AcceptHubSpokeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AcceptHubSpokeResponse. */
                interface IAcceptHubSpokeResponse {

                    /** AcceptHubSpokeResponse spoke */
                    spoke?: (google.cloud.networkconnectivity.v1.ISpoke|null);
                }

                /** Represents an AcceptHubSpokeResponse. */
                class AcceptHubSpokeResponse implements IAcceptHubSpokeResponse {

                    /**
                     * Constructs a new AcceptHubSpokeResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IAcceptHubSpokeResponse);

                    /** AcceptHubSpokeResponse spoke. */
                    public spoke?: (google.cloud.networkconnectivity.v1.ISpoke|null);

                    /**
                     * Creates a new AcceptHubSpokeResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AcceptHubSpokeResponse instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IAcceptHubSpokeResponse): google.cloud.networkconnectivity.v1.AcceptHubSpokeResponse;

                    /**
                     * Encodes the specified AcceptHubSpokeResponse message. Does not implicitly {@link google.cloud.networkconnectivity.v1.AcceptHubSpokeResponse.verify|verify} messages.
                     * @param message AcceptHubSpokeResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IAcceptHubSpokeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AcceptHubSpokeResponse message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.AcceptHubSpokeResponse.verify|verify} messages.
                     * @param message AcceptHubSpokeResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IAcceptHubSpokeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AcceptHubSpokeResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AcceptHubSpokeResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.AcceptHubSpokeResponse;

                    /**
                     * Decodes an AcceptHubSpokeResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AcceptHubSpokeResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.AcceptHubSpokeResponse;

                    /**
                     * Verifies an AcceptHubSpokeResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AcceptHubSpokeResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AcceptHubSpokeResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.AcceptHubSpokeResponse;

                    /**
                     * Creates a plain object from an AcceptHubSpokeResponse message. Also converts values to other types if specified.
                     * @param message AcceptHubSpokeResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.AcceptHubSpokeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AcceptHubSpokeResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AcceptHubSpokeResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RejectHubSpokeRequest. */
                interface IRejectHubSpokeRequest {

                    /** RejectHubSpokeRequest name */
                    name?: (string|null);

                    /** RejectHubSpokeRequest spokeUri */
                    spokeUri?: (string|null);

                    /** RejectHubSpokeRequest requestId */
                    requestId?: (string|null);

                    /** RejectHubSpokeRequest details */
                    details?: (string|null);
                }

                /** Represents a RejectHubSpokeRequest. */
                class RejectHubSpokeRequest implements IRejectHubSpokeRequest {

                    /**
                     * Constructs a new RejectHubSpokeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IRejectHubSpokeRequest);

                    /** RejectHubSpokeRequest name. */
                    public name: string;

                    /** RejectHubSpokeRequest spokeUri. */
                    public spokeUri: string;

                    /** RejectHubSpokeRequest requestId. */
                    public requestId: string;

                    /** RejectHubSpokeRequest details. */
                    public details: string;

                    /**
                     * Creates a new RejectHubSpokeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RejectHubSpokeRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IRejectHubSpokeRequest): google.cloud.networkconnectivity.v1.RejectHubSpokeRequest;

                    /**
                     * Encodes the specified RejectHubSpokeRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.RejectHubSpokeRequest.verify|verify} messages.
                     * @param message RejectHubSpokeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IRejectHubSpokeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RejectHubSpokeRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.RejectHubSpokeRequest.verify|verify} messages.
                     * @param message RejectHubSpokeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IRejectHubSpokeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RejectHubSpokeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RejectHubSpokeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.RejectHubSpokeRequest;

                    /**
                     * Decodes a RejectHubSpokeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RejectHubSpokeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.RejectHubSpokeRequest;

                    /**
                     * Verifies a RejectHubSpokeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RejectHubSpokeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RejectHubSpokeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.RejectHubSpokeRequest;

                    /**
                     * Creates a plain object from a RejectHubSpokeRequest message. Also converts values to other types if specified.
                     * @param message RejectHubSpokeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.RejectHubSpokeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RejectHubSpokeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RejectHubSpokeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RejectHubSpokeResponse. */
                interface IRejectHubSpokeResponse {

                    /** RejectHubSpokeResponse spoke */
                    spoke?: (google.cloud.networkconnectivity.v1.ISpoke|null);
                }

                /** Represents a RejectHubSpokeResponse. */
                class RejectHubSpokeResponse implements IRejectHubSpokeResponse {

                    /**
                     * Constructs a new RejectHubSpokeResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IRejectHubSpokeResponse);

                    /** RejectHubSpokeResponse spoke. */
                    public spoke?: (google.cloud.networkconnectivity.v1.ISpoke|null);

                    /**
                     * Creates a new RejectHubSpokeResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RejectHubSpokeResponse instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IRejectHubSpokeResponse): google.cloud.networkconnectivity.v1.RejectHubSpokeResponse;

                    /**
                     * Encodes the specified RejectHubSpokeResponse message. Does not implicitly {@link google.cloud.networkconnectivity.v1.RejectHubSpokeResponse.verify|verify} messages.
                     * @param message RejectHubSpokeResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IRejectHubSpokeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RejectHubSpokeResponse message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.RejectHubSpokeResponse.verify|verify} messages.
                     * @param message RejectHubSpokeResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IRejectHubSpokeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RejectHubSpokeResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RejectHubSpokeResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.RejectHubSpokeResponse;

                    /**
                     * Decodes a RejectHubSpokeResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RejectHubSpokeResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.RejectHubSpokeResponse;

                    /**
                     * Verifies a RejectHubSpokeResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RejectHubSpokeResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RejectHubSpokeResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.RejectHubSpokeResponse;

                    /**
                     * Creates a plain object from a RejectHubSpokeResponse message. Also converts values to other types if specified.
                     * @param message RejectHubSpokeResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.RejectHubSpokeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RejectHubSpokeResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RejectHubSpokeResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetRouteTableRequest. */
                interface IGetRouteTableRequest {

                    /** GetRouteTableRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRouteTableRequest. */
                class GetRouteTableRequest implements IGetRouteTableRequest {

                    /**
                     * Constructs a new GetRouteTableRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IGetRouteTableRequest);

                    /** GetRouteTableRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRouteTableRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRouteTableRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IGetRouteTableRequest): google.cloud.networkconnectivity.v1.GetRouteTableRequest;

                    /**
                     * Encodes the specified GetRouteTableRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.GetRouteTableRequest.verify|verify} messages.
                     * @param message GetRouteTableRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IGetRouteTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRouteTableRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.GetRouteTableRequest.verify|verify} messages.
                     * @param message GetRouteTableRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IGetRouteTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRouteTableRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRouteTableRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.GetRouteTableRequest;

                    /**
                     * Decodes a GetRouteTableRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRouteTableRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.GetRouteTableRequest;

                    /**
                     * Verifies a GetRouteTableRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRouteTableRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRouteTableRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.GetRouteTableRequest;

                    /**
                     * Creates a plain object from a GetRouteTableRequest message. Also converts values to other types if specified.
                     * @param message GetRouteTableRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.GetRouteTableRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRouteTableRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetRouteTableRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetRouteRequest. */
                interface IGetRouteRequest {

                    /** GetRouteRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRouteRequest. */
                class GetRouteRequest implements IGetRouteRequest {

                    /**
                     * Constructs a new GetRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IGetRouteRequest);

                    /** GetRouteRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRouteRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IGetRouteRequest): google.cloud.networkconnectivity.v1.GetRouteRequest;

                    /**
                     * Encodes the specified GetRouteRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.GetRouteRequest.verify|verify} messages.
                     * @param message GetRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IGetRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRouteRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.GetRouteRequest.verify|verify} messages.
                     * @param message GetRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IGetRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.GetRouteRequest;

                    /**
                     * Decodes a GetRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.GetRouteRequest;

                    /**
                     * Verifies a GetRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.GetRouteRequest;

                    /**
                     * Creates a plain object from a GetRouteRequest message. Also converts values to other types if specified.
                     * @param message GetRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.GetRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetRouteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRoutesRequest. */
                interface IListRoutesRequest {

                    /** ListRoutesRequest parent */
                    parent?: (string|null);

                    /** ListRoutesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRoutesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRoutesRequest filter */
                    filter?: (string|null);

                    /** ListRoutesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListRoutesRequest. */
                class ListRoutesRequest implements IListRoutesRequest {

                    /**
                     * Constructs a new ListRoutesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IListRoutesRequest);

                    /** ListRoutesRequest parent. */
                    public parent: string;

                    /** ListRoutesRequest pageSize. */
                    public pageSize: number;

                    /** ListRoutesRequest pageToken. */
                    public pageToken: string;

                    /** ListRoutesRequest filter. */
                    public filter: string;

                    /** ListRoutesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListRoutesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRoutesRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IListRoutesRequest): google.cloud.networkconnectivity.v1.ListRoutesRequest;

                    /**
                     * Encodes the specified ListRoutesRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListRoutesRequest.verify|verify} messages.
                     * @param message ListRoutesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IListRoutesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRoutesRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListRoutesRequest.verify|verify} messages.
                     * @param message ListRoutesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IListRoutesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRoutesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRoutesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.ListRoutesRequest;

                    /**
                     * Decodes a ListRoutesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRoutesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.ListRoutesRequest;

                    /**
                     * Verifies a ListRoutesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRoutesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRoutesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.ListRoutesRequest;

                    /**
                     * Creates a plain object from a ListRoutesRequest message. Also converts values to other types if specified.
                     * @param message ListRoutesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.ListRoutesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRoutesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRoutesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRoutesResponse. */
                interface IListRoutesResponse {

                    /** ListRoutesResponse routes */
                    routes?: (google.cloud.networkconnectivity.v1.IRoute[]|null);

                    /** ListRoutesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListRoutesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListRoutesResponse. */
                class ListRoutesResponse implements IListRoutesResponse {

                    /**
                     * Constructs a new ListRoutesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IListRoutesResponse);

                    /** ListRoutesResponse routes. */
                    public routes: google.cloud.networkconnectivity.v1.IRoute[];

                    /** ListRoutesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListRoutesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListRoutesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRoutesResponse instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IListRoutesResponse): google.cloud.networkconnectivity.v1.ListRoutesResponse;

                    /**
                     * Encodes the specified ListRoutesResponse message. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListRoutesResponse.verify|verify} messages.
                     * @param message ListRoutesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IListRoutesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRoutesResponse message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListRoutesResponse.verify|verify} messages.
                     * @param message ListRoutesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IListRoutesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRoutesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRoutesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.ListRoutesResponse;

                    /**
                     * Decodes a ListRoutesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRoutesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.ListRoutesResponse;

                    /**
                     * Verifies a ListRoutesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRoutesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRoutesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.ListRoutesResponse;

                    /**
                     * Creates a plain object from a ListRoutesResponse message. Also converts values to other types if specified.
                     * @param message ListRoutesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.ListRoutesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRoutesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRoutesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRouteTablesRequest. */
                interface IListRouteTablesRequest {

                    /** ListRouteTablesRequest parent */
                    parent?: (string|null);

                    /** ListRouteTablesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRouteTablesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRouteTablesRequest filter */
                    filter?: (string|null);

                    /** ListRouteTablesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListRouteTablesRequest. */
                class ListRouteTablesRequest implements IListRouteTablesRequest {

                    /**
                     * Constructs a new ListRouteTablesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IListRouteTablesRequest);

                    /** ListRouteTablesRequest parent. */
                    public parent: string;

                    /** ListRouteTablesRequest pageSize. */
                    public pageSize: number;

                    /** ListRouteTablesRequest pageToken. */
                    public pageToken: string;

                    /** ListRouteTablesRequest filter. */
                    public filter: string;

                    /** ListRouteTablesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListRouteTablesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRouteTablesRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IListRouteTablesRequest): google.cloud.networkconnectivity.v1.ListRouteTablesRequest;

                    /**
                     * Encodes the specified ListRouteTablesRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListRouteTablesRequest.verify|verify} messages.
                     * @param message ListRouteTablesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IListRouteTablesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRouteTablesRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListRouteTablesRequest.verify|verify} messages.
                     * @param message ListRouteTablesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IListRouteTablesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRouteTablesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRouteTablesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.ListRouteTablesRequest;

                    /**
                     * Decodes a ListRouteTablesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRouteTablesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.ListRouteTablesRequest;

                    /**
                     * Verifies a ListRouteTablesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRouteTablesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRouteTablesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.ListRouteTablesRequest;

                    /**
                     * Creates a plain object from a ListRouteTablesRequest message. Also converts values to other types if specified.
                     * @param message ListRouteTablesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.ListRouteTablesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRouteTablesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRouteTablesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRouteTablesResponse. */
                interface IListRouteTablesResponse {

                    /** ListRouteTablesResponse routeTables */
                    routeTables?: (google.cloud.networkconnectivity.v1.IRouteTable[]|null);

                    /** ListRouteTablesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListRouteTablesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListRouteTablesResponse. */
                class ListRouteTablesResponse implements IListRouteTablesResponse {

                    /**
                     * Constructs a new ListRouteTablesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IListRouteTablesResponse);

                    /** ListRouteTablesResponse routeTables. */
                    public routeTables: google.cloud.networkconnectivity.v1.IRouteTable[];

                    /** ListRouteTablesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListRouteTablesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListRouteTablesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRouteTablesResponse instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IListRouteTablesResponse): google.cloud.networkconnectivity.v1.ListRouteTablesResponse;

                    /**
                     * Encodes the specified ListRouteTablesResponse message. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListRouteTablesResponse.verify|verify} messages.
                     * @param message ListRouteTablesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IListRouteTablesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRouteTablesResponse message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListRouteTablesResponse.verify|verify} messages.
                     * @param message ListRouteTablesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IListRouteTablesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRouteTablesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRouteTablesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.ListRouteTablesResponse;

                    /**
                     * Decodes a ListRouteTablesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRouteTablesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.ListRouteTablesResponse;

                    /**
                     * Verifies a ListRouteTablesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRouteTablesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRouteTablesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.ListRouteTablesResponse;

                    /**
                     * Creates a plain object from a ListRouteTablesResponse message. Also converts values to other types if specified.
                     * @param message ListRouteTablesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.ListRouteTablesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRouteTablesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRouteTablesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListGroupsRequest. */
                interface IListGroupsRequest {

                    /** ListGroupsRequest parent */
                    parent?: (string|null);

                    /** ListGroupsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListGroupsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListGroupsRequest filter */
                    filter?: (string|null);

                    /** ListGroupsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListGroupsRequest. */
                class ListGroupsRequest implements IListGroupsRequest {

                    /**
                     * Constructs a new ListGroupsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IListGroupsRequest);

                    /** ListGroupsRequest parent. */
                    public parent: string;

                    /** ListGroupsRequest pageSize. */
                    public pageSize: number;

                    /** ListGroupsRequest pageToken. */
                    public pageToken: string;

                    /** ListGroupsRequest filter. */
                    public filter: string;

                    /** ListGroupsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListGroupsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGroupsRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IListGroupsRequest): google.cloud.networkconnectivity.v1.ListGroupsRequest;

                    /**
                     * Encodes the specified ListGroupsRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListGroupsRequest.verify|verify} messages.
                     * @param message ListGroupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IListGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGroupsRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListGroupsRequest.verify|verify} messages.
                     * @param message ListGroupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IListGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGroupsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGroupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.ListGroupsRequest;

                    /**
                     * Decodes a ListGroupsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGroupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.ListGroupsRequest;

                    /**
                     * Verifies a ListGroupsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGroupsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGroupsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.ListGroupsRequest;

                    /**
                     * Creates a plain object from a ListGroupsRequest message. Also converts values to other types if specified.
                     * @param message ListGroupsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.ListGroupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGroupsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListGroupsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListGroupsResponse. */
                interface IListGroupsResponse {

                    /** ListGroupsResponse groups */
                    groups?: (google.cloud.networkconnectivity.v1.IGroup[]|null);

                    /** ListGroupsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListGroupsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListGroupsResponse. */
                class ListGroupsResponse implements IListGroupsResponse {

                    /**
                     * Constructs a new ListGroupsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IListGroupsResponse);

                    /** ListGroupsResponse groups. */
                    public groups: google.cloud.networkconnectivity.v1.IGroup[];

                    /** ListGroupsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListGroupsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListGroupsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGroupsResponse instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IListGroupsResponse): google.cloud.networkconnectivity.v1.ListGroupsResponse;

                    /**
                     * Encodes the specified ListGroupsResponse message. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListGroupsResponse.verify|verify} messages.
                     * @param message ListGroupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IListGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGroupsResponse message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListGroupsResponse.verify|verify} messages.
                     * @param message ListGroupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IListGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGroupsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGroupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.ListGroupsResponse;

                    /**
                     * Decodes a ListGroupsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGroupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.ListGroupsResponse;

                    /**
                     * Verifies a ListGroupsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGroupsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGroupsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.ListGroupsResponse;

                    /**
                     * Creates a plain object from a ListGroupsResponse message. Also converts values to other types if specified.
                     * @param message ListGroupsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.ListGroupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGroupsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListGroupsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LinkedVpnTunnels. */
                interface ILinkedVpnTunnels {

                    /** LinkedVpnTunnels uris */
                    uris?: (string[]|null);

                    /** LinkedVpnTunnels siteToSiteDataTransfer */
                    siteToSiteDataTransfer?: (boolean|null);

                    /** LinkedVpnTunnels vpcNetwork */
                    vpcNetwork?: (string|null);

                    /** LinkedVpnTunnels includeImportRanges */
                    includeImportRanges?: (string[]|null);
                }

                /** Represents a LinkedVpnTunnels. */
                class LinkedVpnTunnels implements ILinkedVpnTunnels {

                    /**
                     * Constructs a new LinkedVpnTunnels.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.ILinkedVpnTunnels);

                    /** LinkedVpnTunnels uris. */
                    public uris: string[];

                    /** LinkedVpnTunnels siteToSiteDataTransfer. */
                    public siteToSiteDataTransfer: boolean;

                    /** LinkedVpnTunnels vpcNetwork. */
                    public vpcNetwork: string;

                    /** LinkedVpnTunnels includeImportRanges. */
                    public includeImportRanges: string[];

                    /**
                     * Creates a new LinkedVpnTunnels instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LinkedVpnTunnels instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.ILinkedVpnTunnels): google.cloud.networkconnectivity.v1.LinkedVpnTunnels;

                    /**
                     * Encodes the specified LinkedVpnTunnels message. Does not implicitly {@link google.cloud.networkconnectivity.v1.LinkedVpnTunnels.verify|verify} messages.
                     * @param message LinkedVpnTunnels message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.ILinkedVpnTunnels, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LinkedVpnTunnels message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.LinkedVpnTunnels.verify|verify} messages.
                     * @param message LinkedVpnTunnels message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.ILinkedVpnTunnels, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LinkedVpnTunnels message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LinkedVpnTunnels
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.LinkedVpnTunnels;

                    /**
                     * Decodes a LinkedVpnTunnels message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LinkedVpnTunnels
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.LinkedVpnTunnels;

                    /**
                     * Verifies a LinkedVpnTunnels message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LinkedVpnTunnels message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LinkedVpnTunnels
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.LinkedVpnTunnels;

                    /**
                     * Creates a plain object from a LinkedVpnTunnels message. Also converts values to other types if specified.
                     * @param message LinkedVpnTunnels
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.LinkedVpnTunnels, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LinkedVpnTunnels to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LinkedVpnTunnels
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LinkedInterconnectAttachments. */
                interface ILinkedInterconnectAttachments {

                    /** LinkedInterconnectAttachments uris */
                    uris?: (string[]|null);

                    /** LinkedInterconnectAttachments siteToSiteDataTransfer */
                    siteToSiteDataTransfer?: (boolean|null);

                    /** LinkedInterconnectAttachments vpcNetwork */
                    vpcNetwork?: (string|null);

                    /** LinkedInterconnectAttachments includeImportRanges */
                    includeImportRanges?: (string[]|null);
                }

                /** Represents a LinkedInterconnectAttachments. */
                class LinkedInterconnectAttachments implements ILinkedInterconnectAttachments {

                    /**
                     * Constructs a new LinkedInterconnectAttachments.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.ILinkedInterconnectAttachments);

                    /** LinkedInterconnectAttachments uris. */
                    public uris: string[];

                    /** LinkedInterconnectAttachments siteToSiteDataTransfer. */
                    public siteToSiteDataTransfer: boolean;

                    /** LinkedInterconnectAttachments vpcNetwork. */
                    public vpcNetwork: string;

                    /** LinkedInterconnectAttachments includeImportRanges. */
                    public includeImportRanges: string[];

                    /**
                     * Creates a new LinkedInterconnectAttachments instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LinkedInterconnectAttachments instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.ILinkedInterconnectAttachments): google.cloud.networkconnectivity.v1.LinkedInterconnectAttachments;

                    /**
                     * Encodes the specified LinkedInterconnectAttachments message. Does not implicitly {@link google.cloud.networkconnectivity.v1.LinkedInterconnectAttachments.verify|verify} messages.
                     * @param message LinkedInterconnectAttachments message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.ILinkedInterconnectAttachments, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LinkedInterconnectAttachments message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.LinkedInterconnectAttachments.verify|verify} messages.
                     * @param message LinkedInterconnectAttachments message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.ILinkedInterconnectAttachments, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LinkedInterconnectAttachments message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LinkedInterconnectAttachments
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.LinkedInterconnectAttachments;

                    /**
                     * Decodes a LinkedInterconnectAttachments message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LinkedInterconnectAttachments
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.LinkedInterconnectAttachments;

                    /**
                     * Verifies a LinkedInterconnectAttachments message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LinkedInterconnectAttachments message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LinkedInterconnectAttachments
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.LinkedInterconnectAttachments;

                    /**
                     * Creates a plain object from a LinkedInterconnectAttachments message. Also converts values to other types if specified.
                     * @param message LinkedInterconnectAttachments
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.LinkedInterconnectAttachments, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LinkedInterconnectAttachments to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LinkedInterconnectAttachments
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LinkedRouterApplianceInstances. */
                interface ILinkedRouterApplianceInstances {

                    /** LinkedRouterApplianceInstances instances */
                    instances?: (google.cloud.networkconnectivity.v1.IRouterApplianceInstance[]|null);

                    /** LinkedRouterApplianceInstances siteToSiteDataTransfer */
                    siteToSiteDataTransfer?: (boolean|null);

                    /** LinkedRouterApplianceInstances vpcNetwork */
                    vpcNetwork?: (string|null);

                    /** LinkedRouterApplianceInstances includeImportRanges */
                    includeImportRanges?: (string[]|null);
                }

                /** Represents a LinkedRouterApplianceInstances. */
                class LinkedRouterApplianceInstances implements ILinkedRouterApplianceInstances {

                    /**
                     * Constructs a new LinkedRouterApplianceInstances.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.ILinkedRouterApplianceInstances);

                    /** LinkedRouterApplianceInstances instances. */
                    public instances: google.cloud.networkconnectivity.v1.IRouterApplianceInstance[];

                    /** LinkedRouterApplianceInstances siteToSiteDataTransfer. */
                    public siteToSiteDataTransfer: boolean;

                    /** LinkedRouterApplianceInstances vpcNetwork. */
                    public vpcNetwork: string;

                    /** LinkedRouterApplianceInstances includeImportRanges. */
                    public includeImportRanges: string[];

                    /**
                     * Creates a new LinkedRouterApplianceInstances instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LinkedRouterApplianceInstances instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.ILinkedRouterApplianceInstances): google.cloud.networkconnectivity.v1.LinkedRouterApplianceInstances;

                    /**
                     * Encodes the specified LinkedRouterApplianceInstances message. Does not implicitly {@link google.cloud.networkconnectivity.v1.LinkedRouterApplianceInstances.verify|verify} messages.
                     * @param message LinkedRouterApplianceInstances message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.ILinkedRouterApplianceInstances, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LinkedRouterApplianceInstances message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.LinkedRouterApplianceInstances.verify|verify} messages.
                     * @param message LinkedRouterApplianceInstances message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.ILinkedRouterApplianceInstances, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LinkedRouterApplianceInstances message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LinkedRouterApplianceInstances
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.LinkedRouterApplianceInstances;

                    /**
                     * Decodes a LinkedRouterApplianceInstances message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LinkedRouterApplianceInstances
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.LinkedRouterApplianceInstances;

                    /**
                     * Verifies a LinkedRouterApplianceInstances message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LinkedRouterApplianceInstances message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LinkedRouterApplianceInstances
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.LinkedRouterApplianceInstances;

                    /**
                     * Creates a plain object from a LinkedRouterApplianceInstances message. Also converts values to other types if specified.
                     * @param message LinkedRouterApplianceInstances
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.LinkedRouterApplianceInstances, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LinkedRouterApplianceInstances to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LinkedRouterApplianceInstances
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LinkedVpcNetwork. */
                interface ILinkedVpcNetwork {

                    /** LinkedVpcNetwork uri */
                    uri?: (string|null);

                    /** LinkedVpcNetwork excludeExportRanges */
                    excludeExportRanges?: (string[]|null);

                    /** LinkedVpcNetwork includeExportRanges */
                    includeExportRanges?: (string[]|null);

                    /** LinkedVpcNetwork producerVpcSpokes */
                    producerVpcSpokes?: (string[]|null);
                }

                /** Represents a LinkedVpcNetwork. */
                class LinkedVpcNetwork implements ILinkedVpcNetwork {

                    /**
                     * Constructs a new LinkedVpcNetwork.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.ILinkedVpcNetwork);

                    /** LinkedVpcNetwork uri. */
                    public uri: string;

                    /** LinkedVpcNetwork excludeExportRanges. */
                    public excludeExportRanges: string[];

                    /** LinkedVpcNetwork includeExportRanges. */
                    public includeExportRanges: string[];

                    /** LinkedVpcNetwork producerVpcSpokes. */
                    public producerVpcSpokes: string[];

                    /**
                     * Creates a new LinkedVpcNetwork instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LinkedVpcNetwork instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.ILinkedVpcNetwork): google.cloud.networkconnectivity.v1.LinkedVpcNetwork;

                    /**
                     * Encodes the specified LinkedVpcNetwork message. Does not implicitly {@link google.cloud.networkconnectivity.v1.LinkedVpcNetwork.verify|verify} messages.
                     * @param message LinkedVpcNetwork message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.ILinkedVpcNetwork, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LinkedVpcNetwork message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.LinkedVpcNetwork.verify|verify} messages.
                     * @param message LinkedVpcNetwork message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.ILinkedVpcNetwork, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LinkedVpcNetwork message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LinkedVpcNetwork
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.LinkedVpcNetwork;

                    /**
                     * Decodes a LinkedVpcNetwork message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LinkedVpcNetwork
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.LinkedVpcNetwork;

                    /**
                     * Verifies a LinkedVpcNetwork message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LinkedVpcNetwork message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LinkedVpcNetwork
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.LinkedVpcNetwork;

                    /**
                     * Creates a plain object from a LinkedVpcNetwork message. Also converts values to other types if specified.
                     * @param message LinkedVpcNetwork
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.LinkedVpcNetwork, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LinkedVpcNetwork to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LinkedVpcNetwork
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LinkedProducerVpcNetwork. */
                interface ILinkedProducerVpcNetwork {

                    /** LinkedProducerVpcNetwork network */
                    network?: (string|null);

                    /** LinkedProducerVpcNetwork serviceConsumerVpcSpoke */
                    serviceConsumerVpcSpoke?: (string|null);

                    /** LinkedProducerVpcNetwork peering */
                    peering?: (string|null);

                    /** LinkedProducerVpcNetwork producerNetwork */
                    producerNetwork?: (string|null);

                    /** LinkedProducerVpcNetwork excludeExportRanges */
                    excludeExportRanges?: (string[]|null);

                    /** LinkedProducerVpcNetwork includeExportRanges */
                    includeExportRanges?: (string[]|null);
                }

                /** Represents a LinkedProducerVpcNetwork. */
                class LinkedProducerVpcNetwork implements ILinkedProducerVpcNetwork {

                    /**
                     * Constructs a new LinkedProducerVpcNetwork.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.ILinkedProducerVpcNetwork);

                    /** LinkedProducerVpcNetwork network. */
                    public network: string;

                    /** LinkedProducerVpcNetwork serviceConsumerVpcSpoke. */
                    public serviceConsumerVpcSpoke: string;

                    /** LinkedProducerVpcNetwork peering. */
                    public peering: string;

                    /** LinkedProducerVpcNetwork producerNetwork. */
                    public producerNetwork: string;

                    /** LinkedProducerVpcNetwork excludeExportRanges. */
                    public excludeExportRanges: string[];

                    /** LinkedProducerVpcNetwork includeExportRanges. */
                    public includeExportRanges: string[];

                    /**
                     * Creates a new LinkedProducerVpcNetwork instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LinkedProducerVpcNetwork instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.ILinkedProducerVpcNetwork): google.cloud.networkconnectivity.v1.LinkedProducerVpcNetwork;

                    /**
                     * Encodes the specified LinkedProducerVpcNetwork message. Does not implicitly {@link google.cloud.networkconnectivity.v1.LinkedProducerVpcNetwork.verify|verify} messages.
                     * @param message LinkedProducerVpcNetwork message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.ILinkedProducerVpcNetwork, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LinkedProducerVpcNetwork message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.LinkedProducerVpcNetwork.verify|verify} messages.
                     * @param message LinkedProducerVpcNetwork message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.ILinkedProducerVpcNetwork, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LinkedProducerVpcNetwork message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LinkedProducerVpcNetwork
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.LinkedProducerVpcNetwork;

                    /**
                     * Decodes a LinkedProducerVpcNetwork message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LinkedProducerVpcNetwork
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.LinkedProducerVpcNetwork;

                    /**
                     * Verifies a LinkedProducerVpcNetwork message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LinkedProducerVpcNetwork message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LinkedProducerVpcNetwork
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.LinkedProducerVpcNetwork;

                    /**
                     * Creates a plain object from a LinkedProducerVpcNetwork message. Also converts values to other types if specified.
                     * @param message LinkedProducerVpcNetwork
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.LinkedProducerVpcNetwork, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LinkedProducerVpcNetwork to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LinkedProducerVpcNetwork
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RouterApplianceInstance. */
                interface IRouterApplianceInstance {

                    /** RouterApplianceInstance virtualMachine */
                    virtualMachine?: (string|null);

                    /** RouterApplianceInstance ipAddress */
                    ipAddress?: (string|null);
                }

                /** Represents a RouterApplianceInstance. */
                class RouterApplianceInstance implements IRouterApplianceInstance {

                    /**
                     * Constructs a new RouterApplianceInstance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IRouterApplianceInstance);

                    /** RouterApplianceInstance virtualMachine. */
                    public virtualMachine: string;

                    /** RouterApplianceInstance ipAddress. */
                    public ipAddress: string;

                    /**
                     * Creates a new RouterApplianceInstance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RouterApplianceInstance instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IRouterApplianceInstance): google.cloud.networkconnectivity.v1.RouterApplianceInstance;

                    /**
                     * Encodes the specified RouterApplianceInstance message. Does not implicitly {@link google.cloud.networkconnectivity.v1.RouterApplianceInstance.verify|verify} messages.
                     * @param message RouterApplianceInstance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IRouterApplianceInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RouterApplianceInstance message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.RouterApplianceInstance.verify|verify} messages.
                     * @param message RouterApplianceInstance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IRouterApplianceInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RouterApplianceInstance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RouterApplianceInstance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.RouterApplianceInstance;

                    /**
                     * Decodes a RouterApplianceInstance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RouterApplianceInstance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.RouterApplianceInstance;

                    /**
                     * Verifies a RouterApplianceInstance message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RouterApplianceInstance message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RouterApplianceInstance
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.RouterApplianceInstance;

                    /**
                     * Creates a plain object from a RouterApplianceInstance message. Also converts values to other types if specified.
                     * @param message RouterApplianceInstance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.RouterApplianceInstance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RouterApplianceInstance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RouterApplianceInstance
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LocationMetadata. */
                interface ILocationMetadata {

                    /** LocationMetadata locationFeatures */
                    locationFeatures?: (google.cloud.networkconnectivity.v1.LocationFeature[]|null);
                }

                /** Represents a LocationMetadata. */
                class LocationMetadata implements ILocationMetadata {

                    /**
                     * Constructs a new LocationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.ILocationMetadata);

                    /** LocationMetadata locationFeatures. */
                    public locationFeatures: google.cloud.networkconnectivity.v1.LocationFeature[];

                    /**
                     * Creates a new LocationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LocationMetadata instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.ILocationMetadata): google.cloud.networkconnectivity.v1.LocationMetadata;

                    /**
                     * Encodes the specified LocationMetadata message. Does not implicitly {@link google.cloud.networkconnectivity.v1.LocationMetadata.verify|verify} messages.
                     * @param message LocationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.ILocationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LocationMetadata message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.LocationMetadata.verify|verify} messages.
                     * @param message LocationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.ILocationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LocationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LocationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.LocationMetadata;

                    /**
                     * Decodes a LocationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LocationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.LocationMetadata;

                    /**
                     * Verifies a LocationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LocationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LocationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.LocationMetadata;

                    /**
                     * Creates a plain object from a LocationMetadata message. Also converts values to other types if specified.
                     * @param message LocationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.LocationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LocationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LocationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NextHopVpcNetwork. */
                interface INextHopVpcNetwork {

                    /** NextHopVpcNetwork uri */
                    uri?: (string|null);
                }

                /** Represents a NextHopVpcNetwork. */
                class NextHopVpcNetwork implements INextHopVpcNetwork {

                    /**
                     * Constructs a new NextHopVpcNetwork.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.INextHopVpcNetwork);

                    /** NextHopVpcNetwork uri. */
                    public uri: string;

                    /**
                     * Creates a new NextHopVpcNetwork instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NextHopVpcNetwork instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.INextHopVpcNetwork): google.cloud.networkconnectivity.v1.NextHopVpcNetwork;

                    /**
                     * Encodes the specified NextHopVpcNetwork message. Does not implicitly {@link google.cloud.networkconnectivity.v1.NextHopVpcNetwork.verify|verify} messages.
                     * @param message NextHopVpcNetwork message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.INextHopVpcNetwork, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NextHopVpcNetwork message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.NextHopVpcNetwork.verify|verify} messages.
                     * @param message NextHopVpcNetwork message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.INextHopVpcNetwork, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NextHopVpcNetwork message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NextHopVpcNetwork
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.NextHopVpcNetwork;

                    /**
                     * Decodes a NextHopVpcNetwork message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NextHopVpcNetwork
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.NextHopVpcNetwork;

                    /**
                     * Verifies a NextHopVpcNetwork message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NextHopVpcNetwork message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NextHopVpcNetwork
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.NextHopVpcNetwork;

                    /**
                     * Creates a plain object from a NextHopVpcNetwork message. Also converts values to other types if specified.
                     * @param message NextHopVpcNetwork
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.NextHopVpcNetwork, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NextHopVpcNetwork to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NextHopVpcNetwork
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NextHopVPNTunnel. */
                interface INextHopVPNTunnel {

                    /** NextHopVPNTunnel uri */
                    uri?: (string|null);

                    /** NextHopVPNTunnel vpcNetwork */
                    vpcNetwork?: (string|null);

                    /** NextHopVPNTunnel siteToSiteDataTransfer */
                    siteToSiteDataTransfer?: (boolean|null);
                }

                /** Represents a NextHopVPNTunnel. */
                class NextHopVPNTunnel implements INextHopVPNTunnel {

                    /**
                     * Constructs a new NextHopVPNTunnel.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.INextHopVPNTunnel);

                    /** NextHopVPNTunnel uri. */
                    public uri: string;

                    /** NextHopVPNTunnel vpcNetwork. */
                    public vpcNetwork: string;

                    /** NextHopVPNTunnel siteToSiteDataTransfer. */
                    public siteToSiteDataTransfer: boolean;

                    /**
                     * Creates a new NextHopVPNTunnel instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NextHopVPNTunnel instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.INextHopVPNTunnel): google.cloud.networkconnectivity.v1.NextHopVPNTunnel;

                    /**
                     * Encodes the specified NextHopVPNTunnel message. Does not implicitly {@link google.cloud.networkconnectivity.v1.NextHopVPNTunnel.verify|verify} messages.
                     * @param message NextHopVPNTunnel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.INextHopVPNTunnel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NextHopVPNTunnel message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.NextHopVPNTunnel.verify|verify} messages.
                     * @param message NextHopVPNTunnel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.INextHopVPNTunnel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NextHopVPNTunnel message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NextHopVPNTunnel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.NextHopVPNTunnel;

                    /**
                     * Decodes a NextHopVPNTunnel message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NextHopVPNTunnel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.NextHopVPNTunnel;

                    /**
                     * Verifies a NextHopVPNTunnel message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NextHopVPNTunnel message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NextHopVPNTunnel
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.NextHopVPNTunnel;

                    /**
                     * Creates a plain object from a NextHopVPNTunnel message. Also converts values to other types if specified.
                     * @param message NextHopVPNTunnel
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.NextHopVPNTunnel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NextHopVPNTunnel to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NextHopVPNTunnel
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NextHopRouterApplianceInstance. */
                interface INextHopRouterApplianceInstance {

                    /** NextHopRouterApplianceInstance uri */
                    uri?: (string|null);

                    /** NextHopRouterApplianceInstance vpcNetwork */
                    vpcNetwork?: (string|null);

                    /** NextHopRouterApplianceInstance siteToSiteDataTransfer */
                    siteToSiteDataTransfer?: (boolean|null);
                }

                /** Represents a NextHopRouterApplianceInstance. */
                class NextHopRouterApplianceInstance implements INextHopRouterApplianceInstance {

                    /**
                     * Constructs a new NextHopRouterApplianceInstance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.INextHopRouterApplianceInstance);

                    /** NextHopRouterApplianceInstance uri. */
                    public uri: string;

                    /** NextHopRouterApplianceInstance vpcNetwork. */
                    public vpcNetwork: string;

                    /** NextHopRouterApplianceInstance siteToSiteDataTransfer. */
                    public siteToSiteDataTransfer: boolean;

                    /**
                     * Creates a new NextHopRouterApplianceInstance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NextHopRouterApplianceInstance instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.INextHopRouterApplianceInstance): google.cloud.networkconnectivity.v1.NextHopRouterApplianceInstance;

                    /**
                     * Encodes the specified NextHopRouterApplianceInstance message. Does not implicitly {@link google.cloud.networkconnectivity.v1.NextHopRouterApplianceInstance.verify|verify} messages.
                     * @param message NextHopRouterApplianceInstance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.INextHopRouterApplianceInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NextHopRouterApplianceInstance message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.NextHopRouterApplianceInstance.verify|verify} messages.
                     * @param message NextHopRouterApplianceInstance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.INextHopRouterApplianceInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NextHopRouterApplianceInstance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NextHopRouterApplianceInstance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.NextHopRouterApplianceInstance;

                    /**
                     * Decodes a NextHopRouterApplianceInstance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NextHopRouterApplianceInstance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.NextHopRouterApplianceInstance;

                    /**
                     * Verifies a NextHopRouterApplianceInstance message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NextHopRouterApplianceInstance message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NextHopRouterApplianceInstance
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.NextHopRouterApplianceInstance;

                    /**
                     * Creates a plain object from a NextHopRouterApplianceInstance message. Also converts values to other types if specified.
                     * @param message NextHopRouterApplianceInstance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.NextHopRouterApplianceInstance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NextHopRouterApplianceInstance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NextHopRouterApplianceInstance
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NextHopInterconnectAttachment. */
                interface INextHopInterconnectAttachment {

                    /** NextHopInterconnectAttachment uri */
                    uri?: (string|null);

                    /** NextHopInterconnectAttachment vpcNetwork */
                    vpcNetwork?: (string|null);

                    /** NextHopInterconnectAttachment siteToSiteDataTransfer */
                    siteToSiteDataTransfer?: (boolean|null);
                }

                /** Represents a NextHopInterconnectAttachment. */
                class NextHopInterconnectAttachment implements INextHopInterconnectAttachment {

                    /**
                     * Constructs a new NextHopInterconnectAttachment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.INextHopInterconnectAttachment);

                    /** NextHopInterconnectAttachment uri. */
                    public uri: string;

                    /** NextHopInterconnectAttachment vpcNetwork. */
                    public vpcNetwork: string;

                    /** NextHopInterconnectAttachment siteToSiteDataTransfer. */
                    public siteToSiteDataTransfer: boolean;

                    /**
                     * Creates a new NextHopInterconnectAttachment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NextHopInterconnectAttachment instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.INextHopInterconnectAttachment): google.cloud.networkconnectivity.v1.NextHopInterconnectAttachment;

                    /**
                     * Encodes the specified NextHopInterconnectAttachment message. Does not implicitly {@link google.cloud.networkconnectivity.v1.NextHopInterconnectAttachment.verify|verify} messages.
                     * @param message NextHopInterconnectAttachment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.INextHopInterconnectAttachment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NextHopInterconnectAttachment message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.NextHopInterconnectAttachment.verify|verify} messages.
                     * @param message NextHopInterconnectAttachment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.INextHopInterconnectAttachment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NextHopInterconnectAttachment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NextHopInterconnectAttachment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.NextHopInterconnectAttachment;

                    /**
                     * Decodes a NextHopInterconnectAttachment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NextHopInterconnectAttachment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.NextHopInterconnectAttachment;

                    /**
                     * Verifies a NextHopInterconnectAttachment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NextHopInterconnectAttachment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NextHopInterconnectAttachment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.NextHopInterconnectAttachment;

                    /**
                     * Creates a plain object from a NextHopInterconnectAttachment message. Also converts values to other types if specified.
                     * @param message NextHopInterconnectAttachment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.NextHopInterconnectAttachment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NextHopInterconnectAttachment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NextHopInterconnectAttachment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SpokeSummary. */
                interface ISpokeSummary {

                    /** SpokeSummary spokeTypeCounts */
                    spokeTypeCounts?: (google.cloud.networkconnectivity.v1.SpokeSummary.ISpokeTypeCount[]|null);

                    /** SpokeSummary spokeStateCounts */
                    spokeStateCounts?: (google.cloud.networkconnectivity.v1.SpokeSummary.ISpokeStateCount[]|null);

                    /** SpokeSummary spokeStateReasonCounts */
                    spokeStateReasonCounts?: (google.cloud.networkconnectivity.v1.SpokeSummary.ISpokeStateReasonCount[]|null);
                }

                /** Represents a SpokeSummary. */
                class SpokeSummary implements ISpokeSummary {

                    /**
                     * Constructs a new SpokeSummary.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.ISpokeSummary);

                    /** SpokeSummary spokeTypeCounts. */
                    public spokeTypeCounts: google.cloud.networkconnectivity.v1.SpokeSummary.ISpokeTypeCount[];

                    /** SpokeSummary spokeStateCounts. */
                    public spokeStateCounts: google.cloud.networkconnectivity.v1.SpokeSummary.ISpokeStateCount[];

                    /** SpokeSummary spokeStateReasonCounts. */
                    public spokeStateReasonCounts: google.cloud.networkconnectivity.v1.SpokeSummary.ISpokeStateReasonCount[];

                    /**
                     * Creates a new SpokeSummary instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SpokeSummary instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.ISpokeSummary): google.cloud.networkconnectivity.v1.SpokeSummary;

                    /**
                     * Encodes the specified SpokeSummary message. Does not implicitly {@link google.cloud.networkconnectivity.v1.SpokeSummary.verify|verify} messages.
                     * @param message SpokeSummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.ISpokeSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SpokeSummary message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.SpokeSummary.verify|verify} messages.
                     * @param message SpokeSummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.ISpokeSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SpokeSummary message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SpokeSummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.SpokeSummary;

                    /**
                     * Decodes a SpokeSummary message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SpokeSummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.SpokeSummary;

                    /**
                     * Verifies a SpokeSummary message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SpokeSummary message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SpokeSummary
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.SpokeSummary;

                    /**
                     * Creates a plain object from a SpokeSummary message. Also converts values to other types if specified.
                     * @param message SpokeSummary
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.SpokeSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SpokeSummary to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SpokeSummary
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SpokeSummary {

                    /** Properties of a SpokeTypeCount. */
                    interface ISpokeTypeCount {

                        /** SpokeTypeCount spokeType */
                        spokeType?: (google.cloud.networkconnectivity.v1.SpokeType|keyof typeof google.cloud.networkconnectivity.v1.SpokeType|null);

                        /** SpokeTypeCount count */
                        count?: (number|Long|string|null);
                    }

                    /** Represents a SpokeTypeCount. */
                    class SpokeTypeCount implements ISpokeTypeCount {

                        /**
                         * Constructs a new SpokeTypeCount.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkconnectivity.v1.SpokeSummary.ISpokeTypeCount);

                        /** SpokeTypeCount spokeType. */
                        public spokeType: (google.cloud.networkconnectivity.v1.SpokeType|keyof typeof google.cloud.networkconnectivity.v1.SpokeType);

                        /** SpokeTypeCount count. */
                        public count: (number|Long|string);

                        /**
                         * Creates a new SpokeTypeCount instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SpokeTypeCount instance
                         */
                        public static create(properties?: google.cloud.networkconnectivity.v1.SpokeSummary.ISpokeTypeCount): google.cloud.networkconnectivity.v1.SpokeSummary.SpokeTypeCount;

                        /**
                         * Encodes the specified SpokeTypeCount message. Does not implicitly {@link google.cloud.networkconnectivity.v1.SpokeSummary.SpokeTypeCount.verify|verify} messages.
                         * @param message SpokeTypeCount message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkconnectivity.v1.SpokeSummary.ISpokeTypeCount, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SpokeTypeCount message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.SpokeSummary.SpokeTypeCount.verify|verify} messages.
                         * @param message SpokeTypeCount message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkconnectivity.v1.SpokeSummary.ISpokeTypeCount, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SpokeTypeCount message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SpokeTypeCount
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.SpokeSummary.SpokeTypeCount;

                        /**
                         * Decodes a SpokeTypeCount message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SpokeTypeCount
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.SpokeSummary.SpokeTypeCount;

                        /**
                         * Verifies a SpokeTypeCount message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SpokeTypeCount message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SpokeTypeCount
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.SpokeSummary.SpokeTypeCount;

                        /**
                         * Creates a plain object from a SpokeTypeCount message. Also converts values to other types if specified.
                         * @param message SpokeTypeCount
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkconnectivity.v1.SpokeSummary.SpokeTypeCount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SpokeTypeCount to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SpokeTypeCount
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SpokeStateCount. */
                    interface ISpokeStateCount {

                        /** SpokeStateCount state */
                        state?: (google.cloud.networkconnectivity.v1.State|keyof typeof google.cloud.networkconnectivity.v1.State|null);

                        /** SpokeStateCount count */
                        count?: (number|Long|string|null);
                    }

                    /** Represents a SpokeStateCount. */
                    class SpokeStateCount implements ISpokeStateCount {

                        /**
                         * Constructs a new SpokeStateCount.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkconnectivity.v1.SpokeSummary.ISpokeStateCount);

                        /** SpokeStateCount state. */
                        public state: (google.cloud.networkconnectivity.v1.State|keyof typeof google.cloud.networkconnectivity.v1.State);

                        /** SpokeStateCount count. */
                        public count: (number|Long|string);

                        /**
                         * Creates a new SpokeStateCount instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SpokeStateCount instance
                         */
                        public static create(properties?: google.cloud.networkconnectivity.v1.SpokeSummary.ISpokeStateCount): google.cloud.networkconnectivity.v1.SpokeSummary.SpokeStateCount;

                        /**
                         * Encodes the specified SpokeStateCount message. Does not implicitly {@link google.cloud.networkconnectivity.v1.SpokeSummary.SpokeStateCount.verify|verify} messages.
                         * @param message SpokeStateCount message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkconnectivity.v1.SpokeSummary.ISpokeStateCount, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SpokeStateCount message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.SpokeSummary.SpokeStateCount.verify|verify} messages.
                         * @param message SpokeStateCount message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkconnectivity.v1.SpokeSummary.ISpokeStateCount, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SpokeStateCount message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SpokeStateCount
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.SpokeSummary.SpokeStateCount;

                        /**
                         * Decodes a SpokeStateCount message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SpokeStateCount
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.SpokeSummary.SpokeStateCount;

                        /**
                         * Verifies a SpokeStateCount message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SpokeStateCount message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SpokeStateCount
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.SpokeSummary.SpokeStateCount;

                        /**
                         * Creates a plain object from a SpokeStateCount message. Also converts values to other types if specified.
                         * @param message SpokeStateCount
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkconnectivity.v1.SpokeSummary.SpokeStateCount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SpokeStateCount to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SpokeStateCount
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SpokeStateReasonCount. */
                    interface ISpokeStateReasonCount {

                        /** SpokeStateReasonCount stateReasonCode */
                        stateReasonCode?: (google.cloud.networkconnectivity.v1.Spoke.StateReason.Code|keyof typeof google.cloud.networkconnectivity.v1.Spoke.StateReason.Code|null);

                        /** SpokeStateReasonCount count */
                        count?: (number|Long|string|null);
                    }

                    /** Represents a SpokeStateReasonCount. */
                    class SpokeStateReasonCount implements ISpokeStateReasonCount {

                        /**
                         * Constructs a new SpokeStateReasonCount.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkconnectivity.v1.SpokeSummary.ISpokeStateReasonCount);

                        /** SpokeStateReasonCount stateReasonCode. */
                        public stateReasonCode: (google.cloud.networkconnectivity.v1.Spoke.StateReason.Code|keyof typeof google.cloud.networkconnectivity.v1.Spoke.StateReason.Code);

                        /** SpokeStateReasonCount count. */
                        public count: (number|Long|string);

                        /**
                         * Creates a new SpokeStateReasonCount instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SpokeStateReasonCount instance
                         */
                        public static create(properties?: google.cloud.networkconnectivity.v1.SpokeSummary.ISpokeStateReasonCount): google.cloud.networkconnectivity.v1.SpokeSummary.SpokeStateReasonCount;

                        /**
                         * Encodes the specified SpokeStateReasonCount message. Does not implicitly {@link google.cloud.networkconnectivity.v1.SpokeSummary.SpokeStateReasonCount.verify|verify} messages.
                         * @param message SpokeStateReasonCount message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkconnectivity.v1.SpokeSummary.ISpokeStateReasonCount, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SpokeStateReasonCount message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.SpokeSummary.SpokeStateReasonCount.verify|verify} messages.
                         * @param message SpokeStateReasonCount message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkconnectivity.v1.SpokeSummary.ISpokeStateReasonCount, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SpokeStateReasonCount message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SpokeStateReasonCount
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.SpokeSummary.SpokeStateReasonCount;

                        /**
                         * Decodes a SpokeStateReasonCount message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SpokeStateReasonCount
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.SpokeSummary.SpokeStateReasonCount;

                        /**
                         * Verifies a SpokeStateReasonCount message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SpokeStateReasonCount message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SpokeStateReasonCount
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.SpokeSummary.SpokeStateReasonCount;

                        /**
                         * Creates a plain object from a SpokeStateReasonCount message. Also converts values to other types if specified.
                         * @param message SpokeStateReasonCount
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkconnectivity.v1.SpokeSummary.SpokeStateReasonCount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SpokeStateReasonCount to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SpokeStateReasonCount
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a GetGroupRequest. */
                interface IGetGroupRequest {

                    /** GetGroupRequest name */
                    name?: (string|null);
                }

                /** Represents a GetGroupRequest. */
                class GetGroupRequest implements IGetGroupRequest {

                    /**
                     * Constructs a new GetGroupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IGetGroupRequest);

                    /** GetGroupRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetGroupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetGroupRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IGetGroupRequest): google.cloud.networkconnectivity.v1.GetGroupRequest;

                    /**
                     * Encodes the specified GetGroupRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.GetGroupRequest.verify|verify} messages.
                     * @param message GetGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IGetGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetGroupRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.GetGroupRequest.verify|verify} messages.
                     * @param message GetGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IGetGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetGroupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.GetGroupRequest;

                    /**
                     * Decodes a GetGroupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.GetGroupRequest;

                    /**
                     * Verifies a GetGroupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetGroupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetGroupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.GetGroupRequest;

                    /**
                     * Creates a plain object from a GetGroupRequest message. Also converts values to other types if specified.
                     * @param message GetGroupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.GetGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetGroupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetGroupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateGroupRequest. */
                interface IUpdateGroupRequest {

                    /** UpdateGroupRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateGroupRequest group */
                    group?: (google.cloud.networkconnectivity.v1.IGroup|null);

                    /** UpdateGroupRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateGroupRequest. */
                class UpdateGroupRequest implements IUpdateGroupRequest {

                    /**
                     * Constructs a new UpdateGroupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IUpdateGroupRequest);

                    /** UpdateGroupRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateGroupRequest group. */
                    public group?: (google.cloud.networkconnectivity.v1.IGroup|null);

                    /** UpdateGroupRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateGroupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateGroupRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IUpdateGroupRequest): google.cloud.networkconnectivity.v1.UpdateGroupRequest;

                    /**
                     * Encodes the specified UpdateGroupRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.UpdateGroupRequest.verify|verify} messages.
                     * @param message UpdateGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IUpdateGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateGroupRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.UpdateGroupRequest.verify|verify} messages.
                     * @param message UpdateGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IUpdateGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateGroupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.UpdateGroupRequest;

                    /**
                     * Decodes an UpdateGroupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.UpdateGroupRequest;

                    /**
                     * Verifies an UpdateGroupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateGroupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateGroupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.UpdateGroupRequest;

                    /**
                     * Creates a plain object from an UpdateGroupRequest message. Also converts values to other types if specified.
                     * @param message UpdateGroupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.UpdateGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateGroupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateGroupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a PolicyBasedRoutingService */
                class PolicyBasedRoutingService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new PolicyBasedRoutingService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new PolicyBasedRoutingService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PolicyBasedRoutingService;

                    /**
                     * Calls ListPolicyBasedRoutes.
                     * @param request ListPolicyBasedRoutesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPolicyBasedRoutesResponse
                     */
                    public listPolicyBasedRoutes(request: google.cloud.networkconnectivity.v1.IListPolicyBasedRoutesRequest, callback: google.cloud.networkconnectivity.v1.PolicyBasedRoutingService.ListPolicyBasedRoutesCallback): void;

                    /**
                     * Calls ListPolicyBasedRoutes.
                     * @param request ListPolicyBasedRoutesRequest message or plain object
                     * @returns Promise
                     */
                    public listPolicyBasedRoutes(request: google.cloud.networkconnectivity.v1.IListPolicyBasedRoutesRequest): Promise<google.cloud.networkconnectivity.v1.ListPolicyBasedRoutesResponse>;

                    /**
                     * Calls GetPolicyBasedRoute.
                     * @param request GetPolicyBasedRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PolicyBasedRoute
                     */
                    public getPolicyBasedRoute(request: google.cloud.networkconnectivity.v1.IGetPolicyBasedRouteRequest, callback: google.cloud.networkconnectivity.v1.PolicyBasedRoutingService.GetPolicyBasedRouteCallback): void;

                    /**
                     * Calls GetPolicyBasedRoute.
                     * @param request GetPolicyBasedRouteRequest message or plain object
                     * @returns Promise
                     */
                    public getPolicyBasedRoute(request: google.cloud.networkconnectivity.v1.IGetPolicyBasedRouteRequest): Promise<google.cloud.networkconnectivity.v1.PolicyBasedRoute>;

                    /**
                     * Calls CreatePolicyBasedRoute.
                     * @param request CreatePolicyBasedRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createPolicyBasedRoute(request: google.cloud.networkconnectivity.v1.ICreatePolicyBasedRouteRequest, callback: google.cloud.networkconnectivity.v1.PolicyBasedRoutingService.CreatePolicyBasedRouteCallback): void;

                    /**
                     * Calls CreatePolicyBasedRoute.
                     * @param request CreatePolicyBasedRouteRequest message or plain object
                     * @returns Promise
                     */
                    public createPolicyBasedRoute(request: google.cloud.networkconnectivity.v1.ICreatePolicyBasedRouteRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeletePolicyBasedRoute.
                     * @param request DeletePolicyBasedRouteRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deletePolicyBasedRoute(request: google.cloud.networkconnectivity.v1.IDeletePolicyBasedRouteRequest, callback: google.cloud.networkconnectivity.v1.PolicyBasedRoutingService.DeletePolicyBasedRouteCallback): void;

                    /**
                     * Calls DeletePolicyBasedRoute.
                     * @param request DeletePolicyBasedRouteRequest message or plain object
                     * @returns Promise
                     */
                    public deletePolicyBasedRoute(request: google.cloud.networkconnectivity.v1.IDeletePolicyBasedRouteRequest): Promise<google.longrunning.Operation>;
                }

                namespace PolicyBasedRoutingService {

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.PolicyBasedRoutingService|listPolicyBasedRoutes}.
                     * @param error Error, if any
                     * @param [response] ListPolicyBasedRoutesResponse
                     */
                    type ListPolicyBasedRoutesCallback = (error: (Error|null), response?: google.cloud.networkconnectivity.v1.ListPolicyBasedRoutesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.PolicyBasedRoutingService|getPolicyBasedRoute}.
                     * @param error Error, if any
                     * @param [response] PolicyBasedRoute
                     */
                    type GetPolicyBasedRouteCallback = (error: (Error|null), response?: google.cloud.networkconnectivity.v1.PolicyBasedRoute) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.PolicyBasedRoutingService|createPolicyBasedRoute}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreatePolicyBasedRouteCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1.PolicyBasedRoutingService|deletePolicyBasedRoute}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeletePolicyBasedRouteCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a PolicyBasedRoute. */
                interface IPolicyBasedRoute {

                    /** PolicyBasedRoute virtualMachine */
                    virtualMachine?: (google.cloud.networkconnectivity.v1.PolicyBasedRoute.IVirtualMachine|null);

                    /** PolicyBasedRoute interconnectAttachment */
                    interconnectAttachment?: (google.cloud.networkconnectivity.v1.PolicyBasedRoute.IInterconnectAttachment|null);

                    /** PolicyBasedRoute nextHopIlbIp */
                    nextHopIlbIp?: (string|null);

                    /** PolicyBasedRoute nextHopOtherRoutes */
                    nextHopOtherRoutes?: (google.cloud.networkconnectivity.v1.PolicyBasedRoute.OtherRoutes|keyof typeof google.cloud.networkconnectivity.v1.PolicyBasedRoute.OtherRoutes|null);

                    /** PolicyBasedRoute name */
                    name?: (string|null);

                    /** PolicyBasedRoute createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** PolicyBasedRoute updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** PolicyBasedRoute labels */
                    labels?: ({ [k: string]: string }|null);

                    /** PolicyBasedRoute description */
                    description?: (string|null);

                    /** PolicyBasedRoute network */
                    network?: (string|null);

                    /** PolicyBasedRoute filter */
                    filter?: (google.cloud.networkconnectivity.v1.PolicyBasedRoute.IFilter|null);

                    /** PolicyBasedRoute priority */
                    priority?: (number|null);

                    /** PolicyBasedRoute warnings */
                    warnings?: (google.cloud.networkconnectivity.v1.PolicyBasedRoute.IWarnings[]|null);

                    /** PolicyBasedRoute selfLink */
                    selfLink?: (string|null);

                    /** PolicyBasedRoute kind */
                    kind?: (string|null);
                }

                /** Represents a PolicyBasedRoute. */
                class PolicyBasedRoute implements IPolicyBasedRoute {

                    /**
                     * Constructs a new PolicyBasedRoute.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IPolicyBasedRoute);

                    /** PolicyBasedRoute virtualMachine. */
                    public virtualMachine?: (google.cloud.networkconnectivity.v1.PolicyBasedRoute.IVirtualMachine|null);

                    /** PolicyBasedRoute interconnectAttachment. */
                    public interconnectAttachment?: (google.cloud.networkconnectivity.v1.PolicyBasedRoute.IInterconnectAttachment|null);

                    /** PolicyBasedRoute nextHopIlbIp. */
                    public nextHopIlbIp?: (string|null);

                    /** PolicyBasedRoute nextHopOtherRoutes. */
                    public nextHopOtherRoutes?: (google.cloud.networkconnectivity.v1.PolicyBasedRoute.OtherRoutes|keyof typeof google.cloud.networkconnectivity.v1.PolicyBasedRoute.OtherRoutes|null);

                    /** PolicyBasedRoute name. */
                    public name: string;

                    /** PolicyBasedRoute createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** PolicyBasedRoute updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** PolicyBasedRoute labels. */
                    public labels: { [k: string]: string };

                    /** PolicyBasedRoute description. */
                    public description: string;

                    /** PolicyBasedRoute network. */
                    public network: string;

                    /** PolicyBasedRoute filter. */
                    public filter?: (google.cloud.networkconnectivity.v1.PolicyBasedRoute.IFilter|null);

                    /** PolicyBasedRoute priority. */
                    public priority: number;

                    /** PolicyBasedRoute warnings. */
                    public warnings: google.cloud.networkconnectivity.v1.PolicyBasedRoute.IWarnings[];

                    /** PolicyBasedRoute selfLink. */
                    public selfLink: string;

                    /** PolicyBasedRoute kind. */
                    public kind: string;

                    /** PolicyBasedRoute target. */
                    public target?: ("virtualMachine"|"interconnectAttachment");

                    /** PolicyBasedRoute nextHop. */
                    public nextHop?: ("nextHopIlbIp"|"nextHopOtherRoutes");

                    /**
                     * Creates a new PolicyBasedRoute instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PolicyBasedRoute instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IPolicyBasedRoute): google.cloud.networkconnectivity.v1.PolicyBasedRoute;

                    /**
                     * Encodes the specified PolicyBasedRoute message. Does not implicitly {@link google.cloud.networkconnectivity.v1.PolicyBasedRoute.verify|verify} messages.
                     * @param message PolicyBasedRoute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IPolicyBasedRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PolicyBasedRoute message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.PolicyBasedRoute.verify|verify} messages.
                     * @param message PolicyBasedRoute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IPolicyBasedRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PolicyBasedRoute message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PolicyBasedRoute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.PolicyBasedRoute;

                    /**
                     * Decodes a PolicyBasedRoute message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PolicyBasedRoute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.PolicyBasedRoute;

                    /**
                     * Verifies a PolicyBasedRoute message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PolicyBasedRoute message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PolicyBasedRoute
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.PolicyBasedRoute;

                    /**
                     * Creates a plain object from a PolicyBasedRoute message. Also converts values to other types if specified.
                     * @param message PolicyBasedRoute
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.PolicyBasedRoute, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PolicyBasedRoute to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PolicyBasedRoute
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PolicyBasedRoute {

                    /** Properties of a VirtualMachine. */
                    interface IVirtualMachine {

                        /** VirtualMachine tags */
                        tags?: (string[]|null);
                    }

                    /** Represents a VirtualMachine. */
                    class VirtualMachine implements IVirtualMachine {

                        /**
                         * Constructs a new VirtualMachine.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkconnectivity.v1.PolicyBasedRoute.IVirtualMachine);

                        /** VirtualMachine tags. */
                        public tags: string[];

                        /**
                         * Creates a new VirtualMachine instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VirtualMachine instance
                         */
                        public static create(properties?: google.cloud.networkconnectivity.v1.PolicyBasedRoute.IVirtualMachine): google.cloud.networkconnectivity.v1.PolicyBasedRoute.VirtualMachine;

                        /**
                         * Encodes the specified VirtualMachine message. Does not implicitly {@link google.cloud.networkconnectivity.v1.PolicyBasedRoute.VirtualMachine.verify|verify} messages.
                         * @param message VirtualMachine message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkconnectivity.v1.PolicyBasedRoute.IVirtualMachine, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VirtualMachine message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.PolicyBasedRoute.VirtualMachine.verify|verify} messages.
                         * @param message VirtualMachine message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkconnectivity.v1.PolicyBasedRoute.IVirtualMachine, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VirtualMachine message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VirtualMachine
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.PolicyBasedRoute.VirtualMachine;

                        /**
                         * Decodes a VirtualMachine message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VirtualMachine
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.PolicyBasedRoute.VirtualMachine;

                        /**
                         * Verifies a VirtualMachine message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VirtualMachine message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VirtualMachine
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.PolicyBasedRoute.VirtualMachine;

                        /**
                         * Creates a plain object from a VirtualMachine message. Also converts values to other types if specified.
                         * @param message VirtualMachine
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkconnectivity.v1.PolicyBasedRoute.VirtualMachine, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VirtualMachine to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for VirtualMachine
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an InterconnectAttachment. */
                    interface IInterconnectAttachment {

                        /** InterconnectAttachment region */
                        region?: (string|null);
                    }

                    /** Represents an InterconnectAttachment. */
                    class InterconnectAttachment implements IInterconnectAttachment {

                        /**
                         * Constructs a new InterconnectAttachment.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkconnectivity.v1.PolicyBasedRoute.IInterconnectAttachment);

                        /** InterconnectAttachment region. */
                        public region: string;

                        /**
                         * Creates a new InterconnectAttachment instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InterconnectAttachment instance
                         */
                        public static create(properties?: google.cloud.networkconnectivity.v1.PolicyBasedRoute.IInterconnectAttachment): google.cloud.networkconnectivity.v1.PolicyBasedRoute.InterconnectAttachment;

                        /**
                         * Encodes the specified InterconnectAttachment message. Does not implicitly {@link google.cloud.networkconnectivity.v1.PolicyBasedRoute.InterconnectAttachment.verify|verify} messages.
                         * @param message InterconnectAttachment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkconnectivity.v1.PolicyBasedRoute.IInterconnectAttachment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InterconnectAttachment message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.PolicyBasedRoute.InterconnectAttachment.verify|verify} messages.
                         * @param message InterconnectAttachment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkconnectivity.v1.PolicyBasedRoute.IInterconnectAttachment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InterconnectAttachment message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InterconnectAttachment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.PolicyBasedRoute.InterconnectAttachment;

                        /**
                         * Decodes an InterconnectAttachment message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InterconnectAttachment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.PolicyBasedRoute.InterconnectAttachment;

                        /**
                         * Verifies an InterconnectAttachment message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InterconnectAttachment message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InterconnectAttachment
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.PolicyBasedRoute.InterconnectAttachment;

                        /**
                         * Creates a plain object from an InterconnectAttachment message. Also converts values to other types if specified.
                         * @param message InterconnectAttachment
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkconnectivity.v1.PolicyBasedRoute.InterconnectAttachment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InterconnectAttachment to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InterconnectAttachment
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Filter. */
                    interface IFilter {

                        /** Filter ipProtocol */
                        ipProtocol?: (string|null);

                        /** Filter srcRange */
                        srcRange?: (string|null);

                        /** Filter destRange */
                        destRange?: (string|null);

                        /** Filter protocolVersion */
                        protocolVersion?: (google.cloud.networkconnectivity.v1.PolicyBasedRoute.Filter.ProtocolVersion|keyof typeof google.cloud.networkconnectivity.v1.PolicyBasedRoute.Filter.ProtocolVersion|null);
                    }

                    /** Represents a Filter. */
                    class Filter implements IFilter {

                        /**
                         * Constructs a new Filter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkconnectivity.v1.PolicyBasedRoute.IFilter);

                        /** Filter ipProtocol. */
                        public ipProtocol: string;

                        /** Filter srcRange. */
                        public srcRange: string;

                        /** Filter destRange. */
                        public destRange: string;

                        /** Filter protocolVersion. */
                        public protocolVersion: (google.cloud.networkconnectivity.v1.PolicyBasedRoute.Filter.ProtocolVersion|keyof typeof google.cloud.networkconnectivity.v1.PolicyBasedRoute.Filter.ProtocolVersion);

                        /**
                         * Creates a new Filter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Filter instance
                         */
                        public static create(properties?: google.cloud.networkconnectivity.v1.PolicyBasedRoute.IFilter): google.cloud.networkconnectivity.v1.PolicyBasedRoute.Filter;

                        /**
                         * Encodes the specified Filter message. Does not implicitly {@link google.cloud.networkconnectivity.v1.PolicyBasedRoute.Filter.verify|verify} messages.
                         * @param message Filter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkconnectivity.v1.PolicyBasedRoute.IFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Filter message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.PolicyBasedRoute.Filter.verify|verify} messages.
                         * @param message Filter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkconnectivity.v1.PolicyBasedRoute.IFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Filter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Filter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.PolicyBasedRoute.Filter;

                        /**
                         * Decodes a Filter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Filter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.PolicyBasedRoute.Filter;

                        /**
                         * Verifies a Filter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Filter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Filter
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.PolicyBasedRoute.Filter;

                        /**
                         * Creates a plain object from a Filter message. Also converts values to other types if specified.
                         * @param message Filter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkconnectivity.v1.PolicyBasedRoute.Filter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Filter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Filter
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Filter {

                        /** ProtocolVersion enum. */
                        enum ProtocolVersion {
                            PROTOCOL_VERSION_UNSPECIFIED = 0,
                            IPV4 = 1
                        }
                    }

                    /** Properties of a Warnings. */
                    interface IWarnings {

                        /** Warnings code */
                        code?: (google.cloud.networkconnectivity.v1.PolicyBasedRoute.Warnings.Code|keyof typeof google.cloud.networkconnectivity.v1.PolicyBasedRoute.Warnings.Code|null);

                        /** Warnings data */
                        data?: ({ [k: string]: string }|null);

                        /** Warnings warningMessage */
                        warningMessage?: (string|null);
                    }

                    /** Represents a Warnings. */
                    class Warnings implements IWarnings {

                        /**
                         * Constructs a new Warnings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networkconnectivity.v1.PolicyBasedRoute.IWarnings);

                        /** Warnings code. */
                        public code: (google.cloud.networkconnectivity.v1.PolicyBasedRoute.Warnings.Code|keyof typeof google.cloud.networkconnectivity.v1.PolicyBasedRoute.Warnings.Code);

                        /** Warnings data. */
                        public data: { [k: string]: string };

                        /** Warnings warningMessage. */
                        public warningMessage: string;

                        /**
                         * Creates a new Warnings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Warnings instance
                         */
                        public static create(properties?: google.cloud.networkconnectivity.v1.PolicyBasedRoute.IWarnings): google.cloud.networkconnectivity.v1.PolicyBasedRoute.Warnings;

                        /**
                         * Encodes the specified Warnings message. Does not implicitly {@link google.cloud.networkconnectivity.v1.PolicyBasedRoute.Warnings.verify|verify} messages.
                         * @param message Warnings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networkconnectivity.v1.PolicyBasedRoute.IWarnings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Warnings message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.PolicyBasedRoute.Warnings.verify|verify} messages.
                         * @param message Warnings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networkconnectivity.v1.PolicyBasedRoute.IWarnings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Warnings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Warnings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.PolicyBasedRoute.Warnings;

                        /**
                         * Decodes a Warnings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Warnings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.PolicyBasedRoute.Warnings;

                        /**
                         * Verifies a Warnings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Warnings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Warnings
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.PolicyBasedRoute.Warnings;

                        /**
                         * Creates a plain object from a Warnings message. Also converts values to other types if specified.
                         * @param message Warnings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networkconnectivity.v1.PolicyBasedRoute.Warnings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Warnings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Warnings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Warnings {

                        /** Code enum. */
                        enum Code {
                            WARNING_UNSPECIFIED = 0,
                            RESOURCE_NOT_ACTIVE = 1,
                            RESOURCE_BEING_MODIFIED = 2
                        }
                    }

                    /** OtherRoutes enum. */
                    enum OtherRoutes {
                        OTHER_ROUTES_UNSPECIFIED = 0,
                        DEFAULT_ROUTING = 1
                    }
                }

                /** Properties of a ListPolicyBasedRoutesRequest. */
                interface IListPolicyBasedRoutesRequest {

                    /** ListPolicyBasedRoutesRequest parent */
                    parent?: (string|null);

                    /** ListPolicyBasedRoutesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPolicyBasedRoutesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListPolicyBasedRoutesRequest filter */
                    filter?: (string|null);

                    /** ListPolicyBasedRoutesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListPolicyBasedRoutesRequest. */
                class ListPolicyBasedRoutesRequest implements IListPolicyBasedRoutesRequest {

                    /**
                     * Constructs a new ListPolicyBasedRoutesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IListPolicyBasedRoutesRequest);

                    /** ListPolicyBasedRoutesRequest parent. */
                    public parent: string;

                    /** ListPolicyBasedRoutesRequest pageSize. */
                    public pageSize: number;

                    /** ListPolicyBasedRoutesRequest pageToken. */
                    public pageToken: string;

                    /** ListPolicyBasedRoutesRequest filter. */
                    public filter: string;

                    /** ListPolicyBasedRoutesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListPolicyBasedRoutesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPolicyBasedRoutesRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IListPolicyBasedRoutesRequest): google.cloud.networkconnectivity.v1.ListPolicyBasedRoutesRequest;

                    /**
                     * Encodes the specified ListPolicyBasedRoutesRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListPolicyBasedRoutesRequest.verify|verify} messages.
                     * @param message ListPolicyBasedRoutesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IListPolicyBasedRoutesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPolicyBasedRoutesRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListPolicyBasedRoutesRequest.verify|verify} messages.
                     * @param message ListPolicyBasedRoutesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IListPolicyBasedRoutesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPolicyBasedRoutesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPolicyBasedRoutesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.ListPolicyBasedRoutesRequest;

                    /**
                     * Decodes a ListPolicyBasedRoutesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPolicyBasedRoutesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.ListPolicyBasedRoutesRequest;

                    /**
                     * Verifies a ListPolicyBasedRoutesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPolicyBasedRoutesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPolicyBasedRoutesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.ListPolicyBasedRoutesRequest;

                    /**
                     * Creates a plain object from a ListPolicyBasedRoutesRequest message. Also converts values to other types if specified.
                     * @param message ListPolicyBasedRoutesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.ListPolicyBasedRoutesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPolicyBasedRoutesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPolicyBasedRoutesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPolicyBasedRoutesResponse. */
                interface IListPolicyBasedRoutesResponse {

                    /** ListPolicyBasedRoutesResponse policyBasedRoutes */
                    policyBasedRoutes?: (google.cloud.networkconnectivity.v1.IPolicyBasedRoute[]|null);

                    /** ListPolicyBasedRoutesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListPolicyBasedRoutesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListPolicyBasedRoutesResponse. */
                class ListPolicyBasedRoutesResponse implements IListPolicyBasedRoutesResponse {

                    /**
                     * Constructs a new ListPolicyBasedRoutesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IListPolicyBasedRoutesResponse);

                    /** ListPolicyBasedRoutesResponse policyBasedRoutes. */
                    public policyBasedRoutes: google.cloud.networkconnectivity.v1.IPolicyBasedRoute[];

                    /** ListPolicyBasedRoutesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListPolicyBasedRoutesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListPolicyBasedRoutesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPolicyBasedRoutesResponse instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IListPolicyBasedRoutesResponse): google.cloud.networkconnectivity.v1.ListPolicyBasedRoutesResponse;

                    /**
                     * Encodes the specified ListPolicyBasedRoutesResponse message. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListPolicyBasedRoutesResponse.verify|verify} messages.
                     * @param message ListPolicyBasedRoutesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IListPolicyBasedRoutesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPolicyBasedRoutesResponse message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.ListPolicyBasedRoutesResponse.verify|verify} messages.
                     * @param message ListPolicyBasedRoutesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IListPolicyBasedRoutesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPolicyBasedRoutesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPolicyBasedRoutesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.ListPolicyBasedRoutesResponse;

                    /**
                     * Decodes a ListPolicyBasedRoutesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPolicyBasedRoutesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.ListPolicyBasedRoutesResponse;

                    /**
                     * Verifies a ListPolicyBasedRoutesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPolicyBasedRoutesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPolicyBasedRoutesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.ListPolicyBasedRoutesResponse;

                    /**
                     * Creates a plain object from a ListPolicyBasedRoutesResponse message. Also converts values to other types if specified.
                     * @param message ListPolicyBasedRoutesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.ListPolicyBasedRoutesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPolicyBasedRoutesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPolicyBasedRoutesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPolicyBasedRouteRequest. */
                interface IGetPolicyBasedRouteRequest {

                    /** GetPolicyBasedRouteRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPolicyBasedRouteRequest. */
                class GetPolicyBasedRouteRequest implements IGetPolicyBasedRouteRequest {

                    /**
                     * Constructs a new GetPolicyBasedRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IGetPolicyBasedRouteRequest);

                    /** GetPolicyBasedRouteRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPolicyBasedRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPolicyBasedRouteRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IGetPolicyBasedRouteRequest): google.cloud.networkconnectivity.v1.GetPolicyBasedRouteRequest;

                    /**
                     * Encodes the specified GetPolicyBasedRouteRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.GetPolicyBasedRouteRequest.verify|verify} messages.
                     * @param message GetPolicyBasedRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IGetPolicyBasedRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPolicyBasedRouteRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.GetPolicyBasedRouteRequest.verify|verify} messages.
                     * @param message GetPolicyBasedRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IGetPolicyBasedRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPolicyBasedRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPolicyBasedRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.GetPolicyBasedRouteRequest;

                    /**
                     * Decodes a GetPolicyBasedRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPolicyBasedRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.GetPolicyBasedRouteRequest;

                    /**
                     * Verifies a GetPolicyBasedRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPolicyBasedRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPolicyBasedRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.GetPolicyBasedRouteRequest;

                    /**
                     * Creates a plain object from a GetPolicyBasedRouteRequest message. Also converts values to other types if specified.
                     * @param message GetPolicyBasedRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.GetPolicyBasedRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPolicyBasedRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPolicyBasedRouteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreatePolicyBasedRouteRequest. */
                interface ICreatePolicyBasedRouteRequest {

                    /** CreatePolicyBasedRouteRequest parent */
                    parent?: (string|null);

                    /** CreatePolicyBasedRouteRequest policyBasedRouteId */
                    policyBasedRouteId?: (string|null);

                    /** CreatePolicyBasedRouteRequest policyBasedRoute */
                    policyBasedRoute?: (google.cloud.networkconnectivity.v1.IPolicyBasedRoute|null);

                    /** CreatePolicyBasedRouteRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreatePolicyBasedRouteRequest. */
                class CreatePolicyBasedRouteRequest implements ICreatePolicyBasedRouteRequest {

                    /**
                     * Constructs a new CreatePolicyBasedRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.ICreatePolicyBasedRouteRequest);

                    /** CreatePolicyBasedRouteRequest parent. */
                    public parent: string;

                    /** CreatePolicyBasedRouteRequest policyBasedRouteId. */
                    public policyBasedRouteId: string;

                    /** CreatePolicyBasedRouteRequest policyBasedRoute. */
                    public policyBasedRoute?: (google.cloud.networkconnectivity.v1.IPolicyBasedRoute|null);

                    /** CreatePolicyBasedRouteRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreatePolicyBasedRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePolicyBasedRouteRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.ICreatePolicyBasedRouteRequest): google.cloud.networkconnectivity.v1.CreatePolicyBasedRouteRequest;

                    /**
                     * Encodes the specified CreatePolicyBasedRouteRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.CreatePolicyBasedRouteRequest.verify|verify} messages.
                     * @param message CreatePolicyBasedRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.ICreatePolicyBasedRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePolicyBasedRouteRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.CreatePolicyBasedRouteRequest.verify|verify} messages.
                     * @param message CreatePolicyBasedRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.ICreatePolicyBasedRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePolicyBasedRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePolicyBasedRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.CreatePolicyBasedRouteRequest;

                    /**
                     * Decodes a CreatePolicyBasedRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePolicyBasedRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.CreatePolicyBasedRouteRequest;

                    /**
                     * Verifies a CreatePolicyBasedRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePolicyBasedRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePolicyBasedRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.CreatePolicyBasedRouteRequest;

                    /**
                     * Creates a plain object from a CreatePolicyBasedRouteRequest message. Also converts values to other types if specified.
                     * @param message CreatePolicyBasedRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.CreatePolicyBasedRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePolicyBasedRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreatePolicyBasedRouteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeletePolicyBasedRouteRequest. */
                interface IDeletePolicyBasedRouteRequest {

                    /** DeletePolicyBasedRouteRequest name */
                    name?: (string|null);

                    /** DeletePolicyBasedRouteRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeletePolicyBasedRouteRequest. */
                class DeletePolicyBasedRouteRequest implements IDeletePolicyBasedRouteRequest {

                    /**
                     * Constructs a new DeletePolicyBasedRouteRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1.IDeletePolicyBasedRouteRequest);

                    /** DeletePolicyBasedRouteRequest name. */
                    public name: string;

                    /** DeletePolicyBasedRouteRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeletePolicyBasedRouteRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePolicyBasedRouteRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1.IDeletePolicyBasedRouteRequest): google.cloud.networkconnectivity.v1.DeletePolicyBasedRouteRequest;

                    /**
                     * Encodes the specified DeletePolicyBasedRouteRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1.DeletePolicyBasedRouteRequest.verify|verify} messages.
                     * @param message DeletePolicyBasedRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1.IDeletePolicyBasedRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePolicyBasedRouteRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1.DeletePolicyBasedRouteRequest.verify|verify} messages.
                     * @param message DeletePolicyBasedRouteRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1.IDeletePolicyBasedRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePolicyBasedRouteRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePolicyBasedRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1.DeletePolicyBasedRouteRequest;

                    /**
                     * Decodes a DeletePolicyBasedRouteRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePolicyBasedRouteRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1.DeletePolicyBasedRouteRequest;

                    /**
                     * Verifies a DeletePolicyBasedRouteRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePolicyBasedRouteRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePolicyBasedRouteRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1.DeletePolicyBasedRouteRequest;

                    /**
                     * Creates a plain object from a DeletePolicyBasedRouteRequest message. Also converts values to other types if specified.
                     * @param message DeletePolicyBasedRouteRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1.DeletePolicyBasedRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePolicyBasedRouteRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeletePolicyBasedRouteRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Namespace v1alpha1. */
            namespace v1alpha1 {

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
                    constructor(properties?: google.cloud.networkconnectivity.v1alpha1.IOperationMetadata);

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
                    public static create(properties?: google.cloud.networkconnectivity.v1alpha1.IOperationMetadata): google.cloud.networkconnectivity.v1alpha1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1alpha1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1alpha1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1alpha1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1alpha1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1alpha1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1alpha1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Represents a HubService */
                class HubService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new HubService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new HubService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): HubService;

                    /**
                     * Calls ListHubs.
                     * @param request ListHubsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListHubsResponse
                     */
                    public listHubs(request: google.cloud.networkconnectivity.v1alpha1.IListHubsRequest, callback: google.cloud.networkconnectivity.v1alpha1.HubService.ListHubsCallback): void;

                    /**
                     * Calls ListHubs.
                     * @param request ListHubsRequest message or plain object
                     * @returns Promise
                     */
                    public listHubs(request: google.cloud.networkconnectivity.v1alpha1.IListHubsRequest): Promise<google.cloud.networkconnectivity.v1alpha1.ListHubsResponse>;

                    /**
                     * Calls GetHub.
                     * @param request GetHubRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Hub
                     */
                    public getHub(request: google.cloud.networkconnectivity.v1alpha1.IGetHubRequest, callback: google.cloud.networkconnectivity.v1alpha1.HubService.GetHubCallback): void;

                    /**
                     * Calls GetHub.
                     * @param request GetHubRequest message or plain object
                     * @returns Promise
                     */
                    public getHub(request: google.cloud.networkconnectivity.v1alpha1.IGetHubRequest): Promise<google.cloud.networkconnectivity.v1alpha1.Hub>;

                    /**
                     * Calls CreateHub.
                     * @param request CreateHubRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createHub(request: google.cloud.networkconnectivity.v1alpha1.ICreateHubRequest, callback: google.cloud.networkconnectivity.v1alpha1.HubService.CreateHubCallback): void;

                    /**
                     * Calls CreateHub.
                     * @param request CreateHubRequest message or plain object
                     * @returns Promise
                     */
                    public createHub(request: google.cloud.networkconnectivity.v1alpha1.ICreateHubRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateHub.
                     * @param request UpdateHubRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateHub(request: google.cloud.networkconnectivity.v1alpha1.IUpdateHubRequest, callback: google.cloud.networkconnectivity.v1alpha1.HubService.UpdateHubCallback): void;

                    /**
                     * Calls UpdateHub.
                     * @param request UpdateHubRequest message or plain object
                     * @returns Promise
                     */
                    public updateHub(request: google.cloud.networkconnectivity.v1alpha1.IUpdateHubRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteHub.
                     * @param request DeleteHubRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteHub(request: google.cloud.networkconnectivity.v1alpha1.IDeleteHubRequest, callback: google.cloud.networkconnectivity.v1alpha1.HubService.DeleteHubCallback): void;

                    /**
                     * Calls DeleteHub.
                     * @param request DeleteHubRequest message or plain object
                     * @returns Promise
                     */
                    public deleteHub(request: google.cloud.networkconnectivity.v1alpha1.IDeleteHubRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListSpokes.
                     * @param request ListSpokesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListSpokesResponse
                     */
                    public listSpokes(request: google.cloud.networkconnectivity.v1alpha1.IListSpokesRequest, callback: google.cloud.networkconnectivity.v1alpha1.HubService.ListSpokesCallback): void;

                    /**
                     * Calls ListSpokes.
                     * @param request ListSpokesRequest message or plain object
                     * @returns Promise
                     */
                    public listSpokes(request: google.cloud.networkconnectivity.v1alpha1.IListSpokesRequest): Promise<google.cloud.networkconnectivity.v1alpha1.ListSpokesResponse>;

                    /**
                     * Calls GetSpoke.
                     * @param request GetSpokeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Spoke
                     */
                    public getSpoke(request: google.cloud.networkconnectivity.v1alpha1.IGetSpokeRequest, callback: google.cloud.networkconnectivity.v1alpha1.HubService.GetSpokeCallback): void;

                    /**
                     * Calls GetSpoke.
                     * @param request GetSpokeRequest message or plain object
                     * @returns Promise
                     */
                    public getSpoke(request: google.cloud.networkconnectivity.v1alpha1.IGetSpokeRequest): Promise<google.cloud.networkconnectivity.v1alpha1.Spoke>;

                    /**
                     * Calls CreateSpoke.
                     * @param request CreateSpokeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createSpoke(request: google.cloud.networkconnectivity.v1alpha1.ICreateSpokeRequest, callback: google.cloud.networkconnectivity.v1alpha1.HubService.CreateSpokeCallback): void;

                    /**
                     * Calls CreateSpoke.
                     * @param request CreateSpokeRequest message or plain object
                     * @returns Promise
                     */
                    public createSpoke(request: google.cloud.networkconnectivity.v1alpha1.ICreateSpokeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateSpoke.
                     * @param request UpdateSpokeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateSpoke(request: google.cloud.networkconnectivity.v1alpha1.IUpdateSpokeRequest, callback: google.cloud.networkconnectivity.v1alpha1.HubService.UpdateSpokeCallback): void;

                    /**
                     * Calls UpdateSpoke.
                     * @param request UpdateSpokeRequest message or plain object
                     * @returns Promise
                     */
                    public updateSpoke(request: google.cloud.networkconnectivity.v1alpha1.IUpdateSpokeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteSpoke.
                     * @param request DeleteSpokeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteSpoke(request: google.cloud.networkconnectivity.v1alpha1.IDeleteSpokeRequest, callback: google.cloud.networkconnectivity.v1alpha1.HubService.DeleteSpokeCallback): void;

                    /**
                     * Calls DeleteSpoke.
                     * @param request DeleteSpokeRequest message or plain object
                     * @returns Promise
                     */
                    public deleteSpoke(request: google.cloud.networkconnectivity.v1alpha1.IDeleteSpokeRequest): Promise<google.longrunning.Operation>;
                }

                namespace HubService {

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1alpha1.HubService|listHubs}.
                     * @param error Error, if any
                     * @param [response] ListHubsResponse
                     */
                    type ListHubsCallback = (error: (Error|null), response?: google.cloud.networkconnectivity.v1alpha1.ListHubsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1alpha1.HubService|getHub}.
                     * @param error Error, if any
                     * @param [response] Hub
                     */
                    type GetHubCallback = (error: (Error|null), response?: google.cloud.networkconnectivity.v1alpha1.Hub) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1alpha1.HubService|createHub}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateHubCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1alpha1.HubService|updateHub}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateHubCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1alpha1.HubService|deleteHub}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteHubCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1alpha1.HubService|listSpokes}.
                     * @param error Error, if any
                     * @param [response] ListSpokesResponse
                     */
                    type ListSpokesCallback = (error: (Error|null), response?: google.cloud.networkconnectivity.v1alpha1.ListSpokesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1alpha1.HubService|getSpoke}.
                     * @param error Error, if any
                     * @param [response] Spoke
                     */
                    type GetSpokeCallback = (error: (Error|null), response?: google.cloud.networkconnectivity.v1alpha1.Spoke) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1alpha1.HubService|createSpoke}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateSpokeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1alpha1.HubService|updateSpoke}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateSpokeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networkconnectivity.v1alpha1.HubService|deleteSpoke}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteSpokeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a Hub. */
                interface IHub {

                    /** Hub name */
                    name?: (string|null);

                    /** Hub createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Hub updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Hub labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Hub description */
                    description?: (string|null);

                    /** Hub spokes */
                    spokes?: (string[]|null);

                    /** Hub uniqueId */
                    uniqueId?: (string|null);

                    /** Hub state */
                    state?: (google.cloud.networkconnectivity.v1alpha1.State|keyof typeof google.cloud.networkconnectivity.v1alpha1.State|null);
                }

                /** Represents a Hub. */
                class Hub implements IHub {

                    /**
                     * Constructs a new Hub.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1alpha1.IHub);

                    /** Hub name. */
                    public name: string;

                    /** Hub createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Hub updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Hub labels. */
                    public labels: { [k: string]: string };

                    /** Hub description. */
                    public description: string;

                    /** Hub spokes. */
                    public spokes: string[];

                    /** Hub uniqueId. */
                    public uniqueId: string;

                    /** Hub state. */
                    public state: (google.cloud.networkconnectivity.v1alpha1.State|keyof typeof google.cloud.networkconnectivity.v1alpha1.State);

                    /**
                     * Creates a new Hub instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Hub instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1alpha1.IHub): google.cloud.networkconnectivity.v1alpha1.Hub;

                    /**
                     * Encodes the specified Hub message. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.Hub.verify|verify} messages.
                     * @param message Hub message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1alpha1.IHub, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Hub message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.Hub.verify|verify} messages.
                     * @param message Hub message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1alpha1.IHub, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Hub message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Hub
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1alpha1.Hub;

                    /**
                     * Decodes a Hub message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Hub
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1alpha1.Hub;

                    /**
                     * Verifies a Hub message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Hub message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Hub
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1alpha1.Hub;

                    /**
                     * Creates a plain object from a Hub message. Also converts values to other types if specified.
                     * @param message Hub
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1alpha1.Hub, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Hub to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Hub
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Spoke. */
                interface ISpoke {

                    /** Spoke name */
                    name?: (string|null);

                    /** Spoke createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Spoke updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Spoke labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Spoke description */
                    description?: (string|null);

                    /** Spoke hub */
                    hub?: (string|null);

                    /** Spoke linkedVpnTunnels */
                    linkedVpnTunnels?: (string[]|null);

                    /** Spoke linkedInterconnectAttachments */
                    linkedInterconnectAttachments?: (string[]|null);

                    /** Spoke linkedRouterApplianceInstances */
                    linkedRouterApplianceInstances?: (google.cloud.networkconnectivity.v1alpha1.IRouterApplianceInstance[]|null);

                    /** Spoke uniqueId */
                    uniqueId?: (string|null);

                    /** Spoke state */
                    state?: (google.cloud.networkconnectivity.v1alpha1.State|keyof typeof google.cloud.networkconnectivity.v1alpha1.State|null);
                }

                /** Represents a Spoke. */
                class Spoke implements ISpoke {

                    /**
                     * Constructs a new Spoke.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1alpha1.ISpoke);

                    /** Spoke name. */
                    public name: string;

                    /** Spoke createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Spoke updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Spoke labels. */
                    public labels: { [k: string]: string };

                    /** Spoke description. */
                    public description: string;

                    /** Spoke hub. */
                    public hub: string;

                    /** Spoke linkedVpnTunnels. */
                    public linkedVpnTunnels: string[];

                    /** Spoke linkedInterconnectAttachments. */
                    public linkedInterconnectAttachments: string[];

                    /** Spoke linkedRouterApplianceInstances. */
                    public linkedRouterApplianceInstances: google.cloud.networkconnectivity.v1alpha1.IRouterApplianceInstance[];

                    /** Spoke uniqueId. */
                    public uniqueId: string;

                    /** Spoke state. */
                    public state: (google.cloud.networkconnectivity.v1alpha1.State|keyof typeof google.cloud.networkconnectivity.v1alpha1.State);

                    /**
                     * Creates a new Spoke instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Spoke instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1alpha1.ISpoke): google.cloud.networkconnectivity.v1alpha1.Spoke;

                    /**
                     * Encodes the specified Spoke message. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.Spoke.verify|verify} messages.
                     * @param message Spoke message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1alpha1.ISpoke, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Spoke message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.Spoke.verify|verify} messages.
                     * @param message Spoke message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1alpha1.ISpoke, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Spoke message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Spoke
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1alpha1.Spoke;

                    /**
                     * Decodes a Spoke message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Spoke
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1alpha1.Spoke;

                    /**
                     * Verifies a Spoke message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Spoke message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Spoke
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1alpha1.Spoke;

                    /**
                     * Creates a plain object from a Spoke message. Also converts values to other types if specified.
                     * @param message Spoke
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1alpha1.Spoke, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Spoke to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Spoke
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListHubsRequest. */
                interface IListHubsRequest {

                    /** ListHubsRequest parent */
                    parent?: (string|null);

                    /** ListHubsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListHubsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListHubsRequest filter */
                    filter?: (string|null);

                    /** ListHubsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListHubsRequest. */
                class ListHubsRequest implements IListHubsRequest {

                    /**
                     * Constructs a new ListHubsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1alpha1.IListHubsRequest);

                    /** ListHubsRequest parent. */
                    public parent: string;

                    /** ListHubsRequest pageSize. */
                    public pageSize: number;

                    /** ListHubsRequest pageToken. */
                    public pageToken: string;

                    /** ListHubsRequest filter. */
                    public filter: string;

                    /** ListHubsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListHubsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListHubsRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1alpha1.IListHubsRequest): google.cloud.networkconnectivity.v1alpha1.ListHubsRequest;

                    /**
                     * Encodes the specified ListHubsRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.ListHubsRequest.verify|verify} messages.
                     * @param message ListHubsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1alpha1.IListHubsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListHubsRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.ListHubsRequest.verify|verify} messages.
                     * @param message ListHubsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1alpha1.IListHubsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListHubsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListHubsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1alpha1.ListHubsRequest;

                    /**
                     * Decodes a ListHubsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListHubsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1alpha1.ListHubsRequest;

                    /**
                     * Verifies a ListHubsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListHubsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListHubsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1alpha1.ListHubsRequest;

                    /**
                     * Creates a plain object from a ListHubsRequest message. Also converts values to other types if specified.
                     * @param message ListHubsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1alpha1.ListHubsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListHubsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListHubsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListHubsResponse. */
                interface IListHubsResponse {

                    /** ListHubsResponse hubs */
                    hubs?: (google.cloud.networkconnectivity.v1alpha1.IHub[]|null);

                    /** ListHubsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListHubsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListHubsResponse. */
                class ListHubsResponse implements IListHubsResponse {

                    /**
                     * Constructs a new ListHubsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1alpha1.IListHubsResponse);

                    /** ListHubsResponse hubs. */
                    public hubs: google.cloud.networkconnectivity.v1alpha1.IHub[];

                    /** ListHubsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListHubsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListHubsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListHubsResponse instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1alpha1.IListHubsResponse): google.cloud.networkconnectivity.v1alpha1.ListHubsResponse;

                    /**
                     * Encodes the specified ListHubsResponse message. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.ListHubsResponse.verify|verify} messages.
                     * @param message ListHubsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1alpha1.IListHubsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListHubsResponse message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.ListHubsResponse.verify|verify} messages.
                     * @param message ListHubsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1alpha1.IListHubsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListHubsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListHubsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1alpha1.ListHubsResponse;

                    /**
                     * Decodes a ListHubsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListHubsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1alpha1.ListHubsResponse;

                    /**
                     * Verifies a ListHubsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListHubsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListHubsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1alpha1.ListHubsResponse;

                    /**
                     * Creates a plain object from a ListHubsResponse message. Also converts values to other types if specified.
                     * @param message ListHubsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1alpha1.ListHubsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListHubsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListHubsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetHubRequest. */
                interface IGetHubRequest {

                    /** GetHubRequest name */
                    name?: (string|null);
                }

                /** Represents a GetHubRequest. */
                class GetHubRequest implements IGetHubRequest {

                    /**
                     * Constructs a new GetHubRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1alpha1.IGetHubRequest);

                    /** GetHubRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetHubRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetHubRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1alpha1.IGetHubRequest): google.cloud.networkconnectivity.v1alpha1.GetHubRequest;

                    /**
                     * Encodes the specified GetHubRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.GetHubRequest.verify|verify} messages.
                     * @param message GetHubRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1alpha1.IGetHubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetHubRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.GetHubRequest.verify|verify} messages.
                     * @param message GetHubRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1alpha1.IGetHubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetHubRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetHubRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1alpha1.GetHubRequest;

                    /**
                     * Decodes a GetHubRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetHubRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1alpha1.GetHubRequest;

                    /**
                     * Verifies a GetHubRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetHubRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetHubRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1alpha1.GetHubRequest;

                    /**
                     * Creates a plain object from a GetHubRequest message. Also converts values to other types if specified.
                     * @param message GetHubRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1alpha1.GetHubRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetHubRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetHubRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateHubRequest. */
                interface ICreateHubRequest {

                    /** CreateHubRequest parent */
                    parent?: (string|null);

                    /** CreateHubRequest hubId */
                    hubId?: (string|null);

                    /** CreateHubRequest hub */
                    hub?: (google.cloud.networkconnectivity.v1alpha1.IHub|null);

                    /** CreateHubRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateHubRequest. */
                class CreateHubRequest implements ICreateHubRequest {

                    /**
                     * Constructs a new CreateHubRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1alpha1.ICreateHubRequest);

                    /** CreateHubRequest parent. */
                    public parent: string;

                    /** CreateHubRequest hubId. */
                    public hubId: string;

                    /** CreateHubRequest hub. */
                    public hub?: (google.cloud.networkconnectivity.v1alpha1.IHub|null);

                    /** CreateHubRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateHubRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateHubRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1alpha1.ICreateHubRequest): google.cloud.networkconnectivity.v1alpha1.CreateHubRequest;

                    /**
                     * Encodes the specified CreateHubRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.CreateHubRequest.verify|verify} messages.
                     * @param message CreateHubRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1alpha1.ICreateHubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateHubRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.CreateHubRequest.verify|verify} messages.
                     * @param message CreateHubRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1alpha1.ICreateHubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateHubRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateHubRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1alpha1.CreateHubRequest;

                    /**
                     * Decodes a CreateHubRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateHubRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1alpha1.CreateHubRequest;

                    /**
                     * Verifies a CreateHubRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateHubRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateHubRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1alpha1.CreateHubRequest;

                    /**
                     * Creates a plain object from a CreateHubRequest message. Also converts values to other types if specified.
                     * @param message CreateHubRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1alpha1.CreateHubRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateHubRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateHubRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateHubRequest. */
                interface IUpdateHubRequest {

                    /** UpdateHubRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateHubRequest hub */
                    hub?: (google.cloud.networkconnectivity.v1alpha1.IHub|null);

                    /** UpdateHubRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateHubRequest. */
                class UpdateHubRequest implements IUpdateHubRequest {

                    /**
                     * Constructs a new UpdateHubRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1alpha1.IUpdateHubRequest);

                    /** UpdateHubRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateHubRequest hub. */
                    public hub?: (google.cloud.networkconnectivity.v1alpha1.IHub|null);

                    /** UpdateHubRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateHubRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateHubRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1alpha1.IUpdateHubRequest): google.cloud.networkconnectivity.v1alpha1.UpdateHubRequest;

                    /**
                     * Encodes the specified UpdateHubRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.UpdateHubRequest.verify|verify} messages.
                     * @param message UpdateHubRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1alpha1.IUpdateHubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateHubRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.UpdateHubRequest.verify|verify} messages.
                     * @param message UpdateHubRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1alpha1.IUpdateHubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateHubRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateHubRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1alpha1.UpdateHubRequest;

                    /**
                     * Decodes an UpdateHubRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateHubRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1alpha1.UpdateHubRequest;

                    /**
                     * Verifies an UpdateHubRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateHubRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateHubRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1alpha1.UpdateHubRequest;

                    /**
                     * Creates a plain object from an UpdateHubRequest message. Also converts values to other types if specified.
                     * @param message UpdateHubRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1alpha1.UpdateHubRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateHubRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateHubRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteHubRequest. */
                interface IDeleteHubRequest {

                    /** DeleteHubRequest name */
                    name?: (string|null);

                    /** DeleteHubRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteHubRequest. */
                class DeleteHubRequest implements IDeleteHubRequest {

                    /**
                     * Constructs a new DeleteHubRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1alpha1.IDeleteHubRequest);

                    /** DeleteHubRequest name. */
                    public name: string;

                    /** DeleteHubRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteHubRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteHubRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1alpha1.IDeleteHubRequest): google.cloud.networkconnectivity.v1alpha1.DeleteHubRequest;

                    /**
                     * Encodes the specified DeleteHubRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.DeleteHubRequest.verify|verify} messages.
                     * @param message DeleteHubRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1alpha1.IDeleteHubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteHubRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.DeleteHubRequest.verify|verify} messages.
                     * @param message DeleteHubRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1alpha1.IDeleteHubRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteHubRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteHubRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1alpha1.DeleteHubRequest;

                    /**
                     * Decodes a DeleteHubRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteHubRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1alpha1.DeleteHubRequest;

                    /**
                     * Verifies a DeleteHubRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteHubRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteHubRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1alpha1.DeleteHubRequest;

                    /**
                     * Creates a plain object from a DeleteHubRequest message. Also converts values to other types if specified.
                     * @param message DeleteHubRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1alpha1.DeleteHubRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteHubRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteHubRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListSpokesRequest. */
                interface IListSpokesRequest {

                    /** ListSpokesRequest parent */
                    parent?: (string|null);

                    /** ListSpokesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListSpokesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListSpokesRequest filter */
                    filter?: (string|null);

                    /** ListSpokesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListSpokesRequest. */
                class ListSpokesRequest implements IListSpokesRequest {

                    /**
                     * Constructs a new ListSpokesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1alpha1.IListSpokesRequest);

                    /** ListSpokesRequest parent. */
                    public parent: string;

                    /** ListSpokesRequest pageSize. */
                    public pageSize: number;

                    /** ListSpokesRequest pageToken. */
                    public pageToken: string;

                    /** ListSpokesRequest filter. */
                    public filter: string;

                    /** ListSpokesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListSpokesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSpokesRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1alpha1.IListSpokesRequest): google.cloud.networkconnectivity.v1alpha1.ListSpokesRequest;

                    /**
                     * Encodes the specified ListSpokesRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.ListSpokesRequest.verify|verify} messages.
                     * @param message ListSpokesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1alpha1.IListSpokesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSpokesRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.ListSpokesRequest.verify|verify} messages.
                     * @param message ListSpokesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1alpha1.IListSpokesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSpokesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSpokesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1alpha1.ListSpokesRequest;

                    /**
                     * Decodes a ListSpokesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSpokesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1alpha1.ListSpokesRequest;

                    /**
                     * Verifies a ListSpokesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSpokesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSpokesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1alpha1.ListSpokesRequest;

                    /**
                     * Creates a plain object from a ListSpokesRequest message. Also converts values to other types if specified.
                     * @param message ListSpokesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1alpha1.ListSpokesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSpokesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSpokesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListSpokesResponse. */
                interface IListSpokesResponse {

                    /** ListSpokesResponse spokes */
                    spokes?: (google.cloud.networkconnectivity.v1alpha1.ISpoke[]|null);

                    /** ListSpokesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListSpokesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListSpokesResponse. */
                class ListSpokesResponse implements IListSpokesResponse {

                    /**
                     * Constructs a new ListSpokesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1alpha1.IListSpokesResponse);

                    /** ListSpokesResponse spokes. */
                    public spokes: google.cloud.networkconnectivity.v1alpha1.ISpoke[];

                    /** ListSpokesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListSpokesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListSpokesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSpokesResponse instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1alpha1.IListSpokesResponse): google.cloud.networkconnectivity.v1alpha1.ListSpokesResponse;

                    /**
                     * Encodes the specified ListSpokesResponse message. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.ListSpokesResponse.verify|verify} messages.
                     * @param message ListSpokesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1alpha1.IListSpokesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSpokesResponse message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.ListSpokesResponse.verify|verify} messages.
                     * @param message ListSpokesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1alpha1.IListSpokesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSpokesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSpokesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1alpha1.ListSpokesResponse;

                    /**
                     * Decodes a ListSpokesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSpokesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1alpha1.ListSpokesResponse;

                    /**
                     * Verifies a ListSpokesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSpokesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSpokesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1alpha1.ListSpokesResponse;

                    /**
                     * Creates a plain object from a ListSpokesResponse message. Also converts values to other types if specified.
                     * @param message ListSpokesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1alpha1.ListSpokesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSpokesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSpokesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetSpokeRequest. */
                interface IGetSpokeRequest {

                    /** GetSpokeRequest name */
                    name?: (string|null);
                }

                /** Represents a GetSpokeRequest. */
                class GetSpokeRequest implements IGetSpokeRequest {

                    /**
                     * Constructs a new GetSpokeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1alpha1.IGetSpokeRequest);

                    /** GetSpokeRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetSpokeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSpokeRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1alpha1.IGetSpokeRequest): google.cloud.networkconnectivity.v1alpha1.GetSpokeRequest;

                    /**
                     * Encodes the specified GetSpokeRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.GetSpokeRequest.verify|verify} messages.
                     * @param message GetSpokeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1alpha1.IGetSpokeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSpokeRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.GetSpokeRequest.verify|verify} messages.
                     * @param message GetSpokeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1alpha1.IGetSpokeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSpokeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSpokeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1alpha1.GetSpokeRequest;

                    /**
                     * Decodes a GetSpokeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSpokeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1alpha1.GetSpokeRequest;

                    /**
                     * Verifies a GetSpokeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSpokeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSpokeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1alpha1.GetSpokeRequest;

                    /**
                     * Creates a plain object from a GetSpokeRequest message. Also converts values to other types if specified.
                     * @param message GetSpokeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1alpha1.GetSpokeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSpokeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetSpokeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateSpokeRequest. */
                interface ICreateSpokeRequest {

                    /** CreateSpokeRequest parent */
                    parent?: (string|null);

                    /** CreateSpokeRequest spokeId */
                    spokeId?: (string|null);

                    /** CreateSpokeRequest spoke */
                    spoke?: (google.cloud.networkconnectivity.v1alpha1.ISpoke|null);

                    /** CreateSpokeRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateSpokeRequest. */
                class CreateSpokeRequest implements ICreateSpokeRequest {

                    /**
                     * Constructs a new CreateSpokeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1alpha1.ICreateSpokeRequest);

                    /** CreateSpokeRequest parent. */
                    public parent: string;

                    /** CreateSpokeRequest spokeId. */
                    public spokeId: string;

                    /** CreateSpokeRequest spoke. */
                    public spoke?: (google.cloud.networkconnectivity.v1alpha1.ISpoke|null);

                    /** CreateSpokeRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateSpokeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateSpokeRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1alpha1.ICreateSpokeRequest): google.cloud.networkconnectivity.v1alpha1.CreateSpokeRequest;

                    /**
                     * Encodes the specified CreateSpokeRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.CreateSpokeRequest.verify|verify} messages.
                     * @param message CreateSpokeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1alpha1.ICreateSpokeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateSpokeRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.CreateSpokeRequest.verify|verify} messages.
                     * @param message CreateSpokeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1alpha1.ICreateSpokeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateSpokeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateSpokeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1alpha1.CreateSpokeRequest;

                    /**
                     * Decodes a CreateSpokeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateSpokeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1alpha1.CreateSpokeRequest;

                    /**
                     * Verifies a CreateSpokeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateSpokeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateSpokeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1alpha1.CreateSpokeRequest;

                    /**
                     * Creates a plain object from a CreateSpokeRequest message. Also converts values to other types if specified.
                     * @param message CreateSpokeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1alpha1.CreateSpokeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateSpokeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateSpokeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateSpokeRequest. */
                interface IUpdateSpokeRequest {

                    /** UpdateSpokeRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateSpokeRequest spoke */
                    spoke?: (google.cloud.networkconnectivity.v1alpha1.ISpoke|null);

                    /** UpdateSpokeRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateSpokeRequest. */
                class UpdateSpokeRequest implements IUpdateSpokeRequest {

                    /**
                     * Constructs a new UpdateSpokeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1alpha1.IUpdateSpokeRequest);

                    /** UpdateSpokeRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateSpokeRequest spoke. */
                    public spoke?: (google.cloud.networkconnectivity.v1alpha1.ISpoke|null);

                    /** UpdateSpokeRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateSpokeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateSpokeRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1alpha1.IUpdateSpokeRequest): google.cloud.networkconnectivity.v1alpha1.UpdateSpokeRequest;

                    /**
                     * Encodes the specified UpdateSpokeRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.UpdateSpokeRequest.verify|verify} messages.
                     * @param message UpdateSpokeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1alpha1.IUpdateSpokeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateSpokeRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.UpdateSpokeRequest.verify|verify} messages.
                     * @param message UpdateSpokeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1alpha1.IUpdateSpokeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSpokeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSpokeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1alpha1.UpdateSpokeRequest;

                    /**
                     * Decodes an UpdateSpokeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateSpokeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1alpha1.UpdateSpokeRequest;

                    /**
                     * Verifies an UpdateSpokeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateSpokeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateSpokeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1alpha1.UpdateSpokeRequest;

                    /**
                     * Creates a plain object from an UpdateSpokeRequest message. Also converts values to other types if specified.
                     * @param message UpdateSpokeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1alpha1.UpdateSpokeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateSpokeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateSpokeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteSpokeRequest. */
                interface IDeleteSpokeRequest {

                    /** DeleteSpokeRequest name */
                    name?: (string|null);

                    /** DeleteSpokeRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteSpokeRequest. */
                class DeleteSpokeRequest implements IDeleteSpokeRequest {

                    /**
                     * Constructs a new DeleteSpokeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1alpha1.IDeleteSpokeRequest);

                    /** DeleteSpokeRequest name. */
                    public name: string;

                    /** DeleteSpokeRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteSpokeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteSpokeRequest instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1alpha1.IDeleteSpokeRequest): google.cloud.networkconnectivity.v1alpha1.DeleteSpokeRequest;

                    /**
                     * Encodes the specified DeleteSpokeRequest message. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.DeleteSpokeRequest.verify|verify} messages.
                     * @param message DeleteSpokeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1alpha1.IDeleteSpokeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteSpokeRequest message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.DeleteSpokeRequest.verify|verify} messages.
                     * @param message DeleteSpokeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1alpha1.IDeleteSpokeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteSpokeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteSpokeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1alpha1.DeleteSpokeRequest;

                    /**
                     * Decodes a DeleteSpokeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteSpokeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1alpha1.DeleteSpokeRequest;

                    /**
                     * Verifies a DeleteSpokeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteSpokeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteSpokeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1alpha1.DeleteSpokeRequest;

                    /**
                     * Creates a plain object from a DeleteSpokeRequest message. Also converts values to other types if specified.
                     * @param message DeleteSpokeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1alpha1.DeleteSpokeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteSpokeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteSpokeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RouterApplianceInstance. */
                interface IRouterApplianceInstance {

                    /** RouterApplianceInstance virtualMachine */
                    virtualMachine?: (string|null);

                    /** RouterApplianceInstance ipAddress */
                    ipAddress?: (string|null);

                    /** RouterApplianceInstance networkInterface */
                    networkInterface?: (string|null);
                }

                /** Represents a RouterApplianceInstance. */
                class RouterApplianceInstance implements IRouterApplianceInstance {

                    /**
                     * Constructs a new RouterApplianceInstance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networkconnectivity.v1alpha1.IRouterApplianceInstance);

                    /** RouterApplianceInstance virtualMachine. */
                    public virtualMachine: string;

                    /** RouterApplianceInstance ipAddress. */
                    public ipAddress: string;

                    /** RouterApplianceInstance networkInterface. */
                    public networkInterface: string;

                    /**
                     * Creates a new RouterApplianceInstance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RouterApplianceInstance instance
                     */
                    public static create(properties?: google.cloud.networkconnectivity.v1alpha1.IRouterApplianceInstance): google.cloud.networkconnectivity.v1alpha1.RouterApplianceInstance;

                    /**
                     * Encodes the specified RouterApplianceInstance message. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.RouterApplianceInstance.verify|verify} messages.
                     * @param message RouterApplianceInstance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networkconnectivity.v1alpha1.IRouterApplianceInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RouterApplianceInstance message, length delimited. Does not implicitly {@link google.cloud.networkconnectivity.v1alpha1.RouterApplianceInstance.verify|verify} messages.
                     * @param message RouterApplianceInstance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networkconnectivity.v1alpha1.IRouterApplianceInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RouterApplianceInstance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RouterApplianceInstance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networkconnectivity.v1alpha1.RouterApplianceInstance;

                    /**
                     * Decodes a RouterApplianceInstance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RouterApplianceInstance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networkconnectivity.v1alpha1.RouterApplianceInstance;

                    /**
                     * Verifies a RouterApplianceInstance message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RouterApplianceInstance message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RouterApplianceInstance
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networkconnectivity.v1alpha1.RouterApplianceInstance;

                    /**
                     * Creates a plain object from a RouterApplianceInstance message. Also converts values to other types if specified.
                     * @param message RouterApplianceInstance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networkconnectivity.v1alpha1.RouterApplianceInstance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RouterApplianceInstance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RouterApplianceInstance
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** State enum. */
                enum State {
                    STATE_UNSPECIFIED = 0,
                    CREATING = 1,
                    ACTIVE = 2,
                    DELETING = 3
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

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
