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

        /** Namespace chronicle. */
        namespace chronicle {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a DataAccessControlService */
                class DataAccessControlService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new DataAccessControlService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new DataAccessControlService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DataAccessControlService;

                    /**
                     * Calls CreateDataAccessLabel.
                     * @param request CreateDataAccessLabelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DataAccessLabel
                     */
                    public createDataAccessLabel(request: google.cloud.chronicle.v1.ICreateDataAccessLabelRequest, callback: google.cloud.chronicle.v1.DataAccessControlService.CreateDataAccessLabelCallback): void;

                    /**
                     * Calls CreateDataAccessLabel.
                     * @param request CreateDataAccessLabelRequest message or plain object
                     * @returns Promise
                     */
                    public createDataAccessLabel(request: google.cloud.chronicle.v1.ICreateDataAccessLabelRequest): Promise<google.cloud.chronicle.v1.DataAccessLabel>;

                    /**
                     * Calls GetDataAccessLabel.
                     * @param request GetDataAccessLabelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DataAccessLabel
                     */
                    public getDataAccessLabel(request: google.cloud.chronicle.v1.IGetDataAccessLabelRequest, callback: google.cloud.chronicle.v1.DataAccessControlService.GetDataAccessLabelCallback): void;

                    /**
                     * Calls GetDataAccessLabel.
                     * @param request GetDataAccessLabelRequest message or plain object
                     * @returns Promise
                     */
                    public getDataAccessLabel(request: google.cloud.chronicle.v1.IGetDataAccessLabelRequest): Promise<google.cloud.chronicle.v1.DataAccessLabel>;

                    /**
                     * Calls ListDataAccessLabels.
                     * @param request ListDataAccessLabelsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListDataAccessLabelsResponse
                     */
                    public listDataAccessLabels(request: google.cloud.chronicle.v1.IListDataAccessLabelsRequest, callback: google.cloud.chronicle.v1.DataAccessControlService.ListDataAccessLabelsCallback): void;

                    /**
                     * Calls ListDataAccessLabels.
                     * @param request ListDataAccessLabelsRequest message or plain object
                     * @returns Promise
                     */
                    public listDataAccessLabels(request: google.cloud.chronicle.v1.IListDataAccessLabelsRequest): Promise<google.cloud.chronicle.v1.ListDataAccessLabelsResponse>;

                    /**
                     * Calls UpdateDataAccessLabel.
                     * @param request UpdateDataAccessLabelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DataAccessLabel
                     */
                    public updateDataAccessLabel(request: google.cloud.chronicle.v1.IUpdateDataAccessLabelRequest, callback: google.cloud.chronicle.v1.DataAccessControlService.UpdateDataAccessLabelCallback): void;

                    /**
                     * Calls UpdateDataAccessLabel.
                     * @param request UpdateDataAccessLabelRequest message or plain object
                     * @returns Promise
                     */
                    public updateDataAccessLabel(request: google.cloud.chronicle.v1.IUpdateDataAccessLabelRequest): Promise<google.cloud.chronicle.v1.DataAccessLabel>;

                    /**
                     * Calls DeleteDataAccessLabel.
                     * @param request DeleteDataAccessLabelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteDataAccessLabel(request: google.cloud.chronicle.v1.IDeleteDataAccessLabelRequest, callback: google.cloud.chronicle.v1.DataAccessControlService.DeleteDataAccessLabelCallback): void;

                    /**
                     * Calls DeleteDataAccessLabel.
                     * @param request DeleteDataAccessLabelRequest message or plain object
                     * @returns Promise
                     */
                    public deleteDataAccessLabel(request: google.cloud.chronicle.v1.IDeleteDataAccessLabelRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls CreateDataAccessScope.
                     * @param request CreateDataAccessScopeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DataAccessScope
                     */
                    public createDataAccessScope(request: google.cloud.chronicle.v1.ICreateDataAccessScopeRequest, callback: google.cloud.chronicle.v1.DataAccessControlService.CreateDataAccessScopeCallback): void;

                    /**
                     * Calls CreateDataAccessScope.
                     * @param request CreateDataAccessScopeRequest message or plain object
                     * @returns Promise
                     */
                    public createDataAccessScope(request: google.cloud.chronicle.v1.ICreateDataAccessScopeRequest): Promise<google.cloud.chronicle.v1.DataAccessScope>;

                    /**
                     * Calls GetDataAccessScope.
                     * @param request GetDataAccessScopeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DataAccessScope
                     */
                    public getDataAccessScope(request: google.cloud.chronicle.v1.IGetDataAccessScopeRequest, callback: google.cloud.chronicle.v1.DataAccessControlService.GetDataAccessScopeCallback): void;

                    /**
                     * Calls GetDataAccessScope.
                     * @param request GetDataAccessScopeRequest message or plain object
                     * @returns Promise
                     */
                    public getDataAccessScope(request: google.cloud.chronicle.v1.IGetDataAccessScopeRequest): Promise<google.cloud.chronicle.v1.DataAccessScope>;

                    /**
                     * Calls ListDataAccessScopes.
                     * @param request ListDataAccessScopesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListDataAccessScopesResponse
                     */
                    public listDataAccessScopes(request: google.cloud.chronicle.v1.IListDataAccessScopesRequest, callback: google.cloud.chronicle.v1.DataAccessControlService.ListDataAccessScopesCallback): void;

                    /**
                     * Calls ListDataAccessScopes.
                     * @param request ListDataAccessScopesRequest message or plain object
                     * @returns Promise
                     */
                    public listDataAccessScopes(request: google.cloud.chronicle.v1.IListDataAccessScopesRequest): Promise<google.cloud.chronicle.v1.ListDataAccessScopesResponse>;

                    /**
                     * Calls UpdateDataAccessScope.
                     * @param request UpdateDataAccessScopeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DataAccessScope
                     */
                    public updateDataAccessScope(request: google.cloud.chronicle.v1.IUpdateDataAccessScopeRequest, callback: google.cloud.chronicle.v1.DataAccessControlService.UpdateDataAccessScopeCallback): void;

                    /**
                     * Calls UpdateDataAccessScope.
                     * @param request UpdateDataAccessScopeRequest message or plain object
                     * @returns Promise
                     */
                    public updateDataAccessScope(request: google.cloud.chronicle.v1.IUpdateDataAccessScopeRequest): Promise<google.cloud.chronicle.v1.DataAccessScope>;

                    /**
                     * Calls DeleteDataAccessScope.
                     * @param request DeleteDataAccessScopeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteDataAccessScope(request: google.cloud.chronicle.v1.IDeleteDataAccessScopeRequest, callback: google.cloud.chronicle.v1.DataAccessControlService.DeleteDataAccessScopeCallback): void;

                    /**
                     * Calls DeleteDataAccessScope.
                     * @param request DeleteDataAccessScopeRequest message or plain object
                     * @returns Promise
                     */
                    public deleteDataAccessScope(request: google.cloud.chronicle.v1.IDeleteDataAccessScopeRequest): Promise<google.protobuf.Empty>;
                }

                namespace DataAccessControlService {

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.DataAccessControlService|createDataAccessLabel}.
                     * @param error Error, if any
                     * @param [response] DataAccessLabel
                     */
                    type CreateDataAccessLabelCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.DataAccessLabel) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.DataAccessControlService|getDataAccessLabel}.
                     * @param error Error, if any
                     * @param [response] DataAccessLabel
                     */
                    type GetDataAccessLabelCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.DataAccessLabel) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.DataAccessControlService|listDataAccessLabels}.
                     * @param error Error, if any
                     * @param [response] ListDataAccessLabelsResponse
                     */
                    type ListDataAccessLabelsCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.ListDataAccessLabelsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.DataAccessControlService|updateDataAccessLabel}.
                     * @param error Error, if any
                     * @param [response] DataAccessLabel
                     */
                    type UpdateDataAccessLabelCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.DataAccessLabel) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.DataAccessControlService|deleteDataAccessLabel}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteDataAccessLabelCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.DataAccessControlService|createDataAccessScope}.
                     * @param error Error, if any
                     * @param [response] DataAccessScope
                     */
                    type CreateDataAccessScopeCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.DataAccessScope) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.DataAccessControlService|getDataAccessScope}.
                     * @param error Error, if any
                     * @param [response] DataAccessScope
                     */
                    type GetDataAccessScopeCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.DataAccessScope) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.DataAccessControlService|listDataAccessScopes}.
                     * @param error Error, if any
                     * @param [response] ListDataAccessScopesResponse
                     */
                    type ListDataAccessScopesCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.ListDataAccessScopesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.DataAccessControlService|updateDataAccessScope}.
                     * @param error Error, if any
                     * @param [response] DataAccessScope
                     */
                    type UpdateDataAccessScopeCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.DataAccessScope) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.DataAccessControlService|deleteDataAccessScope}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteDataAccessScopeCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                }

                /** Properties of a CreateDataAccessLabelRequest. */
                interface ICreateDataAccessLabelRequest {

                    /** CreateDataAccessLabelRequest parent */
                    parent?: (string|null);

                    /** CreateDataAccessLabelRequest dataAccessLabel */
                    dataAccessLabel?: (google.cloud.chronicle.v1.IDataAccessLabel|null);

                    /** CreateDataAccessLabelRequest dataAccessLabelId */
                    dataAccessLabelId?: (string|null);
                }

                /** Represents a CreateDataAccessLabelRequest. */
                class CreateDataAccessLabelRequest implements ICreateDataAccessLabelRequest {

                    /**
                     * Constructs a new CreateDataAccessLabelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.ICreateDataAccessLabelRequest);

                    /** CreateDataAccessLabelRequest parent. */
                    public parent: string;

                    /** CreateDataAccessLabelRequest dataAccessLabel. */
                    public dataAccessLabel?: (google.cloud.chronicle.v1.IDataAccessLabel|null);

                    /** CreateDataAccessLabelRequest dataAccessLabelId. */
                    public dataAccessLabelId: string;

                    /**
                     * Creates a new CreateDataAccessLabelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateDataAccessLabelRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.ICreateDataAccessLabelRequest): google.cloud.chronicle.v1.CreateDataAccessLabelRequest;

                    /**
                     * Encodes the specified CreateDataAccessLabelRequest message. Does not implicitly {@link google.cloud.chronicle.v1.CreateDataAccessLabelRequest.verify|verify} messages.
                     * @param message CreateDataAccessLabelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.ICreateDataAccessLabelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateDataAccessLabelRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.CreateDataAccessLabelRequest.verify|verify} messages.
                     * @param message CreateDataAccessLabelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.ICreateDataAccessLabelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateDataAccessLabelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateDataAccessLabelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.CreateDataAccessLabelRequest;

                    /**
                     * Decodes a CreateDataAccessLabelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateDataAccessLabelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.CreateDataAccessLabelRequest;

                    /**
                     * Verifies a CreateDataAccessLabelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateDataAccessLabelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateDataAccessLabelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.CreateDataAccessLabelRequest;

                    /**
                     * Creates a plain object from a CreateDataAccessLabelRequest message. Also converts values to other types if specified.
                     * @param message CreateDataAccessLabelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.CreateDataAccessLabelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateDataAccessLabelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateDataAccessLabelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetDataAccessLabelRequest. */
                interface IGetDataAccessLabelRequest {

                    /** GetDataAccessLabelRequest name */
                    name?: (string|null);
                }

                /** Represents a GetDataAccessLabelRequest. */
                class GetDataAccessLabelRequest implements IGetDataAccessLabelRequest {

                    /**
                     * Constructs a new GetDataAccessLabelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IGetDataAccessLabelRequest);

                    /** GetDataAccessLabelRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetDataAccessLabelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetDataAccessLabelRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IGetDataAccessLabelRequest): google.cloud.chronicle.v1.GetDataAccessLabelRequest;

                    /**
                     * Encodes the specified GetDataAccessLabelRequest message. Does not implicitly {@link google.cloud.chronicle.v1.GetDataAccessLabelRequest.verify|verify} messages.
                     * @param message GetDataAccessLabelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IGetDataAccessLabelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetDataAccessLabelRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.GetDataAccessLabelRequest.verify|verify} messages.
                     * @param message GetDataAccessLabelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IGetDataAccessLabelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetDataAccessLabelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetDataAccessLabelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.GetDataAccessLabelRequest;

                    /**
                     * Decodes a GetDataAccessLabelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetDataAccessLabelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.GetDataAccessLabelRequest;

                    /**
                     * Verifies a GetDataAccessLabelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetDataAccessLabelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetDataAccessLabelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.GetDataAccessLabelRequest;

                    /**
                     * Creates a plain object from a GetDataAccessLabelRequest message. Also converts values to other types if specified.
                     * @param message GetDataAccessLabelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.GetDataAccessLabelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetDataAccessLabelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetDataAccessLabelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDataAccessLabelsRequest. */
                interface IListDataAccessLabelsRequest {

                    /** ListDataAccessLabelsRequest parent */
                    parent?: (string|null);

                    /** ListDataAccessLabelsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListDataAccessLabelsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListDataAccessLabelsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListDataAccessLabelsRequest. */
                class ListDataAccessLabelsRequest implements IListDataAccessLabelsRequest {

                    /**
                     * Constructs a new ListDataAccessLabelsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IListDataAccessLabelsRequest);

                    /** ListDataAccessLabelsRequest parent. */
                    public parent: string;

                    /** ListDataAccessLabelsRequest pageSize. */
                    public pageSize: number;

                    /** ListDataAccessLabelsRequest pageToken. */
                    public pageToken: string;

                    /** ListDataAccessLabelsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListDataAccessLabelsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDataAccessLabelsRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IListDataAccessLabelsRequest): google.cloud.chronicle.v1.ListDataAccessLabelsRequest;

                    /**
                     * Encodes the specified ListDataAccessLabelsRequest message. Does not implicitly {@link google.cloud.chronicle.v1.ListDataAccessLabelsRequest.verify|verify} messages.
                     * @param message ListDataAccessLabelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IListDataAccessLabelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDataAccessLabelsRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.ListDataAccessLabelsRequest.verify|verify} messages.
                     * @param message ListDataAccessLabelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IListDataAccessLabelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDataAccessLabelsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDataAccessLabelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.ListDataAccessLabelsRequest;

                    /**
                     * Decodes a ListDataAccessLabelsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDataAccessLabelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.ListDataAccessLabelsRequest;

                    /**
                     * Verifies a ListDataAccessLabelsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDataAccessLabelsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDataAccessLabelsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.ListDataAccessLabelsRequest;

                    /**
                     * Creates a plain object from a ListDataAccessLabelsRequest message. Also converts values to other types if specified.
                     * @param message ListDataAccessLabelsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.ListDataAccessLabelsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDataAccessLabelsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDataAccessLabelsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDataAccessLabelsResponse. */
                interface IListDataAccessLabelsResponse {

                    /** ListDataAccessLabelsResponse dataAccessLabels */
                    dataAccessLabels?: (google.cloud.chronicle.v1.IDataAccessLabel[]|null);

                    /** ListDataAccessLabelsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListDataAccessLabelsResponse. */
                class ListDataAccessLabelsResponse implements IListDataAccessLabelsResponse {

                    /**
                     * Constructs a new ListDataAccessLabelsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IListDataAccessLabelsResponse);

                    /** ListDataAccessLabelsResponse dataAccessLabels. */
                    public dataAccessLabels: google.cloud.chronicle.v1.IDataAccessLabel[];

                    /** ListDataAccessLabelsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListDataAccessLabelsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDataAccessLabelsResponse instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IListDataAccessLabelsResponse): google.cloud.chronicle.v1.ListDataAccessLabelsResponse;

                    /**
                     * Encodes the specified ListDataAccessLabelsResponse message. Does not implicitly {@link google.cloud.chronicle.v1.ListDataAccessLabelsResponse.verify|verify} messages.
                     * @param message ListDataAccessLabelsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IListDataAccessLabelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDataAccessLabelsResponse message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.ListDataAccessLabelsResponse.verify|verify} messages.
                     * @param message ListDataAccessLabelsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IListDataAccessLabelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDataAccessLabelsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDataAccessLabelsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.ListDataAccessLabelsResponse;

                    /**
                     * Decodes a ListDataAccessLabelsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDataAccessLabelsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.ListDataAccessLabelsResponse;

                    /**
                     * Verifies a ListDataAccessLabelsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDataAccessLabelsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDataAccessLabelsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.ListDataAccessLabelsResponse;

                    /**
                     * Creates a plain object from a ListDataAccessLabelsResponse message. Also converts values to other types if specified.
                     * @param message ListDataAccessLabelsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.ListDataAccessLabelsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDataAccessLabelsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDataAccessLabelsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateDataAccessLabelRequest. */
                interface IUpdateDataAccessLabelRequest {

                    /** UpdateDataAccessLabelRequest dataAccessLabel */
                    dataAccessLabel?: (google.cloud.chronicle.v1.IDataAccessLabel|null);

                    /** UpdateDataAccessLabelRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateDataAccessLabelRequest. */
                class UpdateDataAccessLabelRequest implements IUpdateDataAccessLabelRequest {

                    /**
                     * Constructs a new UpdateDataAccessLabelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IUpdateDataAccessLabelRequest);

                    /** UpdateDataAccessLabelRequest dataAccessLabel. */
                    public dataAccessLabel?: (google.cloud.chronicle.v1.IDataAccessLabel|null);

                    /** UpdateDataAccessLabelRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateDataAccessLabelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateDataAccessLabelRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IUpdateDataAccessLabelRequest): google.cloud.chronicle.v1.UpdateDataAccessLabelRequest;

                    /**
                     * Encodes the specified UpdateDataAccessLabelRequest message. Does not implicitly {@link google.cloud.chronicle.v1.UpdateDataAccessLabelRequest.verify|verify} messages.
                     * @param message UpdateDataAccessLabelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IUpdateDataAccessLabelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateDataAccessLabelRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.UpdateDataAccessLabelRequest.verify|verify} messages.
                     * @param message UpdateDataAccessLabelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IUpdateDataAccessLabelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateDataAccessLabelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateDataAccessLabelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.UpdateDataAccessLabelRequest;

                    /**
                     * Decodes an UpdateDataAccessLabelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateDataAccessLabelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.UpdateDataAccessLabelRequest;

                    /**
                     * Verifies an UpdateDataAccessLabelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateDataAccessLabelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateDataAccessLabelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.UpdateDataAccessLabelRequest;

                    /**
                     * Creates a plain object from an UpdateDataAccessLabelRequest message. Also converts values to other types if specified.
                     * @param message UpdateDataAccessLabelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.UpdateDataAccessLabelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateDataAccessLabelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateDataAccessLabelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteDataAccessLabelRequest. */
                interface IDeleteDataAccessLabelRequest {

                    /** DeleteDataAccessLabelRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteDataAccessLabelRequest. */
                class DeleteDataAccessLabelRequest implements IDeleteDataAccessLabelRequest {

                    /**
                     * Constructs a new DeleteDataAccessLabelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IDeleteDataAccessLabelRequest);

                    /** DeleteDataAccessLabelRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteDataAccessLabelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteDataAccessLabelRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IDeleteDataAccessLabelRequest): google.cloud.chronicle.v1.DeleteDataAccessLabelRequest;

                    /**
                     * Encodes the specified DeleteDataAccessLabelRequest message. Does not implicitly {@link google.cloud.chronicle.v1.DeleteDataAccessLabelRequest.verify|verify} messages.
                     * @param message DeleteDataAccessLabelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IDeleteDataAccessLabelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteDataAccessLabelRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.DeleteDataAccessLabelRequest.verify|verify} messages.
                     * @param message DeleteDataAccessLabelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IDeleteDataAccessLabelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteDataAccessLabelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteDataAccessLabelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.DeleteDataAccessLabelRequest;

                    /**
                     * Decodes a DeleteDataAccessLabelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteDataAccessLabelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.DeleteDataAccessLabelRequest;

                    /**
                     * Verifies a DeleteDataAccessLabelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteDataAccessLabelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteDataAccessLabelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.DeleteDataAccessLabelRequest;

                    /**
                     * Creates a plain object from a DeleteDataAccessLabelRequest message. Also converts values to other types if specified.
                     * @param message DeleteDataAccessLabelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.DeleteDataAccessLabelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteDataAccessLabelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteDataAccessLabelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateDataAccessScopeRequest. */
                interface ICreateDataAccessScopeRequest {

                    /** CreateDataAccessScopeRequest parent */
                    parent?: (string|null);

                    /** CreateDataAccessScopeRequest dataAccessScope */
                    dataAccessScope?: (google.cloud.chronicle.v1.IDataAccessScope|null);

                    /** CreateDataAccessScopeRequest dataAccessScopeId */
                    dataAccessScopeId?: (string|null);
                }

                /** Represents a CreateDataAccessScopeRequest. */
                class CreateDataAccessScopeRequest implements ICreateDataAccessScopeRequest {

                    /**
                     * Constructs a new CreateDataAccessScopeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.ICreateDataAccessScopeRequest);

                    /** CreateDataAccessScopeRequest parent. */
                    public parent: string;

                    /** CreateDataAccessScopeRequest dataAccessScope. */
                    public dataAccessScope?: (google.cloud.chronicle.v1.IDataAccessScope|null);

                    /** CreateDataAccessScopeRequest dataAccessScopeId. */
                    public dataAccessScopeId: string;

                    /**
                     * Creates a new CreateDataAccessScopeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateDataAccessScopeRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.ICreateDataAccessScopeRequest): google.cloud.chronicle.v1.CreateDataAccessScopeRequest;

                    /**
                     * Encodes the specified CreateDataAccessScopeRequest message. Does not implicitly {@link google.cloud.chronicle.v1.CreateDataAccessScopeRequest.verify|verify} messages.
                     * @param message CreateDataAccessScopeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.ICreateDataAccessScopeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateDataAccessScopeRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.CreateDataAccessScopeRequest.verify|verify} messages.
                     * @param message CreateDataAccessScopeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.ICreateDataAccessScopeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateDataAccessScopeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateDataAccessScopeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.CreateDataAccessScopeRequest;

                    /**
                     * Decodes a CreateDataAccessScopeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateDataAccessScopeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.CreateDataAccessScopeRequest;

                    /**
                     * Verifies a CreateDataAccessScopeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateDataAccessScopeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateDataAccessScopeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.CreateDataAccessScopeRequest;

                    /**
                     * Creates a plain object from a CreateDataAccessScopeRequest message. Also converts values to other types if specified.
                     * @param message CreateDataAccessScopeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.CreateDataAccessScopeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateDataAccessScopeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateDataAccessScopeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetDataAccessScopeRequest. */
                interface IGetDataAccessScopeRequest {

                    /** GetDataAccessScopeRequest name */
                    name?: (string|null);
                }

                /** Represents a GetDataAccessScopeRequest. */
                class GetDataAccessScopeRequest implements IGetDataAccessScopeRequest {

                    /**
                     * Constructs a new GetDataAccessScopeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IGetDataAccessScopeRequest);

                    /** GetDataAccessScopeRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetDataAccessScopeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetDataAccessScopeRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IGetDataAccessScopeRequest): google.cloud.chronicle.v1.GetDataAccessScopeRequest;

                    /**
                     * Encodes the specified GetDataAccessScopeRequest message. Does not implicitly {@link google.cloud.chronicle.v1.GetDataAccessScopeRequest.verify|verify} messages.
                     * @param message GetDataAccessScopeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IGetDataAccessScopeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetDataAccessScopeRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.GetDataAccessScopeRequest.verify|verify} messages.
                     * @param message GetDataAccessScopeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IGetDataAccessScopeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetDataAccessScopeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetDataAccessScopeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.GetDataAccessScopeRequest;

                    /**
                     * Decodes a GetDataAccessScopeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetDataAccessScopeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.GetDataAccessScopeRequest;

                    /**
                     * Verifies a GetDataAccessScopeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetDataAccessScopeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetDataAccessScopeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.GetDataAccessScopeRequest;

                    /**
                     * Creates a plain object from a GetDataAccessScopeRequest message. Also converts values to other types if specified.
                     * @param message GetDataAccessScopeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.GetDataAccessScopeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetDataAccessScopeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetDataAccessScopeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDataAccessScopesRequest. */
                interface IListDataAccessScopesRequest {

                    /** ListDataAccessScopesRequest parent */
                    parent?: (string|null);

                    /** ListDataAccessScopesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListDataAccessScopesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListDataAccessScopesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListDataAccessScopesRequest. */
                class ListDataAccessScopesRequest implements IListDataAccessScopesRequest {

                    /**
                     * Constructs a new ListDataAccessScopesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IListDataAccessScopesRequest);

                    /** ListDataAccessScopesRequest parent. */
                    public parent: string;

                    /** ListDataAccessScopesRequest pageSize. */
                    public pageSize: number;

                    /** ListDataAccessScopesRequest pageToken. */
                    public pageToken: string;

                    /** ListDataAccessScopesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListDataAccessScopesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDataAccessScopesRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IListDataAccessScopesRequest): google.cloud.chronicle.v1.ListDataAccessScopesRequest;

                    /**
                     * Encodes the specified ListDataAccessScopesRequest message. Does not implicitly {@link google.cloud.chronicle.v1.ListDataAccessScopesRequest.verify|verify} messages.
                     * @param message ListDataAccessScopesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IListDataAccessScopesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDataAccessScopesRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.ListDataAccessScopesRequest.verify|verify} messages.
                     * @param message ListDataAccessScopesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IListDataAccessScopesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDataAccessScopesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDataAccessScopesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.ListDataAccessScopesRequest;

                    /**
                     * Decodes a ListDataAccessScopesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDataAccessScopesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.ListDataAccessScopesRequest;

                    /**
                     * Verifies a ListDataAccessScopesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDataAccessScopesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDataAccessScopesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.ListDataAccessScopesRequest;

                    /**
                     * Creates a plain object from a ListDataAccessScopesRequest message. Also converts values to other types if specified.
                     * @param message ListDataAccessScopesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.ListDataAccessScopesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDataAccessScopesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDataAccessScopesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDataAccessScopesResponse. */
                interface IListDataAccessScopesResponse {

                    /** ListDataAccessScopesResponse dataAccessScopes */
                    dataAccessScopes?: (google.cloud.chronicle.v1.IDataAccessScope[]|null);

                    /** ListDataAccessScopesResponse globalDataAccessScopeGranted */
                    globalDataAccessScopeGranted?: (boolean|null);

                    /** ListDataAccessScopesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListDataAccessScopesResponse. */
                class ListDataAccessScopesResponse implements IListDataAccessScopesResponse {

                    /**
                     * Constructs a new ListDataAccessScopesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IListDataAccessScopesResponse);

                    /** ListDataAccessScopesResponse dataAccessScopes. */
                    public dataAccessScopes: google.cloud.chronicle.v1.IDataAccessScope[];

                    /** ListDataAccessScopesResponse globalDataAccessScopeGranted. */
                    public globalDataAccessScopeGranted?: (boolean|null);

                    /** ListDataAccessScopesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListDataAccessScopesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDataAccessScopesResponse instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IListDataAccessScopesResponse): google.cloud.chronicle.v1.ListDataAccessScopesResponse;

                    /**
                     * Encodes the specified ListDataAccessScopesResponse message. Does not implicitly {@link google.cloud.chronicle.v1.ListDataAccessScopesResponse.verify|verify} messages.
                     * @param message ListDataAccessScopesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IListDataAccessScopesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDataAccessScopesResponse message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.ListDataAccessScopesResponse.verify|verify} messages.
                     * @param message ListDataAccessScopesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IListDataAccessScopesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDataAccessScopesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDataAccessScopesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.ListDataAccessScopesResponse;

                    /**
                     * Decodes a ListDataAccessScopesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDataAccessScopesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.ListDataAccessScopesResponse;

                    /**
                     * Verifies a ListDataAccessScopesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDataAccessScopesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDataAccessScopesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.ListDataAccessScopesResponse;

                    /**
                     * Creates a plain object from a ListDataAccessScopesResponse message. Also converts values to other types if specified.
                     * @param message ListDataAccessScopesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.ListDataAccessScopesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDataAccessScopesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDataAccessScopesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateDataAccessScopeRequest. */
                interface IUpdateDataAccessScopeRequest {

                    /** UpdateDataAccessScopeRequest dataAccessScope */
                    dataAccessScope?: (google.cloud.chronicle.v1.IDataAccessScope|null);

                    /** UpdateDataAccessScopeRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateDataAccessScopeRequest. */
                class UpdateDataAccessScopeRequest implements IUpdateDataAccessScopeRequest {

                    /**
                     * Constructs a new UpdateDataAccessScopeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IUpdateDataAccessScopeRequest);

                    /** UpdateDataAccessScopeRequest dataAccessScope. */
                    public dataAccessScope?: (google.cloud.chronicle.v1.IDataAccessScope|null);

                    /** UpdateDataAccessScopeRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateDataAccessScopeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateDataAccessScopeRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IUpdateDataAccessScopeRequest): google.cloud.chronicle.v1.UpdateDataAccessScopeRequest;

                    /**
                     * Encodes the specified UpdateDataAccessScopeRequest message. Does not implicitly {@link google.cloud.chronicle.v1.UpdateDataAccessScopeRequest.verify|verify} messages.
                     * @param message UpdateDataAccessScopeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IUpdateDataAccessScopeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateDataAccessScopeRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.UpdateDataAccessScopeRequest.verify|verify} messages.
                     * @param message UpdateDataAccessScopeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IUpdateDataAccessScopeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateDataAccessScopeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateDataAccessScopeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.UpdateDataAccessScopeRequest;

                    /**
                     * Decodes an UpdateDataAccessScopeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateDataAccessScopeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.UpdateDataAccessScopeRequest;

                    /**
                     * Verifies an UpdateDataAccessScopeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateDataAccessScopeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateDataAccessScopeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.UpdateDataAccessScopeRequest;

                    /**
                     * Creates a plain object from an UpdateDataAccessScopeRequest message. Also converts values to other types if specified.
                     * @param message UpdateDataAccessScopeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.UpdateDataAccessScopeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateDataAccessScopeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateDataAccessScopeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteDataAccessScopeRequest. */
                interface IDeleteDataAccessScopeRequest {

                    /** DeleteDataAccessScopeRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteDataAccessScopeRequest. */
                class DeleteDataAccessScopeRequest implements IDeleteDataAccessScopeRequest {

                    /**
                     * Constructs a new DeleteDataAccessScopeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IDeleteDataAccessScopeRequest);

                    /** DeleteDataAccessScopeRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteDataAccessScopeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteDataAccessScopeRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IDeleteDataAccessScopeRequest): google.cloud.chronicle.v1.DeleteDataAccessScopeRequest;

                    /**
                     * Encodes the specified DeleteDataAccessScopeRequest message. Does not implicitly {@link google.cloud.chronicle.v1.DeleteDataAccessScopeRequest.verify|verify} messages.
                     * @param message DeleteDataAccessScopeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IDeleteDataAccessScopeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteDataAccessScopeRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.DeleteDataAccessScopeRequest.verify|verify} messages.
                     * @param message DeleteDataAccessScopeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IDeleteDataAccessScopeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteDataAccessScopeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteDataAccessScopeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.DeleteDataAccessScopeRequest;

                    /**
                     * Decodes a DeleteDataAccessScopeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteDataAccessScopeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.DeleteDataAccessScopeRequest;

                    /**
                     * Verifies a DeleteDataAccessScopeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteDataAccessScopeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteDataAccessScopeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.DeleteDataAccessScopeRequest;

                    /**
                     * Creates a plain object from a DeleteDataAccessScopeRequest message. Also converts values to other types if specified.
                     * @param message DeleteDataAccessScopeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.DeleteDataAccessScopeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteDataAccessScopeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteDataAccessScopeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DataAccessLabel. */
                interface IDataAccessLabel {

                    /** DataAccessLabel udmQuery */
                    udmQuery?: (string|null);

                    /** DataAccessLabel name */
                    name?: (string|null);

                    /** DataAccessLabel displayName */
                    displayName?: (string|null);

                    /** DataAccessLabel createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** DataAccessLabel updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** DataAccessLabel author */
                    author?: (string|null);

                    /** DataAccessLabel lastEditor */
                    lastEditor?: (string|null);

                    /** DataAccessLabel description */
                    description?: (string|null);
                }

                /** Represents a DataAccessLabel. */
                class DataAccessLabel implements IDataAccessLabel {

                    /**
                     * Constructs a new DataAccessLabel.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IDataAccessLabel);

                    /** DataAccessLabel udmQuery. */
                    public udmQuery?: (string|null);

                    /** DataAccessLabel name. */
                    public name: string;

                    /** DataAccessLabel displayName. */
                    public displayName: string;

                    /** DataAccessLabel createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** DataAccessLabel updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** DataAccessLabel author. */
                    public author: string;

                    /** DataAccessLabel lastEditor. */
                    public lastEditor: string;

                    /** DataAccessLabel description. */
                    public description: string;

                    /** DataAccessLabel definition. */
                    public definition?: "udmQuery";

                    /**
                     * Creates a new DataAccessLabel instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DataAccessLabel instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IDataAccessLabel): google.cloud.chronicle.v1.DataAccessLabel;

                    /**
                     * Encodes the specified DataAccessLabel message. Does not implicitly {@link google.cloud.chronicle.v1.DataAccessLabel.verify|verify} messages.
                     * @param message DataAccessLabel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IDataAccessLabel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DataAccessLabel message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.DataAccessLabel.verify|verify} messages.
                     * @param message DataAccessLabel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IDataAccessLabel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DataAccessLabel message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DataAccessLabel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.DataAccessLabel;

                    /**
                     * Decodes a DataAccessLabel message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DataAccessLabel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.DataAccessLabel;

                    /**
                     * Verifies a DataAccessLabel message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DataAccessLabel message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DataAccessLabel
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.DataAccessLabel;

                    /**
                     * Creates a plain object from a DataAccessLabel message. Also converts values to other types if specified.
                     * @param message DataAccessLabel
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.DataAccessLabel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DataAccessLabel to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DataAccessLabel
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DataAccessScope. */
                interface IDataAccessScope {

                    /** DataAccessScope name */
                    name?: (string|null);

                    /** DataAccessScope allowedDataAccessLabels */
                    allowedDataAccessLabels?: (google.cloud.chronicle.v1.IDataAccessLabelReference[]|null);

                    /** DataAccessScope deniedDataAccessLabels */
                    deniedDataAccessLabels?: (google.cloud.chronicle.v1.IDataAccessLabelReference[]|null);

                    /** DataAccessScope displayName */
                    displayName?: (string|null);

                    /** DataAccessScope createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** DataAccessScope updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** DataAccessScope author */
                    author?: (string|null);

                    /** DataAccessScope lastEditor */
                    lastEditor?: (string|null);

                    /** DataAccessScope description */
                    description?: (string|null);

                    /** DataAccessScope allowAll */
                    allowAll?: (boolean|null);
                }

                /** Represents a DataAccessScope. */
                class DataAccessScope implements IDataAccessScope {

                    /**
                     * Constructs a new DataAccessScope.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IDataAccessScope);

                    /** DataAccessScope name. */
                    public name: string;

                    /** DataAccessScope allowedDataAccessLabels. */
                    public allowedDataAccessLabels: google.cloud.chronicle.v1.IDataAccessLabelReference[];

                    /** DataAccessScope deniedDataAccessLabels. */
                    public deniedDataAccessLabels: google.cloud.chronicle.v1.IDataAccessLabelReference[];

                    /** DataAccessScope displayName. */
                    public displayName: string;

                    /** DataAccessScope createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** DataAccessScope updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** DataAccessScope author. */
                    public author: string;

                    /** DataAccessScope lastEditor. */
                    public lastEditor: string;

                    /** DataAccessScope description. */
                    public description: string;

                    /** DataAccessScope allowAll. */
                    public allowAll: boolean;

                    /**
                     * Creates a new DataAccessScope instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DataAccessScope instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IDataAccessScope): google.cloud.chronicle.v1.DataAccessScope;

                    /**
                     * Encodes the specified DataAccessScope message. Does not implicitly {@link google.cloud.chronicle.v1.DataAccessScope.verify|verify} messages.
                     * @param message DataAccessScope message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IDataAccessScope, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DataAccessScope message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.DataAccessScope.verify|verify} messages.
                     * @param message DataAccessScope message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IDataAccessScope, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DataAccessScope message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DataAccessScope
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.DataAccessScope;

                    /**
                     * Decodes a DataAccessScope message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DataAccessScope
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.DataAccessScope;

                    /**
                     * Verifies a DataAccessScope message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DataAccessScope message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DataAccessScope
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.DataAccessScope;

                    /**
                     * Creates a plain object from a DataAccessScope message. Also converts values to other types if specified.
                     * @param message DataAccessScope
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.DataAccessScope, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DataAccessScope to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DataAccessScope
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DataAccessLabelReference. */
                interface IDataAccessLabelReference {

                    /** DataAccessLabelReference dataAccessLabel */
                    dataAccessLabel?: (string|null);

                    /** DataAccessLabelReference logType */
                    logType?: (string|null);

                    /** DataAccessLabelReference assetNamespace */
                    assetNamespace?: (string|null);

                    /** DataAccessLabelReference ingestionLabel */
                    ingestionLabel?: (google.cloud.chronicle.v1.IIngestionLabel|null);

                    /** DataAccessLabelReference displayName */
                    displayName?: (string|null);
                }

                /** Represents a DataAccessLabelReference. */
                class DataAccessLabelReference implements IDataAccessLabelReference {

                    /**
                     * Constructs a new DataAccessLabelReference.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IDataAccessLabelReference);

                    /** DataAccessLabelReference dataAccessLabel. */
                    public dataAccessLabel?: (string|null);

                    /** DataAccessLabelReference logType. */
                    public logType?: (string|null);

                    /** DataAccessLabelReference assetNamespace. */
                    public assetNamespace?: (string|null);

                    /** DataAccessLabelReference ingestionLabel. */
                    public ingestionLabel?: (google.cloud.chronicle.v1.IIngestionLabel|null);

                    /** DataAccessLabelReference displayName. */
                    public displayName: string;

                    /** DataAccessLabelReference label. */
                    public label?: ("dataAccessLabel"|"logType"|"assetNamespace"|"ingestionLabel");

                    /**
                     * Creates a new DataAccessLabelReference instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DataAccessLabelReference instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IDataAccessLabelReference): google.cloud.chronicle.v1.DataAccessLabelReference;

                    /**
                     * Encodes the specified DataAccessLabelReference message. Does not implicitly {@link google.cloud.chronicle.v1.DataAccessLabelReference.verify|verify} messages.
                     * @param message DataAccessLabelReference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IDataAccessLabelReference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DataAccessLabelReference message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.DataAccessLabelReference.verify|verify} messages.
                     * @param message DataAccessLabelReference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IDataAccessLabelReference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DataAccessLabelReference message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DataAccessLabelReference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.DataAccessLabelReference;

                    /**
                     * Decodes a DataAccessLabelReference message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DataAccessLabelReference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.DataAccessLabelReference;

                    /**
                     * Verifies a DataAccessLabelReference message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DataAccessLabelReference message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DataAccessLabelReference
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.DataAccessLabelReference;

                    /**
                     * Creates a plain object from a DataAccessLabelReference message. Also converts values to other types if specified.
                     * @param message DataAccessLabelReference
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.DataAccessLabelReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DataAccessLabelReference to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DataAccessLabelReference
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an IngestionLabel. */
                interface IIngestionLabel {

                    /** IngestionLabel ingestionLabelKey */
                    ingestionLabelKey?: (string|null);

                    /** IngestionLabel ingestionLabelValue */
                    ingestionLabelValue?: (string|null);
                }

                /** Represents an IngestionLabel. */
                class IngestionLabel implements IIngestionLabel {

                    /**
                     * Constructs a new IngestionLabel.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IIngestionLabel);

                    /** IngestionLabel ingestionLabelKey. */
                    public ingestionLabelKey: string;

                    /** IngestionLabel ingestionLabelValue. */
                    public ingestionLabelValue: string;

                    /**
                     * Creates a new IngestionLabel instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IngestionLabel instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IIngestionLabel): google.cloud.chronicle.v1.IngestionLabel;

                    /**
                     * Encodes the specified IngestionLabel message. Does not implicitly {@link google.cloud.chronicle.v1.IngestionLabel.verify|verify} messages.
                     * @param message IngestionLabel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IIngestionLabel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IngestionLabel message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.IngestionLabel.verify|verify} messages.
                     * @param message IngestionLabel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IIngestionLabel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IngestionLabel message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IngestionLabel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.IngestionLabel;

                    /**
                     * Decodes an IngestionLabel message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IngestionLabel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.IngestionLabel;

                    /**
                     * Verifies an IngestionLabel message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IngestionLabel message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IngestionLabel
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.IngestionLabel;

                    /**
                     * Creates a plain object from an IngestionLabel message. Also converts values to other types if specified.
                     * @param message IngestionLabel
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.IngestionLabel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IngestionLabel to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for IngestionLabel
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents an EntityService */
                class EntityService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new EntityService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new EntityService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): EntityService;

                    /**
                     * Calls GetWatchlist.
                     * @param request GetWatchlistRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Watchlist
                     */
                    public getWatchlist(request: google.cloud.chronicle.v1.IGetWatchlistRequest, callback: google.cloud.chronicle.v1.EntityService.GetWatchlistCallback): void;

                    /**
                     * Calls GetWatchlist.
                     * @param request GetWatchlistRequest message or plain object
                     * @returns Promise
                     */
                    public getWatchlist(request: google.cloud.chronicle.v1.IGetWatchlistRequest): Promise<google.cloud.chronicle.v1.Watchlist>;

                    /**
                     * Calls ListWatchlists.
                     * @param request ListWatchlistsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListWatchlistsResponse
                     */
                    public listWatchlists(request: google.cloud.chronicle.v1.IListWatchlistsRequest, callback: google.cloud.chronicle.v1.EntityService.ListWatchlistsCallback): void;

                    /**
                     * Calls ListWatchlists.
                     * @param request ListWatchlistsRequest message or plain object
                     * @returns Promise
                     */
                    public listWatchlists(request: google.cloud.chronicle.v1.IListWatchlistsRequest): Promise<google.cloud.chronicle.v1.ListWatchlistsResponse>;

                    /**
                     * Calls CreateWatchlist.
                     * @param request CreateWatchlistRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Watchlist
                     */
                    public createWatchlist(request: google.cloud.chronicle.v1.ICreateWatchlistRequest, callback: google.cloud.chronicle.v1.EntityService.CreateWatchlistCallback): void;

                    /**
                     * Calls CreateWatchlist.
                     * @param request CreateWatchlistRequest message or plain object
                     * @returns Promise
                     */
                    public createWatchlist(request: google.cloud.chronicle.v1.ICreateWatchlistRequest): Promise<google.cloud.chronicle.v1.Watchlist>;

                    /**
                     * Calls UpdateWatchlist.
                     * @param request UpdateWatchlistRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Watchlist
                     */
                    public updateWatchlist(request: google.cloud.chronicle.v1.IUpdateWatchlistRequest, callback: google.cloud.chronicle.v1.EntityService.UpdateWatchlistCallback): void;

                    /**
                     * Calls UpdateWatchlist.
                     * @param request UpdateWatchlistRequest message or plain object
                     * @returns Promise
                     */
                    public updateWatchlist(request: google.cloud.chronicle.v1.IUpdateWatchlistRequest): Promise<google.cloud.chronicle.v1.Watchlist>;

                    /**
                     * Calls DeleteWatchlist.
                     * @param request DeleteWatchlistRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteWatchlist(request: google.cloud.chronicle.v1.IDeleteWatchlistRequest, callback: google.cloud.chronicle.v1.EntityService.DeleteWatchlistCallback): void;

                    /**
                     * Calls DeleteWatchlist.
                     * @param request DeleteWatchlistRequest message or plain object
                     * @returns Promise
                     */
                    public deleteWatchlist(request: google.cloud.chronicle.v1.IDeleteWatchlistRequest): Promise<google.protobuf.Empty>;
                }

                namespace EntityService {

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.EntityService|getWatchlist}.
                     * @param error Error, if any
                     * @param [response] Watchlist
                     */
                    type GetWatchlistCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.Watchlist) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.EntityService|listWatchlists}.
                     * @param error Error, if any
                     * @param [response] ListWatchlistsResponse
                     */
                    type ListWatchlistsCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.ListWatchlistsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.EntityService|createWatchlist}.
                     * @param error Error, if any
                     * @param [response] Watchlist
                     */
                    type CreateWatchlistCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.Watchlist) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.EntityService|updateWatchlist}.
                     * @param error Error, if any
                     * @param [response] Watchlist
                     */
                    type UpdateWatchlistCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.Watchlist) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.EntityService|deleteWatchlist}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteWatchlistCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                }

                /** Properties of a Watchlist. */
                interface IWatchlist {

                    /** Watchlist name */
                    name?: (string|null);

                    /** Watchlist displayName */
                    displayName?: (string|null);

                    /** Watchlist description */
                    description?: (string|null);

                    /** Watchlist multiplyingFactor */
                    multiplyingFactor?: (number|null);

                    /** Watchlist entityPopulationMechanism */
                    entityPopulationMechanism?: (google.cloud.chronicle.v1.Watchlist.IEntityPopulationMechanism|null);

                    /** Watchlist entityCount */
                    entityCount?: (google.cloud.chronicle.v1.Watchlist.IEntityCount|null);

                    /** Watchlist createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Watchlist updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Watchlist watchlistUserPreferences */
                    watchlistUserPreferences?: (google.cloud.chronicle.v1.IWatchlistUserPreferences|null);
                }

                /** Represents a Watchlist. */
                class Watchlist implements IWatchlist {

                    /**
                     * Constructs a new Watchlist.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IWatchlist);

                    /** Watchlist name. */
                    public name: string;

                    /** Watchlist displayName. */
                    public displayName: string;

                    /** Watchlist description. */
                    public description: string;

                    /** Watchlist multiplyingFactor. */
                    public multiplyingFactor: number;

                    /** Watchlist entityPopulationMechanism. */
                    public entityPopulationMechanism?: (google.cloud.chronicle.v1.Watchlist.IEntityPopulationMechanism|null);

                    /** Watchlist entityCount. */
                    public entityCount?: (google.cloud.chronicle.v1.Watchlist.IEntityCount|null);

                    /** Watchlist createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Watchlist updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Watchlist watchlistUserPreferences. */
                    public watchlistUserPreferences?: (google.cloud.chronicle.v1.IWatchlistUserPreferences|null);

                    /**
                     * Creates a new Watchlist instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Watchlist instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IWatchlist): google.cloud.chronicle.v1.Watchlist;

                    /**
                     * Encodes the specified Watchlist message. Does not implicitly {@link google.cloud.chronicle.v1.Watchlist.verify|verify} messages.
                     * @param message Watchlist message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IWatchlist, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Watchlist message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.Watchlist.verify|verify} messages.
                     * @param message Watchlist message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IWatchlist, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Watchlist message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Watchlist
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.Watchlist;

                    /**
                     * Decodes a Watchlist message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Watchlist
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.Watchlist;

                    /**
                     * Verifies a Watchlist message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Watchlist message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Watchlist
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.Watchlist;

                    /**
                     * Creates a plain object from a Watchlist message. Also converts values to other types if specified.
                     * @param message Watchlist
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.Watchlist, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Watchlist to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Watchlist
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Watchlist {

                    /** Properties of an EntityPopulationMechanism. */
                    interface IEntityPopulationMechanism {

                        /** EntityPopulationMechanism manual */
                        manual?: (google.cloud.chronicle.v1.Watchlist.EntityPopulationMechanism.IManual|null);
                    }

                    /** Represents an EntityPopulationMechanism. */
                    class EntityPopulationMechanism implements IEntityPopulationMechanism {

                        /**
                         * Constructs a new EntityPopulationMechanism.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.chronicle.v1.Watchlist.IEntityPopulationMechanism);

                        /** EntityPopulationMechanism manual. */
                        public manual?: (google.cloud.chronicle.v1.Watchlist.EntityPopulationMechanism.IManual|null);

                        /** EntityPopulationMechanism mechanism. */
                        public mechanism?: "manual";

                        /**
                         * Creates a new EntityPopulationMechanism instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EntityPopulationMechanism instance
                         */
                        public static create(properties?: google.cloud.chronicle.v1.Watchlist.IEntityPopulationMechanism): google.cloud.chronicle.v1.Watchlist.EntityPopulationMechanism;

                        /**
                         * Encodes the specified EntityPopulationMechanism message. Does not implicitly {@link google.cloud.chronicle.v1.Watchlist.EntityPopulationMechanism.verify|verify} messages.
                         * @param message EntityPopulationMechanism message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.chronicle.v1.Watchlist.IEntityPopulationMechanism, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EntityPopulationMechanism message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.Watchlist.EntityPopulationMechanism.verify|verify} messages.
                         * @param message EntityPopulationMechanism message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.chronicle.v1.Watchlist.IEntityPopulationMechanism, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EntityPopulationMechanism message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EntityPopulationMechanism
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.Watchlist.EntityPopulationMechanism;

                        /**
                         * Decodes an EntityPopulationMechanism message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EntityPopulationMechanism
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.Watchlist.EntityPopulationMechanism;

                        /**
                         * Verifies an EntityPopulationMechanism message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EntityPopulationMechanism message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EntityPopulationMechanism
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.Watchlist.EntityPopulationMechanism;

                        /**
                         * Creates a plain object from an EntityPopulationMechanism message. Also converts values to other types if specified.
                         * @param message EntityPopulationMechanism
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.chronicle.v1.Watchlist.EntityPopulationMechanism, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EntityPopulationMechanism to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for EntityPopulationMechanism
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace EntityPopulationMechanism {

                        /** Properties of a Manual. */
                        interface IManual {
                        }

                        /** Represents a Manual. */
                        class Manual implements IManual {

                            /**
                             * Constructs a new Manual.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.chronicle.v1.Watchlist.EntityPopulationMechanism.IManual);

                            /**
                             * Creates a new Manual instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Manual instance
                             */
                            public static create(properties?: google.cloud.chronicle.v1.Watchlist.EntityPopulationMechanism.IManual): google.cloud.chronicle.v1.Watchlist.EntityPopulationMechanism.Manual;

                            /**
                             * Encodes the specified Manual message. Does not implicitly {@link google.cloud.chronicle.v1.Watchlist.EntityPopulationMechanism.Manual.verify|verify} messages.
                             * @param message Manual message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.chronicle.v1.Watchlist.EntityPopulationMechanism.IManual, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Manual message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.Watchlist.EntityPopulationMechanism.Manual.verify|verify} messages.
                             * @param message Manual message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.chronicle.v1.Watchlist.EntityPopulationMechanism.IManual, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Manual message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Manual
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.Watchlist.EntityPopulationMechanism.Manual;

                            /**
                             * Decodes a Manual message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Manual
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.Watchlist.EntityPopulationMechanism.Manual;

                            /**
                             * Verifies a Manual message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Manual message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Manual
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.Watchlist.EntityPopulationMechanism.Manual;

                            /**
                             * Creates a plain object from a Manual message. Also converts values to other types if specified.
                             * @param message Manual
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.chronicle.v1.Watchlist.EntityPopulationMechanism.Manual, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Manual to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Manual
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of an EntityCount. */
                    interface IEntityCount {

                        /** EntityCount user */
                        user?: (number|null);

                        /** EntityCount asset */
                        asset?: (number|null);
                    }

                    /** Represents an EntityCount. */
                    class EntityCount implements IEntityCount {

                        /**
                         * Constructs a new EntityCount.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.chronicle.v1.Watchlist.IEntityCount);

                        /** EntityCount user. */
                        public user: number;

                        /** EntityCount asset. */
                        public asset: number;

                        /**
                         * Creates a new EntityCount instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EntityCount instance
                         */
                        public static create(properties?: google.cloud.chronicle.v1.Watchlist.IEntityCount): google.cloud.chronicle.v1.Watchlist.EntityCount;

                        /**
                         * Encodes the specified EntityCount message. Does not implicitly {@link google.cloud.chronicle.v1.Watchlist.EntityCount.verify|verify} messages.
                         * @param message EntityCount message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.chronicle.v1.Watchlist.IEntityCount, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EntityCount message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.Watchlist.EntityCount.verify|verify} messages.
                         * @param message EntityCount message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.chronicle.v1.Watchlist.IEntityCount, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EntityCount message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EntityCount
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.Watchlist.EntityCount;

                        /**
                         * Decodes an EntityCount message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EntityCount
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.Watchlist.EntityCount;

                        /**
                         * Verifies an EntityCount message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EntityCount message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EntityCount
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.Watchlist.EntityCount;

                        /**
                         * Creates a plain object from an EntityCount message. Also converts values to other types if specified.
                         * @param message EntityCount
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.chronicle.v1.Watchlist.EntityCount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EntityCount to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for EntityCount
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a WatchlistUserPreferences. */
                interface IWatchlistUserPreferences {

                    /** WatchlistUserPreferences pinned */
                    pinned?: (boolean|null);
                }

                /** Represents a WatchlistUserPreferences. */
                class WatchlistUserPreferences implements IWatchlistUserPreferences {

                    /**
                     * Constructs a new WatchlistUserPreferences.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IWatchlistUserPreferences);

                    /** WatchlistUserPreferences pinned. */
                    public pinned: boolean;

                    /**
                     * Creates a new WatchlistUserPreferences instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WatchlistUserPreferences instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IWatchlistUserPreferences): google.cloud.chronicle.v1.WatchlistUserPreferences;

                    /**
                     * Encodes the specified WatchlistUserPreferences message. Does not implicitly {@link google.cloud.chronicle.v1.WatchlistUserPreferences.verify|verify} messages.
                     * @param message WatchlistUserPreferences message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IWatchlistUserPreferences, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WatchlistUserPreferences message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.WatchlistUserPreferences.verify|verify} messages.
                     * @param message WatchlistUserPreferences message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IWatchlistUserPreferences, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WatchlistUserPreferences message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WatchlistUserPreferences
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.WatchlistUserPreferences;

                    /**
                     * Decodes a WatchlistUserPreferences message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WatchlistUserPreferences
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.WatchlistUserPreferences;

                    /**
                     * Verifies a WatchlistUserPreferences message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WatchlistUserPreferences message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WatchlistUserPreferences
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.WatchlistUserPreferences;

                    /**
                     * Creates a plain object from a WatchlistUserPreferences message. Also converts values to other types if specified.
                     * @param message WatchlistUserPreferences
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.WatchlistUserPreferences, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WatchlistUserPreferences to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WatchlistUserPreferences
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetWatchlistRequest. */
                interface IGetWatchlistRequest {

                    /** GetWatchlistRequest name */
                    name?: (string|null);
                }

                /** Represents a GetWatchlistRequest. */
                class GetWatchlistRequest implements IGetWatchlistRequest {

                    /**
                     * Constructs a new GetWatchlistRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IGetWatchlistRequest);

                    /** GetWatchlistRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetWatchlistRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetWatchlistRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IGetWatchlistRequest): google.cloud.chronicle.v1.GetWatchlistRequest;

                    /**
                     * Encodes the specified GetWatchlistRequest message. Does not implicitly {@link google.cloud.chronicle.v1.GetWatchlistRequest.verify|verify} messages.
                     * @param message GetWatchlistRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IGetWatchlistRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetWatchlistRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.GetWatchlistRequest.verify|verify} messages.
                     * @param message GetWatchlistRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IGetWatchlistRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetWatchlistRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetWatchlistRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.GetWatchlistRequest;

                    /**
                     * Decodes a GetWatchlistRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetWatchlistRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.GetWatchlistRequest;

                    /**
                     * Verifies a GetWatchlistRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetWatchlistRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetWatchlistRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.GetWatchlistRequest;

                    /**
                     * Creates a plain object from a GetWatchlistRequest message. Also converts values to other types if specified.
                     * @param message GetWatchlistRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.GetWatchlistRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetWatchlistRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetWatchlistRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListWatchlistsRequest. */
                interface IListWatchlistsRequest {

                    /** ListWatchlistsRequest parent */
                    parent?: (string|null);

                    /** ListWatchlistsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListWatchlistsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListWatchlistsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListWatchlistsRequest. */
                class ListWatchlistsRequest implements IListWatchlistsRequest {

                    /**
                     * Constructs a new ListWatchlistsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IListWatchlistsRequest);

                    /** ListWatchlistsRequest parent. */
                    public parent: string;

                    /** ListWatchlistsRequest pageSize. */
                    public pageSize: number;

                    /** ListWatchlistsRequest pageToken. */
                    public pageToken: string;

                    /** ListWatchlistsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListWatchlistsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWatchlistsRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IListWatchlistsRequest): google.cloud.chronicle.v1.ListWatchlistsRequest;

                    /**
                     * Encodes the specified ListWatchlistsRequest message. Does not implicitly {@link google.cloud.chronicle.v1.ListWatchlistsRequest.verify|verify} messages.
                     * @param message ListWatchlistsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IListWatchlistsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWatchlistsRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.ListWatchlistsRequest.verify|verify} messages.
                     * @param message ListWatchlistsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IListWatchlistsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWatchlistsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWatchlistsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.ListWatchlistsRequest;

                    /**
                     * Decodes a ListWatchlistsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWatchlistsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.ListWatchlistsRequest;

                    /**
                     * Verifies a ListWatchlistsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWatchlistsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWatchlistsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.ListWatchlistsRequest;

                    /**
                     * Creates a plain object from a ListWatchlistsRequest message. Also converts values to other types if specified.
                     * @param message ListWatchlistsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.ListWatchlistsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWatchlistsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListWatchlistsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListWatchlistsResponse. */
                interface IListWatchlistsResponse {

                    /** ListWatchlistsResponse watchlists */
                    watchlists?: (google.cloud.chronicle.v1.IWatchlist[]|null);

                    /** ListWatchlistsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListWatchlistsResponse. */
                class ListWatchlistsResponse implements IListWatchlistsResponse {

                    /**
                     * Constructs a new ListWatchlistsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IListWatchlistsResponse);

                    /** ListWatchlistsResponse watchlists. */
                    public watchlists: google.cloud.chronicle.v1.IWatchlist[];

                    /** ListWatchlistsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListWatchlistsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWatchlistsResponse instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IListWatchlistsResponse): google.cloud.chronicle.v1.ListWatchlistsResponse;

                    /**
                     * Encodes the specified ListWatchlistsResponse message. Does not implicitly {@link google.cloud.chronicle.v1.ListWatchlistsResponse.verify|verify} messages.
                     * @param message ListWatchlistsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IListWatchlistsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWatchlistsResponse message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.ListWatchlistsResponse.verify|verify} messages.
                     * @param message ListWatchlistsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IListWatchlistsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWatchlistsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWatchlistsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.ListWatchlistsResponse;

                    /**
                     * Decodes a ListWatchlistsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWatchlistsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.ListWatchlistsResponse;

                    /**
                     * Verifies a ListWatchlistsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWatchlistsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWatchlistsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.ListWatchlistsResponse;

                    /**
                     * Creates a plain object from a ListWatchlistsResponse message. Also converts values to other types if specified.
                     * @param message ListWatchlistsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.ListWatchlistsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWatchlistsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListWatchlistsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateWatchlistRequest. */
                interface ICreateWatchlistRequest {

                    /** CreateWatchlistRequest parent */
                    parent?: (string|null);

                    /** CreateWatchlistRequest watchlistId */
                    watchlistId?: (string|null);

                    /** CreateWatchlistRequest watchlist */
                    watchlist?: (google.cloud.chronicle.v1.IWatchlist|null);
                }

                /** Represents a CreateWatchlistRequest. */
                class CreateWatchlistRequest implements ICreateWatchlistRequest {

                    /**
                     * Constructs a new CreateWatchlistRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.ICreateWatchlistRequest);

                    /** CreateWatchlistRequest parent. */
                    public parent: string;

                    /** CreateWatchlistRequest watchlistId. */
                    public watchlistId: string;

                    /** CreateWatchlistRequest watchlist. */
                    public watchlist?: (google.cloud.chronicle.v1.IWatchlist|null);

                    /**
                     * Creates a new CreateWatchlistRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateWatchlistRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.ICreateWatchlistRequest): google.cloud.chronicle.v1.CreateWatchlistRequest;

                    /**
                     * Encodes the specified CreateWatchlistRequest message. Does not implicitly {@link google.cloud.chronicle.v1.CreateWatchlistRequest.verify|verify} messages.
                     * @param message CreateWatchlistRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.ICreateWatchlistRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateWatchlistRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.CreateWatchlistRequest.verify|verify} messages.
                     * @param message CreateWatchlistRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.ICreateWatchlistRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateWatchlistRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateWatchlistRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.CreateWatchlistRequest;

                    /**
                     * Decodes a CreateWatchlistRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateWatchlistRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.CreateWatchlistRequest;

                    /**
                     * Verifies a CreateWatchlistRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateWatchlistRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateWatchlistRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.CreateWatchlistRequest;

                    /**
                     * Creates a plain object from a CreateWatchlistRequest message. Also converts values to other types if specified.
                     * @param message CreateWatchlistRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.CreateWatchlistRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateWatchlistRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateWatchlistRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateWatchlistRequest. */
                interface IUpdateWatchlistRequest {

                    /** UpdateWatchlistRequest watchlist */
                    watchlist?: (google.cloud.chronicle.v1.IWatchlist|null);

                    /** UpdateWatchlistRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateWatchlistRequest. */
                class UpdateWatchlistRequest implements IUpdateWatchlistRequest {

                    /**
                     * Constructs a new UpdateWatchlistRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IUpdateWatchlistRequest);

                    /** UpdateWatchlistRequest watchlist. */
                    public watchlist?: (google.cloud.chronicle.v1.IWatchlist|null);

                    /** UpdateWatchlistRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateWatchlistRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateWatchlistRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IUpdateWatchlistRequest): google.cloud.chronicle.v1.UpdateWatchlistRequest;

                    /**
                     * Encodes the specified UpdateWatchlistRequest message. Does not implicitly {@link google.cloud.chronicle.v1.UpdateWatchlistRequest.verify|verify} messages.
                     * @param message UpdateWatchlistRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IUpdateWatchlistRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateWatchlistRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.UpdateWatchlistRequest.verify|verify} messages.
                     * @param message UpdateWatchlistRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IUpdateWatchlistRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateWatchlistRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateWatchlistRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.UpdateWatchlistRequest;

                    /**
                     * Decodes an UpdateWatchlistRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateWatchlistRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.UpdateWatchlistRequest;

                    /**
                     * Verifies an UpdateWatchlistRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateWatchlistRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateWatchlistRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.UpdateWatchlistRequest;

                    /**
                     * Creates a plain object from an UpdateWatchlistRequest message. Also converts values to other types if specified.
                     * @param message UpdateWatchlistRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.UpdateWatchlistRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateWatchlistRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateWatchlistRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteWatchlistRequest. */
                interface IDeleteWatchlistRequest {

                    /** DeleteWatchlistRequest name */
                    name?: (string|null);

                    /** DeleteWatchlistRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteWatchlistRequest. */
                class DeleteWatchlistRequest implements IDeleteWatchlistRequest {

                    /**
                     * Constructs a new DeleteWatchlistRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IDeleteWatchlistRequest);

                    /** DeleteWatchlistRequest name. */
                    public name: string;

                    /** DeleteWatchlistRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteWatchlistRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteWatchlistRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IDeleteWatchlistRequest): google.cloud.chronicle.v1.DeleteWatchlistRequest;

                    /**
                     * Encodes the specified DeleteWatchlistRequest message. Does not implicitly {@link google.cloud.chronicle.v1.DeleteWatchlistRequest.verify|verify} messages.
                     * @param message DeleteWatchlistRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IDeleteWatchlistRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteWatchlistRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.DeleteWatchlistRequest.verify|verify} messages.
                     * @param message DeleteWatchlistRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IDeleteWatchlistRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteWatchlistRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteWatchlistRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.DeleteWatchlistRequest;

                    /**
                     * Decodes a DeleteWatchlistRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteWatchlistRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.DeleteWatchlistRequest;

                    /**
                     * Verifies a DeleteWatchlistRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteWatchlistRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteWatchlistRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.DeleteWatchlistRequest;

                    /**
                     * Creates a plain object from a DeleteWatchlistRequest message. Also converts values to other types if specified.
                     * @param message DeleteWatchlistRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.DeleteWatchlistRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteWatchlistRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteWatchlistRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents an InstanceService */
                class InstanceService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new InstanceService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new InstanceService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): InstanceService;

                    /**
                     * Calls GetInstance.
                     * @param request GetInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Instance
                     */
                    public getInstance(request: google.cloud.chronicle.v1.IGetInstanceRequest, callback: google.cloud.chronicle.v1.InstanceService.GetInstanceCallback): void;

                    /**
                     * Calls GetInstance.
                     * @param request GetInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public getInstance(request: google.cloud.chronicle.v1.IGetInstanceRequest): Promise<google.cloud.chronicle.v1.Instance>;
                }

                namespace InstanceService {

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.InstanceService|getInstance}.
                     * @param error Error, if any
                     * @param [response] Instance
                     */
                    type GetInstanceCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.Instance) => void;
                }

                /** Properties of an Instance. */
                interface IInstance {

                    /** Instance name */
                    name?: (string|null);
                }

                /** Represents an Instance. */
                class Instance implements IInstance {

                    /**
                     * Constructs a new Instance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IInstance);

                    /** Instance name. */
                    public name: string;

                    /**
                     * Creates a new Instance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Instance instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IInstance): google.cloud.chronicle.v1.Instance;

                    /**
                     * Encodes the specified Instance message. Does not implicitly {@link google.cloud.chronicle.v1.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Instance message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Instance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.Instance;

                    /**
                     * Decodes an Instance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.Instance;

                    /**
                     * Verifies an Instance message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Instance message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Instance
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.Instance;

                    /**
                     * Creates a plain object from an Instance message. Also converts values to other types if specified.
                     * @param message Instance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.Instance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Instance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Instance
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetInstanceRequest. */
                interface IGetInstanceRequest {

                    /** GetInstanceRequest name */
                    name?: (string|null);
                }

                /** Represents a GetInstanceRequest. */
                class GetInstanceRequest implements IGetInstanceRequest {

                    /**
                     * Constructs a new GetInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IGetInstanceRequest);

                    /** GetInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IGetInstanceRequest): google.cloud.chronicle.v1.GetInstanceRequest;

                    /**
                     * Encodes the specified GetInstanceRequest message. Does not implicitly {@link google.cloud.chronicle.v1.GetInstanceRequest.verify|verify} messages.
                     * @param message GetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IGetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.GetInstanceRequest.verify|verify} messages.
                     * @param message GetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IGetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.GetInstanceRequest;

                    /**
                     * Decodes a GetInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.GetInstanceRequest;

                    /**
                     * Verifies a GetInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.GetInstanceRequest;

                    /**
                     * Creates a plain object from a GetInstanceRequest message. Also converts values to other types if specified.
                     * @param message GetInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.GetInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetInstanceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a ReferenceListService */
                class ReferenceListService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ReferenceListService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ReferenceListService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ReferenceListService;

                    /**
                     * Calls GetReferenceList.
                     * @param request GetReferenceListRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ReferenceList
                     */
                    public getReferenceList(request: google.cloud.chronicle.v1.IGetReferenceListRequest, callback: google.cloud.chronicle.v1.ReferenceListService.GetReferenceListCallback): void;

                    /**
                     * Calls GetReferenceList.
                     * @param request GetReferenceListRequest message or plain object
                     * @returns Promise
                     */
                    public getReferenceList(request: google.cloud.chronicle.v1.IGetReferenceListRequest): Promise<google.cloud.chronicle.v1.ReferenceList>;

                    /**
                     * Calls ListReferenceLists.
                     * @param request ListReferenceListsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListReferenceListsResponse
                     */
                    public listReferenceLists(request: google.cloud.chronicle.v1.IListReferenceListsRequest, callback: google.cloud.chronicle.v1.ReferenceListService.ListReferenceListsCallback): void;

                    /**
                     * Calls ListReferenceLists.
                     * @param request ListReferenceListsRequest message or plain object
                     * @returns Promise
                     */
                    public listReferenceLists(request: google.cloud.chronicle.v1.IListReferenceListsRequest): Promise<google.cloud.chronicle.v1.ListReferenceListsResponse>;

                    /**
                     * Calls CreateReferenceList.
                     * @param request CreateReferenceListRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ReferenceList
                     */
                    public createReferenceList(request: google.cloud.chronicle.v1.ICreateReferenceListRequest, callback: google.cloud.chronicle.v1.ReferenceListService.CreateReferenceListCallback): void;

                    /**
                     * Calls CreateReferenceList.
                     * @param request CreateReferenceListRequest message or plain object
                     * @returns Promise
                     */
                    public createReferenceList(request: google.cloud.chronicle.v1.ICreateReferenceListRequest): Promise<google.cloud.chronicle.v1.ReferenceList>;

                    /**
                     * Calls UpdateReferenceList.
                     * @param request UpdateReferenceListRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ReferenceList
                     */
                    public updateReferenceList(request: google.cloud.chronicle.v1.IUpdateReferenceListRequest, callback: google.cloud.chronicle.v1.ReferenceListService.UpdateReferenceListCallback): void;

                    /**
                     * Calls UpdateReferenceList.
                     * @param request UpdateReferenceListRequest message or plain object
                     * @returns Promise
                     */
                    public updateReferenceList(request: google.cloud.chronicle.v1.IUpdateReferenceListRequest): Promise<google.cloud.chronicle.v1.ReferenceList>;
                }

                namespace ReferenceListService {

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.ReferenceListService|getReferenceList}.
                     * @param error Error, if any
                     * @param [response] ReferenceList
                     */
                    type GetReferenceListCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.ReferenceList) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.ReferenceListService|listReferenceLists}.
                     * @param error Error, if any
                     * @param [response] ListReferenceListsResponse
                     */
                    type ListReferenceListsCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.ListReferenceListsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.ReferenceListService|createReferenceList}.
                     * @param error Error, if any
                     * @param [response] ReferenceList
                     */
                    type CreateReferenceListCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.ReferenceList) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.ReferenceListService|updateReferenceList}.
                     * @param error Error, if any
                     * @param [response] ReferenceList
                     */
                    type UpdateReferenceListCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.ReferenceList) => void;
                }

                /** ReferenceListSyntaxType enum. */
                enum ReferenceListSyntaxType {
                    REFERENCE_LIST_SYNTAX_TYPE_UNSPECIFIED = 0,
                    REFERENCE_LIST_SYNTAX_TYPE_PLAIN_TEXT_STRING = 1,
                    REFERENCE_LIST_SYNTAX_TYPE_REGEX = 2,
                    REFERENCE_LIST_SYNTAX_TYPE_CIDR = 3
                }

                /** ReferenceListView enum. */
                enum ReferenceListView {
                    REFERENCE_LIST_VIEW_UNSPECIFIED = 0,
                    REFERENCE_LIST_VIEW_BASIC = 1,
                    REFERENCE_LIST_VIEW_FULL = 2
                }

                /** Properties of a ScopeInfo. */
                interface IScopeInfo {

                    /** ScopeInfo referenceListScope */
                    referenceListScope?: (google.cloud.chronicle.v1.IReferenceListScope|null);
                }

                /** Represents a ScopeInfo. */
                class ScopeInfo implements IScopeInfo {

                    /**
                     * Constructs a new ScopeInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IScopeInfo);

                    /** ScopeInfo referenceListScope. */
                    public referenceListScope?: (google.cloud.chronicle.v1.IReferenceListScope|null);

                    /**
                     * Creates a new ScopeInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScopeInfo instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IScopeInfo): google.cloud.chronicle.v1.ScopeInfo;

                    /**
                     * Encodes the specified ScopeInfo message. Does not implicitly {@link google.cloud.chronicle.v1.ScopeInfo.verify|verify} messages.
                     * @param message ScopeInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IScopeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScopeInfo message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.ScopeInfo.verify|verify} messages.
                     * @param message ScopeInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IScopeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScopeInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScopeInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.ScopeInfo;

                    /**
                     * Decodes a ScopeInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScopeInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.ScopeInfo;

                    /**
                     * Verifies a ScopeInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScopeInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScopeInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.ScopeInfo;

                    /**
                     * Creates a plain object from a ScopeInfo message. Also converts values to other types if specified.
                     * @param message ScopeInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.ScopeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScopeInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ScopeInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ReferenceListScope. */
                interface IReferenceListScope {

                    /** ReferenceListScope scopeNames */
                    scopeNames?: (string[]|null);
                }

                /** Represents a ReferenceListScope. */
                class ReferenceListScope implements IReferenceListScope {

                    /**
                     * Constructs a new ReferenceListScope.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IReferenceListScope);

                    /** ReferenceListScope scopeNames. */
                    public scopeNames: string[];

                    /**
                     * Creates a new ReferenceListScope instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReferenceListScope instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IReferenceListScope): google.cloud.chronicle.v1.ReferenceListScope;

                    /**
                     * Encodes the specified ReferenceListScope message. Does not implicitly {@link google.cloud.chronicle.v1.ReferenceListScope.verify|verify} messages.
                     * @param message ReferenceListScope message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IReferenceListScope, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReferenceListScope message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.ReferenceListScope.verify|verify} messages.
                     * @param message ReferenceListScope message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IReferenceListScope, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReferenceListScope message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReferenceListScope
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.ReferenceListScope;

                    /**
                     * Decodes a ReferenceListScope message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReferenceListScope
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.ReferenceListScope;

                    /**
                     * Verifies a ReferenceListScope message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReferenceListScope message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReferenceListScope
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.ReferenceListScope;

                    /**
                     * Creates a plain object from a ReferenceListScope message. Also converts values to other types if specified.
                     * @param message ReferenceListScope
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.ReferenceListScope, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReferenceListScope to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ReferenceListScope
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetReferenceListRequest. */
                interface IGetReferenceListRequest {

                    /** GetReferenceListRequest name */
                    name?: (string|null);

                    /** GetReferenceListRequest view */
                    view?: (google.cloud.chronicle.v1.ReferenceListView|keyof typeof google.cloud.chronicle.v1.ReferenceListView|null);
                }

                /** Represents a GetReferenceListRequest. */
                class GetReferenceListRequest implements IGetReferenceListRequest {

                    /**
                     * Constructs a new GetReferenceListRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IGetReferenceListRequest);

                    /** GetReferenceListRequest name. */
                    public name: string;

                    /** GetReferenceListRequest view. */
                    public view: (google.cloud.chronicle.v1.ReferenceListView|keyof typeof google.cloud.chronicle.v1.ReferenceListView);

                    /**
                     * Creates a new GetReferenceListRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetReferenceListRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IGetReferenceListRequest): google.cloud.chronicle.v1.GetReferenceListRequest;

                    /**
                     * Encodes the specified GetReferenceListRequest message. Does not implicitly {@link google.cloud.chronicle.v1.GetReferenceListRequest.verify|verify} messages.
                     * @param message GetReferenceListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IGetReferenceListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetReferenceListRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.GetReferenceListRequest.verify|verify} messages.
                     * @param message GetReferenceListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IGetReferenceListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetReferenceListRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetReferenceListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.GetReferenceListRequest;

                    /**
                     * Decodes a GetReferenceListRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetReferenceListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.GetReferenceListRequest;

                    /**
                     * Verifies a GetReferenceListRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetReferenceListRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetReferenceListRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.GetReferenceListRequest;

                    /**
                     * Creates a plain object from a GetReferenceListRequest message. Also converts values to other types if specified.
                     * @param message GetReferenceListRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.GetReferenceListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetReferenceListRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetReferenceListRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListReferenceListsRequest. */
                interface IListReferenceListsRequest {

                    /** ListReferenceListsRequest parent */
                    parent?: (string|null);

                    /** ListReferenceListsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListReferenceListsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListReferenceListsRequest view */
                    view?: (google.cloud.chronicle.v1.ReferenceListView|keyof typeof google.cloud.chronicle.v1.ReferenceListView|null);
                }

                /** Represents a ListReferenceListsRequest. */
                class ListReferenceListsRequest implements IListReferenceListsRequest {

                    /**
                     * Constructs a new ListReferenceListsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IListReferenceListsRequest);

                    /** ListReferenceListsRequest parent. */
                    public parent: string;

                    /** ListReferenceListsRequest pageSize. */
                    public pageSize: number;

                    /** ListReferenceListsRequest pageToken. */
                    public pageToken: string;

                    /** ListReferenceListsRequest view. */
                    public view: (google.cloud.chronicle.v1.ReferenceListView|keyof typeof google.cloud.chronicle.v1.ReferenceListView);

                    /**
                     * Creates a new ListReferenceListsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListReferenceListsRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IListReferenceListsRequest): google.cloud.chronicle.v1.ListReferenceListsRequest;

                    /**
                     * Encodes the specified ListReferenceListsRequest message. Does not implicitly {@link google.cloud.chronicle.v1.ListReferenceListsRequest.verify|verify} messages.
                     * @param message ListReferenceListsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IListReferenceListsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListReferenceListsRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.ListReferenceListsRequest.verify|verify} messages.
                     * @param message ListReferenceListsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IListReferenceListsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListReferenceListsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListReferenceListsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.ListReferenceListsRequest;

                    /**
                     * Decodes a ListReferenceListsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListReferenceListsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.ListReferenceListsRequest;

                    /**
                     * Verifies a ListReferenceListsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListReferenceListsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListReferenceListsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.ListReferenceListsRequest;

                    /**
                     * Creates a plain object from a ListReferenceListsRequest message. Also converts values to other types if specified.
                     * @param message ListReferenceListsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.ListReferenceListsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListReferenceListsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListReferenceListsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListReferenceListsResponse. */
                interface IListReferenceListsResponse {

                    /** ListReferenceListsResponse referenceLists */
                    referenceLists?: (google.cloud.chronicle.v1.IReferenceList[]|null);

                    /** ListReferenceListsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListReferenceListsResponse. */
                class ListReferenceListsResponse implements IListReferenceListsResponse {

                    /**
                     * Constructs a new ListReferenceListsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IListReferenceListsResponse);

                    /** ListReferenceListsResponse referenceLists. */
                    public referenceLists: google.cloud.chronicle.v1.IReferenceList[];

                    /** ListReferenceListsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListReferenceListsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListReferenceListsResponse instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IListReferenceListsResponse): google.cloud.chronicle.v1.ListReferenceListsResponse;

                    /**
                     * Encodes the specified ListReferenceListsResponse message. Does not implicitly {@link google.cloud.chronicle.v1.ListReferenceListsResponse.verify|verify} messages.
                     * @param message ListReferenceListsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IListReferenceListsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListReferenceListsResponse message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.ListReferenceListsResponse.verify|verify} messages.
                     * @param message ListReferenceListsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IListReferenceListsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListReferenceListsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListReferenceListsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.ListReferenceListsResponse;

                    /**
                     * Decodes a ListReferenceListsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListReferenceListsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.ListReferenceListsResponse;

                    /**
                     * Verifies a ListReferenceListsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListReferenceListsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListReferenceListsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.ListReferenceListsResponse;

                    /**
                     * Creates a plain object from a ListReferenceListsResponse message. Also converts values to other types if specified.
                     * @param message ListReferenceListsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.ListReferenceListsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListReferenceListsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListReferenceListsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateReferenceListRequest. */
                interface ICreateReferenceListRequest {

                    /** CreateReferenceListRequest parent */
                    parent?: (string|null);

                    /** CreateReferenceListRequest referenceList */
                    referenceList?: (google.cloud.chronicle.v1.IReferenceList|null);

                    /** CreateReferenceListRequest referenceListId */
                    referenceListId?: (string|null);
                }

                /** Represents a CreateReferenceListRequest. */
                class CreateReferenceListRequest implements ICreateReferenceListRequest {

                    /**
                     * Constructs a new CreateReferenceListRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.ICreateReferenceListRequest);

                    /** CreateReferenceListRequest parent. */
                    public parent: string;

                    /** CreateReferenceListRequest referenceList. */
                    public referenceList?: (google.cloud.chronicle.v1.IReferenceList|null);

                    /** CreateReferenceListRequest referenceListId. */
                    public referenceListId: string;

                    /**
                     * Creates a new CreateReferenceListRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateReferenceListRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.ICreateReferenceListRequest): google.cloud.chronicle.v1.CreateReferenceListRequest;

                    /**
                     * Encodes the specified CreateReferenceListRequest message. Does not implicitly {@link google.cloud.chronicle.v1.CreateReferenceListRequest.verify|verify} messages.
                     * @param message CreateReferenceListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.ICreateReferenceListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateReferenceListRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.CreateReferenceListRequest.verify|verify} messages.
                     * @param message CreateReferenceListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.ICreateReferenceListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateReferenceListRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateReferenceListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.CreateReferenceListRequest;

                    /**
                     * Decodes a CreateReferenceListRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateReferenceListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.CreateReferenceListRequest;

                    /**
                     * Verifies a CreateReferenceListRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateReferenceListRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateReferenceListRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.CreateReferenceListRequest;

                    /**
                     * Creates a plain object from a CreateReferenceListRequest message. Also converts values to other types if specified.
                     * @param message CreateReferenceListRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.CreateReferenceListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateReferenceListRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateReferenceListRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateReferenceListRequest. */
                interface IUpdateReferenceListRequest {

                    /** UpdateReferenceListRequest referenceList */
                    referenceList?: (google.cloud.chronicle.v1.IReferenceList|null);

                    /** UpdateReferenceListRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateReferenceListRequest. */
                class UpdateReferenceListRequest implements IUpdateReferenceListRequest {

                    /**
                     * Constructs a new UpdateReferenceListRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IUpdateReferenceListRequest);

                    /** UpdateReferenceListRequest referenceList. */
                    public referenceList?: (google.cloud.chronicle.v1.IReferenceList|null);

                    /** UpdateReferenceListRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateReferenceListRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateReferenceListRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IUpdateReferenceListRequest): google.cloud.chronicle.v1.UpdateReferenceListRequest;

                    /**
                     * Encodes the specified UpdateReferenceListRequest message. Does not implicitly {@link google.cloud.chronicle.v1.UpdateReferenceListRequest.verify|verify} messages.
                     * @param message UpdateReferenceListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IUpdateReferenceListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateReferenceListRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.UpdateReferenceListRequest.verify|verify} messages.
                     * @param message UpdateReferenceListRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IUpdateReferenceListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateReferenceListRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateReferenceListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.UpdateReferenceListRequest;

                    /**
                     * Decodes an UpdateReferenceListRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateReferenceListRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.UpdateReferenceListRequest;

                    /**
                     * Verifies an UpdateReferenceListRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateReferenceListRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateReferenceListRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.UpdateReferenceListRequest;

                    /**
                     * Creates a plain object from an UpdateReferenceListRequest message. Also converts values to other types if specified.
                     * @param message UpdateReferenceListRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.UpdateReferenceListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateReferenceListRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateReferenceListRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ReferenceList. */
                interface IReferenceList {

                    /** ReferenceList name */
                    name?: (string|null);

                    /** ReferenceList displayName */
                    displayName?: (string|null);

                    /** ReferenceList revisionCreateTime */
                    revisionCreateTime?: (google.protobuf.ITimestamp|null);

                    /** ReferenceList description */
                    description?: (string|null);

                    /** ReferenceList entries */
                    entries?: (google.cloud.chronicle.v1.IReferenceListEntry[]|null);

                    /** ReferenceList rules */
                    rules?: (string[]|null);

                    /** ReferenceList syntaxType */
                    syntaxType?: (google.cloud.chronicle.v1.ReferenceListSyntaxType|keyof typeof google.cloud.chronicle.v1.ReferenceListSyntaxType|null);

                    /** ReferenceList ruleAssociationsCount */
                    ruleAssociationsCount?: (number|null);

                    /** ReferenceList scopeInfo */
                    scopeInfo?: (google.cloud.chronicle.v1.IScopeInfo|null);
                }

                /** Represents a ReferenceList. */
                class ReferenceList implements IReferenceList {

                    /**
                     * Constructs a new ReferenceList.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IReferenceList);

                    /** ReferenceList name. */
                    public name: string;

                    /** ReferenceList displayName. */
                    public displayName: string;

                    /** ReferenceList revisionCreateTime. */
                    public revisionCreateTime?: (google.protobuf.ITimestamp|null);

                    /** ReferenceList description. */
                    public description: string;

                    /** ReferenceList entries. */
                    public entries: google.cloud.chronicle.v1.IReferenceListEntry[];

                    /** ReferenceList rules. */
                    public rules: string[];

                    /** ReferenceList syntaxType. */
                    public syntaxType: (google.cloud.chronicle.v1.ReferenceListSyntaxType|keyof typeof google.cloud.chronicle.v1.ReferenceListSyntaxType);

                    /** ReferenceList ruleAssociationsCount. */
                    public ruleAssociationsCount: number;

                    /** ReferenceList scopeInfo. */
                    public scopeInfo?: (google.cloud.chronicle.v1.IScopeInfo|null);

                    /**
                     * Creates a new ReferenceList instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReferenceList instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IReferenceList): google.cloud.chronicle.v1.ReferenceList;

                    /**
                     * Encodes the specified ReferenceList message. Does not implicitly {@link google.cloud.chronicle.v1.ReferenceList.verify|verify} messages.
                     * @param message ReferenceList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IReferenceList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReferenceList message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.ReferenceList.verify|verify} messages.
                     * @param message ReferenceList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IReferenceList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReferenceList message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReferenceList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.ReferenceList;

                    /**
                     * Decodes a ReferenceList message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReferenceList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.ReferenceList;

                    /**
                     * Verifies a ReferenceList message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReferenceList message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReferenceList
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.ReferenceList;

                    /**
                     * Creates a plain object from a ReferenceList message. Also converts values to other types if specified.
                     * @param message ReferenceList
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.ReferenceList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReferenceList to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ReferenceList
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ReferenceListEntry. */
                interface IReferenceListEntry {

                    /** ReferenceListEntry value */
                    value?: (string|null);
                }

                /** Represents a ReferenceListEntry. */
                class ReferenceListEntry implements IReferenceListEntry {

                    /**
                     * Constructs a new ReferenceListEntry.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IReferenceListEntry);

                    /** ReferenceListEntry value. */
                    public value: string;

                    /**
                     * Creates a new ReferenceListEntry instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReferenceListEntry instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IReferenceListEntry): google.cloud.chronicle.v1.ReferenceListEntry;

                    /**
                     * Encodes the specified ReferenceListEntry message. Does not implicitly {@link google.cloud.chronicle.v1.ReferenceListEntry.verify|verify} messages.
                     * @param message ReferenceListEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IReferenceListEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReferenceListEntry message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.ReferenceListEntry.verify|verify} messages.
                     * @param message ReferenceListEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IReferenceListEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReferenceListEntry message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReferenceListEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.ReferenceListEntry;

                    /**
                     * Decodes a ReferenceListEntry message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReferenceListEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.ReferenceListEntry;

                    /**
                     * Verifies a ReferenceListEntry message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReferenceListEntry message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReferenceListEntry
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.ReferenceListEntry;

                    /**
                     * Creates a plain object from a ReferenceListEntry message. Also converts values to other types if specified.
                     * @param message ReferenceListEntry
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.ReferenceListEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReferenceListEntry to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ReferenceListEntry
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a RuleService */
                class RuleService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new RuleService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new RuleService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): RuleService;

                    /**
                     * Calls CreateRule.
                     * @param request CreateRuleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Rule
                     */
                    public createRule(request: google.cloud.chronicle.v1.ICreateRuleRequest, callback: google.cloud.chronicle.v1.RuleService.CreateRuleCallback): void;

                    /**
                     * Calls CreateRule.
                     * @param request CreateRuleRequest message or plain object
                     * @returns Promise
                     */
                    public createRule(request: google.cloud.chronicle.v1.ICreateRuleRequest): Promise<google.cloud.chronicle.v1.Rule>;

                    /**
                     * Calls GetRule.
                     * @param request GetRuleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Rule
                     */
                    public getRule(request: google.cloud.chronicle.v1.IGetRuleRequest, callback: google.cloud.chronicle.v1.RuleService.GetRuleCallback): void;

                    /**
                     * Calls GetRule.
                     * @param request GetRuleRequest message or plain object
                     * @returns Promise
                     */
                    public getRule(request: google.cloud.chronicle.v1.IGetRuleRequest): Promise<google.cloud.chronicle.v1.Rule>;

                    /**
                     * Calls ListRules.
                     * @param request ListRulesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRulesResponse
                     */
                    public listRules(request: google.cloud.chronicle.v1.IListRulesRequest, callback: google.cloud.chronicle.v1.RuleService.ListRulesCallback): void;

                    /**
                     * Calls ListRules.
                     * @param request ListRulesRequest message or plain object
                     * @returns Promise
                     */
                    public listRules(request: google.cloud.chronicle.v1.IListRulesRequest): Promise<google.cloud.chronicle.v1.ListRulesResponse>;

                    /**
                     * Calls UpdateRule.
                     * @param request UpdateRuleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Rule
                     */
                    public updateRule(request: google.cloud.chronicle.v1.IUpdateRuleRequest, callback: google.cloud.chronicle.v1.RuleService.UpdateRuleCallback): void;

                    /**
                     * Calls UpdateRule.
                     * @param request UpdateRuleRequest message or plain object
                     * @returns Promise
                     */
                    public updateRule(request: google.cloud.chronicle.v1.IUpdateRuleRequest): Promise<google.cloud.chronicle.v1.Rule>;

                    /**
                     * Calls DeleteRule.
                     * @param request DeleteRuleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteRule(request: google.cloud.chronicle.v1.IDeleteRuleRequest, callback: google.cloud.chronicle.v1.RuleService.DeleteRuleCallback): void;

                    /**
                     * Calls DeleteRule.
                     * @param request DeleteRuleRequest message or plain object
                     * @returns Promise
                     */
                    public deleteRule(request: google.cloud.chronicle.v1.IDeleteRuleRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListRuleRevisions.
                     * @param request ListRuleRevisionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRuleRevisionsResponse
                     */
                    public listRuleRevisions(request: google.cloud.chronicle.v1.IListRuleRevisionsRequest, callback: google.cloud.chronicle.v1.RuleService.ListRuleRevisionsCallback): void;

                    /**
                     * Calls ListRuleRevisions.
                     * @param request ListRuleRevisionsRequest message or plain object
                     * @returns Promise
                     */
                    public listRuleRevisions(request: google.cloud.chronicle.v1.IListRuleRevisionsRequest): Promise<google.cloud.chronicle.v1.ListRuleRevisionsResponse>;

                    /**
                     * Calls CreateRetrohunt.
                     * @param request CreateRetrohuntRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createRetrohunt(request: google.cloud.chronicle.v1.ICreateRetrohuntRequest, callback: google.cloud.chronicle.v1.RuleService.CreateRetrohuntCallback): void;

                    /**
                     * Calls CreateRetrohunt.
                     * @param request CreateRetrohuntRequest message or plain object
                     * @returns Promise
                     */
                    public createRetrohunt(request: google.cloud.chronicle.v1.ICreateRetrohuntRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetRetrohunt.
                     * @param request GetRetrohuntRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Retrohunt
                     */
                    public getRetrohunt(request: google.cloud.chronicle.v1.IGetRetrohuntRequest, callback: google.cloud.chronicle.v1.RuleService.GetRetrohuntCallback): void;

                    /**
                     * Calls GetRetrohunt.
                     * @param request GetRetrohuntRequest message or plain object
                     * @returns Promise
                     */
                    public getRetrohunt(request: google.cloud.chronicle.v1.IGetRetrohuntRequest): Promise<google.cloud.chronicle.v1.Retrohunt>;

                    /**
                     * Calls ListRetrohunts.
                     * @param request ListRetrohuntsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRetrohuntsResponse
                     */
                    public listRetrohunts(request: google.cloud.chronicle.v1.IListRetrohuntsRequest, callback: google.cloud.chronicle.v1.RuleService.ListRetrohuntsCallback): void;

                    /**
                     * Calls ListRetrohunts.
                     * @param request ListRetrohuntsRequest message or plain object
                     * @returns Promise
                     */
                    public listRetrohunts(request: google.cloud.chronicle.v1.IListRetrohuntsRequest): Promise<google.cloud.chronicle.v1.ListRetrohuntsResponse>;

                    /**
                     * Calls GetRuleDeployment.
                     * @param request GetRuleDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RuleDeployment
                     */
                    public getRuleDeployment(request: google.cloud.chronicle.v1.IGetRuleDeploymentRequest, callback: google.cloud.chronicle.v1.RuleService.GetRuleDeploymentCallback): void;

                    /**
                     * Calls GetRuleDeployment.
                     * @param request GetRuleDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public getRuleDeployment(request: google.cloud.chronicle.v1.IGetRuleDeploymentRequest): Promise<google.cloud.chronicle.v1.RuleDeployment>;

                    /**
                     * Calls ListRuleDeployments.
                     * @param request ListRuleDeploymentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRuleDeploymentsResponse
                     */
                    public listRuleDeployments(request: google.cloud.chronicle.v1.IListRuleDeploymentsRequest, callback: google.cloud.chronicle.v1.RuleService.ListRuleDeploymentsCallback): void;

                    /**
                     * Calls ListRuleDeployments.
                     * @param request ListRuleDeploymentsRequest message or plain object
                     * @returns Promise
                     */
                    public listRuleDeployments(request: google.cloud.chronicle.v1.IListRuleDeploymentsRequest): Promise<google.cloud.chronicle.v1.ListRuleDeploymentsResponse>;

                    /**
                     * Calls UpdateRuleDeployment.
                     * @param request UpdateRuleDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RuleDeployment
                     */
                    public updateRuleDeployment(request: google.cloud.chronicle.v1.IUpdateRuleDeploymentRequest, callback: google.cloud.chronicle.v1.RuleService.UpdateRuleDeploymentCallback): void;

                    /**
                     * Calls UpdateRuleDeployment.
                     * @param request UpdateRuleDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public updateRuleDeployment(request: google.cloud.chronicle.v1.IUpdateRuleDeploymentRequest): Promise<google.cloud.chronicle.v1.RuleDeployment>;
                }

                namespace RuleService {

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.RuleService|createRule}.
                     * @param error Error, if any
                     * @param [response] Rule
                     */
                    type CreateRuleCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.Rule) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.RuleService|getRule}.
                     * @param error Error, if any
                     * @param [response] Rule
                     */
                    type GetRuleCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.Rule) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.RuleService|listRules}.
                     * @param error Error, if any
                     * @param [response] ListRulesResponse
                     */
                    type ListRulesCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.ListRulesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.RuleService|updateRule}.
                     * @param error Error, if any
                     * @param [response] Rule
                     */
                    type UpdateRuleCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.Rule) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.RuleService|deleteRule}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteRuleCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.RuleService|listRuleRevisions}.
                     * @param error Error, if any
                     * @param [response] ListRuleRevisionsResponse
                     */
                    type ListRuleRevisionsCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.ListRuleRevisionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.RuleService|createRetrohunt}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateRetrohuntCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.RuleService|getRetrohunt}.
                     * @param error Error, if any
                     * @param [response] Retrohunt
                     */
                    type GetRetrohuntCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.Retrohunt) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.RuleService|listRetrohunts}.
                     * @param error Error, if any
                     * @param [response] ListRetrohuntsResponse
                     */
                    type ListRetrohuntsCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.ListRetrohuntsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.RuleService|getRuleDeployment}.
                     * @param error Error, if any
                     * @param [response] RuleDeployment
                     */
                    type GetRuleDeploymentCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.RuleDeployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.RuleService|listRuleDeployments}.
                     * @param error Error, if any
                     * @param [response] ListRuleDeploymentsResponse
                     */
                    type ListRuleDeploymentsCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.ListRuleDeploymentsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.chronicle.v1.RuleService|updateRuleDeployment}.
                     * @param error Error, if any
                     * @param [response] RuleDeployment
                     */
                    type UpdateRuleDeploymentCallback = (error: (Error|null), response?: google.cloud.chronicle.v1.RuleDeployment) => void;
                }

                /** RunFrequency enum. */
                enum RunFrequency {
                    RUN_FREQUENCY_UNSPECIFIED = 0,
                    LIVE = 1,
                    HOURLY = 2,
                    DAILY = 3
                }

                /** RuleType enum. */
                enum RuleType {
                    RULE_TYPE_UNSPECIFIED = 0,
                    SINGLE_EVENT = 1,
                    MULTI_EVENT = 2
                }

                /** RuleView enum. */
                enum RuleView {
                    RULE_VIEW_UNSPECIFIED = 0,
                    BASIC = 1,
                    FULL = 2,
                    REVISION_METADATA_ONLY = 3
                }

                /** Properties of a Rule. */
                interface IRule {

                    /** Rule name */
                    name?: (string|null);

                    /** Rule revisionId */
                    revisionId?: (string|null);

                    /** Rule displayName */
                    displayName?: (string|null);

                    /** Rule text */
                    text?: (string|null);

                    /** Rule author */
                    author?: (string|null);

                    /** Rule severity */
                    severity?: (google.cloud.chronicle.v1.ISeverity|null);

                    /** Rule metadata */
                    metadata?: ({ [k: string]: string }|null);

                    /** Rule createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Rule revisionCreateTime */
                    revisionCreateTime?: (google.protobuf.ITimestamp|null);

                    /** Rule compilationState */
                    compilationState?: (google.cloud.chronicle.v1.Rule.CompilationState|keyof typeof google.cloud.chronicle.v1.Rule.CompilationState|null);

                    /** Rule type */
                    type?: (google.cloud.chronicle.v1.RuleType|keyof typeof google.cloud.chronicle.v1.RuleType|null);

                    /** Rule referenceLists */
                    referenceLists?: (string[]|null);

                    /** Rule allowedRunFrequencies */
                    allowedRunFrequencies?: (google.cloud.chronicle.v1.RunFrequency[]|null);

                    /** Rule etag */
                    etag?: (string|null);

                    /** Rule scope */
                    scope?: (string|null);

                    /** Rule compilationDiagnostics */
                    compilationDiagnostics?: (google.cloud.chronicle.v1.ICompilationDiagnostic[]|null);

                    /** Rule nearRealTimeLiveRuleEligible */
                    nearRealTimeLiveRuleEligible?: (boolean|null);

                    /** Rule inputsUsed */
                    inputsUsed?: (google.cloud.chronicle.v1.IInputsUsed|null);
                }

                /** Represents a Rule. */
                class Rule implements IRule {

                    /**
                     * Constructs a new Rule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IRule);

                    /** Rule name. */
                    public name: string;

                    /** Rule revisionId. */
                    public revisionId: string;

                    /** Rule displayName. */
                    public displayName: string;

                    /** Rule text. */
                    public text: string;

                    /** Rule author. */
                    public author: string;

                    /** Rule severity. */
                    public severity?: (google.cloud.chronicle.v1.ISeverity|null);

                    /** Rule metadata. */
                    public metadata: { [k: string]: string };

                    /** Rule createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Rule revisionCreateTime. */
                    public revisionCreateTime?: (google.protobuf.ITimestamp|null);

                    /** Rule compilationState. */
                    public compilationState: (google.cloud.chronicle.v1.Rule.CompilationState|keyof typeof google.cloud.chronicle.v1.Rule.CompilationState);

                    /** Rule type. */
                    public type: (google.cloud.chronicle.v1.RuleType|keyof typeof google.cloud.chronicle.v1.RuleType);

                    /** Rule referenceLists. */
                    public referenceLists: string[];

                    /** Rule allowedRunFrequencies. */
                    public allowedRunFrequencies: google.cloud.chronicle.v1.RunFrequency[];

                    /** Rule etag. */
                    public etag: string;

                    /** Rule scope. */
                    public scope: string;

                    /** Rule compilationDiagnostics. */
                    public compilationDiagnostics: google.cloud.chronicle.v1.ICompilationDiagnostic[];

                    /** Rule nearRealTimeLiveRuleEligible. */
                    public nearRealTimeLiveRuleEligible: boolean;

                    /** Rule inputsUsed. */
                    public inputsUsed?: (google.cloud.chronicle.v1.IInputsUsed|null);

                    /**
                     * Creates a new Rule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Rule instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IRule): google.cloud.chronicle.v1.Rule;

                    /**
                     * Encodes the specified Rule message. Does not implicitly {@link google.cloud.chronicle.v1.Rule.verify|verify} messages.
                     * @param message Rule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Rule message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.Rule.verify|verify} messages.
                     * @param message Rule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Rule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Rule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.Rule;

                    /**
                     * Decodes a Rule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Rule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.Rule;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.Rule;

                    /**
                     * Creates a plain object from a Rule message. Also converts values to other types if specified.
                     * @param message Rule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.Rule, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** CompilationState enum. */
                    enum CompilationState {
                        COMPILATION_STATE_UNSPECIFIED = 0,
                        SUCCEEDED = 1,
                        FAILED = 2
                    }
                }

                /** Properties of a RuleDeployment. */
                interface IRuleDeployment {

                    /** RuleDeployment name */
                    name?: (string|null);

                    /** RuleDeployment enabled */
                    enabled?: (boolean|null);

                    /** RuleDeployment alerting */
                    alerting?: (boolean|null);

                    /** RuleDeployment archived */
                    archived?: (boolean|null);

                    /** RuleDeployment archiveTime */
                    archiveTime?: (google.protobuf.ITimestamp|null);

                    /** RuleDeployment runFrequency */
                    runFrequency?: (google.cloud.chronicle.v1.RunFrequency|keyof typeof google.cloud.chronicle.v1.RunFrequency|null);

                    /** RuleDeployment executionState */
                    executionState?: (google.cloud.chronicle.v1.RuleDeployment.ExecutionState|keyof typeof google.cloud.chronicle.v1.RuleDeployment.ExecutionState|null);

                    /** RuleDeployment producerRules */
                    producerRules?: (string[]|null);

                    /** RuleDeployment consumerRules */
                    consumerRules?: (string[]|null);

                    /** RuleDeployment lastAlertStatusChangeTime */
                    lastAlertStatusChangeTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a RuleDeployment. */
                class RuleDeployment implements IRuleDeployment {

                    /**
                     * Constructs a new RuleDeployment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IRuleDeployment);

                    /** RuleDeployment name. */
                    public name: string;

                    /** RuleDeployment enabled. */
                    public enabled: boolean;

                    /** RuleDeployment alerting. */
                    public alerting: boolean;

                    /** RuleDeployment archived. */
                    public archived: boolean;

                    /** RuleDeployment archiveTime. */
                    public archiveTime?: (google.protobuf.ITimestamp|null);

                    /** RuleDeployment runFrequency. */
                    public runFrequency: (google.cloud.chronicle.v1.RunFrequency|keyof typeof google.cloud.chronicle.v1.RunFrequency);

                    /** RuleDeployment executionState. */
                    public executionState: (google.cloud.chronicle.v1.RuleDeployment.ExecutionState|keyof typeof google.cloud.chronicle.v1.RuleDeployment.ExecutionState);

                    /** RuleDeployment producerRules. */
                    public producerRules: string[];

                    /** RuleDeployment consumerRules. */
                    public consumerRules: string[];

                    /** RuleDeployment lastAlertStatusChangeTime. */
                    public lastAlertStatusChangeTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new RuleDeployment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RuleDeployment instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IRuleDeployment): google.cloud.chronicle.v1.RuleDeployment;

                    /**
                     * Encodes the specified RuleDeployment message. Does not implicitly {@link google.cloud.chronicle.v1.RuleDeployment.verify|verify} messages.
                     * @param message RuleDeployment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IRuleDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RuleDeployment message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.RuleDeployment.verify|verify} messages.
                     * @param message RuleDeployment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IRuleDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RuleDeployment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RuleDeployment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.RuleDeployment;

                    /**
                     * Decodes a RuleDeployment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RuleDeployment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.RuleDeployment;

                    /**
                     * Verifies a RuleDeployment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RuleDeployment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RuleDeployment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.RuleDeployment;

                    /**
                     * Creates a plain object from a RuleDeployment message. Also converts values to other types if specified.
                     * @param message RuleDeployment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.RuleDeployment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RuleDeployment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RuleDeployment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RuleDeployment {

                    /** ExecutionState enum. */
                    enum ExecutionState {
                        EXECUTION_STATE_UNSPECIFIED = 0,
                        DEFAULT = 1,
                        LIMITED = 2,
                        PAUSED = 3
                    }
                }

                /** Properties of a Retrohunt. */
                interface IRetrohunt {

                    /** Retrohunt name */
                    name?: (string|null);

                    /** Retrohunt processInterval */
                    processInterval?: (google.type.IInterval|null);

                    /** Retrohunt executionInterval */
                    executionInterval?: (google.type.IInterval|null);

                    /** Retrohunt state */
                    state?: (google.cloud.chronicle.v1.Retrohunt.State|keyof typeof google.cloud.chronicle.v1.Retrohunt.State|null);

                    /** Retrohunt progressPercentage */
                    progressPercentage?: (number|null);
                }

                /** Represents a Retrohunt. */
                class Retrohunt implements IRetrohunt {

                    /**
                     * Constructs a new Retrohunt.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IRetrohunt);

                    /** Retrohunt name. */
                    public name: string;

                    /** Retrohunt processInterval. */
                    public processInterval?: (google.type.IInterval|null);

                    /** Retrohunt executionInterval. */
                    public executionInterval?: (google.type.IInterval|null);

                    /** Retrohunt state. */
                    public state: (google.cloud.chronicle.v1.Retrohunt.State|keyof typeof google.cloud.chronicle.v1.Retrohunt.State);

                    /** Retrohunt progressPercentage. */
                    public progressPercentage: number;

                    /**
                     * Creates a new Retrohunt instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Retrohunt instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IRetrohunt): google.cloud.chronicle.v1.Retrohunt;

                    /**
                     * Encodes the specified Retrohunt message. Does not implicitly {@link google.cloud.chronicle.v1.Retrohunt.verify|verify} messages.
                     * @param message Retrohunt message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IRetrohunt, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Retrohunt message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.Retrohunt.verify|verify} messages.
                     * @param message Retrohunt message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IRetrohunt, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Retrohunt message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Retrohunt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.Retrohunt;

                    /**
                     * Decodes a Retrohunt message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Retrohunt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.Retrohunt;

                    /**
                     * Verifies a Retrohunt message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Retrohunt message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Retrohunt
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.Retrohunt;

                    /**
                     * Creates a plain object from a Retrohunt message. Also converts values to other types if specified.
                     * @param message Retrohunt
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.Retrohunt, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Retrohunt to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Retrohunt
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Retrohunt {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        DONE = 2,
                        CANCELLED = 3,
                        FAILED = 4
                    }
                }

                /** Properties of a CreateRuleRequest. */
                interface ICreateRuleRequest {

                    /** CreateRuleRequest parent */
                    parent?: (string|null);

                    /** CreateRuleRequest rule */
                    rule?: (google.cloud.chronicle.v1.IRule|null);
                }

                /** Represents a CreateRuleRequest. */
                class CreateRuleRequest implements ICreateRuleRequest {

                    /**
                     * Constructs a new CreateRuleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.ICreateRuleRequest);

                    /** CreateRuleRequest parent. */
                    public parent: string;

                    /** CreateRuleRequest rule. */
                    public rule?: (google.cloud.chronicle.v1.IRule|null);

                    /**
                     * Creates a new CreateRuleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateRuleRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.ICreateRuleRequest): google.cloud.chronicle.v1.CreateRuleRequest;

                    /**
                     * Encodes the specified CreateRuleRequest message. Does not implicitly {@link google.cloud.chronicle.v1.CreateRuleRequest.verify|verify} messages.
                     * @param message CreateRuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.ICreateRuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateRuleRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.CreateRuleRequest.verify|verify} messages.
                     * @param message CreateRuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.ICreateRuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateRuleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateRuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.CreateRuleRequest;

                    /**
                     * Decodes a CreateRuleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateRuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.CreateRuleRequest;

                    /**
                     * Verifies a CreateRuleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateRuleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateRuleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.CreateRuleRequest;

                    /**
                     * Creates a plain object from a CreateRuleRequest message. Also converts values to other types if specified.
                     * @param message CreateRuleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.CreateRuleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateRuleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateRuleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetRuleRequest. */
                interface IGetRuleRequest {

                    /** GetRuleRequest name */
                    name?: (string|null);

                    /** GetRuleRequest view */
                    view?: (google.cloud.chronicle.v1.RuleView|keyof typeof google.cloud.chronicle.v1.RuleView|null);
                }

                /** Represents a GetRuleRequest. */
                class GetRuleRequest implements IGetRuleRequest {

                    /**
                     * Constructs a new GetRuleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IGetRuleRequest);

                    /** GetRuleRequest name. */
                    public name: string;

                    /** GetRuleRequest view. */
                    public view: (google.cloud.chronicle.v1.RuleView|keyof typeof google.cloud.chronicle.v1.RuleView);

                    /**
                     * Creates a new GetRuleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRuleRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IGetRuleRequest): google.cloud.chronicle.v1.GetRuleRequest;

                    /**
                     * Encodes the specified GetRuleRequest message. Does not implicitly {@link google.cloud.chronicle.v1.GetRuleRequest.verify|verify} messages.
                     * @param message GetRuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IGetRuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRuleRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.GetRuleRequest.verify|verify} messages.
                     * @param message GetRuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IGetRuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRuleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.GetRuleRequest;

                    /**
                     * Decodes a GetRuleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.GetRuleRequest;

                    /**
                     * Verifies a GetRuleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRuleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRuleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.GetRuleRequest;

                    /**
                     * Creates a plain object from a GetRuleRequest message. Also converts values to other types if specified.
                     * @param message GetRuleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.GetRuleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRuleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetRuleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRulesRequest. */
                interface IListRulesRequest {

                    /** ListRulesRequest parent */
                    parent?: (string|null);

                    /** ListRulesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRulesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRulesRequest view */
                    view?: (google.cloud.chronicle.v1.RuleView|keyof typeof google.cloud.chronicle.v1.RuleView|null);

                    /** ListRulesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListRulesRequest. */
                class ListRulesRequest implements IListRulesRequest {

                    /**
                     * Constructs a new ListRulesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IListRulesRequest);

                    /** ListRulesRequest parent. */
                    public parent: string;

                    /** ListRulesRequest pageSize. */
                    public pageSize: number;

                    /** ListRulesRequest pageToken. */
                    public pageToken: string;

                    /** ListRulesRequest view. */
                    public view: (google.cloud.chronicle.v1.RuleView|keyof typeof google.cloud.chronicle.v1.RuleView);

                    /** ListRulesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListRulesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRulesRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IListRulesRequest): google.cloud.chronicle.v1.ListRulesRequest;

                    /**
                     * Encodes the specified ListRulesRequest message. Does not implicitly {@link google.cloud.chronicle.v1.ListRulesRequest.verify|verify} messages.
                     * @param message ListRulesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IListRulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRulesRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.ListRulesRequest.verify|verify} messages.
                     * @param message ListRulesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IListRulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRulesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRulesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.ListRulesRequest;

                    /**
                     * Decodes a ListRulesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRulesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.ListRulesRequest;

                    /**
                     * Verifies a ListRulesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRulesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRulesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.ListRulesRequest;

                    /**
                     * Creates a plain object from a ListRulesRequest message. Also converts values to other types if specified.
                     * @param message ListRulesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.ListRulesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRulesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRulesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRulesResponse. */
                interface IListRulesResponse {

                    /** ListRulesResponse rules */
                    rules?: (google.cloud.chronicle.v1.IRule[]|null);

                    /** ListRulesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListRulesResponse. */
                class ListRulesResponse implements IListRulesResponse {

                    /**
                     * Constructs a new ListRulesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IListRulesResponse);

                    /** ListRulesResponse rules. */
                    public rules: google.cloud.chronicle.v1.IRule[];

                    /** ListRulesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListRulesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRulesResponse instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IListRulesResponse): google.cloud.chronicle.v1.ListRulesResponse;

                    /**
                     * Encodes the specified ListRulesResponse message. Does not implicitly {@link google.cloud.chronicle.v1.ListRulesResponse.verify|verify} messages.
                     * @param message ListRulesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IListRulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRulesResponse message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.ListRulesResponse.verify|verify} messages.
                     * @param message ListRulesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IListRulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRulesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRulesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.ListRulesResponse;

                    /**
                     * Decodes a ListRulesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRulesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.ListRulesResponse;

                    /**
                     * Verifies a ListRulesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRulesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRulesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.ListRulesResponse;

                    /**
                     * Creates a plain object from a ListRulesResponse message. Also converts values to other types if specified.
                     * @param message ListRulesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.ListRulesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRulesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRulesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateRuleRequest. */
                interface IUpdateRuleRequest {

                    /** UpdateRuleRequest rule */
                    rule?: (google.cloud.chronicle.v1.IRule|null);

                    /** UpdateRuleRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateRuleRequest. */
                class UpdateRuleRequest implements IUpdateRuleRequest {

                    /**
                     * Constructs a new UpdateRuleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IUpdateRuleRequest);

                    /** UpdateRuleRequest rule. */
                    public rule?: (google.cloud.chronicle.v1.IRule|null);

                    /** UpdateRuleRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateRuleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateRuleRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IUpdateRuleRequest): google.cloud.chronicle.v1.UpdateRuleRequest;

                    /**
                     * Encodes the specified UpdateRuleRequest message. Does not implicitly {@link google.cloud.chronicle.v1.UpdateRuleRequest.verify|verify} messages.
                     * @param message UpdateRuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IUpdateRuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateRuleRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.UpdateRuleRequest.verify|verify} messages.
                     * @param message UpdateRuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IUpdateRuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateRuleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateRuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.UpdateRuleRequest;

                    /**
                     * Decodes an UpdateRuleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateRuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.UpdateRuleRequest;

                    /**
                     * Verifies an UpdateRuleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateRuleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateRuleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.UpdateRuleRequest;

                    /**
                     * Creates a plain object from an UpdateRuleRequest message. Also converts values to other types if specified.
                     * @param message UpdateRuleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.UpdateRuleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateRuleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateRuleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteRuleRequest. */
                interface IDeleteRuleRequest {

                    /** DeleteRuleRequest name */
                    name?: (string|null);

                    /** DeleteRuleRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteRuleRequest. */
                class DeleteRuleRequest implements IDeleteRuleRequest {

                    /**
                     * Constructs a new DeleteRuleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IDeleteRuleRequest);

                    /** DeleteRuleRequest name. */
                    public name: string;

                    /** DeleteRuleRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteRuleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteRuleRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IDeleteRuleRequest): google.cloud.chronicle.v1.DeleteRuleRequest;

                    /**
                     * Encodes the specified DeleteRuleRequest message. Does not implicitly {@link google.cloud.chronicle.v1.DeleteRuleRequest.verify|verify} messages.
                     * @param message DeleteRuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IDeleteRuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteRuleRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.DeleteRuleRequest.verify|verify} messages.
                     * @param message DeleteRuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IDeleteRuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteRuleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteRuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.DeleteRuleRequest;

                    /**
                     * Decodes a DeleteRuleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteRuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.DeleteRuleRequest;

                    /**
                     * Verifies a DeleteRuleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteRuleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteRuleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.DeleteRuleRequest;

                    /**
                     * Creates a plain object from a DeleteRuleRequest message. Also converts values to other types if specified.
                     * @param message DeleteRuleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.DeleteRuleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteRuleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteRuleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRuleRevisionsRequest. */
                interface IListRuleRevisionsRequest {

                    /** ListRuleRevisionsRequest name */
                    name?: (string|null);

                    /** ListRuleRevisionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRuleRevisionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRuleRevisionsRequest view */
                    view?: (google.cloud.chronicle.v1.RuleView|keyof typeof google.cloud.chronicle.v1.RuleView|null);
                }

                /** Represents a ListRuleRevisionsRequest. */
                class ListRuleRevisionsRequest implements IListRuleRevisionsRequest {

                    /**
                     * Constructs a new ListRuleRevisionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IListRuleRevisionsRequest);

                    /** ListRuleRevisionsRequest name. */
                    public name: string;

                    /** ListRuleRevisionsRequest pageSize. */
                    public pageSize: number;

                    /** ListRuleRevisionsRequest pageToken. */
                    public pageToken: string;

                    /** ListRuleRevisionsRequest view. */
                    public view: (google.cloud.chronicle.v1.RuleView|keyof typeof google.cloud.chronicle.v1.RuleView);

                    /**
                     * Creates a new ListRuleRevisionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRuleRevisionsRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IListRuleRevisionsRequest): google.cloud.chronicle.v1.ListRuleRevisionsRequest;

                    /**
                     * Encodes the specified ListRuleRevisionsRequest message. Does not implicitly {@link google.cloud.chronicle.v1.ListRuleRevisionsRequest.verify|verify} messages.
                     * @param message ListRuleRevisionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IListRuleRevisionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRuleRevisionsRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.ListRuleRevisionsRequest.verify|verify} messages.
                     * @param message ListRuleRevisionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IListRuleRevisionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRuleRevisionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRuleRevisionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.ListRuleRevisionsRequest;

                    /**
                     * Decodes a ListRuleRevisionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRuleRevisionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.ListRuleRevisionsRequest;

                    /**
                     * Verifies a ListRuleRevisionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRuleRevisionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRuleRevisionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.ListRuleRevisionsRequest;

                    /**
                     * Creates a plain object from a ListRuleRevisionsRequest message. Also converts values to other types if specified.
                     * @param message ListRuleRevisionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.ListRuleRevisionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRuleRevisionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRuleRevisionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRuleRevisionsResponse. */
                interface IListRuleRevisionsResponse {

                    /** ListRuleRevisionsResponse rules */
                    rules?: (google.cloud.chronicle.v1.IRule[]|null);

                    /** ListRuleRevisionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListRuleRevisionsResponse. */
                class ListRuleRevisionsResponse implements IListRuleRevisionsResponse {

                    /**
                     * Constructs a new ListRuleRevisionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IListRuleRevisionsResponse);

                    /** ListRuleRevisionsResponse rules. */
                    public rules: google.cloud.chronicle.v1.IRule[];

                    /** ListRuleRevisionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListRuleRevisionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRuleRevisionsResponse instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IListRuleRevisionsResponse): google.cloud.chronicle.v1.ListRuleRevisionsResponse;

                    /**
                     * Encodes the specified ListRuleRevisionsResponse message. Does not implicitly {@link google.cloud.chronicle.v1.ListRuleRevisionsResponse.verify|verify} messages.
                     * @param message ListRuleRevisionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IListRuleRevisionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRuleRevisionsResponse message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.ListRuleRevisionsResponse.verify|verify} messages.
                     * @param message ListRuleRevisionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IListRuleRevisionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRuleRevisionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRuleRevisionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.ListRuleRevisionsResponse;

                    /**
                     * Decodes a ListRuleRevisionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRuleRevisionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.ListRuleRevisionsResponse;

                    /**
                     * Verifies a ListRuleRevisionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRuleRevisionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRuleRevisionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.ListRuleRevisionsResponse;

                    /**
                     * Creates a plain object from a ListRuleRevisionsResponse message. Also converts values to other types if specified.
                     * @param message ListRuleRevisionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.ListRuleRevisionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRuleRevisionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRuleRevisionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateRetrohuntRequest. */
                interface ICreateRetrohuntRequest {

                    /** CreateRetrohuntRequest parent */
                    parent?: (string|null);

                    /** CreateRetrohuntRequest retrohunt */
                    retrohunt?: (google.cloud.chronicle.v1.IRetrohunt|null);
                }

                /** Represents a CreateRetrohuntRequest. */
                class CreateRetrohuntRequest implements ICreateRetrohuntRequest {

                    /**
                     * Constructs a new CreateRetrohuntRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.ICreateRetrohuntRequest);

                    /** CreateRetrohuntRequest parent. */
                    public parent: string;

                    /** CreateRetrohuntRequest retrohunt. */
                    public retrohunt?: (google.cloud.chronicle.v1.IRetrohunt|null);

                    /**
                     * Creates a new CreateRetrohuntRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateRetrohuntRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.ICreateRetrohuntRequest): google.cloud.chronicle.v1.CreateRetrohuntRequest;

                    /**
                     * Encodes the specified CreateRetrohuntRequest message. Does not implicitly {@link google.cloud.chronicle.v1.CreateRetrohuntRequest.verify|verify} messages.
                     * @param message CreateRetrohuntRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.ICreateRetrohuntRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateRetrohuntRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.CreateRetrohuntRequest.verify|verify} messages.
                     * @param message CreateRetrohuntRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.ICreateRetrohuntRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateRetrohuntRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateRetrohuntRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.CreateRetrohuntRequest;

                    /**
                     * Decodes a CreateRetrohuntRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateRetrohuntRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.CreateRetrohuntRequest;

                    /**
                     * Verifies a CreateRetrohuntRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateRetrohuntRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateRetrohuntRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.CreateRetrohuntRequest;

                    /**
                     * Creates a plain object from a CreateRetrohuntRequest message. Also converts values to other types if specified.
                     * @param message CreateRetrohuntRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.CreateRetrohuntRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateRetrohuntRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateRetrohuntRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetRetrohuntRequest. */
                interface IGetRetrohuntRequest {

                    /** GetRetrohuntRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRetrohuntRequest. */
                class GetRetrohuntRequest implements IGetRetrohuntRequest {

                    /**
                     * Constructs a new GetRetrohuntRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IGetRetrohuntRequest);

                    /** GetRetrohuntRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRetrohuntRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRetrohuntRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IGetRetrohuntRequest): google.cloud.chronicle.v1.GetRetrohuntRequest;

                    /**
                     * Encodes the specified GetRetrohuntRequest message. Does not implicitly {@link google.cloud.chronicle.v1.GetRetrohuntRequest.verify|verify} messages.
                     * @param message GetRetrohuntRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IGetRetrohuntRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRetrohuntRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.GetRetrohuntRequest.verify|verify} messages.
                     * @param message GetRetrohuntRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IGetRetrohuntRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRetrohuntRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRetrohuntRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.GetRetrohuntRequest;

                    /**
                     * Decodes a GetRetrohuntRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRetrohuntRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.GetRetrohuntRequest;

                    /**
                     * Verifies a GetRetrohuntRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRetrohuntRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRetrohuntRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.GetRetrohuntRequest;

                    /**
                     * Creates a plain object from a GetRetrohuntRequest message. Also converts values to other types if specified.
                     * @param message GetRetrohuntRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.GetRetrohuntRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRetrohuntRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetRetrohuntRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRetrohuntsRequest. */
                interface IListRetrohuntsRequest {

                    /** ListRetrohuntsRequest parent */
                    parent?: (string|null);

                    /** ListRetrohuntsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRetrohuntsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRetrohuntsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListRetrohuntsRequest. */
                class ListRetrohuntsRequest implements IListRetrohuntsRequest {

                    /**
                     * Constructs a new ListRetrohuntsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IListRetrohuntsRequest);

                    /** ListRetrohuntsRequest parent. */
                    public parent: string;

                    /** ListRetrohuntsRequest pageSize. */
                    public pageSize: number;

                    /** ListRetrohuntsRequest pageToken. */
                    public pageToken: string;

                    /** ListRetrohuntsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListRetrohuntsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRetrohuntsRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IListRetrohuntsRequest): google.cloud.chronicle.v1.ListRetrohuntsRequest;

                    /**
                     * Encodes the specified ListRetrohuntsRequest message. Does not implicitly {@link google.cloud.chronicle.v1.ListRetrohuntsRequest.verify|verify} messages.
                     * @param message ListRetrohuntsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IListRetrohuntsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRetrohuntsRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.ListRetrohuntsRequest.verify|verify} messages.
                     * @param message ListRetrohuntsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IListRetrohuntsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRetrohuntsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRetrohuntsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.ListRetrohuntsRequest;

                    /**
                     * Decodes a ListRetrohuntsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRetrohuntsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.ListRetrohuntsRequest;

                    /**
                     * Verifies a ListRetrohuntsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRetrohuntsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRetrohuntsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.ListRetrohuntsRequest;

                    /**
                     * Creates a plain object from a ListRetrohuntsRequest message. Also converts values to other types if specified.
                     * @param message ListRetrohuntsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.ListRetrohuntsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRetrohuntsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRetrohuntsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRetrohuntsResponse. */
                interface IListRetrohuntsResponse {

                    /** ListRetrohuntsResponse retrohunts */
                    retrohunts?: (google.cloud.chronicle.v1.IRetrohunt[]|null);

                    /** ListRetrohuntsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListRetrohuntsResponse. */
                class ListRetrohuntsResponse implements IListRetrohuntsResponse {

                    /**
                     * Constructs a new ListRetrohuntsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IListRetrohuntsResponse);

                    /** ListRetrohuntsResponse retrohunts. */
                    public retrohunts: google.cloud.chronicle.v1.IRetrohunt[];

                    /** ListRetrohuntsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListRetrohuntsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRetrohuntsResponse instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IListRetrohuntsResponse): google.cloud.chronicle.v1.ListRetrohuntsResponse;

                    /**
                     * Encodes the specified ListRetrohuntsResponse message. Does not implicitly {@link google.cloud.chronicle.v1.ListRetrohuntsResponse.verify|verify} messages.
                     * @param message ListRetrohuntsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IListRetrohuntsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRetrohuntsResponse message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.ListRetrohuntsResponse.verify|verify} messages.
                     * @param message ListRetrohuntsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IListRetrohuntsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRetrohuntsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRetrohuntsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.ListRetrohuntsResponse;

                    /**
                     * Decodes a ListRetrohuntsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRetrohuntsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.ListRetrohuntsResponse;

                    /**
                     * Verifies a ListRetrohuntsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRetrohuntsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRetrohuntsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.ListRetrohuntsResponse;

                    /**
                     * Creates a plain object from a ListRetrohuntsResponse message. Also converts values to other types if specified.
                     * @param message ListRetrohuntsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.ListRetrohuntsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRetrohuntsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRetrohuntsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetRuleDeploymentRequest. */
                interface IGetRuleDeploymentRequest {

                    /** GetRuleDeploymentRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRuleDeploymentRequest. */
                class GetRuleDeploymentRequest implements IGetRuleDeploymentRequest {

                    /**
                     * Constructs a new GetRuleDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IGetRuleDeploymentRequest);

                    /** GetRuleDeploymentRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRuleDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRuleDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IGetRuleDeploymentRequest): google.cloud.chronicle.v1.GetRuleDeploymentRequest;

                    /**
                     * Encodes the specified GetRuleDeploymentRequest message. Does not implicitly {@link google.cloud.chronicle.v1.GetRuleDeploymentRequest.verify|verify} messages.
                     * @param message GetRuleDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IGetRuleDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRuleDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.GetRuleDeploymentRequest.verify|verify} messages.
                     * @param message GetRuleDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IGetRuleDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRuleDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRuleDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.GetRuleDeploymentRequest;

                    /**
                     * Decodes a GetRuleDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRuleDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.GetRuleDeploymentRequest;

                    /**
                     * Verifies a GetRuleDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRuleDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRuleDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.GetRuleDeploymentRequest;

                    /**
                     * Creates a plain object from a GetRuleDeploymentRequest message. Also converts values to other types if specified.
                     * @param message GetRuleDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.GetRuleDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRuleDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetRuleDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRuleDeploymentsRequest. */
                interface IListRuleDeploymentsRequest {

                    /** ListRuleDeploymentsRequest parent */
                    parent?: (string|null);

                    /** ListRuleDeploymentsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRuleDeploymentsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRuleDeploymentsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListRuleDeploymentsRequest. */
                class ListRuleDeploymentsRequest implements IListRuleDeploymentsRequest {

                    /**
                     * Constructs a new ListRuleDeploymentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IListRuleDeploymentsRequest);

                    /** ListRuleDeploymentsRequest parent. */
                    public parent: string;

                    /** ListRuleDeploymentsRequest pageSize. */
                    public pageSize: number;

                    /** ListRuleDeploymentsRequest pageToken. */
                    public pageToken: string;

                    /** ListRuleDeploymentsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListRuleDeploymentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRuleDeploymentsRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IListRuleDeploymentsRequest): google.cloud.chronicle.v1.ListRuleDeploymentsRequest;

                    /**
                     * Encodes the specified ListRuleDeploymentsRequest message. Does not implicitly {@link google.cloud.chronicle.v1.ListRuleDeploymentsRequest.verify|verify} messages.
                     * @param message ListRuleDeploymentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IListRuleDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRuleDeploymentsRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.ListRuleDeploymentsRequest.verify|verify} messages.
                     * @param message ListRuleDeploymentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IListRuleDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRuleDeploymentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRuleDeploymentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.ListRuleDeploymentsRequest;

                    /**
                     * Decodes a ListRuleDeploymentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRuleDeploymentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.ListRuleDeploymentsRequest;

                    /**
                     * Verifies a ListRuleDeploymentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRuleDeploymentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRuleDeploymentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.ListRuleDeploymentsRequest;

                    /**
                     * Creates a plain object from a ListRuleDeploymentsRequest message. Also converts values to other types if specified.
                     * @param message ListRuleDeploymentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.ListRuleDeploymentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRuleDeploymentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRuleDeploymentsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRuleDeploymentsResponse. */
                interface IListRuleDeploymentsResponse {

                    /** ListRuleDeploymentsResponse ruleDeployments */
                    ruleDeployments?: (google.cloud.chronicle.v1.IRuleDeployment[]|null);

                    /** ListRuleDeploymentsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListRuleDeploymentsResponse. */
                class ListRuleDeploymentsResponse implements IListRuleDeploymentsResponse {

                    /**
                     * Constructs a new ListRuleDeploymentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IListRuleDeploymentsResponse);

                    /** ListRuleDeploymentsResponse ruleDeployments. */
                    public ruleDeployments: google.cloud.chronicle.v1.IRuleDeployment[];

                    /** ListRuleDeploymentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListRuleDeploymentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRuleDeploymentsResponse instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IListRuleDeploymentsResponse): google.cloud.chronicle.v1.ListRuleDeploymentsResponse;

                    /**
                     * Encodes the specified ListRuleDeploymentsResponse message. Does not implicitly {@link google.cloud.chronicle.v1.ListRuleDeploymentsResponse.verify|verify} messages.
                     * @param message ListRuleDeploymentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IListRuleDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRuleDeploymentsResponse message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.ListRuleDeploymentsResponse.verify|verify} messages.
                     * @param message ListRuleDeploymentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IListRuleDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRuleDeploymentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRuleDeploymentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.ListRuleDeploymentsResponse;

                    /**
                     * Decodes a ListRuleDeploymentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRuleDeploymentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.ListRuleDeploymentsResponse;

                    /**
                     * Verifies a ListRuleDeploymentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRuleDeploymentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRuleDeploymentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.ListRuleDeploymentsResponse;

                    /**
                     * Creates a plain object from a ListRuleDeploymentsResponse message. Also converts values to other types if specified.
                     * @param message ListRuleDeploymentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.ListRuleDeploymentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRuleDeploymentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRuleDeploymentsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateRuleDeploymentRequest. */
                interface IUpdateRuleDeploymentRequest {

                    /** UpdateRuleDeploymentRequest ruleDeployment */
                    ruleDeployment?: (google.cloud.chronicle.v1.IRuleDeployment|null);

                    /** UpdateRuleDeploymentRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateRuleDeploymentRequest. */
                class UpdateRuleDeploymentRequest implements IUpdateRuleDeploymentRequest {

                    /**
                     * Constructs a new UpdateRuleDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IUpdateRuleDeploymentRequest);

                    /** UpdateRuleDeploymentRequest ruleDeployment. */
                    public ruleDeployment?: (google.cloud.chronicle.v1.IRuleDeployment|null);

                    /** UpdateRuleDeploymentRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateRuleDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateRuleDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IUpdateRuleDeploymentRequest): google.cloud.chronicle.v1.UpdateRuleDeploymentRequest;

                    /**
                     * Encodes the specified UpdateRuleDeploymentRequest message. Does not implicitly {@link google.cloud.chronicle.v1.UpdateRuleDeploymentRequest.verify|verify} messages.
                     * @param message UpdateRuleDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IUpdateRuleDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateRuleDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.UpdateRuleDeploymentRequest.verify|verify} messages.
                     * @param message UpdateRuleDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IUpdateRuleDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateRuleDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateRuleDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.UpdateRuleDeploymentRequest;

                    /**
                     * Decodes an UpdateRuleDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateRuleDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.UpdateRuleDeploymentRequest;

                    /**
                     * Verifies an UpdateRuleDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateRuleDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateRuleDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.UpdateRuleDeploymentRequest;

                    /**
                     * Creates a plain object from an UpdateRuleDeploymentRequest message. Also converts values to other types if specified.
                     * @param message UpdateRuleDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.UpdateRuleDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateRuleDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateRuleDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CompilationPosition. */
                interface ICompilationPosition {

                    /** CompilationPosition startLine */
                    startLine?: (number|null);

                    /** CompilationPosition startColumn */
                    startColumn?: (number|null);

                    /** CompilationPosition endLine */
                    endLine?: (number|null);

                    /** CompilationPosition endColumn */
                    endColumn?: (number|null);
                }

                /** Represents a CompilationPosition. */
                class CompilationPosition implements ICompilationPosition {

                    /**
                     * Constructs a new CompilationPosition.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.ICompilationPosition);

                    /** CompilationPosition startLine. */
                    public startLine: number;

                    /** CompilationPosition startColumn. */
                    public startColumn: number;

                    /** CompilationPosition endLine. */
                    public endLine: number;

                    /** CompilationPosition endColumn. */
                    public endColumn: number;

                    /**
                     * Creates a new CompilationPosition instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CompilationPosition instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.ICompilationPosition): google.cloud.chronicle.v1.CompilationPosition;

                    /**
                     * Encodes the specified CompilationPosition message. Does not implicitly {@link google.cloud.chronicle.v1.CompilationPosition.verify|verify} messages.
                     * @param message CompilationPosition message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.ICompilationPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CompilationPosition message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.CompilationPosition.verify|verify} messages.
                     * @param message CompilationPosition message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.ICompilationPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CompilationPosition message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CompilationPosition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.CompilationPosition;

                    /**
                     * Decodes a CompilationPosition message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CompilationPosition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.CompilationPosition;

                    /**
                     * Verifies a CompilationPosition message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CompilationPosition message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CompilationPosition
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.CompilationPosition;

                    /**
                     * Creates a plain object from a CompilationPosition message. Also converts values to other types if specified.
                     * @param message CompilationPosition
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.CompilationPosition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CompilationPosition to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CompilationPosition
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CompilationDiagnostic. */
                interface ICompilationDiagnostic {

                    /** CompilationDiagnostic message */
                    message?: (string|null);

                    /** CompilationDiagnostic position */
                    position?: (google.cloud.chronicle.v1.ICompilationPosition|null);

                    /** CompilationDiagnostic severity */
                    severity?: (google.cloud.chronicle.v1.CompilationDiagnostic.Severity|keyof typeof google.cloud.chronicle.v1.CompilationDiagnostic.Severity|null);

                    /** CompilationDiagnostic uri */
                    uri?: (string|null);
                }

                /** Represents a CompilationDiagnostic. */
                class CompilationDiagnostic implements ICompilationDiagnostic {

                    /**
                     * Constructs a new CompilationDiagnostic.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.ICompilationDiagnostic);

                    /** CompilationDiagnostic message. */
                    public message: string;

                    /** CompilationDiagnostic position. */
                    public position?: (google.cloud.chronicle.v1.ICompilationPosition|null);

                    /** CompilationDiagnostic severity. */
                    public severity: (google.cloud.chronicle.v1.CompilationDiagnostic.Severity|keyof typeof google.cloud.chronicle.v1.CompilationDiagnostic.Severity);

                    /** CompilationDiagnostic uri. */
                    public uri: string;

                    /**
                     * Creates a new CompilationDiagnostic instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CompilationDiagnostic instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.ICompilationDiagnostic): google.cloud.chronicle.v1.CompilationDiagnostic;

                    /**
                     * Encodes the specified CompilationDiagnostic message. Does not implicitly {@link google.cloud.chronicle.v1.CompilationDiagnostic.verify|verify} messages.
                     * @param message CompilationDiagnostic message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.ICompilationDiagnostic, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CompilationDiagnostic message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.CompilationDiagnostic.verify|verify} messages.
                     * @param message CompilationDiagnostic message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.ICompilationDiagnostic, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CompilationDiagnostic message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CompilationDiagnostic
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.CompilationDiagnostic;

                    /**
                     * Decodes a CompilationDiagnostic message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CompilationDiagnostic
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.CompilationDiagnostic;

                    /**
                     * Verifies a CompilationDiagnostic message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CompilationDiagnostic message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CompilationDiagnostic
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.CompilationDiagnostic;

                    /**
                     * Creates a plain object from a CompilationDiagnostic message. Also converts values to other types if specified.
                     * @param message CompilationDiagnostic
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.CompilationDiagnostic, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CompilationDiagnostic to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CompilationDiagnostic
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CompilationDiagnostic {

                    /** Severity enum. */
                    enum Severity {
                        SEVERITY_UNSPECIFIED = 0,
                        WARNING = 1,
                        ERROR = 2
                    }
                }

                /** Properties of a Severity. */
                interface ISeverity {

                    /** Severity displayName */
                    displayName?: (string|null);
                }

                /** Represents a Severity. */
                class Severity implements ISeverity {

                    /**
                     * Constructs a new Severity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.ISeverity);

                    /** Severity displayName. */
                    public displayName: string;

                    /**
                     * Creates a new Severity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Severity instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.ISeverity): google.cloud.chronicle.v1.Severity;

                    /**
                     * Encodes the specified Severity message. Does not implicitly {@link google.cloud.chronicle.v1.Severity.verify|verify} messages.
                     * @param message Severity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.ISeverity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Severity message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.Severity.verify|verify} messages.
                     * @param message Severity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.ISeverity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Severity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Severity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.Severity;

                    /**
                     * Decodes a Severity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Severity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.Severity;

                    /**
                     * Verifies a Severity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Severity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Severity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.Severity;

                    /**
                     * Creates a plain object from a Severity message. Also converts values to other types if specified.
                     * @param message Severity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.Severity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Severity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Severity
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RetrohuntMetadata. */
                interface IRetrohuntMetadata {

                    /** RetrohuntMetadata retrohunt */
                    retrohunt?: (string|null);

                    /** RetrohuntMetadata executionInterval */
                    executionInterval?: (google.type.IInterval|null);

                    /** RetrohuntMetadata progressPercentage */
                    progressPercentage?: (number|null);
                }

                /** Represents a RetrohuntMetadata. */
                class RetrohuntMetadata implements IRetrohuntMetadata {

                    /**
                     * Constructs a new RetrohuntMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IRetrohuntMetadata);

                    /** RetrohuntMetadata retrohunt. */
                    public retrohunt: string;

                    /** RetrohuntMetadata executionInterval. */
                    public executionInterval?: (google.type.IInterval|null);

                    /** RetrohuntMetadata progressPercentage. */
                    public progressPercentage: number;

                    /**
                     * Creates a new RetrohuntMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RetrohuntMetadata instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IRetrohuntMetadata): google.cloud.chronicle.v1.RetrohuntMetadata;

                    /**
                     * Encodes the specified RetrohuntMetadata message. Does not implicitly {@link google.cloud.chronicle.v1.RetrohuntMetadata.verify|verify} messages.
                     * @param message RetrohuntMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IRetrohuntMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RetrohuntMetadata message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.RetrohuntMetadata.verify|verify} messages.
                     * @param message RetrohuntMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IRetrohuntMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RetrohuntMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RetrohuntMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.RetrohuntMetadata;

                    /**
                     * Decodes a RetrohuntMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RetrohuntMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.RetrohuntMetadata;

                    /**
                     * Verifies a RetrohuntMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RetrohuntMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RetrohuntMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.RetrohuntMetadata;

                    /**
                     * Creates a plain object from a RetrohuntMetadata message. Also converts values to other types if specified.
                     * @param message RetrohuntMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.RetrohuntMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RetrohuntMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RetrohuntMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an InputsUsed. */
                interface IInputsUsed {

                    /** InputsUsed usesUdm */
                    usesUdm?: (boolean|null);

                    /** InputsUsed usesEntity */
                    usesEntity?: (boolean|null);

                    /** InputsUsed usesDetection */
                    usesDetection?: (boolean|null);
                }

                /** Represents an InputsUsed. */
                class InputsUsed implements IInputsUsed {

                    /**
                     * Constructs a new InputsUsed.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.chronicle.v1.IInputsUsed);

                    /** InputsUsed usesUdm. */
                    public usesUdm: boolean;

                    /** InputsUsed usesEntity. */
                    public usesEntity: boolean;

                    /** InputsUsed usesDetection. */
                    public usesDetection: boolean;

                    /**
                     * Creates a new InputsUsed instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InputsUsed instance
                     */
                    public static create(properties?: google.cloud.chronicle.v1.IInputsUsed): google.cloud.chronicle.v1.InputsUsed;

                    /**
                     * Encodes the specified InputsUsed message. Does not implicitly {@link google.cloud.chronicle.v1.InputsUsed.verify|verify} messages.
                     * @param message InputsUsed message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.chronicle.v1.IInputsUsed, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InputsUsed message, length delimited. Does not implicitly {@link google.cloud.chronicle.v1.InputsUsed.verify|verify} messages.
                     * @param message InputsUsed message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.chronicle.v1.IInputsUsed, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InputsUsed message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InputsUsed
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.chronicle.v1.InputsUsed;

                    /**
                     * Decodes an InputsUsed message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InputsUsed
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.chronicle.v1.InputsUsed;

                    /**
                     * Verifies an InputsUsed message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InputsUsed message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InputsUsed
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.chronicle.v1.InputsUsed;

                    /**
                     * Creates a plain object from an InputsUsed message. Also converts values to other types if specified.
                     * @param message InputsUsed
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.chronicle.v1.InputsUsed, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InputsUsed to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InputsUsed
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
