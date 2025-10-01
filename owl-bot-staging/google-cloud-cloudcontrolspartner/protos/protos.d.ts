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

        /** Namespace cloudcontrolspartner. */
        namespace cloudcontrolspartner {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of an AccessApprovalRequest. */
                interface IAccessApprovalRequest {

                    /** AccessApprovalRequest name */
                    name?: (string|null);

                    /** AccessApprovalRequest requestTime */
                    requestTime?: (google.protobuf.ITimestamp|null);

                    /** AccessApprovalRequest requestedReason */
                    requestedReason?: (google.cloud.cloudcontrolspartner.v1.IAccessReason|null);

                    /** AccessApprovalRequest requestedExpirationTime */
                    requestedExpirationTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an AccessApprovalRequest. */
                class AccessApprovalRequest implements IAccessApprovalRequest {

                    /**
                     * Constructs a new AccessApprovalRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IAccessApprovalRequest);

                    /** AccessApprovalRequest name. */
                    public name: string;

                    /** AccessApprovalRequest requestTime. */
                    public requestTime?: (google.protobuf.ITimestamp|null);

                    /** AccessApprovalRequest requestedReason. */
                    public requestedReason?: (google.cloud.cloudcontrolspartner.v1.IAccessReason|null);

                    /** AccessApprovalRequest requestedExpirationTime. */
                    public requestedExpirationTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new AccessApprovalRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AccessApprovalRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IAccessApprovalRequest): google.cloud.cloudcontrolspartner.v1.AccessApprovalRequest;

                    /**
                     * Encodes the specified AccessApprovalRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.AccessApprovalRequest.verify|verify} messages.
                     * @param message AccessApprovalRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IAccessApprovalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AccessApprovalRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.AccessApprovalRequest.verify|verify} messages.
                     * @param message AccessApprovalRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IAccessApprovalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AccessApprovalRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AccessApprovalRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.AccessApprovalRequest;

                    /**
                     * Decodes an AccessApprovalRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AccessApprovalRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.AccessApprovalRequest;

                    /**
                     * Verifies an AccessApprovalRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AccessApprovalRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AccessApprovalRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.AccessApprovalRequest;

                    /**
                     * Creates a plain object from an AccessApprovalRequest message. Also converts values to other types if specified.
                     * @param message AccessApprovalRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.AccessApprovalRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AccessApprovalRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AccessApprovalRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAccessApprovalRequestsRequest. */
                interface IListAccessApprovalRequestsRequest {

                    /** ListAccessApprovalRequestsRequest parent */
                    parent?: (string|null);

                    /** ListAccessApprovalRequestsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAccessApprovalRequestsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListAccessApprovalRequestsRequest filter */
                    filter?: (string|null);

                    /** ListAccessApprovalRequestsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListAccessApprovalRequestsRequest. */
                class ListAccessApprovalRequestsRequest implements IListAccessApprovalRequestsRequest {

                    /**
                     * Constructs a new ListAccessApprovalRequestsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IListAccessApprovalRequestsRequest);

                    /** ListAccessApprovalRequestsRequest parent. */
                    public parent: string;

                    /** ListAccessApprovalRequestsRequest pageSize. */
                    public pageSize: number;

                    /** ListAccessApprovalRequestsRequest pageToken. */
                    public pageToken: string;

                    /** ListAccessApprovalRequestsRequest filter. */
                    public filter: string;

                    /** ListAccessApprovalRequestsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListAccessApprovalRequestsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAccessApprovalRequestsRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IListAccessApprovalRequestsRequest): google.cloud.cloudcontrolspartner.v1.ListAccessApprovalRequestsRequest;

                    /**
                     * Encodes the specified ListAccessApprovalRequestsRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.ListAccessApprovalRequestsRequest.verify|verify} messages.
                     * @param message ListAccessApprovalRequestsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IListAccessApprovalRequestsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAccessApprovalRequestsRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.ListAccessApprovalRequestsRequest.verify|verify} messages.
                     * @param message ListAccessApprovalRequestsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IListAccessApprovalRequestsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAccessApprovalRequestsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAccessApprovalRequestsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.ListAccessApprovalRequestsRequest;

                    /**
                     * Decodes a ListAccessApprovalRequestsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAccessApprovalRequestsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.ListAccessApprovalRequestsRequest;

                    /**
                     * Verifies a ListAccessApprovalRequestsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAccessApprovalRequestsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAccessApprovalRequestsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.ListAccessApprovalRequestsRequest;

                    /**
                     * Creates a plain object from a ListAccessApprovalRequestsRequest message. Also converts values to other types if specified.
                     * @param message ListAccessApprovalRequestsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.ListAccessApprovalRequestsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAccessApprovalRequestsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAccessApprovalRequestsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAccessApprovalRequestsResponse. */
                interface IListAccessApprovalRequestsResponse {

                    /** ListAccessApprovalRequestsResponse accessApprovalRequests */
                    accessApprovalRequests?: (google.cloud.cloudcontrolspartner.v1.IAccessApprovalRequest[]|null);

                    /** ListAccessApprovalRequestsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListAccessApprovalRequestsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListAccessApprovalRequestsResponse. */
                class ListAccessApprovalRequestsResponse implements IListAccessApprovalRequestsResponse {

                    /**
                     * Constructs a new ListAccessApprovalRequestsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IListAccessApprovalRequestsResponse);

                    /** ListAccessApprovalRequestsResponse accessApprovalRequests. */
                    public accessApprovalRequests: google.cloud.cloudcontrolspartner.v1.IAccessApprovalRequest[];

                    /** ListAccessApprovalRequestsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListAccessApprovalRequestsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListAccessApprovalRequestsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAccessApprovalRequestsResponse instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IListAccessApprovalRequestsResponse): google.cloud.cloudcontrolspartner.v1.ListAccessApprovalRequestsResponse;

                    /**
                     * Encodes the specified ListAccessApprovalRequestsResponse message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.ListAccessApprovalRequestsResponse.verify|verify} messages.
                     * @param message ListAccessApprovalRequestsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IListAccessApprovalRequestsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAccessApprovalRequestsResponse message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.ListAccessApprovalRequestsResponse.verify|verify} messages.
                     * @param message ListAccessApprovalRequestsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IListAccessApprovalRequestsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAccessApprovalRequestsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAccessApprovalRequestsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.ListAccessApprovalRequestsResponse;

                    /**
                     * Decodes a ListAccessApprovalRequestsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAccessApprovalRequestsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.ListAccessApprovalRequestsResponse;

                    /**
                     * Verifies a ListAccessApprovalRequestsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAccessApprovalRequestsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAccessApprovalRequestsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.ListAccessApprovalRequestsResponse;

                    /**
                     * Creates a plain object from a ListAccessApprovalRequestsResponse message. Also converts values to other types if specified.
                     * @param message ListAccessApprovalRequestsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.ListAccessApprovalRequestsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAccessApprovalRequestsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAccessApprovalRequestsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AccessReason. */
                interface IAccessReason {

                    /** AccessReason type */
                    type?: (google.cloud.cloudcontrolspartner.v1.AccessReason.Type|keyof typeof google.cloud.cloudcontrolspartner.v1.AccessReason.Type|null);

                    /** AccessReason detail */
                    detail?: (string|null);
                }

                /** Represents an AccessReason. */
                class AccessReason implements IAccessReason {

                    /**
                     * Constructs a new AccessReason.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IAccessReason);

                    /** AccessReason type. */
                    public type: (google.cloud.cloudcontrolspartner.v1.AccessReason.Type|keyof typeof google.cloud.cloudcontrolspartner.v1.AccessReason.Type);

                    /** AccessReason detail. */
                    public detail: string;

                    /**
                     * Creates a new AccessReason instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AccessReason instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IAccessReason): google.cloud.cloudcontrolspartner.v1.AccessReason;

                    /**
                     * Encodes the specified AccessReason message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.AccessReason.verify|verify} messages.
                     * @param message AccessReason message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IAccessReason, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AccessReason message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.AccessReason.verify|verify} messages.
                     * @param message AccessReason message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IAccessReason, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AccessReason message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AccessReason
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.AccessReason;

                    /**
                     * Decodes an AccessReason message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AccessReason
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.AccessReason;

                    /**
                     * Verifies an AccessReason message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AccessReason message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AccessReason
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.AccessReason;

                    /**
                     * Creates a plain object from an AccessReason message. Also converts values to other types if specified.
                     * @param message AccessReason
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.AccessReason, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AccessReason to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AccessReason
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AccessReason {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        CUSTOMER_INITIATED_SUPPORT = 1,
                        GOOGLE_INITIATED_SERVICE = 2,
                        GOOGLE_INITIATED_REVIEW = 3,
                        THIRD_PARTY_DATA_REQUEST = 4,
                        GOOGLE_RESPONSE_TO_PRODUCTION_ALERT = 5,
                        CLOUD_INITIATED_ACCESS = 6
                    }
                }

                /** CompletionState enum. */
                enum CompletionState {
                    COMPLETION_STATE_UNSPECIFIED = 0,
                    PENDING = 1,
                    SUCCEEDED = 2,
                    FAILED = 3,
                    NOT_APPLICABLE = 4
                }

                /** Represents a CloudControlsPartnerCore */
                class CloudControlsPartnerCore extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CloudControlsPartnerCore service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CloudControlsPartnerCore service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CloudControlsPartnerCore;

                    /**
                     * Calls GetWorkload.
                     * @param request GetWorkloadRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Workload
                     */
                    public getWorkload(request: google.cloud.cloudcontrolspartner.v1.IGetWorkloadRequest, callback: google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerCore.GetWorkloadCallback): void;

                    /**
                     * Calls GetWorkload.
                     * @param request GetWorkloadRequest message or plain object
                     * @returns Promise
                     */
                    public getWorkload(request: google.cloud.cloudcontrolspartner.v1.IGetWorkloadRequest): Promise<google.cloud.cloudcontrolspartner.v1.Workload>;

                    /**
                     * Calls ListWorkloads.
                     * @param request ListWorkloadsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListWorkloadsResponse
                     */
                    public listWorkloads(request: google.cloud.cloudcontrolspartner.v1.IListWorkloadsRequest, callback: google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerCore.ListWorkloadsCallback): void;

                    /**
                     * Calls ListWorkloads.
                     * @param request ListWorkloadsRequest message or plain object
                     * @returns Promise
                     */
                    public listWorkloads(request: google.cloud.cloudcontrolspartner.v1.IListWorkloadsRequest): Promise<google.cloud.cloudcontrolspartner.v1.ListWorkloadsResponse>;

                    /**
                     * Calls GetCustomer.
                     * @param request GetCustomerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Customer
                     */
                    public getCustomer(request: google.cloud.cloudcontrolspartner.v1.IGetCustomerRequest, callback: google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerCore.GetCustomerCallback): void;

                    /**
                     * Calls GetCustomer.
                     * @param request GetCustomerRequest message or plain object
                     * @returns Promise
                     */
                    public getCustomer(request: google.cloud.cloudcontrolspartner.v1.IGetCustomerRequest): Promise<google.cloud.cloudcontrolspartner.v1.Customer>;

                    /**
                     * Calls ListCustomers.
                     * @param request ListCustomersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCustomersResponse
                     */
                    public listCustomers(request: google.cloud.cloudcontrolspartner.v1.IListCustomersRequest, callback: google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerCore.ListCustomersCallback): void;

                    /**
                     * Calls ListCustomers.
                     * @param request ListCustomersRequest message or plain object
                     * @returns Promise
                     */
                    public listCustomers(request: google.cloud.cloudcontrolspartner.v1.IListCustomersRequest): Promise<google.cloud.cloudcontrolspartner.v1.ListCustomersResponse>;

                    /**
                     * Calls GetEkmConnections.
                     * @param request GetEkmConnectionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EkmConnections
                     */
                    public getEkmConnections(request: google.cloud.cloudcontrolspartner.v1.IGetEkmConnectionsRequest, callback: google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerCore.GetEkmConnectionsCallback): void;

                    /**
                     * Calls GetEkmConnections.
                     * @param request GetEkmConnectionsRequest message or plain object
                     * @returns Promise
                     */
                    public getEkmConnections(request: google.cloud.cloudcontrolspartner.v1.IGetEkmConnectionsRequest): Promise<google.cloud.cloudcontrolspartner.v1.EkmConnections>;

                    /**
                     * Calls GetPartnerPermissions.
                     * @param request GetPartnerPermissionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PartnerPermissions
                     */
                    public getPartnerPermissions(request: google.cloud.cloudcontrolspartner.v1.IGetPartnerPermissionsRequest, callback: google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerCore.GetPartnerPermissionsCallback): void;

                    /**
                     * Calls GetPartnerPermissions.
                     * @param request GetPartnerPermissionsRequest message or plain object
                     * @returns Promise
                     */
                    public getPartnerPermissions(request: google.cloud.cloudcontrolspartner.v1.IGetPartnerPermissionsRequest): Promise<google.cloud.cloudcontrolspartner.v1.PartnerPermissions>;

                    /**
                     * Calls ListAccessApprovalRequests.
                     * @param request ListAccessApprovalRequestsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAccessApprovalRequestsResponse
                     */
                    public listAccessApprovalRequests(request: google.cloud.cloudcontrolspartner.v1.IListAccessApprovalRequestsRequest, callback: google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerCore.ListAccessApprovalRequestsCallback): void;

                    /**
                     * Calls ListAccessApprovalRequests.
                     * @param request ListAccessApprovalRequestsRequest message or plain object
                     * @returns Promise
                     */
                    public listAccessApprovalRequests(request: google.cloud.cloudcontrolspartner.v1.IListAccessApprovalRequestsRequest): Promise<google.cloud.cloudcontrolspartner.v1.ListAccessApprovalRequestsResponse>;

                    /**
                     * Calls GetPartner.
                     * @param request GetPartnerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Partner
                     */
                    public getPartner(request: google.cloud.cloudcontrolspartner.v1.IGetPartnerRequest, callback: google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerCore.GetPartnerCallback): void;

                    /**
                     * Calls GetPartner.
                     * @param request GetPartnerRequest message or plain object
                     * @returns Promise
                     */
                    public getPartner(request: google.cloud.cloudcontrolspartner.v1.IGetPartnerRequest): Promise<google.cloud.cloudcontrolspartner.v1.Partner>;

                    /**
                     * Calls CreateCustomer.
                     * @param request CreateCustomerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Customer
                     */
                    public createCustomer(request: google.cloud.cloudcontrolspartner.v1.ICreateCustomerRequest, callback: google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerCore.CreateCustomerCallback): void;

                    /**
                     * Calls CreateCustomer.
                     * @param request CreateCustomerRequest message or plain object
                     * @returns Promise
                     */
                    public createCustomer(request: google.cloud.cloudcontrolspartner.v1.ICreateCustomerRequest): Promise<google.cloud.cloudcontrolspartner.v1.Customer>;

                    /**
                     * Calls UpdateCustomer.
                     * @param request UpdateCustomerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Customer
                     */
                    public updateCustomer(request: google.cloud.cloudcontrolspartner.v1.IUpdateCustomerRequest, callback: google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerCore.UpdateCustomerCallback): void;

                    /**
                     * Calls UpdateCustomer.
                     * @param request UpdateCustomerRequest message or plain object
                     * @returns Promise
                     */
                    public updateCustomer(request: google.cloud.cloudcontrolspartner.v1.IUpdateCustomerRequest): Promise<google.cloud.cloudcontrolspartner.v1.Customer>;

                    /**
                     * Calls DeleteCustomer.
                     * @param request DeleteCustomerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteCustomer(request: google.cloud.cloudcontrolspartner.v1.IDeleteCustomerRequest, callback: google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerCore.DeleteCustomerCallback): void;

                    /**
                     * Calls DeleteCustomer.
                     * @param request DeleteCustomerRequest message or plain object
                     * @returns Promise
                     */
                    public deleteCustomer(request: google.cloud.cloudcontrolspartner.v1.IDeleteCustomerRequest): Promise<google.protobuf.Empty>;
                }

                namespace CloudControlsPartnerCore {

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerCore|getWorkload}.
                     * @param error Error, if any
                     * @param [response] Workload
                     */
                    type GetWorkloadCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1.Workload) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerCore|listWorkloads}.
                     * @param error Error, if any
                     * @param [response] ListWorkloadsResponse
                     */
                    type ListWorkloadsCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1.ListWorkloadsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerCore|getCustomer}.
                     * @param error Error, if any
                     * @param [response] Customer
                     */
                    type GetCustomerCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1.Customer) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerCore|listCustomers}.
                     * @param error Error, if any
                     * @param [response] ListCustomersResponse
                     */
                    type ListCustomersCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1.ListCustomersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerCore|getEkmConnections}.
                     * @param error Error, if any
                     * @param [response] EkmConnections
                     */
                    type GetEkmConnectionsCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1.EkmConnections) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerCore|getPartnerPermissions}.
                     * @param error Error, if any
                     * @param [response] PartnerPermissions
                     */
                    type GetPartnerPermissionsCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1.PartnerPermissions) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerCore|listAccessApprovalRequests}.
                     * @param error Error, if any
                     * @param [response] ListAccessApprovalRequestsResponse
                     */
                    type ListAccessApprovalRequestsCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1.ListAccessApprovalRequestsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerCore|getPartner}.
                     * @param error Error, if any
                     * @param [response] Partner
                     */
                    type GetPartnerCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1.Partner) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerCore|createCustomer}.
                     * @param error Error, if any
                     * @param [response] Customer
                     */
                    type CreateCustomerCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1.Customer) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerCore|updateCustomer}.
                     * @param error Error, if any
                     * @param [response] Customer
                     */
                    type UpdateCustomerCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1.Customer) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerCore|deleteCustomer}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteCustomerCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
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
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IOperationMetadata);

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
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IOperationMetadata): google.cloud.cloudcontrolspartner.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a Workload. */
                interface IWorkload {

                    /** Workload name */
                    name?: (string|null);

                    /** Workload folderId */
                    folderId?: (number|Long|string|null);

                    /** Workload createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Workload folder */
                    folder?: (string|null);

                    /** Workload workloadOnboardingState */
                    workloadOnboardingState?: (google.cloud.cloudcontrolspartner.v1.IWorkloadOnboardingState|null);

                    /** Workload isOnboarded */
                    isOnboarded?: (boolean|null);

                    /** Workload keyManagementProjectId */
                    keyManagementProjectId?: (string|null);

                    /** Workload location */
                    location?: (string|null);

                    /** Workload partner */
                    partner?: (google.cloud.cloudcontrolspartner.v1.Workload.Partner|keyof typeof google.cloud.cloudcontrolspartner.v1.Workload.Partner|null);
                }

                /** Represents a Workload. */
                class Workload implements IWorkload {

                    /**
                     * Constructs a new Workload.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IWorkload);

                    /** Workload name. */
                    public name: string;

                    /** Workload folderId. */
                    public folderId: (number|Long|string);

                    /** Workload createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Workload folder. */
                    public folder: string;

                    /** Workload workloadOnboardingState. */
                    public workloadOnboardingState?: (google.cloud.cloudcontrolspartner.v1.IWorkloadOnboardingState|null);

                    /** Workload isOnboarded. */
                    public isOnboarded: boolean;

                    /** Workload keyManagementProjectId. */
                    public keyManagementProjectId: string;

                    /** Workload location. */
                    public location: string;

                    /** Workload partner. */
                    public partner: (google.cloud.cloudcontrolspartner.v1.Workload.Partner|keyof typeof google.cloud.cloudcontrolspartner.v1.Workload.Partner);

                    /**
                     * Creates a new Workload instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Workload instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IWorkload): google.cloud.cloudcontrolspartner.v1.Workload;

                    /**
                     * Encodes the specified Workload message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.Workload.verify|verify} messages.
                     * @param message Workload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IWorkload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Workload message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.Workload.verify|verify} messages.
                     * @param message Workload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IWorkload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Workload message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Workload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.Workload;

                    /**
                     * Decodes a Workload message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Workload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.Workload;

                    /**
                     * Verifies a Workload message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Workload message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Workload
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.Workload;

                    /**
                     * Creates a plain object from a Workload message. Also converts values to other types if specified.
                     * @param message Workload
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.Workload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Workload to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Workload
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Workload {

                    /** Partner enum. */
                    enum Partner {
                        PARTNER_UNSPECIFIED = 0,
                        PARTNER_LOCAL_CONTROLS_BY_S3NS = 1,
                        PARTNER_SOVEREIGN_CONTROLS_BY_T_SYSTEMS = 2,
                        PARTNER_SOVEREIGN_CONTROLS_BY_SIA_MINSAIT = 3,
                        PARTNER_SOVEREIGN_CONTROLS_BY_PSN = 4,
                        PARTNER_SOVEREIGN_CONTROLS_BY_CNTXT = 6,
                        PARTNER_SOVEREIGN_CONTROLS_BY_CNTXT_NO_EKM = 7
                    }
                }

                /** Properties of a ListWorkloadsRequest. */
                interface IListWorkloadsRequest {

                    /** ListWorkloadsRequest parent */
                    parent?: (string|null);

                    /** ListWorkloadsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListWorkloadsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListWorkloadsRequest filter */
                    filter?: (string|null);

                    /** ListWorkloadsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListWorkloadsRequest. */
                class ListWorkloadsRequest implements IListWorkloadsRequest {

                    /**
                     * Constructs a new ListWorkloadsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IListWorkloadsRequest);

                    /** ListWorkloadsRequest parent. */
                    public parent: string;

                    /** ListWorkloadsRequest pageSize. */
                    public pageSize: number;

                    /** ListWorkloadsRequest pageToken. */
                    public pageToken: string;

                    /** ListWorkloadsRequest filter. */
                    public filter: string;

                    /** ListWorkloadsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListWorkloadsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkloadsRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IListWorkloadsRequest): google.cloud.cloudcontrolspartner.v1.ListWorkloadsRequest;

                    /**
                     * Encodes the specified ListWorkloadsRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.ListWorkloadsRequest.verify|verify} messages.
                     * @param message ListWorkloadsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IListWorkloadsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkloadsRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.ListWorkloadsRequest.verify|verify} messages.
                     * @param message ListWorkloadsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IListWorkloadsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkloadsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkloadsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.ListWorkloadsRequest;

                    /**
                     * Decodes a ListWorkloadsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkloadsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.ListWorkloadsRequest;

                    /**
                     * Verifies a ListWorkloadsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkloadsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkloadsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.ListWorkloadsRequest;

                    /**
                     * Creates a plain object from a ListWorkloadsRequest message. Also converts values to other types if specified.
                     * @param message ListWorkloadsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.ListWorkloadsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkloadsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListWorkloadsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListWorkloadsResponse. */
                interface IListWorkloadsResponse {

                    /** ListWorkloadsResponse workloads */
                    workloads?: (google.cloud.cloudcontrolspartner.v1.IWorkload[]|null);

                    /** ListWorkloadsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListWorkloadsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListWorkloadsResponse. */
                class ListWorkloadsResponse implements IListWorkloadsResponse {

                    /**
                     * Constructs a new ListWorkloadsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IListWorkloadsResponse);

                    /** ListWorkloadsResponse workloads. */
                    public workloads: google.cloud.cloudcontrolspartner.v1.IWorkload[];

                    /** ListWorkloadsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListWorkloadsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListWorkloadsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkloadsResponse instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IListWorkloadsResponse): google.cloud.cloudcontrolspartner.v1.ListWorkloadsResponse;

                    /**
                     * Encodes the specified ListWorkloadsResponse message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.ListWorkloadsResponse.verify|verify} messages.
                     * @param message ListWorkloadsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IListWorkloadsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkloadsResponse message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.ListWorkloadsResponse.verify|verify} messages.
                     * @param message ListWorkloadsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IListWorkloadsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkloadsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkloadsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.ListWorkloadsResponse;

                    /**
                     * Decodes a ListWorkloadsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkloadsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.ListWorkloadsResponse;

                    /**
                     * Verifies a ListWorkloadsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkloadsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkloadsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.ListWorkloadsResponse;

                    /**
                     * Creates a plain object from a ListWorkloadsResponse message. Also converts values to other types if specified.
                     * @param message ListWorkloadsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.ListWorkloadsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkloadsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListWorkloadsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetWorkloadRequest. */
                interface IGetWorkloadRequest {

                    /** GetWorkloadRequest name */
                    name?: (string|null);
                }

                /** Represents a GetWorkloadRequest. */
                class GetWorkloadRequest implements IGetWorkloadRequest {

                    /**
                     * Constructs a new GetWorkloadRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IGetWorkloadRequest);

                    /** GetWorkloadRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetWorkloadRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetWorkloadRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IGetWorkloadRequest): google.cloud.cloudcontrolspartner.v1.GetWorkloadRequest;

                    /**
                     * Encodes the specified GetWorkloadRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.GetWorkloadRequest.verify|verify} messages.
                     * @param message GetWorkloadRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IGetWorkloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetWorkloadRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.GetWorkloadRequest.verify|verify} messages.
                     * @param message GetWorkloadRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IGetWorkloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetWorkloadRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetWorkloadRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.GetWorkloadRequest;

                    /**
                     * Decodes a GetWorkloadRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetWorkloadRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.GetWorkloadRequest;

                    /**
                     * Verifies a GetWorkloadRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetWorkloadRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetWorkloadRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.GetWorkloadRequest;

                    /**
                     * Creates a plain object from a GetWorkloadRequest message. Also converts values to other types if specified.
                     * @param message GetWorkloadRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.GetWorkloadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetWorkloadRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetWorkloadRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WorkloadOnboardingState. */
                interface IWorkloadOnboardingState {

                    /** WorkloadOnboardingState onboardingSteps */
                    onboardingSteps?: (google.cloud.cloudcontrolspartner.v1.IWorkloadOnboardingStep[]|null);
                }

                /** Represents a WorkloadOnboardingState. */
                class WorkloadOnboardingState implements IWorkloadOnboardingState {

                    /**
                     * Constructs a new WorkloadOnboardingState.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IWorkloadOnboardingState);

                    /** WorkloadOnboardingState onboardingSteps. */
                    public onboardingSteps: google.cloud.cloudcontrolspartner.v1.IWorkloadOnboardingStep[];

                    /**
                     * Creates a new WorkloadOnboardingState instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WorkloadOnboardingState instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IWorkloadOnboardingState): google.cloud.cloudcontrolspartner.v1.WorkloadOnboardingState;

                    /**
                     * Encodes the specified WorkloadOnboardingState message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.WorkloadOnboardingState.verify|verify} messages.
                     * @param message WorkloadOnboardingState message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IWorkloadOnboardingState, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WorkloadOnboardingState message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.WorkloadOnboardingState.verify|verify} messages.
                     * @param message WorkloadOnboardingState message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IWorkloadOnboardingState, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WorkloadOnboardingState message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WorkloadOnboardingState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.WorkloadOnboardingState;

                    /**
                     * Decodes a WorkloadOnboardingState message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WorkloadOnboardingState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.WorkloadOnboardingState;

                    /**
                     * Verifies a WorkloadOnboardingState message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WorkloadOnboardingState message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WorkloadOnboardingState
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.WorkloadOnboardingState;

                    /**
                     * Creates a plain object from a WorkloadOnboardingState message. Also converts values to other types if specified.
                     * @param message WorkloadOnboardingState
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.WorkloadOnboardingState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WorkloadOnboardingState to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WorkloadOnboardingState
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WorkloadOnboardingStep. */
                interface IWorkloadOnboardingStep {

                    /** WorkloadOnboardingStep step */
                    step?: (google.cloud.cloudcontrolspartner.v1.WorkloadOnboardingStep.Step|keyof typeof google.cloud.cloudcontrolspartner.v1.WorkloadOnboardingStep.Step|null);

                    /** WorkloadOnboardingStep startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** WorkloadOnboardingStep completionTime */
                    completionTime?: (google.protobuf.ITimestamp|null);

                    /** WorkloadOnboardingStep completionState */
                    completionState?: (google.cloud.cloudcontrolspartner.v1.CompletionState|keyof typeof google.cloud.cloudcontrolspartner.v1.CompletionState|null);
                }

                /** Represents a WorkloadOnboardingStep. */
                class WorkloadOnboardingStep implements IWorkloadOnboardingStep {

                    /**
                     * Constructs a new WorkloadOnboardingStep.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IWorkloadOnboardingStep);

                    /** WorkloadOnboardingStep step. */
                    public step: (google.cloud.cloudcontrolspartner.v1.WorkloadOnboardingStep.Step|keyof typeof google.cloud.cloudcontrolspartner.v1.WorkloadOnboardingStep.Step);

                    /** WorkloadOnboardingStep startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** WorkloadOnboardingStep completionTime. */
                    public completionTime?: (google.protobuf.ITimestamp|null);

                    /** WorkloadOnboardingStep completionState. */
                    public completionState: (google.cloud.cloudcontrolspartner.v1.CompletionState|keyof typeof google.cloud.cloudcontrolspartner.v1.CompletionState);

                    /**
                     * Creates a new WorkloadOnboardingStep instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WorkloadOnboardingStep instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IWorkloadOnboardingStep): google.cloud.cloudcontrolspartner.v1.WorkloadOnboardingStep;

                    /**
                     * Encodes the specified WorkloadOnboardingStep message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.WorkloadOnboardingStep.verify|verify} messages.
                     * @param message WorkloadOnboardingStep message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IWorkloadOnboardingStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WorkloadOnboardingStep message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.WorkloadOnboardingStep.verify|verify} messages.
                     * @param message WorkloadOnboardingStep message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IWorkloadOnboardingStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WorkloadOnboardingStep message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WorkloadOnboardingStep
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.WorkloadOnboardingStep;

                    /**
                     * Decodes a WorkloadOnboardingStep message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WorkloadOnboardingStep
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.WorkloadOnboardingStep;

                    /**
                     * Verifies a WorkloadOnboardingStep message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WorkloadOnboardingStep message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WorkloadOnboardingStep
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.WorkloadOnboardingStep;

                    /**
                     * Creates a plain object from a WorkloadOnboardingStep message. Also converts values to other types if specified.
                     * @param message WorkloadOnboardingStep
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.WorkloadOnboardingStep, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WorkloadOnboardingStep to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WorkloadOnboardingStep
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace WorkloadOnboardingStep {

                    /** Step enum. */
                    enum Step {
                        STEP_UNSPECIFIED = 0,
                        EKM_PROVISIONED = 1,
                        SIGNED_ACCESS_APPROVAL_CONFIGURED = 2
                    }
                }

                /** Properties of a Customer. */
                interface ICustomer {

                    /** Customer name */
                    name?: (string|null);

                    /** Customer displayName */
                    displayName?: (string|null);

                    /** Customer customerOnboardingState */
                    customerOnboardingState?: (google.cloud.cloudcontrolspartner.v1.ICustomerOnboardingState|null);

                    /** Customer isOnboarded */
                    isOnboarded?: (boolean|null);

                    /** Customer organizationDomain */
                    organizationDomain?: (string|null);
                }

                /** Represents a Customer. */
                class Customer implements ICustomer {

                    /**
                     * Constructs a new Customer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.ICustomer);

                    /** Customer name. */
                    public name: string;

                    /** Customer displayName. */
                    public displayName: string;

                    /** Customer customerOnboardingState. */
                    public customerOnboardingState?: (google.cloud.cloudcontrolspartner.v1.ICustomerOnboardingState|null);

                    /** Customer isOnboarded. */
                    public isOnboarded: boolean;

                    /** Customer organizationDomain. */
                    public organizationDomain: string;

                    /**
                     * Creates a new Customer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Customer instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.ICustomer): google.cloud.cloudcontrolspartner.v1.Customer;

                    /**
                     * Encodes the specified Customer message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.Customer.verify|verify} messages.
                     * @param message Customer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.ICustomer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Customer message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.Customer.verify|verify} messages.
                     * @param message Customer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.ICustomer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Customer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Customer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.Customer;

                    /**
                     * Decodes a Customer message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Customer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.Customer;

                    /**
                     * Verifies a Customer message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Customer message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Customer
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.Customer;

                    /**
                     * Creates a plain object from a Customer message. Also converts values to other types if specified.
                     * @param message Customer
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.Customer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Customer to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Customer
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCustomersRequest. */
                interface IListCustomersRequest {

                    /** ListCustomersRequest parent */
                    parent?: (string|null);

                    /** ListCustomersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListCustomersRequest pageToken */
                    pageToken?: (string|null);

                    /** ListCustomersRequest filter */
                    filter?: (string|null);

                    /** ListCustomersRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListCustomersRequest. */
                class ListCustomersRequest implements IListCustomersRequest {

                    /**
                     * Constructs a new ListCustomersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IListCustomersRequest);

                    /** ListCustomersRequest parent. */
                    public parent: string;

                    /** ListCustomersRequest pageSize. */
                    public pageSize: number;

                    /** ListCustomersRequest pageToken. */
                    public pageToken: string;

                    /** ListCustomersRequest filter. */
                    public filter: string;

                    /** ListCustomersRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListCustomersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCustomersRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IListCustomersRequest): google.cloud.cloudcontrolspartner.v1.ListCustomersRequest;

                    /**
                     * Encodes the specified ListCustomersRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.ListCustomersRequest.verify|verify} messages.
                     * @param message ListCustomersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IListCustomersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCustomersRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.ListCustomersRequest.verify|verify} messages.
                     * @param message ListCustomersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IListCustomersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCustomersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCustomersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.ListCustomersRequest;

                    /**
                     * Decodes a ListCustomersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCustomersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.ListCustomersRequest;

                    /**
                     * Verifies a ListCustomersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCustomersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCustomersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.ListCustomersRequest;

                    /**
                     * Creates a plain object from a ListCustomersRequest message. Also converts values to other types if specified.
                     * @param message ListCustomersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.ListCustomersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCustomersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCustomersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCustomersResponse. */
                interface IListCustomersResponse {

                    /** ListCustomersResponse customers */
                    customers?: (google.cloud.cloudcontrolspartner.v1.ICustomer[]|null);

                    /** ListCustomersResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListCustomersResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListCustomersResponse. */
                class ListCustomersResponse implements IListCustomersResponse {

                    /**
                     * Constructs a new ListCustomersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IListCustomersResponse);

                    /** ListCustomersResponse customers. */
                    public customers: google.cloud.cloudcontrolspartner.v1.ICustomer[];

                    /** ListCustomersResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListCustomersResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListCustomersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCustomersResponse instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IListCustomersResponse): google.cloud.cloudcontrolspartner.v1.ListCustomersResponse;

                    /**
                     * Encodes the specified ListCustomersResponse message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.ListCustomersResponse.verify|verify} messages.
                     * @param message ListCustomersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IListCustomersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCustomersResponse message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.ListCustomersResponse.verify|verify} messages.
                     * @param message ListCustomersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IListCustomersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCustomersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCustomersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.ListCustomersResponse;

                    /**
                     * Decodes a ListCustomersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCustomersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.ListCustomersResponse;

                    /**
                     * Verifies a ListCustomersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCustomersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCustomersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.ListCustomersResponse;

                    /**
                     * Creates a plain object from a ListCustomersResponse message. Also converts values to other types if specified.
                     * @param message ListCustomersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.ListCustomersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCustomersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCustomersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateCustomerRequest. */
                interface ICreateCustomerRequest {

                    /** CreateCustomerRequest parent */
                    parent?: (string|null);

                    /** CreateCustomerRequest customer */
                    customer?: (google.cloud.cloudcontrolspartner.v1.ICustomer|null);

                    /** CreateCustomerRequest customerId */
                    customerId?: (string|null);
                }

                /** Represents a CreateCustomerRequest. */
                class CreateCustomerRequest implements ICreateCustomerRequest {

                    /**
                     * Constructs a new CreateCustomerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.ICreateCustomerRequest);

                    /** CreateCustomerRequest parent. */
                    public parent: string;

                    /** CreateCustomerRequest customer. */
                    public customer?: (google.cloud.cloudcontrolspartner.v1.ICustomer|null);

                    /** CreateCustomerRequest customerId. */
                    public customerId: string;

                    /**
                     * Creates a new CreateCustomerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateCustomerRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.ICreateCustomerRequest): google.cloud.cloudcontrolspartner.v1.CreateCustomerRequest;

                    /**
                     * Encodes the specified CreateCustomerRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.CreateCustomerRequest.verify|verify} messages.
                     * @param message CreateCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.ICreateCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateCustomerRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.CreateCustomerRequest.verify|verify} messages.
                     * @param message CreateCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.ICreateCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateCustomerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.CreateCustomerRequest;

                    /**
                     * Decodes a CreateCustomerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.CreateCustomerRequest;

                    /**
                     * Verifies a CreateCustomerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateCustomerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateCustomerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.CreateCustomerRequest;

                    /**
                     * Creates a plain object from a CreateCustomerRequest message. Also converts values to other types if specified.
                     * @param message CreateCustomerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.CreateCustomerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateCustomerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateCustomerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetCustomerRequest. */
                interface IGetCustomerRequest {

                    /** GetCustomerRequest name */
                    name?: (string|null);
                }

                /** Represents a GetCustomerRequest. */
                class GetCustomerRequest implements IGetCustomerRequest {

                    /**
                     * Constructs a new GetCustomerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IGetCustomerRequest);

                    /** GetCustomerRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetCustomerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCustomerRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IGetCustomerRequest): google.cloud.cloudcontrolspartner.v1.GetCustomerRequest;

                    /**
                     * Encodes the specified GetCustomerRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.GetCustomerRequest.verify|verify} messages.
                     * @param message GetCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IGetCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCustomerRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.GetCustomerRequest.verify|verify} messages.
                     * @param message GetCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IGetCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCustomerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.GetCustomerRequest;

                    /**
                     * Decodes a GetCustomerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.GetCustomerRequest;

                    /**
                     * Verifies a GetCustomerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCustomerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCustomerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.GetCustomerRequest;

                    /**
                     * Creates a plain object from a GetCustomerRequest message. Also converts values to other types if specified.
                     * @param message GetCustomerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.GetCustomerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCustomerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetCustomerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CustomerOnboardingState. */
                interface ICustomerOnboardingState {

                    /** CustomerOnboardingState onboardingSteps */
                    onboardingSteps?: (google.cloud.cloudcontrolspartner.v1.ICustomerOnboardingStep[]|null);
                }

                /** Represents a CustomerOnboardingState. */
                class CustomerOnboardingState implements ICustomerOnboardingState {

                    /**
                     * Constructs a new CustomerOnboardingState.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.ICustomerOnboardingState);

                    /** CustomerOnboardingState onboardingSteps. */
                    public onboardingSteps: google.cloud.cloudcontrolspartner.v1.ICustomerOnboardingStep[];

                    /**
                     * Creates a new CustomerOnboardingState instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CustomerOnboardingState instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.ICustomerOnboardingState): google.cloud.cloudcontrolspartner.v1.CustomerOnboardingState;

                    /**
                     * Encodes the specified CustomerOnboardingState message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.CustomerOnboardingState.verify|verify} messages.
                     * @param message CustomerOnboardingState message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.ICustomerOnboardingState, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CustomerOnboardingState message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.CustomerOnboardingState.verify|verify} messages.
                     * @param message CustomerOnboardingState message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.ICustomerOnboardingState, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CustomerOnboardingState message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CustomerOnboardingState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.CustomerOnboardingState;

                    /**
                     * Decodes a CustomerOnboardingState message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CustomerOnboardingState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.CustomerOnboardingState;

                    /**
                     * Verifies a CustomerOnboardingState message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CustomerOnboardingState message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CustomerOnboardingState
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.CustomerOnboardingState;

                    /**
                     * Creates a plain object from a CustomerOnboardingState message. Also converts values to other types if specified.
                     * @param message CustomerOnboardingState
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.CustomerOnboardingState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CustomerOnboardingState to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CustomerOnboardingState
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CustomerOnboardingStep. */
                interface ICustomerOnboardingStep {

                    /** CustomerOnboardingStep step */
                    step?: (google.cloud.cloudcontrolspartner.v1.CustomerOnboardingStep.Step|keyof typeof google.cloud.cloudcontrolspartner.v1.CustomerOnboardingStep.Step|null);

                    /** CustomerOnboardingStep startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** CustomerOnboardingStep completionTime */
                    completionTime?: (google.protobuf.ITimestamp|null);

                    /** CustomerOnboardingStep completionState */
                    completionState?: (google.cloud.cloudcontrolspartner.v1.CompletionState|keyof typeof google.cloud.cloudcontrolspartner.v1.CompletionState|null);
                }

                /** Represents a CustomerOnboardingStep. */
                class CustomerOnboardingStep implements ICustomerOnboardingStep {

                    /**
                     * Constructs a new CustomerOnboardingStep.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.ICustomerOnboardingStep);

                    /** CustomerOnboardingStep step. */
                    public step: (google.cloud.cloudcontrolspartner.v1.CustomerOnboardingStep.Step|keyof typeof google.cloud.cloudcontrolspartner.v1.CustomerOnboardingStep.Step);

                    /** CustomerOnboardingStep startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** CustomerOnboardingStep completionTime. */
                    public completionTime?: (google.protobuf.ITimestamp|null);

                    /** CustomerOnboardingStep completionState. */
                    public completionState: (google.cloud.cloudcontrolspartner.v1.CompletionState|keyof typeof google.cloud.cloudcontrolspartner.v1.CompletionState);

                    /**
                     * Creates a new CustomerOnboardingStep instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CustomerOnboardingStep instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.ICustomerOnboardingStep): google.cloud.cloudcontrolspartner.v1.CustomerOnboardingStep;

                    /**
                     * Encodes the specified CustomerOnboardingStep message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.CustomerOnboardingStep.verify|verify} messages.
                     * @param message CustomerOnboardingStep message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.ICustomerOnboardingStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CustomerOnboardingStep message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.CustomerOnboardingStep.verify|verify} messages.
                     * @param message CustomerOnboardingStep message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.ICustomerOnboardingStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CustomerOnboardingStep message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CustomerOnboardingStep
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.CustomerOnboardingStep;

                    /**
                     * Decodes a CustomerOnboardingStep message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CustomerOnboardingStep
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.CustomerOnboardingStep;

                    /**
                     * Verifies a CustomerOnboardingStep message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CustomerOnboardingStep message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CustomerOnboardingStep
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.CustomerOnboardingStep;

                    /**
                     * Creates a plain object from a CustomerOnboardingStep message. Also converts values to other types if specified.
                     * @param message CustomerOnboardingStep
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.CustomerOnboardingStep, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CustomerOnboardingStep to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CustomerOnboardingStep
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CustomerOnboardingStep {

                    /** Step enum. */
                    enum Step {
                        STEP_UNSPECIFIED = 0,
                        KAJ_ENROLLMENT = 1,
                        CUSTOMER_ENVIRONMENT = 2
                    }
                }

                /** Properties of an UpdateCustomerRequest. */
                interface IUpdateCustomerRequest {

                    /** UpdateCustomerRequest customer */
                    customer?: (google.cloud.cloudcontrolspartner.v1.ICustomer|null);

                    /** UpdateCustomerRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateCustomerRequest. */
                class UpdateCustomerRequest implements IUpdateCustomerRequest {

                    /**
                     * Constructs a new UpdateCustomerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IUpdateCustomerRequest);

                    /** UpdateCustomerRequest customer. */
                    public customer?: (google.cloud.cloudcontrolspartner.v1.ICustomer|null);

                    /** UpdateCustomerRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateCustomerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateCustomerRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IUpdateCustomerRequest): google.cloud.cloudcontrolspartner.v1.UpdateCustomerRequest;

                    /**
                     * Encodes the specified UpdateCustomerRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.UpdateCustomerRequest.verify|verify} messages.
                     * @param message UpdateCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IUpdateCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateCustomerRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.UpdateCustomerRequest.verify|verify} messages.
                     * @param message UpdateCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IUpdateCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateCustomerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.UpdateCustomerRequest;

                    /**
                     * Decodes an UpdateCustomerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.UpdateCustomerRequest;

                    /**
                     * Verifies an UpdateCustomerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateCustomerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateCustomerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.UpdateCustomerRequest;

                    /**
                     * Creates a plain object from an UpdateCustomerRequest message. Also converts values to other types if specified.
                     * @param message UpdateCustomerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.UpdateCustomerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateCustomerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateCustomerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteCustomerRequest. */
                interface IDeleteCustomerRequest {

                    /** DeleteCustomerRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteCustomerRequest. */
                class DeleteCustomerRequest implements IDeleteCustomerRequest {

                    /**
                     * Constructs a new DeleteCustomerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IDeleteCustomerRequest);

                    /** DeleteCustomerRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteCustomerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteCustomerRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IDeleteCustomerRequest): google.cloud.cloudcontrolspartner.v1.DeleteCustomerRequest;

                    /**
                     * Encodes the specified DeleteCustomerRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.DeleteCustomerRequest.verify|verify} messages.
                     * @param message DeleteCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IDeleteCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteCustomerRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.DeleteCustomerRequest.verify|verify} messages.
                     * @param message DeleteCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IDeleteCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteCustomerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.DeleteCustomerRequest;

                    /**
                     * Decodes a DeleteCustomerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.DeleteCustomerRequest;

                    /**
                     * Verifies a DeleteCustomerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteCustomerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteCustomerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.DeleteCustomerRequest;

                    /**
                     * Creates a plain object from a DeleteCustomerRequest message. Also converts values to other types if specified.
                     * @param message DeleteCustomerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.DeleteCustomerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteCustomerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteCustomerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EkmConnections. */
                interface IEkmConnections {

                    /** EkmConnections name */
                    name?: (string|null);

                    /** EkmConnections ekmConnections */
                    ekmConnections?: (google.cloud.cloudcontrolspartner.v1.IEkmConnection[]|null);
                }

                /** Represents an EkmConnections. */
                class EkmConnections implements IEkmConnections {

                    /**
                     * Constructs a new EkmConnections.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IEkmConnections);

                    /** EkmConnections name. */
                    public name: string;

                    /** EkmConnections ekmConnections. */
                    public ekmConnections: google.cloud.cloudcontrolspartner.v1.IEkmConnection[];

                    /**
                     * Creates a new EkmConnections instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EkmConnections instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IEkmConnections): google.cloud.cloudcontrolspartner.v1.EkmConnections;

                    /**
                     * Encodes the specified EkmConnections message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.EkmConnections.verify|verify} messages.
                     * @param message EkmConnections message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IEkmConnections, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EkmConnections message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.EkmConnections.verify|verify} messages.
                     * @param message EkmConnections message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IEkmConnections, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EkmConnections message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EkmConnections
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.EkmConnections;

                    /**
                     * Decodes an EkmConnections message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EkmConnections
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.EkmConnections;

                    /**
                     * Verifies an EkmConnections message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EkmConnections message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EkmConnections
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.EkmConnections;

                    /**
                     * Creates a plain object from an EkmConnections message. Also converts values to other types if specified.
                     * @param message EkmConnections
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.EkmConnections, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EkmConnections to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EkmConnections
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetEkmConnectionsRequest. */
                interface IGetEkmConnectionsRequest {

                    /** GetEkmConnectionsRequest name */
                    name?: (string|null);
                }

                /** Represents a GetEkmConnectionsRequest. */
                class GetEkmConnectionsRequest implements IGetEkmConnectionsRequest {

                    /**
                     * Constructs a new GetEkmConnectionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IGetEkmConnectionsRequest);

                    /** GetEkmConnectionsRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetEkmConnectionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetEkmConnectionsRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IGetEkmConnectionsRequest): google.cloud.cloudcontrolspartner.v1.GetEkmConnectionsRequest;

                    /**
                     * Encodes the specified GetEkmConnectionsRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.GetEkmConnectionsRequest.verify|verify} messages.
                     * @param message GetEkmConnectionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IGetEkmConnectionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetEkmConnectionsRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.GetEkmConnectionsRequest.verify|verify} messages.
                     * @param message GetEkmConnectionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IGetEkmConnectionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetEkmConnectionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetEkmConnectionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.GetEkmConnectionsRequest;

                    /**
                     * Decodes a GetEkmConnectionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetEkmConnectionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.GetEkmConnectionsRequest;

                    /**
                     * Verifies a GetEkmConnectionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetEkmConnectionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetEkmConnectionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.GetEkmConnectionsRequest;

                    /**
                     * Creates a plain object from a GetEkmConnectionsRequest message. Also converts values to other types if specified.
                     * @param message GetEkmConnectionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.GetEkmConnectionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetEkmConnectionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetEkmConnectionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EkmConnection. */
                interface IEkmConnection {

                    /** EkmConnection connectionName */
                    connectionName?: (string|null);

                    /** EkmConnection connectionState */
                    connectionState?: (google.cloud.cloudcontrolspartner.v1.EkmConnection.ConnectionState|keyof typeof google.cloud.cloudcontrolspartner.v1.EkmConnection.ConnectionState|null);

                    /** EkmConnection connectionError */
                    connectionError?: (google.cloud.cloudcontrolspartner.v1.EkmConnection.IConnectionError|null);
                }

                /** Represents an EkmConnection. */
                class EkmConnection implements IEkmConnection {

                    /**
                     * Constructs a new EkmConnection.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IEkmConnection);

                    /** EkmConnection connectionName. */
                    public connectionName: string;

                    /** EkmConnection connectionState. */
                    public connectionState: (google.cloud.cloudcontrolspartner.v1.EkmConnection.ConnectionState|keyof typeof google.cloud.cloudcontrolspartner.v1.EkmConnection.ConnectionState);

                    /** EkmConnection connectionError. */
                    public connectionError?: (google.cloud.cloudcontrolspartner.v1.EkmConnection.IConnectionError|null);

                    /**
                     * Creates a new EkmConnection instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EkmConnection instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IEkmConnection): google.cloud.cloudcontrolspartner.v1.EkmConnection;

                    /**
                     * Encodes the specified EkmConnection message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.EkmConnection.verify|verify} messages.
                     * @param message EkmConnection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IEkmConnection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EkmConnection message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.EkmConnection.verify|verify} messages.
                     * @param message EkmConnection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IEkmConnection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EkmConnection message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EkmConnection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.EkmConnection;

                    /**
                     * Decodes an EkmConnection message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EkmConnection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.EkmConnection;

                    /**
                     * Verifies an EkmConnection message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EkmConnection message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EkmConnection
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.EkmConnection;

                    /**
                     * Creates a plain object from an EkmConnection message. Also converts values to other types if specified.
                     * @param message EkmConnection
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.EkmConnection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EkmConnection to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EkmConnection
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace EkmConnection {

                    /** Properties of a ConnectionError. */
                    interface IConnectionError {

                        /** ConnectionError errorDomain */
                        errorDomain?: (string|null);

                        /** ConnectionError errorMessage */
                        errorMessage?: (string|null);
                    }

                    /** Represents a ConnectionError. */
                    class ConnectionError implements IConnectionError {

                        /**
                         * Constructs a new ConnectionError.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.cloudcontrolspartner.v1.EkmConnection.IConnectionError);

                        /** ConnectionError errorDomain. */
                        public errorDomain: string;

                        /** ConnectionError errorMessage. */
                        public errorMessage: string;

                        /**
                         * Creates a new ConnectionError instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ConnectionError instance
                         */
                        public static create(properties?: google.cloud.cloudcontrolspartner.v1.EkmConnection.IConnectionError): google.cloud.cloudcontrolspartner.v1.EkmConnection.ConnectionError;

                        /**
                         * Encodes the specified ConnectionError message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.EkmConnection.ConnectionError.verify|verify} messages.
                         * @param message ConnectionError message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.cloudcontrolspartner.v1.EkmConnection.IConnectionError, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ConnectionError message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.EkmConnection.ConnectionError.verify|verify} messages.
                         * @param message ConnectionError message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.EkmConnection.IConnectionError, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ConnectionError message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ConnectionError
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.EkmConnection.ConnectionError;

                        /**
                         * Decodes a ConnectionError message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ConnectionError
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.EkmConnection.ConnectionError;

                        /**
                         * Verifies a ConnectionError message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ConnectionError message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ConnectionError
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.EkmConnection.ConnectionError;

                        /**
                         * Creates a plain object from a ConnectionError message. Also converts values to other types if specified.
                         * @param message ConnectionError
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.cloudcontrolspartner.v1.EkmConnection.ConnectionError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ConnectionError to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ConnectionError
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** ConnectionState enum. */
                    enum ConnectionState {
                        CONNECTION_STATE_UNSPECIFIED = 0,
                        AVAILABLE = 1,
                        NOT_AVAILABLE = 2,
                        ERROR = 3,
                        PERMISSION_DENIED = 4
                    }
                }

                /** Properties of a PartnerPermissions. */
                interface IPartnerPermissions {

                    /** PartnerPermissions name */
                    name?: (string|null);

                    /** PartnerPermissions partnerPermissions */
                    partnerPermissions?: (google.cloud.cloudcontrolspartner.v1.PartnerPermissions.Permission[]|null);
                }

                /** Represents a PartnerPermissions. */
                class PartnerPermissions implements IPartnerPermissions {

                    /**
                     * Constructs a new PartnerPermissions.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IPartnerPermissions);

                    /** PartnerPermissions name. */
                    public name: string;

                    /** PartnerPermissions partnerPermissions. */
                    public partnerPermissions: google.cloud.cloudcontrolspartner.v1.PartnerPermissions.Permission[];

                    /**
                     * Creates a new PartnerPermissions instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PartnerPermissions instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IPartnerPermissions): google.cloud.cloudcontrolspartner.v1.PartnerPermissions;

                    /**
                     * Encodes the specified PartnerPermissions message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.PartnerPermissions.verify|verify} messages.
                     * @param message PartnerPermissions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IPartnerPermissions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PartnerPermissions message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.PartnerPermissions.verify|verify} messages.
                     * @param message PartnerPermissions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IPartnerPermissions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PartnerPermissions message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PartnerPermissions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.PartnerPermissions;

                    /**
                     * Decodes a PartnerPermissions message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PartnerPermissions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.PartnerPermissions;

                    /**
                     * Verifies a PartnerPermissions message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PartnerPermissions message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PartnerPermissions
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.PartnerPermissions;

                    /**
                     * Creates a plain object from a PartnerPermissions message. Also converts values to other types if specified.
                     * @param message PartnerPermissions
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.PartnerPermissions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PartnerPermissions to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PartnerPermissions
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PartnerPermissions {

                    /** Permission enum. */
                    enum Permission {
                        PERMISSION_UNSPECIFIED = 0,
                        ACCESS_TRANSPARENCY_AND_EMERGENCY_ACCESS_LOGS = 1,
                        ASSURED_WORKLOADS_MONITORING = 2,
                        ACCESS_APPROVAL_REQUESTS = 3,
                        ASSURED_WORKLOADS_EKM_CONNECTION_STATUS = 4,
                        ACCESS_TRANSPARENCY_LOGS_SUPPORT_CASE_VIEWER = 5
                    }
                }

                /** Properties of a GetPartnerPermissionsRequest. */
                interface IGetPartnerPermissionsRequest {

                    /** GetPartnerPermissionsRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPartnerPermissionsRequest. */
                class GetPartnerPermissionsRequest implements IGetPartnerPermissionsRequest {

                    /**
                     * Constructs a new GetPartnerPermissionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IGetPartnerPermissionsRequest);

                    /** GetPartnerPermissionsRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPartnerPermissionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPartnerPermissionsRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IGetPartnerPermissionsRequest): google.cloud.cloudcontrolspartner.v1.GetPartnerPermissionsRequest;

                    /**
                     * Encodes the specified GetPartnerPermissionsRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.GetPartnerPermissionsRequest.verify|verify} messages.
                     * @param message GetPartnerPermissionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IGetPartnerPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPartnerPermissionsRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.GetPartnerPermissionsRequest.verify|verify} messages.
                     * @param message GetPartnerPermissionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IGetPartnerPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPartnerPermissionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPartnerPermissionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.GetPartnerPermissionsRequest;

                    /**
                     * Decodes a GetPartnerPermissionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPartnerPermissionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.GetPartnerPermissionsRequest;

                    /**
                     * Verifies a GetPartnerPermissionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPartnerPermissionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPartnerPermissionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.GetPartnerPermissionsRequest;

                    /**
                     * Creates a plain object from a GetPartnerPermissionsRequest message. Also converts values to other types if specified.
                     * @param message GetPartnerPermissionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.GetPartnerPermissionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPartnerPermissionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPartnerPermissionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Partner. */
                interface IPartner {

                    /** Partner name */
                    name?: (string|null);

                    /** Partner skus */
                    skus?: (google.cloud.cloudcontrolspartner.v1.ISku[]|null);

                    /** Partner ekmSolutions */
                    ekmSolutions?: (google.cloud.cloudcontrolspartner.v1.IEkmMetadata[]|null);

                    /** Partner operatedCloudRegions */
                    operatedCloudRegions?: (string[]|null);

                    /** Partner partnerProjectId */
                    partnerProjectId?: (string|null);

                    /** Partner createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Partner updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Partner. */
                class Partner implements IPartner {

                    /**
                     * Constructs a new Partner.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IPartner);

                    /** Partner name. */
                    public name: string;

                    /** Partner skus. */
                    public skus: google.cloud.cloudcontrolspartner.v1.ISku[];

                    /** Partner ekmSolutions. */
                    public ekmSolutions: google.cloud.cloudcontrolspartner.v1.IEkmMetadata[];

                    /** Partner operatedCloudRegions. */
                    public operatedCloudRegions: string[];

                    /** Partner partnerProjectId. */
                    public partnerProjectId: string;

                    /** Partner createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Partner updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new Partner instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Partner instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IPartner): google.cloud.cloudcontrolspartner.v1.Partner;

                    /**
                     * Encodes the specified Partner message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.Partner.verify|verify} messages.
                     * @param message Partner message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IPartner, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Partner message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.Partner.verify|verify} messages.
                     * @param message Partner message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IPartner, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Partner message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Partner
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.Partner;

                    /**
                     * Decodes a Partner message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Partner
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.Partner;

                    /**
                     * Verifies a Partner message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Partner message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Partner
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.Partner;

                    /**
                     * Creates a plain object from a Partner message. Also converts values to other types if specified.
                     * @param message Partner
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.Partner, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Partner to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Partner
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPartnerRequest. */
                interface IGetPartnerRequest {

                    /** GetPartnerRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPartnerRequest. */
                class GetPartnerRequest implements IGetPartnerRequest {

                    /**
                     * Constructs a new GetPartnerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IGetPartnerRequest);

                    /** GetPartnerRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPartnerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPartnerRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IGetPartnerRequest): google.cloud.cloudcontrolspartner.v1.GetPartnerRequest;

                    /**
                     * Encodes the specified GetPartnerRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.GetPartnerRequest.verify|verify} messages.
                     * @param message GetPartnerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IGetPartnerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPartnerRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.GetPartnerRequest.verify|verify} messages.
                     * @param message GetPartnerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IGetPartnerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPartnerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPartnerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.GetPartnerRequest;

                    /**
                     * Decodes a GetPartnerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPartnerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.GetPartnerRequest;

                    /**
                     * Verifies a GetPartnerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPartnerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPartnerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.GetPartnerRequest;

                    /**
                     * Creates a plain object from a GetPartnerRequest message. Also converts values to other types if specified.
                     * @param message GetPartnerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.GetPartnerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPartnerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPartnerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Sku. */
                interface ISku {

                    /** Sku id */
                    id?: (string|null);

                    /** Sku displayName */
                    displayName?: (string|null);
                }

                /** Represents a Sku. */
                class Sku implements ISku {

                    /**
                     * Constructs a new Sku.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.ISku);

                    /** Sku id. */
                    public id: string;

                    /** Sku displayName. */
                    public displayName: string;

                    /**
                     * Creates a new Sku instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Sku instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.ISku): google.cloud.cloudcontrolspartner.v1.Sku;

                    /**
                     * Encodes the specified Sku message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.Sku.verify|verify} messages.
                     * @param message Sku message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.ISku, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Sku message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.Sku.verify|verify} messages.
                     * @param message Sku message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.ISku, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Sku message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Sku
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.Sku;

                    /**
                     * Decodes a Sku message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Sku
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.Sku;

                    /**
                     * Verifies a Sku message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Sku message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Sku
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.Sku;

                    /**
                     * Creates a plain object from a Sku message. Also converts values to other types if specified.
                     * @param message Sku
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.Sku, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Sku to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Sku
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EkmMetadata. */
                interface IEkmMetadata {

                    /** EkmMetadata ekmSolution */
                    ekmSolution?: (google.cloud.cloudcontrolspartner.v1.EkmMetadata.EkmSolution|keyof typeof google.cloud.cloudcontrolspartner.v1.EkmMetadata.EkmSolution|null);

                    /** EkmMetadata ekmEndpointUri */
                    ekmEndpointUri?: (string|null);
                }

                /** Represents an EkmMetadata. */
                class EkmMetadata implements IEkmMetadata {

                    /**
                     * Constructs a new EkmMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IEkmMetadata);

                    /** EkmMetadata ekmSolution. */
                    public ekmSolution: (google.cloud.cloudcontrolspartner.v1.EkmMetadata.EkmSolution|keyof typeof google.cloud.cloudcontrolspartner.v1.EkmMetadata.EkmSolution);

                    /** EkmMetadata ekmEndpointUri. */
                    public ekmEndpointUri: string;

                    /**
                     * Creates a new EkmMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EkmMetadata instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IEkmMetadata): google.cloud.cloudcontrolspartner.v1.EkmMetadata;

                    /**
                     * Encodes the specified EkmMetadata message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.EkmMetadata.verify|verify} messages.
                     * @param message EkmMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IEkmMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EkmMetadata message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.EkmMetadata.verify|verify} messages.
                     * @param message EkmMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IEkmMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EkmMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EkmMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.EkmMetadata;

                    /**
                     * Decodes an EkmMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EkmMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.EkmMetadata;

                    /**
                     * Verifies an EkmMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EkmMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EkmMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.EkmMetadata;

                    /**
                     * Creates a plain object from an EkmMetadata message. Also converts values to other types if specified.
                     * @param message EkmMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.EkmMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EkmMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EkmMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace EkmMetadata {

                    /** EkmSolution enum. */
                    enum EkmSolution {
                        EKM_SOLUTION_UNSPECIFIED = 0,
                        FORTANIX = 1,
                        FUTUREX = 2,
                        THALES = 3,
                        VIRTRU = 4
                    }
                }

                /** Represents a CloudControlsPartnerMonitoring */
                class CloudControlsPartnerMonitoring extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CloudControlsPartnerMonitoring service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CloudControlsPartnerMonitoring service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CloudControlsPartnerMonitoring;

                    /**
                     * Calls ListViolations.
                     * @param request ListViolationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListViolationsResponse
                     */
                    public listViolations(request: google.cloud.cloudcontrolspartner.v1.IListViolationsRequest, callback: google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerMonitoring.ListViolationsCallback): void;

                    /**
                     * Calls ListViolations.
                     * @param request ListViolationsRequest message or plain object
                     * @returns Promise
                     */
                    public listViolations(request: google.cloud.cloudcontrolspartner.v1.IListViolationsRequest): Promise<google.cloud.cloudcontrolspartner.v1.ListViolationsResponse>;

                    /**
                     * Calls GetViolation.
                     * @param request GetViolationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Violation
                     */
                    public getViolation(request: google.cloud.cloudcontrolspartner.v1.IGetViolationRequest, callback: google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerMonitoring.GetViolationCallback): void;

                    /**
                     * Calls GetViolation.
                     * @param request GetViolationRequest message or plain object
                     * @returns Promise
                     */
                    public getViolation(request: google.cloud.cloudcontrolspartner.v1.IGetViolationRequest): Promise<google.cloud.cloudcontrolspartner.v1.Violation>;
                }

                namespace CloudControlsPartnerMonitoring {

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerMonitoring|listViolations}.
                     * @param error Error, if any
                     * @param [response] ListViolationsResponse
                     */
                    type ListViolationsCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1.ListViolationsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1.CloudControlsPartnerMonitoring|getViolation}.
                     * @param error Error, if any
                     * @param [response] Violation
                     */
                    type GetViolationCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1.Violation) => void;
                }

                /** Properties of a Violation. */
                interface IViolation {

                    /** Violation name */
                    name?: (string|null);

                    /** Violation description */
                    description?: (string|null);

                    /** Violation beginTime */
                    beginTime?: (google.protobuf.ITimestamp|null);

                    /** Violation updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Violation resolveTime */
                    resolveTime?: (google.protobuf.ITimestamp|null);

                    /** Violation category */
                    category?: (string|null);

                    /** Violation state */
                    state?: (google.cloud.cloudcontrolspartner.v1.Violation.State|keyof typeof google.cloud.cloudcontrolspartner.v1.Violation.State|null);

                    /** Violation nonCompliantOrgPolicy */
                    nonCompliantOrgPolicy?: (string|null);

                    /** Violation folderId */
                    folderId?: (number|Long|string|null);

                    /** Violation remediation */
                    remediation?: (google.cloud.cloudcontrolspartner.v1.Violation.IRemediation|null);
                }

                /** Represents a Violation. */
                class Violation implements IViolation {

                    /**
                     * Constructs a new Violation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IViolation);

                    /** Violation name. */
                    public name: string;

                    /** Violation description. */
                    public description: string;

                    /** Violation beginTime. */
                    public beginTime?: (google.protobuf.ITimestamp|null);

                    /** Violation updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Violation resolveTime. */
                    public resolveTime?: (google.protobuf.ITimestamp|null);

                    /** Violation category. */
                    public category: string;

                    /** Violation state. */
                    public state: (google.cloud.cloudcontrolspartner.v1.Violation.State|keyof typeof google.cloud.cloudcontrolspartner.v1.Violation.State);

                    /** Violation nonCompliantOrgPolicy. */
                    public nonCompliantOrgPolicy: string;

                    /** Violation folderId. */
                    public folderId: (number|Long|string);

                    /** Violation remediation. */
                    public remediation?: (google.cloud.cloudcontrolspartner.v1.Violation.IRemediation|null);

                    /**
                     * Creates a new Violation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Violation instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IViolation): google.cloud.cloudcontrolspartner.v1.Violation;

                    /**
                     * Encodes the specified Violation message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.Violation.verify|verify} messages.
                     * @param message Violation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IViolation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Violation message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.Violation.verify|verify} messages.
                     * @param message Violation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IViolation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Violation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Violation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.Violation;

                    /**
                     * Decodes a Violation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Violation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.Violation;

                    /**
                     * Verifies a Violation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Violation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Violation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.Violation;

                    /**
                     * Creates a plain object from a Violation message. Also converts values to other types if specified.
                     * @param message Violation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.Violation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Violation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Violation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Violation {

                    /** Properties of a Remediation. */
                    interface IRemediation {

                        /** Remediation instructions */
                        instructions?: (google.cloud.cloudcontrolspartner.v1.Violation.Remediation.IInstructions|null);

                        /** Remediation compliantValues */
                        compliantValues?: (string[]|null);

                        /** Remediation remediationType */
                        remediationType?: (google.cloud.cloudcontrolspartner.v1.Violation.Remediation.RemediationType|keyof typeof google.cloud.cloudcontrolspartner.v1.Violation.Remediation.RemediationType|null);
                    }

                    /** Represents a Remediation. */
                    class Remediation implements IRemediation {

                        /**
                         * Constructs a new Remediation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.cloudcontrolspartner.v1.Violation.IRemediation);

                        /** Remediation instructions. */
                        public instructions?: (google.cloud.cloudcontrolspartner.v1.Violation.Remediation.IInstructions|null);

                        /** Remediation compliantValues. */
                        public compliantValues: string[];

                        /** Remediation remediationType. */
                        public remediationType: (google.cloud.cloudcontrolspartner.v1.Violation.Remediation.RemediationType|keyof typeof google.cloud.cloudcontrolspartner.v1.Violation.Remediation.RemediationType);

                        /**
                         * Creates a new Remediation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Remediation instance
                         */
                        public static create(properties?: google.cloud.cloudcontrolspartner.v1.Violation.IRemediation): google.cloud.cloudcontrolspartner.v1.Violation.Remediation;

                        /**
                         * Encodes the specified Remediation message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.Violation.Remediation.verify|verify} messages.
                         * @param message Remediation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.cloudcontrolspartner.v1.Violation.IRemediation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Remediation message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.Violation.Remediation.verify|verify} messages.
                         * @param message Remediation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.Violation.IRemediation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Remediation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Remediation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.Violation.Remediation;

                        /**
                         * Decodes a Remediation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Remediation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.Violation.Remediation;

                        /**
                         * Verifies a Remediation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Remediation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Remediation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.Violation.Remediation;

                        /**
                         * Creates a plain object from a Remediation message. Also converts values to other types if specified.
                         * @param message Remediation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.cloudcontrolspartner.v1.Violation.Remediation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Remediation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Remediation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Remediation {

                        /** Properties of an Instructions. */
                        interface IInstructions {

                            /** Instructions gcloudInstructions */
                            gcloudInstructions?: (google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.IGcloud|null);

                            /** Instructions consoleInstructions */
                            consoleInstructions?: (google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.IConsole|null);
                        }

                        /** Represents an Instructions. */
                        class Instructions implements IInstructions {

                            /**
                             * Constructs a new Instructions.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.cloudcontrolspartner.v1.Violation.Remediation.IInstructions);

                            /** Instructions gcloudInstructions. */
                            public gcloudInstructions?: (google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.IGcloud|null);

                            /** Instructions consoleInstructions. */
                            public consoleInstructions?: (google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.IConsole|null);

                            /**
                             * Creates a new Instructions instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Instructions instance
                             */
                            public static create(properties?: google.cloud.cloudcontrolspartner.v1.Violation.Remediation.IInstructions): google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions;

                            /**
                             * Encodes the specified Instructions message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.verify|verify} messages.
                             * @param message Instructions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.cloudcontrolspartner.v1.Violation.Remediation.IInstructions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Instructions message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.verify|verify} messages.
                             * @param message Instructions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.Violation.Remediation.IInstructions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Instructions message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Instructions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions;

                            /**
                             * Decodes an Instructions message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Instructions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions;

                            /**
                             * Verifies an Instructions message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Instructions message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Instructions
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions;

                            /**
                             * Creates a plain object from an Instructions message. Also converts values to other types if specified.
                             * @param message Instructions
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Instructions to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Instructions
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace Instructions {

                            /** Properties of a Gcloud. */
                            interface IGcloud {

                                /** Gcloud gcloudCommands */
                                gcloudCommands?: (string[]|null);

                                /** Gcloud steps */
                                steps?: (string[]|null);

                                /** Gcloud additionalLinks */
                                additionalLinks?: (string[]|null);
                            }

                            /** Represents a Gcloud. */
                            class Gcloud implements IGcloud {

                                /**
                                 * Constructs a new Gcloud.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.IGcloud);

                                /** Gcloud gcloudCommands. */
                                public gcloudCommands: string[];

                                /** Gcloud steps. */
                                public steps: string[];

                                /** Gcloud additionalLinks. */
                                public additionalLinks: string[];

                                /**
                                 * Creates a new Gcloud instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Gcloud instance
                                 */
                                public static create(properties?: google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.IGcloud): google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.Gcloud;

                                /**
                                 * Encodes the specified Gcloud message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.Gcloud.verify|verify} messages.
                                 * @param message Gcloud message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.IGcloud, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Gcloud message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.Gcloud.verify|verify} messages.
                                 * @param message Gcloud message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.IGcloud, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a Gcloud message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Gcloud
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.Gcloud;

                                /**
                                 * Decodes a Gcloud message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Gcloud
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.Gcloud;

                                /**
                                 * Verifies a Gcloud message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a Gcloud message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Gcloud
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.Gcloud;

                                /**
                                 * Creates a plain object from a Gcloud message. Also converts values to other types if specified.
                                 * @param message Gcloud
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.Gcloud, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Gcloud to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for Gcloud
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of a Console. */
                            interface IConsole {

                                /** Console consoleUris */
                                consoleUris?: (string[]|null);

                                /** Console steps */
                                steps?: (string[]|null);

                                /** Console additionalLinks */
                                additionalLinks?: (string[]|null);
                            }

                            /** Represents a Console. */
                            class Console implements IConsole {

                                /**
                                 * Constructs a new Console.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.IConsole);

                                /** Console consoleUris. */
                                public consoleUris: string[];

                                /** Console steps. */
                                public steps: string[];

                                /** Console additionalLinks. */
                                public additionalLinks: string[];

                                /**
                                 * Creates a new Console instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Console instance
                                 */
                                public static create(properties?: google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.IConsole): google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.Console;

                                /**
                                 * Encodes the specified Console message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.Console.verify|verify} messages.
                                 * @param message Console message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.IConsole, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Console message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.Console.verify|verify} messages.
                                 * @param message Console message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.IConsole, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a Console message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Console
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.Console;

                                /**
                                 * Decodes a Console message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Console
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.Console;

                                /**
                                 * Verifies a Console message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a Console message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Console
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.Console;

                                /**
                                 * Creates a plain object from a Console message. Also converts values to other types if specified.
                                 * @param message Console
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.cloudcontrolspartner.v1.Violation.Remediation.Instructions.Console, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Console to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for Console
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }

                        /** RemediationType enum. */
                        enum RemediationType {
                            REMEDIATION_TYPE_UNSPECIFIED = 0,
                            REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION = 1,
                            REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION = 2,
                            REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION = 3,
                            REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION = 4,
                            REMEDIATION_RESOURCE_VIOLATION = 5
                        }
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RESOLVED = 1,
                        UNRESOLVED = 2,
                        EXCEPTION = 3
                    }
                }

                /** Properties of a ListViolationsRequest. */
                interface IListViolationsRequest {

                    /** ListViolationsRequest parent */
                    parent?: (string|null);

                    /** ListViolationsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListViolationsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListViolationsRequest filter */
                    filter?: (string|null);

                    /** ListViolationsRequest orderBy */
                    orderBy?: (string|null);

                    /** ListViolationsRequest interval */
                    interval?: (google.type.IInterval|null);
                }

                /** Represents a ListViolationsRequest. */
                class ListViolationsRequest implements IListViolationsRequest {

                    /**
                     * Constructs a new ListViolationsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IListViolationsRequest);

                    /** ListViolationsRequest parent. */
                    public parent: string;

                    /** ListViolationsRequest pageSize. */
                    public pageSize: number;

                    /** ListViolationsRequest pageToken. */
                    public pageToken: string;

                    /** ListViolationsRequest filter. */
                    public filter: string;

                    /** ListViolationsRequest orderBy. */
                    public orderBy: string;

                    /** ListViolationsRequest interval. */
                    public interval?: (google.type.IInterval|null);

                    /**
                     * Creates a new ListViolationsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListViolationsRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IListViolationsRequest): google.cloud.cloudcontrolspartner.v1.ListViolationsRequest;

                    /**
                     * Encodes the specified ListViolationsRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.ListViolationsRequest.verify|verify} messages.
                     * @param message ListViolationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IListViolationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListViolationsRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.ListViolationsRequest.verify|verify} messages.
                     * @param message ListViolationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IListViolationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListViolationsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListViolationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.ListViolationsRequest;

                    /**
                     * Decodes a ListViolationsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListViolationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.ListViolationsRequest;

                    /**
                     * Verifies a ListViolationsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListViolationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListViolationsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.ListViolationsRequest;

                    /**
                     * Creates a plain object from a ListViolationsRequest message. Also converts values to other types if specified.
                     * @param message ListViolationsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.ListViolationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListViolationsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListViolationsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListViolationsResponse. */
                interface IListViolationsResponse {

                    /** ListViolationsResponse violations */
                    violations?: (google.cloud.cloudcontrolspartner.v1.IViolation[]|null);

                    /** ListViolationsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListViolationsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListViolationsResponse. */
                class ListViolationsResponse implements IListViolationsResponse {

                    /**
                     * Constructs a new ListViolationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IListViolationsResponse);

                    /** ListViolationsResponse violations. */
                    public violations: google.cloud.cloudcontrolspartner.v1.IViolation[];

                    /** ListViolationsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListViolationsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListViolationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListViolationsResponse instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IListViolationsResponse): google.cloud.cloudcontrolspartner.v1.ListViolationsResponse;

                    /**
                     * Encodes the specified ListViolationsResponse message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.ListViolationsResponse.verify|verify} messages.
                     * @param message ListViolationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IListViolationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListViolationsResponse message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.ListViolationsResponse.verify|verify} messages.
                     * @param message ListViolationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IListViolationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListViolationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListViolationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.ListViolationsResponse;

                    /**
                     * Decodes a ListViolationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListViolationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.ListViolationsResponse;

                    /**
                     * Verifies a ListViolationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListViolationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListViolationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.ListViolationsResponse;

                    /**
                     * Creates a plain object from a ListViolationsResponse message. Also converts values to other types if specified.
                     * @param message ListViolationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.ListViolationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListViolationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListViolationsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetViolationRequest. */
                interface IGetViolationRequest {

                    /** GetViolationRequest name */
                    name?: (string|null);
                }

                /** Represents a GetViolationRequest. */
                class GetViolationRequest implements IGetViolationRequest {

                    /**
                     * Constructs a new GetViolationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1.IGetViolationRequest);

                    /** GetViolationRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetViolationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetViolationRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1.IGetViolationRequest): google.cloud.cloudcontrolspartner.v1.GetViolationRequest;

                    /**
                     * Encodes the specified GetViolationRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.GetViolationRequest.verify|verify} messages.
                     * @param message GetViolationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1.IGetViolationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetViolationRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1.GetViolationRequest.verify|verify} messages.
                     * @param message GetViolationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1.IGetViolationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetViolationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetViolationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1.GetViolationRequest;

                    /**
                     * Decodes a GetViolationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetViolationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1.GetViolationRequest;

                    /**
                     * Verifies a GetViolationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetViolationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetViolationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1.GetViolationRequest;

                    /**
                     * Creates a plain object from a GetViolationRequest message. Also converts values to other types if specified.
                     * @param message GetViolationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1.GetViolationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetViolationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetViolationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Namespace v1beta. */
            namespace v1beta {

                /** Properties of an AccessApprovalRequest. */
                interface IAccessApprovalRequest {

                    /** AccessApprovalRequest name */
                    name?: (string|null);

                    /** AccessApprovalRequest requestTime */
                    requestTime?: (google.protobuf.ITimestamp|null);

                    /** AccessApprovalRequest requestedReason */
                    requestedReason?: (google.cloud.cloudcontrolspartner.v1beta.IAccessReason|null);

                    /** AccessApprovalRequest requestedExpirationTime */
                    requestedExpirationTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an AccessApprovalRequest. */
                class AccessApprovalRequest implements IAccessApprovalRequest {

                    /**
                     * Constructs a new AccessApprovalRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IAccessApprovalRequest);

                    /** AccessApprovalRequest name. */
                    public name: string;

                    /** AccessApprovalRequest requestTime. */
                    public requestTime?: (google.protobuf.ITimestamp|null);

                    /** AccessApprovalRequest requestedReason. */
                    public requestedReason?: (google.cloud.cloudcontrolspartner.v1beta.IAccessReason|null);

                    /** AccessApprovalRequest requestedExpirationTime. */
                    public requestedExpirationTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new AccessApprovalRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AccessApprovalRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IAccessApprovalRequest): google.cloud.cloudcontrolspartner.v1beta.AccessApprovalRequest;

                    /**
                     * Encodes the specified AccessApprovalRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.AccessApprovalRequest.verify|verify} messages.
                     * @param message AccessApprovalRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IAccessApprovalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AccessApprovalRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.AccessApprovalRequest.verify|verify} messages.
                     * @param message AccessApprovalRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IAccessApprovalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AccessApprovalRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AccessApprovalRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.AccessApprovalRequest;

                    /**
                     * Decodes an AccessApprovalRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AccessApprovalRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.AccessApprovalRequest;

                    /**
                     * Verifies an AccessApprovalRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AccessApprovalRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AccessApprovalRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.AccessApprovalRequest;

                    /**
                     * Creates a plain object from an AccessApprovalRequest message. Also converts values to other types if specified.
                     * @param message AccessApprovalRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.AccessApprovalRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AccessApprovalRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AccessApprovalRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAccessApprovalRequestsRequest. */
                interface IListAccessApprovalRequestsRequest {

                    /** ListAccessApprovalRequestsRequest parent */
                    parent?: (string|null);

                    /** ListAccessApprovalRequestsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAccessApprovalRequestsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListAccessApprovalRequestsRequest filter */
                    filter?: (string|null);

                    /** ListAccessApprovalRequestsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListAccessApprovalRequestsRequest. */
                class ListAccessApprovalRequestsRequest implements IListAccessApprovalRequestsRequest {

                    /**
                     * Constructs a new ListAccessApprovalRequestsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IListAccessApprovalRequestsRequest);

                    /** ListAccessApprovalRequestsRequest parent. */
                    public parent: string;

                    /** ListAccessApprovalRequestsRequest pageSize. */
                    public pageSize: number;

                    /** ListAccessApprovalRequestsRequest pageToken. */
                    public pageToken: string;

                    /** ListAccessApprovalRequestsRequest filter. */
                    public filter: string;

                    /** ListAccessApprovalRequestsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListAccessApprovalRequestsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAccessApprovalRequestsRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IListAccessApprovalRequestsRequest): google.cloud.cloudcontrolspartner.v1beta.ListAccessApprovalRequestsRequest;

                    /**
                     * Encodes the specified ListAccessApprovalRequestsRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.ListAccessApprovalRequestsRequest.verify|verify} messages.
                     * @param message ListAccessApprovalRequestsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IListAccessApprovalRequestsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAccessApprovalRequestsRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.ListAccessApprovalRequestsRequest.verify|verify} messages.
                     * @param message ListAccessApprovalRequestsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IListAccessApprovalRequestsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAccessApprovalRequestsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAccessApprovalRequestsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.ListAccessApprovalRequestsRequest;

                    /**
                     * Decodes a ListAccessApprovalRequestsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAccessApprovalRequestsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.ListAccessApprovalRequestsRequest;

                    /**
                     * Verifies a ListAccessApprovalRequestsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAccessApprovalRequestsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAccessApprovalRequestsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.ListAccessApprovalRequestsRequest;

                    /**
                     * Creates a plain object from a ListAccessApprovalRequestsRequest message. Also converts values to other types if specified.
                     * @param message ListAccessApprovalRequestsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.ListAccessApprovalRequestsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAccessApprovalRequestsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAccessApprovalRequestsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAccessApprovalRequestsResponse. */
                interface IListAccessApprovalRequestsResponse {

                    /** ListAccessApprovalRequestsResponse accessApprovalRequests */
                    accessApprovalRequests?: (google.cloud.cloudcontrolspartner.v1beta.IAccessApprovalRequest[]|null);

                    /** ListAccessApprovalRequestsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListAccessApprovalRequestsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListAccessApprovalRequestsResponse. */
                class ListAccessApprovalRequestsResponse implements IListAccessApprovalRequestsResponse {

                    /**
                     * Constructs a new ListAccessApprovalRequestsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IListAccessApprovalRequestsResponse);

                    /** ListAccessApprovalRequestsResponse accessApprovalRequests. */
                    public accessApprovalRequests: google.cloud.cloudcontrolspartner.v1beta.IAccessApprovalRequest[];

                    /** ListAccessApprovalRequestsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListAccessApprovalRequestsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListAccessApprovalRequestsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAccessApprovalRequestsResponse instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IListAccessApprovalRequestsResponse): google.cloud.cloudcontrolspartner.v1beta.ListAccessApprovalRequestsResponse;

                    /**
                     * Encodes the specified ListAccessApprovalRequestsResponse message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.ListAccessApprovalRequestsResponse.verify|verify} messages.
                     * @param message ListAccessApprovalRequestsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IListAccessApprovalRequestsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAccessApprovalRequestsResponse message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.ListAccessApprovalRequestsResponse.verify|verify} messages.
                     * @param message ListAccessApprovalRequestsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IListAccessApprovalRequestsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAccessApprovalRequestsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAccessApprovalRequestsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.ListAccessApprovalRequestsResponse;

                    /**
                     * Decodes a ListAccessApprovalRequestsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAccessApprovalRequestsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.ListAccessApprovalRequestsResponse;

                    /**
                     * Verifies a ListAccessApprovalRequestsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAccessApprovalRequestsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAccessApprovalRequestsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.ListAccessApprovalRequestsResponse;

                    /**
                     * Creates a plain object from a ListAccessApprovalRequestsResponse message. Also converts values to other types if specified.
                     * @param message ListAccessApprovalRequestsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.ListAccessApprovalRequestsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAccessApprovalRequestsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAccessApprovalRequestsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AccessReason. */
                interface IAccessReason {

                    /** AccessReason type */
                    type?: (google.cloud.cloudcontrolspartner.v1beta.AccessReason.Type|keyof typeof google.cloud.cloudcontrolspartner.v1beta.AccessReason.Type|null);

                    /** AccessReason detail */
                    detail?: (string|null);
                }

                /** Represents an AccessReason. */
                class AccessReason implements IAccessReason {

                    /**
                     * Constructs a new AccessReason.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IAccessReason);

                    /** AccessReason type. */
                    public type: (google.cloud.cloudcontrolspartner.v1beta.AccessReason.Type|keyof typeof google.cloud.cloudcontrolspartner.v1beta.AccessReason.Type);

                    /** AccessReason detail. */
                    public detail: string;

                    /**
                     * Creates a new AccessReason instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AccessReason instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IAccessReason): google.cloud.cloudcontrolspartner.v1beta.AccessReason;

                    /**
                     * Encodes the specified AccessReason message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.AccessReason.verify|verify} messages.
                     * @param message AccessReason message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IAccessReason, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AccessReason message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.AccessReason.verify|verify} messages.
                     * @param message AccessReason message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IAccessReason, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AccessReason message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AccessReason
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.AccessReason;

                    /**
                     * Decodes an AccessReason message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AccessReason
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.AccessReason;

                    /**
                     * Verifies an AccessReason message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AccessReason message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AccessReason
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.AccessReason;

                    /**
                     * Creates a plain object from an AccessReason message. Also converts values to other types if specified.
                     * @param message AccessReason
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.AccessReason, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AccessReason to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AccessReason
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AccessReason {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        CUSTOMER_INITIATED_SUPPORT = 1,
                        GOOGLE_INITIATED_SERVICE = 2,
                        GOOGLE_INITIATED_REVIEW = 3,
                        THIRD_PARTY_DATA_REQUEST = 4,
                        GOOGLE_RESPONSE_TO_PRODUCTION_ALERT = 5,
                        CLOUD_INITIATED_ACCESS = 6
                    }
                }

                /** CompletionState enum. */
                enum CompletionState {
                    COMPLETION_STATE_UNSPECIFIED = 0,
                    PENDING = 1,
                    SUCCEEDED = 2,
                    FAILED = 3,
                    NOT_APPLICABLE = 4
                }

                /** Represents a CloudControlsPartnerCore */
                class CloudControlsPartnerCore extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CloudControlsPartnerCore service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CloudControlsPartnerCore service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CloudControlsPartnerCore;

                    /**
                     * Calls GetWorkload.
                     * @param request GetWorkloadRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Workload
                     */
                    public getWorkload(request: google.cloud.cloudcontrolspartner.v1beta.IGetWorkloadRequest, callback: google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerCore.GetWorkloadCallback): void;

                    /**
                     * Calls GetWorkload.
                     * @param request GetWorkloadRequest message or plain object
                     * @returns Promise
                     */
                    public getWorkload(request: google.cloud.cloudcontrolspartner.v1beta.IGetWorkloadRequest): Promise<google.cloud.cloudcontrolspartner.v1beta.Workload>;

                    /**
                     * Calls ListWorkloads.
                     * @param request ListWorkloadsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListWorkloadsResponse
                     */
                    public listWorkloads(request: google.cloud.cloudcontrolspartner.v1beta.IListWorkloadsRequest, callback: google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerCore.ListWorkloadsCallback): void;

                    /**
                     * Calls ListWorkloads.
                     * @param request ListWorkloadsRequest message or plain object
                     * @returns Promise
                     */
                    public listWorkloads(request: google.cloud.cloudcontrolspartner.v1beta.IListWorkloadsRequest): Promise<google.cloud.cloudcontrolspartner.v1beta.ListWorkloadsResponse>;

                    /**
                     * Calls GetCustomer.
                     * @param request GetCustomerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Customer
                     */
                    public getCustomer(request: google.cloud.cloudcontrolspartner.v1beta.IGetCustomerRequest, callback: google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerCore.GetCustomerCallback): void;

                    /**
                     * Calls GetCustomer.
                     * @param request GetCustomerRequest message or plain object
                     * @returns Promise
                     */
                    public getCustomer(request: google.cloud.cloudcontrolspartner.v1beta.IGetCustomerRequest): Promise<google.cloud.cloudcontrolspartner.v1beta.Customer>;

                    /**
                     * Calls ListCustomers.
                     * @param request ListCustomersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCustomersResponse
                     */
                    public listCustomers(request: google.cloud.cloudcontrolspartner.v1beta.IListCustomersRequest, callback: google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerCore.ListCustomersCallback): void;

                    /**
                     * Calls ListCustomers.
                     * @param request ListCustomersRequest message or plain object
                     * @returns Promise
                     */
                    public listCustomers(request: google.cloud.cloudcontrolspartner.v1beta.IListCustomersRequest): Promise<google.cloud.cloudcontrolspartner.v1beta.ListCustomersResponse>;

                    /**
                     * Calls GetEkmConnections.
                     * @param request GetEkmConnectionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EkmConnections
                     */
                    public getEkmConnections(request: google.cloud.cloudcontrolspartner.v1beta.IGetEkmConnectionsRequest, callback: google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerCore.GetEkmConnectionsCallback): void;

                    /**
                     * Calls GetEkmConnections.
                     * @param request GetEkmConnectionsRequest message or plain object
                     * @returns Promise
                     */
                    public getEkmConnections(request: google.cloud.cloudcontrolspartner.v1beta.IGetEkmConnectionsRequest): Promise<google.cloud.cloudcontrolspartner.v1beta.EkmConnections>;

                    /**
                     * Calls GetPartnerPermissions.
                     * @param request GetPartnerPermissionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PartnerPermissions
                     */
                    public getPartnerPermissions(request: google.cloud.cloudcontrolspartner.v1beta.IGetPartnerPermissionsRequest, callback: google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerCore.GetPartnerPermissionsCallback): void;

                    /**
                     * Calls GetPartnerPermissions.
                     * @param request GetPartnerPermissionsRequest message or plain object
                     * @returns Promise
                     */
                    public getPartnerPermissions(request: google.cloud.cloudcontrolspartner.v1beta.IGetPartnerPermissionsRequest): Promise<google.cloud.cloudcontrolspartner.v1beta.PartnerPermissions>;

                    /**
                     * Calls ListAccessApprovalRequests.
                     * @param request ListAccessApprovalRequestsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAccessApprovalRequestsResponse
                     */
                    public listAccessApprovalRequests(request: google.cloud.cloudcontrolspartner.v1beta.IListAccessApprovalRequestsRequest, callback: google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerCore.ListAccessApprovalRequestsCallback): void;

                    /**
                     * Calls ListAccessApprovalRequests.
                     * @param request ListAccessApprovalRequestsRequest message or plain object
                     * @returns Promise
                     */
                    public listAccessApprovalRequests(request: google.cloud.cloudcontrolspartner.v1beta.IListAccessApprovalRequestsRequest): Promise<google.cloud.cloudcontrolspartner.v1beta.ListAccessApprovalRequestsResponse>;

                    /**
                     * Calls GetPartner.
                     * @param request GetPartnerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Partner
                     */
                    public getPartner(request: google.cloud.cloudcontrolspartner.v1beta.IGetPartnerRequest, callback: google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerCore.GetPartnerCallback): void;

                    /**
                     * Calls GetPartner.
                     * @param request GetPartnerRequest message or plain object
                     * @returns Promise
                     */
                    public getPartner(request: google.cloud.cloudcontrolspartner.v1beta.IGetPartnerRequest): Promise<google.cloud.cloudcontrolspartner.v1beta.Partner>;

                    /**
                     * Calls CreateCustomer.
                     * @param request CreateCustomerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Customer
                     */
                    public createCustomer(request: google.cloud.cloudcontrolspartner.v1beta.ICreateCustomerRequest, callback: google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerCore.CreateCustomerCallback): void;

                    /**
                     * Calls CreateCustomer.
                     * @param request CreateCustomerRequest message or plain object
                     * @returns Promise
                     */
                    public createCustomer(request: google.cloud.cloudcontrolspartner.v1beta.ICreateCustomerRequest): Promise<google.cloud.cloudcontrolspartner.v1beta.Customer>;

                    /**
                     * Calls UpdateCustomer.
                     * @param request UpdateCustomerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Customer
                     */
                    public updateCustomer(request: google.cloud.cloudcontrolspartner.v1beta.IUpdateCustomerRequest, callback: google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerCore.UpdateCustomerCallback): void;

                    /**
                     * Calls UpdateCustomer.
                     * @param request UpdateCustomerRequest message or plain object
                     * @returns Promise
                     */
                    public updateCustomer(request: google.cloud.cloudcontrolspartner.v1beta.IUpdateCustomerRequest): Promise<google.cloud.cloudcontrolspartner.v1beta.Customer>;

                    /**
                     * Calls DeleteCustomer.
                     * @param request DeleteCustomerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteCustomer(request: google.cloud.cloudcontrolspartner.v1beta.IDeleteCustomerRequest, callback: google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerCore.DeleteCustomerCallback): void;

                    /**
                     * Calls DeleteCustomer.
                     * @param request DeleteCustomerRequest message or plain object
                     * @returns Promise
                     */
                    public deleteCustomer(request: google.cloud.cloudcontrolspartner.v1beta.IDeleteCustomerRequest): Promise<google.protobuf.Empty>;
                }

                namespace CloudControlsPartnerCore {

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerCore|getWorkload}.
                     * @param error Error, if any
                     * @param [response] Workload
                     */
                    type GetWorkloadCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1beta.Workload) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerCore|listWorkloads}.
                     * @param error Error, if any
                     * @param [response] ListWorkloadsResponse
                     */
                    type ListWorkloadsCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1beta.ListWorkloadsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerCore|getCustomer}.
                     * @param error Error, if any
                     * @param [response] Customer
                     */
                    type GetCustomerCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1beta.Customer) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerCore|listCustomers}.
                     * @param error Error, if any
                     * @param [response] ListCustomersResponse
                     */
                    type ListCustomersCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1beta.ListCustomersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerCore|getEkmConnections}.
                     * @param error Error, if any
                     * @param [response] EkmConnections
                     */
                    type GetEkmConnectionsCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1beta.EkmConnections) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerCore|getPartnerPermissions}.
                     * @param error Error, if any
                     * @param [response] PartnerPermissions
                     */
                    type GetPartnerPermissionsCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1beta.PartnerPermissions) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerCore|listAccessApprovalRequests}.
                     * @param error Error, if any
                     * @param [response] ListAccessApprovalRequestsResponse
                     */
                    type ListAccessApprovalRequestsCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1beta.ListAccessApprovalRequestsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerCore|getPartner}.
                     * @param error Error, if any
                     * @param [response] Partner
                     */
                    type GetPartnerCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1beta.Partner) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerCore|createCustomer}.
                     * @param error Error, if any
                     * @param [response] Customer
                     */
                    type CreateCustomerCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1beta.Customer) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerCore|updateCustomer}.
                     * @param error Error, if any
                     * @param [response] Customer
                     */
                    type UpdateCustomerCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1beta.Customer) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerCore|deleteCustomer}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteCustomerCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
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
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IOperationMetadata);

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
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IOperationMetadata): google.cloud.cloudcontrolspartner.v1beta.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a Workload. */
                interface IWorkload {

                    /** Workload name */
                    name?: (string|null);

                    /** Workload folderId */
                    folderId?: (number|Long|string|null);

                    /** Workload createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Workload folder */
                    folder?: (string|null);

                    /** Workload workloadOnboardingState */
                    workloadOnboardingState?: (google.cloud.cloudcontrolspartner.v1beta.IWorkloadOnboardingState|null);

                    /** Workload isOnboarded */
                    isOnboarded?: (boolean|null);

                    /** Workload keyManagementProjectId */
                    keyManagementProjectId?: (string|null);

                    /** Workload location */
                    location?: (string|null);

                    /** Workload partner */
                    partner?: (google.cloud.cloudcontrolspartner.v1beta.Workload.Partner|keyof typeof google.cloud.cloudcontrolspartner.v1beta.Workload.Partner|null);
                }

                /** Represents a Workload. */
                class Workload implements IWorkload {

                    /**
                     * Constructs a new Workload.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IWorkload);

                    /** Workload name. */
                    public name: string;

                    /** Workload folderId. */
                    public folderId: (number|Long|string);

                    /** Workload createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Workload folder. */
                    public folder: string;

                    /** Workload workloadOnboardingState. */
                    public workloadOnboardingState?: (google.cloud.cloudcontrolspartner.v1beta.IWorkloadOnboardingState|null);

                    /** Workload isOnboarded. */
                    public isOnboarded: boolean;

                    /** Workload keyManagementProjectId. */
                    public keyManagementProjectId: string;

                    /** Workload location. */
                    public location: string;

                    /** Workload partner. */
                    public partner: (google.cloud.cloudcontrolspartner.v1beta.Workload.Partner|keyof typeof google.cloud.cloudcontrolspartner.v1beta.Workload.Partner);

                    /**
                     * Creates a new Workload instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Workload instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IWorkload): google.cloud.cloudcontrolspartner.v1beta.Workload;

                    /**
                     * Encodes the specified Workload message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.Workload.verify|verify} messages.
                     * @param message Workload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IWorkload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Workload message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.Workload.verify|verify} messages.
                     * @param message Workload message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IWorkload, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Workload message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Workload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.Workload;

                    /**
                     * Decodes a Workload message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Workload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.Workload;

                    /**
                     * Verifies a Workload message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Workload message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Workload
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.Workload;

                    /**
                     * Creates a plain object from a Workload message. Also converts values to other types if specified.
                     * @param message Workload
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.Workload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Workload to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Workload
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Workload {

                    /** Partner enum. */
                    enum Partner {
                        PARTNER_UNSPECIFIED = 0,
                        PARTNER_LOCAL_CONTROLS_BY_S3NS = 1,
                        PARTNER_SOVEREIGN_CONTROLS_BY_T_SYSTEMS = 2,
                        PARTNER_SOVEREIGN_CONTROLS_BY_SIA_MINSAIT = 3,
                        PARTNER_SOVEREIGN_CONTROLS_BY_PSN = 4,
                        PARTNER_SOVEREIGN_CONTROLS_BY_CNTXT = 6,
                        PARTNER_SOVEREIGN_CONTROLS_BY_CNTXT_NO_EKM = 7
                    }
                }

                /** Properties of a ListWorkloadsRequest. */
                interface IListWorkloadsRequest {

                    /** ListWorkloadsRequest parent */
                    parent?: (string|null);

                    /** ListWorkloadsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListWorkloadsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListWorkloadsRequest filter */
                    filter?: (string|null);

                    /** ListWorkloadsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListWorkloadsRequest. */
                class ListWorkloadsRequest implements IListWorkloadsRequest {

                    /**
                     * Constructs a new ListWorkloadsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IListWorkloadsRequest);

                    /** ListWorkloadsRequest parent. */
                    public parent: string;

                    /** ListWorkloadsRequest pageSize. */
                    public pageSize: number;

                    /** ListWorkloadsRequest pageToken. */
                    public pageToken: string;

                    /** ListWorkloadsRequest filter. */
                    public filter: string;

                    /** ListWorkloadsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListWorkloadsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkloadsRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IListWorkloadsRequest): google.cloud.cloudcontrolspartner.v1beta.ListWorkloadsRequest;

                    /**
                     * Encodes the specified ListWorkloadsRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.ListWorkloadsRequest.verify|verify} messages.
                     * @param message ListWorkloadsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IListWorkloadsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkloadsRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.ListWorkloadsRequest.verify|verify} messages.
                     * @param message ListWorkloadsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IListWorkloadsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkloadsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkloadsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.ListWorkloadsRequest;

                    /**
                     * Decodes a ListWorkloadsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkloadsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.ListWorkloadsRequest;

                    /**
                     * Verifies a ListWorkloadsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkloadsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkloadsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.ListWorkloadsRequest;

                    /**
                     * Creates a plain object from a ListWorkloadsRequest message. Also converts values to other types if specified.
                     * @param message ListWorkloadsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.ListWorkloadsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkloadsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListWorkloadsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListWorkloadsResponse. */
                interface IListWorkloadsResponse {

                    /** ListWorkloadsResponse workloads */
                    workloads?: (google.cloud.cloudcontrolspartner.v1beta.IWorkload[]|null);

                    /** ListWorkloadsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListWorkloadsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListWorkloadsResponse. */
                class ListWorkloadsResponse implements IListWorkloadsResponse {

                    /**
                     * Constructs a new ListWorkloadsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IListWorkloadsResponse);

                    /** ListWorkloadsResponse workloads. */
                    public workloads: google.cloud.cloudcontrolspartner.v1beta.IWorkload[];

                    /** ListWorkloadsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListWorkloadsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListWorkloadsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkloadsResponse instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IListWorkloadsResponse): google.cloud.cloudcontrolspartner.v1beta.ListWorkloadsResponse;

                    /**
                     * Encodes the specified ListWorkloadsResponse message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.ListWorkloadsResponse.verify|verify} messages.
                     * @param message ListWorkloadsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IListWorkloadsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkloadsResponse message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.ListWorkloadsResponse.verify|verify} messages.
                     * @param message ListWorkloadsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IListWorkloadsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkloadsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkloadsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.ListWorkloadsResponse;

                    /**
                     * Decodes a ListWorkloadsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkloadsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.ListWorkloadsResponse;

                    /**
                     * Verifies a ListWorkloadsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkloadsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkloadsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.ListWorkloadsResponse;

                    /**
                     * Creates a plain object from a ListWorkloadsResponse message. Also converts values to other types if specified.
                     * @param message ListWorkloadsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.ListWorkloadsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkloadsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListWorkloadsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetWorkloadRequest. */
                interface IGetWorkloadRequest {

                    /** GetWorkloadRequest name */
                    name?: (string|null);
                }

                /** Represents a GetWorkloadRequest. */
                class GetWorkloadRequest implements IGetWorkloadRequest {

                    /**
                     * Constructs a new GetWorkloadRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IGetWorkloadRequest);

                    /** GetWorkloadRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetWorkloadRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetWorkloadRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IGetWorkloadRequest): google.cloud.cloudcontrolspartner.v1beta.GetWorkloadRequest;

                    /**
                     * Encodes the specified GetWorkloadRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.GetWorkloadRequest.verify|verify} messages.
                     * @param message GetWorkloadRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IGetWorkloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetWorkloadRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.GetWorkloadRequest.verify|verify} messages.
                     * @param message GetWorkloadRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IGetWorkloadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetWorkloadRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetWorkloadRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.GetWorkloadRequest;

                    /**
                     * Decodes a GetWorkloadRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetWorkloadRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.GetWorkloadRequest;

                    /**
                     * Verifies a GetWorkloadRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetWorkloadRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetWorkloadRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.GetWorkloadRequest;

                    /**
                     * Creates a plain object from a GetWorkloadRequest message. Also converts values to other types if specified.
                     * @param message GetWorkloadRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.GetWorkloadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetWorkloadRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetWorkloadRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WorkloadOnboardingState. */
                interface IWorkloadOnboardingState {

                    /** WorkloadOnboardingState onboardingSteps */
                    onboardingSteps?: (google.cloud.cloudcontrolspartner.v1beta.IWorkloadOnboardingStep[]|null);
                }

                /** Represents a WorkloadOnboardingState. */
                class WorkloadOnboardingState implements IWorkloadOnboardingState {

                    /**
                     * Constructs a new WorkloadOnboardingState.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IWorkloadOnboardingState);

                    /** WorkloadOnboardingState onboardingSteps. */
                    public onboardingSteps: google.cloud.cloudcontrolspartner.v1beta.IWorkloadOnboardingStep[];

                    /**
                     * Creates a new WorkloadOnboardingState instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WorkloadOnboardingState instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IWorkloadOnboardingState): google.cloud.cloudcontrolspartner.v1beta.WorkloadOnboardingState;

                    /**
                     * Encodes the specified WorkloadOnboardingState message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.WorkloadOnboardingState.verify|verify} messages.
                     * @param message WorkloadOnboardingState message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IWorkloadOnboardingState, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WorkloadOnboardingState message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.WorkloadOnboardingState.verify|verify} messages.
                     * @param message WorkloadOnboardingState message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IWorkloadOnboardingState, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WorkloadOnboardingState message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WorkloadOnboardingState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.WorkloadOnboardingState;

                    /**
                     * Decodes a WorkloadOnboardingState message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WorkloadOnboardingState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.WorkloadOnboardingState;

                    /**
                     * Verifies a WorkloadOnboardingState message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WorkloadOnboardingState message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WorkloadOnboardingState
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.WorkloadOnboardingState;

                    /**
                     * Creates a plain object from a WorkloadOnboardingState message. Also converts values to other types if specified.
                     * @param message WorkloadOnboardingState
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.WorkloadOnboardingState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WorkloadOnboardingState to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WorkloadOnboardingState
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WorkloadOnboardingStep. */
                interface IWorkloadOnboardingStep {

                    /** WorkloadOnboardingStep step */
                    step?: (google.cloud.cloudcontrolspartner.v1beta.WorkloadOnboardingStep.Step|keyof typeof google.cloud.cloudcontrolspartner.v1beta.WorkloadOnboardingStep.Step|null);

                    /** WorkloadOnboardingStep startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** WorkloadOnboardingStep completionTime */
                    completionTime?: (google.protobuf.ITimestamp|null);

                    /** WorkloadOnboardingStep completionState */
                    completionState?: (google.cloud.cloudcontrolspartner.v1beta.CompletionState|keyof typeof google.cloud.cloudcontrolspartner.v1beta.CompletionState|null);
                }

                /** Represents a WorkloadOnboardingStep. */
                class WorkloadOnboardingStep implements IWorkloadOnboardingStep {

                    /**
                     * Constructs a new WorkloadOnboardingStep.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IWorkloadOnboardingStep);

                    /** WorkloadOnboardingStep step. */
                    public step: (google.cloud.cloudcontrolspartner.v1beta.WorkloadOnboardingStep.Step|keyof typeof google.cloud.cloudcontrolspartner.v1beta.WorkloadOnboardingStep.Step);

                    /** WorkloadOnboardingStep startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** WorkloadOnboardingStep completionTime. */
                    public completionTime?: (google.protobuf.ITimestamp|null);

                    /** WorkloadOnboardingStep completionState. */
                    public completionState: (google.cloud.cloudcontrolspartner.v1beta.CompletionState|keyof typeof google.cloud.cloudcontrolspartner.v1beta.CompletionState);

                    /**
                     * Creates a new WorkloadOnboardingStep instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WorkloadOnboardingStep instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IWorkloadOnboardingStep): google.cloud.cloudcontrolspartner.v1beta.WorkloadOnboardingStep;

                    /**
                     * Encodes the specified WorkloadOnboardingStep message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.WorkloadOnboardingStep.verify|verify} messages.
                     * @param message WorkloadOnboardingStep message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IWorkloadOnboardingStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WorkloadOnboardingStep message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.WorkloadOnboardingStep.verify|verify} messages.
                     * @param message WorkloadOnboardingStep message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IWorkloadOnboardingStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WorkloadOnboardingStep message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WorkloadOnboardingStep
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.WorkloadOnboardingStep;

                    /**
                     * Decodes a WorkloadOnboardingStep message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WorkloadOnboardingStep
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.WorkloadOnboardingStep;

                    /**
                     * Verifies a WorkloadOnboardingStep message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WorkloadOnboardingStep message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WorkloadOnboardingStep
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.WorkloadOnboardingStep;

                    /**
                     * Creates a plain object from a WorkloadOnboardingStep message. Also converts values to other types if specified.
                     * @param message WorkloadOnboardingStep
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.WorkloadOnboardingStep, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WorkloadOnboardingStep to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WorkloadOnboardingStep
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace WorkloadOnboardingStep {

                    /** Step enum. */
                    enum Step {
                        STEP_UNSPECIFIED = 0,
                        EKM_PROVISIONED = 1,
                        SIGNED_ACCESS_APPROVAL_CONFIGURED = 2
                    }
                }

                /** Properties of a Customer. */
                interface ICustomer {

                    /** Customer name */
                    name?: (string|null);

                    /** Customer displayName */
                    displayName?: (string|null);

                    /** Customer customerOnboardingState */
                    customerOnboardingState?: (google.cloud.cloudcontrolspartner.v1beta.ICustomerOnboardingState|null);

                    /** Customer isOnboarded */
                    isOnboarded?: (boolean|null);

                    /** Customer organizationDomain */
                    organizationDomain?: (string|null);
                }

                /** Represents a Customer. */
                class Customer implements ICustomer {

                    /**
                     * Constructs a new Customer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.ICustomer);

                    /** Customer name. */
                    public name: string;

                    /** Customer displayName. */
                    public displayName: string;

                    /** Customer customerOnboardingState. */
                    public customerOnboardingState?: (google.cloud.cloudcontrolspartner.v1beta.ICustomerOnboardingState|null);

                    /** Customer isOnboarded. */
                    public isOnboarded: boolean;

                    /** Customer organizationDomain. */
                    public organizationDomain: string;

                    /**
                     * Creates a new Customer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Customer instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.ICustomer): google.cloud.cloudcontrolspartner.v1beta.Customer;

                    /**
                     * Encodes the specified Customer message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.Customer.verify|verify} messages.
                     * @param message Customer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.ICustomer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Customer message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.Customer.verify|verify} messages.
                     * @param message Customer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.ICustomer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Customer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Customer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.Customer;

                    /**
                     * Decodes a Customer message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Customer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.Customer;

                    /**
                     * Verifies a Customer message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Customer message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Customer
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.Customer;

                    /**
                     * Creates a plain object from a Customer message. Also converts values to other types if specified.
                     * @param message Customer
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.Customer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Customer to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Customer
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCustomersRequest. */
                interface IListCustomersRequest {

                    /** ListCustomersRequest parent */
                    parent?: (string|null);

                    /** ListCustomersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListCustomersRequest pageToken */
                    pageToken?: (string|null);

                    /** ListCustomersRequest filter */
                    filter?: (string|null);

                    /** ListCustomersRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListCustomersRequest. */
                class ListCustomersRequest implements IListCustomersRequest {

                    /**
                     * Constructs a new ListCustomersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IListCustomersRequest);

                    /** ListCustomersRequest parent. */
                    public parent: string;

                    /** ListCustomersRequest pageSize. */
                    public pageSize: number;

                    /** ListCustomersRequest pageToken. */
                    public pageToken: string;

                    /** ListCustomersRequest filter. */
                    public filter: string;

                    /** ListCustomersRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListCustomersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCustomersRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IListCustomersRequest): google.cloud.cloudcontrolspartner.v1beta.ListCustomersRequest;

                    /**
                     * Encodes the specified ListCustomersRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.ListCustomersRequest.verify|verify} messages.
                     * @param message ListCustomersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IListCustomersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCustomersRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.ListCustomersRequest.verify|verify} messages.
                     * @param message ListCustomersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IListCustomersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCustomersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCustomersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.ListCustomersRequest;

                    /**
                     * Decodes a ListCustomersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCustomersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.ListCustomersRequest;

                    /**
                     * Verifies a ListCustomersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCustomersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCustomersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.ListCustomersRequest;

                    /**
                     * Creates a plain object from a ListCustomersRequest message. Also converts values to other types if specified.
                     * @param message ListCustomersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.ListCustomersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCustomersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCustomersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCustomersResponse. */
                interface IListCustomersResponse {

                    /** ListCustomersResponse customers */
                    customers?: (google.cloud.cloudcontrolspartner.v1beta.ICustomer[]|null);

                    /** ListCustomersResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListCustomersResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListCustomersResponse. */
                class ListCustomersResponse implements IListCustomersResponse {

                    /**
                     * Constructs a new ListCustomersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IListCustomersResponse);

                    /** ListCustomersResponse customers. */
                    public customers: google.cloud.cloudcontrolspartner.v1beta.ICustomer[];

                    /** ListCustomersResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListCustomersResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListCustomersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCustomersResponse instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IListCustomersResponse): google.cloud.cloudcontrolspartner.v1beta.ListCustomersResponse;

                    /**
                     * Encodes the specified ListCustomersResponse message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.ListCustomersResponse.verify|verify} messages.
                     * @param message ListCustomersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IListCustomersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCustomersResponse message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.ListCustomersResponse.verify|verify} messages.
                     * @param message ListCustomersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IListCustomersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCustomersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCustomersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.ListCustomersResponse;

                    /**
                     * Decodes a ListCustomersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCustomersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.ListCustomersResponse;

                    /**
                     * Verifies a ListCustomersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCustomersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCustomersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.ListCustomersResponse;

                    /**
                     * Creates a plain object from a ListCustomersResponse message. Also converts values to other types if specified.
                     * @param message ListCustomersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.ListCustomersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCustomersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCustomersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateCustomerRequest. */
                interface ICreateCustomerRequest {

                    /** CreateCustomerRequest parent */
                    parent?: (string|null);

                    /** CreateCustomerRequest customer */
                    customer?: (google.cloud.cloudcontrolspartner.v1beta.ICustomer|null);

                    /** CreateCustomerRequest customerId */
                    customerId?: (string|null);
                }

                /** Represents a CreateCustomerRequest. */
                class CreateCustomerRequest implements ICreateCustomerRequest {

                    /**
                     * Constructs a new CreateCustomerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.ICreateCustomerRequest);

                    /** CreateCustomerRequest parent. */
                    public parent: string;

                    /** CreateCustomerRequest customer. */
                    public customer?: (google.cloud.cloudcontrolspartner.v1beta.ICustomer|null);

                    /** CreateCustomerRequest customerId. */
                    public customerId: string;

                    /**
                     * Creates a new CreateCustomerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateCustomerRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.ICreateCustomerRequest): google.cloud.cloudcontrolspartner.v1beta.CreateCustomerRequest;

                    /**
                     * Encodes the specified CreateCustomerRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.CreateCustomerRequest.verify|verify} messages.
                     * @param message CreateCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.ICreateCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateCustomerRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.CreateCustomerRequest.verify|verify} messages.
                     * @param message CreateCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.ICreateCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateCustomerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.CreateCustomerRequest;

                    /**
                     * Decodes a CreateCustomerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.CreateCustomerRequest;

                    /**
                     * Verifies a CreateCustomerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateCustomerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateCustomerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.CreateCustomerRequest;

                    /**
                     * Creates a plain object from a CreateCustomerRequest message. Also converts values to other types if specified.
                     * @param message CreateCustomerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.CreateCustomerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateCustomerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateCustomerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetCustomerRequest. */
                interface IGetCustomerRequest {

                    /** GetCustomerRequest name */
                    name?: (string|null);
                }

                /** Represents a GetCustomerRequest. */
                class GetCustomerRequest implements IGetCustomerRequest {

                    /**
                     * Constructs a new GetCustomerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IGetCustomerRequest);

                    /** GetCustomerRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetCustomerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCustomerRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IGetCustomerRequest): google.cloud.cloudcontrolspartner.v1beta.GetCustomerRequest;

                    /**
                     * Encodes the specified GetCustomerRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.GetCustomerRequest.verify|verify} messages.
                     * @param message GetCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IGetCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCustomerRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.GetCustomerRequest.verify|verify} messages.
                     * @param message GetCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IGetCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCustomerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.GetCustomerRequest;

                    /**
                     * Decodes a GetCustomerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.GetCustomerRequest;

                    /**
                     * Verifies a GetCustomerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCustomerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCustomerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.GetCustomerRequest;

                    /**
                     * Creates a plain object from a GetCustomerRequest message. Also converts values to other types if specified.
                     * @param message GetCustomerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.GetCustomerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCustomerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetCustomerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CustomerOnboardingState. */
                interface ICustomerOnboardingState {

                    /** CustomerOnboardingState onboardingSteps */
                    onboardingSteps?: (google.cloud.cloudcontrolspartner.v1beta.ICustomerOnboardingStep[]|null);
                }

                /** Represents a CustomerOnboardingState. */
                class CustomerOnboardingState implements ICustomerOnboardingState {

                    /**
                     * Constructs a new CustomerOnboardingState.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.ICustomerOnboardingState);

                    /** CustomerOnboardingState onboardingSteps. */
                    public onboardingSteps: google.cloud.cloudcontrolspartner.v1beta.ICustomerOnboardingStep[];

                    /**
                     * Creates a new CustomerOnboardingState instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CustomerOnboardingState instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.ICustomerOnboardingState): google.cloud.cloudcontrolspartner.v1beta.CustomerOnboardingState;

                    /**
                     * Encodes the specified CustomerOnboardingState message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.CustomerOnboardingState.verify|verify} messages.
                     * @param message CustomerOnboardingState message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.ICustomerOnboardingState, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CustomerOnboardingState message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.CustomerOnboardingState.verify|verify} messages.
                     * @param message CustomerOnboardingState message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.ICustomerOnboardingState, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CustomerOnboardingState message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CustomerOnboardingState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.CustomerOnboardingState;

                    /**
                     * Decodes a CustomerOnboardingState message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CustomerOnboardingState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.CustomerOnboardingState;

                    /**
                     * Verifies a CustomerOnboardingState message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CustomerOnboardingState message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CustomerOnboardingState
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.CustomerOnboardingState;

                    /**
                     * Creates a plain object from a CustomerOnboardingState message. Also converts values to other types if specified.
                     * @param message CustomerOnboardingState
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.CustomerOnboardingState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CustomerOnboardingState to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CustomerOnboardingState
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CustomerOnboardingStep. */
                interface ICustomerOnboardingStep {

                    /** CustomerOnboardingStep step */
                    step?: (google.cloud.cloudcontrolspartner.v1beta.CustomerOnboardingStep.Step|keyof typeof google.cloud.cloudcontrolspartner.v1beta.CustomerOnboardingStep.Step|null);

                    /** CustomerOnboardingStep startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** CustomerOnboardingStep completionTime */
                    completionTime?: (google.protobuf.ITimestamp|null);

                    /** CustomerOnboardingStep completionState */
                    completionState?: (google.cloud.cloudcontrolspartner.v1beta.CompletionState|keyof typeof google.cloud.cloudcontrolspartner.v1beta.CompletionState|null);
                }

                /** Represents a CustomerOnboardingStep. */
                class CustomerOnboardingStep implements ICustomerOnboardingStep {

                    /**
                     * Constructs a new CustomerOnboardingStep.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.ICustomerOnboardingStep);

                    /** CustomerOnboardingStep step. */
                    public step: (google.cloud.cloudcontrolspartner.v1beta.CustomerOnboardingStep.Step|keyof typeof google.cloud.cloudcontrolspartner.v1beta.CustomerOnboardingStep.Step);

                    /** CustomerOnboardingStep startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** CustomerOnboardingStep completionTime. */
                    public completionTime?: (google.protobuf.ITimestamp|null);

                    /** CustomerOnboardingStep completionState. */
                    public completionState: (google.cloud.cloudcontrolspartner.v1beta.CompletionState|keyof typeof google.cloud.cloudcontrolspartner.v1beta.CompletionState);

                    /**
                     * Creates a new CustomerOnboardingStep instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CustomerOnboardingStep instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.ICustomerOnboardingStep): google.cloud.cloudcontrolspartner.v1beta.CustomerOnboardingStep;

                    /**
                     * Encodes the specified CustomerOnboardingStep message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.CustomerOnboardingStep.verify|verify} messages.
                     * @param message CustomerOnboardingStep message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.ICustomerOnboardingStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CustomerOnboardingStep message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.CustomerOnboardingStep.verify|verify} messages.
                     * @param message CustomerOnboardingStep message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.ICustomerOnboardingStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CustomerOnboardingStep message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CustomerOnboardingStep
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.CustomerOnboardingStep;

                    /**
                     * Decodes a CustomerOnboardingStep message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CustomerOnboardingStep
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.CustomerOnboardingStep;

                    /**
                     * Verifies a CustomerOnboardingStep message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CustomerOnboardingStep message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CustomerOnboardingStep
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.CustomerOnboardingStep;

                    /**
                     * Creates a plain object from a CustomerOnboardingStep message. Also converts values to other types if specified.
                     * @param message CustomerOnboardingStep
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.CustomerOnboardingStep, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CustomerOnboardingStep to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CustomerOnboardingStep
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CustomerOnboardingStep {

                    /** Step enum. */
                    enum Step {
                        STEP_UNSPECIFIED = 0,
                        KAJ_ENROLLMENT = 1,
                        CUSTOMER_ENVIRONMENT = 2
                    }
                }

                /** Properties of an UpdateCustomerRequest. */
                interface IUpdateCustomerRequest {

                    /** UpdateCustomerRequest customer */
                    customer?: (google.cloud.cloudcontrolspartner.v1beta.ICustomer|null);

                    /** UpdateCustomerRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateCustomerRequest. */
                class UpdateCustomerRequest implements IUpdateCustomerRequest {

                    /**
                     * Constructs a new UpdateCustomerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IUpdateCustomerRequest);

                    /** UpdateCustomerRequest customer. */
                    public customer?: (google.cloud.cloudcontrolspartner.v1beta.ICustomer|null);

                    /** UpdateCustomerRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateCustomerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateCustomerRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IUpdateCustomerRequest): google.cloud.cloudcontrolspartner.v1beta.UpdateCustomerRequest;

                    /**
                     * Encodes the specified UpdateCustomerRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.UpdateCustomerRequest.verify|verify} messages.
                     * @param message UpdateCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IUpdateCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateCustomerRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.UpdateCustomerRequest.verify|verify} messages.
                     * @param message UpdateCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IUpdateCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateCustomerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.UpdateCustomerRequest;

                    /**
                     * Decodes an UpdateCustomerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.UpdateCustomerRequest;

                    /**
                     * Verifies an UpdateCustomerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateCustomerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateCustomerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.UpdateCustomerRequest;

                    /**
                     * Creates a plain object from an UpdateCustomerRequest message. Also converts values to other types if specified.
                     * @param message UpdateCustomerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.UpdateCustomerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateCustomerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateCustomerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteCustomerRequest. */
                interface IDeleteCustomerRequest {

                    /** DeleteCustomerRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteCustomerRequest. */
                class DeleteCustomerRequest implements IDeleteCustomerRequest {

                    /**
                     * Constructs a new DeleteCustomerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IDeleteCustomerRequest);

                    /** DeleteCustomerRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteCustomerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteCustomerRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IDeleteCustomerRequest): google.cloud.cloudcontrolspartner.v1beta.DeleteCustomerRequest;

                    /**
                     * Encodes the specified DeleteCustomerRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.DeleteCustomerRequest.verify|verify} messages.
                     * @param message DeleteCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IDeleteCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteCustomerRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.DeleteCustomerRequest.verify|verify} messages.
                     * @param message DeleteCustomerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IDeleteCustomerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteCustomerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.DeleteCustomerRequest;

                    /**
                     * Decodes a DeleteCustomerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteCustomerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.DeleteCustomerRequest;

                    /**
                     * Verifies a DeleteCustomerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteCustomerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteCustomerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.DeleteCustomerRequest;

                    /**
                     * Creates a plain object from a DeleteCustomerRequest message. Also converts values to other types if specified.
                     * @param message DeleteCustomerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.DeleteCustomerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteCustomerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteCustomerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EkmConnections. */
                interface IEkmConnections {

                    /** EkmConnections name */
                    name?: (string|null);

                    /** EkmConnections ekmConnections */
                    ekmConnections?: (google.cloud.cloudcontrolspartner.v1beta.IEkmConnection[]|null);
                }

                /** Represents an EkmConnections. */
                class EkmConnections implements IEkmConnections {

                    /**
                     * Constructs a new EkmConnections.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IEkmConnections);

                    /** EkmConnections name. */
                    public name: string;

                    /** EkmConnections ekmConnections. */
                    public ekmConnections: google.cloud.cloudcontrolspartner.v1beta.IEkmConnection[];

                    /**
                     * Creates a new EkmConnections instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EkmConnections instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IEkmConnections): google.cloud.cloudcontrolspartner.v1beta.EkmConnections;

                    /**
                     * Encodes the specified EkmConnections message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.EkmConnections.verify|verify} messages.
                     * @param message EkmConnections message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IEkmConnections, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EkmConnections message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.EkmConnections.verify|verify} messages.
                     * @param message EkmConnections message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IEkmConnections, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EkmConnections message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EkmConnections
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.EkmConnections;

                    /**
                     * Decodes an EkmConnections message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EkmConnections
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.EkmConnections;

                    /**
                     * Verifies an EkmConnections message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EkmConnections message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EkmConnections
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.EkmConnections;

                    /**
                     * Creates a plain object from an EkmConnections message. Also converts values to other types if specified.
                     * @param message EkmConnections
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.EkmConnections, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EkmConnections to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EkmConnections
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetEkmConnectionsRequest. */
                interface IGetEkmConnectionsRequest {

                    /** GetEkmConnectionsRequest name */
                    name?: (string|null);
                }

                /** Represents a GetEkmConnectionsRequest. */
                class GetEkmConnectionsRequest implements IGetEkmConnectionsRequest {

                    /**
                     * Constructs a new GetEkmConnectionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IGetEkmConnectionsRequest);

                    /** GetEkmConnectionsRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetEkmConnectionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetEkmConnectionsRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IGetEkmConnectionsRequest): google.cloud.cloudcontrolspartner.v1beta.GetEkmConnectionsRequest;

                    /**
                     * Encodes the specified GetEkmConnectionsRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.GetEkmConnectionsRequest.verify|verify} messages.
                     * @param message GetEkmConnectionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IGetEkmConnectionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetEkmConnectionsRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.GetEkmConnectionsRequest.verify|verify} messages.
                     * @param message GetEkmConnectionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IGetEkmConnectionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetEkmConnectionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetEkmConnectionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.GetEkmConnectionsRequest;

                    /**
                     * Decodes a GetEkmConnectionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetEkmConnectionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.GetEkmConnectionsRequest;

                    /**
                     * Verifies a GetEkmConnectionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetEkmConnectionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetEkmConnectionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.GetEkmConnectionsRequest;

                    /**
                     * Creates a plain object from a GetEkmConnectionsRequest message. Also converts values to other types if specified.
                     * @param message GetEkmConnectionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.GetEkmConnectionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetEkmConnectionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetEkmConnectionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EkmConnection. */
                interface IEkmConnection {

                    /** EkmConnection connectionName */
                    connectionName?: (string|null);

                    /** EkmConnection connectionState */
                    connectionState?: (google.cloud.cloudcontrolspartner.v1beta.EkmConnection.ConnectionState|keyof typeof google.cloud.cloudcontrolspartner.v1beta.EkmConnection.ConnectionState|null);

                    /** EkmConnection connectionError */
                    connectionError?: (google.cloud.cloudcontrolspartner.v1beta.EkmConnection.IConnectionError|null);
                }

                /** Represents an EkmConnection. */
                class EkmConnection implements IEkmConnection {

                    /**
                     * Constructs a new EkmConnection.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IEkmConnection);

                    /** EkmConnection connectionName. */
                    public connectionName: string;

                    /** EkmConnection connectionState. */
                    public connectionState: (google.cloud.cloudcontrolspartner.v1beta.EkmConnection.ConnectionState|keyof typeof google.cloud.cloudcontrolspartner.v1beta.EkmConnection.ConnectionState);

                    /** EkmConnection connectionError. */
                    public connectionError?: (google.cloud.cloudcontrolspartner.v1beta.EkmConnection.IConnectionError|null);

                    /**
                     * Creates a new EkmConnection instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EkmConnection instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IEkmConnection): google.cloud.cloudcontrolspartner.v1beta.EkmConnection;

                    /**
                     * Encodes the specified EkmConnection message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.EkmConnection.verify|verify} messages.
                     * @param message EkmConnection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IEkmConnection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EkmConnection message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.EkmConnection.verify|verify} messages.
                     * @param message EkmConnection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IEkmConnection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EkmConnection message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EkmConnection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.EkmConnection;

                    /**
                     * Decodes an EkmConnection message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EkmConnection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.EkmConnection;

                    /**
                     * Verifies an EkmConnection message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EkmConnection message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EkmConnection
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.EkmConnection;

                    /**
                     * Creates a plain object from an EkmConnection message. Also converts values to other types if specified.
                     * @param message EkmConnection
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.EkmConnection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EkmConnection to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EkmConnection
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace EkmConnection {

                    /** Properties of a ConnectionError. */
                    interface IConnectionError {

                        /** ConnectionError errorDomain */
                        errorDomain?: (string|null);

                        /** ConnectionError errorMessage */
                        errorMessage?: (string|null);
                    }

                    /** Represents a ConnectionError. */
                    class ConnectionError implements IConnectionError {

                        /**
                         * Constructs a new ConnectionError.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.EkmConnection.IConnectionError);

                        /** ConnectionError errorDomain. */
                        public errorDomain: string;

                        /** ConnectionError errorMessage. */
                        public errorMessage: string;

                        /**
                         * Creates a new ConnectionError instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ConnectionError instance
                         */
                        public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.EkmConnection.IConnectionError): google.cloud.cloudcontrolspartner.v1beta.EkmConnection.ConnectionError;

                        /**
                         * Encodes the specified ConnectionError message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.EkmConnection.ConnectionError.verify|verify} messages.
                         * @param message ConnectionError message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.cloudcontrolspartner.v1beta.EkmConnection.IConnectionError, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ConnectionError message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.EkmConnection.ConnectionError.verify|verify} messages.
                         * @param message ConnectionError message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.EkmConnection.IConnectionError, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ConnectionError message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ConnectionError
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.EkmConnection.ConnectionError;

                        /**
                         * Decodes a ConnectionError message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ConnectionError
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.EkmConnection.ConnectionError;

                        /**
                         * Verifies a ConnectionError message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ConnectionError message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ConnectionError
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.EkmConnection.ConnectionError;

                        /**
                         * Creates a plain object from a ConnectionError message. Also converts values to other types if specified.
                         * @param message ConnectionError
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.EkmConnection.ConnectionError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ConnectionError to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ConnectionError
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** ConnectionState enum. */
                    enum ConnectionState {
                        CONNECTION_STATE_UNSPECIFIED = 0,
                        AVAILABLE = 1,
                        NOT_AVAILABLE = 2,
                        ERROR = 3,
                        PERMISSION_DENIED = 4
                    }
                }

                /** Properties of a PartnerPermissions. */
                interface IPartnerPermissions {

                    /** PartnerPermissions name */
                    name?: (string|null);

                    /** PartnerPermissions partnerPermissions */
                    partnerPermissions?: (google.cloud.cloudcontrolspartner.v1beta.PartnerPermissions.Permission[]|null);
                }

                /** Represents a PartnerPermissions. */
                class PartnerPermissions implements IPartnerPermissions {

                    /**
                     * Constructs a new PartnerPermissions.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IPartnerPermissions);

                    /** PartnerPermissions name. */
                    public name: string;

                    /** PartnerPermissions partnerPermissions. */
                    public partnerPermissions: google.cloud.cloudcontrolspartner.v1beta.PartnerPermissions.Permission[];

                    /**
                     * Creates a new PartnerPermissions instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PartnerPermissions instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IPartnerPermissions): google.cloud.cloudcontrolspartner.v1beta.PartnerPermissions;

                    /**
                     * Encodes the specified PartnerPermissions message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.PartnerPermissions.verify|verify} messages.
                     * @param message PartnerPermissions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IPartnerPermissions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PartnerPermissions message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.PartnerPermissions.verify|verify} messages.
                     * @param message PartnerPermissions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IPartnerPermissions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PartnerPermissions message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PartnerPermissions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.PartnerPermissions;

                    /**
                     * Decodes a PartnerPermissions message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PartnerPermissions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.PartnerPermissions;

                    /**
                     * Verifies a PartnerPermissions message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PartnerPermissions message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PartnerPermissions
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.PartnerPermissions;

                    /**
                     * Creates a plain object from a PartnerPermissions message. Also converts values to other types if specified.
                     * @param message PartnerPermissions
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.PartnerPermissions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PartnerPermissions to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PartnerPermissions
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PartnerPermissions {

                    /** Permission enum. */
                    enum Permission {
                        PERMISSION_UNSPECIFIED = 0,
                        ACCESS_TRANSPARENCY_AND_EMERGENCY_ACCESS_LOGS = 1,
                        ASSURED_WORKLOADS_MONITORING = 2,
                        ACCESS_APPROVAL_REQUESTS = 3,
                        ASSURED_WORKLOADS_EKM_CONNECTION_STATUS = 4,
                        ACCESS_TRANSPARENCY_LOGS_SUPPORT_CASE_VIEWER = 5
                    }
                }

                /** Properties of a GetPartnerPermissionsRequest. */
                interface IGetPartnerPermissionsRequest {

                    /** GetPartnerPermissionsRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPartnerPermissionsRequest. */
                class GetPartnerPermissionsRequest implements IGetPartnerPermissionsRequest {

                    /**
                     * Constructs a new GetPartnerPermissionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IGetPartnerPermissionsRequest);

                    /** GetPartnerPermissionsRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPartnerPermissionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPartnerPermissionsRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IGetPartnerPermissionsRequest): google.cloud.cloudcontrolspartner.v1beta.GetPartnerPermissionsRequest;

                    /**
                     * Encodes the specified GetPartnerPermissionsRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.GetPartnerPermissionsRequest.verify|verify} messages.
                     * @param message GetPartnerPermissionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IGetPartnerPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPartnerPermissionsRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.GetPartnerPermissionsRequest.verify|verify} messages.
                     * @param message GetPartnerPermissionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IGetPartnerPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPartnerPermissionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPartnerPermissionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.GetPartnerPermissionsRequest;

                    /**
                     * Decodes a GetPartnerPermissionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPartnerPermissionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.GetPartnerPermissionsRequest;

                    /**
                     * Verifies a GetPartnerPermissionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPartnerPermissionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPartnerPermissionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.GetPartnerPermissionsRequest;

                    /**
                     * Creates a plain object from a GetPartnerPermissionsRequest message. Also converts values to other types if specified.
                     * @param message GetPartnerPermissionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.GetPartnerPermissionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPartnerPermissionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPartnerPermissionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Partner. */
                interface IPartner {

                    /** Partner name */
                    name?: (string|null);

                    /** Partner skus */
                    skus?: (google.cloud.cloudcontrolspartner.v1beta.ISku[]|null);

                    /** Partner ekmSolutions */
                    ekmSolutions?: (google.cloud.cloudcontrolspartner.v1beta.IEkmMetadata[]|null);

                    /** Partner operatedCloudRegions */
                    operatedCloudRegions?: (string[]|null);

                    /** Partner partnerProjectId */
                    partnerProjectId?: (string|null);

                    /** Partner createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Partner updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Partner. */
                class Partner implements IPartner {

                    /**
                     * Constructs a new Partner.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IPartner);

                    /** Partner name. */
                    public name: string;

                    /** Partner skus. */
                    public skus: google.cloud.cloudcontrolspartner.v1beta.ISku[];

                    /** Partner ekmSolutions. */
                    public ekmSolutions: google.cloud.cloudcontrolspartner.v1beta.IEkmMetadata[];

                    /** Partner operatedCloudRegions. */
                    public operatedCloudRegions: string[];

                    /** Partner partnerProjectId. */
                    public partnerProjectId: string;

                    /** Partner createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Partner updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new Partner instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Partner instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IPartner): google.cloud.cloudcontrolspartner.v1beta.Partner;

                    /**
                     * Encodes the specified Partner message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.Partner.verify|verify} messages.
                     * @param message Partner message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IPartner, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Partner message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.Partner.verify|verify} messages.
                     * @param message Partner message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IPartner, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Partner message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Partner
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.Partner;

                    /**
                     * Decodes a Partner message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Partner
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.Partner;

                    /**
                     * Verifies a Partner message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Partner message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Partner
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.Partner;

                    /**
                     * Creates a plain object from a Partner message. Also converts values to other types if specified.
                     * @param message Partner
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.Partner, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Partner to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Partner
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPartnerRequest. */
                interface IGetPartnerRequest {

                    /** GetPartnerRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPartnerRequest. */
                class GetPartnerRequest implements IGetPartnerRequest {

                    /**
                     * Constructs a new GetPartnerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IGetPartnerRequest);

                    /** GetPartnerRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPartnerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPartnerRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IGetPartnerRequest): google.cloud.cloudcontrolspartner.v1beta.GetPartnerRequest;

                    /**
                     * Encodes the specified GetPartnerRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.GetPartnerRequest.verify|verify} messages.
                     * @param message GetPartnerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IGetPartnerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPartnerRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.GetPartnerRequest.verify|verify} messages.
                     * @param message GetPartnerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IGetPartnerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPartnerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPartnerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.GetPartnerRequest;

                    /**
                     * Decodes a GetPartnerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPartnerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.GetPartnerRequest;

                    /**
                     * Verifies a GetPartnerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPartnerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPartnerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.GetPartnerRequest;

                    /**
                     * Creates a plain object from a GetPartnerRequest message. Also converts values to other types if specified.
                     * @param message GetPartnerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.GetPartnerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPartnerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPartnerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Sku. */
                interface ISku {

                    /** Sku id */
                    id?: (string|null);

                    /** Sku displayName */
                    displayName?: (string|null);
                }

                /** Represents a Sku. */
                class Sku implements ISku {

                    /**
                     * Constructs a new Sku.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.ISku);

                    /** Sku id. */
                    public id: string;

                    /** Sku displayName. */
                    public displayName: string;

                    /**
                     * Creates a new Sku instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Sku instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.ISku): google.cloud.cloudcontrolspartner.v1beta.Sku;

                    /**
                     * Encodes the specified Sku message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.Sku.verify|verify} messages.
                     * @param message Sku message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.ISku, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Sku message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.Sku.verify|verify} messages.
                     * @param message Sku message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.ISku, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Sku message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Sku
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.Sku;

                    /**
                     * Decodes a Sku message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Sku
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.Sku;

                    /**
                     * Verifies a Sku message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Sku message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Sku
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.Sku;

                    /**
                     * Creates a plain object from a Sku message. Also converts values to other types if specified.
                     * @param message Sku
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.Sku, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Sku to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Sku
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EkmMetadata. */
                interface IEkmMetadata {

                    /** EkmMetadata ekmSolution */
                    ekmSolution?: (google.cloud.cloudcontrolspartner.v1beta.EkmMetadata.EkmSolution|keyof typeof google.cloud.cloudcontrolspartner.v1beta.EkmMetadata.EkmSolution|null);

                    /** EkmMetadata ekmEndpointUri */
                    ekmEndpointUri?: (string|null);
                }

                /** Represents an EkmMetadata. */
                class EkmMetadata implements IEkmMetadata {

                    /**
                     * Constructs a new EkmMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IEkmMetadata);

                    /** EkmMetadata ekmSolution. */
                    public ekmSolution: (google.cloud.cloudcontrolspartner.v1beta.EkmMetadata.EkmSolution|keyof typeof google.cloud.cloudcontrolspartner.v1beta.EkmMetadata.EkmSolution);

                    /** EkmMetadata ekmEndpointUri. */
                    public ekmEndpointUri: string;

                    /**
                     * Creates a new EkmMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EkmMetadata instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IEkmMetadata): google.cloud.cloudcontrolspartner.v1beta.EkmMetadata;

                    /**
                     * Encodes the specified EkmMetadata message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.EkmMetadata.verify|verify} messages.
                     * @param message EkmMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IEkmMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EkmMetadata message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.EkmMetadata.verify|verify} messages.
                     * @param message EkmMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IEkmMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EkmMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EkmMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.EkmMetadata;

                    /**
                     * Decodes an EkmMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EkmMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.EkmMetadata;

                    /**
                     * Verifies an EkmMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EkmMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EkmMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.EkmMetadata;

                    /**
                     * Creates a plain object from an EkmMetadata message. Also converts values to other types if specified.
                     * @param message EkmMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.EkmMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EkmMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EkmMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace EkmMetadata {

                    /** EkmSolution enum. */
                    enum EkmSolution {
                        EKM_SOLUTION_UNSPECIFIED = 0,
                        FORTANIX = 1,
                        FUTUREX = 2,
                        THALES = 3,
                        VIRTRU = 4
                    }
                }

                /** Represents a CloudControlsPartnerMonitoring */
                class CloudControlsPartnerMonitoring extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CloudControlsPartnerMonitoring service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CloudControlsPartnerMonitoring service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CloudControlsPartnerMonitoring;

                    /**
                     * Calls ListViolations.
                     * @param request ListViolationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListViolationsResponse
                     */
                    public listViolations(request: google.cloud.cloudcontrolspartner.v1beta.IListViolationsRequest, callback: google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerMonitoring.ListViolationsCallback): void;

                    /**
                     * Calls ListViolations.
                     * @param request ListViolationsRequest message or plain object
                     * @returns Promise
                     */
                    public listViolations(request: google.cloud.cloudcontrolspartner.v1beta.IListViolationsRequest): Promise<google.cloud.cloudcontrolspartner.v1beta.ListViolationsResponse>;

                    /**
                     * Calls GetViolation.
                     * @param request GetViolationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Violation
                     */
                    public getViolation(request: google.cloud.cloudcontrolspartner.v1beta.IGetViolationRequest, callback: google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerMonitoring.GetViolationCallback): void;

                    /**
                     * Calls GetViolation.
                     * @param request GetViolationRequest message or plain object
                     * @returns Promise
                     */
                    public getViolation(request: google.cloud.cloudcontrolspartner.v1beta.IGetViolationRequest): Promise<google.cloud.cloudcontrolspartner.v1beta.Violation>;
                }

                namespace CloudControlsPartnerMonitoring {

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerMonitoring|listViolations}.
                     * @param error Error, if any
                     * @param [response] ListViolationsResponse
                     */
                    type ListViolationsCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1beta.ListViolationsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.cloudcontrolspartner.v1beta.CloudControlsPartnerMonitoring|getViolation}.
                     * @param error Error, if any
                     * @param [response] Violation
                     */
                    type GetViolationCallback = (error: (Error|null), response?: google.cloud.cloudcontrolspartner.v1beta.Violation) => void;
                }

                /** Properties of a Violation. */
                interface IViolation {

                    /** Violation name */
                    name?: (string|null);

                    /** Violation description */
                    description?: (string|null);

                    /** Violation beginTime */
                    beginTime?: (google.protobuf.ITimestamp|null);

                    /** Violation updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Violation resolveTime */
                    resolveTime?: (google.protobuf.ITimestamp|null);

                    /** Violation category */
                    category?: (string|null);

                    /** Violation state */
                    state?: (google.cloud.cloudcontrolspartner.v1beta.Violation.State|keyof typeof google.cloud.cloudcontrolspartner.v1beta.Violation.State|null);

                    /** Violation nonCompliantOrgPolicy */
                    nonCompliantOrgPolicy?: (string|null);

                    /** Violation folderId */
                    folderId?: (number|Long|string|null);

                    /** Violation remediation */
                    remediation?: (google.cloud.cloudcontrolspartner.v1beta.Violation.IRemediation|null);
                }

                /** Represents a Violation. */
                class Violation implements IViolation {

                    /**
                     * Constructs a new Violation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IViolation);

                    /** Violation name. */
                    public name: string;

                    /** Violation description. */
                    public description: string;

                    /** Violation beginTime. */
                    public beginTime?: (google.protobuf.ITimestamp|null);

                    /** Violation updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Violation resolveTime. */
                    public resolveTime?: (google.protobuf.ITimestamp|null);

                    /** Violation category. */
                    public category: string;

                    /** Violation state. */
                    public state: (google.cloud.cloudcontrolspartner.v1beta.Violation.State|keyof typeof google.cloud.cloudcontrolspartner.v1beta.Violation.State);

                    /** Violation nonCompliantOrgPolicy. */
                    public nonCompliantOrgPolicy: string;

                    /** Violation folderId. */
                    public folderId: (number|Long|string);

                    /** Violation remediation. */
                    public remediation?: (google.cloud.cloudcontrolspartner.v1beta.Violation.IRemediation|null);

                    /**
                     * Creates a new Violation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Violation instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IViolation): google.cloud.cloudcontrolspartner.v1beta.Violation;

                    /**
                     * Encodes the specified Violation message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.Violation.verify|verify} messages.
                     * @param message Violation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IViolation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Violation message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.Violation.verify|verify} messages.
                     * @param message Violation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IViolation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Violation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Violation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.Violation;

                    /**
                     * Decodes a Violation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Violation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.Violation;

                    /**
                     * Verifies a Violation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Violation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Violation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.Violation;

                    /**
                     * Creates a plain object from a Violation message. Also converts values to other types if specified.
                     * @param message Violation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.Violation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Violation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Violation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Violation {

                    /** Properties of a Remediation. */
                    interface IRemediation {

                        /** Remediation instructions */
                        instructions?: (google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.IInstructions|null);

                        /** Remediation compliantValues */
                        compliantValues?: (string[]|null);

                        /** Remediation remediationType */
                        remediationType?: (google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.RemediationType|keyof typeof google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.RemediationType|null);
                    }

                    /** Represents a Remediation. */
                    class Remediation implements IRemediation {

                        /**
                         * Constructs a new Remediation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.Violation.IRemediation);

                        /** Remediation instructions. */
                        public instructions?: (google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.IInstructions|null);

                        /** Remediation compliantValues. */
                        public compliantValues: string[];

                        /** Remediation remediationType. */
                        public remediationType: (google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.RemediationType|keyof typeof google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.RemediationType);

                        /**
                         * Creates a new Remediation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Remediation instance
                         */
                        public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.Violation.IRemediation): google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation;

                        /**
                         * Encodes the specified Remediation message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.verify|verify} messages.
                         * @param message Remediation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.cloudcontrolspartner.v1beta.Violation.IRemediation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Remediation message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.verify|verify} messages.
                         * @param message Remediation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.Violation.IRemediation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Remediation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Remediation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation;

                        /**
                         * Decodes a Remediation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Remediation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation;

                        /**
                         * Verifies a Remediation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Remediation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Remediation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation;

                        /**
                         * Creates a plain object from a Remediation message. Also converts values to other types if specified.
                         * @param message Remediation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Remediation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Remediation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Remediation {

                        /** Properties of an Instructions. */
                        interface IInstructions {

                            /** Instructions gcloudInstructions */
                            gcloudInstructions?: (google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.IGcloud|null);

                            /** Instructions consoleInstructions */
                            consoleInstructions?: (google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.IConsole|null);
                        }

                        /** Represents an Instructions. */
                        class Instructions implements IInstructions {

                            /**
                             * Constructs a new Instructions.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.IInstructions);

                            /** Instructions gcloudInstructions. */
                            public gcloudInstructions?: (google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.IGcloud|null);

                            /** Instructions consoleInstructions. */
                            public consoleInstructions?: (google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.IConsole|null);

                            /**
                             * Creates a new Instructions instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Instructions instance
                             */
                            public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.IInstructions): google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions;

                            /**
                             * Encodes the specified Instructions message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.verify|verify} messages.
                             * @param message Instructions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.IInstructions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Instructions message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.verify|verify} messages.
                             * @param message Instructions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.IInstructions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Instructions message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Instructions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions;

                            /**
                             * Decodes an Instructions message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Instructions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions;

                            /**
                             * Verifies an Instructions message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Instructions message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Instructions
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions;

                            /**
                             * Creates a plain object from an Instructions message. Also converts values to other types if specified.
                             * @param message Instructions
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Instructions to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Instructions
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace Instructions {

                            /** Properties of a Gcloud. */
                            interface IGcloud {

                                /** Gcloud gcloudCommands */
                                gcloudCommands?: (string[]|null);

                                /** Gcloud steps */
                                steps?: (string[]|null);

                                /** Gcloud additionalLinks */
                                additionalLinks?: (string[]|null);
                            }

                            /** Represents a Gcloud. */
                            class Gcloud implements IGcloud {

                                /**
                                 * Constructs a new Gcloud.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.IGcloud);

                                /** Gcloud gcloudCommands. */
                                public gcloudCommands: string[];

                                /** Gcloud steps. */
                                public steps: string[];

                                /** Gcloud additionalLinks. */
                                public additionalLinks: string[];

                                /**
                                 * Creates a new Gcloud instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Gcloud instance
                                 */
                                public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.IGcloud): google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.Gcloud;

                                /**
                                 * Encodes the specified Gcloud message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.Gcloud.verify|verify} messages.
                                 * @param message Gcloud message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.IGcloud, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Gcloud message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.Gcloud.verify|verify} messages.
                                 * @param message Gcloud message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.IGcloud, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a Gcloud message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Gcloud
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.Gcloud;

                                /**
                                 * Decodes a Gcloud message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Gcloud
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.Gcloud;

                                /**
                                 * Verifies a Gcloud message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a Gcloud message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Gcloud
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.Gcloud;

                                /**
                                 * Creates a plain object from a Gcloud message. Also converts values to other types if specified.
                                 * @param message Gcloud
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.Gcloud, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Gcloud to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for Gcloud
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of a Console. */
                            interface IConsole {

                                /** Console consoleUris */
                                consoleUris?: (string[]|null);

                                /** Console steps */
                                steps?: (string[]|null);

                                /** Console additionalLinks */
                                additionalLinks?: (string[]|null);
                            }

                            /** Represents a Console. */
                            class Console implements IConsole {

                                /**
                                 * Constructs a new Console.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.IConsole);

                                /** Console consoleUris. */
                                public consoleUris: string[];

                                /** Console steps. */
                                public steps: string[];

                                /** Console additionalLinks. */
                                public additionalLinks: string[];

                                /**
                                 * Creates a new Console instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Console instance
                                 */
                                public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.IConsole): google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.Console;

                                /**
                                 * Encodes the specified Console message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.Console.verify|verify} messages.
                                 * @param message Console message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.IConsole, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Console message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.Console.verify|verify} messages.
                                 * @param message Console message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.IConsole, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a Console message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Console
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.Console;

                                /**
                                 * Decodes a Console message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Console
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.Console;

                                /**
                                 * Verifies a Console message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a Console message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Console
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.Console;

                                /**
                                 * Creates a plain object from a Console message. Also converts values to other types if specified.
                                 * @param message Console
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.Violation.Remediation.Instructions.Console, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Console to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for Console
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }

                        /** RemediationType enum. */
                        enum RemediationType {
                            REMEDIATION_TYPE_UNSPECIFIED = 0,
                            REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION = 1,
                            REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION = 2,
                            REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION = 3,
                            REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION = 4,
                            REMEDIATION_RESOURCE_VIOLATION = 5
                        }
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RESOLVED = 1,
                        UNRESOLVED = 2,
                        EXCEPTION = 3
                    }
                }

                /** Properties of a ListViolationsRequest. */
                interface IListViolationsRequest {

                    /** ListViolationsRequest parent */
                    parent?: (string|null);

                    /** ListViolationsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListViolationsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListViolationsRequest filter */
                    filter?: (string|null);

                    /** ListViolationsRequest orderBy */
                    orderBy?: (string|null);

                    /** ListViolationsRequest interval */
                    interval?: (google.type.IInterval|null);
                }

                /** Represents a ListViolationsRequest. */
                class ListViolationsRequest implements IListViolationsRequest {

                    /**
                     * Constructs a new ListViolationsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IListViolationsRequest);

                    /** ListViolationsRequest parent. */
                    public parent: string;

                    /** ListViolationsRequest pageSize. */
                    public pageSize: number;

                    /** ListViolationsRequest pageToken. */
                    public pageToken: string;

                    /** ListViolationsRequest filter. */
                    public filter: string;

                    /** ListViolationsRequest orderBy. */
                    public orderBy: string;

                    /** ListViolationsRequest interval. */
                    public interval?: (google.type.IInterval|null);

                    /**
                     * Creates a new ListViolationsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListViolationsRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IListViolationsRequest): google.cloud.cloudcontrolspartner.v1beta.ListViolationsRequest;

                    /**
                     * Encodes the specified ListViolationsRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.ListViolationsRequest.verify|verify} messages.
                     * @param message ListViolationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IListViolationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListViolationsRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.ListViolationsRequest.verify|verify} messages.
                     * @param message ListViolationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IListViolationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListViolationsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListViolationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.ListViolationsRequest;

                    /**
                     * Decodes a ListViolationsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListViolationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.ListViolationsRequest;

                    /**
                     * Verifies a ListViolationsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListViolationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListViolationsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.ListViolationsRequest;

                    /**
                     * Creates a plain object from a ListViolationsRequest message. Also converts values to other types if specified.
                     * @param message ListViolationsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.ListViolationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListViolationsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListViolationsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListViolationsResponse. */
                interface IListViolationsResponse {

                    /** ListViolationsResponse violations */
                    violations?: (google.cloud.cloudcontrolspartner.v1beta.IViolation[]|null);

                    /** ListViolationsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListViolationsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListViolationsResponse. */
                class ListViolationsResponse implements IListViolationsResponse {

                    /**
                     * Constructs a new ListViolationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IListViolationsResponse);

                    /** ListViolationsResponse violations. */
                    public violations: google.cloud.cloudcontrolspartner.v1beta.IViolation[];

                    /** ListViolationsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListViolationsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListViolationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListViolationsResponse instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IListViolationsResponse): google.cloud.cloudcontrolspartner.v1beta.ListViolationsResponse;

                    /**
                     * Encodes the specified ListViolationsResponse message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.ListViolationsResponse.verify|verify} messages.
                     * @param message ListViolationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IListViolationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListViolationsResponse message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.ListViolationsResponse.verify|verify} messages.
                     * @param message ListViolationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IListViolationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListViolationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListViolationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.ListViolationsResponse;

                    /**
                     * Decodes a ListViolationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListViolationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.ListViolationsResponse;

                    /**
                     * Verifies a ListViolationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListViolationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListViolationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.ListViolationsResponse;

                    /**
                     * Creates a plain object from a ListViolationsResponse message. Also converts values to other types if specified.
                     * @param message ListViolationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.ListViolationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListViolationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListViolationsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetViolationRequest. */
                interface IGetViolationRequest {

                    /** GetViolationRequest name */
                    name?: (string|null);
                }

                /** Represents a GetViolationRequest. */
                class GetViolationRequest implements IGetViolationRequest {

                    /**
                     * Constructs a new GetViolationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.cloudcontrolspartner.v1beta.IGetViolationRequest);

                    /** GetViolationRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetViolationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetViolationRequest instance
                     */
                    public static create(properties?: google.cloud.cloudcontrolspartner.v1beta.IGetViolationRequest): google.cloud.cloudcontrolspartner.v1beta.GetViolationRequest;

                    /**
                     * Encodes the specified GetViolationRequest message. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.GetViolationRequest.verify|verify} messages.
                     * @param message GetViolationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.cloudcontrolspartner.v1beta.IGetViolationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetViolationRequest message, length delimited. Does not implicitly {@link google.cloud.cloudcontrolspartner.v1beta.GetViolationRequest.verify|verify} messages.
                     * @param message GetViolationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.cloudcontrolspartner.v1beta.IGetViolationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetViolationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetViolationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.cloudcontrolspartner.v1beta.GetViolationRequest;

                    /**
                     * Decodes a GetViolationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetViolationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.cloudcontrolspartner.v1beta.GetViolationRequest;

                    /**
                     * Verifies a GetViolationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetViolationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetViolationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.cloudcontrolspartner.v1beta.GetViolationRequest;

                    /**
                     * Creates a plain object from a GetViolationRequest message. Also converts values to other types if specified.
                     * @param message GetViolationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.cloudcontrolspartner.v1beta.GetViolationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetViolationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetViolationRequest
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
