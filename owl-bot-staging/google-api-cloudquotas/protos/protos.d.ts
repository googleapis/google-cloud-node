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

    /** Namespace api. */
    namespace api {

        /** Namespace cloudquotas. */
        namespace cloudquotas {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a CloudQuotas */
                class CloudQuotas extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CloudQuotas service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CloudQuotas service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CloudQuotas;

                    /**
                     * Calls ListQuotaInfos.
                     * @param request ListQuotaInfosRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListQuotaInfosResponse
                     */
                    public listQuotaInfos(request: google.api.cloudquotas.v1.IListQuotaInfosRequest, callback: google.api.cloudquotas.v1.CloudQuotas.ListQuotaInfosCallback): void;

                    /**
                     * Calls ListQuotaInfos.
                     * @param request ListQuotaInfosRequest message or plain object
                     * @returns Promise
                     */
                    public listQuotaInfos(request: google.api.cloudquotas.v1.IListQuotaInfosRequest): Promise<google.api.cloudquotas.v1.ListQuotaInfosResponse>;

                    /**
                     * Calls GetQuotaInfo.
                     * @param request GetQuotaInfoRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QuotaInfo
                     */
                    public getQuotaInfo(request: google.api.cloudquotas.v1.IGetQuotaInfoRequest, callback: google.api.cloudquotas.v1.CloudQuotas.GetQuotaInfoCallback): void;

                    /**
                     * Calls GetQuotaInfo.
                     * @param request GetQuotaInfoRequest message or plain object
                     * @returns Promise
                     */
                    public getQuotaInfo(request: google.api.cloudquotas.v1.IGetQuotaInfoRequest): Promise<google.api.cloudquotas.v1.QuotaInfo>;

                    /**
                     * Calls ListQuotaPreferences.
                     * @param request ListQuotaPreferencesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListQuotaPreferencesResponse
                     */
                    public listQuotaPreferences(request: google.api.cloudquotas.v1.IListQuotaPreferencesRequest, callback: google.api.cloudquotas.v1.CloudQuotas.ListQuotaPreferencesCallback): void;

                    /**
                     * Calls ListQuotaPreferences.
                     * @param request ListQuotaPreferencesRequest message or plain object
                     * @returns Promise
                     */
                    public listQuotaPreferences(request: google.api.cloudquotas.v1.IListQuotaPreferencesRequest): Promise<google.api.cloudquotas.v1.ListQuotaPreferencesResponse>;

                    /**
                     * Calls GetQuotaPreference.
                     * @param request GetQuotaPreferenceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QuotaPreference
                     */
                    public getQuotaPreference(request: google.api.cloudquotas.v1.IGetQuotaPreferenceRequest, callback: google.api.cloudquotas.v1.CloudQuotas.GetQuotaPreferenceCallback): void;

                    /**
                     * Calls GetQuotaPreference.
                     * @param request GetQuotaPreferenceRequest message or plain object
                     * @returns Promise
                     */
                    public getQuotaPreference(request: google.api.cloudquotas.v1.IGetQuotaPreferenceRequest): Promise<google.api.cloudquotas.v1.QuotaPreference>;

                    /**
                     * Calls CreateQuotaPreference.
                     * @param request CreateQuotaPreferenceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QuotaPreference
                     */
                    public createQuotaPreference(request: google.api.cloudquotas.v1.ICreateQuotaPreferenceRequest, callback: google.api.cloudquotas.v1.CloudQuotas.CreateQuotaPreferenceCallback): void;

                    /**
                     * Calls CreateQuotaPreference.
                     * @param request CreateQuotaPreferenceRequest message or plain object
                     * @returns Promise
                     */
                    public createQuotaPreference(request: google.api.cloudquotas.v1.ICreateQuotaPreferenceRequest): Promise<google.api.cloudquotas.v1.QuotaPreference>;

                    /**
                     * Calls UpdateQuotaPreference.
                     * @param request UpdateQuotaPreferenceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QuotaPreference
                     */
                    public updateQuotaPreference(request: google.api.cloudquotas.v1.IUpdateQuotaPreferenceRequest, callback: google.api.cloudquotas.v1.CloudQuotas.UpdateQuotaPreferenceCallback): void;

                    /**
                     * Calls UpdateQuotaPreference.
                     * @param request UpdateQuotaPreferenceRequest message or plain object
                     * @returns Promise
                     */
                    public updateQuotaPreference(request: google.api.cloudquotas.v1.IUpdateQuotaPreferenceRequest): Promise<google.api.cloudquotas.v1.QuotaPreference>;
                }

                namespace CloudQuotas {

                    /**
                     * Callback as used by {@link google.api.cloudquotas.v1.CloudQuotas|listQuotaInfos}.
                     * @param error Error, if any
                     * @param [response] ListQuotaInfosResponse
                     */
                    type ListQuotaInfosCallback = (error: (Error|null), response?: google.api.cloudquotas.v1.ListQuotaInfosResponse) => void;

                    /**
                     * Callback as used by {@link google.api.cloudquotas.v1.CloudQuotas|getQuotaInfo}.
                     * @param error Error, if any
                     * @param [response] QuotaInfo
                     */
                    type GetQuotaInfoCallback = (error: (Error|null), response?: google.api.cloudquotas.v1.QuotaInfo) => void;

                    /**
                     * Callback as used by {@link google.api.cloudquotas.v1.CloudQuotas|listQuotaPreferences}.
                     * @param error Error, if any
                     * @param [response] ListQuotaPreferencesResponse
                     */
                    type ListQuotaPreferencesCallback = (error: (Error|null), response?: google.api.cloudquotas.v1.ListQuotaPreferencesResponse) => void;

                    /**
                     * Callback as used by {@link google.api.cloudquotas.v1.CloudQuotas|getQuotaPreference}.
                     * @param error Error, if any
                     * @param [response] QuotaPreference
                     */
                    type GetQuotaPreferenceCallback = (error: (Error|null), response?: google.api.cloudquotas.v1.QuotaPreference) => void;

                    /**
                     * Callback as used by {@link google.api.cloudquotas.v1.CloudQuotas|createQuotaPreference}.
                     * @param error Error, if any
                     * @param [response] QuotaPreference
                     */
                    type CreateQuotaPreferenceCallback = (error: (Error|null), response?: google.api.cloudquotas.v1.QuotaPreference) => void;

                    /**
                     * Callback as used by {@link google.api.cloudquotas.v1.CloudQuotas|updateQuotaPreference}.
                     * @param error Error, if any
                     * @param [response] QuotaPreference
                     */
                    type UpdateQuotaPreferenceCallback = (error: (Error|null), response?: google.api.cloudquotas.v1.QuotaPreference) => void;
                }

                /** Properties of a ListQuotaInfosRequest. */
                interface IListQuotaInfosRequest {

                    /** ListQuotaInfosRequest parent */
                    parent?: (string|null);

                    /** ListQuotaInfosRequest pageSize */
                    pageSize?: (number|null);

                    /** ListQuotaInfosRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListQuotaInfosRequest. */
                class ListQuotaInfosRequest implements IListQuotaInfosRequest {

                    /**
                     * Constructs a new ListQuotaInfosRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1.IListQuotaInfosRequest);

                    /** ListQuotaInfosRequest parent. */
                    public parent: string;

                    /** ListQuotaInfosRequest pageSize. */
                    public pageSize: number;

                    /** ListQuotaInfosRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListQuotaInfosRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListQuotaInfosRequest instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1.IListQuotaInfosRequest): google.api.cloudquotas.v1.ListQuotaInfosRequest;

                    /**
                     * Encodes the specified ListQuotaInfosRequest message. Does not implicitly {@link google.api.cloudquotas.v1.ListQuotaInfosRequest.verify|verify} messages.
                     * @param message ListQuotaInfosRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1.IListQuotaInfosRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListQuotaInfosRequest message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1.ListQuotaInfosRequest.verify|verify} messages.
                     * @param message ListQuotaInfosRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1.IListQuotaInfosRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListQuotaInfosRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListQuotaInfosRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1.ListQuotaInfosRequest;

                    /**
                     * Decodes a ListQuotaInfosRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListQuotaInfosRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1.ListQuotaInfosRequest;

                    /**
                     * Verifies a ListQuotaInfosRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListQuotaInfosRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListQuotaInfosRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1.ListQuotaInfosRequest;

                    /**
                     * Creates a plain object from a ListQuotaInfosRequest message. Also converts values to other types if specified.
                     * @param message ListQuotaInfosRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1.ListQuotaInfosRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListQuotaInfosRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListQuotaInfosRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListQuotaInfosResponse. */
                interface IListQuotaInfosResponse {

                    /** ListQuotaInfosResponse quotaInfos */
                    quotaInfos?: (google.api.cloudquotas.v1.IQuotaInfo[]|null);

                    /** ListQuotaInfosResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListQuotaInfosResponse. */
                class ListQuotaInfosResponse implements IListQuotaInfosResponse {

                    /**
                     * Constructs a new ListQuotaInfosResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1.IListQuotaInfosResponse);

                    /** ListQuotaInfosResponse quotaInfos. */
                    public quotaInfos: google.api.cloudquotas.v1.IQuotaInfo[];

                    /** ListQuotaInfosResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListQuotaInfosResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListQuotaInfosResponse instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1.IListQuotaInfosResponse): google.api.cloudquotas.v1.ListQuotaInfosResponse;

                    /**
                     * Encodes the specified ListQuotaInfosResponse message. Does not implicitly {@link google.api.cloudquotas.v1.ListQuotaInfosResponse.verify|verify} messages.
                     * @param message ListQuotaInfosResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1.IListQuotaInfosResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListQuotaInfosResponse message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1.ListQuotaInfosResponse.verify|verify} messages.
                     * @param message ListQuotaInfosResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1.IListQuotaInfosResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListQuotaInfosResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListQuotaInfosResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1.ListQuotaInfosResponse;

                    /**
                     * Decodes a ListQuotaInfosResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListQuotaInfosResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1.ListQuotaInfosResponse;

                    /**
                     * Verifies a ListQuotaInfosResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListQuotaInfosResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListQuotaInfosResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1.ListQuotaInfosResponse;

                    /**
                     * Creates a plain object from a ListQuotaInfosResponse message. Also converts values to other types if specified.
                     * @param message ListQuotaInfosResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1.ListQuotaInfosResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListQuotaInfosResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListQuotaInfosResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetQuotaInfoRequest. */
                interface IGetQuotaInfoRequest {

                    /** GetQuotaInfoRequest name */
                    name?: (string|null);
                }

                /** Represents a GetQuotaInfoRequest. */
                class GetQuotaInfoRequest implements IGetQuotaInfoRequest {

                    /**
                     * Constructs a new GetQuotaInfoRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1.IGetQuotaInfoRequest);

                    /** GetQuotaInfoRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetQuotaInfoRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetQuotaInfoRequest instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1.IGetQuotaInfoRequest): google.api.cloudquotas.v1.GetQuotaInfoRequest;

                    /**
                     * Encodes the specified GetQuotaInfoRequest message. Does not implicitly {@link google.api.cloudquotas.v1.GetQuotaInfoRequest.verify|verify} messages.
                     * @param message GetQuotaInfoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1.IGetQuotaInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetQuotaInfoRequest message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1.GetQuotaInfoRequest.verify|verify} messages.
                     * @param message GetQuotaInfoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1.IGetQuotaInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetQuotaInfoRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetQuotaInfoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1.GetQuotaInfoRequest;

                    /**
                     * Decodes a GetQuotaInfoRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetQuotaInfoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1.GetQuotaInfoRequest;

                    /**
                     * Verifies a GetQuotaInfoRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetQuotaInfoRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetQuotaInfoRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1.GetQuotaInfoRequest;

                    /**
                     * Creates a plain object from a GetQuotaInfoRequest message. Also converts values to other types if specified.
                     * @param message GetQuotaInfoRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1.GetQuotaInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetQuotaInfoRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetQuotaInfoRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListQuotaPreferencesRequest. */
                interface IListQuotaPreferencesRequest {

                    /** ListQuotaPreferencesRequest parent */
                    parent?: (string|null);

                    /** ListQuotaPreferencesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListQuotaPreferencesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListQuotaPreferencesRequest filter */
                    filter?: (string|null);

                    /** ListQuotaPreferencesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListQuotaPreferencesRequest. */
                class ListQuotaPreferencesRequest implements IListQuotaPreferencesRequest {

                    /**
                     * Constructs a new ListQuotaPreferencesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1.IListQuotaPreferencesRequest);

                    /** ListQuotaPreferencesRequest parent. */
                    public parent: string;

                    /** ListQuotaPreferencesRequest pageSize. */
                    public pageSize: number;

                    /** ListQuotaPreferencesRequest pageToken. */
                    public pageToken: string;

                    /** ListQuotaPreferencesRequest filter. */
                    public filter: string;

                    /** ListQuotaPreferencesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListQuotaPreferencesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListQuotaPreferencesRequest instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1.IListQuotaPreferencesRequest): google.api.cloudquotas.v1.ListQuotaPreferencesRequest;

                    /**
                     * Encodes the specified ListQuotaPreferencesRequest message. Does not implicitly {@link google.api.cloudquotas.v1.ListQuotaPreferencesRequest.verify|verify} messages.
                     * @param message ListQuotaPreferencesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1.IListQuotaPreferencesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListQuotaPreferencesRequest message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1.ListQuotaPreferencesRequest.verify|verify} messages.
                     * @param message ListQuotaPreferencesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1.IListQuotaPreferencesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListQuotaPreferencesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListQuotaPreferencesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1.ListQuotaPreferencesRequest;

                    /**
                     * Decodes a ListQuotaPreferencesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListQuotaPreferencesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1.ListQuotaPreferencesRequest;

                    /**
                     * Verifies a ListQuotaPreferencesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListQuotaPreferencesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListQuotaPreferencesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1.ListQuotaPreferencesRequest;

                    /**
                     * Creates a plain object from a ListQuotaPreferencesRequest message. Also converts values to other types if specified.
                     * @param message ListQuotaPreferencesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1.ListQuotaPreferencesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListQuotaPreferencesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListQuotaPreferencesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListQuotaPreferencesResponse. */
                interface IListQuotaPreferencesResponse {

                    /** ListQuotaPreferencesResponse quotaPreferences */
                    quotaPreferences?: (google.api.cloudquotas.v1.IQuotaPreference[]|null);

                    /** ListQuotaPreferencesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListQuotaPreferencesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListQuotaPreferencesResponse. */
                class ListQuotaPreferencesResponse implements IListQuotaPreferencesResponse {

                    /**
                     * Constructs a new ListQuotaPreferencesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1.IListQuotaPreferencesResponse);

                    /** ListQuotaPreferencesResponse quotaPreferences. */
                    public quotaPreferences: google.api.cloudquotas.v1.IQuotaPreference[];

                    /** ListQuotaPreferencesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListQuotaPreferencesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListQuotaPreferencesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListQuotaPreferencesResponse instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1.IListQuotaPreferencesResponse): google.api.cloudquotas.v1.ListQuotaPreferencesResponse;

                    /**
                     * Encodes the specified ListQuotaPreferencesResponse message. Does not implicitly {@link google.api.cloudquotas.v1.ListQuotaPreferencesResponse.verify|verify} messages.
                     * @param message ListQuotaPreferencesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1.IListQuotaPreferencesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListQuotaPreferencesResponse message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1.ListQuotaPreferencesResponse.verify|verify} messages.
                     * @param message ListQuotaPreferencesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1.IListQuotaPreferencesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListQuotaPreferencesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListQuotaPreferencesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1.ListQuotaPreferencesResponse;

                    /**
                     * Decodes a ListQuotaPreferencesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListQuotaPreferencesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1.ListQuotaPreferencesResponse;

                    /**
                     * Verifies a ListQuotaPreferencesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListQuotaPreferencesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListQuotaPreferencesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1.ListQuotaPreferencesResponse;

                    /**
                     * Creates a plain object from a ListQuotaPreferencesResponse message. Also converts values to other types if specified.
                     * @param message ListQuotaPreferencesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1.ListQuotaPreferencesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListQuotaPreferencesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListQuotaPreferencesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetQuotaPreferenceRequest. */
                interface IGetQuotaPreferenceRequest {

                    /** GetQuotaPreferenceRequest name */
                    name?: (string|null);
                }

                /** Represents a GetQuotaPreferenceRequest. */
                class GetQuotaPreferenceRequest implements IGetQuotaPreferenceRequest {

                    /**
                     * Constructs a new GetQuotaPreferenceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1.IGetQuotaPreferenceRequest);

                    /** GetQuotaPreferenceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetQuotaPreferenceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetQuotaPreferenceRequest instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1.IGetQuotaPreferenceRequest): google.api.cloudquotas.v1.GetQuotaPreferenceRequest;

                    /**
                     * Encodes the specified GetQuotaPreferenceRequest message. Does not implicitly {@link google.api.cloudquotas.v1.GetQuotaPreferenceRequest.verify|verify} messages.
                     * @param message GetQuotaPreferenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1.IGetQuotaPreferenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetQuotaPreferenceRequest message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1.GetQuotaPreferenceRequest.verify|verify} messages.
                     * @param message GetQuotaPreferenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1.IGetQuotaPreferenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetQuotaPreferenceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetQuotaPreferenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1.GetQuotaPreferenceRequest;

                    /**
                     * Decodes a GetQuotaPreferenceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetQuotaPreferenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1.GetQuotaPreferenceRequest;

                    /**
                     * Verifies a GetQuotaPreferenceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetQuotaPreferenceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetQuotaPreferenceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1.GetQuotaPreferenceRequest;

                    /**
                     * Creates a plain object from a GetQuotaPreferenceRequest message. Also converts values to other types if specified.
                     * @param message GetQuotaPreferenceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1.GetQuotaPreferenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetQuotaPreferenceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetQuotaPreferenceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateQuotaPreferenceRequest. */
                interface ICreateQuotaPreferenceRequest {

                    /** CreateQuotaPreferenceRequest parent */
                    parent?: (string|null);

                    /** CreateQuotaPreferenceRequest quotaPreferenceId */
                    quotaPreferenceId?: (string|null);

                    /** CreateQuotaPreferenceRequest quotaPreference */
                    quotaPreference?: (google.api.cloudquotas.v1.IQuotaPreference|null);

                    /** CreateQuotaPreferenceRequest ignoreSafetyChecks */
                    ignoreSafetyChecks?: (google.api.cloudquotas.v1.QuotaSafetyCheck[]|null);
                }

                /** Represents a CreateQuotaPreferenceRequest. */
                class CreateQuotaPreferenceRequest implements ICreateQuotaPreferenceRequest {

                    /**
                     * Constructs a new CreateQuotaPreferenceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1.ICreateQuotaPreferenceRequest);

                    /** CreateQuotaPreferenceRequest parent. */
                    public parent: string;

                    /** CreateQuotaPreferenceRequest quotaPreferenceId. */
                    public quotaPreferenceId: string;

                    /** CreateQuotaPreferenceRequest quotaPreference. */
                    public quotaPreference?: (google.api.cloudquotas.v1.IQuotaPreference|null);

                    /** CreateQuotaPreferenceRequest ignoreSafetyChecks. */
                    public ignoreSafetyChecks: google.api.cloudquotas.v1.QuotaSafetyCheck[];

                    /**
                     * Creates a new CreateQuotaPreferenceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateQuotaPreferenceRequest instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1.ICreateQuotaPreferenceRequest): google.api.cloudquotas.v1.CreateQuotaPreferenceRequest;

                    /**
                     * Encodes the specified CreateQuotaPreferenceRequest message. Does not implicitly {@link google.api.cloudquotas.v1.CreateQuotaPreferenceRequest.verify|verify} messages.
                     * @param message CreateQuotaPreferenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1.ICreateQuotaPreferenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateQuotaPreferenceRequest message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1.CreateQuotaPreferenceRequest.verify|verify} messages.
                     * @param message CreateQuotaPreferenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1.ICreateQuotaPreferenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateQuotaPreferenceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateQuotaPreferenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1.CreateQuotaPreferenceRequest;

                    /**
                     * Decodes a CreateQuotaPreferenceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateQuotaPreferenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1.CreateQuotaPreferenceRequest;

                    /**
                     * Verifies a CreateQuotaPreferenceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateQuotaPreferenceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateQuotaPreferenceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1.CreateQuotaPreferenceRequest;

                    /**
                     * Creates a plain object from a CreateQuotaPreferenceRequest message. Also converts values to other types if specified.
                     * @param message CreateQuotaPreferenceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1.CreateQuotaPreferenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateQuotaPreferenceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateQuotaPreferenceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateQuotaPreferenceRequest. */
                interface IUpdateQuotaPreferenceRequest {

                    /** UpdateQuotaPreferenceRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateQuotaPreferenceRequest quotaPreference */
                    quotaPreference?: (google.api.cloudquotas.v1.IQuotaPreference|null);

                    /** UpdateQuotaPreferenceRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** UpdateQuotaPreferenceRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** UpdateQuotaPreferenceRequest ignoreSafetyChecks */
                    ignoreSafetyChecks?: (google.api.cloudquotas.v1.QuotaSafetyCheck[]|null);
                }

                /** Represents an UpdateQuotaPreferenceRequest. */
                class UpdateQuotaPreferenceRequest implements IUpdateQuotaPreferenceRequest {

                    /**
                     * Constructs a new UpdateQuotaPreferenceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1.IUpdateQuotaPreferenceRequest);

                    /** UpdateQuotaPreferenceRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateQuotaPreferenceRequest quotaPreference. */
                    public quotaPreference?: (google.api.cloudquotas.v1.IQuotaPreference|null);

                    /** UpdateQuotaPreferenceRequest allowMissing. */
                    public allowMissing: boolean;

                    /** UpdateQuotaPreferenceRequest validateOnly. */
                    public validateOnly: boolean;

                    /** UpdateQuotaPreferenceRequest ignoreSafetyChecks. */
                    public ignoreSafetyChecks: google.api.cloudquotas.v1.QuotaSafetyCheck[];

                    /**
                     * Creates a new UpdateQuotaPreferenceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateQuotaPreferenceRequest instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1.IUpdateQuotaPreferenceRequest): google.api.cloudquotas.v1.UpdateQuotaPreferenceRequest;

                    /**
                     * Encodes the specified UpdateQuotaPreferenceRequest message. Does not implicitly {@link google.api.cloudquotas.v1.UpdateQuotaPreferenceRequest.verify|verify} messages.
                     * @param message UpdateQuotaPreferenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1.IUpdateQuotaPreferenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateQuotaPreferenceRequest message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1.UpdateQuotaPreferenceRequest.verify|verify} messages.
                     * @param message UpdateQuotaPreferenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1.IUpdateQuotaPreferenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateQuotaPreferenceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateQuotaPreferenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1.UpdateQuotaPreferenceRequest;

                    /**
                     * Decodes an UpdateQuotaPreferenceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateQuotaPreferenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1.UpdateQuotaPreferenceRequest;

                    /**
                     * Verifies an UpdateQuotaPreferenceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateQuotaPreferenceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateQuotaPreferenceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1.UpdateQuotaPreferenceRequest;

                    /**
                     * Creates a plain object from an UpdateQuotaPreferenceRequest message. Also converts values to other types if specified.
                     * @param message UpdateQuotaPreferenceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1.UpdateQuotaPreferenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateQuotaPreferenceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateQuotaPreferenceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** QuotaSafetyCheck enum. */
                enum QuotaSafetyCheck {
                    QUOTA_SAFETY_CHECK_UNSPECIFIED = 0,
                    QUOTA_DECREASE_BELOW_USAGE = 1,
                    QUOTA_DECREASE_PERCENTAGE_TOO_HIGH = 2
                }

                /** Properties of a QuotaInfo. */
                interface IQuotaInfo {

                    /** QuotaInfo name */
                    name?: (string|null);

                    /** QuotaInfo quotaId */
                    quotaId?: (string|null);

                    /** QuotaInfo metric */
                    metric?: (string|null);

                    /** QuotaInfo service */
                    service?: (string|null);

                    /** QuotaInfo isPrecise */
                    isPrecise?: (boolean|null);

                    /** QuotaInfo refreshInterval */
                    refreshInterval?: (string|null);

                    /** QuotaInfo containerType */
                    containerType?: (google.api.cloudquotas.v1.QuotaInfo.ContainerType|keyof typeof google.api.cloudquotas.v1.QuotaInfo.ContainerType|null);

                    /** QuotaInfo dimensions */
                    dimensions?: (string[]|null);

                    /** QuotaInfo metricDisplayName */
                    metricDisplayName?: (string|null);

                    /** QuotaInfo quotaDisplayName */
                    quotaDisplayName?: (string|null);

                    /** QuotaInfo metricUnit */
                    metricUnit?: (string|null);

                    /** QuotaInfo quotaIncreaseEligibility */
                    quotaIncreaseEligibility?: (google.api.cloudquotas.v1.IQuotaIncreaseEligibility|null);

                    /** QuotaInfo isFixed */
                    isFixed?: (boolean|null);

                    /** QuotaInfo dimensionsInfos */
                    dimensionsInfos?: (google.api.cloudquotas.v1.IDimensionsInfo[]|null);

                    /** QuotaInfo isConcurrent */
                    isConcurrent?: (boolean|null);

                    /** QuotaInfo serviceRequestQuotaUri */
                    serviceRequestQuotaUri?: (string|null);
                }

                /** Represents a QuotaInfo. */
                class QuotaInfo implements IQuotaInfo {

                    /**
                     * Constructs a new QuotaInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1.IQuotaInfo);

                    /** QuotaInfo name. */
                    public name: string;

                    /** QuotaInfo quotaId. */
                    public quotaId: string;

                    /** QuotaInfo metric. */
                    public metric: string;

                    /** QuotaInfo service. */
                    public service: string;

                    /** QuotaInfo isPrecise. */
                    public isPrecise: boolean;

                    /** QuotaInfo refreshInterval. */
                    public refreshInterval: string;

                    /** QuotaInfo containerType. */
                    public containerType: (google.api.cloudquotas.v1.QuotaInfo.ContainerType|keyof typeof google.api.cloudquotas.v1.QuotaInfo.ContainerType);

                    /** QuotaInfo dimensions. */
                    public dimensions: string[];

                    /** QuotaInfo metricDisplayName. */
                    public metricDisplayName: string;

                    /** QuotaInfo quotaDisplayName. */
                    public quotaDisplayName: string;

                    /** QuotaInfo metricUnit. */
                    public metricUnit: string;

                    /** QuotaInfo quotaIncreaseEligibility. */
                    public quotaIncreaseEligibility?: (google.api.cloudquotas.v1.IQuotaIncreaseEligibility|null);

                    /** QuotaInfo isFixed. */
                    public isFixed: boolean;

                    /** QuotaInfo dimensionsInfos. */
                    public dimensionsInfos: google.api.cloudquotas.v1.IDimensionsInfo[];

                    /** QuotaInfo isConcurrent. */
                    public isConcurrent: boolean;

                    /** QuotaInfo serviceRequestQuotaUri. */
                    public serviceRequestQuotaUri: string;

                    /**
                     * Creates a new QuotaInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QuotaInfo instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1.IQuotaInfo): google.api.cloudquotas.v1.QuotaInfo;

                    /**
                     * Encodes the specified QuotaInfo message. Does not implicitly {@link google.api.cloudquotas.v1.QuotaInfo.verify|verify} messages.
                     * @param message QuotaInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1.IQuotaInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QuotaInfo message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1.QuotaInfo.verify|verify} messages.
                     * @param message QuotaInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1.IQuotaInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QuotaInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QuotaInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1.QuotaInfo;

                    /**
                     * Decodes a QuotaInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QuotaInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1.QuotaInfo;

                    /**
                     * Verifies a QuotaInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QuotaInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QuotaInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1.QuotaInfo;

                    /**
                     * Creates a plain object from a QuotaInfo message. Also converts values to other types if specified.
                     * @param message QuotaInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1.QuotaInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QuotaInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QuotaInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace QuotaInfo {

                    /** ContainerType enum. */
                    enum ContainerType {
                        CONTAINER_TYPE_UNSPECIFIED = 0,
                        PROJECT = 1,
                        FOLDER = 2,
                        ORGANIZATION = 3
                    }
                }

                /** Properties of a QuotaIncreaseEligibility. */
                interface IQuotaIncreaseEligibility {

                    /** QuotaIncreaseEligibility isEligible */
                    isEligible?: (boolean|null);

                    /** QuotaIncreaseEligibility ineligibilityReason */
                    ineligibilityReason?: (google.api.cloudquotas.v1.QuotaIncreaseEligibility.IneligibilityReason|keyof typeof google.api.cloudquotas.v1.QuotaIncreaseEligibility.IneligibilityReason|null);
                }

                /** Represents a QuotaIncreaseEligibility. */
                class QuotaIncreaseEligibility implements IQuotaIncreaseEligibility {

                    /**
                     * Constructs a new QuotaIncreaseEligibility.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1.IQuotaIncreaseEligibility);

                    /** QuotaIncreaseEligibility isEligible. */
                    public isEligible: boolean;

                    /** QuotaIncreaseEligibility ineligibilityReason. */
                    public ineligibilityReason: (google.api.cloudquotas.v1.QuotaIncreaseEligibility.IneligibilityReason|keyof typeof google.api.cloudquotas.v1.QuotaIncreaseEligibility.IneligibilityReason);

                    /**
                     * Creates a new QuotaIncreaseEligibility instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QuotaIncreaseEligibility instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1.IQuotaIncreaseEligibility): google.api.cloudquotas.v1.QuotaIncreaseEligibility;

                    /**
                     * Encodes the specified QuotaIncreaseEligibility message. Does not implicitly {@link google.api.cloudquotas.v1.QuotaIncreaseEligibility.verify|verify} messages.
                     * @param message QuotaIncreaseEligibility message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1.IQuotaIncreaseEligibility, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QuotaIncreaseEligibility message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1.QuotaIncreaseEligibility.verify|verify} messages.
                     * @param message QuotaIncreaseEligibility message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1.IQuotaIncreaseEligibility, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QuotaIncreaseEligibility message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QuotaIncreaseEligibility
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1.QuotaIncreaseEligibility;

                    /**
                     * Decodes a QuotaIncreaseEligibility message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QuotaIncreaseEligibility
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1.QuotaIncreaseEligibility;

                    /**
                     * Verifies a QuotaIncreaseEligibility message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QuotaIncreaseEligibility message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QuotaIncreaseEligibility
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1.QuotaIncreaseEligibility;

                    /**
                     * Creates a plain object from a QuotaIncreaseEligibility message. Also converts values to other types if specified.
                     * @param message QuotaIncreaseEligibility
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1.QuotaIncreaseEligibility, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QuotaIncreaseEligibility to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QuotaIncreaseEligibility
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace QuotaIncreaseEligibility {

                    /** IneligibilityReason enum. */
                    enum IneligibilityReason {
                        INELIGIBILITY_REASON_UNSPECIFIED = 0,
                        NO_VALID_BILLING_ACCOUNT = 1,
                        NOT_SUPPORTED = 3,
                        NOT_ENOUGH_USAGE_HISTORY = 4,
                        OTHER = 2
                    }
                }

                /** Properties of a QuotaPreference. */
                interface IQuotaPreference {

                    /** QuotaPreference name */
                    name?: (string|null);

                    /** QuotaPreference dimensions */
                    dimensions?: ({ [k: string]: string }|null);

                    /** QuotaPreference quotaConfig */
                    quotaConfig?: (google.api.cloudquotas.v1.IQuotaConfig|null);

                    /** QuotaPreference etag */
                    etag?: (string|null);

                    /** QuotaPreference createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** QuotaPreference updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** QuotaPreference service */
                    service?: (string|null);

                    /** QuotaPreference quotaId */
                    quotaId?: (string|null);

                    /** QuotaPreference reconciling */
                    reconciling?: (boolean|null);

                    /** QuotaPreference justification */
                    justification?: (string|null);

                    /** QuotaPreference contactEmail */
                    contactEmail?: (string|null);
                }

                /** Represents a QuotaPreference. */
                class QuotaPreference implements IQuotaPreference {

                    /**
                     * Constructs a new QuotaPreference.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1.IQuotaPreference);

                    /** QuotaPreference name. */
                    public name: string;

                    /** QuotaPreference dimensions. */
                    public dimensions: { [k: string]: string };

                    /** QuotaPreference quotaConfig. */
                    public quotaConfig?: (google.api.cloudquotas.v1.IQuotaConfig|null);

                    /** QuotaPreference etag. */
                    public etag: string;

                    /** QuotaPreference createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** QuotaPreference updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** QuotaPreference service. */
                    public service: string;

                    /** QuotaPreference quotaId. */
                    public quotaId: string;

                    /** QuotaPreference reconciling. */
                    public reconciling: boolean;

                    /** QuotaPreference justification. */
                    public justification: string;

                    /** QuotaPreference contactEmail. */
                    public contactEmail: string;

                    /**
                     * Creates a new QuotaPreference instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QuotaPreference instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1.IQuotaPreference): google.api.cloudquotas.v1.QuotaPreference;

                    /**
                     * Encodes the specified QuotaPreference message. Does not implicitly {@link google.api.cloudquotas.v1.QuotaPreference.verify|verify} messages.
                     * @param message QuotaPreference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1.IQuotaPreference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QuotaPreference message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1.QuotaPreference.verify|verify} messages.
                     * @param message QuotaPreference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1.IQuotaPreference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QuotaPreference message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QuotaPreference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1.QuotaPreference;

                    /**
                     * Decodes a QuotaPreference message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QuotaPreference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1.QuotaPreference;

                    /**
                     * Verifies a QuotaPreference message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QuotaPreference message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QuotaPreference
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1.QuotaPreference;

                    /**
                     * Creates a plain object from a QuotaPreference message. Also converts values to other types if specified.
                     * @param message QuotaPreference
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1.QuotaPreference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QuotaPreference to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QuotaPreference
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QuotaConfig. */
                interface IQuotaConfig {

                    /** QuotaConfig preferredValue */
                    preferredValue?: (number|Long|string|null);

                    /** QuotaConfig stateDetail */
                    stateDetail?: (string|null);

                    /** QuotaConfig grantedValue */
                    grantedValue?: (google.protobuf.IInt64Value|null);

                    /** QuotaConfig traceId */
                    traceId?: (string|null);

                    /** QuotaConfig annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** QuotaConfig requestOrigin */
                    requestOrigin?: (google.api.cloudquotas.v1.QuotaConfig.Origin|keyof typeof google.api.cloudquotas.v1.QuotaConfig.Origin|null);
                }

                /** Represents a QuotaConfig. */
                class QuotaConfig implements IQuotaConfig {

                    /**
                     * Constructs a new QuotaConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1.IQuotaConfig);

                    /** QuotaConfig preferredValue. */
                    public preferredValue: (number|Long|string);

                    /** QuotaConfig stateDetail. */
                    public stateDetail: string;

                    /** QuotaConfig grantedValue. */
                    public grantedValue?: (google.protobuf.IInt64Value|null);

                    /** QuotaConfig traceId. */
                    public traceId: string;

                    /** QuotaConfig annotations. */
                    public annotations: { [k: string]: string };

                    /** QuotaConfig requestOrigin. */
                    public requestOrigin: (google.api.cloudquotas.v1.QuotaConfig.Origin|keyof typeof google.api.cloudquotas.v1.QuotaConfig.Origin);

                    /**
                     * Creates a new QuotaConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QuotaConfig instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1.IQuotaConfig): google.api.cloudquotas.v1.QuotaConfig;

                    /**
                     * Encodes the specified QuotaConfig message. Does not implicitly {@link google.api.cloudquotas.v1.QuotaConfig.verify|verify} messages.
                     * @param message QuotaConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1.IQuotaConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QuotaConfig message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1.QuotaConfig.verify|verify} messages.
                     * @param message QuotaConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1.IQuotaConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QuotaConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QuotaConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1.QuotaConfig;

                    /**
                     * Decodes a QuotaConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QuotaConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1.QuotaConfig;

                    /**
                     * Verifies a QuotaConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QuotaConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QuotaConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1.QuotaConfig;

                    /**
                     * Creates a plain object from a QuotaConfig message. Also converts values to other types if specified.
                     * @param message QuotaConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1.QuotaConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QuotaConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QuotaConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace QuotaConfig {

                    /** Origin enum. */
                    enum Origin {
                        ORIGIN_UNSPECIFIED = 0,
                        CLOUD_CONSOLE = 1,
                        AUTO_ADJUSTER = 2
                    }
                }

                /** Properties of a DimensionsInfo. */
                interface IDimensionsInfo {

                    /** DimensionsInfo dimensions */
                    dimensions?: ({ [k: string]: string }|null);

                    /** DimensionsInfo details */
                    details?: (google.api.cloudquotas.v1.IQuotaDetails|null);

                    /** DimensionsInfo applicableLocations */
                    applicableLocations?: (string[]|null);
                }

                /** Represents a DimensionsInfo. */
                class DimensionsInfo implements IDimensionsInfo {

                    /**
                     * Constructs a new DimensionsInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1.IDimensionsInfo);

                    /** DimensionsInfo dimensions. */
                    public dimensions: { [k: string]: string };

                    /** DimensionsInfo details. */
                    public details?: (google.api.cloudquotas.v1.IQuotaDetails|null);

                    /** DimensionsInfo applicableLocations. */
                    public applicableLocations: string[];

                    /**
                     * Creates a new DimensionsInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DimensionsInfo instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1.IDimensionsInfo): google.api.cloudquotas.v1.DimensionsInfo;

                    /**
                     * Encodes the specified DimensionsInfo message. Does not implicitly {@link google.api.cloudquotas.v1.DimensionsInfo.verify|verify} messages.
                     * @param message DimensionsInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1.IDimensionsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DimensionsInfo message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1.DimensionsInfo.verify|verify} messages.
                     * @param message DimensionsInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1.IDimensionsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DimensionsInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DimensionsInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1.DimensionsInfo;

                    /**
                     * Decodes a DimensionsInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DimensionsInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1.DimensionsInfo;

                    /**
                     * Verifies a DimensionsInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DimensionsInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DimensionsInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1.DimensionsInfo;

                    /**
                     * Creates a plain object from a DimensionsInfo message. Also converts values to other types if specified.
                     * @param message DimensionsInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1.DimensionsInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DimensionsInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DimensionsInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QuotaDetails. */
                interface IQuotaDetails {

                    /** QuotaDetails value */
                    value?: (number|Long|string|null);

                    /** QuotaDetails rolloutInfo */
                    rolloutInfo?: (google.api.cloudquotas.v1.IRolloutInfo|null);
                }

                /** Represents a QuotaDetails. */
                class QuotaDetails implements IQuotaDetails {

                    /**
                     * Constructs a new QuotaDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1.IQuotaDetails);

                    /** QuotaDetails value. */
                    public value: (number|Long|string);

                    /** QuotaDetails rolloutInfo. */
                    public rolloutInfo?: (google.api.cloudquotas.v1.IRolloutInfo|null);

                    /**
                     * Creates a new QuotaDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QuotaDetails instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1.IQuotaDetails): google.api.cloudquotas.v1.QuotaDetails;

                    /**
                     * Encodes the specified QuotaDetails message. Does not implicitly {@link google.api.cloudquotas.v1.QuotaDetails.verify|verify} messages.
                     * @param message QuotaDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1.IQuotaDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QuotaDetails message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1.QuotaDetails.verify|verify} messages.
                     * @param message QuotaDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1.IQuotaDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QuotaDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QuotaDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1.QuotaDetails;

                    /**
                     * Decodes a QuotaDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QuotaDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1.QuotaDetails;

                    /**
                     * Verifies a QuotaDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QuotaDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QuotaDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1.QuotaDetails;

                    /**
                     * Creates a plain object from a QuotaDetails message. Also converts values to other types if specified.
                     * @param message QuotaDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1.QuotaDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QuotaDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QuotaDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RolloutInfo. */
                interface IRolloutInfo {

                    /** RolloutInfo ongoingRollout */
                    ongoingRollout?: (boolean|null);
                }

                /** Represents a RolloutInfo. */
                class RolloutInfo implements IRolloutInfo {

                    /**
                     * Constructs a new RolloutInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1.IRolloutInfo);

                    /** RolloutInfo ongoingRollout. */
                    public ongoingRollout: boolean;

                    /**
                     * Creates a new RolloutInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RolloutInfo instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1.IRolloutInfo): google.api.cloudquotas.v1.RolloutInfo;

                    /**
                     * Encodes the specified RolloutInfo message. Does not implicitly {@link google.api.cloudquotas.v1.RolloutInfo.verify|verify} messages.
                     * @param message RolloutInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1.IRolloutInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RolloutInfo message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1.RolloutInfo.verify|verify} messages.
                     * @param message RolloutInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1.IRolloutInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RolloutInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RolloutInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1.RolloutInfo;

                    /**
                     * Decodes a RolloutInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RolloutInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1.RolloutInfo;

                    /**
                     * Verifies a RolloutInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RolloutInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RolloutInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1.RolloutInfo;

                    /**
                     * Creates a plain object from a RolloutInfo message. Also converts values to other types if specified.
                     * @param message RolloutInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1.RolloutInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RolloutInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RolloutInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Namespace v1beta. */
            namespace v1beta {

                /** Represents a CloudQuotas */
                class CloudQuotas extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CloudQuotas service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CloudQuotas service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CloudQuotas;

                    /**
                     * Calls ListQuotaInfos.
                     * @param request ListQuotaInfosRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListQuotaInfosResponse
                     */
                    public listQuotaInfos(request: google.api.cloudquotas.v1beta.IListQuotaInfosRequest, callback: google.api.cloudquotas.v1beta.CloudQuotas.ListQuotaInfosCallback): void;

                    /**
                     * Calls ListQuotaInfos.
                     * @param request ListQuotaInfosRequest message or plain object
                     * @returns Promise
                     */
                    public listQuotaInfos(request: google.api.cloudquotas.v1beta.IListQuotaInfosRequest): Promise<google.api.cloudquotas.v1beta.ListQuotaInfosResponse>;

                    /**
                     * Calls GetQuotaInfo.
                     * @param request GetQuotaInfoRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QuotaInfo
                     */
                    public getQuotaInfo(request: google.api.cloudquotas.v1beta.IGetQuotaInfoRequest, callback: google.api.cloudquotas.v1beta.CloudQuotas.GetQuotaInfoCallback): void;

                    /**
                     * Calls GetQuotaInfo.
                     * @param request GetQuotaInfoRequest message or plain object
                     * @returns Promise
                     */
                    public getQuotaInfo(request: google.api.cloudquotas.v1beta.IGetQuotaInfoRequest): Promise<google.api.cloudquotas.v1beta.QuotaInfo>;

                    /**
                     * Calls ListQuotaPreferences.
                     * @param request ListQuotaPreferencesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListQuotaPreferencesResponse
                     */
                    public listQuotaPreferences(request: google.api.cloudquotas.v1beta.IListQuotaPreferencesRequest, callback: google.api.cloudquotas.v1beta.CloudQuotas.ListQuotaPreferencesCallback): void;

                    /**
                     * Calls ListQuotaPreferences.
                     * @param request ListQuotaPreferencesRequest message or plain object
                     * @returns Promise
                     */
                    public listQuotaPreferences(request: google.api.cloudquotas.v1beta.IListQuotaPreferencesRequest): Promise<google.api.cloudquotas.v1beta.ListQuotaPreferencesResponse>;

                    /**
                     * Calls GetQuotaPreference.
                     * @param request GetQuotaPreferenceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QuotaPreference
                     */
                    public getQuotaPreference(request: google.api.cloudquotas.v1beta.IGetQuotaPreferenceRequest, callback: google.api.cloudquotas.v1beta.CloudQuotas.GetQuotaPreferenceCallback): void;

                    /**
                     * Calls GetQuotaPreference.
                     * @param request GetQuotaPreferenceRequest message or plain object
                     * @returns Promise
                     */
                    public getQuotaPreference(request: google.api.cloudquotas.v1beta.IGetQuotaPreferenceRequest): Promise<google.api.cloudquotas.v1beta.QuotaPreference>;

                    /**
                     * Calls CreateQuotaPreference.
                     * @param request CreateQuotaPreferenceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QuotaPreference
                     */
                    public createQuotaPreference(request: google.api.cloudquotas.v1beta.ICreateQuotaPreferenceRequest, callback: google.api.cloudquotas.v1beta.CloudQuotas.CreateQuotaPreferenceCallback): void;

                    /**
                     * Calls CreateQuotaPreference.
                     * @param request CreateQuotaPreferenceRequest message or plain object
                     * @returns Promise
                     */
                    public createQuotaPreference(request: google.api.cloudquotas.v1beta.ICreateQuotaPreferenceRequest): Promise<google.api.cloudquotas.v1beta.QuotaPreference>;

                    /**
                     * Calls UpdateQuotaPreference.
                     * @param request UpdateQuotaPreferenceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QuotaPreference
                     */
                    public updateQuotaPreference(request: google.api.cloudquotas.v1beta.IUpdateQuotaPreferenceRequest, callback: google.api.cloudquotas.v1beta.CloudQuotas.UpdateQuotaPreferenceCallback): void;

                    /**
                     * Calls UpdateQuotaPreference.
                     * @param request UpdateQuotaPreferenceRequest message or plain object
                     * @returns Promise
                     */
                    public updateQuotaPreference(request: google.api.cloudquotas.v1beta.IUpdateQuotaPreferenceRequest): Promise<google.api.cloudquotas.v1beta.QuotaPreference>;
                }

                namespace CloudQuotas {

                    /**
                     * Callback as used by {@link google.api.cloudquotas.v1beta.CloudQuotas|listQuotaInfos}.
                     * @param error Error, if any
                     * @param [response] ListQuotaInfosResponse
                     */
                    type ListQuotaInfosCallback = (error: (Error|null), response?: google.api.cloudquotas.v1beta.ListQuotaInfosResponse) => void;

                    /**
                     * Callback as used by {@link google.api.cloudquotas.v1beta.CloudQuotas|getQuotaInfo}.
                     * @param error Error, if any
                     * @param [response] QuotaInfo
                     */
                    type GetQuotaInfoCallback = (error: (Error|null), response?: google.api.cloudquotas.v1beta.QuotaInfo) => void;

                    /**
                     * Callback as used by {@link google.api.cloudquotas.v1beta.CloudQuotas|listQuotaPreferences}.
                     * @param error Error, if any
                     * @param [response] ListQuotaPreferencesResponse
                     */
                    type ListQuotaPreferencesCallback = (error: (Error|null), response?: google.api.cloudquotas.v1beta.ListQuotaPreferencesResponse) => void;

                    /**
                     * Callback as used by {@link google.api.cloudquotas.v1beta.CloudQuotas|getQuotaPreference}.
                     * @param error Error, if any
                     * @param [response] QuotaPreference
                     */
                    type GetQuotaPreferenceCallback = (error: (Error|null), response?: google.api.cloudquotas.v1beta.QuotaPreference) => void;

                    /**
                     * Callback as used by {@link google.api.cloudquotas.v1beta.CloudQuotas|createQuotaPreference}.
                     * @param error Error, if any
                     * @param [response] QuotaPreference
                     */
                    type CreateQuotaPreferenceCallback = (error: (Error|null), response?: google.api.cloudquotas.v1beta.QuotaPreference) => void;

                    /**
                     * Callback as used by {@link google.api.cloudquotas.v1beta.CloudQuotas|updateQuotaPreference}.
                     * @param error Error, if any
                     * @param [response] QuotaPreference
                     */
                    type UpdateQuotaPreferenceCallback = (error: (Error|null), response?: google.api.cloudquotas.v1beta.QuotaPreference) => void;
                }

                /** Properties of a ListQuotaInfosRequest. */
                interface IListQuotaInfosRequest {

                    /** ListQuotaInfosRequest parent */
                    parent?: (string|null);

                    /** ListQuotaInfosRequest pageSize */
                    pageSize?: (number|null);

                    /** ListQuotaInfosRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListQuotaInfosRequest. */
                class ListQuotaInfosRequest implements IListQuotaInfosRequest {

                    /**
                     * Constructs a new ListQuotaInfosRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1beta.IListQuotaInfosRequest);

                    /** ListQuotaInfosRequest parent. */
                    public parent: string;

                    /** ListQuotaInfosRequest pageSize. */
                    public pageSize: number;

                    /** ListQuotaInfosRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListQuotaInfosRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListQuotaInfosRequest instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1beta.IListQuotaInfosRequest): google.api.cloudquotas.v1beta.ListQuotaInfosRequest;

                    /**
                     * Encodes the specified ListQuotaInfosRequest message. Does not implicitly {@link google.api.cloudquotas.v1beta.ListQuotaInfosRequest.verify|verify} messages.
                     * @param message ListQuotaInfosRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1beta.IListQuotaInfosRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListQuotaInfosRequest message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1beta.ListQuotaInfosRequest.verify|verify} messages.
                     * @param message ListQuotaInfosRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1beta.IListQuotaInfosRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListQuotaInfosRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListQuotaInfosRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1beta.ListQuotaInfosRequest;

                    /**
                     * Decodes a ListQuotaInfosRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListQuotaInfosRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1beta.ListQuotaInfosRequest;

                    /**
                     * Verifies a ListQuotaInfosRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListQuotaInfosRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListQuotaInfosRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1beta.ListQuotaInfosRequest;

                    /**
                     * Creates a plain object from a ListQuotaInfosRequest message. Also converts values to other types if specified.
                     * @param message ListQuotaInfosRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1beta.ListQuotaInfosRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListQuotaInfosRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListQuotaInfosRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListQuotaInfosResponse. */
                interface IListQuotaInfosResponse {

                    /** ListQuotaInfosResponse quotaInfos */
                    quotaInfos?: (google.api.cloudquotas.v1beta.IQuotaInfo[]|null);

                    /** ListQuotaInfosResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListQuotaInfosResponse. */
                class ListQuotaInfosResponse implements IListQuotaInfosResponse {

                    /**
                     * Constructs a new ListQuotaInfosResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1beta.IListQuotaInfosResponse);

                    /** ListQuotaInfosResponse quotaInfos. */
                    public quotaInfos: google.api.cloudquotas.v1beta.IQuotaInfo[];

                    /** ListQuotaInfosResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListQuotaInfosResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListQuotaInfosResponse instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1beta.IListQuotaInfosResponse): google.api.cloudquotas.v1beta.ListQuotaInfosResponse;

                    /**
                     * Encodes the specified ListQuotaInfosResponse message. Does not implicitly {@link google.api.cloudquotas.v1beta.ListQuotaInfosResponse.verify|verify} messages.
                     * @param message ListQuotaInfosResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1beta.IListQuotaInfosResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListQuotaInfosResponse message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1beta.ListQuotaInfosResponse.verify|verify} messages.
                     * @param message ListQuotaInfosResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1beta.IListQuotaInfosResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListQuotaInfosResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListQuotaInfosResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1beta.ListQuotaInfosResponse;

                    /**
                     * Decodes a ListQuotaInfosResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListQuotaInfosResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1beta.ListQuotaInfosResponse;

                    /**
                     * Verifies a ListQuotaInfosResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListQuotaInfosResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListQuotaInfosResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1beta.ListQuotaInfosResponse;

                    /**
                     * Creates a plain object from a ListQuotaInfosResponse message. Also converts values to other types if specified.
                     * @param message ListQuotaInfosResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1beta.ListQuotaInfosResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListQuotaInfosResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListQuotaInfosResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetQuotaInfoRequest. */
                interface IGetQuotaInfoRequest {

                    /** GetQuotaInfoRequest name */
                    name?: (string|null);
                }

                /** Represents a GetQuotaInfoRequest. */
                class GetQuotaInfoRequest implements IGetQuotaInfoRequest {

                    /**
                     * Constructs a new GetQuotaInfoRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1beta.IGetQuotaInfoRequest);

                    /** GetQuotaInfoRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetQuotaInfoRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetQuotaInfoRequest instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1beta.IGetQuotaInfoRequest): google.api.cloudquotas.v1beta.GetQuotaInfoRequest;

                    /**
                     * Encodes the specified GetQuotaInfoRequest message. Does not implicitly {@link google.api.cloudquotas.v1beta.GetQuotaInfoRequest.verify|verify} messages.
                     * @param message GetQuotaInfoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1beta.IGetQuotaInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetQuotaInfoRequest message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1beta.GetQuotaInfoRequest.verify|verify} messages.
                     * @param message GetQuotaInfoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1beta.IGetQuotaInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetQuotaInfoRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetQuotaInfoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1beta.GetQuotaInfoRequest;

                    /**
                     * Decodes a GetQuotaInfoRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetQuotaInfoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1beta.GetQuotaInfoRequest;

                    /**
                     * Verifies a GetQuotaInfoRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetQuotaInfoRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetQuotaInfoRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1beta.GetQuotaInfoRequest;

                    /**
                     * Creates a plain object from a GetQuotaInfoRequest message. Also converts values to other types if specified.
                     * @param message GetQuotaInfoRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1beta.GetQuotaInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetQuotaInfoRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetQuotaInfoRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListQuotaPreferencesRequest. */
                interface IListQuotaPreferencesRequest {

                    /** ListQuotaPreferencesRequest parent */
                    parent?: (string|null);

                    /** ListQuotaPreferencesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListQuotaPreferencesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListQuotaPreferencesRequest filter */
                    filter?: (string|null);

                    /** ListQuotaPreferencesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListQuotaPreferencesRequest. */
                class ListQuotaPreferencesRequest implements IListQuotaPreferencesRequest {

                    /**
                     * Constructs a new ListQuotaPreferencesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1beta.IListQuotaPreferencesRequest);

                    /** ListQuotaPreferencesRequest parent. */
                    public parent: string;

                    /** ListQuotaPreferencesRequest pageSize. */
                    public pageSize: number;

                    /** ListQuotaPreferencesRequest pageToken. */
                    public pageToken: string;

                    /** ListQuotaPreferencesRequest filter. */
                    public filter: string;

                    /** ListQuotaPreferencesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListQuotaPreferencesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListQuotaPreferencesRequest instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1beta.IListQuotaPreferencesRequest): google.api.cloudquotas.v1beta.ListQuotaPreferencesRequest;

                    /**
                     * Encodes the specified ListQuotaPreferencesRequest message. Does not implicitly {@link google.api.cloudquotas.v1beta.ListQuotaPreferencesRequest.verify|verify} messages.
                     * @param message ListQuotaPreferencesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1beta.IListQuotaPreferencesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListQuotaPreferencesRequest message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1beta.ListQuotaPreferencesRequest.verify|verify} messages.
                     * @param message ListQuotaPreferencesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1beta.IListQuotaPreferencesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListQuotaPreferencesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListQuotaPreferencesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1beta.ListQuotaPreferencesRequest;

                    /**
                     * Decodes a ListQuotaPreferencesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListQuotaPreferencesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1beta.ListQuotaPreferencesRequest;

                    /**
                     * Verifies a ListQuotaPreferencesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListQuotaPreferencesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListQuotaPreferencesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1beta.ListQuotaPreferencesRequest;

                    /**
                     * Creates a plain object from a ListQuotaPreferencesRequest message. Also converts values to other types if specified.
                     * @param message ListQuotaPreferencesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1beta.ListQuotaPreferencesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListQuotaPreferencesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListQuotaPreferencesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListQuotaPreferencesResponse. */
                interface IListQuotaPreferencesResponse {

                    /** ListQuotaPreferencesResponse quotaPreferences */
                    quotaPreferences?: (google.api.cloudquotas.v1beta.IQuotaPreference[]|null);

                    /** ListQuotaPreferencesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListQuotaPreferencesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListQuotaPreferencesResponse. */
                class ListQuotaPreferencesResponse implements IListQuotaPreferencesResponse {

                    /**
                     * Constructs a new ListQuotaPreferencesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1beta.IListQuotaPreferencesResponse);

                    /** ListQuotaPreferencesResponse quotaPreferences. */
                    public quotaPreferences: google.api.cloudquotas.v1beta.IQuotaPreference[];

                    /** ListQuotaPreferencesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListQuotaPreferencesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListQuotaPreferencesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListQuotaPreferencesResponse instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1beta.IListQuotaPreferencesResponse): google.api.cloudquotas.v1beta.ListQuotaPreferencesResponse;

                    /**
                     * Encodes the specified ListQuotaPreferencesResponse message. Does not implicitly {@link google.api.cloudquotas.v1beta.ListQuotaPreferencesResponse.verify|verify} messages.
                     * @param message ListQuotaPreferencesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1beta.IListQuotaPreferencesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListQuotaPreferencesResponse message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1beta.ListQuotaPreferencesResponse.verify|verify} messages.
                     * @param message ListQuotaPreferencesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1beta.IListQuotaPreferencesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListQuotaPreferencesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListQuotaPreferencesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1beta.ListQuotaPreferencesResponse;

                    /**
                     * Decodes a ListQuotaPreferencesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListQuotaPreferencesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1beta.ListQuotaPreferencesResponse;

                    /**
                     * Verifies a ListQuotaPreferencesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListQuotaPreferencesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListQuotaPreferencesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1beta.ListQuotaPreferencesResponse;

                    /**
                     * Creates a plain object from a ListQuotaPreferencesResponse message. Also converts values to other types if specified.
                     * @param message ListQuotaPreferencesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1beta.ListQuotaPreferencesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListQuotaPreferencesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListQuotaPreferencesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetQuotaPreferenceRequest. */
                interface IGetQuotaPreferenceRequest {

                    /** GetQuotaPreferenceRequest name */
                    name?: (string|null);
                }

                /** Represents a GetQuotaPreferenceRequest. */
                class GetQuotaPreferenceRequest implements IGetQuotaPreferenceRequest {

                    /**
                     * Constructs a new GetQuotaPreferenceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1beta.IGetQuotaPreferenceRequest);

                    /** GetQuotaPreferenceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetQuotaPreferenceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetQuotaPreferenceRequest instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1beta.IGetQuotaPreferenceRequest): google.api.cloudquotas.v1beta.GetQuotaPreferenceRequest;

                    /**
                     * Encodes the specified GetQuotaPreferenceRequest message. Does not implicitly {@link google.api.cloudquotas.v1beta.GetQuotaPreferenceRequest.verify|verify} messages.
                     * @param message GetQuotaPreferenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1beta.IGetQuotaPreferenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetQuotaPreferenceRequest message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1beta.GetQuotaPreferenceRequest.verify|verify} messages.
                     * @param message GetQuotaPreferenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1beta.IGetQuotaPreferenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetQuotaPreferenceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetQuotaPreferenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1beta.GetQuotaPreferenceRequest;

                    /**
                     * Decodes a GetQuotaPreferenceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetQuotaPreferenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1beta.GetQuotaPreferenceRequest;

                    /**
                     * Verifies a GetQuotaPreferenceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetQuotaPreferenceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetQuotaPreferenceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1beta.GetQuotaPreferenceRequest;

                    /**
                     * Creates a plain object from a GetQuotaPreferenceRequest message. Also converts values to other types if specified.
                     * @param message GetQuotaPreferenceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1beta.GetQuotaPreferenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetQuotaPreferenceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetQuotaPreferenceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateQuotaPreferenceRequest. */
                interface ICreateQuotaPreferenceRequest {

                    /** CreateQuotaPreferenceRequest parent */
                    parent?: (string|null);

                    /** CreateQuotaPreferenceRequest quotaPreferenceId */
                    quotaPreferenceId?: (string|null);

                    /** CreateQuotaPreferenceRequest quotaPreference */
                    quotaPreference?: (google.api.cloudquotas.v1beta.IQuotaPreference|null);

                    /** CreateQuotaPreferenceRequest ignoreSafetyChecks */
                    ignoreSafetyChecks?: (google.api.cloudquotas.v1beta.QuotaSafetyCheck[]|null);
                }

                /** Represents a CreateQuotaPreferenceRequest. */
                class CreateQuotaPreferenceRequest implements ICreateQuotaPreferenceRequest {

                    /**
                     * Constructs a new CreateQuotaPreferenceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1beta.ICreateQuotaPreferenceRequest);

                    /** CreateQuotaPreferenceRequest parent. */
                    public parent: string;

                    /** CreateQuotaPreferenceRequest quotaPreferenceId. */
                    public quotaPreferenceId: string;

                    /** CreateQuotaPreferenceRequest quotaPreference. */
                    public quotaPreference?: (google.api.cloudquotas.v1beta.IQuotaPreference|null);

                    /** CreateQuotaPreferenceRequest ignoreSafetyChecks. */
                    public ignoreSafetyChecks: google.api.cloudquotas.v1beta.QuotaSafetyCheck[];

                    /**
                     * Creates a new CreateQuotaPreferenceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateQuotaPreferenceRequest instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1beta.ICreateQuotaPreferenceRequest): google.api.cloudquotas.v1beta.CreateQuotaPreferenceRequest;

                    /**
                     * Encodes the specified CreateQuotaPreferenceRequest message. Does not implicitly {@link google.api.cloudquotas.v1beta.CreateQuotaPreferenceRequest.verify|verify} messages.
                     * @param message CreateQuotaPreferenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1beta.ICreateQuotaPreferenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateQuotaPreferenceRequest message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1beta.CreateQuotaPreferenceRequest.verify|verify} messages.
                     * @param message CreateQuotaPreferenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1beta.ICreateQuotaPreferenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateQuotaPreferenceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateQuotaPreferenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1beta.CreateQuotaPreferenceRequest;

                    /**
                     * Decodes a CreateQuotaPreferenceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateQuotaPreferenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1beta.CreateQuotaPreferenceRequest;

                    /**
                     * Verifies a CreateQuotaPreferenceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateQuotaPreferenceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateQuotaPreferenceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1beta.CreateQuotaPreferenceRequest;

                    /**
                     * Creates a plain object from a CreateQuotaPreferenceRequest message. Also converts values to other types if specified.
                     * @param message CreateQuotaPreferenceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1beta.CreateQuotaPreferenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateQuotaPreferenceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateQuotaPreferenceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateQuotaPreferenceRequest. */
                interface IUpdateQuotaPreferenceRequest {

                    /** UpdateQuotaPreferenceRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateQuotaPreferenceRequest quotaPreference */
                    quotaPreference?: (google.api.cloudquotas.v1beta.IQuotaPreference|null);

                    /** UpdateQuotaPreferenceRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** UpdateQuotaPreferenceRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** UpdateQuotaPreferenceRequest ignoreSafetyChecks */
                    ignoreSafetyChecks?: (google.api.cloudquotas.v1beta.QuotaSafetyCheck[]|null);
                }

                /** Represents an UpdateQuotaPreferenceRequest. */
                class UpdateQuotaPreferenceRequest implements IUpdateQuotaPreferenceRequest {

                    /**
                     * Constructs a new UpdateQuotaPreferenceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1beta.IUpdateQuotaPreferenceRequest);

                    /** UpdateQuotaPreferenceRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateQuotaPreferenceRequest quotaPreference. */
                    public quotaPreference?: (google.api.cloudquotas.v1beta.IQuotaPreference|null);

                    /** UpdateQuotaPreferenceRequest allowMissing. */
                    public allowMissing: boolean;

                    /** UpdateQuotaPreferenceRequest validateOnly. */
                    public validateOnly: boolean;

                    /** UpdateQuotaPreferenceRequest ignoreSafetyChecks. */
                    public ignoreSafetyChecks: google.api.cloudquotas.v1beta.QuotaSafetyCheck[];

                    /**
                     * Creates a new UpdateQuotaPreferenceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateQuotaPreferenceRequest instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1beta.IUpdateQuotaPreferenceRequest): google.api.cloudquotas.v1beta.UpdateQuotaPreferenceRequest;

                    /**
                     * Encodes the specified UpdateQuotaPreferenceRequest message. Does not implicitly {@link google.api.cloudquotas.v1beta.UpdateQuotaPreferenceRequest.verify|verify} messages.
                     * @param message UpdateQuotaPreferenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1beta.IUpdateQuotaPreferenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateQuotaPreferenceRequest message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1beta.UpdateQuotaPreferenceRequest.verify|verify} messages.
                     * @param message UpdateQuotaPreferenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1beta.IUpdateQuotaPreferenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateQuotaPreferenceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateQuotaPreferenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1beta.UpdateQuotaPreferenceRequest;

                    /**
                     * Decodes an UpdateQuotaPreferenceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateQuotaPreferenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1beta.UpdateQuotaPreferenceRequest;

                    /**
                     * Verifies an UpdateQuotaPreferenceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateQuotaPreferenceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateQuotaPreferenceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1beta.UpdateQuotaPreferenceRequest;

                    /**
                     * Creates a plain object from an UpdateQuotaPreferenceRequest message. Also converts values to other types if specified.
                     * @param message UpdateQuotaPreferenceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1beta.UpdateQuotaPreferenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateQuotaPreferenceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateQuotaPreferenceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** QuotaSafetyCheck enum. */
                enum QuotaSafetyCheck {
                    QUOTA_SAFETY_CHECK_UNSPECIFIED = 0,
                    QUOTA_DECREASE_BELOW_USAGE = 1,
                    QUOTA_DECREASE_PERCENTAGE_TOO_HIGH = 2
                }

                /** Properties of a QuotaInfo. */
                interface IQuotaInfo {

                    /** QuotaInfo name */
                    name?: (string|null);

                    /** QuotaInfo quotaId */
                    quotaId?: (string|null);

                    /** QuotaInfo metric */
                    metric?: (string|null);

                    /** QuotaInfo service */
                    service?: (string|null);

                    /** QuotaInfo isPrecise */
                    isPrecise?: (boolean|null);

                    /** QuotaInfo refreshInterval */
                    refreshInterval?: (string|null);

                    /** QuotaInfo containerType */
                    containerType?: (google.api.cloudquotas.v1beta.QuotaInfo.ContainerType|keyof typeof google.api.cloudquotas.v1beta.QuotaInfo.ContainerType|null);

                    /** QuotaInfo dimensions */
                    dimensions?: (string[]|null);

                    /** QuotaInfo metricDisplayName */
                    metricDisplayName?: (string|null);

                    /** QuotaInfo quotaDisplayName */
                    quotaDisplayName?: (string|null);

                    /** QuotaInfo metricUnit */
                    metricUnit?: (string|null);

                    /** QuotaInfo quotaIncreaseEligibility */
                    quotaIncreaseEligibility?: (google.api.cloudquotas.v1beta.IQuotaIncreaseEligibility|null);

                    /** QuotaInfo isFixed */
                    isFixed?: (boolean|null);

                    /** QuotaInfo dimensionsInfos */
                    dimensionsInfos?: (google.api.cloudquotas.v1beta.IDimensionsInfo[]|null);

                    /** QuotaInfo isConcurrent */
                    isConcurrent?: (boolean|null);

                    /** QuotaInfo serviceRequestQuotaUri */
                    serviceRequestQuotaUri?: (string|null);
                }

                /** Represents a QuotaInfo. */
                class QuotaInfo implements IQuotaInfo {

                    /**
                     * Constructs a new QuotaInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1beta.IQuotaInfo);

                    /** QuotaInfo name. */
                    public name: string;

                    /** QuotaInfo quotaId. */
                    public quotaId: string;

                    /** QuotaInfo metric. */
                    public metric: string;

                    /** QuotaInfo service. */
                    public service: string;

                    /** QuotaInfo isPrecise. */
                    public isPrecise: boolean;

                    /** QuotaInfo refreshInterval. */
                    public refreshInterval: string;

                    /** QuotaInfo containerType. */
                    public containerType: (google.api.cloudquotas.v1beta.QuotaInfo.ContainerType|keyof typeof google.api.cloudquotas.v1beta.QuotaInfo.ContainerType);

                    /** QuotaInfo dimensions. */
                    public dimensions: string[];

                    /** QuotaInfo metricDisplayName. */
                    public metricDisplayName: string;

                    /** QuotaInfo quotaDisplayName. */
                    public quotaDisplayName: string;

                    /** QuotaInfo metricUnit. */
                    public metricUnit: string;

                    /** QuotaInfo quotaIncreaseEligibility. */
                    public quotaIncreaseEligibility?: (google.api.cloudquotas.v1beta.IQuotaIncreaseEligibility|null);

                    /** QuotaInfo isFixed. */
                    public isFixed: boolean;

                    /** QuotaInfo dimensionsInfos. */
                    public dimensionsInfos: google.api.cloudquotas.v1beta.IDimensionsInfo[];

                    /** QuotaInfo isConcurrent. */
                    public isConcurrent: boolean;

                    /** QuotaInfo serviceRequestQuotaUri. */
                    public serviceRequestQuotaUri: string;

                    /**
                     * Creates a new QuotaInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QuotaInfo instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1beta.IQuotaInfo): google.api.cloudquotas.v1beta.QuotaInfo;

                    /**
                     * Encodes the specified QuotaInfo message. Does not implicitly {@link google.api.cloudquotas.v1beta.QuotaInfo.verify|verify} messages.
                     * @param message QuotaInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1beta.IQuotaInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QuotaInfo message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1beta.QuotaInfo.verify|verify} messages.
                     * @param message QuotaInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1beta.IQuotaInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QuotaInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QuotaInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1beta.QuotaInfo;

                    /**
                     * Decodes a QuotaInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QuotaInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1beta.QuotaInfo;

                    /**
                     * Verifies a QuotaInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QuotaInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QuotaInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1beta.QuotaInfo;

                    /**
                     * Creates a plain object from a QuotaInfo message. Also converts values to other types if specified.
                     * @param message QuotaInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1beta.QuotaInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QuotaInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QuotaInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace QuotaInfo {

                    /** ContainerType enum. */
                    enum ContainerType {
                        CONTAINER_TYPE_UNSPECIFIED = 0,
                        PROJECT = 1,
                        FOLDER = 2,
                        ORGANIZATION = 3
                    }
                }

                /** Properties of a QuotaIncreaseEligibility. */
                interface IQuotaIncreaseEligibility {

                    /** QuotaIncreaseEligibility isEligible */
                    isEligible?: (boolean|null);

                    /** QuotaIncreaseEligibility ineligibilityReason */
                    ineligibilityReason?: (google.api.cloudquotas.v1beta.QuotaIncreaseEligibility.IneligibilityReason|keyof typeof google.api.cloudquotas.v1beta.QuotaIncreaseEligibility.IneligibilityReason|null);
                }

                /** Represents a QuotaIncreaseEligibility. */
                class QuotaIncreaseEligibility implements IQuotaIncreaseEligibility {

                    /**
                     * Constructs a new QuotaIncreaseEligibility.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1beta.IQuotaIncreaseEligibility);

                    /** QuotaIncreaseEligibility isEligible. */
                    public isEligible: boolean;

                    /** QuotaIncreaseEligibility ineligibilityReason. */
                    public ineligibilityReason: (google.api.cloudquotas.v1beta.QuotaIncreaseEligibility.IneligibilityReason|keyof typeof google.api.cloudquotas.v1beta.QuotaIncreaseEligibility.IneligibilityReason);

                    /**
                     * Creates a new QuotaIncreaseEligibility instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QuotaIncreaseEligibility instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1beta.IQuotaIncreaseEligibility): google.api.cloudquotas.v1beta.QuotaIncreaseEligibility;

                    /**
                     * Encodes the specified QuotaIncreaseEligibility message. Does not implicitly {@link google.api.cloudquotas.v1beta.QuotaIncreaseEligibility.verify|verify} messages.
                     * @param message QuotaIncreaseEligibility message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1beta.IQuotaIncreaseEligibility, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QuotaIncreaseEligibility message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1beta.QuotaIncreaseEligibility.verify|verify} messages.
                     * @param message QuotaIncreaseEligibility message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1beta.IQuotaIncreaseEligibility, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QuotaIncreaseEligibility message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QuotaIncreaseEligibility
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1beta.QuotaIncreaseEligibility;

                    /**
                     * Decodes a QuotaIncreaseEligibility message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QuotaIncreaseEligibility
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1beta.QuotaIncreaseEligibility;

                    /**
                     * Verifies a QuotaIncreaseEligibility message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QuotaIncreaseEligibility message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QuotaIncreaseEligibility
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1beta.QuotaIncreaseEligibility;

                    /**
                     * Creates a plain object from a QuotaIncreaseEligibility message. Also converts values to other types if specified.
                     * @param message QuotaIncreaseEligibility
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1beta.QuotaIncreaseEligibility, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QuotaIncreaseEligibility to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QuotaIncreaseEligibility
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace QuotaIncreaseEligibility {

                    /** IneligibilityReason enum. */
                    enum IneligibilityReason {
                        INELIGIBILITY_REASON_UNSPECIFIED = 0,
                        NO_VALID_BILLING_ACCOUNT = 1,
                        NOT_SUPPORTED = 3,
                        NOT_ENOUGH_USAGE_HISTORY = 4,
                        OTHER = 2
                    }
                }

                /** Properties of a QuotaPreference. */
                interface IQuotaPreference {

                    /** QuotaPreference name */
                    name?: (string|null);

                    /** QuotaPreference dimensions */
                    dimensions?: ({ [k: string]: string }|null);

                    /** QuotaPreference quotaConfig */
                    quotaConfig?: (google.api.cloudquotas.v1beta.IQuotaConfig|null);

                    /** QuotaPreference etag */
                    etag?: (string|null);

                    /** QuotaPreference createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** QuotaPreference updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** QuotaPreference service */
                    service?: (string|null);

                    /** QuotaPreference quotaId */
                    quotaId?: (string|null);

                    /** QuotaPreference reconciling */
                    reconciling?: (boolean|null);

                    /** QuotaPreference justification */
                    justification?: (string|null);

                    /** QuotaPreference contactEmail */
                    contactEmail?: (string|null);
                }

                /** Represents a QuotaPreference. */
                class QuotaPreference implements IQuotaPreference {

                    /**
                     * Constructs a new QuotaPreference.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1beta.IQuotaPreference);

                    /** QuotaPreference name. */
                    public name: string;

                    /** QuotaPreference dimensions. */
                    public dimensions: { [k: string]: string };

                    /** QuotaPreference quotaConfig. */
                    public quotaConfig?: (google.api.cloudquotas.v1beta.IQuotaConfig|null);

                    /** QuotaPreference etag. */
                    public etag: string;

                    /** QuotaPreference createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** QuotaPreference updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** QuotaPreference service. */
                    public service: string;

                    /** QuotaPreference quotaId. */
                    public quotaId: string;

                    /** QuotaPreference reconciling. */
                    public reconciling: boolean;

                    /** QuotaPreference justification. */
                    public justification: string;

                    /** QuotaPreference contactEmail. */
                    public contactEmail: string;

                    /**
                     * Creates a new QuotaPreference instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QuotaPreference instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1beta.IQuotaPreference): google.api.cloudquotas.v1beta.QuotaPreference;

                    /**
                     * Encodes the specified QuotaPreference message. Does not implicitly {@link google.api.cloudquotas.v1beta.QuotaPreference.verify|verify} messages.
                     * @param message QuotaPreference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1beta.IQuotaPreference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QuotaPreference message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1beta.QuotaPreference.verify|verify} messages.
                     * @param message QuotaPreference message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1beta.IQuotaPreference, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QuotaPreference message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QuotaPreference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1beta.QuotaPreference;

                    /**
                     * Decodes a QuotaPreference message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QuotaPreference
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1beta.QuotaPreference;

                    /**
                     * Verifies a QuotaPreference message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QuotaPreference message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QuotaPreference
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1beta.QuotaPreference;

                    /**
                     * Creates a plain object from a QuotaPreference message. Also converts values to other types if specified.
                     * @param message QuotaPreference
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1beta.QuotaPreference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QuotaPreference to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QuotaPreference
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QuotaConfig. */
                interface IQuotaConfig {

                    /** QuotaConfig preferredValue */
                    preferredValue?: (number|Long|string|null);

                    /** QuotaConfig stateDetail */
                    stateDetail?: (string|null);

                    /** QuotaConfig grantedValue */
                    grantedValue?: (google.protobuf.IInt64Value|null);

                    /** QuotaConfig traceId */
                    traceId?: (string|null);

                    /** QuotaConfig annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** QuotaConfig requestOrigin */
                    requestOrigin?: (google.api.cloudquotas.v1beta.QuotaConfig.Origin|keyof typeof google.api.cloudquotas.v1beta.QuotaConfig.Origin|null);
                }

                /** Represents a QuotaConfig. */
                class QuotaConfig implements IQuotaConfig {

                    /**
                     * Constructs a new QuotaConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1beta.IQuotaConfig);

                    /** QuotaConfig preferredValue. */
                    public preferredValue: (number|Long|string);

                    /** QuotaConfig stateDetail. */
                    public stateDetail: string;

                    /** QuotaConfig grantedValue. */
                    public grantedValue?: (google.protobuf.IInt64Value|null);

                    /** QuotaConfig traceId. */
                    public traceId: string;

                    /** QuotaConfig annotations. */
                    public annotations: { [k: string]: string };

                    /** QuotaConfig requestOrigin. */
                    public requestOrigin: (google.api.cloudquotas.v1beta.QuotaConfig.Origin|keyof typeof google.api.cloudquotas.v1beta.QuotaConfig.Origin);

                    /**
                     * Creates a new QuotaConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QuotaConfig instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1beta.IQuotaConfig): google.api.cloudquotas.v1beta.QuotaConfig;

                    /**
                     * Encodes the specified QuotaConfig message. Does not implicitly {@link google.api.cloudquotas.v1beta.QuotaConfig.verify|verify} messages.
                     * @param message QuotaConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1beta.IQuotaConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QuotaConfig message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1beta.QuotaConfig.verify|verify} messages.
                     * @param message QuotaConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1beta.IQuotaConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QuotaConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QuotaConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1beta.QuotaConfig;

                    /**
                     * Decodes a QuotaConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QuotaConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1beta.QuotaConfig;

                    /**
                     * Verifies a QuotaConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QuotaConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QuotaConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1beta.QuotaConfig;

                    /**
                     * Creates a plain object from a QuotaConfig message. Also converts values to other types if specified.
                     * @param message QuotaConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1beta.QuotaConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QuotaConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QuotaConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace QuotaConfig {

                    /** Origin enum. */
                    enum Origin {
                        ORIGIN_UNSPECIFIED = 0,
                        CLOUD_CONSOLE = 1,
                        AUTO_ADJUSTER = 2
                    }
                }

                /** Properties of a DimensionsInfo. */
                interface IDimensionsInfo {

                    /** DimensionsInfo dimensions */
                    dimensions?: ({ [k: string]: string }|null);

                    /** DimensionsInfo details */
                    details?: (google.api.cloudquotas.v1beta.IQuotaDetails|null);

                    /** DimensionsInfo applicableLocations */
                    applicableLocations?: (string[]|null);
                }

                /** Represents a DimensionsInfo. */
                class DimensionsInfo implements IDimensionsInfo {

                    /**
                     * Constructs a new DimensionsInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1beta.IDimensionsInfo);

                    /** DimensionsInfo dimensions. */
                    public dimensions: { [k: string]: string };

                    /** DimensionsInfo details. */
                    public details?: (google.api.cloudquotas.v1beta.IQuotaDetails|null);

                    /** DimensionsInfo applicableLocations. */
                    public applicableLocations: string[];

                    /**
                     * Creates a new DimensionsInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DimensionsInfo instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1beta.IDimensionsInfo): google.api.cloudquotas.v1beta.DimensionsInfo;

                    /**
                     * Encodes the specified DimensionsInfo message. Does not implicitly {@link google.api.cloudquotas.v1beta.DimensionsInfo.verify|verify} messages.
                     * @param message DimensionsInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1beta.IDimensionsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DimensionsInfo message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1beta.DimensionsInfo.verify|verify} messages.
                     * @param message DimensionsInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1beta.IDimensionsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DimensionsInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DimensionsInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1beta.DimensionsInfo;

                    /**
                     * Decodes a DimensionsInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DimensionsInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1beta.DimensionsInfo;

                    /**
                     * Verifies a DimensionsInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DimensionsInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DimensionsInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1beta.DimensionsInfo;

                    /**
                     * Creates a plain object from a DimensionsInfo message. Also converts values to other types if specified.
                     * @param message DimensionsInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1beta.DimensionsInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DimensionsInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DimensionsInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QuotaDetails. */
                interface IQuotaDetails {

                    /** QuotaDetails value */
                    value?: (number|Long|string|null);

                    /** QuotaDetails rolloutInfo */
                    rolloutInfo?: (google.api.cloudquotas.v1beta.IRolloutInfo|null);
                }

                /** Represents a QuotaDetails. */
                class QuotaDetails implements IQuotaDetails {

                    /**
                     * Constructs a new QuotaDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1beta.IQuotaDetails);

                    /** QuotaDetails value. */
                    public value: (number|Long|string);

                    /** QuotaDetails rolloutInfo. */
                    public rolloutInfo?: (google.api.cloudquotas.v1beta.IRolloutInfo|null);

                    /**
                     * Creates a new QuotaDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QuotaDetails instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1beta.IQuotaDetails): google.api.cloudquotas.v1beta.QuotaDetails;

                    /**
                     * Encodes the specified QuotaDetails message. Does not implicitly {@link google.api.cloudquotas.v1beta.QuotaDetails.verify|verify} messages.
                     * @param message QuotaDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1beta.IQuotaDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QuotaDetails message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1beta.QuotaDetails.verify|verify} messages.
                     * @param message QuotaDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1beta.IQuotaDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QuotaDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QuotaDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1beta.QuotaDetails;

                    /**
                     * Decodes a QuotaDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QuotaDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1beta.QuotaDetails;

                    /**
                     * Verifies a QuotaDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QuotaDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QuotaDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1beta.QuotaDetails;

                    /**
                     * Creates a plain object from a QuotaDetails message. Also converts values to other types if specified.
                     * @param message QuotaDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1beta.QuotaDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QuotaDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QuotaDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RolloutInfo. */
                interface IRolloutInfo {

                    /** RolloutInfo ongoingRollout */
                    ongoingRollout?: (boolean|null);
                }

                /** Represents a RolloutInfo. */
                class RolloutInfo implements IRolloutInfo {

                    /**
                     * Constructs a new RolloutInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1beta.IRolloutInfo);

                    /** RolloutInfo ongoingRollout. */
                    public ongoingRollout: boolean;

                    /**
                     * Creates a new RolloutInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RolloutInfo instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1beta.IRolloutInfo): google.api.cloudquotas.v1beta.RolloutInfo;

                    /**
                     * Encodes the specified RolloutInfo message. Does not implicitly {@link google.api.cloudquotas.v1beta.RolloutInfo.verify|verify} messages.
                     * @param message RolloutInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1beta.IRolloutInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RolloutInfo message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1beta.RolloutInfo.verify|verify} messages.
                     * @param message RolloutInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1beta.IRolloutInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RolloutInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RolloutInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1beta.RolloutInfo;

                    /**
                     * Decodes a RolloutInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RolloutInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1beta.RolloutInfo;

                    /**
                     * Verifies a RolloutInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RolloutInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RolloutInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1beta.RolloutInfo;

                    /**
                     * Creates a plain object from a RolloutInfo message. Also converts values to other types if specified.
                     * @param message RolloutInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1beta.RolloutInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RolloutInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RolloutInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a QuotaAdjusterSettingsManager */
                class QuotaAdjusterSettingsManager extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new QuotaAdjusterSettingsManager service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new QuotaAdjusterSettingsManager service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): QuotaAdjusterSettingsManager;

                    /**
                     * Calls UpdateQuotaAdjusterSettings.
                     * @param request UpdateQuotaAdjusterSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QuotaAdjusterSettings
                     */
                    public updateQuotaAdjusterSettings(request: google.api.cloudquotas.v1beta.IUpdateQuotaAdjusterSettingsRequest, callback: google.api.cloudquotas.v1beta.QuotaAdjusterSettingsManager.UpdateQuotaAdjusterSettingsCallback): void;

                    /**
                     * Calls UpdateQuotaAdjusterSettings.
                     * @param request UpdateQuotaAdjusterSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public updateQuotaAdjusterSettings(request: google.api.cloudquotas.v1beta.IUpdateQuotaAdjusterSettingsRequest): Promise<google.api.cloudquotas.v1beta.QuotaAdjusterSettings>;

                    /**
                     * Calls GetQuotaAdjusterSettings.
                     * @param request GetQuotaAdjusterSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QuotaAdjusterSettings
                     */
                    public getQuotaAdjusterSettings(request: google.api.cloudquotas.v1beta.IGetQuotaAdjusterSettingsRequest, callback: google.api.cloudquotas.v1beta.QuotaAdjusterSettingsManager.GetQuotaAdjusterSettingsCallback): void;

                    /**
                     * Calls GetQuotaAdjusterSettings.
                     * @param request GetQuotaAdjusterSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public getQuotaAdjusterSettings(request: google.api.cloudquotas.v1beta.IGetQuotaAdjusterSettingsRequest): Promise<google.api.cloudquotas.v1beta.QuotaAdjusterSettings>;
                }

                namespace QuotaAdjusterSettingsManager {

                    /**
                     * Callback as used by {@link google.api.cloudquotas.v1beta.QuotaAdjusterSettingsManager|updateQuotaAdjusterSettings}.
                     * @param error Error, if any
                     * @param [response] QuotaAdjusterSettings
                     */
                    type UpdateQuotaAdjusterSettingsCallback = (error: (Error|null), response?: google.api.cloudquotas.v1beta.QuotaAdjusterSettings) => void;

                    /**
                     * Callback as used by {@link google.api.cloudquotas.v1beta.QuotaAdjusterSettingsManager|getQuotaAdjusterSettings}.
                     * @param error Error, if any
                     * @param [response] QuotaAdjusterSettings
                     */
                    type GetQuotaAdjusterSettingsCallback = (error: (Error|null), response?: google.api.cloudquotas.v1beta.QuotaAdjusterSettings) => void;
                }

                /** Properties of a GetQuotaAdjusterSettingsRequest. */
                interface IGetQuotaAdjusterSettingsRequest {

                    /** GetQuotaAdjusterSettingsRequest name */
                    name?: (string|null);
                }

                /** Represents a GetQuotaAdjusterSettingsRequest. */
                class GetQuotaAdjusterSettingsRequest implements IGetQuotaAdjusterSettingsRequest {

                    /**
                     * Constructs a new GetQuotaAdjusterSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1beta.IGetQuotaAdjusterSettingsRequest);

                    /** GetQuotaAdjusterSettingsRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetQuotaAdjusterSettingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetQuotaAdjusterSettingsRequest instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1beta.IGetQuotaAdjusterSettingsRequest): google.api.cloudquotas.v1beta.GetQuotaAdjusterSettingsRequest;

                    /**
                     * Encodes the specified GetQuotaAdjusterSettingsRequest message. Does not implicitly {@link google.api.cloudquotas.v1beta.GetQuotaAdjusterSettingsRequest.verify|verify} messages.
                     * @param message GetQuotaAdjusterSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1beta.IGetQuotaAdjusterSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetQuotaAdjusterSettingsRequest message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1beta.GetQuotaAdjusterSettingsRequest.verify|verify} messages.
                     * @param message GetQuotaAdjusterSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1beta.IGetQuotaAdjusterSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetQuotaAdjusterSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetQuotaAdjusterSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1beta.GetQuotaAdjusterSettingsRequest;

                    /**
                     * Decodes a GetQuotaAdjusterSettingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetQuotaAdjusterSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1beta.GetQuotaAdjusterSettingsRequest;

                    /**
                     * Verifies a GetQuotaAdjusterSettingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetQuotaAdjusterSettingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetQuotaAdjusterSettingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1beta.GetQuotaAdjusterSettingsRequest;

                    /**
                     * Creates a plain object from a GetQuotaAdjusterSettingsRequest message. Also converts values to other types if specified.
                     * @param message GetQuotaAdjusterSettingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1beta.GetQuotaAdjusterSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetQuotaAdjusterSettingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetQuotaAdjusterSettingsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateQuotaAdjusterSettingsRequest. */
                interface IUpdateQuotaAdjusterSettingsRequest {

                    /** UpdateQuotaAdjusterSettingsRequest quotaAdjusterSettings */
                    quotaAdjusterSettings?: (google.api.cloudquotas.v1beta.IQuotaAdjusterSettings|null);

                    /** UpdateQuotaAdjusterSettingsRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateQuotaAdjusterSettingsRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateQuotaAdjusterSettingsRequest. */
                class UpdateQuotaAdjusterSettingsRequest implements IUpdateQuotaAdjusterSettingsRequest {

                    /**
                     * Constructs a new UpdateQuotaAdjusterSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1beta.IUpdateQuotaAdjusterSettingsRequest);

                    /** UpdateQuotaAdjusterSettingsRequest quotaAdjusterSettings. */
                    public quotaAdjusterSettings?: (google.api.cloudquotas.v1beta.IQuotaAdjusterSettings|null);

                    /** UpdateQuotaAdjusterSettingsRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateQuotaAdjusterSettingsRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateQuotaAdjusterSettingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateQuotaAdjusterSettingsRequest instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1beta.IUpdateQuotaAdjusterSettingsRequest): google.api.cloudquotas.v1beta.UpdateQuotaAdjusterSettingsRequest;

                    /**
                     * Encodes the specified UpdateQuotaAdjusterSettingsRequest message. Does not implicitly {@link google.api.cloudquotas.v1beta.UpdateQuotaAdjusterSettingsRequest.verify|verify} messages.
                     * @param message UpdateQuotaAdjusterSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1beta.IUpdateQuotaAdjusterSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateQuotaAdjusterSettingsRequest message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1beta.UpdateQuotaAdjusterSettingsRequest.verify|verify} messages.
                     * @param message UpdateQuotaAdjusterSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1beta.IUpdateQuotaAdjusterSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateQuotaAdjusterSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateQuotaAdjusterSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1beta.UpdateQuotaAdjusterSettingsRequest;

                    /**
                     * Decodes an UpdateQuotaAdjusterSettingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateQuotaAdjusterSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1beta.UpdateQuotaAdjusterSettingsRequest;

                    /**
                     * Verifies an UpdateQuotaAdjusterSettingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateQuotaAdjusterSettingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateQuotaAdjusterSettingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1beta.UpdateQuotaAdjusterSettingsRequest;

                    /**
                     * Creates a plain object from an UpdateQuotaAdjusterSettingsRequest message. Also converts values to other types if specified.
                     * @param message UpdateQuotaAdjusterSettingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1beta.UpdateQuotaAdjusterSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateQuotaAdjusterSettingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateQuotaAdjusterSettingsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QuotaAdjusterSettings. */
                interface IQuotaAdjusterSettings {

                    /** QuotaAdjusterSettings name */
                    name?: (string|null);

                    /** QuotaAdjusterSettings enablement */
                    enablement?: (google.api.cloudquotas.v1beta.QuotaAdjusterSettings.Enablement|keyof typeof google.api.cloudquotas.v1beta.QuotaAdjusterSettings.Enablement|null);

                    /** QuotaAdjusterSettings updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** QuotaAdjusterSettings etag */
                    etag?: (string|null);

                    /** QuotaAdjusterSettings inherited */
                    inherited?: (boolean|null);

                    /** QuotaAdjusterSettings inheritedFrom */
                    inheritedFrom?: (string|null);
                }

                /** Represents a QuotaAdjusterSettings. */
                class QuotaAdjusterSettings implements IQuotaAdjusterSettings {

                    /**
                     * Constructs a new QuotaAdjusterSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.api.cloudquotas.v1beta.IQuotaAdjusterSettings);

                    /** QuotaAdjusterSettings name. */
                    public name: string;

                    /** QuotaAdjusterSettings enablement. */
                    public enablement: (google.api.cloudquotas.v1beta.QuotaAdjusterSettings.Enablement|keyof typeof google.api.cloudquotas.v1beta.QuotaAdjusterSettings.Enablement);

                    /** QuotaAdjusterSettings updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** QuotaAdjusterSettings etag. */
                    public etag: string;

                    /** QuotaAdjusterSettings inherited. */
                    public inherited: boolean;

                    /** QuotaAdjusterSettings inheritedFrom. */
                    public inheritedFrom: string;

                    /**
                     * Creates a new QuotaAdjusterSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QuotaAdjusterSettings instance
                     */
                    public static create(properties?: google.api.cloudquotas.v1beta.IQuotaAdjusterSettings): google.api.cloudquotas.v1beta.QuotaAdjusterSettings;

                    /**
                     * Encodes the specified QuotaAdjusterSettings message. Does not implicitly {@link google.api.cloudquotas.v1beta.QuotaAdjusterSettings.verify|verify} messages.
                     * @param message QuotaAdjusterSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.api.cloudquotas.v1beta.IQuotaAdjusterSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QuotaAdjusterSettings message, length delimited. Does not implicitly {@link google.api.cloudquotas.v1beta.QuotaAdjusterSettings.verify|verify} messages.
                     * @param message QuotaAdjusterSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.api.cloudquotas.v1beta.IQuotaAdjusterSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QuotaAdjusterSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QuotaAdjusterSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.cloudquotas.v1beta.QuotaAdjusterSettings;

                    /**
                     * Decodes a QuotaAdjusterSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QuotaAdjusterSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.cloudquotas.v1beta.QuotaAdjusterSettings;

                    /**
                     * Verifies a QuotaAdjusterSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QuotaAdjusterSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QuotaAdjusterSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.api.cloudquotas.v1beta.QuotaAdjusterSettings;

                    /**
                     * Creates a plain object from a QuotaAdjusterSettings message. Also converts values to other types if specified.
                     * @param message QuotaAdjusterSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.api.cloudquotas.v1beta.QuotaAdjusterSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QuotaAdjusterSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QuotaAdjusterSettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace QuotaAdjusterSettings {

                    /** Enablement enum. */
                    enum Enablement {
                        ENABLEMENT_UNSPECIFIED = 0,
                        ENABLED = 2,
                        DISABLED = 3
                    }
                }
            }
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

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DoubleValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FloatValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|string|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long|string);

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|string|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long|string);

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BoolValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StringValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|Buffer|string|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: (Uint8Array|Buffer|string);

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BytesValue
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
}
