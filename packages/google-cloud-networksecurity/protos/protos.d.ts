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

        /** Namespace networksecurity. */
        namespace networksecurity {

            /** Namespace v1. */
            namespace v1 {

                /** Represents an AddressGroupService */
                class AddressGroupService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new AddressGroupService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new AddressGroupService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AddressGroupService;

                    /**
                     * Calls ListAddressGroups.
                     * @param request ListAddressGroupsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAddressGroupsResponse
                     */
                    public listAddressGroups(request: google.cloud.networksecurity.v1.IListAddressGroupsRequest, callback: google.cloud.networksecurity.v1.AddressGroupService.ListAddressGroupsCallback): void;

                    /**
                     * Calls ListAddressGroups.
                     * @param request ListAddressGroupsRequest message or plain object
                     * @returns Promise
                     */
                    public listAddressGroups(request: google.cloud.networksecurity.v1.IListAddressGroupsRequest): Promise<google.cloud.networksecurity.v1.ListAddressGroupsResponse>;

                    /**
                     * Calls GetAddressGroup.
                     * @param request GetAddressGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AddressGroup
                     */
                    public getAddressGroup(request: google.cloud.networksecurity.v1.IGetAddressGroupRequest, callback: google.cloud.networksecurity.v1.AddressGroupService.GetAddressGroupCallback): void;

                    /**
                     * Calls GetAddressGroup.
                     * @param request GetAddressGroupRequest message or plain object
                     * @returns Promise
                     */
                    public getAddressGroup(request: google.cloud.networksecurity.v1.IGetAddressGroupRequest): Promise<google.cloud.networksecurity.v1.AddressGroup>;

                    /**
                     * Calls CreateAddressGroup.
                     * @param request CreateAddressGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createAddressGroup(request: google.cloud.networksecurity.v1.ICreateAddressGroupRequest, callback: google.cloud.networksecurity.v1.AddressGroupService.CreateAddressGroupCallback): void;

                    /**
                     * Calls CreateAddressGroup.
                     * @param request CreateAddressGroupRequest message or plain object
                     * @returns Promise
                     */
                    public createAddressGroup(request: google.cloud.networksecurity.v1.ICreateAddressGroupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateAddressGroup.
                     * @param request UpdateAddressGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateAddressGroup(request: google.cloud.networksecurity.v1.IUpdateAddressGroupRequest, callback: google.cloud.networksecurity.v1.AddressGroupService.UpdateAddressGroupCallback): void;

                    /**
                     * Calls UpdateAddressGroup.
                     * @param request UpdateAddressGroupRequest message or plain object
                     * @returns Promise
                     */
                    public updateAddressGroup(request: google.cloud.networksecurity.v1.IUpdateAddressGroupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls AddAddressGroupItems.
                     * @param request AddAddressGroupItemsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public addAddressGroupItems(request: google.cloud.networksecurity.v1.IAddAddressGroupItemsRequest, callback: google.cloud.networksecurity.v1.AddressGroupService.AddAddressGroupItemsCallback): void;

                    /**
                     * Calls AddAddressGroupItems.
                     * @param request AddAddressGroupItemsRequest message or plain object
                     * @returns Promise
                     */
                    public addAddressGroupItems(request: google.cloud.networksecurity.v1.IAddAddressGroupItemsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RemoveAddressGroupItems.
                     * @param request RemoveAddressGroupItemsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public removeAddressGroupItems(request: google.cloud.networksecurity.v1.IRemoveAddressGroupItemsRequest, callback: google.cloud.networksecurity.v1.AddressGroupService.RemoveAddressGroupItemsCallback): void;

                    /**
                     * Calls RemoveAddressGroupItems.
                     * @param request RemoveAddressGroupItemsRequest message or plain object
                     * @returns Promise
                     */
                    public removeAddressGroupItems(request: google.cloud.networksecurity.v1.IRemoveAddressGroupItemsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CloneAddressGroupItems.
                     * @param request CloneAddressGroupItemsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public cloneAddressGroupItems(request: google.cloud.networksecurity.v1.ICloneAddressGroupItemsRequest, callback: google.cloud.networksecurity.v1.AddressGroupService.CloneAddressGroupItemsCallback): void;

                    /**
                     * Calls CloneAddressGroupItems.
                     * @param request CloneAddressGroupItemsRequest message or plain object
                     * @returns Promise
                     */
                    public cloneAddressGroupItems(request: google.cloud.networksecurity.v1.ICloneAddressGroupItemsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteAddressGroup.
                     * @param request DeleteAddressGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteAddressGroup(request: google.cloud.networksecurity.v1.IDeleteAddressGroupRequest, callback: google.cloud.networksecurity.v1.AddressGroupService.DeleteAddressGroupCallback): void;

                    /**
                     * Calls DeleteAddressGroup.
                     * @param request DeleteAddressGroupRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAddressGroup(request: google.cloud.networksecurity.v1.IDeleteAddressGroupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListAddressGroupReferences.
                     * @param request ListAddressGroupReferencesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAddressGroupReferencesResponse
                     */
                    public listAddressGroupReferences(request: google.cloud.networksecurity.v1.IListAddressGroupReferencesRequest, callback: google.cloud.networksecurity.v1.AddressGroupService.ListAddressGroupReferencesCallback): void;

                    /**
                     * Calls ListAddressGroupReferences.
                     * @param request ListAddressGroupReferencesRequest message or plain object
                     * @returns Promise
                     */
                    public listAddressGroupReferences(request: google.cloud.networksecurity.v1.IListAddressGroupReferencesRequest): Promise<google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse>;
                }

                namespace AddressGroupService {

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.AddressGroupService|listAddressGroups}.
                     * @param error Error, if any
                     * @param [response] ListAddressGroupsResponse
                     */
                    type ListAddressGroupsCallback = (error: (Error|null), response?: google.cloud.networksecurity.v1.ListAddressGroupsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.AddressGroupService|getAddressGroup}.
                     * @param error Error, if any
                     * @param [response] AddressGroup
                     */
                    type GetAddressGroupCallback = (error: (Error|null), response?: google.cloud.networksecurity.v1.AddressGroup) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.AddressGroupService|createAddressGroup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateAddressGroupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.AddressGroupService|updateAddressGroup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateAddressGroupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.AddressGroupService|addAddressGroupItems}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type AddAddressGroupItemsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.AddressGroupService|removeAddressGroupItems}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RemoveAddressGroupItemsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.AddressGroupService|cloneAddressGroupItems}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CloneAddressGroupItemsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.AddressGroupService|deleteAddressGroup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteAddressGroupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.AddressGroupService|listAddressGroupReferences}.
                     * @param error Error, if any
                     * @param [response] ListAddressGroupReferencesResponse
                     */
                    type ListAddressGroupReferencesCallback = (error: (Error|null), response?: google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse) => void;
                }

                /** Represents an OrganizationAddressGroupService */
                class OrganizationAddressGroupService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new OrganizationAddressGroupService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new OrganizationAddressGroupService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): OrganizationAddressGroupService;

                    /**
                     * Calls ListAddressGroups.
                     * @param request ListAddressGroupsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAddressGroupsResponse
                     */
                    public listAddressGroups(request: google.cloud.networksecurity.v1.IListAddressGroupsRequest, callback: google.cloud.networksecurity.v1.OrganizationAddressGroupService.ListAddressGroupsCallback): void;

                    /**
                     * Calls ListAddressGroups.
                     * @param request ListAddressGroupsRequest message or plain object
                     * @returns Promise
                     */
                    public listAddressGroups(request: google.cloud.networksecurity.v1.IListAddressGroupsRequest): Promise<google.cloud.networksecurity.v1.ListAddressGroupsResponse>;

                    /**
                     * Calls GetAddressGroup.
                     * @param request GetAddressGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AddressGroup
                     */
                    public getAddressGroup(request: google.cloud.networksecurity.v1.IGetAddressGroupRequest, callback: google.cloud.networksecurity.v1.OrganizationAddressGroupService.GetAddressGroupCallback): void;

                    /**
                     * Calls GetAddressGroup.
                     * @param request GetAddressGroupRequest message or plain object
                     * @returns Promise
                     */
                    public getAddressGroup(request: google.cloud.networksecurity.v1.IGetAddressGroupRequest): Promise<google.cloud.networksecurity.v1.AddressGroup>;

                    /**
                     * Calls CreateAddressGroup.
                     * @param request CreateAddressGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createAddressGroup(request: google.cloud.networksecurity.v1.ICreateAddressGroupRequest, callback: google.cloud.networksecurity.v1.OrganizationAddressGroupService.CreateAddressGroupCallback): void;

                    /**
                     * Calls CreateAddressGroup.
                     * @param request CreateAddressGroupRequest message or plain object
                     * @returns Promise
                     */
                    public createAddressGroup(request: google.cloud.networksecurity.v1.ICreateAddressGroupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateAddressGroup.
                     * @param request UpdateAddressGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateAddressGroup(request: google.cloud.networksecurity.v1.IUpdateAddressGroupRequest, callback: google.cloud.networksecurity.v1.OrganizationAddressGroupService.UpdateAddressGroupCallback): void;

                    /**
                     * Calls UpdateAddressGroup.
                     * @param request UpdateAddressGroupRequest message or plain object
                     * @returns Promise
                     */
                    public updateAddressGroup(request: google.cloud.networksecurity.v1.IUpdateAddressGroupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls AddAddressGroupItems.
                     * @param request AddAddressGroupItemsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public addAddressGroupItems(request: google.cloud.networksecurity.v1.IAddAddressGroupItemsRequest, callback: google.cloud.networksecurity.v1.OrganizationAddressGroupService.AddAddressGroupItemsCallback): void;

                    /**
                     * Calls AddAddressGroupItems.
                     * @param request AddAddressGroupItemsRequest message or plain object
                     * @returns Promise
                     */
                    public addAddressGroupItems(request: google.cloud.networksecurity.v1.IAddAddressGroupItemsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RemoveAddressGroupItems.
                     * @param request RemoveAddressGroupItemsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public removeAddressGroupItems(request: google.cloud.networksecurity.v1.IRemoveAddressGroupItemsRequest, callback: google.cloud.networksecurity.v1.OrganizationAddressGroupService.RemoveAddressGroupItemsCallback): void;

                    /**
                     * Calls RemoveAddressGroupItems.
                     * @param request RemoveAddressGroupItemsRequest message or plain object
                     * @returns Promise
                     */
                    public removeAddressGroupItems(request: google.cloud.networksecurity.v1.IRemoveAddressGroupItemsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CloneAddressGroupItems.
                     * @param request CloneAddressGroupItemsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public cloneAddressGroupItems(request: google.cloud.networksecurity.v1.ICloneAddressGroupItemsRequest, callback: google.cloud.networksecurity.v1.OrganizationAddressGroupService.CloneAddressGroupItemsCallback): void;

                    /**
                     * Calls CloneAddressGroupItems.
                     * @param request CloneAddressGroupItemsRequest message or plain object
                     * @returns Promise
                     */
                    public cloneAddressGroupItems(request: google.cloud.networksecurity.v1.ICloneAddressGroupItemsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteAddressGroup.
                     * @param request DeleteAddressGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteAddressGroup(request: google.cloud.networksecurity.v1.IDeleteAddressGroupRequest, callback: google.cloud.networksecurity.v1.OrganizationAddressGroupService.DeleteAddressGroupCallback): void;

                    /**
                     * Calls DeleteAddressGroup.
                     * @param request DeleteAddressGroupRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAddressGroup(request: google.cloud.networksecurity.v1.IDeleteAddressGroupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListAddressGroupReferences.
                     * @param request ListAddressGroupReferencesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAddressGroupReferencesResponse
                     */
                    public listAddressGroupReferences(request: google.cloud.networksecurity.v1.IListAddressGroupReferencesRequest, callback: google.cloud.networksecurity.v1.OrganizationAddressGroupService.ListAddressGroupReferencesCallback): void;

                    /**
                     * Calls ListAddressGroupReferences.
                     * @param request ListAddressGroupReferencesRequest message or plain object
                     * @returns Promise
                     */
                    public listAddressGroupReferences(request: google.cloud.networksecurity.v1.IListAddressGroupReferencesRequest): Promise<google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse>;
                }

                namespace OrganizationAddressGroupService {

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.OrganizationAddressGroupService|listAddressGroups}.
                     * @param error Error, if any
                     * @param [response] ListAddressGroupsResponse
                     */
                    type ListAddressGroupsCallback = (error: (Error|null), response?: google.cloud.networksecurity.v1.ListAddressGroupsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.OrganizationAddressGroupService|getAddressGroup}.
                     * @param error Error, if any
                     * @param [response] AddressGroup
                     */
                    type GetAddressGroupCallback = (error: (Error|null), response?: google.cloud.networksecurity.v1.AddressGroup) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.OrganizationAddressGroupService|createAddressGroup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateAddressGroupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.OrganizationAddressGroupService|updateAddressGroup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateAddressGroupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.OrganizationAddressGroupService|addAddressGroupItems}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type AddAddressGroupItemsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.OrganizationAddressGroupService|removeAddressGroupItems}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RemoveAddressGroupItemsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.OrganizationAddressGroupService|cloneAddressGroupItems}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CloneAddressGroupItemsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.OrganizationAddressGroupService|deleteAddressGroup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteAddressGroupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.OrganizationAddressGroupService|listAddressGroupReferences}.
                     * @param error Error, if any
                     * @param [response] ListAddressGroupReferencesResponse
                     */
                    type ListAddressGroupReferencesCallback = (error: (Error|null), response?: google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse) => void;
                }

                /** Properties of an AddressGroup. */
                interface IAddressGroup {

                    /** AddressGroup name */
                    name?: (string|null);

                    /** AddressGroup description */
                    description?: (string|null);

                    /** AddressGroup createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** AddressGroup updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** AddressGroup labels */
                    labels?: ({ [k: string]: string }|null);

                    /** AddressGroup type */
                    type?: (google.cloud.networksecurity.v1.AddressGroup.Type|keyof typeof google.cloud.networksecurity.v1.AddressGroup.Type|null);

                    /** AddressGroup items */
                    items?: (string[]|null);

                    /** AddressGroup capacity */
                    capacity?: (number|null);

                    /** AddressGroup selfLink */
                    selfLink?: (string|null);

                    /** AddressGroup purpose */
                    purpose?: (google.cloud.networksecurity.v1.AddressGroup.Purpose[]|null);
                }

                /** Represents an AddressGroup. */
                class AddressGroup implements IAddressGroup {

                    /**
                     * Constructs a new AddressGroup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IAddressGroup);

                    /** AddressGroup name. */
                    public name: string;

                    /** AddressGroup description. */
                    public description: string;

                    /** AddressGroup createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** AddressGroup updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** AddressGroup labels. */
                    public labels: { [k: string]: string };

                    /** AddressGroup type. */
                    public type: (google.cloud.networksecurity.v1.AddressGroup.Type|keyof typeof google.cloud.networksecurity.v1.AddressGroup.Type);

                    /** AddressGroup items. */
                    public items: string[];

                    /** AddressGroup capacity. */
                    public capacity: number;

                    /** AddressGroup selfLink. */
                    public selfLink: string;

                    /** AddressGroup purpose. */
                    public purpose: google.cloud.networksecurity.v1.AddressGroup.Purpose[];

                    /**
                     * Creates a new AddressGroup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AddressGroup instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IAddressGroup): google.cloud.networksecurity.v1.AddressGroup;

                    /**
                     * Encodes the specified AddressGroup message. Does not implicitly {@link google.cloud.networksecurity.v1.AddressGroup.verify|verify} messages.
                     * @param message AddressGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IAddressGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AddressGroup message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.AddressGroup.verify|verify} messages.
                     * @param message AddressGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IAddressGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AddressGroup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AddressGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.AddressGroup;

                    /**
                     * Decodes an AddressGroup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AddressGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.AddressGroup;

                    /**
                     * Verifies an AddressGroup message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AddressGroup message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AddressGroup
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.AddressGroup;

                    /**
                     * Creates a plain object from an AddressGroup message. Also converts values to other types if specified.
                     * @param message AddressGroup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.AddressGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AddressGroup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AddressGroup
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AddressGroup {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        IPV4 = 1,
                        IPV6 = 2
                    }

                    /** Purpose enum. */
                    enum Purpose {
                        PURPOSE_UNSPECIFIED = 0,
                        DEFAULT = 1,
                        CLOUD_ARMOR = 2
                    }
                }

                /** Properties of a ListAddressGroupsRequest. */
                interface IListAddressGroupsRequest {

                    /** ListAddressGroupsRequest parent */
                    parent?: (string|null);

                    /** ListAddressGroupsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAddressGroupsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListAddressGroupsRequest returnPartialSuccess */
                    returnPartialSuccess?: (boolean|null);
                }

                /** Represents a ListAddressGroupsRequest. */
                class ListAddressGroupsRequest implements IListAddressGroupsRequest {

                    /**
                     * Constructs a new ListAddressGroupsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IListAddressGroupsRequest);

                    /** ListAddressGroupsRequest parent. */
                    public parent: string;

                    /** ListAddressGroupsRequest pageSize. */
                    public pageSize: number;

                    /** ListAddressGroupsRequest pageToken. */
                    public pageToken: string;

                    /** ListAddressGroupsRequest returnPartialSuccess. */
                    public returnPartialSuccess: boolean;

                    /**
                     * Creates a new ListAddressGroupsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAddressGroupsRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IListAddressGroupsRequest): google.cloud.networksecurity.v1.ListAddressGroupsRequest;

                    /**
                     * Encodes the specified ListAddressGroupsRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.ListAddressGroupsRequest.verify|verify} messages.
                     * @param message ListAddressGroupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IListAddressGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAddressGroupsRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.ListAddressGroupsRequest.verify|verify} messages.
                     * @param message ListAddressGroupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IListAddressGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAddressGroupsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAddressGroupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.ListAddressGroupsRequest;

                    /**
                     * Decodes a ListAddressGroupsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAddressGroupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.ListAddressGroupsRequest;

                    /**
                     * Verifies a ListAddressGroupsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAddressGroupsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAddressGroupsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.ListAddressGroupsRequest;

                    /**
                     * Creates a plain object from a ListAddressGroupsRequest message. Also converts values to other types if specified.
                     * @param message ListAddressGroupsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.ListAddressGroupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAddressGroupsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAddressGroupsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAddressGroupsResponse. */
                interface IListAddressGroupsResponse {

                    /** ListAddressGroupsResponse addressGroups */
                    addressGroups?: (google.cloud.networksecurity.v1.IAddressGroup[]|null);

                    /** ListAddressGroupsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListAddressGroupsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListAddressGroupsResponse. */
                class ListAddressGroupsResponse implements IListAddressGroupsResponse {

                    /**
                     * Constructs a new ListAddressGroupsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IListAddressGroupsResponse);

                    /** ListAddressGroupsResponse addressGroups. */
                    public addressGroups: google.cloud.networksecurity.v1.IAddressGroup[];

                    /** ListAddressGroupsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListAddressGroupsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListAddressGroupsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAddressGroupsResponse instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IListAddressGroupsResponse): google.cloud.networksecurity.v1.ListAddressGroupsResponse;

                    /**
                     * Encodes the specified ListAddressGroupsResponse message. Does not implicitly {@link google.cloud.networksecurity.v1.ListAddressGroupsResponse.verify|verify} messages.
                     * @param message ListAddressGroupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IListAddressGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAddressGroupsResponse message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.ListAddressGroupsResponse.verify|verify} messages.
                     * @param message ListAddressGroupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IListAddressGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAddressGroupsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAddressGroupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.ListAddressGroupsResponse;

                    /**
                     * Decodes a ListAddressGroupsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAddressGroupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.ListAddressGroupsResponse;

                    /**
                     * Verifies a ListAddressGroupsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAddressGroupsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAddressGroupsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.ListAddressGroupsResponse;

                    /**
                     * Creates a plain object from a ListAddressGroupsResponse message. Also converts values to other types if specified.
                     * @param message ListAddressGroupsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.ListAddressGroupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAddressGroupsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAddressGroupsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetAddressGroupRequest. */
                interface IGetAddressGroupRequest {

                    /** GetAddressGroupRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAddressGroupRequest. */
                class GetAddressGroupRequest implements IGetAddressGroupRequest {

                    /**
                     * Constructs a new GetAddressGroupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IGetAddressGroupRequest);

                    /** GetAddressGroupRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAddressGroupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAddressGroupRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IGetAddressGroupRequest): google.cloud.networksecurity.v1.GetAddressGroupRequest;

                    /**
                     * Encodes the specified GetAddressGroupRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.GetAddressGroupRequest.verify|verify} messages.
                     * @param message GetAddressGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IGetAddressGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAddressGroupRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.GetAddressGroupRequest.verify|verify} messages.
                     * @param message GetAddressGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IGetAddressGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAddressGroupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAddressGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.GetAddressGroupRequest;

                    /**
                     * Decodes a GetAddressGroupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAddressGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.GetAddressGroupRequest;

                    /**
                     * Verifies a GetAddressGroupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAddressGroupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAddressGroupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.GetAddressGroupRequest;

                    /**
                     * Creates a plain object from a GetAddressGroupRequest message. Also converts values to other types if specified.
                     * @param message GetAddressGroupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.GetAddressGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAddressGroupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetAddressGroupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateAddressGroupRequest. */
                interface ICreateAddressGroupRequest {

                    /** CreateAddressGroupRequest parent */
                    parent?: (string|null);

                    /** CreateAddressGroupRequest addressGroupId */
                    addressGroupId?: (string|null);

                    /** CreateAddressGroupRequest addressGroup */
                    addressGroup?: (google.cloud.networksecurity.v1.IAddressGroup|null);

                    /** CreateAddressGroupRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateAddressGroupRequest. */
                class CreateAddressGroupRequest implements ICreateAddressGroupRequest {

                    /**
                     * Constructs a new CreateAddressGroupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.ICreateAddressGroupRequest);

                    /** CreateAddressGroupRequest parent. */
                    public parent: string;

                    /** CreateAddressGroupRequest addressGroupId. */
                    public addressGroupId: string;

                    /** CreateAddressGroupRequest addressGroup. */
                    public addressGroup?: (google.cloud.networksecurity.v1.IAddressGroup|null);

                    /** CreateAddressGroupRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateAddressGroupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAddressGroupRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.ICreateAddressGroupRequest): google.cloud.networksecurity.v1.CreateAddressGroupRequest;

                    /**
                     * Encodes the specified CreateAddressGroupRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.CreateAddressGroupRequest.verify|verify} messages.
                     * @param message CreateAddressGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.ICreateAddressGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAddressGroupRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.CreateAddressGroupRequest.verify|verify} messages.
                     * @param message CreateAddressGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.ICreateAddressGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAddressGroupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAddressGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.CreateAddressGroupRequest;

                    /**
                     * Decodes a CreateAddressGroupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAddressGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.CreateAddressGroupRequest;

                    /**
                     * Verifies a CreateAddressGroupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAddressGroupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAddressGroupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.CreateAddressGroupRequest;

                    /**
                     * Creates a plain object from a CreateAddressGroupRequest message. Also converts values to other types if specified.
                     * @param message CreateAddressGroupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.CreateAddressGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAddressGroupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateAddressGroupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateAddressGroupRequest. */
                interface IUpdateAddressGroupRequest {

                    /** UpdateAddressGroupRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateAddressGroupRequest addressGroup */
                    addressGroup?: (google.cloud.networksecurity.v1.IAddressGroup|null);

                    /** UpdateAddressGroupRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateAddressGroupRequest. */
                class UpdateAddressGroupRequest implements IUpdateAddressGroupRequest {

                    /**
                     * Constructs a new UpdateAddressGroupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IUpdateAddressGroupRequest);

                    /** UpdateAddressGroupRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateAddressGroupRequest addressGroup. */
                    public addressGroup?: (google.cloud.networksecurity.v1.IAddressGroup|null);

                    /** UpdateAddressGroupRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateAddressGroupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateAddressGroupRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IUpdateAddressGroupRequest): google.cloud.networksecurity.v1.UpdateAddressGroupRequest;

                    /**
                     * Encodes the specified UpdateAddressGroupRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.UpdateAddressGroupRequest.verify|verify} messages.
                     * @param message UpdateAddressGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IUpdateAddressGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateAddressGroupRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.UpdateAddressGroupRequest.verify|verify} messages.
                     * @param message UpdateAddressGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IUpdateAddressGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateAddressGroupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateAddressGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.UpdateAddressGroupRequest;

                    /**
                     * Decodes an UpdateAddressGroupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateAddressGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.UpdateAddressGroupRequest;

                    /**
                     * Verifies an UpdateAddressGroupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateAddressGroupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateAddressGroupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.UpdateAddressGroupRequest;

                    /**
                     * Creates a plain object from an UpdateAddressGroupRequest message. Also converts values to other types if specified.
                     * @param message UpdateAddressGroupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.UpdateAddressGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateAddressGroupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateAddressGroupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteAddressGroupRequest. */
                interface IDeleteAddressGroupRequest {

                    /** DeleteAddressGroupRequest name */
                    name?: (string|null);

                    /** DeleteAddressGroupRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteAddressGroupRequest. */
                class DeleteAddressGroupRequest implements IDeleteAddressGroupRequest {

                    /**
                     * Constructs a new DeleteAddressGroupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IDeleteAddressGroupRequest);

                    /** DeleteAddressGroupRequest name. */
                    public name: string;

                    /** DeleteAddressGroupRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteAddressGroupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAddressGroupRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IDeleteAddressGroupRequest): google.cloud.networksecurity.v1.DeleteAddressGroupRequest;

                    /**
                     * Encodes the specified DeleteAddressGroupRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.DeleteAddressGroupRequest.verify|verify} messages.
                     * @param message DeleteAddressGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IDeleteAddressGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAddressGroupRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.DeleteAddressGroupRequest.verify|verify} messages.
                     * @param message DeleteAddressGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IDeleteAddressGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAddressGroupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAddressGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.DeleteAddressGroupRequest;

                    /**
                     * Decodes a DeleteAddressGroupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAddressGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.DeleteAddressGroupRequest;

                    /**
                     * Verifies a DeleteAddressGroupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAddressGroupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAddressGroupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.DeleteAddressGroupRequest;

                    /**
                     * Creates a plain object from a DeleteAddressGroupRequest message. Also converts values to other types if specified.
                     * @param message DeleteAddressGroupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.DeleteAddressGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAddressGroupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteAddressGroupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AddAddressGroupItemsRequest. */
                interface IAddAddressGroupItemsRequest {

                    /** AddAddressGroupItemsRequest addressGroup */
                    addressGroup?: (string|null);

                    /** AddAddressGroupItemsRequest items */
                    items?: (string[]|null);

                    /** AddAddressGroupItemsRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an AddAddressGroupItemsRequest. */
                class AddAddressGroupItemsRequest implements IAddAddressGroupItemsRequest {

                    /**
                     * Constructs a new AddAddressGroupItemsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IAddAddressGroupItemsRequest);

                    /** AddAddressGroupItemsRequest addressGroup. */
                    public addressGroup: string;

                    /** AddAddressGroupItemsRequest items. */
                    public items: string[];

                    /** AddAddressGroupItemsRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new AddAddressGroupItemsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AddAddressGroupItemsRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IAddAddressGroupItemsRequest): google.cloud.networksecurity.v1.AddAddressGroupItemsRequest;

                    /**
                     * Encodes the specified AddAddressGroupItemsRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.AddAddressGroupItemsRequest.verify|verify} messages.
                     * @param message AddAddressGroupItemsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IAddAddressGroupItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AddAddressGroupItemsRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.AddAddressGroupItemsRequest.verify|verify} messages.
                     * @param message AddAddressGroupItemsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IAddAddressGroupItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AddAddressGroupItemsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AddAddressGroupItemsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.AddAddressGroupItemsRequest;

                    /**
                     * Decodes an AddAddressGroupItemsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AddAddressGroupItemsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.AddAddressGroupItemsRequest;

                    /**
                     * Verifies an AddAddressGroupItemsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AddAddressGroupItemsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AddAddressGroupItemsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.AddAddressGroupItemsRequest;

                    /**
                     * Creates a plain object from an AddAddressGroupItemsRequest message. Also converts values to other types if specified.
                     * @param message AddAddressGroupItemsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.AddAddressGroupItemsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AddAddressGroupItemsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AddAddressGroupItemsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RemoveAddressGroupItemsRequest. */
                interface IRemoveAddressGroupItemsRequest {

                    /** RemoveAddressGroupItemsRequest addressGroup */
                    addressGroup?: (string|null);

                    /** RemoveAddressGroupItemsRequest items */
                    items?: (string[]|null);

                    /** RemoveAddressGroupItemsRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a RemoveAddressGroupItemsRequest. */
                class RemoveAddressGroupItemsRequest implements IRemoveAddressGroupItemsRequest {

                    /**
                     * Constructs a new RemoveAddressGroupItemsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IRemoveAddressGroupItemsRequest);

                    /** RemoveAddressGroupItemsRequest addressGroup. */
                    public addressGroup: string;

                    /** RemoveAddressGroupItemsRequest items. */
                    public items: string[];

                    /** RemoveAddressGroupItemsRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new RemoveAddressGroupItemsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RemoveAddressGroupItemsRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IRemoveAddressGroupItemsRequest): google.cloud.networksecurity.v1.RemoveAddressGroupItemsRequest;

                    /**
                     * Encodes the specified RemoveAddressGroupItemsRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.RemoveAddressGroupItemsRequest.verify|verify} messages.
                     * @param message RemoveAddressGroupItemsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IRemoveAddressGroupItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RemoveAddressGroupItemsRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.RemoveAddressGroupItemsRequest.verify|verify} messages.
                     * @param message RemoveAddressGroupItemsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IRemoveAddressGroupItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RemoveAddressGroupItemsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RemoveAddressGroupItemsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.RemoveAddressGroupItemsRequest;

                    /**
                     * Decodes a RemoveAddressGroupItemsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RemoveAddressGroupItemsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.RemoveAddressGroupItemsRequest;

                    /**
                     * Verifies a RemoveAddressGroupItemsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RemoveAddressGroupItemsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RemoveAddressGroupItemsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.RemoveAddressGroupItemsRequest;

                    /**
                     * Creates a plain object from a RemoveAddressGroupItemsRequest message. Also converts values to other types if specified.
                     * @param message RemoveAddressGroupItemsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.RemoveAddressGroupItemsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RemoveAddressGroupItemsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RemoveAddressGroupItemsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CloneAddressGroupItemsRequest. */
                interface ICloneAddressGroupItemsRequest {

                    /** CloneAddressGroupItemsRequest addressGroup */
                    addressGroup?: (string|null);

                    /** CloneAddressGroupItemsRequest sourceAddressGroup */
                    sourceAddressGroup?: (string|null);

                    /** CloneAddressGroupItemsRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CloneAddressGroupItemsRequest. */
                class CloneAddressGroupItemsRequest implements ICloneAddressGroupItemsRequest {

                    /**
                     * Constructs a new CloneAddressGroupItemsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.ICloneAddressGroupItemsRequest);

                    /** CloneAddressGroupItemsRequest addressGroup. */
                    public addressGroup: string;

                    /** CloneAddressGroupItemsRequest sourceAddressGroup. */
                    public sourceAddressGroup: string;

                    /** CloneAddressGroupItemsRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CloneAddressGroupItemsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloneAddressGroupItemsRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.ICloneAddressGroupItemsRequest): google.cloud.networksecurity.v1.CloneAddressGroupItemsRequest;

                    /**
                     * Encodes the specified CloneAddressGroupItemsRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.CloneAddressGroupItemsRequest.verify|verify} messages.
                     * @param message CloneAddressGroupItemsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.ICloneAddressGroupItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloneAddressGroupItemsRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.CloneAddressGroupItemsRequest.verify|verify} messages.
                     * @param message CloneAddressGroupItemsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.ICloneAddressGroupItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloneAddressGroupItemsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloneAddressGroupItemsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.CloneAddressGroupItemsRequest;

                    /**
                     * Decodes a CloneAddressGroupItemsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloneAddressGroupItemsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.CloneAddressGroupItemsRequest;

                    /**
                     * Verifies a CloneAddressGroupItemsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloneAddressGroupItemsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloneAddressGroupItemsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.CloneAddressGroupItemsRequest;

                    /**
                     * Creates a plain object from a CloneAddressGroupItemsRequest message. Also converts values to other types if specified.
                     * @param message CloneAddressGroupItemsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.CloneAddressGroupItemsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloneAddressGroupItemsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CloneAddressGroupItemsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAddressGroupReferencesRequest. */
                interface IListAddressGroupReferencesRequest {

                    /** ListAddressGroupReferencesRequest addressGroup */
                    addressGroup?: (string|null);

                    /** ListAddressGroupReferencesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAddressGroupReferencesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAddressGroupReferencesRequest. */
                class ListAddressGroupReferencesRequest implements IListAddressGroupReferencesRequest {

                    /**
                     * Constructs a new ListAddressGroupReferencesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IListAddressGroupReferencesRequest);

                    /** ListAddressGroupReferencesRequest addressGroup. */
                    public addressGroup: string;

                    /** ListAddressGroupReferencesRequest pageSize. */
                    public pageSize: number;

                    /** ListAddressGroupReferencesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAddressGroupReferencesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAddressGroupReferencesRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IListAddressGroupReferencesRequest): google.cloud.networksecurity.v1.ListAddressGroupReferencesRequest;

                    /**
                     * Encodes the specified ListAddressGroupReferencesRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.ListAddressGroupReferencesRequest.verify|verify} messages.
                     * @param message ListAddressGroupReferencesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IListAddressGroupReferencesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAddressGroupReferencesRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.ListAddressGroupReferencesRequest.verify|verify} messages.
                     * @param message ListAddressGroupReferencesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IListAddressGroupReferencesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAddressGroupReferencesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAddressGroupReferencesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.ListAddressGroupReferencesRequest;

                    /**
                     * Decodes a ListAddressGroupReferencesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAddressGroupReferencesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.ListAddressGroupReferencesRequest;

                    /**
                     * Verifies a ListAddressGroupReferencesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAddressGroupReferencesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAddressGroupReferencesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.ListAddressGroupReferencesRequest;

                    /**
                     * Creates a plain object from a ListAddressGroupReferencesRequest message. Also converts values to other types if specified.
                     * @param message ListAddressGroupReferencesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.ListAddressGroupReferencesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAddressGroupReferencesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAddressGroupReferencesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAddressGroupReferencesResponse. */
                interface IListAddressGroupReferencesResponse {

                    /** ListAddressGroupReferencesResponse addressGroupReferences */
                    addressGroupReferences?: (google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse.IAddressGroupReference[]|null);

                    /** ListAddressGroupReferencesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAddressGroupReferencesResponse. */
                class ListAddressGroupReferencesResponse implements IListAddressGroupReferencesResponse {

                    /**
                     * Constructs a new ListAddressGroupReferencesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IListAddressGroupReferencesResponse);

                    /** ListAddressGroupReferencesResponse addressGroupReferences. */
                    public addressGroupReferences: google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse.IAddressGroupReference[];

                    /** ListAddressGroupReferencesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAddressGroupReferencesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAddressGroupReferencesResponse instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IListAddressGroupReferencesResponse): google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse;

                    /**
                     * Encodes the specified ListAddressGroupReferencesResponse message. Does not implicitly {@link google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse.verify|verify} messages.
                     * @param message ListAddressGroupReferencesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IListAddressGroupReferencesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAddressGroupReferencesResponse message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse.verify|verify} messages.
                     * @param message ListAddressGroupReferencesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IListAddressGroupReferencesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAddressGroupReferencesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAddressGroupReferencesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse;

                    /**
                     * Decodes a ListAddressGroupReferencesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAddressGroupReferencesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse;

                    /**
                     * Verifies a ListAddressGroupReferencesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAddressGroupReferencesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAddressGroupReferencesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse;

                    /**
                     * Creates a plain object from a ListAddressGroupReferencesResponse message. Also converts values to other types if specified.
                     * @param message ListAddressGroupReferencesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAddressGroupReferencesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAddressGroupReferencesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ListAddressGroupReferencesResponse {

                    /** Properties of an AddressGroupReference. */
                    interface IAddressGroupReference {

                        /** AddressGroupReference firewallPolicy */
                        firewallPolicy?: (string|null);

                        /** AddressGroupReference securityPolicy */
                        securityPolicy?: (string|null);

                        /** AddressGroupReference rulePriority */
                        rulePriority?: (number|null);
                    }

                    /** Represents an AddressGroupReference. */
                    class AddressGroupReference implements IAddressGroupReference {

                        /**
                         * Constructs a new AddressGroupReference.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse.IAddressGroupReference);

                        /** AddressGroupReference firewallPolicy. */
                        public firewallPolicy: string;

                        /** AddressGroupReference securityPolicy. */
                        public securityPolicy: string;

                        /** AddressGroupReference rulePriority. */
                        public rulePriority: number;

                        /**
                         * Creates a new AddressGroupReference instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AddressGroupReference instance
                         */
                        public static create(properties?: google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse.IAddressGroupReference): google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse.AddressGroupReference;

                        /**
                         * Encodes the specified AddressGroupReference message. Does not implicitly {@link google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse.AddressGroupReference.verify|verify} messages.
                         * @param message AddressGroupReference message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse.IAddressGroupReference, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AddressGroupReference message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse.AddressGroupReference.verify|verify} messages.
                         * @param message AddressGroupReference message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse.IAddressGroupReference, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AddressGroupReference message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AddressGroupReference
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse.AddressGroupReference;

                        /**
                         * Decodes an AddressGroupReference message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AddressGroupReference
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse.AddressGroupReference;

                        /**
                         * Verifies an AddressGroupReference message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AddressGroupReference message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AddressGroupReference
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse.AddressGroupReference;

                        /**
                         * Creates a plain object from an AddressGroupReference message. Also converts values to other types if specified.
                         * @param message AddressGroupReference
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networksecurity.v1.ListAddressGroupReferencesResponse.AddressGroupReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AddressGroupReference to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AddressGroupReference
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of an AuthorizationPolicy. */
                interface IAuthorizationPolicy {

                    /** AuthorizationPolicy name */
                    name?: (string|null);

                    /** AuthorizationPolicy description */
                    description?: (string|null);

                    /** AuthorizationPolicy createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** AuthorizationPolicy updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** AuthorizationPolicy labels */
                    labels?: ({ [k: string]: string }|null);

                    /** AuthorizationPolicy action */
                    action?: (google.cloud.networksecurity.v1.AuthorizationPolicy.Action|keyof typeof google.cloud.networksecurity.v1.AuthorizationPolicy.Action|null);

                    /** AuthorizationPolicy rules */
                    rules?: (google.cloud.networksecurity.v1.AuthorizationPolicy.IRule[]|null);
                }

                /** Represents an AuthorizationPolicy. */
                class AuthorizationPolicy implements IAuthorizationPolicy {

                    /**
                     * Constructs a new AuthorizationPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IAuthorizationPolicy);

                    /** AuthorizationPolicy name. */
                    public name: string;

                    /** AuthorizationPolicy description. */
                    public description: string;

                    /** AuthorizationPolicy createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** AuthorizationPolicy updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** AuthorizationPolicy labels. */
                    public labels: { [k: string]: string };

                    /** AuthorizationPolicy action. */
                    public action: (google.cloud.networksecurity.v1.AuthorizationPolicy.Action|keyof typeof google.cloud.networksecurity.v1.AuthorizationPolicy.Action);

                    /** AuthorizationPolicy rules. */
                    public rules: google.cloud.networksecurity.v1.AuthorizationPolicy.IRule[];

                    /**
                     * Creates a new AuthorizationPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AuthorizationPolicy instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IAuthorizationPolicy): google.cloud.networksecurity.v1.AuthorizationPolicy;

                    /**
                     * Encodes the specified AuthorizationPolicy message. Does not implicitly {@link google.cloud.networksecurity.v1.AuthorizationPolicy.verify|verify} messages.
                     * @param message AuthorizationPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IAuthorizationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AuthorizationPolicy message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.AuthorizationPolicy.verify|verify} messages.
                     * @param message AuthorizationPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IAuthorizationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AuthorizationPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AuthorizationPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.AuthorizationPolicy;

                    /**
                     * Decodes an AuthorizationPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AuthorizationPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.AuthorizationPolicy;

                    /**
                     * Verifies an AuthorizationPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AuthorizationPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AuthorizationPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.AuthorizationPolicy;

                    /**
                     * Creates a plain object from an AuthorizationPolicy message. Also converts values to other types if specified.
                     * @param message AuthorizationPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.AuthorizationPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AuthorizationPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AuthorizationPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AuthorizationPolicy {

                    /** Properties of a Rule. */
                    interface IRule {

                        /** Rule sources */
                        sources?: (google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.ISource[]|null);

                        /** Rule destinations */
                        destinations?: (google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.IDestination[]|null);
                    }

                    /** Represents a Rule. */
                    class Rule implements IRule {

                        /**
                         * Constructs a new Rule.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networksecurity.v1.AuthorizationPolicy.IRule);

                        /** Rule sources. */
                        public sources: google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.ISource[];

                        /** Rule destinations. */
                        public destinations: google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.IDestination[];

                        /**
                         * Creates a new Rule instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Rule instance
                         */
                        public static create(properties?: google.cloud.networksecurity.v1.AuthorizationPolicy.IRule): google.cloud.networksecurity.v1.AuthorizationPolicy.Rule;

                        /**
                         * Encodes the specified Rule message. Does not implicitly {@link google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.verify|verify} messages.
                         * @param message Rule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networksecurity.v1.AuthorizationPolicy.IRule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Rule message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.verify|verify} messages.
                         * @param message Rule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networksecurity.v1.AuthorizationPolicy.IRule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Rule message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Rule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.AuthorizationPolicy.Rule;

                        /**
                         * Decodes a Rule message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Rule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.AuthorizationPolicy.Rule;

                        /**
                         * Verifies a Rule message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Rule message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Rule
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.AuthorizationPolicy.Rule;

                        /**
                         * Creates a plain object from a Rule message. Also converts values to other types if specified.
                         * @param message Rule
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networksecurity.v1.AuthorizationPolicy.Rule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Rule to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Rule
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Rule {

                        /** Properties of a Source. */
                        interface ISource {

                            /** Source principals */
                            principals?: (string[]|null);

                            /** Source ipBlocks */
                            ipBlocks?: (string[]|null);
                        }

                        /** Represents a Source. */
                        class Source implements ISource {

                            /**
                             * Constructs a new Source.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.ISource);

                            /** Source principals. */
                            public principals: string[];

                            /** Source ipBlocks. */
                            public ipBlocks: string[];

                            /**
                             * Creates a new Source instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Source instance
                             */
                            public static create(properties?: google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.ISource): google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Source;

                            /**
                             * Encodes the specified Source message. Does not implicitly {@link google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Source.verify|verify} messages.
                             * @param message Source message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Source message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Source.verify|verify} messages.
                             * @param message Source message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Source message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Source
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Source;

                            /**
                             * Decodes a Source message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Source
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Source;

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
                            public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Source;

                            /**
                             * Creates a plain object from a Source message. Also converts values to other types if specified.
                             * @param message Source
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Source, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Source to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Source
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Destination. */
                        interface IDestination {

                            /** Destination hosts */
                            hosts?: (string[]|null);

                            /** Destination ports */
                            ports?: (number[]|null);

                            /** Destination methods */
                            methods?: (string[]|null);

                            /** Destination httpHeaderMatch */
                            httpHeaderMatch?: (google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination.IHttpHeaderMatch|null);
                        }

                        /** Represents a Destination. */
                        class Destination implements IDestination {

                            /**
                             * Constructs a new Destination.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.IDestination);

                            /** Destination hosts. */
                            public hosts: string[];

                            /** Destination ports. */
                            public ports: number[];

                            /** Destination methods. */
                            public methods: string[];

                            /** Destination httpHeaderMatch. */
                            public httpHeaderMatch?: (google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination.IHttpHeaderMatch|null);

                            /**
                             * Creates a new Destination instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Destination instance
                             */
                            public static create(properties?: google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.IDestination): google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination;

                            /**
                             * Encodes the specified Destination message. Does not implicitly {@link google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination.verify|verify} messages.
                             * @param message Destination message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.IDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Destination message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination.verify|verify} messages.
                             * @param message Destination message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.IDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Destination message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Destination
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination;

                            /**
                             * Decodes a Destination message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Destination
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination;

                            /**
                             * Verifies a Destination message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Destination message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Destination
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination;

                            /**
                             * Creates a plain object from a Destination message. Also converts values to other types if specified.
                             * @param message Destination
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Destination to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Destination
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace Destination {

                            /** Properties of a HttpHeaderMatch. */
                            interface IHttpHeaderMatch {

                                /** HttpHeaderMatch regexMatch */
                                regexMatch?: (string|null);

                                /** HttpHeaderMatch headerName */
                                headerName?: (string|null);
                            }

                            /** Represents a HttpHeaderMatch. */
                            class HttpHeaderMatch implements IHttpHeaderMatch {

                                /**
                                 * Constructs a new HttpHeaderMatch.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination.IHttpHeaderMatch);

                                /** HttpHeaderMatch regexMatch. */
                                public regexMatch?: (string|null);

                                /** HttpHeaderMatch headerName. */
                                public headerName: string;

                                /** HttpHeaderMatch type. */
                                public type?: "regexMatch";

                                /**
                                 * Creates a new HttpHeaderMatch instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns HttpHeaderMatch instance
                                 */
                                public static create(properties?: google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination.IHttpHeaderMatch): google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch;

                                /**
                                 * Encodes the specified HttpHeaderMatch message. Does not implicitly {@link google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch.verify|verify} messages.
                                 * @param message HttpHeaderMatch message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination.IHttpHeaderMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified HttpHeaderMatch message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch.verify|verify} messages.
                                 * @param message HttpHeaderMatch message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination.IHttpHeaderMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a HttpHeaderMatch message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns HttpHeaderMatch
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch;

                                /**
                                 * Decodes a HttpHeaderMatch message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns HttpHeaderMatch
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch;

                                /**
                                 * Verifies a HttpHeaderMatch message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a HttpHeaderMatch message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns HttpHeaderMatch
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch;

                                /**
                                 * Creates a plain object from a HttpHeaderMatch message. Also converts values to other types if specified.
                                 * @param message HttpHeaderMatch
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.networksecurity.v1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this HttpHeaderMatch to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for HttpHeaderMatch
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }
                    }

                    /** Action enum. */
                    enum Action {
                        ACTION_UNSPECIFIED = 0,
                        ALLOW = 1,
                        DENY = 2
                    }
                }

                /** Properties of a ListAuthorizationPoliciesRequest. */
                interface IListAuthorizationPoliciesRequest {

                    /** ListAuthorizationPoliciesRequest parent */
                    parent?: (string|null);

                    /** ListAuthorizationPoliciesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAuthorizationPoliciesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAuthorizationPoliciesRequest. */
                class ListAuthorizationPoliciesRequest implements IListAuthorizationPoliciesRequest {

                    /**
                     * Constructs a new ListAuthorizationPoliciesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IListAuthorizationPoliciesRequest);

                    /** ListAuthorizationPoliciesRequest parent. */
                    public parent: string;

                    /** ListAuthorizationPoliciesRequest pageSize. */
                    public pageSize: number;

                    /** ListAuthorizationPoliciesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAuthorizationPoliciesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAuthorizationPoliciesRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IListAuthorizationPoliciesRequest): google.cloud.networksecurity.v1.ListAuthorizationPoliciesRequest;

                    /**
                     * Encodes the specified ListAuthorizationPoliciesRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.ListAuthorizationPoliciesRequest.verify|verify} messages.
                     * @param message ListAuthorizationPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IListAuthorizationPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAuthorizationPoliciesRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.ListAuthorizationPoliciesRequest.verify|verify} messages.
                     * @param message ListAuthorizationPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IListAuthorizationPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAuthorizationPoliciesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAuthorizationPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.ListAuthorizationPoliciesRequest;

                    /**
                     * Decodes a ListAuthorizationPoliciesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAuthorizationPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.ListAuthorizationPoliciesRequest;

                    /**
                     * Verifies a ListAuthorizationPoliciesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAuthorizationPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAuthorizationPoliciesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.ListAuthorizationPoliciesRequest;

                    /**
                     * Creates a plain object from a ListAuthorizationPoliciesRequest message. Also converts values to other types if specified.
                     * @param message ListAuthorizationPoliciesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.ListAuthorizationPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAuthorizationPoliciesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAuthorizationPoliciesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAuthorizationPoliciesResponse. */
                interface IListAuthorizationPoliciesResponse {

                    /** ListAuthorizationPoliciesResponse authorizationPolicies */
                    authorizationPolicies?: (google.cloud.networksecurity.v1.IAuthorizationPolicy[]|null);

                    /** ListAuthorizationPoliciesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAuthorizationPoliciesResponse. */
                class ListAuthorizationPoliciesResponse implements IListAuthorizationPoliciesResponse {

                    /**
                     * Constructs a new ListAuthorizationPoliciesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IListAuthorizationPoliciesResponse);

                    /** ListAuthorizationPoliciesResponse authorizationPolicies. */
                    public authorizationPolicies: google.cloud.networksecurity.v1.IAuthorizationPolicy[];

                    /** ListAuthorizationPoliciesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAuthorizationPoliciesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAuthorizationPoliciesResponse instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IListAuthorizationPoliciesResponse): google.cloud.networksecurity.v1.ListAuthorizationPoliciesResponse;

                    /**
                     * Encodes the specified ListAuthorizationPoliciesResponse message. Does not implicitly {@link google.cloud.networksecurity.v1.ListAuthorizationPoliciesResponse.verify|verify} messages.
                     * @param message ListAuthorizationPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IListAuthorizationPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAuthorizationPoliciesResponse message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.ListAuthorizationPoliciesResponse.verify|verify} messages.
                     * @param message ListAuthorizationPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IListAuthorizationPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAuthorizationPoliciesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAuthorizationPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.ListAuthorizationPoliciesResponse;

                    /**
                     * Decodes a ListAuthorizationPoliciesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAuthorizationPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.ListAuthorizationPoliciesResponse;

                    /**
                     * Verifies a ListAuthorizationPoliciesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAuthorizationPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAuthorizationPoliciesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.ListAuthorizationPoliciesResponse;

                    /**
                     * Creates a plain object from a ListAuthorizationPoliciesResponse message. Also converts values to other types if specified.
                     * @param message ListAuthorizationPoliciesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.ListAuthorizationPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAuthorizationPoliciesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAuthorizationPoliciesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetAuthorizationPolicyRequest. */
                interface IGetAuthorizationPolicyRequest {

                    /** GetAuthorizationPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAuthorizationPolicyRequest. */
                class GetAuthorizationPolicyRequest implements IGetAuthorizationPolicyRequest {

                    /**
                     * Constructs a new GetAuthorizationPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IGetAuthorizationPolicyRequest);

                    /** GetAuthorizationPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAuthorizationPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAuthorizationPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IGetAuthorizationPolicyRequest): google.cloud.networksecurity.v1.GetAuthorizationPolicyRequest;

                    /**
                     * Encodes the specified GetAuthorizationPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.GetAuthorizationPolicyRequest.verify|verify} messages.
                     * @param message GetAuthorizationPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IGetAuthorizationPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAuthorizationPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.GetAuthorizationPolicyRequest.verify|verify} messages.
                     * @param message GetAuthorizationPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IGetAuthorizationPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAuthorizationPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAuthorizationPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.GetAuthorizationPolicyRequest;

                    /**
                     * Decodes a GetAuthorizationPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAuthorizationPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.GetAuthorizationPolicyRequest;

                    /**
                     * Verifies a GetAuthorizationPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAuthorizationPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAuthorizationPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.GetAuthorizationPolicyRequest;

                    /**
                     * Creates a plain object from a GetAuthorizationPolicyRequest message. Also converts values to other types if specified.
                     * @param message GetAuthorizationPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.GetAuthorizationPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAuthorizationPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetAuthorizationPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateAuthorizationPolicyRequest. */
                interface ICreateAuthorizationPolicyRequest {

                    /** CreateAuthorizationPolicyRequest parent */
                    parent?: (string|null);

                    /** CreateAuthorizationPolicyRequest authorizationPolicyId */
                    authorizationPolicyId?: (string|null);

                    /** CreateAuthorizationPolicyRequest authorizationPolicy */
                    authorizationPolicy?: (google.cloud.networksecurity.v1.IAuthorizationPolicy|null);
                }

                /** Represents a CreateAuthorizationPolicyRequest. */
                class CreateAuthorizationPolicyRequest implements ICreateAuthorizationPolicyRequest {

                    /**
                     * Constructs a new CreateAuthorizationPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.ICreateAuthorizationPolicyRequest);

                    /** CreateAuthorizationPolicyRequest parent. */
                    public parent: string;

                    /** CreateAuthorizationPolicyRequest authorizationPolicyId. */
                    public authorizationPolicyId: string;

                    /** CreateAuthorizationPolicyRequest authorizationPolicy. */
                    public authorizationPolicy?: (google.cloud.networksecurity.v1.IAuthorizationPolicy|null);

                    /**
                     * Creates a new CreateAuthorizationPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAuthorizationPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.ICreateAuthorizationPolicyRequest): google.cloud.networksecurity.v1.CreateAuthorizationPolicyRequest;

                    /**
                     * Encodes the specified CreateAuthorizationPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.CreateAuthorizationPolicyRequest.verify|verify} messages.
                     * @param message CreateAuthorizationPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.ICreateAuthorizationPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAuthorizationPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.CreateAuthorizationPolicyRequest.verify|verify} messages.
                     * @param message CreateAuthorizationPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.ICreateAuthorizationPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAuthorizationPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAuthorizationPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.CreateAuthorizationPolicyRequest;

                    /**
                     * Decodes a CreateAuthorizationPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAuthorizationPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.CreateAuthorizationPolicyRequest;

                    /**
                     * Verifies a CreateAuthorizationPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAuthorizationPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAuthorizationPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.CreateAuthorizationPolicyRequest;

                    /**
                     * Creates a plain object from a CreateAuthorizationPolicyRequest message. Also converts values to other types if specified.
                     * @param message CreateAuthorizationPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.CreateAuthorizationPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAuthorizationPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateAuthorizationPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateAuthorizationPolicyRequest. */
                interface IUpdateAuthorizationPolicyRequest {

                    /** UpdateAuthorizationPolicyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateAuthorizationPolicyRequest authorizationPolicy */
                    authorizationPolicy?: (google.cloud.networksecurity.v1.IAuthorizationPolicy|null);
                }

                /** Represents an UpdateAuthorizationPolicyRequest. */
                class UpdateAuthorizationPolicyRequest implements IUpdateAuthorizationPolicyRequest {

                    /**
                     * Constructs a new UpdateAuthorizationPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IUpdateAuthorizationPolicyRequest);

                    /** UpdateAuthorizationPolicyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateAuthorizationPolicyRequest authorizationPolicy. */
                    public authorizationPolicy?: (google.cloud.networksecurity.v1.IAuthorizationPolicy|null);

                    /**
                     * Creates a new UpdateAuthorizationPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateAuthorizationPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IUpdateAuthorizationPolicyRequest): google.cloud.networksecurity.v1.UpdateAuthorizationPolicyRequest;

                    /**
                     * Encodes the specified UpdateAuthorizationPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.UpdateAuthorizationPolicyRequest.verify|verify} messages.
                     * @param message UpdateAuthorizationPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IUpdateAuthorizationPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateAuthorizationPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.UpdateAuthorizationPolicyRequest.verify|verify} messages.
                     * @param message UpdateAuthorizationPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IUpdateAuthorizationPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateAuthorizationPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateAuthorizationPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.UpdateAuthorizationPolicyRequest;

                    /**
                     * Decodes an UpdateAuthorizationPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateAuthorizationPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.UpdateAuthorizationPolicyRequest;

                    /**
                     * Verifies an UpdateAuthorizationPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateAuthorizationPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateAuthorizationPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.UpdateAuthorizationPolicyRequest;

                    /**
                     * Creates a plain object from an UpdateAuthorizationPolicyRequest message. Also converts values to other types if specified.
                     * @param message UpdateAuthorizationPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.UpdateAuthorizationPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateAuthorizationPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateAuthorizationPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteAuthorizationPolicyRequest. */
                interface IDeleteAuthorizationPolicyRequest {

                    /** DeleteAuthorizationPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteAuthorizationPolicyRequest. */
                class DeleteAuthorizationPolicyRequest implements IDeleteAuthorizationPolicyRequest {

                    /**
                     * Constructs a new DeleteAuthorizationPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IDeleteAuthorizationPolicyRequest);

                    /** DeleteAuthorizationPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteAuthorizationPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAuthorizationPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IDeleteAuthorizationPolicyRequest): google.cloud.networksecurity.v1.DeleteAuthorizationPolicyRequest;

                    /**
                     * Encodes the specified DeleteAuthorizationPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.DeleteAuthorizationPolicyRequest.verify|verify} messages.
                     * @param message DeleteAuthorizationPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IDeleteAuthorizationPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAuthorizationPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.DeleteAuthorizationPolicyRequest.verify|verify} messages.
                     * @param message DeleteAuthorizationPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IDeleteAuthorizationPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAuthorizationPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAuthorizationPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.DeleteAuthorizationPolicyRequest;

                    /**
                     * Decodes a DeleteAuthorizationPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAuthorizationPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.DeleteAuthorizationPolicyRequest;

                    /**
                     * Verifies a DeleteAuthorizationPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAuthorizationPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAuthorizationPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.DeleteAuthorizationPolicyRequest;

                    /**
                     * Creates a plain object from a DeleteAuthorizationPolicyRequest message. Also converts values to other types if specified.
                     * @param message DeleteAuthorizationPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.DeleteAuthorizationPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAuthorizationPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteAuthorizationPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ClientTlsPolicy. */
                interface IClientTlsPolicy {

                    /** ClientTlsPolicy name */
                    name?: (string|null);

                    /** ClientTlsPolicy description */
                    description?: (string|null);

                    /** ClientTlsPolicy createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ClientTlsPolicy updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** ClientTlsPolicy labels */
                    labels?: ({ [k: string]: string }|null);

                    /** ClientTlsPolicy sni */
                    sni?: (string|null);

                    /** ClientTlsPolicy clientCertificate */
                    clientCertificate?: (google.cloud.networksecurity.v1.ICertificateProvider|null);

                    /** ClientTlsPolicy serverValidationCa */
                    serverValidationCa?: (google.cloud.networksecurity.v1.IValidationCA[]|null);
                }

                /** Represents a ClientTlsPolicy. */
                class ClientTlsPolicy implements IClientTlsPolicy {

                    /**
                     * Constructs a new ClientTlsPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IClientTlsPolicy);

                    /** ClientTlsPolicy name. */
                    public name: string;

                    /** ClientTlsPolicy description. */
                    public description: string;

                    /** ClientTlsPolicy createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ClientTlsPolicy updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** ClientTlsPolicy labels. */
                    public labels: { [k: string]: string };

                    /** ClientTlsPolicy sni. */
                    public sni: string;

                    /** ClientTlsPolicy clientCertificate. */
                    public clientCertificate?: (google.cloud.networksecurity.v1.ICertificateProvider|null);

                    /** ClientTlsPolicy serverValidationCa. */
                    public serverValidationCa: google.cloud.networksecurity.v1.IValidationCA[];

                    /**
                     * Creates a new ClientTlsPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientTlsPolicy instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IClientTlsPolicy): google.cloud.networksecurity.v1.ClientTlsPolicy;

                    /**
                     * Encodes the specified ClientTlsPolicy message. Does not implicitly {@link google.cloud.networksecurity.v1.ClientTlsPolicy.verify|verify} messages.
                     * @param message ClientTlsPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IClientTlsPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClientTlsPolicy message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.ClientTlsPolicy.verify|verify} messages.
                     * @param message ClientTlsPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IClientTlsPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClientTlsPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClientTlsPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.ClientTlsPolicy;

                    /**
                     * Decodes a ClientTlsPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClientTlsPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.ClientTlsPolicy;

                    /**
                     * Verifies a ClientTlsPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClientTlsPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClientTlsPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.ClientTlsPolicy;

                    /**
                     * Creates a plain object from a ClientTlsPolicy message. Also converts values to other types if specified.
                     * @param message ClientTlsPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.ClientTlsPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClientTlsPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ClientTlsPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListClientTlsPoliciesRequest. */
                interface IListClientTlsPoliciesRequest {

                    /** ListClientTlsPoliciesRequest parent */
                    parent?: (string|null);

                    /** ListClientTlsPoliciesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListClientTlsPoliciesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListClientTlsPoliciesRequest. */
                class ListClientTlsPoliciesRequest implements IListClientTlsPoliciesRequest {

                    /**
                     * Constructs a new ListClientTlsPoliciesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IListClientTlsPoliciesRequest);

                    /** ListClientTlsPoliciesRequest parent. */
                    public parent: string;

                    /** ListClientTlsPoliciesRequest pageSize. */
                    public pageSize: number;

                    /** ListClientTlsPoliciesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListClientTlsPoliciesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListClientTlsPoliciesRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IListClientTlsPoliciesRequest): google.cloud.networksecurity.v1.ListClientTlsPoliciesRequest;

                    /**
                     * Encodes the specified ListClientTlsPoliciesRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.ListClientTlsPoliciesRequest.verify|verify} messages.
                     * @param message ListClientTlsPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IListClientTlsPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListClientTlsPoliciesRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.ListClientTlsPoliciesRequest.verify|verify} messages.
                     * @param message ListClientTlsPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IListClientTlsPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListClientTlsPoliciesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListClientTlsPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.ListClientTlsPoliciesRequest;

                    /**
                     * Decodes a ListClientTlsPoliciesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListClientTlsPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.ListClientTlsPoliciesRequest;

                    /**
                     * Verifies a ListClientTlsPoliciesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListClientTlsPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListClientTlsPoliciesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.ListClientTlsPoliciesRequest;

                    /**
                     * Creates a plain object from a ListClientTlsPoliciesRequest message. Also converts values to other types if specified.
                     * @param message ListClientTlsPoliciesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.ListClientTlsPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListClientTlsPoliciesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListClientTlsPoliciesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListClientTlsPoliciesResponse. */
                interface IListClientTlsPoliciesResponse {

                    /** ListClientTlsPoliciesResponse clientTlsPolicies */
                    clientTlsPolicies?: (google.cloud.networksecurity.v1.IClientTlsPolicy[]|null);

                    /** ListClientTlsPoliciesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListClientTlsPoliciesResponse. */
                class ListClientTlsPoliciesResponse implements IListClientTlsPoliciesResponse {

                    /**
                     * Constructs a new ListClientTlsPoliciesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IListClientTlsPoliciesResponse);

                    /** ListClientTlsPoliciesResponse clientTlsPolicies. */
                    public clientTlsPolicies: google.cloud.networksecurity.v1.IClientTlsPolicy[];

                    /** ListClientTlsPoliciesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListClientTlsPoliciesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListClientTlsPoliciesResponse instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IListClientTlsPoliciesResponse): google.cloud.networksecurity.v1.ListClientTlsPoliciesResponse;

                    /**
                     * Encodes the specified ListClientTlsPoliciesResponse message. Does not implicitly {@link google.cloud.networksecurity.v1.ListClientTlsPoliciesResponse.verify|verify} messages.
                     * @param message ListClientTlsPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IListClientTlsPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListClientTlsPoliciesResponse message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.ListClientTlsPoliciesResponse.verify|verify} messages.
                     * @param message ListClientTlsPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IListClientTlsPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListClientTlsPoliciesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListClientTlsPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.ListClientTlsPoliciesResponse;

                    /**
                     * Decodes a ListClientTlsPoliciesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListClientTlsPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.ListClientTlsPoliciesResponse;

                    /**
                     * Verifies a ListClientTlsPoliciesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListClientTlsPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListClientTlsPoliciesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.ListClientTlsPoliciesResponse;

                    /**
                     * Creates a plain object from a ListClientTlsPoliciesResponse message. Also converts values to other types if specified.
                     * @param message ListClientTlsPoliciesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.ListClientTlsPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListClientTlsPoliciesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListClientTlsPoliciesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetClientTlsPolicyRequest. */
                interface IGetClientTlsPolicyRequest {

                    /** GetClientTlsPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetClientTlsPolicyRequest. */
                class GetClientTlsPolicyRequest implements IGetClientTlsPolicyRequest {

                    /**
                     * Constructs a new GetClientTlsPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IGetClientTlsPolicyRequest);

                    /** GetClientTlsPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetClientTlsPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetClientTlsPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IGetClientTlsPolicyRequest): google.cloud.networksecurity.v1.GetClientTlsPolicyRequest;

                    /**
                     * Encodes the specified GetClientTlsPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.GetClientTlsPolicyRequest.verify|verify} messages.
                     * @param message GetClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IGetClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetClientTlsPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.GetClientTlsPolicyRequest.verify|verify} messages.
                     * @param message GetClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IGetClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetClientTlsPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.GetClientTlsPolicyRequest;

                    /**
                     * Decodes a GetClientTlsPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.GetClientTlsPolicyRequest;

                    /**
                     * Verifies a GetClientTlsPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetClientTlsPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetClientTlsPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.GetClientTlsPolicyRequest;

                    /**
                     * Creates a plain object from a GetClientTlsPolicyRequest message. Also converts values to other types if specified.
                     * @param message GetClientTlsPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.GetClientTlsPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetClientTlsPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetClientTlsPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateClientTlsPolicyRequest. */
                interface ICreateClientTlsPolicyRequest {

                    /** CreateClientTlsPolicyRequest parent */
                    parent?: (string|null);

                    /** CreateClientTlsPolicyRequest clientTlsPolicyId */
                    clientTlsPolicyId?: (string|null);

                    /** CreateClientTlsPolicyRequest clientTlsPolicy */
                    clientTlsPolicy?: (google.cloud.networksecurity.v1.IClientTlsPolicy|null);
                }

                /** Represents a CreateClientTlsPolicyRequest. */
                class CreateClientTlsPolicyRequest implements ICreateClientTlsPolicyRequest {

                    /**
                     * Constructs a new CreateClientTlsPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.ICreateClientTlsPolicyRequest);

                    /** CreateClientTlsPolicyRequest parent. */
                    public parent: string;

                    /** CreateClientTlsPolicyRequest clientTlsPolicyId. */
                    public clientTlsPolicyId: string;

                    /** CreateClientTlsPolicyRequest clientTlsPolicy. */
                    public clientTlsPolicy?: (google.cloud.networksecurity.v1.IClientTlsPolicy|null);

                    /**
                     * Creates a new CreateClientTlsPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateClientTlsPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.ICreateClientTlsPolicyRequest): google.cloud.networksecurity.v1.CreateClientTlsPolicyRequest;

                    /**
                     * Encodes the specified CreateClientTlsPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.CreateClientTlsPolicyRequest.verify|verify} messages.
                     * @param message CreateClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.ICreateClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateClientTlsPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.CreateClientTlsPolicyRequest.verify|verify} messages.
                     * @param message CreateClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.ICreateClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateClientTlsPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.CreateClientTlsPolicyRequest;

                    /**
                     * Decodes a CreateClientTlsPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.CreateClientTlsPolicyRequest;

                    /**
                     * Verifies a CreateClientTlsPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateClientTlsPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateClientTlsPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.CreateClientTlsPolicyRequest;

                    /**
                     * Creates a plain object from a CreateClientTlsPolicyRequest message. Also converts values to other types if specified.
                     * @param message CreateClientTlsPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.CreateClientTlsPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateClientTlsPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateClientTlsPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateClientTlsPolicyRequest. */
                interface IUpdateClientTlsPolicyRequest {

                    /** UpdateClientTlsPolicyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateClientTlsPolicyRequest clientTlsPolicy */
                    clientTlsPolicy?: (google.cloud.networksecurity.v1.IClientTlsPolicy|null);
                }

                /** Represents an UpdateClientTlsPolicyRequest. */
                class UpdateClientTlsPolicyRequest implements IUpdateClientTlsPolicyRequest {

                    /**
                     * Constructs a new UpdateClientTlsPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IUpdateClientTlsPolicyRequest);

                    /** UpdateClientTlsPolicyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateClientTlsPolicyRequest clientTlsPolicy. */
                    public clientTlsPolicy?: (google.cloud.networksecurity.v1.IClientTlsPolicy|null);

                    /**
                     * Creates a new UpdateClientTlsPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateClientTlsPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IUpdateClientTlsPolicyRequest): google.cloud.networksecurity.v1.UpdateClientTlsPolicyRequest;

                    /**
                     * Encodes the specified UpdateClientTlsPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.UpdateClientTlsPolicyRequest.verify|verify} messages.
                     * @param message UpdateClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IUpdateClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateClientTlsPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.UpdateClientTlsPolicyRequest.verify|verify} messages.
                     * @param message UpdateClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IUpdateClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateClientTlsPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.UpdateClientTlsPolicyRequest;

                    /**
                     * Decodes an UpdateClientTlsPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.UpdateClientTlsPolicyRequest;

                    /**
                     * Verifies an UpdateClientTlsPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateClientTlsPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateClientTlsPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.UpdateClientTlsPolicyRequest;

                    /**
                     * Creates a plain object from an UpdateClientTlsPolicyRequest message. Also converts values to other types if specified.
                     * @param message UpdateClientTlsPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.UpdateClientTlsPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateClientTlsPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateClientTlsPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteClientTlsPolicyRequest. */
                interface IDeleteClientTlsPolicyRequest {

                    /** DeleteClientTlsPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteClientTlsPolicyRequest. */
                class DeleteClientTlsPolicyRequest implements IDeleteClientTlsPolicyRequest {

                    /**
                     * Constructs a new DeleteClientTlsPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IDeleteClientTlsPolicyRequest);

                    /** DeleteClientTlsPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteClientTlsPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteClientTlsPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IDeleteClientTlsPolicyRequest): google.cloud.networksecurity.v1.DeleteClientTlsPolicyRequest;

                    /**
                     * Encodes the specified DeleteClientTlsPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.DeleteClientTlsPolicyRequest.verify|verify} messages.
                     * @param message DeleteClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IDeleteClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteClientTlsPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.DeleteClientTlsPolicyRequest.verify|verify} messages.
                     * @param message DeleteClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IDeleteClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteClientTlsPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.DeleteClientTlsPolicyRequest;

                    /**
                     * Decodes a DeleteClientTlsPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.DeleteClientTlsPolicyRequest;

                    /**
                     * Verifies a DeleteClientTlsPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteClientTlsPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteClientTlsPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.DeleteClientTlsPolicyRequest;

                    /**
                     * Creates a plain object from a DeleteClientTlsPolicyRequest message. Also converts values to other types if specified.
                     * @param message DeleteClientTlsPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.DeleteClientTlsPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteClientTlsPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteClientTlsPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GrpcEndpoint. */
                interface IGrpcEndpoint {

                    /** GrpcEndpoint targetUri */
                    targetUri?: (string|null);
                }

                /** Represents a GrpcEndpoint. */
                class GrpcEndpoint implements IGrpcEndpoint {

                    /**
                     * Constructs a new GrpcEndpoint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IGrpcEndpoint);

                    /** GrpcEndpoint targetUri. */
                    public targetUri: string;

                    /**
                     * Creates a new GrpcEndpoint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GrpcEndpoint instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IGrpcEndpoint): google.cloud.networksecurity.v1.GrpcEndpoint;

                    /**
                     * Encodes the specified GrpcEndpoint message. Does not implicitly {@link google.cloud.networksecurity.v1.GrpcEndpoint.verify|verify} messages.
                     * @param message GrpcEndpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IGrpcEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GrpcEndpoint message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.GrpcEndpoint.verify|verify} messages.
                     * @param message GrpcEndpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IGrpcEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GrpcEndpoint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GrpcEndpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.GrpcEndpoint;

                    /**
                     * Decodes a GrpcEndpoint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GrpcEndpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.GrpcEndpoint;

                    /**
                     * Verifies a GrpcEndpoint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GrpcEndpoint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GrpcEndpoint
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.GrpcEndpoint;

                    /**
                     * Creates a plain object from a GrpcEndpoint message. Also converts values to other types if specified.
                     * @param message GrpcEndpoint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.GrpcEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GrpcEndpoint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GrpcEndpoint
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ValidationCA. */
                interface IValidationCA {

                    /** ValidationCA grpcEndpoint */
                    grpcEndpoint?: (google.cloud.networksecurity.v1.IGrpcEndpoint|null);

                    /** ValidationCA certificateProviderInstance */
                    certificateProviderInstance?: (google.cloud.networksecurity.v1.ICertificateProviderInstance|null);
                }

                /** Represents a ValidationCA. */
                class ValidationCA implements IValidationCA {

                    /**
                     * Constructs a new ValidationCA.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IValidationCA);

                    /** ValidationCA grpcEndpoint. */
                    public grpcEndpoint?: (google.cloud.networksecurity.v1.IGrpcEndpoint|null);

                    /** ValidationCA certificateProviderInstance. */
                    public certificateProviderInstance?: (google.cloud.networksecurity.v1.ICertificateProviderInstance|null);

                    /** ValidationCA type. */
                    public type?: ("grpcEndpoint"|"certificateProviderInstance");

                    /**
                     * Creates a new ValidationCA instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ValidationCA instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IValidationCA): google.cloud.networksecurity.v1.ValidationCA;

                    /**
                     * Encodes the specified ValidationCA message. Does not implicitly {@link google.cloud.networksecurity.v1.ValidationCA.verify|verify} messages.
                     * @param message ValidationCA message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IValidationCA, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ValidationCA message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.ValidationCA.verify|verify} messages.
                     * @param message ValidationCA message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IValidationCA, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ValidationCA message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ValidationCA
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.ValidationCA;

                    /**
                     * Decodes a ValidationCA message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ValidationCA
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.ValidationCA;

                    /**
                     * Verifies a ValidationCA message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ValidationCA message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ValidationCA
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.ValidationCA;

                    /**
                     * Creates a plain object from a ValidationCA message. Also converts values to other types if specified.
                     * @param message ValidationCA
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.ValidationCA, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ValidationCA to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ValidationCA
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CertificateProviderInstance. */
                interface ICertificateProviderInstance {

                    /** CertificateProviderInstance pluginInstance */
                    pluginInstance?: (string|null);
                }

                /** Represents a CertificateProviderInstance. */
                class CertificateProviderInstance implements ICertificateProviderInstance {

                    /**
                     * Constructs a new CertificateProviderInstance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.ICertificateProviderInstance);

                    /** CertificateProviderInstance pluginInstance. */
                    public pluginInstance: string;

                    /**
                     * Creates a new CertificateProviderInstance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CertificateProviderInstance instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.ICertificateProviderInstance): google.cloud.networksecurity.v1.CertificateProviderInstance;

                    /**
                     * Encodes the specified CertificateProviderInstance message. Does not implicitly {@link google.cloud.networksecurity.v1.CertificateProviderInstance.verify|verify} messages.
                     * @param message CertificateProviderInstance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.ICertificateProviderInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CertificateProviderInstance message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.CertificateProviderInstance.verify|verify} messages.
                     * @param message CertificateProviderInstance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.ICertificateProviderInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CertificateProviderInstance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CertificateProviderInstance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.CertificateProviderInstance;

                    /**
                     * Decodes a CertificateProviderInstance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CertificateProviderInstance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.CertificateProviderInstance;

                    /**
                     * Verifies a CertificateProviderInstance message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CertificateProviderInstance message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CertificateProviderInstance
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.CertificateProviderInstance;

                    /**
                     * Creates a plain object from a CertificateProviderInstance message. Also converts values to other types if specified.
                     * @param message CertificateProviderInstance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.CertificateProviderInstance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CertificateProviderInstance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CertificateProviderInstance
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CertificateProvider. */
                interface ICertificateProvider {

                    /** CertificateProvider grpcEndpoint */
                    grpcEndpoint?: (google.cloud.networksecurity.v1.IGrpcEndpoint|null);

                    /** CertificateProvider certificateProviderInstance */
                    certificateProviderInstance?: (google.cloud.networksecurity.v1.ICertificateProviderInstance|null);
                }

                /** Represents a CertificateProvider. */
                class CertificateProvider implements ICertificateProvider {

                    /**
                     * Constructs a new CertificateProvider.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.ICertificateProvider);

                    /** CertificateProvider grpcEndpoint. */
                    public grpcEndpoint?: (google.cloud.networksecurity.v1.IGrpcEndpoint|null);

                    /** CertificateProvider certificateProviderInstance. */
                    public certificateProviderInstance?: (google.cloud.networksecurity.v1.ICertificateProviderInstance|null);

                    /** CertificateProvider type. */
                    public type?: ("grpcEndpoint"|"certificateProviderInstance");

                    /**
                     * Creates a new CertificateProvider instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CertificateProvider instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.ICertificateProvider): google.cloud.networksecurity.v1.CertificateProvider;

                    /**
                     * Encodes the specified CertificateProvider message. Does not implicitly {@link google.cloud.networksecurity.v1.CertificateProvider.verify|verify} messages.
                     * @param message CertificateProvider message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.ICertificateProvider, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CertificateProvider message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.CertificateProvider.verify|verify} messages.
                     * @param message CertificateProvider message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.ICertificateProvider, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CertificateProvider message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CertificateProvider
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.CertificateProvider;

                    /**
                     * Decodes a CertificateProvider message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CertificateProvider
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.CertificateProvider;

                    /**
                     * Verifies a CertificateProvider message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CertificateProvider message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CertificateProvider
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.CertificateProvider;

                    /**
                     * Creates a plain object from a CertificateProvider message. Also converts values to other types if specified.
                     * @param message CertificateProvider
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.CertificateProvider, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CertificateProvider to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CertificateProvider
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
                    constructor(properties?: google.cloud.networksecurity.v1.IOperationMetadata);

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
                    public static create(properties?: google.cloud.networksecurity.v1.IOperationMetadata): google.cloud.networksecurity.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.networksecurity.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Represents a NetworkSecurity */
                class NetworkSecurity extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new NetworkSecurity service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new NetworkSecurity service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): NetworkSecurity;

                    /**
                     * Calls ListAuthorizationPolicies.
                     * @param request ListAuthorizationPoliciesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAuthorizationPoliciesResponse
                     */
                    public listAuthorizationPolicies(request: google.cloud.networksecurity.v1.IListAuthorizationPoliciesRequest, callback: google.cloud.networksecurity.v1.NetworkSecurity.ListAuthorizationPoliciesCallback): void;

                    /**
                     * Calls ListAuthorizationPolicies.
                     * @param request ListAuthorizationPoliciesRequest message or plain object
                     * @returns Promise
                     */
                    public listAuthorizationPolicies(request: google.cloud.networksecurity.v1.IListAuthorizationPoliciesRequest): Promise<google.cloud.networksecurity.v1.ListAuthorizationPoliciesResponse>;

                    /**
                     * Calls GetAuthorizationPolicy.
                     * @param request GetAuthorizationPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AuthorizationPolicy
                     */
                    public getAuthorizationPolicy(request: google.cloud.networksecurity.v1.IGetAuthorizationPolicyRequest, callback: google.cloud.networksecurity.v1.NetworkSecurity.GetAuthorizationPolicyCallback): void;

                    /**
                     * Calls GetAuthorizationPolicy.
                     * @param request GetAuthorizationPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getAuthorizationPolicy(request: google.cloud.networksecurity.v1.IGetAuthorizationPolicyRequest): Promise<google.cloud.networksecurity.v1.AuthorizationPolicy>;

                    /**
                     * Calls CreateAuthorizationPolicy.
                     * @param request CreateAuthorizationPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createAuthorizationPolicy(request: google.cloud.networksecurity.v1.ICreateAuthorizationPolicyRequest, callback: google.cloud.networksecurity.v1.NetworkSecurity.CreateAuthorizationPolicyCallback): void;

                    /**
                     * Calls CreateAuthorizationPolicy.
                     * @param request CreateAuthorizationPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public createAuthorizationPolicy(request: google.cloud.networksecurity.v1.ICreateAuthorizationPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateAuthorizationPolicy.
                     * @param request UpdateAuthorizationPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateAuthorizationPolicy(request: google.cloud.networksecurity.v1.IUpdateAuthorizationPolicyRequest, callback: google.cloud.networksecurity.v1.NetworkSecurity.UpdateAuthorizationPolicyCallback): void;

                    /**
                     * Calls UpdateAuthorizationPolicy.
                     * @param request UpdateAuthorizationPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public updateAuthorizationPolicy(request: google.cloud.networksecurity.v1.IUpdateAuthorizationPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteAuthorizationPolicy.
                     * @param request DeleteAuthorizationPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteAuthorizationPolicy(request: google.cloud.networksecurity.v1.IDeleteAuthorizationPolicyRequest, callback: google.cloud.networksecurity.v1.NetworkSecurity.DeleteAuthorizationPolicyCallback): void;

                    /**
                     * Calls DeleteAuthorizationPolicy.
                     * @param request DeleteAuthorizationPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAuthorizationPolicy(request: google.cloud.networksecurity.v1.IDeleteAuthorizationPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListServerTlsPolicies.
                     * @param request ListServerTlsPoliciesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListServerTlsPoliciesResponse
                     */
                    public listServerTlsPolicies(request: google.cloud.networksecurity.v1.IListServerTlsPoliciesRequest, callback: google.cloud.networksecurity.v1.NetworkSecurity.ListServerTlsPoliciesCallback): void;

                    /**
                     * Calls ListServerTlsPolicies.
                     * @param request ListServerTlsPoliciesRequest message or plain object
                     * @returns Promise
                     */
                    public listServerTlsPolicies(request: google.cloud.networksecurity.v1.IListServerTlsPoliciesRequest): Promise<google.cloud.networksecurity.v1.ListServerTlsPoliciesResponse>;

                    /**
                     * Calls GetServerTlsPolicy.
                     * @param request GetServerTlsPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ServerTlsPolicy
                     */
                    public getServerTlsPolicy(request: google.cloud.networksecurity.v1.IGetServerTlsPolicyRequest, callback: google.cloud.networksecurity.v1.NetworkSecurity.GetServerTlsPolicyCallback): void;

                    /**
                     * Calls GetServerTlsPolicy.
                     * @param request GetServerTlsPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getServerTlsPolicy(request: google.cloud.networksecurity.v1.IGetServerTlsPolicyRequest): Promise<google.cloud.networksecurity.v1.ServerTlsPolicy>;

                    /**
                     * Calls CreateServerTlsPolicy.
                     * @param request CreateServerTlsPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createServerTlsPolicy(request: google.cloud.networksecurity.v1.ICreateServerTlsPolicyRequest, callback: google.cloud.networksecurity.v1.NetworkSecurity.CreateServerTlsPolicyCallback): void;

                    /**
                     * Calls CreateServerTlsPolicy.
                     * @param request CreateServerTlsPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public createServerTlsPolicy(request: google.cloud.networksecurity.v1.ICreateServerTlsPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateServerTlsPolicy.
                     * @param request UpdateServerTlsPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateServerTlsPolicy(request: google.cloud.networksecurity.v1.IUpdateServerTlsPolicyRequest, callback: google.cloud.networksecurity.v1.NetworkSecurity.UpdateServerTlsPolicyCallback): void;

                    /**
                     * Calls UpdateServerTlsPolicy.
                     * @param request UpdateServerTlsPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public updateServerTlsPolicy(request: google.cloud.networksecurity.v1.IUpdateServerTlsPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteServerTlsPolicy.
                     * @param request DeleteServerTlsPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteServerTlsPolicy(request: google.cloud.networksecurity.v1.IDeleteServerTlsPolicyRequest, callback: google.cloud.networksecurity.v1.NetworkSecurity.DeleteServerTlsPolicyCallback): void;

                    /**
                     * Calls DeleteServerTlsPolicy.
                     * @param request DeleteServerTlsPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteServerTlsPolicy(request: google.cloud.networksecurity.v1.IDeleteServerTlsPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListClientTlsPolicies.
                     * @param request ListClientTlsPoliciesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListClientTlsPoliciesResponse
                     */
                    public listClientTlsPolicies(request: google.cloud.networksecurity.v1.IListClientTlsPoliciesRequest, callback: google.cloud.networksecurity.v1.NetworkSecurity.ListClientTlsPoliciesCallback): void;

                    /**
                     * Calls ListClientTlsPolicies.
                     * @param request ListClientTlsPoliciesRequest message or plain object
                     * @returns Promise
                     */
                    public listClientTlsPolicies(request: google.cloud.networksecurity.v1.IListClientTlsPoliciesRequest): Promise<google.cloud.networksecurity.v1.ListClientTlsPoliciesResponse>;

                    /**
                     * Calls GetClientTlsPolicy.
                     * @param request GetClientTlsPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ClientTlsPolicy
                     */
                    public getClientTlsPolicy(request: google.cloud.networksecurity.v1.IGetClientTlsPolicyRequest, callback: google.cloud.networksecurity.v1.NetworkSecurity.GetClientTlsPolicyCallback): void;

                    /**
                     * Calls GetClientTlsPolicy.
                     * @param request GetClientTlsPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getClientTlsPolicy(request: google.cloud.networksecurity.v1.IGetClientTlsPolicyRequest): Promise<google.cloud.networksecurity.v1.ClientTlsPolicy>;

                    /**
                     * Calls CreateClientTlsPolicy.
                     * @param request CreateClientTlsPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createClientTlsPolicy(request: google.cloud.networksecurity.v1.ICreateClientTlsPolicyRequest, callback: google.cloud.networksecurity.v1.NetworkSecurity.CreateClientTlsPolicyCallback): void;

                    /**
                     * Calls CreateClientTlsPolicy.
                     * @param request CreateClientTlsPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public createClientTlsPolicy(request: google.cloud.networksecurity.v1.ICreateClientTlsPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateClientTlsPolicy.
                     * @param request UpdateClientTlsPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateClientTlsPolicy(request: google.cloud.networksecurity.v1.IUpdateClientTlsPolicyRequest, callback: google.cloud.networksecurity.v1.NetworkSecurity.UpdateClientTlsPolicyCallback): void;

                    /**
                     * Calls UpdateClientTlsPolicy.
                     * @param request UpdateClientTlsPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public updateClientTlsPolicy(request: google.cloud.networksecurity.v1.IUpdateClientTlsPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteClientTlsPolicy.
                     * @param request DeleteClientTlsPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteClientTlsPolicy(request: google.cloud.networksecurity.v1.IDeleteClientTlsPolicyRequest, callback: google.cloud.networksecurity.v1.NetworkSecurity.DeleteClientTlsPolicyCallback): void;

                    /**
                     * Calls DeleteClientTlsPolicy.
                     * @param request DeleteClientTlsPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteClientTlsPolicy(request: google.cloud.networksecurity.v1.IDeleteClientTlsPolicyRequest): Promise<google.longrunning.Operation>;
                }

                namespace NetworkSecurity {

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.NetworkSecurity|listAuthorizationPolicies}.
                     * @param error Error, if any
                     * @param [response] ListAuthorizationPoliciesResponse
                     */
                    type ListAuthorizationPoliciesCallback = (error: (Error|null), response?: google.cloud.networksecurity.v1.ListAuthorizationPoliciesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.NetworkSecurity|getAuthorizationPolicy}.
                     * @param error Error, if any
                     * @param [response] AuthorizationPolicy
                     */
                    type GetAuthorizationPolicyCallback = (error: (Error|null), response?: google.cloud.networksecurity.v1.AuthorizationPolicy) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.NetworkSecurity|createAuthorizationPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateAuthorizationPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.NetworkSecurity|updateAuthorizationPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateAuthorizationPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.NetworkSecurity|deleteAuthorizationPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteAuthorizationPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.NetworkSecurity|listServerTlsPolicies}.
                     * @param error Error, if any
                     * @param [response] ListServerTlsPoliciesResponse
                     */
                    type ListServerTlsPoliciesCallback = (error: (Error|null), response?: google.cloud.networksecurity.v1.ListServerTlsPoliciesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.NetworkSecurity|getServerTlsPolicy}.
                     * @param error Error, if any
                     * @param [response] ServerTlsPolicy
                     */
                    type GetServerTlsPolicyCallback = (error: (Error|null), response?: google.cloud.networksecurity.v1.ServerTlsPolicy) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.NetworkSecurity|createServerTlsPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateServerTlsPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.NetworkSecurity|updateServerTlsPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateServerTlsPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.NetworkSecurity|deleteServerTlsPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteServerTlsPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.NetworkSecurity|listClientTlsPolicies}.
                     * @param error Error, if any
                     * @param [response] ListClientTlsPoliciesResponse
                     */
                    type ListClientTlsPoliciesCallback = (error: (Error|null), response?: google.cloud.networksecurity.v1.ListClientTlsPoliciesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.NetworkSecurity|getClientTlsPolicy}.
                     * @param error Error, if any
                     * @param [response] ClientTlsPolicy
                     */
                    type GetClientTlsPolicyCallback = (error: (Error|null), response?: google.cloud.networksecurity.v1.ClientTlsPolicy) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.NetworkSecurity|createClientTlsPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateClientTlsPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.NetworkSecurity|updateClientTlsPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateClientTlsPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1.NetworkSecurity|deleteClientTlsPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteClientTlsPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a ServerTlsPolicy. */
                interface IServerTlsPolicy {

                    /** ServerTlsPolicy name */
                    name?: (string|null);

                    /** ServerTlsPolicy description */
                    description?: (string|null);

                    /** ServerTlsPolicy createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ServerTlsPolicy updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** ServerTlsPolicy labels */
                    labels?: ({ [k: string]: string }|null);

                    /** ServerTlsPolicy allowOpen */
                    allowOpen?: (boolean|null);

                    /** ServerTlsPolicy serverCertificate */
                    serverCertificate?: (google.cloud.networksecurity.v1.ICertificateProvider|null);

                    /** ServerTlsPolicy mtlsPolicy */
                    mtlsPolicy?: (google.cloud.networksecurity.v1.ServerTlsPolicy.IMTLSPolicy|null);
                }

                /** Represents a ServerTlsPolicy. */
                class ServerTlsPolicy implements IServerTlsPolicy {

                    /**
                     * Constructs a new ServerTlsPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IServerTlsPolicy);

                    /** ServerTlsPolicy name. */
                    public name: string;

                    /** ServerTlsPolicy description. */
                    public description: string;

                    /** ServerTlsPolicy createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ServerTlsPolicy updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** ServerTlsPolicy labels. */
                    public labels: { [k: string]: string };

                    /** ServerTlsPolicy allowOpen. */
                    public allowOpen: boolean;

                    /** ServerTlsPolicy serverCertificate. */
                    public serverCertificate?: (google.cloud.networksecurity.v1.ICertificateProvider|null);

                    /** ServerTlsPolicy mtlsPolicy. */
                    public mtlsPolicy?: (google.cloud.networksecurity.v1.ServerTlsPolicy.IMTLSPolicy|null);

                    /**
                     * Creates a new ServerTlsPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServerTlsPolicy instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IServerTlsPolicy): google.cloud.networksecurity.v1.ServerTlsPolicy;

                    /**
                     * Encodes the specified ServerTlsPolicy message. Does not implicitly {@link google.cloud.networksecurity.v1.ServerTlsPolicy.verify|verify} messages.
                     * @param message ServerTlsPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IServerTlsPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServerTlsPolicy message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.ServerTlsPolicy.verify|verify} messages.
                     * @param message ServerTlsPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IServerTlsPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServerTlsPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServerTlsPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.ServerTlsPolicy;

                    /**
                     * Decodes a ServerTlsPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServerTlsPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.ServerTlsPolicy;

                    /**
                     * Verifies a ServerTlsPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServerTlsPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServerTlsPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.ServerTlsPolicy;

                    /**
                     * Creates a plain object from a ServerTlsPolicy message. Also converts values to other types if specified.
                     * @param message ServerTlsPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.ServerTlsPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServerTlsPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ServerTlsPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ServerTlsPolicy {

                    /** Properties of a MTLSPolicy. */
                    interface IMTLSPolicy {

                        /** MTLSPolicy clientValidationCa */
                        clientValidationCa?: (google.cloud.networksecurity.v1.IValidationCA[]|null);
                    }

                    /** Represents a MTLSPolicy. */
                    class MTLSPolicy implements IMTLSPolicy {

                        /**
                         * Constructs a new MTLSPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networksecurity.v1.ServerTlsPolicy.IMTLSPolicy);

                        /** MTLSPolicy clientValidationCa. */
                        public clientValidationCa: google.cloud.networksecurity.v1.IValidationCA[];

                        /**
                         * Creates a new MTLSPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MTLSPolicy instance
                         */
                        public static create(properties?: google.cloud.networksecurity.v1.ServerTlsPolicy.IMTLSPolicy): google.cloud.networksecurity.v1.ServerTlsPolicy.MTLSPolicy;

                        /**
                         * Encodes the specified MTLSPolicy message. Does not implicitly {@link google.cloud.networksecurity.v1.ServerTlsPolicy.MTLSPolicy.verify|verify} messages.
                         * @param message MTLSPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networksecurity.v1.ServerTlsPolicy.IMTLSPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MTLSPolicy message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.ServerTlsPolicy.MTLSPolicy.verify|verify} messages.
                         * @param message MTLSPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networksecurity.v1.ServerTlsPolicy.IMTLSPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MTLSPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MTLSPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.ServerTlsPolicy.MTLSPolicy;

                        /**
                         * Decodes a MTLSPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MTLSPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.ServerTlsPolicy.MTLSPolicy;

                        /**
                         * Verifies a MTLSPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MTLSPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MTLSPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.ServerTlsPolicy.MTLSPolicy;

                        /**
                         * Creates a plain object from a MTLSPolicy message. Also converts values to other types if specified.
                         * @param message MTLSPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networksecurity.v1.ServerTlsPolicy.MTLSPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MTLSPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MTLSPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a ListServerTlsPoliciesRequest. */
                interface IListServerTlsPoliciesRequest {

                    /** ListServerTlsPoliciesRequest parent */
                    parent?: (string|null);

                    /** ListServerTlsPoliciesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListServerTlsPoliciesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListServerTlsPoliciesRequest. */
                class ListServerTlsPoliciesRequest implements IListServerTlsPoliciesRequest {

                    /**
                     * Constructs a new ListServerTlsPoliciesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IListServerTlsPoliciesRequest);

                    /** ListServerTlsPoliciesRequest parent. */
                    public parent: string;

                    /** ListServerTlsPoliciesRequest pageSize. */
                    public pageSize: number;

                    /** ListServerTlsPoliciesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListServerTlsPoliciesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServerTlsPoliciesRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IListServerTlsPoliciesRequest): google.cloud.networksecurity.v1.ListServerTlsPoliciesRequest;

                    /**
                     * Encodes the specified ListServerTlsPoliciesRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.ListServerTlsPoliciesRequest.verify|verify} messages.
                     * @param message ListServerTlsPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IListServerTlsPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServerTlsPoliciesRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.ListServerTlsPoliciesRequest.verify|verify} messages.
                     * @param message ListServerTlsPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IListServerTlsPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServerTlsPoliciesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServerTlsPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.ListServerTlsPoliciesRequest;

                    /**
                     * Decodes a ListServerTlsPoliciesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServerTlsPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.ListServerTlsPoliciesRequest;

                    /**
                     * Verifies a ListServerTlsPoliciesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListServerTlsPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListServerTlsPoliciesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.ListServerTlsPoliciesRequest;

                    /**
                     * Creates a plain object from a ListServerTlsPoliciesRequest message. Also converts values to other types if specified.
                     * @param message ListServerTlsPoliciesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.ListServerTlsPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServerTlsPoliciesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListServerTlsPoliciesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListServerTlsPoliciesResponse. */
                interface IListServerTlsPoliciesResponse {

                    /** ListServerTlsPoliciesResponse serverTlsPolicies */
                    serverTlsPolicies?: (google.cloud.networksecurity.v1.IServerTlsPolicy[]|null);

                    /** ListServerTlsPoliciesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListServerTlsPoliciesResponse. */
                class ListServerTlsPoliciesResponse implements IListServerTlsPoliciesResponse {

                    /**
                     * Constructs a new ListServerTlsPoliciesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IListServerTlsPoliciesResponse);

                    /** ListServerTlsPoliciesResponse serverTlsPolicies. */
                    public serverTlsPolicies: google.cloud.networksecurity.v1.IServerTlsPolicy[];

                    /** ListServerTlsPoliciesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListServerTlsPoliciesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServerTlsPoliciesResponse instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IListServerTlsPoliciesResponse): google.cloud.networksecurity.v1.ListServerTlsPoliciesResponse;

                    /**
                     * Encodes the specified ListServerTlsPoliciesResponse message. Does not implicitly {@link google.cloud.networksecurity.v1.ListServerTlsPoliciesResponse.verify|verify} messages.
                     * @param message ListServerTlsPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IListServerTlsPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServerTlsPoliciesResponse message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.ListServerTlsPoliciesResponse.verify|verify} messages.
                     * @param message ListServerTlsPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IListServerTlsPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServerTlsPoliciesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServerTlsPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.ListServerTlsPoliciesResponse;

                    /**
                     * Decodes a ListServerTlsPoliciesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServerTlsPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.ListServerTlsPoliciesResponse;

                    /**
                     * Verifies a ListServerTlsPoliciesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListServerTlsPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListServerTlsPoliciesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.ListServerTlsPoliciesResponse;

                    /**
                     * Creates a plain object from a ListServerTlsPoliciesResponse message. Also converts values to other types if specified.
                     * @param message ListServerTlsPoliciesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.ListServerTlsPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServerTlsPoliciesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListServerTlsPoliciesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetServerTlsPolicyRequest. */
                interface IGetServerTlsPolicyRequest {

                    /** GetServerTlsPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetServerTlsPolicyRequest. */
                class GetServerTlsPolicyRequest implements IGetServerTlsPolicyRequest {

                    /**
                     * Constructs a new GetServerTlsPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IGetServerTlsPolicyRequest);

                    /** GetServerTlsPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetServerTlsPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetServerTlsPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IGetServerTlsPolicyRequest): google.cloud.networksecurity.v1.GetServerTlsPolicyRequest;

                    /**
                     * Encodes the specified GetServerTlsPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.GetServerTlsPolicyRequest.verify|verify} messages.
                     * @param message GetServerTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IGetServerTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetServerTlsPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.GetServerTlsPolicyRequest.verify|verify} messages.
                     * @param message GetServerTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IGetServerTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetServerTlsPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetServerTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.GetServerTlsPolicyRequest;

                    /**
                     * Decodes a GetServerTlsPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetServerTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.GetServerTlsPolicyRequest;

                    /**
                     * Verifies a GetServerTlsPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetServerTlsPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetServerTlsPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.GetServerTlsPolicyRequest;

                    /**
                     * Creates a plain object from a GetServerTlsPolicyRequest message. Also converts values to other types if specified.
                     * @param message GetServerTlsPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.GetServerTlsPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetServerTlsPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetServerTlsPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateServerTlsPolicyRequest. */
                interface ICreateServerTlsPolicyRequest {

                    /** CreateServerTlsPolicyRequest parent */
                    parent?: (string|null);

                    /** CreateServerTlsPolicyRequest serverTlsPolicyId */
                    serverTlsPolicyId?: (string|null);

                    /** CreateServerTlsPolicyRequest serverTlsPolicy */
                    serverTlsPolicy?: (google.cloud.networksecurity.v1.IServerTlsPolicy|null);
                }

                /** Represents a CreateServerTlsPolicyRequest. */
                class CreateServerTlsPolicyRequest implements ICreateServerTlsPolicyRequest {

                    /**
                     * Constructs a new CreateServerTlsPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.ICreateServerTlsPolicyRequest);

                    /** CreateServerTlsPolicyRequest parent. */
                    public parent: string;

                    /** CreateServerTlsPolicyRequest serverTlsPolicyId. */
                    public serverTlsPolicyId: string;

                    /** CreateServerTlsPolicyRequest serverTlsPolicy. */
                    public serverTlsPolicy?: (google.cloud.networksecurity.v1.IServerTlsPolicy|null);

                    /**
                     * Creates a new CreateServerTlsPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateServerTlsPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.ICreateServerTlsPolicyRequest): google.cloud.networksecurity.v1.CreateServerTlsPolicyRequest;

                    /**
                     * Encodes the specified CreateServerTlsPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.CreateServerTlsPolicyRequest.verify|verify} messages.
                     * @param message CreateServerTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.ICreateServerTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateServerTlsPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.CreateServerTlsPolicyRequest.verify|verify} messages.
                     * @param message CreateServerTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.ICreateServerTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateServerTlsPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateServerTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.CreateServerTlsPolicyRequest;

                    /**
                     * Decodes a CreateServerTlsPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateServerTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.CreateServerTlsPolicyRequest;

                    /**
                     * Verifies a CreateServerTlsPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateServerTlsPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateServerTlsPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.CreateServerTlsPolicyRequest;

                    /**
                     * Creates a plain object from a CreateServerTlsPolicyRequest message. Also converts values to other types if specified.
                     * @param message CreateServerTlsPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.CreateServerTlsPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateServerTlsPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateServerTlsPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateServerTlsPolicyRequest. */
                interface IUpdateServerTlsPolicyRequest {

                    /** UpdateServerTlsPolicyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateServerTlsPolicyRequest serverTlsPolicy */
                    serverTlsPolicy?: (google.cloud.networksecurity.v1.IServerTlsPolicy|null);
                }

                /** Represents an UpdateServerTlsPolicyRequest. */
                class UpdateServerTlsPolicyRequest implements IUpdateServerTlsPolicyRequest {

                    /**
                     * Constructs a new UpdateServerTlsPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IUpdateServerTlsPolicyRequest);

                    /** UpdateServerTlsPolicyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateServerTlsPolicyRequest serverTlsPolicy. */
                    public serverTlsPolicy?: (google.cloud.networksecurity.v1.IServerTlsPolicy|null);

                    /**
                     * Creates a new UpdateServerTlsPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateServerTlsPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IUpdateServerTlsPolicyRequest): google.cloud.networksecurity.v1.UpdateServerTlsPolicyRequest;

                    /**
                     * Encodes the specified UpdateServerTlsPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.UpdateServerTlsPolicyRequest.verify|verify} messages.
                     * @param message UpdateServerTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IUpdateServerTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateServerTlsPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.UpdateServerTlsPolicyRequest.verify|verify} messages.
                     * @param message UpdateServerTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IUpdateServerTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateServerTlsPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateServerTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.UpdateServerTlsPolicyRequest;

                    /**
                     * Decodes an UpdateServerTlsPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateServerTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.UpdateServerTlsPolicyRequest;

                    /**
                     * Verifies an UpdateServerTlsPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateServerTlsPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateServerTlsPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.UpdateServerTlsPolicyRequest;

                    /**
                     * Creates a plain object from an UpdateServerTlsPolicyRequest message. Also converts values to other types if specified.
                     * @param message UpdateServerTlsPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.UpdateServerTlsPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateServerTlsPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateServerTlsPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteServerTlsPolicyRequest. */
                interface IDeleteServerTlsPolicyRequest {

                    /** DeleteServerTlsPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteServerTlsPolicyRequest. */
                class DeleteServerTlsPolicyRequest implements IDeleteServerTlsPolicyRequest {

                    /**
                     * Constructs a new DeleteServerTlsPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1.IDeleteServerTlsPolicyRequest);

                    /** DeleteServerTlsPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteServerTlsPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteServerTlsPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1.IDeleteServerTlsPolicyRequest): google.cloud.networksecurity.v1.DeleteServerTlsPolicyRequest;

                    /**
                     * Encodes the specified DeleteServerTlsPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1.DeleteServerTlsPolicyRequest.verify|verify} messages.
                     * @param message DeleteServerTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1.IDeleteServerTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteServerTlsPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1.DeleteServerTlsPolicyRequest.verify|verify} messages.
                     * @param message DeleteServerTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1.IDeleteServerTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteServerTlsPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteServerTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1.DeleteServerTlsPolicyRequest;

                    /**
                     * Decodes a DeleteServerTlsPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteServerTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1.DeleteServerTlsPolicyRequest;

                    /**
                     * Verifies a DeleteServerTlsPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteServerTlsPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteServerTlsPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1.DeleteServerTlsPolicyRequest;

                    /**
                     * Creates a plain object from a DeleteServerTlsPolicyRequest message. Also converts values to other types if specified.
                     * @param message DeleteServerTlsPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1.DeleteServerTlsPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteServerTlsPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteServerTlsPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Namespace v1alpha1. */
            namespace v1alpha1 {

                /** Properties of a ClientTlsPolicy. */
                interface IClientTlsPolicy {

                    /** ClientTlsPolicy name */
                    name?: (string|null);

                    /** ClientTlsPolicy description */
                    description?: (string|null);

                    /** ClientTlsPolicy createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ClientTlsPolicy updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** ClientTlsPolicy labels */
                    labels?: ({ [k: string]: string }|null);

                    /** ClientTlsPolicy sni */
                    sni?: (string|null);

                    /** ClientTlsPolicy clientCertificate */
                    clientCertificate?: (google.cloud.networksecurity.v1alpha1.ICertificateProvider|null);

                    /** ClientTlsPolicy serverValidationCa */
                    serverValidationCa?: (google.cloud.networksecurity.v1alpha1.IValidationCA[]|null);
                }

                /** Represents a ClientTlsPolicy. */
                class ClientTlsPolicy implements IClientTlsPolicy {

                    /**
                     * Constructs a new ClientTlsPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1alpha1.IClientTlsPolicy);

                    /** ClientTlsPolicy name. */
                    public name: string;

                    /** ClientTlsPolicy description. */
                    public description: string;

                    /** ClientTlsPolicy createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ClientTlsPolicy updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** ClientTlsPolicy labels. */
                    public labels: { [k: string]: string };

                    /** ClientTlsPolicy sni. */
                    public sni: string;

                    /** ClientTlsPolicy clientCertificate. */
                    public clientCertificate?: (google.cloud.networksecurity.v1alpha1.ICertificateProvider|null);

                    /** ClientTlsPolicy serverValidationCa. */
                    public serverValidationCa: google.cloud.networksecurity.v1alpha1.IValidationCA[];

                    /**
                     * Creates a new ClientTlsPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientTlsPolicy instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1alpha1.IClientTlsPolicy): google.cloud.networksecurity.v1alpha1.ClientTlsPolicy;

                    /**
                     * Encodes the specified ClientTlsPolicy message. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.ClientTlsPolicy.verify|verify} messages.
                     * @param message ClientTlsPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1alpha1.IClientTlsPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClientTlsPolicy message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.ClientTlsPolicy.verify|verify} messages.
                     * @param message ClientTlsPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1alpha1.IClientTlsPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClientTlsPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClientTlsPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1alpha1.ClientTlsPolicy;

                    /**
                     * Decodes a ClientTlsPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClientTlsPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1alpha1.ClientTlsPolicy;

                    /**
                     * Verifies a ClientTlsPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClientTlsPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClientTlsPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1alpha1.ClientTlsPolicy;

                    /**
                     * Creates a plain object from a ClientTlsPolicy message. Also converts values to other types if specified.
                     * @param message ClientTlsPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1alpha1.ClientTlsPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClientTlsPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ClientTlsPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListClientTlsPoliciesRequest. */
                interface IListClientTlsPoliciesRequest {

                    /** ListClientTlsPoliciesRequest parent */
                    parent?: (string|null);

                    /** ListClientTlsPoliciesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListClientTlsPoliciesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListClientTlsPoliciesRequest. */
                class ListClientTlsPoliciesRequest implements IListClientTlsPoliciesRequest {

                    /**
                     * Constructs a new ListClientTlsPoliciesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1alpha1.IListClientTlsPoliciesRequest);

                    /** ListClientTlsPoliciesRequest parent. */
                    public parent: string;

                    /** ListClientTlsPoliciesRequest pageSize. */
                    public pageSize: number;

                    /** ListClientTlsPoliciesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListClientTlsPoliciesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListClientTlsPoliciesRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1alpha1.IListClientTlsPoliciesRequest): google.cloud.networksecurity.v1alpha1.ListClientTlsPoliciesRequest;

                    /**
                     * Encodes the specified ListClientTlsPoliciesRequest message. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.ListClientTlsPoliciesRequest.verify|verify} messages.
                     * @param message ListClientTlsPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1alpha1.IListClientTlsPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListClientTlsPoliciesRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.ListClientTlsPoliciesRequest.verify|verify} messages.
                     * @param message ListClientTlsPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1alpha1.IListClientTlsPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListClientTlsPoliciesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListClientTlsPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1alpha1.ListClientTlsPoliciesRequest;

                    /**
                     * Decodes a ListClientTlsPoliciesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListClientTlsPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1alpha1.ListClientTlsPoliciesRequest;

                    /**
                     * Verifies a ListClientTlsPoliciesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListClientTlsPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListClientTlsPoliciesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1alpha1.ListClientTlsPoliciesRequest;

                    /**
                     * Creates a plain object from a ListClientTlsPoliciesRequest message. Also converts values to other types if specified.
                     * @param message ListClientTlsPoliciesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1alpha1.ListClientTlsPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListClientTlsPoliciesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListClientTlsPoliciesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListClientTlsPoliciesResponse. */
                interface IListClientTlsPoliciesResponse {

                    /** ListClientTlsPoliciesResponse clientTlsPolicies */
                    clientTlsPolicies?: (google.cloud.networksecurity.v1alpha1.IClientTlsPolicy[]|null);

                    /** ListClientTlsPoliciesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListClientTlsPoliciesResponse. */
                class ListClientTlsPoliciesResponse implements IListClientTlsPoliciesResponse {

                    /**
                     * Constructs a new ListClientTlsPoliciesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1alpha1.IListClientTlsPoliciesResponse);

                    /** ListClientTlsPoliciesResponse clientTlsPolicies. */
                    public clientTlsPolicies: google.cloud.networksecurity.v1alpha1.IClientTlsPolicy[];

                    /** ListClientTlsPoliciesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListClientTlsPoliciesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListClientTlsPoliciesResponse instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1alpha1.IListClientTlsPoliciesResponse): google.cloud.networksecurity.v1alpha1.ListClientTlsPoliciesResponse;

                    /**
                     * Encodes the specified ListClientTlsPoliciesResponse message. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.ListClientTlsPoliciesResponse.verify|verify} messages.
                     * @param message ListClientTlsPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1alpha1.IListClientTlsPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListClientTlsPoliciesResponse message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.ListClientTlsPoliciesResponse.verify|verify} messages.
                     * @param message ListClientTlsPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1alpha1.IListClientTlsPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListClientTlsPoliciesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListClientTlsPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1alpha1.ListClientTlsPoliciesResponse;

                    /**
                     * Decodes a ListClientTlsPoliciesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListClientTlsPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1alpha1.ListClientTlsPoliciesResponse;

                    /**
                     * Verifies a ListClientTlsPoliciesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListClientTlsPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListClientTlsPoliciesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1alpha1.ListClientTlsPoliciesResponse;

                    /**
                     * Creates a plain object from a ListClientTlsPoliciesResponse message. Also converts values to other types if specified.
                     * @param message ListClientTlsPoliciesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1alpha1.ListClientTlsPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListClientTlsPoliciesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListClientTlsPoliciesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetClientTlsPolicyRequest. */
                interface IGetClientTlsPolicyRequest {

                    /** GetClientTlsPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetClientTlsPolicyRequest. */
                class GetClientTlsPolicyRequest implements IGetClientTlsPolicyRequest {

                    /**
                     * Constructs a new GetClientTlsPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1alpha1.IGetClientTlsPolicyRequest);

                    /** GetClientTlsPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetClientTlsPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetClientTlsPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1alpha1.IGetClientTlsPolicyRequest): google.cloud.networksecurity.v1alpha1.GetClientTlsPolicyRequest;

                    /**
                     * Encodes the specified GetClientTlsPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.GetClientTlsPolicyRequest.verify|verify} messages.
                     * @param message GetClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1alpha1.IGetClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetClientTlsPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.GetClientTlsPolicyRequest.verify|verify} messages.
                     * @param message GetClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1alpha1.IGetClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetClientTlsPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1alpha1.GetClientTlsPolicyRequest;

                    /**
                     * Decodes a GetClientTlsPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1alpha1.GetClientTlsPolicyRequest;

                    /**
                     * Verifies a GetClientTlsPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetClientTlsPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetClientTlsPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1alpha1.GetClientTlsPolicyRequest;

                    /**
                     * Creates a plain object from a GetClientTlsPolicyRequest message. Also converts values to other types if specified.
                     * @param message GetClientTlsPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1alpha1.GetClientTlsPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetClientTlsPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetClientTlsPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateClientTlsPolicyRequest. */
                interface ICreateClientTlsPolicyRequest {

                    /** CreateClientTlsPolicyRequest parent */
                    parent?: (string|null);

                    /** CreateClientTlsPolicyRequest clientTlsPolicyId */
                    clientTlsPolicyId?: (string|null);

                    /** CreateClientTlsPolicyRequest clientTlsPolicy */
                    clientTlsPolicy?: (google.cloud.networksecurity.v1alpha1.IClientTlsPolicy|null);
                }

                /** Represents a CreateClientTlsPolicyRequest. */
                class CreateClientTlsPolicyRequest implements ICreateClientTlsPolicyRequest {

                    /**
                     * Constructs a new CreateClientTlsPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1alpha1.ICreateClientTlsPolicyRequest);

                    /** CreateClientTlsPolicyRequest parent. */
                    public parent: string;

                    /** CreateClientTlsPolicyRequest clientTlsPolicyId. */
                    public clientTlsPolicyId: string;

                    /** CreateClientTlsPolicyRequest clientTlsPolicy. */
                    public clientTlsPolicy?: (google.cloud.networksecurity.v1alpha1.IClientTlsPolicy|null);

                    /**
                     * Creates a new CreateClientTlsPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateClientTlsPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1alpha1.ICreateClientTlsPolicyRequest): google.cloud.networksecurity.v1alpha1.CreateClientTlsPolicyRequest;

                    /**
                     * Encodes the specified CreateClientTlsPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.CreateClientTlsPolicyRequest.verify|verify} messages.
                     * @param message CreateClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1alpha1.ICreateClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateClientTlsPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.CreateClientTlsPolicyRequest.verify|verify} messages.
                     * @param message CreateClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1alpha1.ICreateClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateClientTlsPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1alpha1.CreateClientTlsPolicyRequest;

                    /**
                     * Decodes a CreateClientTlsPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1alpha1.CreateClientTlsPolicyRequest;

                    /**
                     * Verifies a CreateClientTlsPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateClientTlsPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateClientTlsPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1alpha1.CreateClientTlsPolicyRequest;

                    /**
                     * Creates a plain object from a CreateClientTlsPolicyRequest message. Also converts values to other types if specified.
                     * @param message CreateClientTlsPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1alpha1.CreateClientTlsPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateClientTlsPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateClientTlsPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateClientTlsPolicyRequest. */
                interface IUpdateClientTlsPolicyRequest {

                    /** UpdateClientTlsPolicyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateClientTlsPolicyRequest clientTlsPolicy */
                    clientTlsPolicy?: (google.cloud.networksecurity.v1alpha1.IClientTlsPolicy|null);
                }

                /** Represents an UpdateClientTlsPolicyRequest. */
                class UpdateClientTlsPolicyRequest implements IUpdateClientTlsPolicyRequest {

                    /**
                     * Constructs a new UpdateClientTlsPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1alpha1.IUpdateClientTlsPolicyRequest);

                    /** UpdateClientTlsPolicyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateClientTlsPolicyRequest clientTlsPolicy. */
                    public clientTlsPolicy?: (google.cloud.networksecurity.v1alpha1.IClientTlsPolicy|null);

                    /**
                     * Creates a new UpdateClientTlsPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateClientTlsPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1alpha1.IUpdateClientTlsPolicyRequest): google.cloud.networksecurity.v1alpha1.UpdateClientTlsPolicyRequest;

                    /**
                     * Encodes the specified UpdateClientTlsPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.UpdateClientTlsPolicyRequest.verify|verify} messages.
                     * @param message UpdateClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1alpha1.IUpdateClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateClientTlsPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.UpdateClientTlsPolicyRequest.verify|verify} messages.
                     * @param message UpdateClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1alpha1.IUpdateClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateClientTlsPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1alpha1.UpdateClientTlsPolicyRequest;

                    /**
                     * Decodes an UpdateClientTlsPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1alpha1.UpdateClientTlsPolicyRequest;

                    /**
                     * Verifies an UpdateClientTlsPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateClientTlsPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateClientTlsPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1alpha1.UpdateClientTlsPolicyRequest;

                    /**
                     * Creates a plain object from an UpdateClientTlsPolicyRequest message. Also converts values to other types if specified.
                     * @param message UpdateClientTlsPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1alpha1.UpdateClientTlsPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateClientTlsPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateClientTlsPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteClientTlsPolicyRequest. */
                interface IDeleteClientTlsPolicyRequest {

                    /** DeleteClientTlsPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteClientTlsPolicyRequest. */
                class DeleteClientTlsPolicyRequest implements IDeleteClientTlsPolicyRequest {

                    /**
                     * Constructs a new DeleteClientTlsPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1alpha1.IDeleteClientTlsPolicyRequest);

                    /** DeleteClientTlsPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteClientTlsPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteClientTlsPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1alpha1.IDeleteClientTlsPolicyRequest): google.cloud.networksecurity.v1alpha1.DeleteClientTlsPolicyRequest;

                    /**
                     * Encodes the specified DeleteClientTlsPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.DeleteClientTlsPolicyRequest.verify|verify} messages.
                     * @param message DeleteClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1alpha1.IDeleteClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteClientTlsPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.DeleteClientTlsPolicyRequest.verify|verify} messages.
                     * @param message DeleteClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1alpha1.IDeleteClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteClientTlsPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1alpha1.DeleteClientTlsPolicyRequest;

                    /**
                     * Decodes a DeleteClientTlsPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1alpha1.DeleteClientTlsPolicyRequest;

                    /**
                     * Verifies a DeleteClientTlsPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteClientTlsPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteClientTlsPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1alpha1.DeleteClientTlsPolicyRequest;

                    /**
                     * Creates a plain object from a DeleteClientTlsPolicyRequest message. Also converts values to other types if specified.
                     * @param message DeleteClientTlsPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1alpha1.DeleteClientTlsPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteClientTlsPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteClientTlsPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GrpcEndpoint. */
                interface IGrpcEndpoint {

                    /** GrpcEndpoint targetUri */
                    targetUri?: (string|null);
                }

                /** Represents a GrpcEndpoint. */
                class GrpcEndpoint implements IGrpcEndpoint {

                    /**
                     * Constructs a new GrpcEndpoint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1alpha1.IGrpcEndpoint);

                    /** GrpcEndpoint targetUri. */
                    public targetUri: string;

                    /**
                     * Creates a new GrpcEndpoint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GrpcEndpoint instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1alpha1.IGrpcEndpoint): google.cloud.networksecurity.v1alpha1.GrpcEndpoint;

                    /**
                     * Encodes the specified GrpcEndpoint message. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.GrpcEndpoint.verify|verify} messages.
                     * @param message GrpcEndpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1alpha1.IGrpcEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GrpcEndpoint message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.GrpcEndpoint.verify|verify} messages.
                     * @param message GrpcEndpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1alpha1.IGrpcEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GrpcEndpoint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GrpcEndpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1alpha1.GrpcEndpoint;

                    /**
                     * Decodes a GrpcEndpoint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GrpcEndpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1alpha1.GrpcEndpoint;

                    /**
                     * Verifies a GrpcEndpoint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GrpcEndpoint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GrpcEndpoint
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1alpha1.GrpcEndpoint;

                    /**
                     * Creates a plain object from a GrpcEndpoint message. Also converts values to other types if specified.
                     * @param message GrpcEndpoint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1alpha1.GrpcEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GrpcEndpoint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GrpcEndpoint
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ValidationCA. */
                interface IValidationCA {

                    /** ValidationCA caCertPath */
                    caCertPath?: (string|null);

                    /** ValidationCA grpcEndpoint */
                    grpcEndpoint?: (google.cloud.networksecurity.v1alpha1.IGrpcEndpoint|null);

                    /** ValidationCA certificateProviderInstance */
                    certificateProviderInstance?: (google.cloud.networksecurity.v1alpha1.ICertificateProviderInstance|null);
                }

                /** Represents a ValidationCA. */
                class ValidationCA implements IValidationCA {

                    /**
                     * Constructs a new ValidationCA.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1alpha1.IValidationCA);

                    /** ValidationCA caCertPath. */
                    public caCertPath?: (string|null);

                    /** ValidationCA grpcEndpoint. */
                    public grpcEndpoint?: (google.cloud.networksecurity.v1alpha1.IGrpcEndpoint|null);

                    /** ValidationCA certificateProviderInstance. */
                    public certificateProviderInstance?: (google.cloud.networksecurity.v1alpha1.ICertificateProviderInstance|null);

                    /** ValidationCA type. */
                    public type?: ("caCertPath"|"grpcEndpoint"|"certificateProviderInstance");

                    /**
                     * Creates a new ValidationCA instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ValidationCA instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1alpha1.IValidationCA): google.cloud.networksecurity.v1alpha1.ValidationCA;

                    /**
                     * Encodes the specified ValidationCA message. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.ValidationCA.verify|verify} messages.
                     * @param message ValidationCA message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1alpha1.IValidationCA, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ValidationCA message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.ValidationCA.verify|verify} messages.
                     * @param message ValidationCA message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1alpha1.IValidationCA, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ValidationCA message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ValidationCA
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1alpha1.ValidationCA;

                    /**
                     * Decodes a ValidationCA message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ValidationCA
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1alpha1.ValidationCA;

                    /**
                     * Verifies a ValidationCA message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ValidationCA message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ValidationCA
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1alpha1.ValidationCA;

                    /**
                     * Creates a plain object from a ValidationCA message. Also converts values to other types if specified.
                     * @param message ValidationCA
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1alpha1.ValidationCA, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ValidationCA to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ValidationCA
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CertificateProviderInstance. */
                interface ICertificateProviderInstance {

                    /** CertificateProviderInstance pluginInstance */
                    pluginInstance?: (string|null);
                }

                /** Represents a CertificateProviderInstance. */
                class CertificateProviderInstance implements ICertificateProviderInstance {

                    /**
                     * Constructs a new CertificateProviderInstance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1alpha1.ICertificateProviderInstance);

                    /** CertificateProviderInstance pluginInstance. */
                    public pluginInstance: string;

                    /**
                     * Creates a new CertificateProviderInstance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CertificateProviderInstance instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1alpha1.ICertificateProviderInstance): google.cloud.networksecurity.v1alpha1.CertificateProviderInstance;

                    /**
                     * Encodes the specified CertificateProviderInstance message. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.CertificateProviderInstance.verify|verify} messages.
                     * @param message CertificateProviderInstance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1alpha1.ICertificateProviderInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CertificateProviderInstance message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.CertificateProviderInstance.verify|verify} messages.
                     * @param message CertificateProviderInstance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1alpha1.ICertificateProviderInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CertificateProviderInstance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CertificateProviderInstance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1alpha1.CertificateProviderInstance;

                    /**
                     * Decodes a CertificateProviderInstance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CertificateProviderInstance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1alpha1.CertificateProviderInstance;

                    /**
                     * Verifies a CertificateProviderInstance message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CertificateProviderInstance message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CertificateProviderInstance
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1alpha1.CertificateProviderInstance;

                    /**
                     * Creates a plain object from a CertificateProviderInstance message. Also converts values to other types if specified.
                     * @param message CertificateProviderInstance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1alpha1.CertificateProviderInstance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CertificateProviderInstance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CertificateProviderInstance
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CertificateProvider. */
                interface ICertificateProvider {

                    /** CertificateProvider localFilepath */
                    localFilepath?: (google.cloud.networksecurity.v1alpha1.CertificateProvider.ITlsCertificateFiles|null);

                    /** CertificateProvider grpcEndpoint */
                    grpcEndpoint?: (google.cloud.networksecurity.v1alpha1.IGrpcEndpoint|null);

                    /** CertificateProvider certificateProviderInstance */
                    certificateProviderInstance?: (google.cloud.networksecurity.v1alpha1.ICertificateProviderInstance|null);
                }

                /** Represents a CertificateProvider. */
                class CertificateProvider implements ICertificateProvider {

                    /**
                     * Constructs a new CertificateProvider.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1alpha1.ICertificateProvider);

                    /** CertificateProvider localFilepath. */
                    public localFilepath?: (google.cloud.networksecurity.v1alpha1.CertificateProvider.ITlsCertificateFiles|null);

                    /** CertificateProvider grpcEndpoint. */
                    public grpcEndpoint?: (google.cloud.networksecurity.v1alpha1.IGrpcEndpoint|null);

                    /** CertificateProvider certificateProviderInstance. */
                    public certificateProviderInstance?: (google.cloud.networksecurity.v1alpha1.ICertificateProviderInstance|null);

                    /** CertificateProvider type. */
                    public type?: ("localFilepath"|"grpcEndpoint"|"certificateProviderInstance");

                    /**
                     * Creates a new CertificateProvider instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CertificateProvider instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1alpha1.ICertificateProvider): google.cloud.networksecurity.v1alpha1.CertificateProvider;

                    /**
                     * Encodes the specified CertificateProvider message. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.CertificateProvider.verify|verify} messages.
                     * @param message CertificateProvider message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1alpha1.ICertificateProvider, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CertificateProvider message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.CertificateProvider.verify|verify} messages.
                     * @param message CertificateProvider message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1alpha1.ICertificateProvider, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CertificateProvider message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CertificateProvider
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1alpha1.CertificateProvider;

                    /**
                     * Decodes a CertificateProvider message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CertificateProvider
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1alpha1.CertificateProvider;

                    /**
                     * Verifies a CertificateProvider message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CertificateProvider message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CertificateProvider
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1alpha1.CertificateProvider;

                    /**
                     * Creates a plain object from a CertificateProvider message. Also converts values to other types if specified.
                     * @param message CertificateProvider
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1alpha1.CertificateProvider, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CertificateProvider to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CertificateProvider
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CertificateProvider {

                    /** Properties of a TlsCertificateFiles. */
                    interface ITlsCertificateFiles {

                        /** TlsCertificateFiles certificatePath */
                        certificatePath?: (string|null);

                        /** TlsCertificateFiles privateKeyPath */
                        privateKeyPath?: (string|null);
                    }

                    /** Represents a TlsCertificateFiles. */
                    class TlsCertificateFiles implements ITlsCertificateFiles {

                        /**
                         * Constructs a new TlsCertificateFiles.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networksecurity.v1alpha1.CertificateProvider.ITlsCertificateFiles);

                        /** TlsCertificateFiles certificatePath. */
                        public certificatePath: string;

                        /** TlsCertificateFiles privateKeyPath. */
                        public privateKeyPath: string;

                        /**
                         * Creates a new TlsCertificateFiles instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TlsCertificateFiles instance
                         */
                        public static create(properties?: google.cloud.networksecurity.v1alpha1.CertificateProvider.ITlsCertificateFiles): google.cloud.networksecurity.v1alpha1.CertificateProvider.TlsCertificateFiles;

                        /**
                         * Encodes the specified TlsCertificateFiles message. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.CertificateProvider.TlsCertificateFiles.verify|verify} messages.
                         * @param message TlsCertificateFiles message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networksecurity.v1alpha1.CertificateProvider.ITlsCertificateFiles, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TlsCertificateFiles message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.CertificateProvider.TlsCertificateFiles.verify|verify} messages.
                         * @param message TlsCertificateFiles message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networksecurity.v1alpha1.CertificateProvider.ITlsCertificateFiles, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TlsCertificateFiles message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TlsCertificateFiles
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1alpha1.CertificateProvider.TlsCertificateFiles;

                        /**
                         * Decodes a TlsCertificateFiles message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TlsCertificateFiles
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1alpha1.CertificateProvider.TlsCertificateFiles;

                        /**
                         * Verifies a TlsCertificateFiles message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TlsCertificateFiles message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TlsCertificateFiles
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1alpha1.CertificateProvider.TlsCertificateFiles;

                        /**
                         * Creates a plain object from a TlsCertificateFiles message. Also converts values to other types if specified.
                         * @param message TlsCertificateFiles
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networksecurity.v1alpha1.CertificateProvider.TlsCertificateFiles, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TlsCertificateFiles to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TlsCertificateFiles
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
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
                    constructor(properties?: google.cloud.networksecurity.v1alpha1.IOperationMetadata);

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
                    public static create(properties?: google.cloud.networksecurity.v1alpha1.IOperationMetadata): google.cloud.networksecurity.v1alpha1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1alpha1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1alpha1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1alpha1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1alpha1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1alpha1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1alpha1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1alpha1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Represents a NetworkSecurity */
                class NetworkSecurity extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new NetworkSecurity service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new NetworkSecurity service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): NetworkSecurity;

                    /**
                     * Calls ListClientTlsPolicies.
                     * @param request ListClientTlsPoliciesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListClientTlsPoliciesResponse
                     */
                    public listClientTlsPolicies(request: google.cloud.networksecurity.v1alpha1.IListClientTlsPoliciesRequest, callback: google.cloud.networksecurity.v1alpha1.NetworkSecurity.ListClientTlsPoliciesCallback): void;

                    /**
                     * Calls ListClientTlsPolicies.
                     * @param request ListClientTlsPoliciesRequest message or plain object
                     * @returns Promise
                     */
                    public listClientTlsPolicies(request: google.cloud.networksecurity.v1alpha1.IListClientTlsPoliciesRequest): Promise<google.cloud.networksecurity.v1alpha1.ListClientTlsPoliciesResponse>;

                    /**
                     * Calls GetClientTlsPolicy.
                     * @param request GetClientTlsPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ClientTlsPolicy
                     */
                    public getClientTlsPolicy(request: google.cloud.networksecurity.v1alpha1.IGetClientTlsPolicyRequest, callback: google.cloud.networksecurity.v1alpha1.NetworkSecurity.GetClientTlsPolicyCallback): void;

                    /**
                     * Calls GetClientTlsPolicy.
                     * @param request GetClientTlsPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getClientTlsPolicy(request: google.cloud.networksecurity.v1alpha1.IGetClientTlsPolicyRequest): Promise<google.cloud.networksecurity.v1alpha1.ClientTlsPolicy>;

                    /**
                     * Calls CreateClientTlsPolicy.
                     * @param request CreateClientTlsPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createClientTlsPolicy(request: google.cloud.networksecurity.v1alpha1.ICreateClientTlsPolicyRequest, callback: google.cloud.networksecurity.v1alpha1.NetworkSecurity.CreateClientTlsPolicyCallback): void;

                    /**
                     * Calls CreateClientTlsPolicy.
                     * @param request CreateClientTlsPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public createClientTlsPolicy(request: google.cloud.networksecurity.v1alpha1.ICreateClientTlsPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateClientTlsPolicy.
                     * @param request UpdateClientTlsPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateClientTlsPolicy(request: google.cloud.networksecurity.v1alpha1.IUpdateClientTlsPolicyRequest, callback: google.cloud.networksecurity.v1alpha1.NetworkSecurity.UpdateClientTlsPolicyCallback): void;

                    /**
                     * Calls UpdateClientTlsPolicy.
                     * @param request UpdateClientTlsPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public updateClientTlsPolicy(request: google.cloud.networksecurity.v1alpha1.IUpdateClientTlsPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteClientTlsPolicy.
                     * @param request DeleteClientTlsPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteClientTlsPolicy(request: google.cloud.networksecurity.v1alpha1.IDeleteClientTlsPolicyRequest, callback: google.cloud.networksecurity.v1alpha1.NetworkSecurity.DeleteClientTlsPolicyCallback): void;

                    /**
                     * Calls DeleteClientTlsPolicy.
                     * @param request DeleteClientTlsPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteClientTlsPolicy(request: google.cloud.networksecurity.v1alpha1.IDeleteClientTlsPolicyRequest): Promise<google.longrunning.Operation>;
                }

                namespace NetworkSecurity {

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1alpha1.NetworkSecurity|listClientTlsPolicies}.
                     * @param error Error, if any
                     * @param [response] ListClientTlsPoliciesResponse
                     */
                    type ListClientTlsPoliciesCallback = (error: (Error|null), response?: google.cloud.networksecurity.v1alpha1.ListClientTlsPoliciesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1alpha1.NetworkSecurity|getClientTlsPolicy}.
                     * @param error Error, if any
                     * @param [response] ClientTlsPolicy
                     */
                    type GetClientTlsPolicyCallback = (error: (Error|null), response?: google.cloud.networksecurity.v1alpha1.ClientTlsPolicy) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1alpha1.NetworkSecurity|createClientTlsPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateClientTlsPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1alpha1.NetworkSecurity|updateClientTlsPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateClientTlsPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1alpha1.NetworkSecurity|deleteClientTlsPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteClientTlsPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }
            }

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Properties of an AuthorizationPolicy. */
                interface IAuthorizationPolicy {

                    /** AuthorizationPolicy name */
                    name?: (string|null);

                    /** AuthorizationPolicy description */
                    description?: (string|null);

                    /** AuthorizationPolicy createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** AuthorizationPolicy updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** AuthorizationPolicy labels */
                    labels?: ({ [k: string]: string }|null);

                    /** AuthorizationPolicy action */
                    action?: (google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Action|keyof typeof google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Action|null);

                    /** AuthorizationPolicy rules */
                    rules?: (google.cloud.networksecurity.v1beta1.AuthorizationPolicy.IRule[]|null);
                }

                /** Represents an AuthorizationPolicy. */
                class AuthorizationPolicy implements IAuthorizationPolicy {

                    /**
                     * Constructs a new AuthorizationPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.IAuthorizationPolicy);

                    /** AuthorizationPolicy name. */
                    public name: string;

                    /** AuthorizationPolicy description. */
                    public description: string;

                    /** AuthorizationPolicy createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** AuthorizationPolicy updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** AuthorizationPolicy labels. */
                    public labels: { [k: string]: string };

                    /** AuthorizationPolicy action. */
                    public action: (google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Action|keyof typeof google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Action);

                    /** AuthorizationPolicy rules. */
                    public rules: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.IRule[];

                    /**
                     * Creates a new AuthorizationPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AuthorizationPolicy instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.IAuthorizationPolicy): google.cloud.networksecurity.v1beta1.AuthorizationPolicy;

                    /**
                     * Encodes the specified AuthorizationPolicy message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.AuthorizationPolicy.verify|verify} messages.
                     * @param message AuthorizationPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.IAuthorizationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AuthorizationPolicy message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.AuthorizationPolicy.verify|verify} messages.
                     * @param message AuthorizationPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.IAuthorizationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AuthorizationPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AuthorizationPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.AuthorizationPolicy;

                    /**
                     * Decodes an AuthorizationPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AuthorizationPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.AuthorizationPolicy;

                    /**
                     * Verifies an AuthorizationPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AuthorizationPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AuthorizationPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.AuthorizationPolicy;

                    /**
                     * Creates a plain object from an AuthorizationPolicy message. Also converts values to other types if specified.
                     * @param message AuthorizationPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.AuthorizationPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AuthorizationPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AuthorizationPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AuthorizationPolicy {

                    /** Properties of a Rule. */
                    interface IRule {

                        /** Rule sources */
                        sources?: (google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.ISource[]|null);

                        /** Rule destinations */
                        destinations?: (google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.IDestination[]|null);
                    }

                    /** Represents a Rule. */
                    class Rule implements IRule {

                        /**
                         * Constructs a new Rule.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.IRule);

                        /** Rule sources. */
                        public sources: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.ISource[];

                        /** Rule destinations. */
                        public destinations: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.IDestination[];

                        /**
                         * Creates a new Rule instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Rule instance
                         */
                        public static create(properties?: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.IRule): google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule;

                        /**
                         * Encodes the specified Rule message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.verify|verify} messages.
                         * @param message Rule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.IRule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Rule message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.verify|verify} messages.
                         * @param message Rule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.IRule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Rule message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Rule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule;

                        /**
                         * Decodes a Rule message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Rule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule;

                        /**
                         * Verifies a Rule message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Rule message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Rule
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule;

                        /**
                         * Creates a plain object from a Rule message. Also converts values to other types if specified.
                         * @param message Rule
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Rule to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Rule
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Rule {

                        /** Properties of a Source. */
                        interface ISource {

                            /** Source principals */
                            principals?: (string[]|null);

                            /** Source ipBlocks */
                            ipBlocks?: (string[]|null);
                        }

                        /** Represents a Source. */
                        class Source implements ISource {

                            /**
                             * Constructs a new Source.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.ISource);

                            /** Source principals. */
                            public principals: string[];

                            /** Source ipBlocks. */
                            public ipBlocks: string[];

                            /**
                             * Creates a new Source instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Source instance
                             */
                            public static create(properties?: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.ISource): google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Source;

                            /**
                             * Encodes the specified Source message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Source.verify|verify} messages.
                             * @param message Source message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Source message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Source.verify|verify} messages.
                             * @param message Source message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Source message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Source
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Source;

                            /**
                             * Decodes a Source message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Source
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Source;

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
                            public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Source;

                            /**
                             * Creates a plain object from a Source message. Also converts values to other types if specified.
                             * @param message Source
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Source, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Source to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Source
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Destination. */
                        interface IDestination {

                            /** Destination hosts */
                            hosts?: (string[]|null);

                            /** Destination ports */
                            ports?: (number[]|null);

                            /** Destination methods */
                            methods?: (string[]|null);

                            /** Destination httpHeaderMatch */
                            httpHeaderMatch?: (google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.IHttpHeaderMatch|null);
                        }

                        /** Represents a Destination. */
                        class Destination implements IDestination {

                            /**
                             * Constructs a new Destination.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.IDestination);

                            /** Destination hosts. */
                            public hosts: string[];

                            /** Destination ports. */
                            public ports: number[];

                            /** Destination methods. */
                            public methods: string[];

                            /** Destination httpHeaderMatch. */
                            public httpHeaderMatch?: (google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.IHttpHeaderMatch|null);

                            /**
                             * Creates a new Destination instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Destination instance
                             */
                            public static create(properties?: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.IDestination): google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination;

                            /**
                             * Encodes the specified Destination message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.verify|verify} messages.
                             * @param message Destination message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.IDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Destination message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.verify|verify} messages.
                             * @param message Destination message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.IDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Destination message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Destination
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination;

                            /**
                             * Decodes a Destination message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Destination
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination;

                            /**
                             * Verifies a Destination message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Destination message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Destination
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination;

                            /**
                             * Creates a plain object from a Destination message. Also converts values to other types if specified.
                             * @param message Destination
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Destination to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Destination
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace Destination {

                            /** Properties of a HttpHeaderMatch. */
                            interface IHttpHeaderMatch {

                                /** HttpHeaderMatch regexMatch */
                                regexMatch?: (string|null);

                                /** HttpHeaderMatch headerName */
                                headerName?: (string|null);
                            }

                            /** Represents a HttpHeaderMatch. */
                            class HttpHeaderMatch implements IHttpHeaderMatch {

                                /**
                                 * Constructs a new HttpHeaderMatch.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.IHttpHeaderMatch);

                                /** HttpHeaderMatch regexMatch. */
                                public regexMatch?: (string|null);

                                /** HttpHeaderMatch headerName. */
                                public headerName: string;

                                /** HttpHeaderMatch type. */
                                public type?: "regexMatch";

                                /**
                                 * Creates a new HttpHeaderMatch instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns HttpHeaderMatch instance
                                 */
                                public static create(properties?: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.IHttpHeaderMatch): google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch;

                                /**
                                 * Encodes the specified HttpHeaderMatch message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch.verify|verify} messages.
                                 * @param message HttpHeaderMatch message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.IHttpHeaderMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified HttpHeaderMatch message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch.verify|verify} messages.
                                 * @param message HttpHeaderMatch message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.IHttpHeaderMatch, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a HttpHeaderMatch message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns HttpHeaderMatch
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch;

                                /**
                                 * Decodes a HttpHeaderMatch message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns HttpHeaderMatch
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch;

                                /**
                                 * Verifies a HttpHeaderMatch message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a HttpHeaderMatch message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns HttpHeaderMatch
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch;

                                /**
                                 * Creates a plain object from a HttpHeaderMatch message. Also converts values to other types if specified.
                                 * @param message HttpHeaderMatch
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.networksecurity.v1beta1.AuthorizationPolicy.Rule.Destination.HttpHeaderMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this HttpHeaderMatch to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for HttpHeaderMatch
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }
                    }

                    /** Action enum. */
                    enum Action {
                        ACTION_UNSPECIFIED = 0,
                        ALLOW = 1,
                        DENY = 2
                    }
                }

                /** Properties of a ListAuthorizationPoliciesRequest. */
                interface IListAuthorizationPoliciesRequest {

                    /** ListAuthorizationPoliciesRequest parent */
                    parent?: (string|null);

                    /** ListAuthorizationPoliciesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAuthorizationPoliciesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAuthorizationPoliciesRequest. */
                class ListAuthorizationPoliciesRequest implements IListAuthorizationPoliciesRequest {

                    /**
                     * Constructs a new ListAuthorizationPoliciesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.IListAuthorizationPoliciesRequest);

                    /** ListAuthorizationPoliciesRequest parent. */
                    public parent: string;

                    /** ListAuthorizationPoliciesRequest pageSize. */
                    public pageSize: number;

                    /** ListAuthorizationPoliciesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAuthorizationPoliciesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAuthorizationPoliciesRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.IListAuthorizationPoliciesRequest): google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesRequest;

                    /**
                     * Encodes the specified ListAuthorizationPoliciesRequest message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesRequest.verify|verify} messages.
                     * @param message ListAuthorizationPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.IListAuthorizationPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAuthorizationPoliciesRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesRequest.verify|verify} messages.
                     * @param message ListAuthorizationPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.IListAuthorizationPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAuthorizationPoliciesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAuthorizationPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesRequest;

                    /**
                     * Decodes a ListAuthorizationPoliciesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAuthorizationPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesRequest;

                    /**
                     * Verifies a ListAuthorizationPoliciesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAuthorizationPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAuthorizationPoliciesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesRequest;

                    /**
                     * Creates a plain object from a ListAuthorizationPoliciesRequest message. Also converts values to other types if specified.
                     * @param message ListAuthorizationPoliciesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAuthorizationPoliciesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAuthorizationPoliciesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAuthorizationPoliciesResponse. */
                interface IListAuthorizationPoliciesResponse {

                    /** ListAuthorizationPoliciesResponse authorizationPolicies */
                    authorizationPolicies?: (google.cloud.networksecurity.v1beta1.IAuthorizationPolicy[]|null);

                    /** ListAuthorizationPoliciesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAuthorizationPoliciesResponse. */
                class ListAuthorizationPoliciesResponse implements IListAuthorizationPoliciesResponse {

                    /**
                     * Constructs a new ListAuthorizationPoliciesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.IListAuthorizationPoliciesResponse);

                    /** ListAuthorizationPoliciesResponse authorizationPolicies. */
                    public authorizationPolicies: google.cloud.networksecurity.v1beta1.IAuthorizationPolicy[];

                    /** ListAuthorizationPoliciesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAuthorizationPoliciesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAuthorizationPoliciesResponse instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.IListAuthorizationPoliciesResponse): google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesResponse;

                    /**
                     * Encodes the specified ListAuthorizationPoliciesResponse message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesResponse.verify|verify} messages.
                     * @param message ListAuthorizationPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.IListAuthorizationPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAuthorizationPoliciesResponse message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesResponse.verify|verify} messages.
                     * @param message ListAuthorizationPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.IListAuthorizationPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAuthorizationPoliciesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAuthorizationPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesResponse;

                    /**
                     * Decodes a ListAuthorizationPoliciesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAuthorizationPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesResponse;

                    /**
                     * Verifies a ListAuthorizationPoliciesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAuthorizationPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAuthorizationPoliciesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesResponse;

                    /**
                     * Creates a plain object from a ListAuthorizationPoliciesResponse message. Also converts values to other types if specified.
                     * @param message ListAuthorizationPoliciesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAuthorizationPoliciesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAuthorizationPoliciesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetAuthorizationPolicyRequest. */
                interface IGetAuthorizationPolicyRequest {

                    /** GetAuthorizationPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAuthorizationPolicyRequest. */
                class GetAuthorizationPolicyRequest implements IGetAuthorizationPolicyRequest {

                    /**
                     * Constructs a new GetAuthorizationPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.IGetAuthorizationPolicyRequest);

                    /** GetAuthorizationPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAuthorizationPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAuthorizationPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.IGetAuthorizationPolicyRequest): google.cloud.networksecurity.v1beta1.GetAuthorizationPolicyRequest;

                    /**
                     * Encodes the specified GetAuthorizationPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.GetAuthorizationPolicyRequest.verify|verify} messages.
                     * @param message GetAuthorizationPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.IGetAuthorizationPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAuthorizationPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.GetAuthorizationPolicyRequest.verify|verify} messages.
                     * @param message GetAuthorizationPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.IGetAuthorizationPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAuthorizationPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAuthorizationPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.GetAuthorizationPolicyRequest;

                    /**
                     * Decodes a GetAuthorizationPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAuthorizationPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.GetAuthorizationPolicyRequest;

                    /**
                     * Verifies a GetAuthorizationPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAuthorizationPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAuthorizationPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.GetAuthorizationPolicyRequest;

                    /**
                     * Creates a plain object from a GetAuthorizationPolicyRequest message. Also converts values to other types if specified.
                     * @param message GetAuthorizationPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.GetAuthorizationPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAuthorizationPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetAuthorizationPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateAuthorizationPolicyRequest. */
                interface ICreateAuthorizationPolicyRequest {

                    /** CreateAuthorizationPolicyRequest parent */
                    parent?: (string|null);

                    /** CreateAuthorizationPolicyRequest authorizationPolicyId */
                    authorizationPolicyId?: (string|null);

                    /** CreateAuthorizationPolicyRequest authorizationPolicy */
                    authorizationPolicy?: (google.cloud.networksecurity.v1beta1.IAuthorizationPolicy|null);
                }

                /** Represents a CreateAuthorizationPolicyRequest. */
                class CreateAuthorizationPolicyRequest implements ICreateAuthorizationPolicyRequest {

                    /**
                     * Constructs a new CreateAuthorizationPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.ICreateAuthorizationPolicyRequest);

                    /** CreateAuthorizationPolicyRequest parent. */
                    public parent: string;

                    /** CreateAuthorizationPolicyRequest authorizationPolicyId. */
                    public authorizationPolicyId: string;

                    /** CreateAuthorizationPolicyRequest authorizationPolicy. */
                    public authorizationPolicy?: (google.cloud.networksecurity.v1beta1.IAuthorizationPolicy|null);

                    /**
                     * Creates a new CreateAuthorizationPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAuthorizationPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.ICreateAuthorizationPolicyRequest): google.cloud.networksecurity.v1beta1.CreateAuthorizationPolicyRequest;

                    /**
                     * Encodes the specified CreateAuthorizationPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.CreateAuthorizationPolicyRequest.verify|verify} messages.
                     * @param message CreateAuthorizationPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.ICreateAuthorizationPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAuthorizationPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.CreateAuthorizationPolicyRequest.verify|verify} messages.
                     * @param message CreateAuthorizationPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.ICreateAuthorizationPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAuthorizationPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAuthorizationPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.CreateAuthorizationPolicyRequest;

                    /**
                     * Decodes a CreateAuthorizationPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAuthorizationPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.CreateAuthorizationPolicyRequest;

                    /**
                     * Verifies a CreateAuthorizationPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAuthorizationPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAuthorizationPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.CreateAuthorizationPolicyRequest;

                    /**
                     * Creates a plain object from a CreateAuthorizationPolicyRequest message. Also converts values to other types if specified.
                     * @param message CreateAuthorizationPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.CreateAuthorizationPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAuthorizationPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateAuthorizationPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateAuthorizationPolicyRequest. */
                interface IUpdateAuthorizationPolicyRequest {

                    /** UpdateAuthorizationPolicyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateAuthorizationPolicyRequest authorizationPolicy */
                    authorizationPolicy?: (google.cloud.networksecurity.v1beta1.IAuthorizationPolicy|null);
                }

                /** Represents an UpdateAuthorizationPolicyRequest. */
                class UpdateAuthorizationPolicyRequest implements IUpdateAuthorizationPolicyRequest {

                    /**
                     * Constructs a new UpdateAuthorizationPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.IUpdateAuthorizationPolicyRequest);

                    /** UpdateAuthorizationPolicyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateAuthorizationPolicyRequest authorizationPolicy. */
                    public authorizationPolicy?: (google.cloud.networksecurity.v1beta1.IAuthorizationPolicy|null);

                    /**
                     * Creates a new UpdateAuthorizationPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateAuthorizationPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.IUpdateAuthorizationPolicyRequest): google.cloud.networksecurity.v1beta1.UpdateAuthorizationPolicyRequest;

                    /**
                     * Encodes the specified UpdateAuthorizationPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.UpdateAuthorizationPolicyRequest.verify|verify} messages.
                     * @param message UpdateAuthorizationPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.IUpdateAuthorizationPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateAuthorizationPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.UpdateAuthorizationPolicyRequest.verify|verify} messages.
                     * @param message UpdateAuthorizationPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.IUpdateAuthorizationPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateAuthorizationPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateAuthorizationPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.UpdateAuthorizationPolicyRequest;

                    /**
                     * Decodes an UpdateAuthorizationPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateAuthorizationPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.UpdateAuthorizationPolicyRequest;

                    /**
                     * Verifies an UpdateAuthorizationPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateAuthorizationPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateAuthorizationPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.UpdateAuthorizationPolicyRequest;

                    /**
                     * Creates a plain object from an UpdateAuthorizationPolicyRequest message. Also converts values to other types if specified.
                     * @param message UpdateAuthorizationPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.UpdateAuthorizationPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateAuthorizationPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateAuthorizationPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteAuthorizationPolicyRequest. */
                interface IDeleteAuthorizationPolicyRequest {

                    /** DeleteAuthorizationPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteAuthorizationPolicyRequest. */
                class DeleteAuthorizationPolicyRequest implements IDeleteAuthorizationPolicyRequest {

                    /**
                     * Constructs a new DeleteAuthorizationPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.IDeleteAuthorizationPolicyRequest);

                    /** DeleteAuthorizationPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteAuthorizationPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAuthorizationPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.IDeleteAuthorizationPolicyRequest): google.cloud.networksecurity.v1beta1.DeleteAuthorizationPolicyRequest;

                    /**
                     * Encodes the specified DeleteAuthorizationPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.DeleteAuthorizationPolicyRequest.verify|verify} messages.
                     * @param message DeleteAuthorizationPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.IDeleteAuthorizationPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAuthorizationPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.DeleteAuthorizationPolicyRequest.verify|verify} messages.
                     * @param message DeleteAuthorizationPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.IDeleteAuthorizationPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAuthorizationPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAuthorizationPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.DeleteAuthorizationPolicyRequest;

                    /**
                     * Decodes a DeleteAuthorizationPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAuthorizationPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.DeleteAuthorizationPolicyRequest;

                    /**
                     * Verifies a DeleteAuthorizationPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAuthorizationPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAuthorizationPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.DeleteAuthorizationPolicyRequest;

                    /**
                     * Creates a plain object from a DeleteAuthorizationPolicyRequest message. Also converts values to other types if specified.
                     * @param message DeleteAuthorizationPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.DeleteAuthorizationPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAuthorizationPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteAuthorizationPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ClientTlsPolicy. */
                interface IClientTlsPolicy {

                    /** ClientTlsPolicy name */
                    name?: (string|null);

                    /** ClientTlsPolicy description */
                    description?: (string|null);

                    /** ClientTlsPolicy createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ClientTlsPolicy updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** ClientTlsPolicy labels */
                    labels?: ({ [k: string]: string }|null);

                    /** ClientTlsPolicy sni */
                    sni?: (string|null);

                    /** ClientTlsPolicy clientCertificate */
                    clientCertificate?: (google.cloud.networksecurity.v1beta1.ICertificateProvider|null);

                    /** ClientTlsPolicy serverValidationCa */
                    serverValidationCa?: (google.cloud.networksecurity.v1beta1.IValidationCA[]|null);
                }

                /** Represents a ClientTlsPolicy. */
                class ClientTlsPolicy implements IClientTlsPolicy {

                    /**
                     * Constructs a new ClientTlsPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.IClientTlsPolicy);

                    /** ClientTlsPolicy name. */
                    public name: string;

                    /** ClientTlsPolicy description. */
                    public description: string;

                    /** ClientTlsPolicy createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ClientTlsPolicy updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** ClientTlsPolicy labels. */
                    public labels: { [k: string]: string };

                    /** ClientTlsPolicy sni. */
                    public sni: string;

                    /** ClientTlsPolicy clientCertificate. */
                    public clientCertificate?: (google.cloud.networksecurity.v1beta1.ICertificateProvider|null);

                    /** ClientTlsPolicy serverValidationCa. */
                    public serverValidationCa: google.cloud.networksecurity.v1beta1.IValidationCA[];

                    /**
                     * Creates a new ClientTlsPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientTlsPolicy instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.IClientTlsPolicy): google.cloud.networksecurity.v1beta1.ClientTlsPolicy;

                    /**
                     * Encodes the specified ClientTlsPolicy message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.ClientTlsPolicy.verify|verify} messages.
                     * @param message ClientTlsPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.IClientTlsPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClientTlsPolicy message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.ClientTlsPolicy.verify|verify} messages.
                     * @param message ClientTlsPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.IClientTlsPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClientTlsPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClientTlsPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.ClientTlsPolicy;

                    /**
                     * Decodes a ClientTlsPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClientTlsPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.ClientTlsPolicy;

                    /**
                     * Verifies a ClientTlsPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClientTlsPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClientTlsPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.ClientTlsPolicy;

                    /**
                     * Creates a plain object from a ClientTlsPolicy message. Also converts values to other types if specified.
                     * @param message ClientTlsPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.ClientTlsPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClientTlsPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ClientTlsPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListClientTlsPoliciesRequest. */
                interface IListClientTlsPoliciesRequest {

                    /** ListClientTlsPoliciesRequest parent */
                    parent?: (string|null);

                    /** ListClientTlsPoliciesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListClientTlsPoliciesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListClientTlsPoliciesRequest. */
                class ListClientTlsPoliciesRequest implements IListClientTlsPoliciesRequest {

                    /**
                     * Constructs a new ListClientTlsPoliciesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.IListClientTlsPoliciesRequest);

                    /** ListClientTlsPoliciesRequest parent. */
                    public parent: string;

                    /** ListClientTlsPoliciesRequest pageSize. */
                    public pageSize: number;

                    /** ListClientTlsPoliciesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListClientTlsPoliciesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListClientTlsPoliciesRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.IListClientTlsPoliciesRequest): google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesRequest;

                    /**
                     * Encodes the specified ListClientTlsPoliciesRequest message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesRequest.verify|verify} messages.
                     * @param message ListClientTlsPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.IListClientTlsPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListClientTlsPoliciesRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesRequest.verify|verify} messages.
                     * @param message ListClientTlsPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.IListClientTlsPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListClientTlsPoliciesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListClientTlsPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesRequest;

                    /**
                     * Decodes a ListClientTlsPoliciesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListClientTlsPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesRequest;

                    /**
                     * Verifies a ListClientTlsPoliciesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListClientTlsPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListClientTlsPoliciesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesRequest;

                    /**
                     * Creates a plain object from a ListClientTlsPoliciesRequest message. Also converts values to other types if specified.
                     * @param message ListClientTlsPoliciesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListClientTlsPoliciesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListClientTlsPoliciesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListClientTlsPoliciesResponse. */
                interface IListClientTlsPoliciesResponse {

                    /** ListClientTlsPoliciesResponse clientTlsPolicies */
                    clientTlsPolicies?: (google.cloud.networksecurity.v1beta1.IClientTlsPolicy[]|null);

                    /** ListClientTlsPoliciesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListClientTlsPoliciesResponse. */
                class ListClientTlsPoliciesResponse implements IListClientTlsPoliciesResponse {

                    /**
                     * Constructs a new ListClientTlsPoliciesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.IListClientTlsPoliciesResponse);

                    /** ListClientTlsPoliciesResponse clientTlsPolicies. */
                    public clientTlsPolicies: google.cloud.networksecurity.v1beta1.IClientTlsPolicy[];

                    /** ListClientTlsPoliciesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListClientTlsPoliciesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListClientTlsPoliciesResponse instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.IListClientTlsPoliciesResponse): google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesResponse;

                    /**
                     * Encodes the specified ListClientTlsPoliciesResponse message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesResponse.verify|verify} messages.
                     * @param message ListClientTlsPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.IListClientTlsPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListClientTlsPoliciesResponse message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesResponse.verify|verify} messages.
                     * @param message ListClientTlsPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.IListClientTlsPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListClientTlsPoliciesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListClientTlsPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesResponse;

                    /**
                     * Decodes a ListClientTlsPoliciesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListClientTlsPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesResponse;

                    /**
                     * Verifies a ListClientTlsPoliciesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListClientTlsPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListClientTlsPoliciesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesResponse;

                    /**
                     * Creates a plain object from a ListClientTlsPoliciesResponse message. Also converts values to other types if specified.
                     * @param message ListClientTlsPoliciesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListClientTlsPoliciesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListClientTlsPoliciesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetClientTlsPolicyRequest. */
                interface IGetClientTlsPolicyRequest {

                    /** GetClientTlsPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetClientTlsPolicyRequest. */
                class GetClientTlsPolicyRequest implements IGetClientTlsPolicyRequest {

                    /**
                     * Constructs a new GetClientTlsPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.IGetClientTlsPolicyRequest);

                    /** GetClientTlsPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetClientTlsPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetClientTlsPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.IGetClientTlsPolicyRequest): google.cloud.networksecurity.v1beta1.GetClientTlsPolicyRequest;

                    /**
                     * Encodes the specified GetClientTlsPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.GetClientTlsPolicyRequest.verify|verify} messages.
                     * @param message GetClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.IGetClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetClientTlsPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.GetClientTlsPolicyRequest.verify|verify} messages.
                     * @param message GetClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.IGetClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetClientTlsPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.GetClientTlsPolicyRequest;

                    /**
                     * Decodes a GetClientTlsPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.GetClientTlsPolicyRequest;

                    /**
                     * Verifies a GetClientTlsPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetClientTlsPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetClientTlsPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.GetClientTlsPolicyRequest;

                    /**
                     * Creates a plain object from a GetClientTlsPolicyRequest message. Also converts values to other types if specified.
                     * @param message GetClientTlsPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.GetClientTlsPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetClientTlsPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetClientTlsPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateClientTlsPolicyRequest. */
                interface ICreateClientTlsPolicyRequest {

                    /** CreateClientTlsPolicyRequest parent */
                    parent?: (string|null);

                    /** CreateClientTlsPolicyRequest clientTlsPolicyId */
                    clientTlsPolicyId?: (string|null);

                    /** CreateClientTlsPolicyRequest clientTlsPolicy */
                    clientTlsPolicy?: (google.cloud.networksecurity.v1beta1.IClientTlsPolicy|null);
                }

                /** Represents a CreateClientTlsPolicyRequest. */
                class CreateClientTlsPolicyRequest implements ICreateClientTlsPolicyRequest {

                    /**
                     * Constructs a new CreateClientTlsPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.ICreateClientTlsPolicyRequest);

                    /** CreateClientTlsPolicyRequest parent. */
                    public parent: string;

                    /** CreateClientTlsPolicyRequest clientTlsPolicyId. */
                    public clientTlsPolicyId: string;

                    /** CreateClientTlsPolicyRequest clientTlsPolicy. */
                    public clientTlsPolicy?: (google.cloud.networksecurity.v1beta1.IClientTlsPolicy|null);

                    /**
                     * Creates a new CreateClientTlsPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateClientTlsPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.ICreateClientTlsPolicyRequest): google.cloud.networksecurity.v1beta1.CreateClientTlsPolicyRequest;

                    /**
                     * Encodes the specified CreateClientTlsPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.CreateClientTlsPolicyRequest.verify|verify} messages.
                     * @param message CreateClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.ICreateClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateClientTlsPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.CreateClientTlsPolicyRequest.verify|verify} messages.
                     * @param message CreateClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.ICreateClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateClientTlsPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.CreateClientTlsPolicyRequest;

                    /**
                     * Decodes a CreateClientTlsPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.CreateClientTlsPolicyRequest;

                    /**
                     * Verifies a CreateClientTlsPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateClientTlsPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateClientTlsPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.CreateClientTlsPolicyRequest;

                    /**
                     * Creates a plain object from a CreateClientTlsPolicyRequest message. Also converts values to other types if specified.
                     * @param message CreateClientTlsPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.CreateClientTlsPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateClientTlsPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateClientTlsPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateClientTlsPolicyRequest. */
                interface IUpdateClientTlsPolicyRequest {

                    /** UpdateClientTlsPolicyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateClientTlsPolicyRequest clientTlsPolicy */
                    clientTlsPolicy?: (google.cloud.networksecurity.v1beta1.IClientTlsPolicy|null);
                }

                /** Represents an UpdateClientTlsPolicyRequest. */
                class UpdateClientTlsPolicyRequest implements IUpdateClientTlsPolicyRequest {

                    /**
                     * Constructs a new UpdateClientTlsPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.IUpdateClientTlsPolicyRequest);

                    /** UpdateClientTlsPolicyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateClientTlsPolicyRequest clientTlsPolicy. */
                    public clientTlsPolicy?: (google.cloud.networksecurity.v1beta1.IClientTlsPolicy|null);

                    /**
                     * Creates a new UpdateClientTlsPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateClientTlsPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.IUpdateClientTlsPolicyRequest): google.cloud.networksecurity.v1beta1.UpdateClientTlsPolicyRequest;

                    /**
                     * Encodes the specified UpdateClientTlsPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.UpdateClientTlsPolicyRequest.verify|verify} messages.
                     * @param message UpdateClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.IUpdateClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateClientTlsPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.UpdateClientTlsPolicyRequest.verify|verify} messages.
                     * @param message UpdateClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.IUpdateClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateClientTlsPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.UpdateClientTlsPolicyRequest;

                    /**
                     * Decodes an UpdateClientTlsPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.UpdateClientTlsPolicyRequest;

                    /**
                     * Verifies an UpdateClientTlsPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateClientTlsPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateClientTlsPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.UpdateClientTlsPolicyRequest;

                    /**
                     * Creates a plain object from an UpdateClientTlsPolicyRequest message. Also converts values to other types if specified.
                     * @param message UpdateClientTlsPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.UpdateClientTlsPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateClientTlsPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateClientTlsPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteClientTlsPolicyRequest. */
                interface IDeleteClientTlsPolicyRequest {

                    /** DeleteClientTlsPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteClientTlsPolicyRequest. */
                class DeleteClientTlsPolicyRequest implements IDeleteClientTlsPolicyRequest {

                    /**
                     * Constructs a new DeleteClientTlsPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.IDeleteClientTlsPolicyRequest);

                    /** DeleteClientTlsPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteClientTlsPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteClientTlsPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.IDeleteClientTlsPolicyRequest): google.cloud.networksecurity.v1beta1.DeleteClientTlsPolicyRequest;

                    /**
                     * Encodes the specified DeleteClientTlsPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.DeleteClientTlsPolicyRequest.verify|verify} messages.
                     * @param message DeleteClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.IDeleteClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteClientTlsPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.DeleteClientTlsPolicyRequest.verify|verify} messages.
                     * @param message DeleteClientTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.IDeleteClientTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteClientTlsPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.DeleteClientTlsPolicyRequest;

                    /**
                     * Decodes a DeleteClientTlsPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteClientTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.DeleteClientTlsPolicyRequest;

                    /**
                     * Verifies a DeleteClientTlsPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteClientTlsPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteClientTlsPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.DeleteClientTlsPolicyRequest;

                    /**
                     * Creates a plain object from a DeleteClientTlsPolicyRequest message. Also converts values to other types if specified.
                     * @param message DeleteClientTlsPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.DeleteClientTlsPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteClientTlsPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteClientTlsPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GrpcEndpoint. */
                interface IGrpcEndpoint {

                    /** GrpcEndpoint targetUri */
                    targetUri?: (string|null);
                }

                /** Represents a GrpcEndpoint. */
                class GrpcEndpoint implements IGrpcEndpoint {

                    /**
                     * Constructs a new GrpcEndpoint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.IGrpcEndpoint);

                    /** GrpcEndpoint targetUri. */
                    public targetUri: string;

                    /**
                     * Creates a new GrpcEndpoint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GrpcEndpoint instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.IGrpcEndpoint): google.cloud.networksecurity.v1beta1.GrpcEndpoint;

                    /**
                     * Encodes the specified GrpcEndpoint message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.GrpcEndpoint.verify|verify} messages.
                     * @param message GrpcEndpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.IGrpcEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GrpcEndpoint message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.GrpcEndpoint.verify|verify} messages.
                     * @param message GrpcEndpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.IGrpcEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GrpcEndpoint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GrpcEndpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.GrpcEndpoint;

                    /**
                     * Decodes a GrpcEndpoint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GrpcEndpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.GrpcEndpoint;

                    /**
                     * Verifies a GrpcEndpoint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GrpcEndpoint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GrpcEndpoint
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.GrpcEndpoint;

                    /**
                     * Creates a plain object from a GrpcEndpoint message. Also converts values to other types if specified.
                     * @param message GrpcEndpoint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.GrpcEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GrpcEndpoint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GrpcEndpoint
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ValidationCA. */
                interface IValidationCA {

                    /** ValidationCA grpcEndpoint */
                    grpcEndpoint?: (google.cloud.networksecurity.v1beta1.IGrpcEndpoint|null);

                    /** ValidationCA certificateProviderInstance */
                    certificateProviderInstance?: (google.cloud.networksecurity.v1beta1.ICertificateProviderInstance|null);
                }

                /** Represents a ValidationCA. */
                class ValidationCA implements IValidationCA {

                    /**
                     * Constructs a new ValidationCA.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.IValidationCA);

                    /** ValidationCA grpcEndpoint. */
                    public grpcEndpoint?: (google.cloud.networksecurity.v1beta1.IGrpcEndpoint|null);

                    /** ValidationCA certificateProviderInstance. */
                    public certificateProviderInstance?: (google.cloud.networksecurity.v1beta1.ICertificateProviderInstance|null);

                    /** ValidationCA type. */
                    public type?: ("grpcEndpoint"|"certificateProviderInstance");

                    /**
                     * Creates a new ValidationCA instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ValidationCA instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.IValidationCA): google.cloud.networksecurity.v1beta1.ValidationCA;

                    /**
                     * Encodes the specified ValidationCA message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.ValidationCA.verify|verify} messages.
                     * @param message ValidationCA message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.IValidationCA, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ValidationCA message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.ValidationCA.verify|verify} messages.
                     * @param message ValidationCA message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.IValidationCA, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ValidationCA message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ValidationCA
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.ValidationCA;

                    /**
                     * Decodes a ValidationCA message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ValidationCA
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.ValidationCA;

                    /**
                     * Verifies a ValidationCA message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ValidationCA message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ValidationCA
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.ValidationCA;

                    /**
                     * Creates a plain object from a ValidationCA message. Also converts values to other types if specified.
                     * @param message ValidationCA
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.ValidationCA, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ValidationCA to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ValidationCA
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CertificateProviderInstance. */
                interface ICertificateProviderInstance {

                    /** CertificateProviderInstance pluginInstance */
                    pluginInstance?: (string|null);
                }

                /** Represents a CertificateProviderInstance. */
                class CertificateProviderInstance implements ICertificateProviderInstance {

                    /**
                     * Constructs a new CertificateProviderInstance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.ICertificateProviderInstance);

                    /** CertificateProviderInstance pluginInstance. */
                    public pluginInstance: string;

                    /**
                     * Creates a new CertificateProviderInstance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CertificateProviderInstance instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.ICertificateProviderInstance): google.cloud.networksecurity.v1beta1.CertificateProviderInstance;

                    /**
                     * Encodes the specified CertificateProviderInstance message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.CertificateProviderInstance.verify|verify} messages.
                     * @param message CertificateProviderInstance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.ICertificateProviderInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CertificateProviderInstance message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.CertificateProviderInstance.verify|verify} messages.
                     * @param message CertificateProviderInstance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.ICertificateProviderInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CertificateProviderInstance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CertificateProviderInstance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.CertificateProviderInstance;

                    /**
                     * Decodes a CertificateProviderInstance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CertificateProviderInstance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.CertificateProviderInstance;

                    /**
                     * Verifies a CertificateProviderInstance message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CertificateProviderInstance message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CertificateProviderInstance
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.CertificateProviderInstance;

                    /**
                     * Creates a plain object from a CertificateProviderInstance message. Also converts values to other types if specified.
                     * @param message CertificateProviderInstance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.CertificateProviderInstance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CertificateProviderInstance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CertificateProviderInstance
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CertificateProvider. */
                interface ICertificateProvider {

                    /** CertificateProvider grpcEndpoint */
                    grpcEndpoint?: (google.cloud.networksecurity.v1beta1.IGrpcEndpoint|null);

                    /** CertificateProvider certificateProviderInstance */
                    certificateProviderInstance?: (google.cloud.networksecurity.v1beta1.ICertificateProviderInstance|null);
                }

                /** Represents a CertificateProvider. */
                class CertificateProvider implements ICertificateProvider {

                    /**
                     * Constructs a new CertificateProvider.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.ICertificateProvider);

                    /** CertificateProvider grpcEndpoint. */
                    public grpcEndpoint?: (google.cloud.networksecurity.v1beta1.IGrpcEndpoint|null);

                    /** CertificateProvider certificateProviderInstance. */
                    public certificateProviderInstance?: (google.cloud.networksecurity.v1beta1.ICertificateProviderInstance|null);

                    /** CertificateProvider type. */
                    public type?: ("grpcEndpoint"|"certificateProviderInstance");

                    /**
                     * Creates a new CertificateProvider instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CertificateProvider instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.ICertificateProvider): google.cloud.networksecurity.v1beta1.CertificateProvider;

                    /**
                     * Encodes the specified CertificateProvider message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.CertificateProvider.verify|verify} messages.
                     * @param message CertificateProvider message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.ICertificateProvider, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CertificateProvider message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.CertificateProvider.verify|verify} messages.
                     * @param message CertificateProvider message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.ICertificateProvider, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CertificateProvider message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CertificateProvider
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.CertificateProvider;

                    /**
                     * Decodes a CertificateProvider message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CertificateProvider
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.CertificateProvider;

                    /**
                     * Verifies a CertificateProvider message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CertificateProvider message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CertificateProvider
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.CertificateProvider;

                    /**
                     * Creates a plain object from a CertificateProvider message. Also converts values to other types if specified.
                     * @param message CertificateProvider
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.CertificateProvider, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CertificateProvider to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CertificateProvider
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
                    constructor(properties?: google.cloud.networksecurity.v1beta1.IOperationMetadata);

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
                    public static create(properties?: google.cloud.networksecurity.v1beta1.IOperationMetadata): google.cloud.networksecurity.v1beta1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Represents a NetworkSecurity */
                class NetworkSecurity extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new NetworkSecurity service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new NetworkSecurity service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): NetworkSecurity;

                    /**
                     * Calls ListAuthorizationPolicies.
                     * @param request ListAuthorizationPoliciesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAuthorizationPoliciesResponse
                     */
                    public listAuthorizationPolicies(request: google.cloud.networksecurity.v1beta1.IListAuthorizationPoliciesRequest, callback: google.cloud.networksecurity.v1beta1.NetworkSecurity.ListAuthorizationPoliciesCallback): void;

                    /**
                     * Calls ListAuthorizationPolicies.
                     * @param request ListAuthorizationPoliciesRequest message or plain object
                     * @returns Promise
                     */
                    public listAuthorizationPolicies(request: google.cloud.networksecurity.v1beta1.IListAuthorizationPoliciesRequest): Promise<google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesResponse>;

                    /**
                     * Calls GetAuthorizationPolicy.
                     * @param request GetAuthorizationPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AuthorizationPolicy
                     */
                    public getAuthorizationPolicy(request: google.cloud.networksecurity.v1beta1.IGetAuthorizationPolicyRequest, callback: google.cloud.networksecurity.v1beta1.NetworkSecurity.GetAuthorizationPolicyCallback): void;

                    /**
                     * Calls GetAuthorizationPolicy.
                     * @param request GetAuthorizationPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getAuthorizationPolicy(request: google.cloud.networksecurity.v1beta1.IGetAuthorizationPolicyRequest): Promise<google.cloud.networksecurity.v1beta1.AuthorizationPolicy>;

                    /**
                     * Calls CreateAuthorizationPolicy.
                     * @param request CreateAuthorizationPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createAuthorizationPolicy(request: google.cloud.networksecurity.v1beta1.ICreateAuthorizationPolicyRequest, callback: google.cloud.networksecurity.v1beta1.NetworkSecurity.CreateAuthorizationPolicyCallback): void;

                    /**
                     * Calls CreateAuthorizationPolicy.
                     * @param request CreateAuthorizationPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public createAuthorizationPolicy(request: google.cloud.networksecurity.v1beta1.ICreateAuthorizationPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateAuthorizationPolicy.
                     * @param request UpdateAuthorizationPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateAuthorizationPolicy(request: google.cloud.networksecurity.v1beta1.IUpdateAuthorizationPolicyRequest, callback: google.cloud.networksecurity.v1beta1.NetworkSecurity.UpdateAuthorizationPolicyCallback): void;

                    /**
                     * Calls UpdateAuthorizationPolicy.
                     * @param request UpdateAuthorizationPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public updateAuthorizationPolicy(request: google.cloud.networksecurity.v1beta1.IUpdateAuthorizationPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteAuthorizationPolicy.
                     * @param request DeleteAuthorizationPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteAuthorizationPolicy(request: google.cloud.networksecurity.v1beta1.IDeleteAuthorizationPolicyRequest, callback: google.cloud.networksecurity.v1beta1.NetworkSecurity.DeleteAuthorizationPolicyCallback): void;

                    /**
                     * Calls DeleteAuthorizationPolicy.
                     * @param request DeleteAuthorizationPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAuthorizationPolicy(request: google.cloud.networksecurity.v1beta1.IDeleteAuthorizationPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListServerTlsPolicies.
                     * @param request ListServerTlsPoliciesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListServerTlsPoliciesResponse
                     */
                    public listServerTlsPolicies(request: google.cloud.networksecurity.v1beta1.IListServerTlsPoliciesRequest, callback: google.cloud.networksecurity.v1beta1.NetworkSecurity.ListServerTlsPoliciesCallback): void;

                    /**
                     * Calls ListServerTlsPolicies.
                     * @param request ListServerTlsPoliciesRequest message or plain object
                     * @returns Promise
                     */
                    public listServerTlsPolicies(request: google.cloud.networksecurity.v1beta1.IListServerTlsPoliciesRequest): Promise<google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesResponse>;

                    /**
                     * Calls GetServerTlsPolicy.
                     * @param request GetServerTlsPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ServerTlsPolicy
                     */
                    public getServerTlsPolicy(request: google.cloud.networksecurity.v1beta1.IGetServerTlsPolicyRequest, callback: google.cloud.networksecurity.v1beta1.NetworkSecurity.GetServerTlsPolicyCallback): void;

                    /**
                     * Calls GetServerTlsPolicy.
                     * @param request GetServerTlsPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getServerTlsPolicy(request: google.cloud.networksecurity.v1beta1.IGetServerTlsPolicyRequest): Promise<google.cloud.networksecurity.v1beta1.ServerTlsPolicy>;

                    /**
                     * Calls CreateServerTlsPolicy.
                     * @param request CreateServerTlsPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createServerTlsPolicy(request: google.cloud.networksecurity.v1beta1.ICreateServerTlsPolicyRequest, callback: google.cloud.networksecurity.v1beta1.NetworkSecurity.CreateServerTlsPolicyCallback): void;

                    /**
                     * Calls CreateServerTlsPolicy.
                     * @param request CreateServerTlsPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public createServerTlsPolicy(request: google.cloud.networksecurity.v1beta1.ICreateServerTlsPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateServerTlsPolicy.
                     * @param request UpdateServerTlsPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateServerTlsPolicy(request: google.cloud.networksecurity.v1beta1.IUpdateServerTlsPolicyRequest, callback: google.cloud.networksecurity.v1beta1.NetworkSecurity.UpdateServerTlsPolicyCallback): void;

                    /**
                     * Calls UpdateServerTlsPolicy.
                     * @param request UpdateServerTlsPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public updateServerTlsPolicy(request: google.cloud.networksecurity.v1beta1.IUpdateServerTlsPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteServerTlsPolicy.
                     * @param request DeleteServerTlsPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteServerTlsPolicy(request: google.cloud.networksecurity.v1beta1.IDeleteServerTlsPolicyRequest, callback: google.cloud.networksecurity.v1beta1.NetworkSecurity.DeleteServerTlsPolicyCallback): void;

                    /**
                     * Calls DeleteServerTlsPolicy.
                     * @param request DeleteServerTlsPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteServerTlsPolicy(request: google.cloud.networksecurity.v1beta1.IDeleteServerTlsPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListClientTlsPolicies.
                     * @param request ListClientTlsPoliciesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListClientTlsPoliciesResponse
                     */
                    public listClientTlsPolicies(request: google.cloud.networksecurity.v1beta1.IListClientTlsPoliciesRequest, callback: google.cloud.networksecurity.v1beta1.NetworkSecurity.ListClientTlsPoliciesCallback): void;

                    /**
                     * Calls ListClientTlsPolicies.
                     * @param request ListClientTlsPoliciesRequest message or plain object
                     * @returns Promise
                     */
                    public listClientTlsPolicies(request: google.cloud.networksecurity.v1beta1.IListClientTlsPoliciesRequest): Promise<google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesResponse>;

                    /**
                     * Calls GetClientTlsPolicy.
                     * @param request GetClientTlsPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ClientTlsPolicy
                     */
                    public getClientTlsPolicy(request: google.cloud.networksecurity.v1beta1.IGetClientTlsPolicyRequest, callback: google.cloud.networksecurity.v1beta1.NetworkSecurity.GetClientTlsPolicyCallback): void;

                    /**
                     * Calls GetClientTlsPolicy.
                     * @param request GetClientTlsPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getClientTlsPolicy(request: google.cloud.networksecurity.v1beta1.IGetClientTlsPolicyRequest): Promise<google.cloud.networksecurity.v1beta1.ClientTlsPolicy>;

                    /**
                     * Calls CreateClientTlsPolicy.
                     * @param request CreateClientTlsPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createClientTlsPolicy(request: google.cloud.networksecurity.v1beta1.ICreateClientTlsPolicyRequest, callback: google.cloud.networksecurity.v1beta1.NetworkSecurity.CreateClientTlsPolicyCallback): void;

                    /**
                     * Calls CreateClientTlsPolicy.
                     * @param request CreateClientTlsPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public createClientTlsPolicy(request: google.cloud.networksecurity.v1beta1.ICreateClientTlsPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateClientTlsPolicy.
                     * @param request UpdateClientTlsPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateClientTlsPolicy(request: google.cloud.networksecurity.v1beta1.IUpdateClientTlsPolicyRequest, callback: google.cloud.networksecurity.v1beta1.NetworkSecurity.UpdateClientTlsPolicyCallback): void;

                    /**
                     * Calls UpdateClientTlsPolicy.
                     * @param request UpdateClientTlsPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public updateClientTlsPolicy(request: google.cloud.networksecurity.v1beta1.IUpdateClientTlsPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteClientTlsPolicy.
                     * @param request DeleteClientTlsPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteClientTlsPolicy(request: google.cloud.networksecurity.v1beta1.IDeleteClientTlsPolicyRequest, callback: google.cloud.networksecurity.v1beta1.NetworkSecurity.DeleteClientTlsPolicyCallback): void;

                    /**
                     * Calls DeleteClientTlsPolicy.
                     * @param request DeleteClientTlsPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteClientTlsPolicy(request: google.cloud.networksecurity.v1beta1.IDeleteClientTlsPolicyRequest): Promise<google.longrunning.Operation>;
                }

                namespace NetworkSecurity {

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1beta1.NetworkSecurity|listAuthorizationPolicies}.
                     * @param error Error, if any
                     * @param [response] ListAuthorizationPoliciesResponse
                     */
                    type ListAuthorizationPoliciesCallback = (error: (Error|null), response?: google.cloud.networksecurity.v1beta1.ListAuthorizationPoliciesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1beta1.NetworkSecurity|getAuthorizationPolicy}.
                     * @param error Error, if any
                     * @param [response] AuthorizationPolicy
                     */
                    type GetAuthorizationPolicyCallback = (error: (Error|null), response?: google.cloud.networksecurity.v1beta1.AuthorizationPolicy) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1beta1.NetworkSecurity|createAuthorizationPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateAuthorizationPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1beta1.NetworkSecurity|updateAuthorizationPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateAuthorizationPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1beta1.NetworkSecurity|deleteAuthorizationPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteAuthorizationPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1beta1.NetworkSecurity|listServerTlsPolicies}.
                     * @param error Error, if any
                     * @param [response] ListServerTlsPoliciesResponse
                     */
                    type ListServerTlsPoliciesCallback = (error: (Error|null), response?: google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1beta1.NetworkSecurity|getServerTlsPolicy}.
                     * @param error Error, if any
                     * @param [response] ServerTlsPolicy
                     */
                    type GetServerTlsPolicyCallback = (error: (Error|null), response?: google.cloud.networksecurity.v1beta1.ServerTlsPolicy) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1beta1.NetworkSecurity|createServerTlsPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateServerTlsPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1beta1.NetworkSecurity|updateServerTlsPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateServerTlsPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1beta1.NetworkSecurity|deleteServerTlsPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteServerTlsPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1beta1.NetworkSecurity|listClientTlsPolicies}.
                     * @param error Error, if any
                     * @param [response] ListClientTlsPoliciesResponse
                     */
                    type ListClientTlsPoliciesCallback = (error: (Error|null), response?: google.cloud.networksecurity.v1beta1.ListClientTlsPoliciesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1beta1.NetworkSecurity|getClientTlsPolicy}.
                     * @param error Error, if any
                     * @param [response] ClientTlsPolicy
                     */
                    type GetClientTlsPolicyCallback = (error: (Error|null), response?: google.cloud.networksecurity.v1beta1.ClientTlsPolicy) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1beta1.NetworkSecurity|createClientTlsPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateClientTlsPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1beta1.NetworkSecurity|updateClientTlsPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateClientTlsPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.networksecurity.v1beta1.NetworkSecurity|deleteClientTlsPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteClientTlsPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a ServerTlsPolicy. */
                interface IServerTlsPolicy {

                    /** ServerTlsPolicy name */
                    name?: (string|null);

                    /** ServerTlsPolicy description */
                    description?: (string|null);

                    /** ServerTlsPolicy createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ServerTlsPolicy updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** ServerTlsPolicy labels */
                    labels?: ({ [k: string]: string }|null);

                    /** ServerTlsPolicy allowOpen */
                    allowOpen?: (boolean|null);

                    /** ServerTlsPolicy serverCertificate */
                    serverCertificate?: (google.cloud.networksecurity.v1beta1.ICertificateProvider|null);

                    /** ServerTlsPolicy mtlsPolicy */
                    mtlsPolicy?: (google.cloud.networksecurity.v1beta1.ServerTlsPolicy.IMTLSPolicy|null);
                }

                /** Represents a ServerTlsPolicy. */
                class ServerTlsPolicy implements IServerTlsPolicy {

                    /**
                     * Constructs a new ServerTlsPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.IServerTlsPolicy);

                    /** ServerTlsPolicy name. */
                    public name: string;

                    /** ServerTlsPolicy description. */
                    public description: string;

                    /** ServerTlsPolicy createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ServerTlsPolicy updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** ServerTlsPolicy labels. */
                    public labels: { [k: string]: string };

                    /** ServerTlsPolicy allowOpen. */
                    public allowOpen: boolean;

                    /** ServerTlsPolicy serverCertificate. */
                    public serverCertificate?: (google.cloud.networksecurity.v1beta1.ICertificateProvider|null);

                    /** ServerTlsPolicy mtlsPolicy. */
                    public mtlsPolicy?: (google.cloud.networksecurity.v1beta1.ServerTlsPolicy.IMTLSPolicy|null);

                    /**
                     * Creates a new ServerTlsPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServerTlsPolicy instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.IServerTlsPolicy): google.cloud.networksecurity.v1beta1.ServerTlsPolicy;

                    /**
                     * Encodes the specified ServerTlsPolicy message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.ServerTlsPolicy.verify|verify} messages.
                     * @param message ServerTlsPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.IServerTlsPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServerTlsPolicy message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.ServerTlsPolicy.verify|verify} messages.
                     * @param message ServerTlsPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.IServerTlsPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServerTlsPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServerTlsPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.ServerTlsPolicy;

                    /**
                     * Decodes a ServerTlsPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServerTlsPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.ServerTlsPolicy;

                    /**
                     * Verifies a ServerTlsPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServerTlsPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServerTlsPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.ServerTlsPolicy;

                    /**
                     * Creates a plain object from a ServerTlsPolicy message. Also converts values to other types if specified.
                     * @param message ServerTlsPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.ServerTlsPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServerTlsPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ServerTlsPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ServerTlsPolicy {

                    /** Properties of a MTLSPolicy. */
                    interface IMTLSPolicy {

                        /** MTLSPolicy clientValidationCa */
                        clientValidationCa?: (google.cloud.networksecurity.v1beta1.IValidationCA[]|null);
                    }

                    /** Represents a MTLSPolicy. */
                    class MTLSPolicy implements IMTLSPolicy {

                        /**
                         * Constructs a new MTLSPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.networksecurity.v1beta1.ServerTlsPolicy.IMTLSPolicy);

                        /** MTLSPolicy clientValidationCa. */
                        public clientValidationCa: google.cloud.networksecurity.v1beta1.IValidationCA[];

                        /**
                         * Creates a new MTLSPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MTLSPolicy instance
                         */
                        public static create(properties?: google.cloud.networksecurity.v1beta1.ServerTlsPolicy.IMTLSPolicy): google.cloud.networksecurity.v1beta1.ServerTlsPolicy.MTLSPolicy;

                        /**
                         * Encodes the specified MTLSPolicy message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.ServerTlsPolicy.MTLSPolicy.verify|verify} messages.
                         * @param message MTLSPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.networksecurity.v1beta1.ServerTlsPolicy.IMTLSPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MTLSPolicy message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.ServerTlsPolicy.MTLSPolicy.verify|verify} messages.
                         * @param message MTLSPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.ServerTlsPolicy.IMTLSPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MTLSPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MTLSPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.ServerTlsPolicy.MTLSPolicy;

                        /**
                         * Decodes a MTLSPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MTLSPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.ServerTlsPolicy.MTLSPolicy;

                        /**
                         * Verifies a MTLSPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MTLSPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MTLSPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.ServerTlsPolicy.MTLSPolicy;

                        /**
                         * Creates a plain object from a MTLSPolicy message. Also converts values to other types if specified.
                         * @param message MTLSPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.networksecurity.v1beta1.ServerTlsPolicy.MTLSPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MTLSPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MTLSPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a ListServerTlsPoliciesRequest. */
                interface IListServerTlsPoliciesRequest {

                    /** ListServerTlsPoliciesRequest parent */
                    parent?: (string|null);

                    /** ListServerTlsPoliciesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListServerTlsPoliciesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListServerTlsPoliciesRequest. */
                class ListServerTlsPoliciesRequest implements IListServerTlsPoliciesRequest {

                    /**
                     * Constructs a new ListServerTlsPoliciesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.IListServerTlsPoliciesRequest);

                    /** ListServerTlsPoliciesRequest parent. */
                    public parent: string;

                    /** ListServerTlsPoliciesRequest pageSize. */
                    public pageSize: number;

                    /** ListServerTlsPoliciesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListServerTlsPoliciesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServerTlsPoliciesRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.IListServerTlsPoliciesRequest): google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesRequest;

                    /**
                     * Encodes the specified ListServerTlsPoliciesRequest message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesRequest.verify|verify} messages.
                     * @param message ListServerTlsPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.IListServerTlsPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServerTlsPoliciesRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesRequest.verify|verify} messages.
                     * @param message ListServerTlsPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.IListServerTlsPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServerTlsPoliciesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServerTlsPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesRequest;

                    /**
                     * Decodes a ListServerTlsPoliciesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServerTlsPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesRequest;

                    /**
                     * Verifies a ListServerTlsPoliciesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListServerTlsPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListServerTlsPoliciesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesRequest;

                    /**
                     * Creates a plain object from a ListServerTlsPoliciesRequest message. Also converts values to other types if specified.
                     * @param message ListServerTlsPoliciesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServerTlsPoliciesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListServerTlsPoliciesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListServerTlsPoliciesResponse. */
                interface IListServerTlsPoliciesResponse {

                    /** ListServerTlsPoliciesResponse serverTlsPolicies */
                    serverTlsPolicies?: (google.cloud.networksecurity.v1beta1.IServerTlsPolicy[]|null);

                    /** ListServerTlsPoliciesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListServerTlsPoliciesResponse. */
                class ListServerTlsPoliciesResponse implements IListServerTlsPoliciesResponse {

                    /**
                     * Constructs a new ListServerTlsPoliciesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.IListServerTlsPoliciesResponse);

                    /** ListServerTlsPoliciesResponse serverTlsPolicies. */
                    public serverTlsPolicies: google.cloud.networksecurity.v1beta1.IServerTlsPolicy[];

                    /** ListServerTlsPoliciesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListServerTlsPoliciesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServerTlsPoliciesResponse instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.IListServerTlsPoliciesResponse): google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesResponse;

                    /**
                     * Encodes the specified ListServerTlsPoliciesResponse message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesResponse.verify|verify} messages.
                     * @param message ListServerTlsPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.IListServerTlsPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServerTlsPoliciesResponse message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesResponse.verify|verify} messages.
                     * @param message ListServerTlsPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.IListServerTlsPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServerTlsPoliciesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServerTlsPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesResponse;

                    /**
                     * Decodes a ListServerTlsPoliciesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServerTlsPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesResponse;

                    /**
                     * Verifies a ListServerTlsPoliciesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListServerTlsPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListServerTlsPoliciesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesResponse;

                    /**
                     * Creates a plain object from a ListServerTlsPoliciesResponse message. Also converts values to other types if specified.
                     * @param message ListServerTlsPoliciesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.ListServerTlsPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServerTlsPoliciesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListServerTlsPoliciesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetServerTlsPolicyRequest. */
                interface IGetServerTlsPolicyRequest {

                    /** GetServerTlsPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetServerTlsPolicyRequest. */
                class GetServerTlsPolicyRequest implements IGetServerTlsPolicyRequest {

                    /**
                     * Constructs a new GetServerTlsPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.IGetServerTlsPolicyRequest);

                    /** GetServerTlsPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetServerTlsPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetServerTlsPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.IGetServerTlsPolicyRequest): google.cloud.networksecurity.v1beta1.GetServerTlsPolicyRequest;

                    /**
                     * Encodes the specified GetServerTlsPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.GetServerTlsPolicyRequest.verify|verify} messages.
                     * @param message GetServerTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.IGetServerTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetServerTlsPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.GetServerTlsPolicyRequest.verify|verify} messages.
                     * @param message GetServerTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.IGetServerTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetServerTlsPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetServerTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.GetServerTlsPolicyRequest;

                    /**
                     * Decodes a GetServerTlsPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetServerTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.GetServerTlsPolicyRequest;

                    /**
                     * Verifies a GetServerTlsPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetServerTlsPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetServerTlsPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.GetServerTlsPolicyRequest;

                    /**
                     * Creates a plain object from a GetServerTlsPolicyRequest message. Also converts values to other types if specified.
                     * @param message GetServerTlsPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.GetServerTlsPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetServerTlsPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetServerTlsPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateServerTlsPolicyRequest. */
                interface ICreateServerTlsPolicyRequest {

                    /** CreateServerTlsPolicyRequest parent */
                    parent?: (string|null);

                    /** CreateServerTlsPolicyRequest serverTlsPolicyId */
                    serverTlsPolicyId?: (string|null);

                    /** CreateServerTlsPolicyRequest serverTlsPolicy */
                    serverTlsPolicy?: (google.cloud.networksecurity.v1beta1.IServerTlsPolicy|null);
                }

                /** Represents a CreateServerTlsPolicyRequest. */
                class CreateServerTlsPolicyRequest implements ICreateServerTlsPolicyRequest {

                    /**
                     * Constructs a new CreateServerTlsPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.ICreateServerTlsPolicyRequest);

                    /** CreateServerTlsPolicyRequest parent. */
                    public parent: string;

                    /** CreateServerTlsPolicyRequest serverTlsPolicyId. */
                    public serverTlsPolicyId: string;

                    /** CreateServerTlsPolicyRequest serverTlsPolicy. */
                    public serverTlsPolicy?: (google.cloud.networksecurity.v1beta1.IServerTlsPolicy|null);

                    /**
                     * Creates a new CreateServerTlsPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateServerTlsPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.ICreateServerTlsPolicyRequest): google.cloud.networksecurity.v1beta1.CreateServerTlsPolicyRequest;

                    /**
                     * Encodes the specified CreateServerTlsPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.CreateServerTlsPolicyRequest.verify|verify} messages.
                     * @param message CreateServerTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.ICreateServerTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateServerTlsPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.CreateServerTlsPolicyRequest.verify|verify} messages.
                     * @param message CreateServerTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.ICreateServerTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateServerTlsPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateServerTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.CreateServerTlsPolicyRequest;

                    /**
                     * Decodes a CreateServerTlsPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateServerTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.CreateServerTlsPolicyRequest;

                    /**
                     * Verifies a CreateServerTlsPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateServerTlsPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateServerTlsPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.CreateServerTlsPolicyRequest;

                    /**
                     * Creates a plain object from a CreateServerTlsPolicyRequest message. Also converts values to other types if specified.
                     * @param message CreateServerTlsPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.CreateServerTlsPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateServerTlsPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateServerTlsPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateServerTlsPolicyRequest. */
                interface IUpdateServerTlsPolicyRequest {

                    /** UpdateServerTlsPolicyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateServerTlsPolicyRequest serverTlsPolicy */
                    serverTlsPolicy?: (google.cloud.networksecurity.v1beta1.IServerTlsPolicy|null);
                }

                /** Represents an UpdateServerTlsPolicyRequest. */
                class UpdateServerTlsPolicyRequest implements IUpdateServerTlsPolicyRequest {

                    /**
                     * Constructs a new UpdateServerTlsPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.IUpdateServerTlsPolicyRequest);

                    /** UpdateServerTlsPolicyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateServerTlsPolicyRequest serverTlsPolicy. */
                    public serverTlsPolicy?: (google.cloud.networksecurity.v1beta1.IServerTlsPolicy|null);

                    /**
                     * Creates a new UpdateServerTlsPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateServerTlsPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.IUpdateServerTlsPolicyRequest): google.cloud.networksecurity.v1beta1.UpdateServerTlsPolicyRequest;

                    /**
                     * Encodes the specified UpdateServerTlsPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.UpdateServerTlsPolicyRequest.verify|verify} messages.
                     * @param message UpdateServerTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.IUpdateServerTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateServerTlsPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.UpdateServerTlsPolicyRequest.verify|verify} messages.
                     * @param message UpdateServerTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.IUpdateServerTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateServerTlsPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateServerTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.UpdateServerTlsPolicyRequest;

                    /**
                     * Decodes an UpdateServerTlsPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateServerTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.UpdateServerTlsPolicyRequest;

                    /**
                     * Verifies an UpdateServerTlsPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateServerTlsPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateServerTlsPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.UpdateServerTlsPolicyRequest;

                    /**
                     * Creates a plain object from an UpdateServerTlsPolicyRequest message. Also converts values to other types if specified.
                     * @param message UpdateServerTlsPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.UpdateServerTlsPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateServerTlsPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateServerTlsPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteServerTlsPolicyRequest. */
                interface IDeleteServerTlsPolicyRequest {

                    /** DeleteServerTlsPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteServerTlsPolicyRequest. */
                class DeleteServerTlsPolicyRequest implements IDeleteServerTlsPolicyRequest {

                    /**
                     * Constructs a new DeleteServerTlsPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.networksecurity.v1beta1.IDeleteServerTlsPolicyRequest);

                    /** DeleteServerTlsPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteServerTlsPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteServerTlsPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.networksecurity.v1beta1.IDeleteServerTlsPolicyRequest): google.cloud.networksecurity.v1beta1.DeleteServerTlsPolicyRequest;

                    /**
                     * Encodes the specified DeleteServerTlsPolicyRequest message. Does not implicitly {@link google.cloud.networksecurity.v1beta1.DeleteServerTlsPolicyRequest.verify|verify} messages.
                     * @param message DeleteServerTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.networksecurity.v1beta1.IDeleteServerTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteServerTlsPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.networksecurity.v1beta1.DeleteServerTlsPolicyRequest.verify|verify} messages.
                     * @param message DeleteServerTlsPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.networksecurity.v1beta1.IDeleteServerTlsPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteServerTlsPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteServerTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.networksecurity.v1beta1.DeleteServerTlsPolicyRequest;

                    /**
                     * Decodes a DeleteServerTlsPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteServerTlsPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.networksecurity.v1beta1.DeleteServerTlsPolicyRequest;

                    /**
                     * Verifies a DeleteServerTlsPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteServerTlsPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteServerTlsPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.networksecurity.v1beta1.DeleteServerTlsPolicyRequest;

                    /**
                     * Creates a plain object from a DeleteServerTlsPolicyRequest message. Also converts values to other types if specified.
                     * @param message DeleteServerTlsPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.networksecurity.v1beta1.DeleteServerTlsPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteServerTlsPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteServerTlsPolicyRequest
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
    }
}
