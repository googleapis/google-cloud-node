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

        /** Namespace kms. */
        namespace kms {

            /** Namespace v1. */
            namespace v1 {

                /** Represents an Autokey */
                class Autokey extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Autokey service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Autokey service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Autokey;

                    /**
                     * Calls CreateKeyHandle.
                     * @param request CreateKeyHandleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createKeyHandle(request: google.cloud.kms.v1.ICreateKeyHandleRequest, callback: google.cloud.kms.v1.Autokey.CreateKeyHandleCallback): void;

                    /**
                     * Calls CreateKeyHandle.
                     * @param request CreateKeyHandleRequest message or plain object
                     * @returns Promise
                     */
                    public createKeyHandle(request: google.cloud.kms.v1.ICreateKeyHandleRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetKeyHandle.
                     * @param request GetKeyHandleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and KeyHandle
                     */
                    public getKeyHandle(request: google.cloud.kms.v1.IGetKeyHandleRequest, callback: google.cloud.kms.v1.Autokey.GetKeyHandleCallback): void;

                    /**
                     * Calls GetKeyHandle.
                     * @param request GetKeyHandleRequest message or plain object
                     * @returns Promise
                     */
                    public getKeyHandle(request: google.cloud.kms.v1.IGetKeyHandleRequest): Promise<google.cloud.kms.v1.KeyHandle>;

                    /**
                     * Calls ListKeyHandles.
                     * @param request ListKeyHandlesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListKeyHandlesResponse
                     */
                    public listKeyHandles(request: google.cloud.kms.v1.IListKeyHandlesRequest, callback: google.cloud.kms.v1.Autokey.ListKeyHandlesCallback): void;

                    /**
                     * Calls ListKeyHandles.
                     * @param request ListKeyHandlesRequest message or plain object
                     * @returns Promise
                     */
                    public listKeyHandles(request: google.cloud.kms.v1.IListKeyHandlesRequest): Promise<google.cloud.kms.v1.ListKeyHandlesResponse>;
                }

                namespace Autokey {

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.Autokey|createKeyHandle}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateKeyHandleCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.Autokey|getKeyHandle}.
                     * @param error Error, if any
                     * @param [response] KeyHandle
                     */
                    type GetKeyHandleCallback = (error: (Error|null), response?: google.cloud.kms.v1.KeyHandle) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.Autokey|listKeyHandles}.
                     * @param error Error, if any
                     * @param [response] ListKeyHandlesResponse
                     */
                    type ListKeyHandlesCallback = (error: (Error|null), response?: google.cloud.kms.v1.ListKeyHandlesResponse) => void;
                }

                /** Properties of a CreateKeyHandleRequest. */
                interface ICreateKeyHandleRequest {

                    /** CreateKeyHandleRequest parent */
                    parent?: (string|null);

                    /** CreateKeyHandleRequest keyHandleId */
                    keyHandleId?: (string|null);

                    /** CreateKeyHandleRequest keyHandle */
                    keyHandle?: (google.cloud.kms.v1.IKeyHandle|null);
                }

                /** Represents a CreateKeyHandleRequest. */
                class CreateKeyHandleRequest implements ICreateKeyHandleRequest {

                    /**
                     * Constructs a new CreateKeyHandleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.ICreateKeyHandleRequest);

                    /** CreateKeyHandleRequest parent. */
                    public parent: string;

                    /** CreateKeyHandleRequest keyHandleId. */
                    public keyHandleId: string;

                    /** CreateKeyHandleRequest keyHandle. */
                    public keyHandle?: (google.cloud.kms.v1.IKeyHandle|null);

                    /**
                     * Creates a new CreateKeyHandleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateKeyHandleRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.ICreateKeyHandleRequest): google.cloud.kms.v1.CreateKeyHandleRequest;

                    /**
                     * Encodes the specified CreateKeyHandleRequest message. Does not implicitly {@link google.cloud.kms.v1.CreateKeyHandleRequest.verify|verify} messages.
                     * @param message CreateKeyHandleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.ICreateKeyHandleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateKeyHandleRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.CreateKeyHandleRequest.verify|verify} messages.
                     * @param message CreateKeyHandleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.ICreateKeyHandleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateKeyHandleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateKeyHandleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.CreateKeyHandleRequest;

                    /**
                     * Decodes a CreateKeyHandleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateKeyHandleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.CreateKeyHandleRequest;

                    /**
                     * Verifies a CreateKeyHandleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateKeyHandleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateKeyHandleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.CreateKeyHandleRequest;

                    /**
                     * Creates a plain object from a CreateKeyHandleRequest message. Also converts values to other types if specified.
                     * @param message CreateKeyHandleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.CreateKeyHandleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateKeyHandleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateKeyHandleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetKeyHandleRequest. */
                interface IGetKeyHandleRequest {

                    /** GetKeyHandleRequest name */
                    name?: (string|null);
                }

                /** Represents a GetKeyHandleRequest. */
                class GetKeyHandleRequest implements IGetKeyHandleRequest {

                    /**
                     * Constructs a new GetKeyHandleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IGetKeyHandleRequest);

                    /** GetKeyHandleRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetKeyHandleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetKeyHandleRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IGetKeyHandleRequest): google.cloud.kms.v1.GetKeyHandleRequest;

                    /**
                     * Encodes the specified GetKeyHandleRequest message. Does not implicitly {@link google.cloud.kms.v1.GetKeyHandleRequest.verify|verify} messages.
                     * @param message GetKeyHandleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IGetKeyHandleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetKeyHandleRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.GetKeyHandleRequest.verify|verify} messages.
                     * @param message GetKeyHandleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IGetKeyHandleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetKeyHandleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetKeyHandleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.GetKeyHandleRequest;

                    /**
                     * Decodes a GetKeyHandleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetKeyHandleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.GetKeyHandleRequest;

                    /**
                     * Verifies a GetKeyHandleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetKeyHandleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetKeyHandleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.GetKeyHandleRequest;

                    /**
                     * Creates a plain object from a GetKeyHandleRequest message. Also converts values to other types if specified.
                     * @param message GetKeyHandleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.GetKeyHandleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetKeyHandleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetKeyHandleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a KeyHandle. */
                interface IKeyHandle {

                    /** KeyHandle name */
                    name?: (string|null);

                    /** KeyHandle kmsKey */
                    kmsKey?: (string|null);

                    /** KeyHandle resourceTypeSelector */
                    resourceTypeSelector?: (string|null);
                }

                /** Represents a KeyHandle. */
                class KeyHandle implements IKeyHandle {

                    /**
                     * Constructs a new KeyHandle.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IKeyHandle);

                    /** KeyHandle name. */
                    public name: string;

                    /** KeyHandle kmsKey. */
                    public kmsKey: string;

                    /** KeyHandle resourceTypeSelector. */
                    public resourceTypeSelector: string;

                    /**
                     * Creates a new KeyHandle instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns KeyHandle instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IKeyHandle): google.cloud.kms.v1.KeyHandle;

                    /**
                     * Encodes the specified KeyHandle message. Does not implicitly {@link google.cloud.kms.v1.KeyHandle.verify|verify} messages.
                     * @param message KeyHandle message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IKeyHandle, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified KeyHandle message, length delimited. Does not implicitly {@link google.cloud.kms.v1.KeyHandle.verify|verify} messages.
                     * @param message KeyHandle message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IKeyHandle, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a KeyHandle message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns KeyHandle
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.KeyHandle;

                    /**
                     * Decodes a KeyHandle message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns KeyHandle
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.KeyHandle;

                    /**
                     * Verifies a KeyHandle message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a KeyHandle message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns KeyHandle
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.KeyHandle;

                    /**
                     * Creates a plain object from a KeyHandle message. Also converts values to other types if specified.
                     * @param message KeyHandle
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.KeyHandle, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this KeyHandle to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for KeyHandle
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateKeyHandleMetadata. */
                interface ICreateKeyHandleMetadata {
                }

                /** Represents a CreateKeyHandleMetadata. */
                class CreateKeyHandleMetadata implements ICreateKeyHandleMetadata {

                    /**
                     * Constructs a new CreateKeyHandleMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.ICreateKeyHandleMetadata);

                    /**
                     * Creates a new CreateKeyHandleMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateKeyHandleMetadata instance
                     */
                    public static create(properties?: google.cloud.kms.v1.ICreateKeyHandleMetadata): google.cloud.kms.v1.CreateKeyHandleMetadata;

                    /**
                     * Encodes the specified CreateKeyHandleMetadata message. Does not implicitly {@link google.cloud.kms.v1.CreateKeyHandleMetadata.verify|verify} messages.
                     * @param message CreateKeyHandleMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.ICreateKeyHandleMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateKeyHandleMetadata message, length delimited. Does not implicitly {@link google.cloud.kms.v1.CreateKeyHandleMetadata.verify|verify} messages.
                     * @param message CreateKeyHandleMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.ICreateKeyHandleMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateKeyHandleMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateKeyHandleMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.CreateKeyHandleMetadata;

                    /**
                     * Decodes a CreateKeyHandleMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateKeyHandleMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.CreateKeyHandleMetadata;

                    /**
                     * Verifies a CreateKeyHandleMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateKeyHandleMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateKeyHandleMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.CreateKeyHandleMetadata;

                    /**
                     * Creates a plain object from a CreateKeyHandleMetadata message. Also converts values to other types if specified.
                     * @param message CreateKeyHandleMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.CreateKeyHandleMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateKeyHandleMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateKeyHandleMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListKeyHandlesRequest. */
                interface IListKeyHandlesRequest {

                    /** ListKeyHandlesRequest parent */
                    parent?: (string|null);

                    /** ListKeyHandlesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListKeyHandlesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListKeyHandlesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListKeyHandlesRequest. */
                class ListKeyHandlesRequest implements IListKeyHandlesRequest {

                    /**
                     * Constructs a new ListKeyHandlesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IListKeyHandlesRequest);

                    /** ListKeyHandlesRequest parent. */
                    public parent: string;

                    /** ListKeyHandlesRequest pageSize. */
                    public pageSize: number;

                    /** ListKeyHandlesRequest pageToken. */
                    public pageToken: string;

                    /** ListKeyHandlesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListKeyHandlesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListKeyHandlesRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IListKeyHandlesRequest): google.cloud.kms.v1.ListKeyHandlesRequest;

                    /**
                     * Encodes the specified ListKeyHandlesRequest message. Does not implicitly {@link google.cloud.kms.v1.ListKeyHandlesRequest.verify|verify} messages.
                     * @param message ListKeyHandlesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IListKeyHandlesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListKeyHandlesRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.ListKeyHandlesRequest.verify|verify} messages.
                     * @param message ListKeyHandlesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IListKeyHandlesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListKeyHandlesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListKeyHandlesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.ListKeyHandlesRequest;

                    /**
                     * Decodes a ListKeyHandlesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListKeyHandlesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.ListKeyHandlesRequest;

                    /**
                     * Verifies a ListKeyHandlesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListKeyHandlesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListKeyHandlesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.ListKeyHandlesRequest;

                    /**
                     * Creates a plain object from a ListKeyHandlesRequest message. Also converts values to other types if specified.
                     * @param message ListKeyHandlesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.ListKeyHandlesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListKeyHandlesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListKeyHandlesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListKeyHandlesResponse. */
                interface IListKeyHandlesResponse {

                    /** ListKeyHandlesResponse keyHandles */
                    keyHandles?: (google.cloud.kms.v1.IKeyHandle[]|null);

                    /** ListKeyHandlesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListKeyHandlesResponse. */
                class ListKeyHandlesResponse implements IListKeyHandlesResponse {

                    /**
                     * Constructs a new ListKeyHandlesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IListKeyHandlesResponse);

                    /** ListKeyHandlesResponse keyHandles. */
                    public keyHandles: google.cloud.kms.v1.IKeyHandle[];

                    /** ListKeyHandlesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListKeyHandlesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListKeyHandlesResponse instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IListKeyHandlesResponse): google.cloud.kms.v1.ListKeyHandlesResponse;

                    /**
                     * Encodes the specified ListKeyHandlesResponse message. Does not implicitly {@link google.cloud.kms.v1.ListKeyHandlesResponse.verify|verify} messages.
                     * @param message ListKeyHandlesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IListKeyHandlesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListKeyHandlesResponse message, length delimited. Does not implicitly {@link google.cloud.kms.v1.ListKeyHandlesResponse.verify|verify} messages.
                     * @param message ListKeyHandlesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IListKeyHandlesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListKeyHandlesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListKeyHandlesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.ListKeyHandlesResponse;

                    /**
                     * Decodes a ListKeyHandlesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListKeyHandlesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.ListKeyHandlesResponse;

                    /**
                     * Verifies a ListKeyHandlesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListKeyHandlesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListKeyHandlesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.ListKeyHandlesResponse;

                    /**
                     * Creates a plain object from a ListKeyHandlesResponse message. Also converts values to other types if specified.
                     * @param message ListKeyHandlesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.ListKeyHandlesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListKeyHandlesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListKeyHandlesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents an AutokeyAdmin */
                class AutokeyAdmin extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new AutokeyAdmin service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new AutokeyAdmin service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AutokeyAdmin;

                    /**
                     * Calls UpdateAutokeyConfig.
                     * @param request UpdateAutokeyConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AutokeyConfig
                     */
                    public updateAutokeyConfig(request: google.cloud.kms.v1.IUpdateAutokeyConfigRequest, callback: google.cloud.kms.v1.AutokeyAdmin.UpdateAutokeyConfigCallback): void;

                    /**
                     * Calls UpdateAutokeyConfig.
                     * @param request UpdateAutokeyConfigRequest message or plain object
                     * @returns Promise
                     */
                    public updateAutokeyConfig(request: google.cloud.kms.v1.IUpdateAutokeyConfigRequest): Promise<google.cloud.kms.v1.AutokeyConfig>;

                    /**
                     * Calls GetAutokeyConfig.
                     * @param request GetAutokeyConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AutokeyConfig
                     */
                    public getAutokeyConfig(request: google.cloud.kms.v1.IGetAutokeyConfigRequest, callback: google.cloud.kms.v1.AutokeyAdmin.GetAutokeyConfigCallback): void;

                    /**
                     * Calls GetAutokeyConfig.
                     * @param request GetAutokeyConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getAutokeyConfig(request: google.cloud.kms.v1.IGetAutokeyConfigRequest): Promise<google.cloud.kms.v1.AutokeyConfig>;

                    /**
                     * Calls ShowEffectiveAutokeyConfig.
                     * @param request ShowEffectiveAutokeyConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ShowEffectiveAutokeyConfigResponse
                     */
                    public showEffectiveAutokeyConfig(request: google.cloud.kms.v1.IShowEffectiveAutokeyConfigRequest, callback: google.cloud.kms.v1.AutokeyAdmin.ShowEffectiveAutokeyConfigCallback): void;

                    /**
                     * Calls ShowEffectiveAutokeyConfig.
                     * @param request ShowEffectiveAutokeyConfigRequest message or plain object
                     * @returns Promise
                     */
                    public showEffectiveAutokeyConfig(request: google.cloud.kms.v1.IShowEffectiveAutokeyConfigRequest): Promise<google.cloud.kms.v1.ShowEffectiveAutokeyConfigResponse>;
                }

                namespace AutokeyAdmin {

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.AutokeyAdmin|updateAutokeyConfig}.
                     * @param error Error, if any
                     * @param [response] AutokeyConfig
                     */
                    type UpdateAutokeyConfigCallback = (error: (Error|null), response?: google.cloud.kms.v1.AutokeyConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.AutokeyAdmin|getAutokeyConfig}.
                     * @param error Error, if any
                     * @param [response] AutokeyConfig
                     */
                    type GetAutokeyConfigCallback = (error: (Error|null), response?: google.cloud.kms.v1.AutokeyConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.AutokeyAdmin|showEffectiveAutokeyConfig}.
                     * @param error Error, if any
                     * @param [response] ShowEffectiveAutokeyConfigResponse
                     */
                    type ShowEffectiveAutokeyConfigCallback = (error: (Error|null), response?: google.cloud.kms.v1.ShowEffectiveAutokeyConfigResponse) => void;
                }

                /** Properties of an UpdateAutokeyConfigRequest. */
                interface IUpdateAutokeyConfigRequest {

                    /** UpdateAutokeyConfigRequest autokeyConfig */
                    autokeyConfig?: (google.cloud.kms.v1.IAutokeyConfig|null);

                    /** UpdateAutokeyConfigRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateAutokeyConfigRequest. */
                class UpdateAutokeyConfigRequest implements IUpdateAutokeyConfigRequest {

                    /**
                     * Constructs a new UpdateAutokeyConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IUpdateAutokeyConfigRequest);

                    /** UpdateAutokeyConfigRequest autokeyConfig. */
                    public autokeyConfig?: (google.cloud.kms.v1.IAutokeyConfig|null);

                    /** UpdateAutokeyConfigRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateAutokeyConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateAutokeyConfigRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IUpdateAutokeyConfigRequest): google.cloud.kms.v1.UpdateAutokeyConfigRequest;

                    /**
                     * Encodes the specified UpdateAutokeyConfigRequest message. Does not implicitly {@link google.cloud.kms.v1.UpdateAutokeyConfigRequest.verify|verify} messages.
                     * @param message UpdateAutokeyConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IUpdateAutokeyConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateAutokeyConfigRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.UpdateAutokeyConfigRequest.verify|verify} messages.
                     * @param message UpdateAutokeyConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IUpdateAutokeyConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateAutokeyConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateAutokeyConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.UpdateAutokeyConfigRequest;

                    /**
                     * Decodes an UpdateAutokeyConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateAutokeyConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.UpdateAutokeyConfigRequest;

                    /**
                     * Verifies an UpdateAutokeyConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateAutokeyConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateAutokeyConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.UpdateAutokeyConfigRequest;

                    /**
                     * Creates a plain object from an UpdateAutokeyConfigRequest message. Also converts values to other types if specified.
                     * @param message UpdateAutokeyConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.UpdateAutokeyConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateAutokeyConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateAutokeyConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetAutokeyConfigRequest. */
                interface IGetAutokeyConfigRequest {

                    /** GetAutokeyConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAutokeyConfigRequest. */
                class GetAutokeyConfigRequest implements IGetAutokeyConfigRequest {

                    /**
                     * Constructs a new GetAutokeyConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IGetAutokeyConfigRequest);

                    /** GetAutokeyConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAutokeyConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAutokeyConfigRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IGetAutokeyConfigRequest): google.cloud.kms.v1.GetAutokeyConfigRequest;

                    /**
                     * Encodes the specified GetAutokeyConfigRequest message. Does not implicitly {@link google.cloud.kms.v1.GetAutokeyConfigRequest.verify|verify} messages.
                     * @param message GetAutokeyConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IGetAutokeyConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAutokeyConfigRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.GetAutokeyConfigRequest.verify|verify} messages.
                     * @param message GetAutokeyConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IGetAutokeyConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAutokeyConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAutokeyConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.GetAutokeyConfigRequest;

                    /**
                     * Decodes a GetAutokeyConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAutokeyConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.GetAutokeyConfigRequest;

                    /**
                     * Verifies a GetAutokeyConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAutokeyConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAutokeyConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.GetAutokeyConfigRequest;

                    /**
                     * Creates a plain object from a GetAutokeyConfigRequest message. Also converts values to other types if specified.
                     * @param message GetAutokeyConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.GetAutokeyConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAutokeyConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetAutokeyConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AutokeyConfig. */
                interface IAutokeyConfig {

                    /** AutokeyConfig name */
                    name?: (string|null);

                    /** AutokeyConfig keyProject */
                    keyProject?: (string|null);

                    /** AutokeyConfig state */
                    state?: (google.cloud.kms.v1.AutokeyConfig.State|keyof typeof google.cloud.kms.v1.AutokeyConfig.State|null);

                    /** AutokeyConfig etag */
                    etag?: (string|null);
                }

                /** Represents an AutokeyConfig. */
                class AutokeyConfig implements IAutokeyConfig {

                    /**
                     * Constructs a new AutokeyConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IAutokeyConfig);

                    /** AutokeyConfig name. */
                    public name: string;

                    /** AutokeyConfig keyProject. */
                    public keyProject: string;

                    /** AutokeyConfig state. */
                    public state: (google.cloud.kms.v1.AutokeyConfig.State|keyof typeof google.cloud.kms.v1.AutokeyConfig.State);

                    /** AutokeyConfig etag. */
                    public etag: string;

                    /**
                     * Creates a new AutokeyConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AutokeyConfig instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IAutokeyConfig): google.cloud.kms.v1.AutokeyConfig;

                    /**
                     * Encodes the specified AutokeyConfig message. Does not implicitly {@link google.cloud.kms.v1.AutokeyConfig.verify|verify} messages.
                     * @param message AutokeyConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IAutokeyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AutokeyConfig message, length delimited. Does not implicitly {@link google.cloud.kms.v1.AutokeyConfig.verify|verify} messages.
                     * @param message AutokeyConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IAutokeyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AutokeyConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AutokeyConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.AutokeyConfig;

                    /**
                     * Decodes an AutokeyConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AutokeyConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.AutokeyConfig;

                    /**
                     * Verifies an AutokeyConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AutokeyConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AutokeyConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.AutokeyConfig;

                    /**
                     * Creates a plain object from an AutokeyConfig message. Also converts values to other types if specified.
                     * @param message AutokeyConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.AutokeyConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AutokeyConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AutokeyConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AutokeyConfig {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        KEY_PROJECT_DELETED = 2,
                        UNINITIALIZED = 3
                    }
                }

                /** Properties of a ShowEffectiveAutokeyConfigRequest. */
                interface IShowEffectiveAutokeyConfigRequest {

                    /** ShowEffectiveAutokeyConfigRequest parent */
                    parent?: (string|null);
                }

                /** Represents a ShowEffectiveAutokeyConfigRequest. */
                class ShowEffectiveAutokeyConfigRequest implements IShowEffectiveAutokeyConfigRequest {

                    /**
                     * Constructs a new ShowEffectiveAutokeyConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IShowEffectiveAutokeyConfigRequest);

                    /** ShowEffectiveAutokeyConfigRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new ShowEffectiveAutokeyConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ShowEffectiveAutokeyConfigRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IShowEffectiveAutokeyConfigRequest): google.cloud.kms.v1.ShowEffectiveAutokeyConfigRequest;

                    /**
                     * Encodes the specified ShowEffectiveAutokeyConfigRequest message. Does not implicitly {@link google.cloud.kms.v1.ShowEffectiveAutokeyConfigRequest.verify|verify} messages.
                     * @param message ShowEffectiveAutokeyConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IShowEffectiveAutokeyConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ShowEffectiveAutokeyConfigRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.ShowEffectiveAutokeyConfigRequest.verify|verify} messages.
                     * @param message ShowEffectiveAutokeyConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IShowEffectiveAutokeyConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ShowEffectiveAutokeyConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ShowEffectiveAutokeyConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.ShowEffectiveAutokeyConfigRequest;

                    /**
                     * Decodes a ShowEffectiveAutokeyConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ShowEffectiveAutokeyConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.ShowEffectiveAutokeyConfigRequest;

                    /**
                     * Verifies a ShowEffectiveAutokeyConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ShowEffectiveAutokeyConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ShowEffectiveAutokeyConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.ShowEffectiveAutokeyConfigRequest;

                    /**
                     * Creates a plain object from a ShowEffectiveAutokeyConfigRequest message. Also converts values to other types if specified.
                     * @param message ShowEffectiveAutokeyConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.ShowEffectiveAutokeyConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ShowEffectiveAutokeyConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ShowEffectiveAutokeyConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ShowEffectiveAutokeyConfigResponse. */
                interface IShowEffectiveAutokeyConfigResponse {

                    /** ShowEffectiveAutokeyConfigResponse keyProject */
                    keyProject?: (string|null);
                }

                /** Represents a ShowEffectiveAutokeyConfigResponse. */
                class ShowEffectiveAutokeyConfigResponse implements IShowEffectiveAutokeyConfigResponse {

                    /**
                     * Constructs a new ShowEffectiveAutokeyConfigResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IShowEffectiveAutokeyConfigResponse);

                    /** ShowEffectiveAutokeyConfigResponse keyProject. */
                    public keyProject: string;

                    /**
                     * Creates a new ShowEffectiveAutokeyConfigResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ShowEffectiveAutokeyConfigResponse instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IShowEffectiveAutokeyConfigResponse): google.cloud.kms.v1.ShowEffectiveAutokeyConfigResponse;

                    /**
                     * Encodes the specified ShowEffectiveAutokeyConfigResponse message. Does not implicitly {@link google.cloud.kms.v1.ShowEffectiveAutokeyConfigResponse.verify|verify} messages.
                     * @param message ShowEffectiveAutokeyConfigResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IShowEffectiveAutokeyConfigResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ShowEffectiveAutokeyConfigResponse message, length delimited. Does not implicitly {@link google.cloud.kms.v1.ShowEffectiveAutokeyConfigResponse.verify|verify} messages.
                     * @param message ShowEffectiveAutokeyConfigResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IShowEffectiveAutokeyConfigResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ShowEffectiveAutokeyConfigResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ShowEffectiveAutokeyConfigResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.ShowEffectiveAutokeyConfigResponse;

                    /**
                     * Decodes a ShowEffectiveAutokeyConfigResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ShowEffectiveAutokeyConfigResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.ShowEffectiveAutokeyConfigResponse;

                    /**
                     * Verifies a ShowEffectiveAutokeyConfigResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ShowEffectiveAutokeyConfigResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ShowEffectiveAutokeyConfigResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.ShowEffectiveAutokeyConfigResponse;

                    /**
                     * Creates a plain object from a ShowEffectiveAutokeyConfigResponse message. Also converts values to other types if specified.
                     * @param message ShowEffectiveAutokeyConfigResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.ShowEffectiveAutokeyConfigResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ShowEffectiveAutokeyConfigResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ShowEffectiveAutokeyConfigResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents an EkmService */
                class EkmService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new EkmService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new EkmService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): EkmService;

                    /**
                     * Calls ListEkmConnections.
                     * @param request ListEkmConnectionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListEkmConnectionsResponse
                     */
                    public listEkmConnections(request: google.cloud.kms.v1.IListEkmConnectionsRequest, callback: google.cloud.kms.v1.EkmService.ListEkmConnectionsCallback): void;

                    /**
                     * Calls ListEkmConnections.
                     * @param request ListEkmConnectionsRequest message or plain object
                     * @returns Promise
                     */
                    public listEkmConnections(request: google.cloud.kms.v1.IListEkmConnectionsRequest): Promise<google.cloud.kms.v1.ListEkmConnectionsResponse>;

                    /**
                     * Calls GetEkmConnection.
                     * @param request GetEkmConnectionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EkmConnection
                     */
                    public getEkmConnection(request: google.cloud.kms.v1.IGetEkmConnectionRequest, callback: google.cloud.kms.v1.EkmService.GetEkmConnectionCallback): void;

                    /**
                     * Calls GetEkmConnection.
                     * @param request GetEkmConnectionRequest message or plain object
                     * @returns Promise
                     */
                    public getEkmConnection(request: google.cloud.kms.v1.IGetEkmConnectionRequest): Promise<google.cloud.kms.v1.EkmConnection>;

                    /**
                     * Calls CreateEkmConnection.
                     * @param request CreateEkmConnectionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EkmConnection
                     */
                    public createEkmConnection(request: google.cloud.kms.v1.ICreateEkmConnectionRequest, callback: google.cloud.kms.v1.EkmService.CreateEkmConnectionCallback): void;

                    /**
                     * Calls CreateEkmConnection.
                     * @param request CreateEkmConnectionRequest message or plain object
                     * @returns Promise
                     */
                    public createEkmConnection(request: google.cloud.kms.v1.ICreateEkmConnectionRequest): Promise<google.cloud.kms.v1.EkmConnection>;

                    /**
                     * Calls UpdateEkmConnection.
                     * @param request UpdateEkmConnectionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EkmConnection
                     */
                    public updateEkmConnection(request: google.cloud.kms.v1.IUpdateEkmConnectionRequest, callback: google.cloud.kms.v1.EkmService.UpdateEkmConnectionCallback): void;

                    /**
                     * Calls UpdateEkmConnection.
                     * @param request UpdateEkmConnectionRequest message or plain object
                     * @returns Promise
                     */
                    public updateEkmConnection(request: google.cloud.kms.v1.IUpdateEkmConnectionRequest): Promise<google.cloud.kms.v1.EkmConnection>;

                    /**
                     * Calls GetEkmConfig.
                     * @param request GetEkmConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EkmConfig
                     */
                    public getEkmConfig(request: google.cloud.kms.v1.IGetEkmConfigRequest, callback: google.cloud.kms.v1.EkmService.GetEkmConfigCallback): void;

                    /**
                     * Calls GetEkmConfig.
                     * @param request GetEkmConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getEkmConfig(request: google.cloud.kms.v1.IGetEkmConfigRequest): Promise<google.cloud.kms.v1.EkmConfig>;

                    /**
                     * Calls UpdateEkmConfig.
                     * @param request UpdateEkmConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EkmConfig
                     */
                    public updateEkmConfig(request: google.cloud.kms.v1.IUpdateEkmConfigRequest, callback: google.cloud.kms.v1.EkmService.UpdateEkmConfigCallback): void;

                    /**
                     * Calls UpdateEkmConfig.
                     * @param request UpdateEkmConfigRequest message or plain object
                     * @returns Promise
                     */
                    public updateEkmConfig(request: google.cloud.kms.v1.IUpdateEkmConfigRequest): Promise<google.cloud.kms.v1.EkmConfig>;

                    /**
                     * Calls VerifyConnectivity.
                     * @param request VerifyConnectivityRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and VerifyConnectivityResponse
                     */
                    public verifyConnectivity(request: google.cloud.kms.v1.IVerifyConnectivityRequest, callback: google.cloud.kms.v1.EkmService.VerifyConnectivityCallback): void;

                    /**
                     * Calls VerifyConnectivity.
                     * @param request VerifyConnectivityRequest message or plain object
                     * @returns Promise
                     */
                    public verifyConnectivity(request: google.cloud.kms.v1.IVerifyConnectivityRequest): Promise<google.cloud.kms.v1.VerifyConnectivityResponse>;
                }

                namespace EkmService {

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.EkmService|listEkmConnections}.
                     * @param error Error, if any
                     * @param [response] ListEkmConnectionsResponse
                     */
                    type ListEkmConnectionsCallback = (error: (Error|null), response?: google.cloud.kms.v1.ListEkmConnectionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.EkmService|getEkmConnection}.
                     * @param error Error, if any
                     * @param [response] EkmConnection
                     */
                    type GetEkmConnectionCallback = (error: (Error|null), response?: google.cloud.kms.v1.EkmConnection) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.EkmService|createEkmConnection}.
                     * @param error Error, if any
                     * @param [response] EkmConnection
                     */
                    type CreateEkmConnectionCallback = (error: (Error|null), response?: google.cloud.kms.v1.EkmConnection) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.EkmService|updateEkmConnection}.
                     * @param error Error, if any
                     * @param [response] EkmConnection
                     */
                    type UpdateEkmConnectionCallback = (error: (Error|null), response?: google.cloud.kms.v1.EkmConnection) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.EkmService|getEkmConfig}.
                     * @param error Error, if any
                     * @param [response] EkmConfig
                     */
                    type GetEkmConfigCallback = (error: (Error|null), response?: google.cloud.kms.v1.EkmConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.EkmService|updateEkmConfig}.
                     * @param error Error, if any
                     * @param [response] EkmConfig
                     */
                    type UpdateEkmConfigCallback = (error: (Error|null), response?: google.cloud.kms.v1.EkmConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.EkmService|verifyConnectivity}.
                     * @param error Error, if any
                     * @param [response] VerifyConnectivityResponse
                     */
                    type VerifyConnectivityCallback = (error: (Error|null), response?: google.cloud.kms.v1.VerifyConnectivityResponse) => void;
                }

                /** Properties of a ListEkmConnectionsRequest. */
                interface IListEkmConnectionsRequest {

                    /** ListEkmConnectionsRequest parent */
                    parent?: (string|null);

                    /** ListEkmConnectionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListEkmConnectionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListEkmConnectionsRequest filter */
                    filter?: (string|null);

                    /** ListEkmConnectionsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListEkmConnectionsRequest. */
                class ListEkmConnectionsRequest implements IListEkmConnectionsRequest {

                    /**
                     * Constructs a new ListEkmConnectionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IListEkmConnectionsRequest);

                    /** ListEkmConnectionsRequest parent. */
                    public parent: string;

                    /** ListEkmConnectionsRequest pageSize. */
                    public pageSize: number;

                    /** ListEkmConnectionsRequest pageToken. */
                    public pageToken: string;

                    /** ListEkmConnectionsRequest filter. */
                    public filter: string;

                    /** ListEkmConnectionsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListEkmConnectionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEkmConnectionsRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IListEkmConnectionsRequest): google.cloud.kms.v1.ListEkmConnectionsRequest;

                    /**
                     * Encodes the specified ListEkmConnectionsRequest message. Does not implicitly {@link google.cloud.kms.v1.ListEkmConnectionsRequest.verify|verify} messages.
                     * @param message ListEkmConnectionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IListEkmConnectionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEkmConnectionsRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.ListEkmConnectionsRequest.verify|verify} messages.
                     * @param message ListEkmConnectionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IListEkmConnectionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEkmConnectionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEkmConnectionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.ListEkmConnectionsRequest;

                    /**
                     * Decodes a ListEkmConnectionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEkmConnectionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.ListEkmConnectionsRequest;

                    /**
                     * Verifies a ListEkmConnectionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEkmConnectionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEkmConnectionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.ListEkmConnectionsRequest;

                    /**
                     * Creates a plain object from a ListEkmConnectionsRequest message. Also converts values to other types if specified.
                     * @param message ListEkmConnectionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.ListEkmConnectionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEkmConnectionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEkmConnectionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListEkmConnectionsResponse. */
                interface IListEkmConnectionsResponse {

                    /** ListEkmConnectionsResponse ekmConnections */
                    ekmConnections?: (google.cloud.kms.v1.IEkmConnection[]|null);

                    /** ListEkmConnectionsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListEkmConnectionsResponse totalSize */
                    totalSize?: (number|null);
                }

                /** Represents a ListEkmConnectionsResponse. */
                class ListEkmConnectionsResponse implements IListEkmConnectionsResponse {

                    /**
                     * Constructs a new ListEkmConnectionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IListEkmConnectionsResponse);

                    /** ListEkmConnectionsResponse ekmConnections. */
                    public ekmConnections: google.cloud.kms.v1.IEkmConnection[];

                    /** ListEkmConnectionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListEkmConnectionsResponse totalSize. */
                    public totalSize: number;

                    /**
                     * Creates a new ListEkmConnectionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEkmConnectionsResponse instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IListEkmConnectionsResponse): google.cloud.kms.v1.ListEkmConnectionsResponse;

                    /**
                     * Encodes the specified ListEkmConnectionsResponse message. Does not implicitly {@link google.cloud.kms.v1.ListEkmConnectionsResponse.verify|verify} messages.
                     * @param message ListEkmConnectionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IListEkmConnectionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEkmConnectionsResponse message, length delimited. Does not implicitly {@link google.cloud.kms.v1.ListEkmConnectionsResponse.verify|verify} messages.
                     * @param message ListEkmConnectionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IListEkmConnectionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEkmConnectionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEkmConnectionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.ListEkmConnectionsResponse;

                    /**
                     * Decodes a ListEkmConnectionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEkmConnectionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.ListEkmConnectionsResponse;

                    /**
                     * Verifies a ListEkmConnectionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEkmConnectionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEkmConnectionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.ListEkmConnectionsResponse;

                    /**
                     * Creates a plain object from a ListEkmConnectionsResponse message. Also converts values to other types if specified.
                     * @param message ListEkmConnectionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.ListEkmConnectionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEkmConnectionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEkmConnectionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetEkmConnectionRequest. */
                interface IGetEkmConnectionRequest {

                    /** GetEkmConnectionRequest name */
                    name?: (string|null);
                }

                /** Represents a GetEkmConnectionRequest. */
                class GetEkmConnectionRequest implements IGetEkmConnectionRequest {

                    /**
                     * Constructs a new GetEkmConnectionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IGetEkmConnectionRequest);

                    /** GetEkmConnectionRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetEkmConnectionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetEkmConnectionRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IGetEkmConnectionRequest): google.cloud.kms.v1.GetEkmConnectionRequest;

                    /**
                     * Encodes the specified GetEkmConnectionRequest message. Does not implicitly {@link google.cloud.kms.v1.GetEkmConnectionRequest.verify|verify} messages.
                     * @param message GetEkmConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IGetEkmConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetEkmConnectionRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.GetEkmConnectionRequest.verify|verify} messages.
                     * @param message GetEkmConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IGetEkmConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetEkmConnectionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetEkmConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.GetEkmConnectionRequest;

                    /**
                     * Decodes a GetEkmConnectionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetEkmConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.GetEkmConnectionRequest;

                    /**
                     * Verifies a GetEkmConnectionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetEkmConnectionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetEkmConnectionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.GetEkmConnectionRequest;

                    /**
                     * Creates a plain object from a GetEkmConnectionRequest message. Also converts values to other types if specified.
                     * @param message GetEkmConnectionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.GetEkmConnectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetEkmConnectionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetEkmConnectionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateEkmConnectionRequest. */
                interface ICreateEkmConnectionRequest {

                    /** CreateEkmConnectionRequest parent */
                    parent?: (string|null);

                    /** CreateEkmConnectionRequest ekmConnectionId */
                    ekmConnectionId?: (string|null);

                    /** CreateEkmConnectionRequest ekmConnection */
                    ekmConnection?: (google.cloud.kms.v1.IEkmConnection|null);
                }

                /** Represents a CreateEkmConnectionRequest. */
                class CreateEkmConnectionRequest implements ICreateEkmConnectionRequest {

                    /**
                     * Constructs a new CreateEkmConnectionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.ICreateEkmConnectionRequest);

                    /** CreateEkmConnectionRequest parent. */
                    public parent: string;

                    /** CreateEkmConnectionRequest ekmConnectionId. */
                    public ekmConnectionId: string;

                    /** CreateEkmConnectionRequest ekmConnection. */
                    public ekmConnection?: (google.cloud.kms.v1.IEkmConnection|null);

                    /**
                     * Creates a new CreateEkmConnectionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateEkmConnectionRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.ICreateEkmConnectionRequest): google.cloud.kms.v1.CreateEkmConnectionRequest;

                    /**
                     * Encodes the specified CreateEkmConnectionRequest message. Does not implicitly {@link google.cloud.kms.v1.CreateEkmConnectionRequest.verify|verify} messages.
                     * @param message CreateEkmConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.ICreateEkmConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateEkmConnectionRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.CreateEkmConnectionRequest.verify|verify} messages.
                     * @param message CreateEkmConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.ICreateEkmConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateEkmConnectionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateEkmConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.CreateEkmConnectionRequest;

                    /**
                     * Decodes a CreateEkmConnectionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateEkmConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.CreateEkmConnectionRequest;

                    /**
                     * Verifies a CreateEkmConnectionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateEkmConnectionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateEkmConnectionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.CreateEkmConnectionRequest;

                    /**
                     * Creates a plain object from a CreateEkmConnectionRequest message. Also converts values to other types if specified.
                     * @param message CreateEkmConnectionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.CreateEkmConnectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateEkmConnectionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateEkmConnectionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateEkmConnectionRequest. */
                interface IUpdateEkmConnectionRequest {

                    /** UpdateEkmConnectionRequest ekmConnection */
                    ekmConnection?: (google.cloud.kms.v1.IEkmConnection|null);

                    /** UpdateEkmConnectionRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateEkmConnectionRequest. */
                class UpdateEkmConnectionRequest implements IUpdateEkmConnectionRequest {

                    /**
                     * Constructs a new UpdateEkmConnectionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IUpdateEkmConnectionRequest);

                    /** UpdateEkmConnectionRequest ekmConnection. */
                    public ekmConnection?: (google.cloud.kms.v1.IEkmConnection|null);

                    /** UpdateEkmConnectionRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateEkmConnectionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateEkmConnectionRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IUpdateEkmConnectionRequest): google.cloud.kms.v1.UpdateEkmConnectionRequest;

                    /**
                     * Encodes the specified UpdateEkmConnectionRequest message. Does not implicitly {@link google.cloud.kms.v1.UpdateEkmConnectionRequest.verify|verify} messages.
                     * @param message UpdateEkmConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IUpdateEkmConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateEkmConnectionRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.UpdateEkmConnectionRequest.verify|verify} messages.
                     * @param message UpdateEkmConnectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IUpdateEkmConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateEkmConnectionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateEkmConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.UpdateEkmConnectionRequest;

                    /**
                     * Decodes an UpdateEkmConnectionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateEkmConnectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.UpdateEkmConnectionRequest;

                    /**
                     * Verifies an UpdateEkmConnectionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateEkmConnectionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateEkmConnectionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.UpdateEkmConnectionRequest;

                    /**
                     * Creates a plain object from an UpdateEkmConnectionRequest message. Also converts values to other types if specified.
                     * @param message UpdateEkmConnectionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.UpdateEkmConnectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateEkmConnectionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateEkmConnectionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetEkmConfigRequest. */
                interface IGetEkmConfigRequest {

                    /** GetEkmConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetEkmConfigRequest. */
                class GetEkmConfigRequest implements IGetEkmConfigRequest {

                    /**
                     * Constructs a new GetEkmConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IGetEkmConfigRequest);

                    /** GetEkmConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetEkmConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetEkmConfigRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IGetEkmConfigRequest): google.cloud.kms.v1.GetEkmConfigRequest;

                    /**
                     * Encodes the specified GetEkmConfigRequest message. Does not implicitly {@link google.cloud.kms.v1.GetEkmConfigRequest.verify|verify} messages.
                     * @param message GetEkmConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IGetEkmConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetEkmConfigRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.GetEkmConfigRequest.verify|verify} messages.
                     * @param message GetEkmConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IGetEkmConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetEkmConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetEkmConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.GetEkmConfigRequest;

                    /**
                     * Decodes a GetEkmConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetEkmConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.GetEkmConfigRequest;

                    /**
                     * Verifies a GetEkmConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetEkmConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetEkmConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.GetEkmConfigRequest;

                    /**
                     * Creates a plain object from a GetEkmConfigRequest message. Also converts values to other types if specified.
                     * @param message GetEkmConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.GetEkmConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetEkmConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetEkmConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateEkmConfigRequest. */
                interface IUpdateEkmConfigRequest {

                    /** UpdateEkmConfigRequest ekmConfig */
                    ekmConfig?: (google.cloud.kms.v1.IEkmConfig|null);

                    /** UpdateEkmConfigRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateEkmConfigRequest. */
                class UpdateEkmConfigRequest implements IUpdateEkmConfigRequest {

                    /**
                     * Constructs a new UpdateEkmConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IUpdateEkmConfigRequest);

                    /** UpdateEkmConfigRequest ekmConfig. */
                    public ekmConfig?: (google.cloud.kms.v1.IEkmConfig|null);

                    /** UpdateEkmConfigRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateEkmConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateEkmConfigRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IUpdateEkmConfigRequest): google.cloud.kms.v1.UpdateEkmConfigRequest;

                    /**
                     * Encodes the specified UpdateEkmConfigRequest message. Does not implicitly {@link google.cloud.kms.v1.UpdateEkmConfigRequest.verify|verify} messages.
                     * @param message UpdateEkmConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IUpdateEkmConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateEkmConfigRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.UpdateEkmConfigRequest.verify|verify} messages.
                     * @param message UpdateEkmConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IUpdateEkmConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateEkmConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateEkmConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.UpdateEkmConfigRequest;

                    /**
                     * Decodes an UpdateEkmConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateEkmConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.UpdateEkmConfigRequest;

                    /**
                     * Verifies an UpdateEkmConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateEkmConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateEkmConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.UpdateEkmConfigRequest;

                    /**
                     * Creates a plain object from an UpdateEkmConfigRequest message. Also converts values to other types if specified.
                     * @param message UpdateEkmConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.UpdateEkmConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateEkmConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateEkmConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Certificate. */
                interface ICertificate {

                    /** Certificate rawDer */
                    rawDer?: (Uint8Array|Buffer|string|null);

                    /** Certificate parsed */
                    parsed?: (boolean|null);

                    /** Certificate issuer */
                    issuer?: (string|null);

                    /** Certificate subject */
                    subject?: (string|null);

                    /** Certificate subjectAlternativeDnsNames */
                    subjectAlternativeDnsNames?: (string[]|null);

                    /** Certificate notBeforeTime */
                    notBeforeTime?: (google.protobuf.ITimestamp|null);

                    /** Certificate notAfterTime */
                    notAfterTime?: (google.protobuf.ITimestamp|null);

                    /** Certificate serialNumber */
                    serialNumber?: (string|null);

                    /** Certificate sha256Fingerprint */
                    sha256Fingerprint?: (string|null);
                }

                /** Represents a Certificate. */
                class Certificate implements ICertificate {

                    /**
                     * Constructs a new Certificate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.ICertificate);

                    /** Certificate rawDer. */
                    public rawDer: (Uint8Array|Buffer|string);

                    /** Certificate parsed. */
                    public parsed: boolean;

                    /** Certificate issuer. */
                    public issuer: string;

                    /** Certificate subject. */
                    public subject: string;

                    /** Certificate subjectAlternativeDnsNames. */
                    public subjectAlternativeDnsNames: string[];

                    /** Certificate notBeforeTime. */
                    public notBeforeTime?: (google.protobuf.ITimestamp|null);

                    /** Certificate notAfterTime. */
                    public notAfterTime?: (google.protobuf.ITimestamp|null);

                    /** Certificate serialNumber. */
                    public serialNumber: string;

                    /** Certificate sha256Fingerprint. */
                    public sha256Fingerprint: string;

                    /**
                     * Creates a new Certificate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Certificate instance
                     */
                    public static create(properties?: google.cloud.kms.v1.ICertificate): google.cloud.kms.v1.Certificate;

                    /**
                     * Encodes the specified Certificate message. Does not implicitly {@link google.cloud.kms.v1.Certificate.verify|verify} messages.
                     * @param message Certificate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.ICertificate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Certificate message, length delimited. Does not implicitly {@link google.cloud.kms.v1.Certificate.verify|verify} messages.
                     * @param message Certificate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.ICertificate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Certificate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Certificate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.Certificate;

                    /**
                     * Decodes a Certificate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Certificate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.Certificate;

                    /**
                     * Verifies a Certificate message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Certificate message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Certificate
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.Certificate;

                    /**
                     * Creates a plain object from a Certificate message. Also converts values to other types if specified.
                     * @param message Certificate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.Certificate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Certificate to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Certificate
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EkmConnection. */
                interface IEkmConnection {

                    /** EkmConnection name */
                    name?: (string|null);

                    /** EkmConnection createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** EkmConnection serviceResolvers */
                    serviceResolvers?: (google.cloud.kms.v1.EkmConnection.IServiceResolver[]|null);

                    /** EkmConnection etag */
                    etag?: (string|null);

                    /** EkmConnection keyManagementMode */
                    keyManagementMode?: (google.cloud.kms.v1.EkmConnection.KeyManagementMode|keyof typeof google.cloud.kms.v1.EkmConnection.KeyManagementMode|null);

                    /** EkmConnection cryptoSpacePath */
                    cryptoSpacePath?: (string|null);
                }

                /** Represents an EkmConnection. */
                class EkmConnection implements IEkmConnection {

                    /**
                     * Constructs a new EkmConnection.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IEkmConnection);

                    /** EkmConnection name. */
                    public name: string;

                    /** EkmConnection createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** EkmConnection serviceResolvers. */
                    public serviceResolvers: google.cloud.kms.v1.EkmConnection.IServiceResolver[];

                    /** EkmConnection etag. */
                    public etag: string;

                    /** EkmConnection keyManagementMode. */
                    public keyManagementMode: (google.cloud.kms.v1.EkmConnection.KeyManagementMode|keyof typeof google.cloud.kms.v1.EkmConnection.KeyManagementMode);

                    /** EkmConnection cryptoSpacePath. */
                    public cryptoSpacePath: string;

                    /**
                     * Creates a new EkmConnection instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EkmConnection instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IEkmConnection): google.cloud.kms.v1.EkmConnection;

                    /**
                     * Encodes the specified EkmConnection message. Does not implicitly {@link google.cloud.kms.v1.EkmConnection.verify|verify} messages.
                     * @param message EkmConnection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IEkmConnection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EkmConnection message, length delimited. Does not implicitly {@link google.cloud.kms.v1.EkmConnection.verify|verify} messages.
                     * @param message EkmConnection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IEkmConnection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EkmConnection message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EkmConnection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.EkmConnection;

                    /**
                     * Decodes an EkmConnection message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EkmConnection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.EkmConnection;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.EkmConnection;

                    /**
                     * Creates a plain object from an EkmConnection message. Also converts values to other types if specified.
                     * @param message EkmConnection
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.EkmConnection, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of a ServiceResolver. */
                    interface IServiceResolver {

                        /** ServiceResolver serviceDirectoryService */
                        serviceDirectoryService?: (string|null);

                        /** ServiceResolver endpointFilter */
                        endpointFilter?: (string|null);

                        /** ServiceResolver hostname */
                        hostname?: (string|null);

                        /** ServiceResolver serverCertificates */
                        serverCertificates?: (google.cloud.kms.v1.ICertificate[]|null);
                    }

                    /** Represents a ServiceResolver. */
                    class ServiceResolver implements IServiceResolver {

                        /**
                         * Constructs a new ServiceResolver.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.kms.v1.EkmConnection.IServiceResolver);

                        /** ServiceResolver serviceDirectoryService. */
                        public serviceDirectoryService: string;

                        /** ServiceResolver endpointFilter. */
                        public endpointFilter: string;

                        /** ServiceResolver hostname. */
                        public hostname: string;

                        /** ServiceResolver serverCertificates. */
                        public serverCertificates: google.cloud.kms.v1.ICertificate[];

                        /**
                         * Creates a new ServiceResolver instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ServiceResolver instance
                         */
                        public static create(properties?: google.cloud.kms.v1.EkmConnection.IServiceResolver): google.cloud.kms.v1.EkmConnection.ServiceResolver;

                        /**
                         * Encodes the specified ServiceResolver message. Does not implicitly {@link google.cloud.kms.v1.EkmConnection.ServiceResolver.verify|verify} messages.
                         * @param message ServiceResolver message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.kms.v1.EkmConnection.IServiceResolver, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ServiceResolver message, length delimited. Does not implicitly {@link google.cloud.kms.v1.EkmConnection.ServiceResolver.verify|verify} messages.
                         * @param message ServiceResolver message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.kms.v1.EkmConnection.IServiceResolver, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ServiceResolver message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ServiceResolver
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.EkmConnection.ServiceResolver;

                        /**
                         * Decodes a ServiceResolver message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ServiceResolver
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.EkmConnection.ServiceResolver;

                        /**
                         * Verifies a ServiceResolver message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ServiceResolver message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ServiceResolver
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.EkmConnection.ServiceResolver;

                        /**
                         * Creates a plain object from a ServiceResolver message. Also converts values to other types if specified.
                         * @param message ServiceResolver
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.kms.v1.EkmConnection.ServiceResolver, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ServiceResolver to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ServiceResolver
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** KeyManagementMode enum. */
                    enum KeyManagementMode {
                        KEY_MANAGEMENT_MODE_UNSPECIFIED = 0,
                        MANUAL = 1,
                        CLOUD_KMS = 2
                    }
                }

                /** Properties of an EkmConfig. */
                interface IEkmConfig {

                    /** EkmConfig name */
                    name?: (string|null);

                    /** EkmConfig defaultEkmConnection */
                    defaultEkmConnection?: (string|null);
                }

                /** Represents an EkmConfig. */
                class EkmConfig implements IEkmConfig {

                    /**
                     * Constructs a new EkmConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IEkmConfig);

                    /** EkmConfig name. */
                    public name: string;

                    /** EkmConfig defaultEkmConnection. */
                    public defaultEkmConnection: string;

                    /**
                     * Creates a new EkmConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EkmConfig instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IEkmConfig): google.cloud.kms.v1.EkmConfig;

                    /**
                     * Encodes the specified EkmConfig message. Does not implicitly {@link google.cloud.kms.v1.EkmConfig.verify|verify} messages.
                     * @param message EkmConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IEkmConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EkmConfig message, length delimited. Does not implicitly {@link google.cloud.kms.v1.EkmConfig.verify|verify} messages.
                     * @param message EkmConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IEkmConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EkmConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EkmConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.EkmConfig;

                    /**
                     * Decodes an EkmConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EkmConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.EkmConfig;

                    /**
                     * Verifies an EkmConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EkmConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EkmConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.EkmConfig;

                    /**
                     * Creates a plain object from an EkmConfig message. Also converts values to other types if specified.
                     * @param message EkmConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.EkmConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EkmConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EkmConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a VerifyConnectivityRequest. */
                interface IVerifyConnectivityRequest {

                    /** VerifyConnectivityRequest name */
                    name?: (string|null);
                }

                /** Represents a VerifyConnectivityRequest. */
                class VerifyConnectivityRequest implements IVerifyConnectivityRequest {

                    /**
                     * Constructs a new VerifyConnectivityRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IVerifyConnectivityRequest);

                    /** VerifyConnectivityRequest name. */
                    public name: string;

                    /**
                     * Creates a new VerifyConnectivityRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VerifyConnectivityRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IVerifyConnectivityRequest): google.cloud.kms.v1.VerifyConnectivityRequest;

                    /**
                     * Encodes the specified VerifyConnectivityRequest message. Does not implicitly {@link google.cloud.kms.v1.VerifyConnectivityRequest.verify|verify} messages.
                     * @param message VerifyConnectivityRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IVerifyConnectivityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VerifyConnectivityRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.VerifyConnectivityRequest.verify|verify} messages.
                     * @param message VerifyConnectivityRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IVerifyConnectivityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VerifyConnectivityRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VerifyConnectivityRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.VerifyConnectivityRequest;

                    /**
                     * Decodes a VerifyConnectivityRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VerifyConnectivityRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.VerifyConnectivityRequest;

                    /**
                     * Verifies a VerifyConnectivityRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VerifyConnectivityRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VerifyConnectivityRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.VerifyConnectivityRequest;

                    /**
                     * Creates a plain object from a VerifyConnectivityRequest message. Also converts values to other types if specified.
                     * @param message VerifyConnectivityRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.VerifyConnectivityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VerifyConnectivityRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VerifyConnectivityRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a VerifyConnectivityResponse. */
                interface IVerifyConnectivityResponse {
                }

                /** Represents a VerifyConnectivityResponse. */
                class VerifyConnectivityResponse implements IVerifyConnectivityResponse {

                    /**
                     * Constructs a new VerifyConnectivityResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IVerifyConnectivityResponse);

                    /**
                     * Creates a new VerifyConnectivityResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VerifyConnectivityResponse instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IVerifyConnectivityResponse): google.cloud.kms.v1.VerifyConnectivityResponse;

                    /**
                     * Encodes the specified VerifyConnectivityResponse message. Does not implicitly {@link google.cloud.kms.v1.VerifyConnectivityResponse.verify|verify} messages.
                     * @param message VerifyConnectivityResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IVerifyConnectivityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VerifyConnectivityResponse message, length delimited. Does not implicitly {@link google.cloud.kms.v1.VerifyConnectivityResponse.verify|verify} messages.
                     * @param message VerifyConnectivityResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IVerifyConnectivityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VerifyConnectivityResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VerifyConnectivityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.VerifyConnectivityResponse;

                    /**
                     * Decodes a VerifyConnectivityResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VerifyConnectivityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.VerifyConnectivityResponse;

                    /**
                     * Verifies a VerifyConnectivityResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VerifyConnectivityResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VerifyConnectivityResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.VerifyConnectivityResponse;

                    /**
                     * Creates a plain object from a VerifyConnectivityResponse message. Also converts values to other types if specified.
                     * @param message VerifyConnectivityResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.VerifyConnectivityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VerifyConnectivityResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VerifyConnectivityResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a KeyRing. */
                interface IKeyRing {

                    /** KeyRing name */
                    name?: (string|null);

                    /** KeyRing createTime */
                    createTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a KeyRing. */
                class KeyRing implements IKeyRing {

                    /**
                     * Constructs a new KeyRing.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IKeyRing);

                    /** KeyRing name. */
                    public name: string;

                    /** KeyRing createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new KeyRing instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns KeyRing instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IKeyRing): google.cloud.kms.v1.KeyRing;

                    /**
                     * Encodes the specified KeyRing message. Does not implicitly {@link google.cloud.kms.v1.KeyRing.verify|verify} messages.
                     * @param message KeyRing message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IKeyRing, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified KeyRing message, length delimited. Does not implicitly {@link google.cloud.kms.v1.KeyRing.verify|verify} messages.
                     * @param message KeyRing message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IKeyRing, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a KeyRing message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns KeyRing
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.KeyRing;

                    /**
                     * Decodes a KeyRing message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns KeyRing
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.KeyRing;

                    /**
                     * Verifies a KeyRing message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a KeyRing message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns KeyRing
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.KeyRing;

                    /**
                     * Creates a plain object from a KeyRing message. Also converts values to other types if specified.
                     * @param message KeyRing
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.KeyRing, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this KeyRing to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for KeyRing
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CryptoKey. */
                interface ICryptoKey {

                    /** CryptoKey name */
                    name?: (string|null);

                    /** CryptoKey primary */
                    primary?: (google.cloud.kms.v1.ICryptoKeyVersion|null);

                    /** CryptoKey purpose */
                    purpose?: (google.cloud.kms.v1.CryptoKey.CryptoKeyPurpose|keyof typeof google.cloud.kms.v1.CryptoKey.CryptoKeyPurpose|null);

                    /** CryptoKey createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** CryptoKey nextRotationTime */
                    nextRotationTime?: (google.protobuf.ITimestamp|null);

                    /** CryptoKey rotationPeriod */
                    rotationPeriod?: (google.protobuf.IDuration|null);

                    /** CryptoKey versionTemplate */
                    versionTemplate?: (google.cloud.kms.v1.ICryptoKeyVersionTemplate|null);

                    /** CryptoKey labels */
                    labels?: ({ [k: string]: string }|null);

                    /** CryptoKey importOnly */
                    importOnly?: (boolean|null);

                    /** CryptoKey destroyScheduledDuration */
                    destroyScheduledDuration?: (google.protobuf.IDuration|null);

                    /** CryptoKey cryptoKeyBackend */
                    cryptoKeyBackend?: (string|null);

                    /** CryptoKey keyAccessJustificationsPolicy */
                    keyAccessJustificationsPolicy?: (google.cloud.kms.v1.IKeyAccessJustificationsPolicy|null);
                }

                /** Represents a CryptoKey. */
                class CryptoKey implements ICryptoKey {

                    /**
                     * Constructs a new CryptoKey.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.ICryptoKey);

                    /** CryptoKey name. */
                    public name: string;

                    /** CryptoKey primary. */
                    public primary?: (google.cloud.kms.v1.ICryptoKeyVersion|null);

                    /** CryptoKey purpose. */
                    public purpose: (google.cloud.kms.v1.CryptoKey.CryptoKeyPurpose|keyof typeof google.cloud.kms.v1.CryptoKey.CryptoKeyPurpose);

                    /** CryptoKey createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** CryptoKey nextRotationTime. */
                    public nextRotationTime?: (google.protobuf.ITimestamp|null);

                    /** CryptoKey rotationPeriod. */
                    public rotationPeriod?: (google.protobuf.IDuration|null);

                    /** CryptoKey versionTemplate. */
                    public versionTemplate?: (google.cloud.kms.v1.ICryptoKeyVersionTemplate|null);

                    /** CryptoKey labels. */
                    public labels: { [k: string]: string };

                    /** CryptoKey importOnly. */
                    public importOnly: boolean;

                    /** CryptoKey destroyScheduledDuration. */
                    public destroyScheduledDuration?: (google.protobuf.IDuration|null);

                    /** CryptoKey cryptoKeyBackend. */
                    public cryptoKeyBackend: string;

                    /** CryptoKey keyAccessJustificationsPolicy. */
                    public keyAccessJustificationsPolicy?: (google.cloud.kms.v1.IKeyAccessJustificationsPolicy|null);

                    /** CryptoKey rotationSchedule. */
                    public rotationSchedule?: "rotationPeriod";

                    /**
                     * Creates a new CryptoKey instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CryptoKey instance
                     */
                    public static create(properties?: google.cloud.kms.v1.ICryptoKey): google.cloud.kms.v1.CryptoKey;

                    /**
                     * Encodes the specified CryptoKey message. Does not implicitly {@link google.cloud.kms.v1.CryptoKey.verify|verify} messages.
                     * @param message CryptoKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.ICryptoKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CryptoKey message, length delimited. Does not implicitly {@link google.cloud.kms.v1.CryptoKey.verify|verify} messages.
                     * @param message CryptoKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.ICryptoKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CryptoKey message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CryptoKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.CryptoKey;

                    /**
                     * Decodes a CryptoKey message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CryptoKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.CryptoKey;

                    /**
                     * Verifies a CryptoKey message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CryptoKey message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CryptoKey
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.CryptoKey;

                    /**
                     * Creates a plain object from a CryptoKey message. Also converts values to other types if specified.
                     * @param message CryptoKey
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.CryptoKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CryptoKey to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CryptoKey
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CryptoKey {

                    /** CryptoKeyPurpose enum. */
                    enum CryptoKeyPurpose {
                        CRYPTO_KEY_PURPOSE_UNSPECIFIED = 0,
                        ENCRYPT_DECRYPT = 1,
                        ASYMMETRIC_SIGN = 5,
                        ASYMMETRIC_DECRYPT = 6,
                        RAW_ENCRYPT_DECRYPT = 7,
                        MAC = 9,
                        KEY_ENCAPSULATION = 10
                    }
                }

                /** Properties of a CryptoKeyVersionTemplate. */
                interface ICryptoKeyVersionTemplate {

                    /** CryptoKeyVersionTemplate protectionLevel */
                    protectionLevel?: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel|null);

                    /** CryptoKeyVersionTemplate algorithm */
                    algorithm?: (google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm|keyof typeof google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm|null);
                }

                /** Represents a CryptoKeyVersionTemplate. */
                class CryptoKeyVersionTemplate implements ICryptoKeyVersionTemplate {

                    /**
                     * Constructs a new CryptoKeyVersionTemplate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.ICryptoKeyVersionTemplate);

                    /** CryptoKeyVersionTemplate protectionLevel. */
                    public protectionLevel: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel);

                    /** CryptoKeyVersionTemplate algorithm. */
                    public algorithm: (google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm|keyof typeof google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm);

                    /**
                     * Creates a new CryptoKeyVersionTemplate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CryptoKeyVersionTemplate instance
                     */
                    public static create(properties?: google.cloud.kms.v1.ICryptoKeyVersionTemplate): google.cloud.kms.v1.CryptoKeyVersionTemplate;

                    /**
                     * Encodes the specified CryptoKeyVersionTemplate message. Does not implicitly {@link google.cloud.kms.v1.CryptoKeyVersionTemplate.verify|verify} messages.
                     * @param message CryptoKeyVersionTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.ICryptoKeyVersionTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CryptoKeyVersionTemplate message, length delimited. Does not implicitly {@link google.cloud.kms.v1.CryptoKeyVersionTemplate.verify|verify} messages.
                     * @param message CryptoKeyVersionTemplate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.ICryptoKeyVersionTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CryptoKeyVersionTemplate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CryptoKeyVersionTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.CryptoKeyVersionTemplate;

                    /**
                     * Decodes a CryptoKeyVersionTemplate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CryptoKeyVersionTemplate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.CryptoKeyVersionTemplate;

                    /**
                     * Verifies a CryptoKeyVersionTemplate message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CryptoKeyVersionTemplate message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CryptoKeyVersionTemplate
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.CryptoKeyVersionTemplate;

                    /**
                     * Creates a plain object from a CryptoKeyVersionTemplate message. Also converts values to other types if specified.
                     * @param message CryptoKeyVersionTemplate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.CryptoKeyVersionTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CryptoKeyVersionTemplate to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CryptoKeyVersionTemplate
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a KeyOperationAttestation. */
                interface IKeyOperationAttestation {

                    /** KeyOperationAttestation format */
                    format?: (google.cloud.kms.v1.KeyOperationAttestation.AttestationFormat|keyof typeof google.cloud.kms.v1.KeyOperationAttestation.AttestationFormat|null);

                    /** KeyOperationAttestation content */
                    content?: (Uint8Array|Buffer|string|null);

                    /** KeyOperationAttestation certChains */
                    certChains?: (google.cloud.kms.v1.KeyOperationAttestation.ICertificateChains|null);
                }

                /** Represents a KeyOperationAttestation. */
                class KeyOperationAttestation implements IKeyOperationAttestation {

                    /**
                     * Constructs a new KeyOperationAttestation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IKeyOperationAttestation);

                    /** KeyOperationAttestation format. */
                    public format: (google.cloud.kms.v1.KeyOperationAttestation.AttestationFormat|keyof typeof google.cloud.kms.v1.KeyOperationAttestation.AttestationFormat);

                    /** KeyOperationAttestation content. */
                    public content: (Uint8Array|Buffer|string);

                    /** KeyOperationAttestation certChains. */
                    public certChains?: (google.cloud.kms.v1.KeyOperationAttestation.ICertificateChains|null);

                    /**
                     * Creates a new KeyOperationAttestation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns KeyOperationAttestation instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IKeyOperationAttestation): google.cloud.kms.v1.KeyOperationAttestation;

                    /**
                     * Encodes the specified KeyOperationAttestation message. Does not implicitly {@link google.cloud.kms.v1.KeyOperationAttestation.verify|verify} messages.
                     * @param message KeyOperationAttestation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IKeyOperationAttestation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified KeyOperationAttestation message, length delimited. Does not implicitly {@link google.cloud.kms.v1.KeyOperationAttestation.verify|verify} messages.
                     * @param message KeyOperationAttestation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IKeyOperationAttestation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a KeyOperationAttestation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns KeyOperationAttestation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.KeyOperationAttestation;

                    /**
                     * Decodes a KeyOperationAttestation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns KeyOperationAttestation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.KeyOperationAttestation;

                    /**
                     * Verifies a KeyOperationAttestation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a KeyOperationAttestation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns KeyOperationAttestation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.KeyOperationAttestation;

                    /**
                     * Creates a plain object from a KeyOperationAttestation message. Also converts values to other types if specified.
                     * @param message KeyOperationAttestation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.KeyOperationAttestation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this KeyOperationAttestation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for KeyOperationAttestation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace KeyOperationAttestation {

                    /** AttestationFormat enum. */
                    enum AttestationFormat {
                        ATTESTATION_FORMAT_UNSPECIFIED = 0,
                        CAVIUM_V1_COMPRESSED = 3,
                        CAVIUM_V2_COMPRESSED = 4
                    }

                    /** Properties of a CertificateChains. */
                    interface ICertificateChains {

                        /** CertificateChains caviumCerts */
                        caviumCerts?: (string[]|null);

                        /** CertificateChains googleCardCerts */
                        googleCardCerts?: (string[]|null);

                        /** CertificateChains googlePartitionCerts */
                        googlePartitionCerts?: (string[]|null);
                    }

                    /** Represents a CertificateChains. */
                    class CertificateChains implements ICertificateChains {

                        /**
                         * Constructs a new CertificateChains.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.kms.v1.KeyOperationAttestation.ICertificateChains);

                        /** CertificateChains caviumCerts. */
                        public caviumCerts: string[];

                        /** CertificateChains googleCardCerts. */
                        public googleCardCerts: string[];

                        /** CertificateChains googlePartitionCerts. */
                        public googlePartitionCerts: string[];

                        /**
                         * Creates a new CertificateChains instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CertificateChains instance
                         */
                        public static create(properties?: google.cloud.kms.v1.KeyOperationAttestation.ICertificateChains): google.cloud.kms.v1.KeyOperationAttestation.CertificateChains;

                        /**
                         * Encodes the specified CertificateChains message. Does not implicitly {@link google.cloud.kms.v1.KeyOperationAttestation.CertificateChains.verify|verify} messages.
                         * @param message CertificateChains message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.kms.v1.KeyOperationAttestation.ICertificateChains, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CertificateChains message, length delimited. Does not implicitly {@link google.cloud.kms.v1.KeyOperationAttestation.CertificateChains.verify|verify} messages.
                         * @param message CertificateChains message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.kms.v1.KeyOperationAttestation.ICertificateChains, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CertificateChains message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CertificateChains
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.KeyOperationAttestation.CertificateChains;

                        /**
                         * Decodes a CertificateChains message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CertificateChains
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.KeyOperationAttestation.CertificateChains;

                        /**
                         * Verifies a CertificateChains message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CertificateChains message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CertificateChains
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.KeyOperationAttestation.CertificateChains;

                        /**
                         * Creates a plain object from a CertificateChains message. Also converts values to other types if specified.
                         * @param message CertificateChains
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.kms.v1.KeyOperationAttestation.CertificateChains, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CertificateChains to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CertificateChains
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a CryptoKeyVersion. */
                interface ICryptoKeyVersion {

                    /** CryptoKeyVersion name */
                    name?: (string|null);

                    /** CryptoKeyVersion state */
                    state?: (google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionState|keyof typeof google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionState|null);

                    /** CryptoKeyVersion protectionLevel */
                    protectionLevel?: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel|null);

                    /** CryptoKeyVersion algorithm */
                    algorithm?: (google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm|keyof typeof google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm|null);

                    /** CryptoKeyVersion attestation */
                    attestation?: (google.cloud.kms.v1.IKeyOperationAttestation|null);

                    /** CryptoKeyVersion createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** CryptoKeyVersion generateTime */
                    generateTime?: (google.protobuf.ITimestamp|null);

                    /** CryptoKeyVersion destroyTime */
                    destroyTime?: (google.protobuf.ITimestamp|null);

                    /** CryptoKeyVersion destroyEventTime */
                    destroyEventTime?: (google.protobuf.ITimestamp|null);

                    /** CryptoKeyVersion importJob */
                    importJob?: (string|null);

                    /** CryptoKeyVersion importTime */
                    importTime?: (google.protobuf.ITimestamp|null);

                    /** CryptoKeyVersion importFailureReason */
                    importFailureReason?: (string|null);

                    /** CryptoKeyVersion generationFailureReason */
                    generationFailureReason?: (string|null);

                    /** CryptoKeyVersion externalDestructionFailureReason */
                    externalDestructionFailureReason?: (string|null);

                    /** CryptoKeyVersion externalProtectionLevelOptions */
                    externalProtectionLevelOptions?: (google.cloud.kms.v1.IExternalProtectionLevelOptions|null);

                    /** CryptoKeyVersion reimportEligible */
                    reimportEligible?: (boolean|null);
                }

                /** Represents a CryptoKeyVersion. */
                class CryptoKeyVersion implements ICryptoKeyVersion {

                    /**
                     * Constructs a new CryptoKeyVersion.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.ICryptoKeyVersion);

                    /** CryptoKeyVersion name. */
                    public name: string;

                    /** CryptoKeyVersion state. */
                    public state: (google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionState|keyof typeof google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionState);

                    /** CryptoKeyVersion protectionLevel. */
                    public protectionLevel: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel);

                    /** CryptoKeyVersion algorithm. */
                    public algorithm: (google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm|keyof typeof google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm);

                    /** CryptoKeyVersion attestation. */
                    public attestation?: (google.cloud.kms.v1.IKeyOperationAttestation|null);

                    /** CryptoKeyVersion createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** CryptoKeyVersion generateTime. */
                    public generateTime?: (google.protobuf.ITimestamp|null);

                    /** CryptoKeyVersion destroyTime. */
                    public destroyTime?: (google.protobuf.ITimestamp|null);

                    /** CryptoKeyVersion destroyEventTime. */
                    public destroyEventTime?: (google.protobuf.ITimestamp|null);

                    /** CryptoKeyVersion importJob. */
                    public importJob: string;

                    /** CryptoKeyVersion importTime. */
                    public importTime?: (google.protobuf.ITimestamp|null);

                    /** CryptoKeyVersion importFailureReason. */
                    public importFailureReason: string;

                    /** CryptoKeyVersion generationFailureReason. */
                    public generationFailureReason: string;

                    /** CryptoKeyVersion externalDestructionFailureReason. */
                    public externalDestructionFailureReason: string;

                    /** CryptoKeyVersion externalProtectionLevelOptions. */
                    public externalProtectionLevelOptions?: (google.cloud.kms.v1.IExternalProtectionLevelOptions|null);

                    /** CryptoKeyVersion reimportEligible. */
                    public reimportEligible: boolean;

                    /**
                     * Creates a new CryptoKeyVersion instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CryptoKeyVersion instance
                     */
                    public static create(properties?: google.cloud.kms.v1.ICryptoKeyVersion): google.cloud.kms.v1.CryptoKeyVersion;

                    /**
                     * Encodes the specified CryptoKeyVersion message. Does not implicitly {@link google.cloud.kms.v1.CryptoKeyVersion.verify|verify} messages.
                     * @param message CryptoKeyVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.ICryptoKeyVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CryptoKeyVersion message, length delimited. Does not implicitly {@link google.cloud.kms.v1.CryptoKeyVersion.verify|verify} messages.
                     * @param message CryptoKeyVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.ICryptoKeyVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CryptoKeyVersion message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CryptoKeyVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.CryptoKeyVersion;

                    /**
                     * Decodes a CryptoKeyVersion message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CryptoKeyVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.CryptoKeyVersion;

                    /**
                     * Verifies a CryptoKeyVersion message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CryptoKeyVersion message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CryptoKeyVersion
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.CryptoKeyVersion;

                    /**
                     * Creates a plain object from a CryptoKeyVersion message. Also converts values to other types if specified.
                     * @param message CryptoKeyVersion
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.CryptoKeyVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CryptoKeyVersion to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CryptoKeyVersion
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CryptoKeyVersion {

                    /** CryptoKeyVersionAlgorithm enum. */
                    enum CryptoKeyVersionAlgorithm {
                        CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED = 0,
                        GOOGLE_SYMMETRIC_ENCRYPTION = 1,
                        AES_128_GCM = 41,
                        AES_256_GCM = 19,
                        AES_128_CBC = 42,
                        AES_256_CBC = 43,
                        AES_128_CTR = 44,
                        AES_256_CTR = 45,
                        RSA_SIGN_PSS_2048_SHA256 = 2,
                        RSA_SIGN_PSS_3072_SHA256 = 3,
                        RSA_SIGN_PSS_4096_SHA256 = 4,
                        RSA_SIGN_PSS_4096_SHA512 = 15,
                        RSA_SIGN_PKCS1_2048_SHA256 = 5,
                        RSA_SIGN_PKCS1_3072_SHA256 = 6,
                        RSA_SIGN_PKCS1_4096_SHA256 = 7,
                        RSA_SIGN_PKCS1_4096_SHA512 = 16,
                        RSA_SIGN_RAW_PKCS1_2048 = 28,
                        RSA_SIGN_RAW_PKCS1_3072 = 29,
                        RSA_SIGN_RAW_PKCS1_4096 = 30,
                        RSA_DECRYPT_OAEP_2048_SHA256 = 8,
                        RSA_DECRYPT_OAEP_3072_SHA256 = 9,
                        RSA_DECRYPT_OAEP_4096_SHA256 = 10,
                        RSA_DECRYPT_OAEP_4096_SHA512 = 17,
                        RSA_DECRYPT_OAEP_2048_SHA1 = 37,
                        RSA_DECRYPT_OAEP_3072_SHA1 = 38,
                        RSA_DECRYPT_OAEP_4096_SHA1 = 39,
                        EC_SIGN_P256_SHA256 = 12,
                        EC_SIGN_P384_SHA384 = 13,
                        EC_SIGN_SECP256K1_SHA256 = 31,
                        EC_SIGN_ED25519 = 40,
                        HMAC_SHA256 = 32,
                        HMAC_SHA1 = 33,
                        HMAC_SHA384 = 34,
                        HMAC_SHA512 = 35,
                        HMAC_SHA224 = 36,
                        EXTERNAL_SYMMETRIC_ENCRYPTION = 18,
                        ML_KEM_768 = 47,
                        ML_KEM_1024 = 48,
                        KEM_XWING = 63,
                        PQ_SIGN_ML_DSA_65 = 56,
                        PQ_SIGN_SLH_DSA_SHA2_128S = 57
                    }

                    /** CryptoKeyVersionState enum. */
                    enum CryptoKeyVersionState {
                        CRYPTO_KEY_VERSION_STATE_UNSPECIFIED = 0,
                        PENDING_GENERATION = 5,
                        ENABLED = 1,
                        DISABLED = 2,
                        DESTROYED = 3,
                        DESTROY_SCHEDULED = 4,
                        PENDING_IMPORT = 6,
                        IMPORT_FAILED = 7,
                        GENERATION_FAILED = 8,
                        PENDING_EXTERNAL_DESTRUCTION = 9,
                        EXTERNAL_DESTRUCTION_FAILED = 10
                    }

                    /** CryptoKeyVersionView enum. */
                    enum CryptoKeyVersionView {
                        CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED = 0,
                        FULL = 1
                    }
                }

                /** Properties of a ChecksummedData. */
                interface IChecksummedData {

                    /** ChecksummedData data */
                    data?: (Uint8Array|Buffer|string|null);

                    /** ChecksummedData crc32cChecksum */
                    crc32cChecksum?: (google.protobuf.IInt64Value|null);
                }

                /** Represents a ChecksummedData. */
                class ChecksummedData implements IChecksummedData {

                    /**
                     * Constructs a new ChecksummedData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IChecksummedData);

                    /** ChecksummedData data. */
                    public data: (Uint8Array|Buffer|string);

                    /** ChecksummedData crc32cChecksum. */
                    public crc32cChecksum?: (google.protobuf.IInt64Value|null);

                    /**
                     * Creates a new ChecksummedData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChecksummedData instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IChecksummedData): google.cloud.kms.v1.ChecksummedData;

                    /**
                     * Encodes the specified ChecksummedData message. Does not implicitly {@link google.cloud.kms.v1.ChecksummedData.verify|verify} messages.
                     * @param message ChecksummedData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IChecksummedData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ChecksummedData message, length delimited. Does not implicitly {@link google.cloud.kms.v1.ChecksummedData.verify|verify} messages.
                     * @param message ChecksummedData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IChecksummedData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ChecksummedData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChecksummedData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.ChecksummedData;

                    /**
                     * Decodes a ChecksummedData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ChecksummedData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.ChecksummedData;

                    /**
                     * Verifies a ChecksummedData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ChecksummedData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ChecksummedData
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.ChecksummedData;

                    /**
                     * Creates a plain object from a ChecksummedData message. Also converts values to other types if specified.
                     * @param message ChecksummedData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.ChecksummedData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ChecksummedData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ChecksummedData
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PublicKey. */
                interface IPublicKey {

                    /** PublicKey pem */
                    pem?: (string|null);

                    /** PublicKey algorithm */
                    algorithm?: (google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm|keyof typeof google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm|null);

                    /** PublicKey pemCrc32c */
                    pemCrc32c?: (google.protobuf.IInt64Value|null);

                    /** PublicKey name */
                    name?: (string|null);

                    /** PublicKey protectionLevel */
                    protectionLevel?: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel|null);

                    /** PublicKey publicKeyFormat */
                    publicKeyFormat?: (google.cloud.kms.v1.PublicKey.PublicKeyFormat|keyof typeof google.cloud.kms.v1.PublicKey.PublicKeyFormat|null);

                    /** PublicKey publicKey */
                    publicKey?: (google.cloud.kms.v1.IChecksummedData|null);
                }

                /** Represents a PublicKey. */
                class PublicKey implements IPublicKey {

                    /**
                     * Constructs a new PublicKey.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IPublicKey);

                    /** PublicKey pem. */
                    public pem: string;

                    /** PublicKey algorithm. */
                    public algorithm: (google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm|keyof typeof google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm);

                    /** PublicKey pemCrc32c. */
                    public pemCrc32c?: (google.protobuf.IInt64Value|null);

                    /** PublicKey name. */
                    public name: string;

                    /** PublicKey protectionLevel. */
                    public protectionLevel: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel);

                    /** PublicKey publicKeyFormat. */
                    public publicKeyFormat: (google.cloud.kms.v1.PublicKey.PublicKeyFormat|keyof typeof google.cloud.kms.v1.PublicKey.PublicKeyFormat);

                    /** PublicKey publicKey. */
                    public publicKey?: (google.cloud.kms.v1.IChecksummedData|null);

                    /**
                     * Creates a new PublicKey instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PublicKey instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IPublicKey): google.cloud.kms.v1.PublicKey;

                    /**
                     * Encodes the specified PublicKey message. Does not implicitly {@link google.cloud.kms.v1.PublicKey.verify|verify} messages.
                     * @param message PublicKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PublicKey message, length delimited. Does not implicitly {@link google.cloud.kms.v1.PublicKey.verify|verify} messages.
                     * @param message PublicKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PublicKey message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PublicKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.PublicKey;

                    /**
                     * Decodes a PublicKey message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PublicKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.PublicKey;

                    /**
                     * Verifies a PublicKey message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PublicKey message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PublicKey
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.PublicKey;

                    /**
                     * Creates a plain object from a PublicKey message. Also converts values to other types if specified.
                     * @param message PublicKey
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.PublicKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PublicKey to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PublicKey
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PublicKey {

                    /** PublicKeyFormat enum. */
                    enum PublicKeyFormat {
                        PUBLIC_KEY_FORMAT_UNSPECIFIED = 0,
                        PEM = 1,
                        DER = 2,
                        NIST_PQC = 3,
                        XWING_RAW_BYTES = 4
                    }
                }

                /** Properties of an ImportJob. */
                interface IImportJob {

                    /** ImportJob name */
                    name?: (string|null);

                    /** ImportJob importMethod */
                    importMethod?: (google.cloud.kms.v1.ImportJob.ImportMethod|keyof typeof google.cloud.kms.v1.ImportJob.ImportMethod|null);

                    /** ImportJob protectionLevel */
                    protectionLevel?: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel|null);

                    /** ImportJob createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ImportJob generateTime */
                    generateTime?: (google.protobuf.ITimestamp|null);

                    /** ImportJob expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);

                    /** ImportJob expireEventTime */
                    expireEventTime?: (google.protobuf.ITimestamp|null);

                    /** ImportJob state */
                    state?: (google.cloud.kms.v1.ImportJob.ImportJobState|keyof typeof google.cloud.kms.v1.ImportJob.ImportJobState|null);

                    /** ImportJob publicKey */
                    publicKey?: (google.cloud.kms.v1.ImportJob.IWrappingPublicKey|null);

                    /** ImportJob attestation */
                    attestation?: (google.cloud.kms.v1.IKeyOperationAttestation|null);
                }

                /** Represents an ImportJob. */
                class ImportJob implements IImportJob {

                    /**
                     * Constructs a new ImportJob.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IImportJob);

                    /** ImportJob name. */
                    public name: string;

                    /** ImportJob importMethod. */
                    public importMethod: (google.cloud.kms.v1.ImportJob.ImportMethod|keyof typeof google.cloud.kms.v1.ImportJob.ImportMethod);

                    /** ImportJob protectionLevel. */
                    public protectionLevel: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel);

                    /** ImportJob createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ImportJob generateTime. */
                    public generateTime?: (google.protobuf.ITimestamp|null);

                    /** ImportJob expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /** ImportJob expireEventTime. */
                    public expireEventTime?: (google.protobuf.ITimestamp|null);

                    /** ImportJob state. */
                    public state: (google.cloud.kms.v1.ImportJob.ImportJobState|keyof typeof google.cloud.kms.v1.ImportJob.ImportJobState);

                    /** ImportJob publicKey. */
                    public publicKey?: (google.cloud.kms.v1.ImportJob.IWrappingPublicKey|null);

                    /** ImportJob attestation. */
                    public attestation?: (google.cloud.kms.v1.IKeyOperationAttestation|null);

                    /**
                     * Creates a new ImportJob instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportJob instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IImportJob): google.cloud.kms.v1.ImportJob;

                    /**
                     * Encodes the specified ImportJob message. Does not implicitly {@link google.cloud.kms.v1.ImportJob.verify|verify} messages.
                     * @param message ImportJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IImportJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportJob message, length delimited. Does not implicitly {@link google.cloud.kms.v1.ImportJob.verify|verify} messages.
                     * @param message ImportJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IImportJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportJob message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.ImportJob;

                    /**
                     * Decodes an ImportJob message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.ImportJob;

                    /**
                     * Verifies an ImportJob message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportJob message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportJob
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.ImportJob;

                    /**
                     * Creates a plain object from an ImportJob message. Also converts values to other types if specified.
                     * @param message ImportJob
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.ImportJob, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportJob to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportJob
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ImportJob {

                    /** ImportMethod enum. */
                    enum ImportMethod {
                        IMPORT_METHOD_UNSPECIFIED = 0,
                        RSA_OAEP_3072_SHA1_AES_256 = 1,
                        RSA_OAEP_4096_SHA1_AES_256 = 2,
                        RSA_OAEP_3072_SHA256_AES_256 = 3,
                        RSA_OAEP_4096_SHA256_AES_256 = 4,
                        RSA_OAEP_3072_SHA256 = 5,
                        RSA_OAEP_4096_SHA256 = 6
                    }

                    /** ImportJobState enum. */
                    enum ImportJobState {
                        IMPORT_JOB_STATE_UNSPECIFIED = 0,
                        PENDING_GENERATION = 1,
                        ACTIVE = 2,
                        EXPIRED = 3
                    }

                    /** Properties of a WrappingPublicKey. */
                    interface IWrappingPublicKey {

                        /** WrappingPublicKey pem */
                        pem?: (string|null);
                    }

                    /** Represents a WrappingPublicKey. */
                    class WrappingPublicKey implements IWrappingPublicKey {

                        /**
                         * Constructs a new WrappingPublicKey.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.kms.v1.ImportJob.IWrappingPublicKey);

                        /** WrappingPublicKey pem. */
                        public pem: string;

                        /**
                         * Creates a new WrappingPublicKey instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns WrappingPublicKey instance
                         */
                        public static create(properties?: google.cloud.kms.v1.ImportJob.IWrappingPublicKey): google.cloud.kms.v1.ImportJob.WrappingPublicKey;

                        /**
                         * Encodes the specified WrappingPublicKey message. Does not implicitly {@link google.cloud.kms.v1.ImportJob.WrappingPublicKey.verify|verify} messages.
                         * @param message WrappingPublicKey message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.kms.v1.ImportJob.IWrappingPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified WrappingPublicKey message, length delimited. Does not implicitly {@link google.cloud.kms.v1.ImportJob.WrappingPublicKey.verify|verify} messages.
                         * @param message WrappingPublicKey message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.kms.v1.ImportJob.IWrappingPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a WrappingPublicKey message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns WrappingPublicKey
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.ImportJob.WrappingPublicKey;

                        /**
                         * Decodes a WrappingPublicKey message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns WrappingPublicKey
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.ImportJob.WrappingPublicKey;

                        /**
                         * Verifies a WrappingPublicKey message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a WrappingPublicKey message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns WrappingPublicKey
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.ImportJob.WrappingPublicKey;

                        /**
                         * Creates a plain object from a WrappingPublicKey message. Also converts values to other types if specified.
                         * @param message WrappingPublicKey
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.kms.v1.ImportJob.WrappingPublicKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this WrappingPublicKey to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for WrappingPublicKey
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of an ExternalProtectionLevelOptions. */
                interface IExternalProtectionLevelOptions {

                    /** ExternalProtectionLevelOptions externalKeyUri */
                    externalKeyUri?: (string|null);

                    /** ExternalProtectionLevelOptions ekmConnectionKeyPath */
                    ekmConnectionKeyPath?: (string|null);
                }

                /** Represents an ExternalProtectionLevelOptions. */
                class ExternalProtectionLevelOptions implements IExternalProtectionLevelOptions {

                    /**
                     * Constructs a new ExternalProtectionLevelOptions.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IExternalProtectionLevelOptions);

                    /** ExternalProtectionLevelOptions externalKeyUri. */
                    public externalKeyUri: string;

                    /** ExternalProtectionLevelOptions ekmConnectionKeyPath. */
                    public ekmConnectionKeyPath: string;

                    /**
                     * Creates a new ExternalProtectionLevelOptions instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExternalProtectionLevelOptions instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IExternalProtectionLevelOptions): google.cloud.kms.v1.ExternalProtectionLevelOptions;

                    /**
                     * Encodes the specified ExternalProtectionLevelOptions message. Does not implicitly {@link google.cloud.kms.v1.ExternalProtectionLevelOptions.verify|verify} messages.
                     * @param message ExternalProtectionLevelOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IExternalProtectionLevelOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExternalProtectionLevelOptions message, length delimited. Does not implicitly {@link google.cloud.kms.v1.ExternalProtectionLevelOptions.verify|verify} messages.
                     * @param message ExternalProtectionLevelOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IExternalProtectionLevelOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExternalProtectionLevelOptions message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExternalProtectionLevelOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.ExternalProtectionLevelOptions;

                    /**
                     * Decodes an ExternalProtectionLevelOptions message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExternalProtectionLevelOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.ExternalProtectionLevelOptions;

                    /**
                     * Verifies an ExternalProtectionLevelOptions message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExternalProtectionLevelOptions message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExternalProtectionLevelOptions
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.ExternalProtectionLevelOptions;

                    /**
                     * Creates a plain object from an ExternalProtectionLevelOptions message. Also converts values to other types if specified.
                     * @param message ExternalProtectionLevelOptions
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.ExternalProtectionLevelOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExternalProtectionLevelOptions to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExternalProtectionLevelOptions
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a KeyAccessJustificationsPolicy. */
                interface IKeyAccessJustificationsPolicy {

                    /** KeyAccessJustificationsPolicy allowedAccessReasons */
                    allowedAccessReasons?: (google.cloud.kms.v1.AccessReason[]|null);
                }

                /** Represents a KeyAccessJustificationsPolicy. */
                class KeyAccessJustificationsPolicy implements IKeyAccessJustificationsPolicy {

                    /**
                     * Constructs a new KeyAccessJustificationsPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IKeyAccessJustificationsPolicy);

                    /** KeyAccessJustificationsPolicy allowedAccessReasons. */
                    public allowedAccessReasons: google.cloud.kms.v1.AccessReason[];

                    /**
                     * Creates a new KeyAccessJustificationsPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns KeyAccessJustificationsPolicy instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IKeyAccessJustificationsPolicy): google.cloud.kms.v1.KeyAccessJustificationsPolicy;

                    /**
                     * Encodes the specified KeyAccessJustificationsPolicy message. Does not implicitly {@link google.cloud.kms.v1.KeyAccessJustificationsPolicy.verify|verify} messages.
                     * @param message KeyAccessJustificationsPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IKeyAccessJustificationsPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified KeyAccessJustificationsPolicy message, length delimited. Does not implicitly {@link google.cloud.kms.v1.KeyAccessJustificationsPolicy.verify|verify} messages.
                     * @param message KeyAccessJustificationsPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IKeyAccessJustificationsPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a KeyAccessJustificationsPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns KeyAccessJustificationsPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.KeyAccessJustificationsPolicy;

                    /**
                     * Decodes a KeyAccessJustificationsPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns KeyAccessJustificationsPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.KeyAccessJustificationsPolicy;

                    /**
                     * Verifies a KeyAccessJustificationsPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a KeyAccessJustificationsPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns KeyAccessJustificationsPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.KeyAccessJustificationsPolicy;

                    /**
                     * Creates a plain object from a KeyAccessJustificationsPolicy message. Also converts values to other types if specified.
                     * @param message KeyAccessJustificationsPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.KeyAccessJustificationsPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this KeyAccessJustificationsPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for KeyAccessJustificationsPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** ProtectionLevel enum. */
                enum ProtectionLevel {
                    PROTECTION_LEVEL_UNSPECIFIED = 0,
                    SOFTWARE = 1,
                    HSM = 2,
                    EXTERNAL = 3,
                    EXTERNAL_VPC = 4
                }

                /** AccessReason enum. */
                enum AccessReason {
                    REASON_UNSPECIFIED = 0,
                    CUSTOMER_INITIATED_SUPPORT = 1,
                    GOOGLE_INITIATED_SERVICE = 2,
                    THIRD_PARTY_DATA_REQUEST = 3,
                    GOOGLE_INITIATED_REVIEW = 4,
                    CUSTOMER_INITIATED_ACCESS = 5,
                    GOOGLE_INITIATED_SYSTEM_OPERATION = 6,
                    REASON_NOT_EXPECTED = 7,
                    MODIFIED_CUSTOMER_INITIATED_ACCESS = 8,
                    MODIFIED_GOOGLE_INITIATED_SYSTEM_OPERATION = 9,
                    GOOGLE_RESPONSE_TO_PRODUCTION_ALERT = 10,
                    CUSTOMER_AUTHORIZED_WORKFLOW_SERVICING = 11
                }

                /** Represents a KeyManagementService */
                class KeyManagementService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new KeyManagementService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new KeyManagementService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): KeyManagementService;

                    /**
                     * Calls ListKeyRings.
                     * @param request ListKeyRingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListKeyRingsResponse
                     */
                    public listKeyRings(request: google.cloud.kms.v1.IListKeyRingsRequest, callback: google.cloud.kms.v1.KeyManagementService.ListKeyRingsCallback): void;

                    /**
                     * Calls ListKeyRings.
                     * @param request ListKeyRingsRequest message or plain object
                     * @returns Promise
                     */
                    public listKeyRings(request: google.cloud.kms.v1.IListKeyRingsRequest): Promise<google.cloud.kms.v1.ListKeyRingsResponse>;

                    /**
                     * Calls ListCryptoKeys.
                     * @param request ListCryptoKeysRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCryptoKeysResponse
                     */
                    public listCryptoKeys(request: google.cloud.kms.v1.IListCryptoKeysRequest, callback: google.cloud.kms.v1.KeyManagementService.ListCryptoKeysCallback): void;

                    /**
                     * Calls ListCryptoKeys.
                     * @param request ListCryptoKeysRequest message or plain object
                     * @returns Promise
                     */
                    public listCryptoKeys(request: google.cloud.kms.v1.IListCryptoKeysRequest): Promise<google.cloud.kms.v1.ListCryptoKeysResponse>;

                    /**
                     * Calls ListCryptoKeyVersions.
                     * @param request ListCryptoKeyVersionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCryptoKeyVersionsResponse
                     */
                    public listCryptoKeyVersions(request: google.cloud.kms.v1.IListCryptoKeyVersionsRequest, callback: google.cloud.kms.v1.KeyManagementService.ListCryptoKeyVersionsCallback): void;

                    /**
                     * Calls ListCryptoKeyVersions.
                     * @param request ListCryptoKeyVersionsRequest message or plain object
                     * @returns Promise
                     */
                    public listCryptoKeyVersions(request: google.cloud.kms.v1.IListCryptoKeyVersionsRequest): Promise<google.cloud.kms.v1.ListCryptoKeyVersionsResponse>;

                    /**
                     * Calls ListImportJobs.
                     * @param request ListImportJobsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListImportJobsResponse
                     */
                    public listImportJobs(request: google.cloud.kms.v1.IListImportJobsRequest, callback: google.cloud.kms.v1.KeyManagementService.ListImportJobsCallback): void;

                    /**
                     * Calls ListImportJobs.
                     * @param request ListImportJobsRequest message or plain object
                     * @returns Promise
                     */
                    public listImportJobs(request: google.cloud.kms.v1.IListImportJobsRequest): Promise<google.cloud.kms.v1.ListImportJobsResponse>;

                    /**
                     * Calls GetKeyRing.
                     * @param request GetKeyRingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and KeyRing
                     */
                    public getKeyRing(request: google.cloud.kms.v1.IGetKeyRingRequest, callback: google.cloud.kms.v1.KeyManagementService.GetKeyRingCallback): void;

                    /**
                     * Calls GetKeyRing.
                     * @param request GetKeyRingRequest message or plain object
                     * @returns Promise
                     */
                    public getKeyRing(request: google.cloud.kms.v1.IGetKeyRingRequest): Promise<google.cloud.kms.v1.KeyRing>;

                    /**
                     * Calls GetCryptoKey.
                     * @param request GetCryptoKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CryptoKey
                     */
                    public getCryptoKey(request: google.cloud.kms.v1.IGetCryptoKeyRequest, callback: google.cloud.kms.v1.KeyManagementService.GetCryptoKeyCallback): void;

                    /**
                     * Calls GetCryptoKey.
                     * @param request GetCryptoKeyRequest message or plain object
                     * @returns Promise
                     */
                    public getCryptoKey(request: google.cloud.kms.v1.IGetCryptoKeyRequest): Promise<google.cloud.kms.v1.CryptoKey>;

                    /**
                     * Calls GetCryptoKeyVersion.
                     * @param request GetCryptoKeyVersionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CryptoKeyVersion
                     */
                    public getCryptoKeyVersion(request: google.cloud.kms.v1.IGetCryptoKeyVersionRequest, callback: google.cloud.kms.v1.KeyManagementService.GetCryptoKeyVersionCallback): void;

                    /**
                     * Calls GetCryptoKeyVersion.
                     * @param request GetCryptoKeyVersionRequest message or plain object
                     * @returns Promise
                     */
                    public getCryptoKeyVersion(request: google.cloud.kms.v1.IGetCryptoKeyVersionRequest): Promise<google.cloud.kms.v1.CryptoKeyVersion>;

                    /**
                     * Calls GetPublicKey.
                     * @param request GetPublicKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PublicKey
                     */
                    public getPublicKey(request: google.cloud.kms.v1.IGetPublicKeyRequest, callback: google.cloud.kms.v1.KeyManagementService.GetPublicKeyCallback): void;

                    /**
                     * Calls GetPublicKey.
                     * @param request GetPublicKeyRequest message or plain object
                     * @returns Promise
                     */
                    public getPublicKey(request: google.cloud.kms.v1.IGetPublicKeyRequest): Promise<google.cloud.kms.v1.PublicKey>;

                    /**
                     * Calls GetImportJob.
                     * @param request GetImportJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ImportJob
                     */
                    public getImportJob(request: google.cloud.kms.v1.IGetImportJobRequest, callback: google.cloud.kms.v1.KeyManagementService.GetImportJobCallback): void;

                    /**
                     * Calls GetImportJob.
                     * @param request GetImportJobRequest message or plain object
                     * @returns Promise
                     */
                    public getImportJob(request: google.cloud.kms.v1.IGetImportJobRequest): Promise<google.cloud.kms.v1.ImportJob>;

                    /**
                     * Calls CreateKeyRing.
                     * @param request CreateKeyRingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and KeyRing
                     */
                    public createKeyRing(request: google.cloud.kms.v1.ICreateKeyRingRequest, callback: google.cloud.kms.v1.KeyManagementService.CreateKeyRingCallback): void;

                    /**
                     * Calls CreateKeyRing.
                     * @param request CreateKeyRingRequest message or plain object
                     * @returns Promise
                     */
                    public createKeyRing(request: google.cloud.kms.v1.ICreateKeyRingRequest): Promise<google.cloud.kms.v1.KeyRing>;

                    /**
                     * Calls CreateCryptoKey.
                     * @param request CreateCryptoKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CryptoKey
                     */
                    public createCryptoKey(request: google.cloud.kms.v1.ICreateCryptoKeyRequest, callback: google.cloud.kms.v1.KeyManagementService.CreateCryptoKeyCallback): void;

                    /**
                     * Calls CreateCryptoKey.
                     * @param request CreateCryptoKeyRequest message or plain object
                     * @returns Promise
                     */
                    public createCryptoKey(request: google.cloud.kms.v1.ICreateCryptoKeyRequest): Promise<google.cloud.kms.v1.CryptoKey>;

                    /**
                     * Calls CreateCryptoKeyVersion.
                     * @param request CreateCryptoKeyVersionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CryptoKeyVersion
                     */
                    public createCryptoKeyVersion(request: google.cloud.kms.v1.ICreateCryptoKeyVersionRequest, callback: google.cloud.kms.v1.KeyManagementService.CreateCryptoKeyVersionCallback): void;

                    /**
                     * Calls CreateCryptoKeyVersion.
                     * @param request CreateCryptoKeyVersionRequest message or plain object
                     * @returns Promise
                     */
                    public createCryptoKeyVersion(request: google.cloud.kms.v1.ICreateCryptoKeyVersionRequest): Promise<google.cloud.kms.v1.CryptoKeyVersion>;

                    /**
                     * Calls ImportCryptoKeyVersion.
                     * @param request ImportCryptoKeyVersionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CryptoKeyVersion
                     */
                    public importCryptoKeyVersion(request: google.cloud.kms.v1.IImportCryptoKeyVersionRequest, callback: google.cloud.kms.v1.KeyManagementService.ImportCryptoKeyVersionCallback): void;

                    /**
                     * Calls ImportCryptoKeyVersion.
                     * @param request ImportCryptoKeyVersionRequest message or plain object
                     * @returns Promise
                     */
                    public importCryptoKeyVersion(request: google.cloud.kms.v1.IImportCryptoKeyVersionRequest): Promise<google.cloud.kms.v1.CryptoKeyVersion>;

                    /**
                     * Calls CreateImportJob.
                     * @param request CreateImportJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ImportJob
                     */
                    public createImportJob(request: google.cloud.kms.v1.ICreateImportJobRequest, callback: google.cloud.kms.v1.KeyManagementService.CreateImportJobCallback): void;

                    /**
                     * Calls CreateImportJob.
                     * @param request CreateImportJobRequest message or plain object
                     * @returns Promise
                     */
                    public createImportJob(request: google.cloud.kms.v1.ICreateImportJobRequest): Promise<google.cloud.kms.v1.ImportJob>;

                    /**
                     * Calls UpdateCryptoKey.
                     * @param request UpdateCryptoKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CryptoKey
                     */
                    public updateCryptoKey(request: google.cloud.kms.v1.IUpdateCryptoKeyRequest, callback: google.cloud.kms.v1.KeyManagementService.UpdateCryptoKeyCallback): void;

                    /**
                     * Calls UpdateCryptoKey.
                     * @param request UpdateCryptoKeyRequest message or plain object
                     * @returns Promise
                     */
                    public updateCryptoKey(request: google.cloud.kms.v1.IUpdateCryptoKeyRequest): Promise<google.cloud.kms.v1.CryptoKey>;

                    /**
                     * Calls UpdateCryptoKeyVersion.
                     * @param request UpdateCryptoKeyVersionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CryptoKeyVersion
                     */
                    public updateCryptoKeyVersion(request: google.cloud.kms.v1.IUpdateCryptoKeyVersionRequest, callback: google.cloud.kms.v1.KeyManagementService.UpdateCryptoKeyVersionCallback): void;

                    /**
                     * Calls UpdateCryptoKeyVersion.
                     * @param request UpdateCryptoKeyVersionRequest message or plain object
                     * @returns Promise
                     */
                    public updateCryptoKeyVersion(request: google.cloud.kms.v1.IUpdateCryptoKeyVersionRequest): Promise<google.cloud.kms.v1.CryptoKeyVersion>;

                    /**
                     * Calls UpdateCryptoKeyPrimaryVersion.
                     * @param request UpdateCryptoKeyPrimaryVersionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CryptoKey
                     */
                    public updateCryptoKeyPrimaryVersion(request: google.cloud.kms.v1.IUpdateCryptoKeyPrimaryVersionRequest, callback: google.cloud.kms.v1.KeyManagementService.UpdateCryptoKeyPrimaryVersionCallback): void;

                    /**
                     * Calls UpdateCryptoKeyPrimaryVersion.
                     * @param request UpdateCryptoKeyPrimaryVersionRequest message or plain object
                     * @returns Promise
                     */
                    public updateCryptoKeyPrimaryVersion(request: google.cloud.kms.v1.IUpdateCryptoKeyPrimaryVersionRequest): Promise<google.cloud.kms.v1.CryptoKey>;

                    /**
                     * Calls DestroyCryptoKeyVersion.
                     * @param request DestroyCryptoKeyVersionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CryptoKeyVersion
                     */
                    public destroyCryptoKeyVersion(request: google.cloud.kms.v1.IDestroyCryptoKeyVersionRequest, callback: google.cloud.kms.v1.KeyManagementService.DestroyCryptoKeyVersionCallback): void;

                    /**
                     * Calls DestroyCryptoKeyVersion.
                     * @param request DestroyCryptoKeyVersionRequest message or plain object
                     * @returns Promise
                     */
                    public destroyCryptoKeyVersion(request: google.cloud.kms.v1.IDestroyCryptoKeyVersionRequest): Promise<google.cloud.kms.v1.CryptoKeyVersion>;

                    /**
                     * Calls RestoreCryptoKeyVersion.
                     * @param request RestoreCryptoKeyVersionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CryptoKeyVersion
                     */
                    public restoreCryptoKeyVersion(request: google.cloud.kms.v1.IRestoreCryptoKeyVersionRequest, callback: google.cloud.kms.v1.KeyManagementService.RestoreCryptoKeyVersionCallback): void;

                    /**
                     * Calls RestoreCryptoKeyVersion.
                     * @param request RestoreCryptoKeyVersionRequest message or plain object
                     * @returns Promise
                     */
                    public restoreCryptoKeyVersion(request: google.cloud.kms.v1.IRestoreCryptoKeyVersionRequest): Promise<google.cloud.kms.v1.CryptoKeyVersion>;

                    /**
                     * Calls Encrypt.
                     * @param request EncryptRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EncryptResponse
                     */
                    public encrypt(request: google.cloud.kms.v1.IEncryptRequest, callback: google.cloud.kms.v1.KeyManagementService.EncryptCallback): void;

                    /**
                     * Calls Encrypt.
                     * @param request EncryptRequest message or plain object
                     * @returns Promise
                     */
                    public encrypt(request: google.cloud.kms.v1.IEncryptRequest): Promise<google.cloud.kms.v1.EncryptResponse>;

                    /**
                     * Calls Decrypt.
                     * @param request DecryptRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DecryptResponse
                     */
                    public decrypt(request: google.cloud.kms.v1.IDecryptRequest, callback: google.cloud.kms.v1.KeyManagementService.DecryptCallback): void;

                    /**
                     * Calls Decrypt.
                     * @param request DecryptRequest message or plain object
                     * @returns Promise
                     */
                    public decrypt(request: google.cloud.kms.v1.IDecryptRequest): Promise<google.cloud.kms.v1.DecryptResponse>;

                    /**
                     * Calls RawEncrypt.
                     * @param request RawEncryptRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RawEncryptResponse
                     */
                    public rawEncrypt(request: google.cloud.kms.v1.IRawEncryptRequest, callback: google.cloud.kms.v1.KeyManagementService.RawEncryptCallback): void;

                    /**
                     * Calls RawEncrypt.
                     * @param request RawEncryptRequest message or plain object
                     * @returns Promise
                     */
                    public rawEncrypt(request: google.cloud.kms.v1.IRawEncryptRequest): Promise<google.cloud.kms.v1.RawEncryptResponse>;

                    /**
                     * Calls RawDecrypt.
                     * @param request RawDecryptRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RawDecryptResponse
                     */
                    public rawDecrypt(request: google.cloud.kms.v1.IRawDecryptRequest, callback: google.cloud.kms.v1.KeyManagementService.RawDecryptCallback): void;

                    /**
                     * Calls RawDecrypt.
                     * @param request RawDecryptRequest message or plain object
                     * @returns Promise
                     */
                    public rawDecrypt(request: google.cloud.kms.v1.IRawDecryptRequest): Promise<google.cloud.kms.v1.RawDecryptResponse>;

                    /**
                     * Calls AsymmetricSign.
                     * @param request AsymmetricSignRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AsymmetricSignResponse
                     */
                    public asymmetricSign(request: google.cloud.kms.v1.IAsymmetricSignRequest, callback: google.cloud.kms.v1.KeyManagementService.AsymmetricSignCallback): void;

                    /**
                     * Calls AsymmetricSign.
                     * @param request AsymmetricSignRequest message or plain object
                     * @returns Promise
                     */
                    public asymmetricSign(request: google.cloud.kms.v1.IAsymmetricSignRequest): Promise<google.cloud.kms.v1.AsymmetricSignResponse>;

                    /**
                     * Calls AsymmetricDecrypt.
                     * @param request AsymmetricDecryptRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AsymmetricDecryptResponse
                     */
                    public asymmetricDecrypt(request: google.cloud.kms.v1.IAsymmetricDecryptRequest, callback: google.cloud.kms.v1.KeyManagementService.AsymmetricDecryptCallback): void;

                    /**
                     * Calls AsymmetricDecrypt.
                     * @param request AsymmetricDecryptRequest message or plain object
                     * @returns Promise
                     */
                    public asymmetricDecrypt(request: google.cloud.kms.v1.IAsymmetricDecryptRequest): Promise<google.cloud.kms.v1.AsymmetricDecryptResponse>;

                    /**
                     * Calls MacSign.
                     * @param request MacSignRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and MacSignResponse
                     */
                    public macSign(request: google.cloud.kms.v1.IMacSignRequest, callback: google.cloud.kms.v1.KeyManagementService.MacSignCallback): void;

                    /**
                     * Calls MacSign.
                     * @param request MacSignRequest message or plain object
                     * @returns Promise
                     */
                    public macSign(request: google.cloud.kms.v1.IMacSignRequest): Promise<google.cloud.kms.v1.MacSignResponse>;

                    /**
                     * Calls MacVerify.
                     * @param request MacVerifyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and MacVerifyResponse
                     */
                    public macVerify(request: google.cloud.kms.v1.IMacVerifyRequest, callback: google.cloud.kms.v1.KeyManagementService.MacVerifyCallback): void;

                    /**
                     * Calls MacVerify.
                     * @param request MacVerifyRequest message or plain object
                     * @returns Promise
                     */
                    public macVerify(request: google.cloud.kms.v1.IMacVerifyRequest): Promise<google.cloud.kms.v1.MacVerifyResponse>;

                    /**
                     * Calls Decapsulate.
                     * @param request DecapsulateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DecapsulateResponse
                     */
                    public decapsulate(request: google.cloud.kms.v1.IDecapsulateRequest, callback: google.cloud.kms.v1.KeyManagementService.DecapsulateCallback): void;

                    /**
                     * Calls Decapsulate.
                     * @param request DecapsulateRequest message or plain object
                     * @returns Promise
                     */
                    public decapsulate(request: google.cloud.kms.v1.IDecapsulateRequest): Promise<google.cloud.kms.v1.DecapsulateResponse>;

                    /**
                     * Calls GenerateRandomBytes.
                     * @param request GenerateRandomBytesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GenerateRandomBytesResponse
                     */
                    public generateRandomBytes(request: google.cloud.kms.v1.IGenerateRandomBytesRequest, callback: google.cloud.kms.v1.KeyManagementService.GenerateRandomBytesCallback): void;

                    /**
                     * Calls GenerateRandomBytes.
                     * @param request GenerateRandomBytesRequest message or plain object
                     * @returns Promise
                     */
                    public generateRandomBytes(request: google.cloud.kms.v1.IGenerateRandomBytesRequest): Promise<google.cloud.kms.v1.GenerateRandomBytesResponse>;
                }

                namespace KeyManagementService {

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|listKeyRings}.
                     * @param error Error, if any
                     * @param [response] ListKeyRingsResponse
                     */
                    type ListKeyRingsCallback = (error: (Error|null), response?: google.cloud.kms.v1.ListKeyRingsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|listCryptoKeys}.
                     * @param error Error, if any
                     * @param [response] ListCryptoKeysResponse
                     */
                    type ListCryptoKeysCallback = (error: (Error|null), response?: google.cloud.kms.v1.ListCryptoKeysResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|listCryptoKeyVersions}.
                     * @param error Error, if any
                     * @param [response] ListCryptoKeyVersionsResponse
                     */
                    type ListCryptoKeyVersionsCallback = (error: (Error|null), response?: google.cloud.kms.v1.ListCryptoKeyVersionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|listImportJobs}.
                     * @param error Error, if any
                     * @param [response] ListImportJobsResponse
                     */
                    type ListImportJobsCallback = (error: (Error|null), response?: google.cloud.kms.v1.ListImportJobsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|getKeyRing}.
                     * @param error Error, if any
                     * @param [response] KeyRing
                     */
                    type GetKeyRingCallback = (error: (Error|null), response?: google.cloud.kms.v1.KeyRing) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|getCryptoKey}.
                     * @param error Error, if any
                     * @param [response] CryptoKey
                     */
                    type GetCryptoKeyCallback = (error: (Error|null), response?: google.cloud.kms.v1.CryptoKey) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|getCryptoKeyVersion}.
                     * @param error Error, if any
                     * @param [response] CryptoKeyVersion
                     */
                    type GetCryptoKeyVersionCallback = (error: (Error|null), response?: google.cloud.kms.v1.CryptoKeyVersion) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|getPublicKey}.
                     * @param error Error, if any
                     * @param [response] PublicKey
                     */
                    type GetPublicKeyCallback = (error: (Error|null), response?: google.cloud.kms.v1.PublicKey) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|getImportJob}.
                     * @param error Error, if any
                     * @param [response] ImportJob
                     */
                    type GetImportJobCallback = (error: (Error|null), response?: google.cloud.kms.v1.ImportJob) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|createKeyRing}.
                     * @param error Error, if any
                     * @param [response] KeyRing
                     */
                    type CreateKeyRingCallback = (error: (Error|null), response?: google.cloud.kms.v1.KeyRing) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|createCryptoKey}.
                     * @param error Error, if any
                     * @param [response] CryptoKey
                     */
                    type CreateCryptoKeyCallback = (error: (Error|null), response?: google.cloud.kms.v1.CryptoKey) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|createCryptoKeyVersion}.
                     * @param error Error, if any
                     * @param [response] CryptoKeyVersion
                     */
                    type CreateCryptoKeyVersionCallback = (error: (Error|null), response?: google.cloud.kms.v1.CryptoKeyVersion) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|importCryptoKeyVersion}.
                     * @param error Error, if any
                     * @param [response] CryptoKeyVersion
                     */
                    type ImportCryptoKeyVersionCallback = (error: (Error|null), response?: google.cloud.kms.v1.CryptoKeyVersion) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|createImportJob}.
                     * @param error Error, if any
                     * @param [response] ImportJob
                     */
                    type CreateImportJobCallback = (error: (Error|null), response?: google.cloud.kms.v1.ImportJob) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|updateCryptoKey}.
                     * @param error Error, if any
                     * @param [response] CryptoKey
                     */
                    type UpdateCryptoKeyCallback = (error: (Error|null), response?: google.cloud.kms.v1.CryptoKey) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|updateCryptoKeyVersion}.
                     * @param error Error, if any
                     * @param [response] CryptoKeyVersion
                     */
                    type UpdateCryptoKeyVersionCallback = (error: (Error|null), response?: google.cloud.kms.v1.CryptoKeyVersion) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|updateCryptoKeyPrimaryVersion}.
                     * @param error Error, if any
                     * @param [response] CryptoKey
                     */
                    type UpdateCryptoKeyPrimaryVersionCallback = (error: (Error|null), response?: google.cloud.kms.v1.CryptoKey) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|destroyCryptoKeyVersion}.
                     * @param error Error, if any
                     * @param [response] CryptoKeyVersion
                     */
                    type DestroyCryptoKeyVersionCallback = (error: (Error|null), response?: google.cloud.kms.v1.CryptoKeyVersion) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|restoreCryptoKeyVersion}.
                     * @param error Error, if any
                     * @param [response] CryptoKeyVersion
                     */
                    type RestoreCryptoKeyVersionCallback = (error: (Error|null), response?: google.cloud.kms.v1.CryptoKeyVersion) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|encrypt}.
                     * @param error Error, if any
                     * @param [response] EncryptResponse
                     */
                    type EncryptCallback = (error: (Error|null), response?: google.cloud.kms.v1.EncryptResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|decrypt}.
                     * @param error Error, if any
                     * @param [response] DecryptResponse
                     */
                    type DecryptCallback = (error: (Error|null), response?: google.cloud.kms.v1.DecryptResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|rawEncrypt}.
                     * @param error Error, if any
                     * @param [response] RawEncryptResponse
                     */
                    type RawEncryptCallback = (error: (Error|null), response?: google.cloud.kms.v1.RawEncryptResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|rawDecrypt}.
                     * @param error Error, if any
                     * @param [response] RawDecryptResponse
                     */
                    type RawDecryptCallback = (error: (Error|null), response?: google.cloud.kms.v1.RawDecryptResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|asymmetricSign}.
                     * @param error Error, if any
                     * @param [response] AsymmetricSignResponse
                     */
                    type AsymmetricSignCallback = (error: (Error|null), response?: google.cloud.kms.v1.AsymmetricSignResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|asymmetricDecrypt}.
                     * @param error Error, if any
                     * @param [response] AsymmetricDecryptResponse
                     */
                    type AsymmetricDecryptCallback = (error: (Error|null), response?: google.cloud.kms.v1.AsymmetricDecryptResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|macSign}.
                     * @param error Error, if any
                     * @param [response] MacSignResponse
                     */
                    type MacSignCallback = (error: (Error|null), response?: google.cloud.kms.v1.MacSignResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|macVerify}.
                     * @param error Error, if any
                     * @param [response] MacVerifyResponse
                     */
                    type MacVerifyCallback = (error: (Error|null), response?: google.cloud.kms.v1.MacVerifyResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|decapsulate}.
                     * @param error Error, if any
                     * @param [response] DecapsulateResponse
                     */
                    type DecapsulateCallback = (error: (Error|null), response?: google.cloud.kms.v1.DecapsulateResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.kms.v1.KeyManagementService|generateRandomBytes}.
                     * @param error Error, if any
                     * @param [response] GenerateRandomBytesResponse
                     */
                    type GenerateRandomBytesCallback = (error: (Error|null), response?: google.cloud.kms.v1.GenerateRandomBytesResponse) => void;
                }

                /** Properties of a ListKeyRingsRequest. */
                interface IListKeyRingsRequest {

                    /** ListKeyRingsRequest parent */
                    parent?: (string|null);

                    /** ListKeyRingsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListKeyRingsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListKeyRingsRequest filter */
                    filter?: (string|null);

                    /** ListKeyRingsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListKeyRingsRequest. */
                class ListKeyRingsRequest implements IListKeyRingsRequest {

                    /**
                     * Constructs a new ListKeyRingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IListKeyRingsRequest);

                    /** ListKeyRingsRequest parent. */
                    public parent: string;

                    /** ListKeyRingsRequest pageSize. */
                    public pageSize: number;

                    /** ListKeyRingsRequest pageToken. */
                    public pageToken: string;

                    /** ListKeyRingsRequest filter. */
                    public filter: string;

                    /** ListKeyRingsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListKeyRingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListKeyRingsRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IListKeyRingsRequest): google.cloud.kms.v1.ListKeyRingsRequest;

                    /**
                     * Encodes the specified ListKeyRingsRequest message. Does not implicitly {@link google.cloud.kms.v1.ListKeyRingsRequest.verify|verify} messages.
                     * @param message ListKeyRingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IListKeyRingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListKeyRingsRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.ListKeyRingsRequest.verify|verify} messages.
                     * @param message ListKeyRingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IListKeyRingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListKeyRingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListKeyRingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.ListKeyRingsRequest;

                    /**
                     * Decodes a ListKeyRingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListKeyRingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.ListKeyRingsRequest;

                    /**
                     * Verifies a ListKeyRingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListKeyRingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListKeyRingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.ListKeyRingsRequest;

                    /**
                     * Creates a plain object from a ListKeyRingsRequest message. Also converts values to other types if specified.
                     * @param message ListKeyRingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.ListKeyRingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListKeyRingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListKeyRingsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCryptoKeysRequest. */
                interface IListCryptoKeysRequest {

                    /** ListCryptoKeysRequest parent */
                    parent?: (string|null);

                    /** ListCryptoKeysRequest pageSize */
                    pageSize?: (number|null);

                    /** ListCryptoKeysRequest pageToken */
                    pageToken?: (string|null);

                    /** ListCryptoKeysRequest versionView */
                    versionView?: (google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionView|keyof typeof google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionView|null);

                    /** ListCryptoKeysRequest filter */
                    filter?: (string|null);

                    /** ListCryptoKeysRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListCryptoKeysRequest. */
                class ListCryptoKeysRequest implements IListCryptoKeysRequest {

                    /**
                     * Constructs a new ListCryptoKeysRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IListCryptoKeysRequest);

                    /** ListCryptoKeysRequest parent. */
                    public parent: string;

                    /** ListCryptoKeysRequest pageSize. */
                    public pageSize: number;

                    /** ListCryptoKeysRequest pageToken. */
                    public pageToken: string;

                    /** ListCryptoKeysRequest versionView. */
                    public versionView: (google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionView|keyof typeof google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionView);

                    /** ListCryptoKeysRequest filter. */
                    public filter: string;

                    /** ListCryptoKeysRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListCryptoKeysRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCryptoKeysRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IListCryptoKeysRequest): google.cloud.kms.v1.ListCryptoKeysRequest;

                    /**
                     * Encodes the specified ListCryptoKeysRequest message. Does not implicitly {@link google.cloud.kms.v1.ListCryptoKeysRequest.verify|verify} messages.
                     * @param message ListCryptoKeysRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IListCryptoKeysRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCryptoKeysRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.ListCryptoKeysRequest.verify|verify} messages.
                     * @param message ListCryptoKeysRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IListCryptoKeysRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCryptoKeysRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCryptoKeysRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.ListCryptoKeysRequest;

                    /**
                     * Decodes a ListCryptoKeysRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCryptoKeysRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.ListCryptoKeysRequest;

                    /**
                     * Verifies a ListCryptoKeysRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCryptoKeysRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCryptoKeysRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.ListCryptoKeysRequest;

                    /**
                     * Creates a plain object from a ListCryptoKeysRequest message. Also converts values to other types if specified.
                     * @param message ListCryptoKeysRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.ListCryptoKeysRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCryptoKeysRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCryptoKeysRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCryptoKeyVersionsRequest. */
                interface IListCryptoKeyVersionsRequest {

                    /** ListCryptoKeyVersionsRequest parent */
                    parent?: (string|null);

                    /** ListCryptoKeyVersionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListCryptoKeyVersionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListCryptoKeyVersionsRequest view */
                    view?: (google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionView|keyof typeof google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionView|null);

                    /** ListCryptoKeyVersionsRequest filter */
                    filter?: (string|null);

                    /** ListCryptoKeyVersionsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListCryptoKeyVersionsRequest. */
                class ListCryptoKeyVersionsRequest implements IListCryptoKeyVersionsRequest {

                    /**
                     * Constructs a new ListCryptoKeyVersionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IListCryptoKeyVersionsRequest);

                    /** ListCryptoKeyVersionsRequest parent. */
                    public parent: string;

                    /** ListCryptoKeyVersionsRequest pageSize. */
                    public pageSize: number;

                    /** ListCryptoKeyVersionsRequest pageToken. */
                    public pageToken: string;

                    /** ListCryptoKeyVersionsRequest view. */
                    public view: (google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionView|keyof typeof google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionView);

                    /** ListCryptoKeyVersionsRequest filter. */
                    public filter: string;

                    /** ListCryptoKeyVersionsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListCryptoKeyVersionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCryptoKeyVersionsRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IListCryptoKeyVersionsRequest): google.cloud.kms.v1.ListCryptoKeyVersionsRequest;

                    /**
                     * Encodes the specified ListCryptoKeyVersionsRequest message. Does not implicitly {@link google.cloud.kms.v1.ListCryptoKeyVersionsRequest.verify|verify} messages.
                     * @param message ListCryptoKeyVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IListCryptoKeyVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCryptoKeyVersionsRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.ListCryptoKeyVersionsRequest.verify|verify} messages.
                     * @param message ListCryptoKeyVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IListCryptoKeyVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCryptoKeyVersionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCryptoKeyVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.ListCryptoKeyVersionsRequest;

                    /**
                     * Decodes a ListCryptoKeyVersionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCryptoKeyVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.ListCryptoKeyVersionsRequest;

                    /**
                     * Verifies a ListCryptoKeyVersionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCryptoKeyVersionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCryptoKeyVersionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.ListCryptoKeyVersionsRequest;

                    /**
                     * Creates a plain object from a ListCryptoKeyVersionsRequest message. Also converts values to other types if specified.
                     * @param message ListCryptoKeyVersionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.ListCryptoKeyVersionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCryptoKeyVersionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCryptoKeyVersionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListImportJobsRequest. */
                interface IListImportJobsRequest {

                    /** ListImportJobsRequest parent */
                    parent?: (string|null);

                    /** ListImportJobsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListImportJobsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListImportJobsRequest filter */
                    filter?: (string|null);

                    /** ListImportJobsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListImportJobsRequest. */
                class ListImportJobsRequest implements IListImportJobsRequest {

                    /**
                     * Constructs a new ListImportJobsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IListImportJobsRequest);

                    /** ListImportJobsRequest parent. */
                    public parent: string;

                    /** ListImportJobsRequest pageSize. */
                    public pageSize: number;

                    /** ListImportJobsRequest pageToken. */
                    public pageToken: string;

                    /** ListImportJobsRequest filter. */
                    public filter: string;

                    /** ListImportJobsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListImportJobsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListImportJobsRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IListImportJobsRequest): google.cloud.kms.v1.ListImportJobsRequest;

                    /**
                     * Encodes the specified ListImportJobsRequest message. Does not implicitly {@link google.cloud.kms.v1.ListImportJobsRequest.verify|verify} messages.
                     * @param message ListImportJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IListImportJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListImportJobsRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.ListImportJobsRequest.verify|verify} messages.
                     * @param message ListImportJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IListImportJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListImportJobsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListImportJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.ListImportJobsRequest;

                    /**
                     * Decodes a ListImportJobsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListImportJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.ListImportJobsRequest;

                    /**
                     * Verifies a ListImportJobsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListImportJobsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListImportJobsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.ListImportJobsRequest;

                    /**
                     * Creates a plain object from a ListImportJobsRequest message. Also converts values to other types if specified.
                     * @param message ListImportJobsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.ListImportJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListImportJobsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListImportJobsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListKeyRingsResponse. */
                interface IListKeyRingsResponse {

                    /** ListKeyRingsResponse keyRings */
                    keyRings?: (google.cloud.kms.v1.IKeyRing[]|null);

                    /** ListKeyRingsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListKeyRingsResponse totalSize */
                    totalSize?: (number|null);
                }

                /** Represents a ListKeyRingsResponse. */
                class ListKeyRingsResponse implements IListKeyRingsResponse {

                    /**
                     * Constructs a new ListKeyRingsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IListKeyRingsResponse);

                    /** ListKeyRingsResponse keyRings. */
                    public keyRings: google.cloud.kms.v1.IKeyRing[];

                    /** ListKeyRingsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListKeyRingsResponse totalSize. */
                    public totalSize: number;

                    /**
                     * Creates a new ListKeyRingsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListKeyRingsResponse instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IListKeyRingsResponse): google.cloud.kms.v1.ListKeyRingsResponse;

                    /**
                     * Encodes the specified ListKeyRingsResponse message. Does not implicitly {@link google.cloud.kms.v1.ListKeyRingsResponse.verify|verify} messages.
                     * @param message ListKeyRingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IListKeyRingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListKeyRingsResponse message, length delimited. Does not implicitly {@link google.cloud.kms.v1.ListKeyRingsResponse.verify|verify} messages.
                     * @param message ListKeyRingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IListKeyRingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListKeyRingsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListKeyRingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.ListKeyRingsResponse;

                    /**
                     * Decodes a ListKeyRingsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListKeyRingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.ListKeyRingsResponse;

                    /**
                     * Verifies a ListKeyRingsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListKeyRingsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListKeyRingsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.ListKeyRingsResponse;

                    /**
                     * Creates a plain object from a ListKeyRingsResponse message. Also converts values to other types if specified.
                     * @param message ListKeyRingsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.ListKeyRingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListKeyRingsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListKeyRingsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCryptoKeysResponse. */
                interface IListCryptoKeysResponse {

                    /** ListCryptoKeysResponse cryptoKeys */
                    cryptoKeys?: (google.cloud.kms.v1.ICryptoKey[]|null);

                    /** ListCryptoKeysResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListCryptoKeysResponse totalSize */
                    totalSize?: (number|null);
                }

                /** Represents a ListCryptoKeysResponse. */
                class ListCryptoKeysResponse implements IListCryptoKeysResponse {

                    /**
                     * Constructs a new ListCryptoKeysResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IListCryptoKeysResponse);

                    /** ListCryptoKeysResponse cryptoKeys. */
                    public cryptoKeys: google.cloud.kms.v1.ICryptoKey[];

                    /** ListCryptoKeysResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListCryptoKeysResponse totalSize. */
                    public totalSize: number;

                    /**
                     * Creates a new ListCryptoKeysResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCryptoKeysResponse instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IListCryptoKeysResponse): google.cloud.kms.v1.ListCryptoKeysResponse;

                    /**
                     * Encodes the specified ListCryptoKeysResponse message. Does not implicitly {@link google.cloud.kms.v1.ListCryptoKeysResponse.verify|verify} messages.
                     * @param message ListCryptoKeysResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IListCryptoKeysResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCryptoKeysResponse message, length delimited. Does not implicitly {@link google.cloud.kms.v1.ListCryptoKeysResponse.verify|verify} messages.
                     * @param message ListCryptoKeysResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IListCryptoKeysResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCryptoKeysResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCryptoKeysResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.ListCryptoKeysResponse;

                    /**
                     * Decodes a ListCryptoKeysResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCryptoKeysResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.ListCryptoKeysResponse;

                    /**
                     * Verifies a ListCryptoKeysResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCryptoKeysResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCryptoKeysResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.ListCryptoKeysResponse;

                    /**
                     * Creates a plain object from a ListCryptoKeysResponse message. Also converts values to other types if specified.
                     * @param message ListCryptoKeysResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.ListCryptoKeysResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCryptoKeysResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCryptoKeysResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCryptoKeyVersionsResponse. */
                interface IListCryptoKeyVersionsResponse {

                    /** ListCryptoKeyVersionsResponse cryptoKeyVersions */
                    cryptoKeyVersions?: (google.cloud.kms.v1.ICryptoKeyVersion[]|null);

                    /** ListCryptoKeyVersionsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListCryptoKeyVersionsResponse totalSize */
                    totalSize?: (number|null);
                }

                /** Represents a ListCryptoKeyVersionsResponse. */
                class ListCryptoKeyVersionsResponse implements IListCryptoKeyVersionsResponse {

                    /**
                     * Constructs a new ListCryptoKeyVersionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IListCryptoKeyVersionsResponse);

                    /** ListCryptoKeyVersionsResponse cryptoKeyVersions. */
                    public cryptoKeyVersions: google.cloud.kms.v1.ICryptoKeyVersion[];

                    /** ListCryptoKeyVersionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListCryptoKeyVersionsResponse totalSize. */
                    public totalSize: number;

                    /**
                     * Creates a new ListCryptoKeyVersionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCryptoKeyVersionsResponse instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IListCryptoKeyVersionsResponse): google.cloud.kms.v1.ListCryptoKeyVersionsResponse;

                    /**
                     * Encodes the specified ListCryptoKeyVersionsResponse message. Does not implicitly {@link google.cloud.kms.v1.ListCryptoKeyVersionsResponse.verify|verify} messages.
                     * @param message ListCryptoKeyVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IListCryptoKeyVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCryptoKeyVersionsResponse message, length delimited. Does not implicitly {@link google.cloud.kms.v1.ListCryptoKeyVersionsResponse.verify|verify} messages.
                     * @param message ListCryptoKeyVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IListCryptoKeyVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCryptoKeyVersionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCryptoKeyVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.ListCryptoKeyVersionsResponse;

                    /**
                     * Decodes a ListCryptoKeyVersionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCryptoKeyVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.ListCryptoKeyVersionsResponse;

                    /**
                     * Verifies a ListCryptoKeyVersionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCryptoKeyVersionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCryptoKeyVersionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.ListCryptoKeyVersionsResponse;

                    /**
                     * Creates a plain object from a ListCryptoKeyVersionsResponse message. Also converts values to other types if specified.
                     * @param message ListCryptoKeyVersionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.ListCryptoKeyVersionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCryptoKeyVersionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCryptoKeyVersionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListImportJobsResponse. */
                interface IListImportJobsResponse {

                    /** ListImportJobsResponse importJobs */
                    importJobs?: (google.cloud.kms.v1.IImportJob[]|null);

                    /** ListImportJobsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListImportJobsResponse totalSize */
                    totalSize?: (number|null);
                }

                /** Represents a ListImportJobsResponse. */
                class ListImportJobsResponse implements IListImportJobsResponse {

                    /**
                     * Constructs a new ListImportJobsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IListImportJobsResponse);

                    /** ListImportJobsResponse importJobs. */
                    public importJobs: google.cloud.kms.v1.IImportJob[];

                    /** ListImportJobsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListImportJobsResponse totalSize. */
                    public totalSize: number;

                    /**
                     * Creates a new ListImportJobsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListImportJobsResponse instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IListImportJobsResponse): google.cloud.kms.v1.ListImportJobsResponse;

                    /**
                     * Encodes the specified ListImportJobsResponse message. Does not implicitly {@link google.cloud.kms.v1.ListImportJobsResponse.verify|verify} messages.
                     * @param message ListImportJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IListImportJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListImportJobsResponse message, length delimited. Does not implicitly {@link google.cloud.kms.v1.ListImportJobsResponse.verify|verify} messages.
                     * @param message ListImportJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IListImportJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListImportJobsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListImportJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.ListImportJobsResponse;

                    /**
                     * Decodes a ListImportJobsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListImportJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.ListImportJobsResponse;

                    /**
                     * Verifies a ListImportJobsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListImportJobsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListImportJobsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.ListImportJobsResponse;

                    /**
                     * Creates a plain object from a ListImportJobsResponse message. Also converts values to other types if specified.
                     * @param message ListImportJobsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.ListImportJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListImportJobsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListImportJobsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetKeyRingRequest. */
                interface IGetKeyRingRequest {

                    /** GetKeyRingRequest name */
                    name?: (string|null);
                }

                /** Represents a GetKeyRingRequest. */
                class GetKeyRingRequest implements IGetKeyRingRequest {

                    /**
                     * Constructs a new GetKeyRingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IGetKeyRingRequest);

                    /** GetKeyRingRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetKeyRingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetKeyRingRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IGetKeyRingRequest): google.cloud.kms.v1.GetKeyRingRequest;

                    /**
                     * Encodes the specified GetKeyRingRequest message. Does not implicitly {@link google.cloud.kms.v1.GetKeyRingRequest.verify|verify} messages.
                     * @param message GetKeyRingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IGetKeyRingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetKeyRingRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.GetKeyRingRequest.verify|verify} messages.
                     * @param message GetKeyRingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IGetKeyRingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetKeyRingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetKeyRingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.GetKeyRingRequest;

                    /**
                     * Decodes a GetKeyRingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetKeyRingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.GetKeyRingRequest;

                    /**
                     * Verifies a GetKeyRingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetKeyRingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetKeyRingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.GetKeyRingRequest;

                    /**
                     * Creates a plain object from a GetKeyRingRequest message. Also converts values to other types if specified.
                     * @param message GetKeyRingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.GetKeyRingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetKeyRingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetKeyRingRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetCryptoKeyRequest. */
                interface IGetCryptoKeyRequest {

                    /** GetCryptoKeyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetCryptoKeyRequest. */
                class GetCryptoKeyRequest implements IGetCryptoKeyRequest {

                    /**
                     * Constructs a new GetCryptoKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IGetCryptoKeyRequest);

                    /** GetCryptoKeyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetCryptoKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCryptoKeyRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IGetCryptoKeyRequest): google.cloud.kms.v1.GetCryptoKeyRequest;

                    /**
                     * Encodes the specified GetCryptoKeyRequest message. Does not implicitly {@link google.cloud.kms.v1.GetCryptoKeyRequest.verify|verify} messages.
                     * @param message GetCryptoKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IGetCryptoKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCryptoKeyRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.GetCryptoKeyRequest.verify|verify} messages.
                     * @param message GetCryptoKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IGetCryptoKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCryptoKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCryptoKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.GetCryptoKeyRequest;

                    /**
                     * Decodes a GetCryptoKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCryptoKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.GetCryptoKeyRequest;

                    /**
                     * Verifies a GetCryptoKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCryptoKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCryptoKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.GetCryptoKeyRequest;

                    /**
                     * Creates a plain object from a GetCryptoKeyRequest message. Also converts values to other types if specified.
                     * @param message GetCryptoKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.GetCryptoKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCryptoKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetCryptoKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetCryptoKeyVersionRequest. */
                interface IGetCryptoKeyVersionRequest {

                    /** GetCryptoKeyVersionRequest name */
                    name?: (string|null);
                }

                /** Represents a GetCryptoKeyVersionRequest. */
                class GetCryptoKeyVersionRequest implements IGetCryptoKeyVersionRequest {

                    /**
                     * Constructs a new GetCryptoKeyVersionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IGetCryptoKeyVersionRequest);

                    /** GetCryptoKeyVersionRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetCryptoKeyVersionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCryptoKeyVersionRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IGetCryptoKeyVersionRequest): google.cloud.kms.v1.GetCryptoKeyVersionRequest;

                    /**
                     * Encodes the specified GetCryptoKeyVersionRequest message. Does not implicitly {@link google.cloud.kms.v1.GetCryptoKeyVersionRequest.verify|verify} messages.
                     * @param message GetCryptoKeyVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IGetCryptoKeyVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCryptoKeyVersionRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.GetCryptoKeyVersionRequest.verify|verify} messages.
                     * @param message GetCryptoKeyVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IGetCryptoKeyVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCryptoKeyVersionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCryptoKeyVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.GetCryptoKeyVersionRequest;

                    /**
                     * Decodes a GetCryptoKeyVersionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCryptoKeyVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.GetCryptoKeyVersionRequest;

                    /**
                     * Verifies a GetCryptoKeyVersionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCryptoKeyVersionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCryptoKeyVersionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.GetCryptoKeyVersionRequest;

                    /**
                     * Creates a plain object from a GetCryptoKeyVersionRequest message. Also converts values to other types if specified.
                     * @param message GetCryptoKeyVersionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.GetCryptoKeyVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCryptoKeyVersionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetCryptoKeyVersionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPublicKeyRequest. */
                interface IGetPublicKeyRequest {

                    /** GetPublicKeyRequest name */
                    name?: (string|null);

                    /** GetPublicKeyRequest publicKeyFormat */
                    publicKeyFormat?: (google.cloud.kms.v1.PublicKey.PublicKeyFormat|keyof typeof google.cloud.kms.v1.PublicKey.PublicKeyFormat|null);
                }

                /** Represents a GetPublicKeyRequest. */
                class GetPublicKeyRequest implements IGetPublicKeyRequest {

                    /**
                     * Constructs a new GetPublicKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IGetPublicKeyRequest);

                    /** GetPublicKeyRequest name. */
                    public name: string;

                    /** GetPublicKeyRequest publicKeyFormat. */
                    public publicKeyFormat: (google.cloud.kms.v1.PublicKey.PublicKeyFormat|keyof typeof google.cloud.kms.v1.PublicKey.PublicKeyFormat);

                    /**
                     * Creates a new GetPublicKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPublicKeyRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IGetPublicKeyRequest): google.cloud.kms.v1.GetPublicKeyRequest;

                    /**
                     * Encodes the specified GetPublicKeyRequest message. Does not implicitly {@link google.cloud.kms.v1.GetPublicKeyRequest.verify|verify} messages.
                     * @param message GetPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IGetPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPublicKeyRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.GetPublicKeyRequest.verify|verify} messages.
                     * @param message GetPublicKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IGetPublicKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPublicKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.GetPublicKeyRequest;

                    /**
                     * Decodes a GetPublicKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPublicKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.GetPublicKeyRequest;

                    /**
                     * Verifies a GetPublicKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPublicKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPublicKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.GetPublicKeyRequest;

                    /**
                     * Creates a plain object from a GetPublicKeyRequest message. Also converts values to other types if specified.
                     * @param message GetPublicKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.GetPublicKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPublicKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPublicKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetImportJobRequest. */
                interface IGetImportJobRequest {

                    /** GetImportJobRequest name */
                    name?: (string|null);
                }

                /** Represents a GetImportJobRequest. */
                class GetImportJobRequest implements IGetImportJobRequest {

                    /**
                     * Constructs a new GetImportJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IGetImportJobRequest);

                    /** GetImportJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetImportJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetImportJobRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IGetImportJobRequest): google.cloud.kms.v1.GetImportJobRequest;

                    /**
                     * Encodes the specified GetImportJobRequest message. Does not implicitly {@link google.cloud.kms.v1.GetImportJobRequest.verify|verify} messages.
                     * @param message GetImportJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IGetImportJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetImportJobRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.GetImportJobRequest.verify|verify} messages.
                     * @param message GetImportJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IGetImportJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetImportJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetImportJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.GetImportJobRequest;

                    /**
                     * Decodes a GetImportJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetImportJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.GetImportJobRequest;

                    /**
                     * Verifies a GetImportJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetImportJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetImportJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.GetImportJobRequest;

                    /**
                     * Creates a plain object from a GetImportJobRequest message. Also converts values to other types if specified.
                     * @param message GetImportJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.GetImportJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetImportJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetImportJobRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateKeyRingRequest. */
                interface ICreateKeyRingRequest {

                    /** CreateKeyRingRequest parent */
                    parent?: (string|null);

                    /** CreateKeyRingRequest keyRingId */
                    keyRingId?: (string|null);

                    /** CreateKeyRingRequest keyRing */
                    keyRing?: (google.cloud.kms.v1.IKeyRing|null);
                }

                /** Represents a CreateKeyRingRequest. */
                class CreateKeyRingRequest implements ICreateKeyRingRequest {

                    /**
                     * Constructs a new CreateKeyRingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.ICreateKeyRingRequest);

                    /** CreateKeyRingRequest parent. */
                    public parent: string;

                    /** CreateKeyRingRequest keyRingId. */
                    public keyRingId: string;

                    /** CreateKeyRingRequest keyRing. */
                    public keyRing?: (google.cloud.kms.v1.IKeyRing|null);

                    /**
                     * Creates a new CreateKeyRingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateKeyRingRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.ICreateKeyRingRequest): google.cloud.kms.v1.CreateKeyRingRequest;

                    /**
                     * Encodes the specified CreateKeyRingRequest message. Does not implicitly {@link google.cloud.kms.v1.CreateKeyRingRequest.verify|verify} messages.
                     * @param message CreateKeyRingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.ICreateKeyRingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateKeyRingRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.CreateKeyRingRequest.verify|verify} messages.
                     * @param message CreateKeyRingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.ICreateKeyRingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateKeyRingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateKeyRingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.CreateKeyRingRequest;

                    /**
                     * Decodes a CreateKeyRingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateKeyRingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.CreateKeyRingRequest;

                    /**
                     * Verifies a CreateKeyRingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateKeyRingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateKeyRingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.CreateKeyRingRequest;

                    /**
                     * Creates a plain object from a CreateKeyRingRequest message. Also converts values to other types if specified.
                     * @param message CreateKeyRingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.CreateKeyRingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateKeyRingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateKeyRingRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateCryptoKeyRequest. */
                interface ICreateCryptoKeyRequest {

                    /** CreateCryptoKeyRequest parent */
                    parent?: (string|null);

                    /** CreateCryptoKeyRequest cryptoKeyId */
                    cryptoKeyId?: (string|null);

                    /** CreateCryptoKeyRequest cryptoKey */
                    cryptoKey?: (google.cloud.kms.v1.ICryptoKey|null);

                    /** CreateCryptoKeyRequest skipInitialVersionCreation */
                    skipInitialVersionCreation?: (boolean|null);
                }

                /** Represents a CreateCryptoKeyRequest. */
                class CreateCryptoKeyRequest implements ICreateCryptoKeyRequest {

                    /**
                     * Constructs a new CreateCryptoKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.ICreateCryptoKeyRequest);

                    /** CreateCryptoKeyRequest parent. */
                    public parent: string;

                    /** CreateCryptoKeyRequest cryptoKeyId. */
                    public cryptoKeyId: string;

                    /** CreateCryptoKeyRequest cryptoKey. */
                    public cryptoKey?: (google.cloud.kms.v1.ICryptoKey|null);

                    /** CreateCryptoKeyRequest skipInitialVersionCreation. */
                    public skipInitialVersionCreation: boolean;

                    /**
                     * Creates a new CreateCryptoKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateCryptoKeyRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.ICreateCryptoKeyRequest): google.cloud.kms.v1.CreateCryptoKeyRequest;

                    /**
                     * Encodes the specified CreateCryptoKeyRequest message. Does not implicitly {@link google.cloud.kms.v1.CreateCryptoKeyRequest.verify|verify} messages.
                     * @param message CreateCryptoKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.ICreateCryptoKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateCryptoKeyRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.CreateCryptoKeyRequest.verify|verify} messages.
                     * @param message CreateCryptoKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.ICreateCryptoKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateCryptoKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateCryptoKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.CreateCryptoKeyRequest;

                    /**
                     * Decodes a CreateCryptoKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateCryptoKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.CreateCryptoKeyRequest;

                    /**
                     * Verifies a CreateCryptoKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateCryptoKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateCryptoKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.CreateCryptoKeyRequest;

                    /**
                     * Creates a plain object from a CreateCryptoKeyRequest message. Also converts values to other types if specified.
                     * @param message CreateCryptoKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.CreateCryptoKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateCryptoKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateCryptoKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateCryptoKeyVersionRequest. */
                interface ICreateCryptoKeyVersionRequest {

                    /** CreateCryptoKeyVersionRequest parent */
                    parent?: (string|null);

                    /** CreateCryptoKeyVersionRequest cryptoKeyVersion */
                    cryptoKeyVersion?: (google.cloud.kms.v1.ICryptoKeyVersion|null);
                }

                /** Represents a CreateCryptoKeyVersionRequest. */
                class CreateCryptoKeyVersionRequest implements ICreateCryptoKeyVersionRequest {

                    /**
                     * Constructs a new CreateCryptoKeyVersionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.ICreateCryptoKeyVersionRequest);

                    /** CreateCryptoKeyVersionRequest parent. */
                    public parent: string;

                    /** CreateCryptoKeyVersionRequest cryptoKeyVersion. */
                    public cryptoKeyVersion?: (google.cloud.kms.v1.ICryptoKeyVersion|null);

                    /**
                     * Creates a new CreateCryptoKeyVersionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateCryptoKeyVersionRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.ICreateCryptoKeyVersionRequest): google.cloud.kms.v1.CreateCryptoKeyVersionRequest;

                    /**
                     * Encodes the specified CreateCryptoKeyVersionRequest message. Does not implicitly {@link google.cloud.kms.v1.CreateCryptoKeyVersionRequest.verify|verify} messages.
                     * @param message CreateCryptoKeyVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.ICreateCryptoKeyVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateCryptoKeyVersionRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.CreateCryptoKeyVersionRequest.verify|verify} messages.
                     * @param message CreateCryptoKeyVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.ICreateCryptoKeyVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateCryptoKeyVersionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateCryptoKeyVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.CreateCryptoKeyVersionRequest;

                    /**
                     * Decodes a CreateCryptoKeyVersionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateCryptoKeyVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.CreateCryptoKeyVersionRequest;

                    /**
                     * Verifies a CreateCryptoKeyVersionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateCryptoKeyVersionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateCryptoKeyVersionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.CreateCryptoKeyVersionRequest;

                    /**
                     * Creates a plain object from a CreateCryptoKeyVersionRequest message. Also converts values to other types if specified.
                     * @param message CreateCryptoKeyVersionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.CreateCryptoKeyVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateCryptoKeyVersionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateCryptoKeyVersionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportCryptoKeyVersionRequest. */
                interface IImportCryptoKeyVersionRequest {

                    /** ImportCryptoKeyVersionRequest parent */
                    parent?: (string|null);

                    /** ImportCryptoKeyVersionRequest cryptoKeyVersion */
                    cryptoKeyVersion?: (string|null);

                    /** ImportCryptoKeyVersionRequest algorithm */
                    algorithm?: (google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm|keyof typeof google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm|null);

                    /** ImportCryptoKeyVersionRequest importJob */
                    importJob?: (string|null);

                    /** ImportCryptoKeyVersionRequest wrappedKey */
                    wrappedKey?: (Uint8Array|Buffer|string|null);

                    /** ImportCryptoKeyVersionRequest rsaAesWrappedKey */
                    rsaAesWrappedKey?: (Uint8Array|Buffer|string|null);
                }

                /** Represents an ImportCryptoKeyVersionRequest. */
                class ImportCryptoKeyVersionRequest implements IImportCryptoKeyVersionRequest {

                    /**
                     * Constructs a new ImportCryptoKeyVersionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IImportCryptoKeyVersionRequest);

                    /** ImportCryptoKeyVersionRequest parent. */
                    public parent: string;

                    /** ImportCryptoKeyVersionRequest cryptoKeyVersion. */
                    public cryptoKeyVersion: string;

                    /** ImportCryptoKeyVersionRequest algorithm. */
                    public algorithm: (google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm|keyof typeof google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm);

                    /** ImportCryptoKeyVersionRequest importJob. */
                    public importJob: string;

                    /** ImportCryptoKeyVersionRequest wrappedKey. */
                    public wrappedKey: (Uint8Array|Buffer|string);

                    /** ImportCryptoKeyVersionRequest rsaAesWrappedKey. */
                    public rsaAesWrappedKey?: (Uint8Array|Buffer|string|null);

                    /** ImportCryptoKeyVersionRequest wrappedKeyMaterial. */
                    public wrappedKeyMaterial?: "rsaAesWrappedKey";

                    /**
                     * Creates a new ImportCryptoKeyVersionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportCryptoKeyVersionRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IImportCryptoKeyVersionRequest): google.cloud.kms.v1.ImportCryptoKeyVersionRequest;

                    /**
                     * Encodes the specified ImportCryptoKeyVersionRequest message. Does not implicitly {@link google.cloud.kms.v1.ImportCryptoKeyVersionRequest.verify|verify} messages.
                     * @param message ImportCryptoKeyVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IImportCryptoKeyVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportCryptoKeyVersionRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.ImportCryptoKeyVersionRequest.verify|verify} messages.
                     * @param message ImportCryptoKeyVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IImportCryptoKeyVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportCryptoKeyVersionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportCryptoKeyVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.ImportCryptoKeyVersionRequest;

                    /**
                     * Decodes an ImportCryptoKeyVersionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportCryptoKeyVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.ImportCryptoKeyVersionRequest;

                    /**
                     * Verifies an ImportCryptoKeyVersionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportCryptoKeyVersionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportCryptoKeyVersionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.ImportCryptoKeyVersionRequest;

                    /**
                     * Creates a plain object from an ImportCryptoKeyVersionRequest message. Also converts values to other types if specified.
                     * @param message ImportCryptoKeyVersionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.ImportCryptoKeyVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportCryptoKeyVersionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportCryptoKeyVersionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateImportJobRequest. */
                interface ICreateImportJobRequest {

                    /** CreateImportJobRequest parent */
                    parent?: (string|null);

                    /** CreateImportJobRequest importJobId */
                    importJobId?: (string|null);

                    /** CreateImportJobRequest importJob */
                    importJob?: (google.cloud.kms.v1.IImportJob|null);
                }

                /** Represents a CreateImportJobRequest. */
                class CreateImportJobRequest implements ICreateImportJobRequest {

                    /**
                     * Constructs a new CreateImportJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.ICreateImportJobRequest);

                    /** CreateImportJobRequest parent. */
                    public parent: string;

                    /** CreateImportJobRequest importJobId. */
                    public importJobId: string;

                    /** CreateImportJobRequest importJob. */
                    public importJob?: (google.cloud.kms.v1.IImportJob|null);

                    /**
                     * Creates a new CreateImportJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateImportJobRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.ICreateImportJobRequest): google.cloud.kms.v1.CreateImportJobRequest;

                    /**
                     * Encodes the specified CreateImportJobRequest message. Does not implicitly {@link google.cloud.kms.v1.CreateImportJobRequest.verify|verify} messages.
                     * @param message CreateImportJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.ICreateImportJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateImportJobRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.CreateImportJobRequest.verify|verify} messages.
                     * @param message CreateImportJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.ICreateImportJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateImportJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateImportJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.CreateImportJobRequest;

                    /**
                     * Decodes a CreateImportJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateImportJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.CreateImportJobRequest;

                    /**
                     * Verifies a CreateImportJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateImportJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateImportJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.CreateImportJobRequest;

                    /**
                     * Creates a plain object from a CreateImportJobRequest message. Also converts values to other types if specified.
                     * @param message CreateImportJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.CreateImportJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateImportJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateImportJobRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateCryptoKeyRequest. */
                interface IUpdateCryptoKeyRequest {

                    /** UpdateCryptoKeyRequest cryptoKey */
                    cryptoKey?: (google.cloud.kms.v1.ICryptoKey|null);

                    /** UpdateCryptoKeyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateCryptoKeyRequest. */
                class UpdateCryptoKeyRequest implements IUpdateCryptoKeyRequest {

                    /**
                     * Constructs a new UpdateCryptoKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IUpdateCryptoKeyRequest);

                    /** UpdateCryptoKeyRequest cryptoKey. */
                    public cryptoKey?: (google.cloud.kms.v1.ICryptoKey|null);

                    /** UpdateCryptoKeyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateCryptoKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateCryptoKeyRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IUpdateCryptoKeyRequest): google.cloud.kms.v1.UpdateCryptoKeyRequest;

                    /**
                     * Encodes the specified UpdateCryptoKeyRequest message. Does not implicitly {@link google.cloud.kms.v1.UpdateCryptoKeyRequest.verify|verify} messages.
                     * @param message UpdateCryptoKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IUpdateCryptoKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateCryptoKeyRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.UpdateCryptoKeyRequest.verify|verify} messages.
                     * @param message UpdateCryptoKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IUpdateCryptoKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateCryptoKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateCryptoKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.UpdateCryptoKeyRequest;

                    /**
                     * Decodes an UpdateCryptoKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateCryptoKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.UpdateCryptoKeyRequest;

                    /**
                     * Verifies an UpdateCryptoKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateCryptoKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateCryptoKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.UpdateCryptoKeyRequest;

                    /**
                     * Creates a plain object from an UpdateCryptoKeyRequest message. Also converts values to other types if specified.
                     * @param message UpdateCryptoKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.UpdateCryptoKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateCryptoKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateCryptoKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateCryptoKeyVersionRequest. */
                interface IUpdateCryptoKeyVersionRequest {

                    /** UpdateCryptoKeyVersionRequest cryptoKeyVersion */
                    cryptoKeyVersion?: (google.cloud.kms.v1.ICryptoKeyVersion|null);

                    /** UpdateCryptoKeyVersionRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateCryptoKeyVersionRequest. */
                class UpdateCryptoKeyVersionRequest implements IUpdateCryptoKeyVersionRequest {

                    /**
                     * Constructs a new UpdateCryptoKeyVersionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IUpdateCryptoKeyVersionRequest);

                    /** UpdateCryptoKeyVersionRequest cryptoKeyVersion. */
                    public cryptoKeyVersion?: (google.cloud.kms.v1.ICryptoKeyVersion|null);

                    /** UpdateCryptoKeyVersionRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateCryptoKeyVersionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateCryptoKeyVersionRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IUpdateCryptoKeyVersionRequest): google.cloud.kms.v1.UpdateCryptoKeyVersionRequest;

                    /**
                     * Encodes the specified UpdateCryptoKeyVersionRequest message. Does not implicitly {@link google.cloud.kms.v1.UpdateCryptoKeyVersionRequest.verify|verify} messages.
                     * @param message UpdateCryptoKeyVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IUpdateCryptoKeyVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateCryptoKeyVersionRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.UpdateCryptoKeyVersionRequest.verify|verify} messages.
                     * @param message UpdateCryptoKeyVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IUpdateCryptoKeyVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateCryptoKeyVersionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateCryptoKeyVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.UpdateCryptoKeyVersionRequest;

                    /**
                     * Decodes an UpdateCryptoKeyVersionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateCryptoKeyVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.UpdateCryptoKeyVersionRequest;

                    /**
                     * Verifies an UpdateCryptoKeyVersionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateCryptoKeyVersionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateCryptoKeyVersionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.UpdateCryptoKeyVersionRequest;

                    /**
                     * Creates a plain object from an UpdateCryptoKeyVersionRequest message. Also converts values to other types if specified.
                     * @param message UpdateCryptoKeyVersionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.UpdateCryptoKeyVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateCryptoKeyVersionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateCryptoKeyVersionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateCryptoKeyPrimaryVersionRequest. */
                interface IUpdateCryptoKeyPrimaryVersionRequest {

                    /** UpdateCryptoKeyPrimaryVersionRequest name */
                    name?: (string|null);

                    /** UpdateCryptoKeyPrimaryVersionRequest cryptoKeyVersionId */
                    cryptoKeyVersionId?: (string|null);
                }

                /** Represents an UpdateCryptoKeyPrimaryVersionRequest. */
                class UpdateCryptoKeyPrimaryVersionRequest implements IUpdateCryptoKeyPrimaryVersionRequest {

                    /**
                     * Constructs a new UpdateCryptoKeyPrimaryVersionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IUpdateCryptoKeyPrimaryVersionRequest);

                    /** UpdateCryptoKeyPrimaryVersionRequest name. */
                    public name: string;

                    /** UpdateCryptoKeyPrimaryVersionRequest cryptoKeyVersionId. */
                    public cryptoKeyVersionId: string;

                    /**
                     * Creates a new UpdateCryptoKeyPrimaryVersionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateCryptoKeyPrimaryVersionRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IUpdateCryptoKeyPrimaryVersionRequest): google.cloud.kms.v1.UpdateCryptoKeyPrimaryVersionRequest;

                    /**
                     * Encodes the specified UpdateCryptoKeyPrimaryVersionRequest message. Does not implicitly {@link google.cloud.kms.v1.UpdateCryptoKeyPrimaryVersionRequest.verify|verify} messages.
                     * @param message UpdateCryptoKeyPrimaryVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IUpdateCryptoKeyPrimaryVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateCryptoKeyPrimaryVersionRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.UpdateCryptoKeyPrimaryVersionRequest.verify|verify} messages.
                     * @param message UpdateCryptoKeyPrimaryVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IUpdateCryptoKeyPrimaryVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateCryptoKeyPrimaryVersionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateCryptoKeyPrimaryVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.UpdateCryptoKeyPrimaryVersionRequest;

                    /**
                     * Decodes an UpdateCryptoKeyPrimaryVersionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateCryptoKeyPrimaryVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.UpdateCryptoKeyPrimaryVersionRequest;

                    /**
                     * Verifies an UpdateCryptoKeyPrimaryVersionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateCryptoKeyPrimaryVersionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateCryptoKeyPrimaryVersionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.UpdateCryptoKeyPrimaryVersionRequest;

                    /**
                     * Creates a plain object from an UpdateCryptoKeyPrimaryVersionRequest message. Also converts values to other types if specified.
                     * @param message UpdateCryptoKeyPrimaryVersionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.UpdateCryptoKeyPrimaryVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateCryptoKeyPrimaryVersionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateCryptoKeyPrimaryVersionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DestroyCryptoKeyVersionRequest. */
                interface IDestroyCryptoKeyVersionRequest {

                    /** DestroyCryptoKeyVersionRequest name */
                    name?: (string|null);
                }

                /** Represents a DestroyCryptoKeyVersionRequest. */
                class DestroyCryptoKeyVersionRequest implements IDestroyCryptoKeyVersionRequest {

                    /**
                     * Constructs a new DestroyCryptoKeyVersionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IDestroyCryptoKeyVersionRequest);

                    /** DestroyCryptoKeyVersionRequest name. */
                    public name: string;

                    /**
                     * Creates a new DestroyCryptoKeyVersionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DestroyCryptoKeyVersionRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IDestroyCryptoKeyVersionRequest): google.cloud.kms.v1.DestroyCryptoKeyVersionRequest;

                    /**
                     * Encodes the specified DestroyCryptoKeyVersionRequest message. Does not implicitly {@link google.cloud.kms.v1.DestroyCryptoKeyVersionRequest.verify|verify} messages.
                     * @param message DestroyCryptoKeyVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IDestroyCryptoKeyVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DestroyCryptoKeyVersionRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.DestroyCryptoKeyVersionRequest.verify|verify} messages.
                     * @param message DestroyCryptoKeyVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IDestroyCryptoKeyVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DestroyCryptoKeyVersionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DestroyCryptoKeyVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.DestroyCryptoKeyVersionRequest;

                    /**
                     * Decodes a DestroyCryptoKeyVersionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DestroyCryptoKeyVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.DestroyCryptoKeyVersionRequest;

                    /**
                     * Verifies a DestroyCryptoKeyVersionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DestroyCryptoKeyVersionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DestroyCryptoKeyVersionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.DestroyCryptoKeyVersionRequest;

                    /**
                     * Creates a plain object from a DestroyCryptoKeyVersionRequest message. Also converts values to other types if specified.
                     * @param message DestroyCryptoKeyVersionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.DestroyCryptoKeyVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DestroyCryptoKeyVersionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DestroyCryptoKeyVersionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RestoreCryptoKeyVersionRequest. */
                interface IRestoreCryptoKeyVersionRequest {

                    /** RestoreCryptoKeyVersionRequest name */
                    name?: (string|null);
                }

                /** Represents a RestoreCryptoKeyVersionRequest. */
                class RestoreCryptoKeyVersionRequest implements IRestoreCryptoKeyVersionRequest {

                    /**
                     * Constructs a new RestoreCryptoKeyVersionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IRestoreCryptoKeyVersionRequest);

                    /** RestoreCryptoKeyVersionRequest name. */
                    public name: string;

                    /**
                     * Creates a new RestoreCryptoKeyVersionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestoreCryptoKeyVersionRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IRestoreCryptoKeyVersionRequest): google.cloud.kms.v1.RestoreCryptoKeyVersionRequest;

                    /**
                     * Encodes the specified RestoreCryptoKeyVersionRequest message. Does not implicitly {@link google.cloud.kms.v1.RestoreCryptoKeyVersionRequest.verify|verify} messages.
                     * @param message RestoreCryptoKeyVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IRestoreCryptoKeyVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestoreCryptoKeyVersionRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.RestoreCryptoKeyVersionRequest.verify|verify} messages.
                     * @param message RestoreCryptoKeyVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IRestoreCryptoKeyVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestoreCryptoKeyVersionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestoreCryptoKeyVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.RestoreCryptoKeyVersionRequest;

                    /**
                     * Decodes a RestoreCryptoKeyVersionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestoreCryptoKeyVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.RestoreCryptoKeyVersionRequest;

                    /**
                     * Verifies a RestoreCryptoKeyVersionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestoreCryptoKeyVersionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestoreCryptoKeyVersionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.RestoreCryptoKeyVersionRequest;

                    /**
                     * Creates a plain object from a RestoreCryptoKeyVersionRequest message. Also converts values to other types if specified.
                     * @param message RestoreCryptoKeyVersionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.RestoreCryptoKeyVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestoreCryptoKeyVersionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RestoreCryptoKeyVersionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EncryptRequest. */
                interface IEncryptRequest {

                    /** EncryptRequest name */
                    name?: (string|null);

                    /** EncryptRequest plaintext */
                    plaintext?: (Uint8Array|Buffer|string|null);

                    /** EncryptRequest additionalAuthenticatedData */
                    additionalAuthenticatedData?: (Uint8Array|Buffer|string|null);

                    /** EncryptRequest plaintextCrc32c */
                    plaintextCrc32c?: (google.protobuf.IInt64Value|null);

                    /** EncryptRequest additionalAuthenticatedDataCrc32c */
                    additionalAuthenticatedDataCrc32c?: (google.protobuf.IInt64Value|null);
                }

                /** Represents an EncryptRequest. */
                class EncryptRequest implements IEncryptRequest {

                    /**
                     * Constructs a new EncryptRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IEncryptRequest);

                    /** EncryptRequest name. */
                    public name: string;

                    /** EncryptRequest plaintext. */
                    public plaintext: (Uint8Array|Buffer|string);

                    /** EncryptRequest additionalAuthenticatedData. */
                    public additionalAuthenticatedData: (Uint8Array|Buffer|string);

                    /** EncryptRequest plaintextCrc32c. */
                    public plaintextCrc32c?: (google.protobuf.IInt64Value|null);

                    /** EncryptRequest additionalAuthenticatedDataCrc32c. */
                    public additionalAuthenticatedDataCrc32c?: (google.protobuf.IInt64Value|null);

                    /**
                     * Creates a new EncryptRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EncryptRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IEncryptRequest): google.cloud.kms.v1.EncryptRequest;

                    /**
                     * Encodes the specified EncryptRequest message. Does not implicitly {@link google.cloud.kms.v1.EncryptRequest.verify|verify} messages.
                     * @param message EncryptRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IEncryptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EncryptRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.EncryptRequest.verify|verify} messages.
                     * @param message EncryptRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IEncryptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EncryptRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EncryptRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.EncryptRequest;

                    /**
                     * Decodes an EncryptRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EncryptRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.EncryptRequest;

                    /**
                     * Verifies an EncryptRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EncryptRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EncryptRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.EncryptRequest;

                    /**
                     * Creates a plain object from an EncryptRequest message. Also converts values to other types if specified.
                     * @param message EncryptRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.EncryptRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EncryptRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EncryptRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DecryptRequest. */
                interface IDecryptRequest {

                    /** DecryptRequest name */
                    name?: (string|null);

                    /** DecryptRequest ciphertext */
                    ciphertext?: (Uint8Array|Buffer|string|null);

                    /** DecryptRequest additionalAuthenticatedData */
                    additionalAuthenticatedData?: (Uint8Array|Buffer|string|null);

                    /** DecryptRequest ciphertextCrc32c */
                    ciphertextCrc32c?: (google.protobuf.IInt64Value|null);

                    /** DecryptRequest additionalAuthenticatedDataCrc32c */
                    additionalAuthenticatedDataCrc32c?: (google.protobuf.IInt64Value|null);
                }

                /** Represents a DecryptRequest. */
                class DecryptRequest implements IDecryptRequest {

                    /**
                     * Constructs a new DecryptRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IDecryptRequest);

                    /** DecryptRequest name. */
                    public name: string;

                    /** DecryptRequest ciphertext. */
                    public ciphertext: (Uint8Array|Buffer|string);

                    /** DecryptRequest additionalAuthenticatedData. */
                    public additionalAuthenticatedData: (Uint8Array|Buffer|string);

                    /** DecryptRequest ciphertextCrc32c. */
                    public ciphertextCrc32c?: (google.protobuf.IInt64Value|null);

                    /** DecryptRequest additionalAuthenticatedDataCrc32c. */
                    public additionalAuthenticatedDataCrc32c?: (google.protobuf.IInt64Value|null);

                    /**
                     * Creates a new DecryptRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DecryptRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IDecryptRequest): google.cloud.kms.v1.DecryptRequest;

                    /**
                     * Encodes the specified DecryptRequest message. Does not implicitly {@link google.cloud.kms.v1.DecryptRequest.verify|verify} messages.
                     * @param message DecryptRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IDecryptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DecryptRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.DecryptRequest.verify|verify} messages.
                     * @param message DecryptRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IDecryptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DecryptRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DecryptRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.DecryptRequest;

                    /**
                     * Decodes a DecryptRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DecryptRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.DecryptRequest;

                    /**
                     * Verifies a DecryptRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DecryptRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DecryptRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.DecryptRequest;

                    /**
                     * Creates a plain object from a DecryptRequest message. Also converts values to other types if specified.
                     * @param message DecryptRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.DecryptRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DecryptRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DecryptRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RawEncryptRequest. */
                interface IRawEncryptRequest {

                    /** RawEncryptRequest name */
                    name?: (string|null);

                    /** RawEncryptRequest plaintext */
                    plaintext?: (Uint8Array|Buffer|string|null);

                    /** RawEncryptRequest additionalAuthenticatedData */
                    additionalAuthenticatedData?: (Uint8Array|Buffer|string|null);

                    /** RawEncryptRequest plaintextCrc32c */
                    plaintextCrc32c?: (google.protobuf.IInt64Value|null);

                    /** RawEncryptRequest additionalAuthenticatedDataCrc32c */
                    additionalAuthenticatedDataCrc32c?: (google.protobuf.IInt64Value|null);

                    /** RawEncryptRequest initializationVector */
                    initializationVector?: (Uint8Array|Buffer|string|null);

                    /** RawEncryptRequest initializationVectorCrc32c */
                    initializationVectorCrc32c?: (google.protobuf.IInt64Value|null);
                }

                /** Represents a RawEncryptRequest. */
                class RawEncryptRequest implements IRawEncryptRequest {

                    /**
                     * Constructs a new RawEncryptRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IRawEncryptRequest);

                    /** RawEncryptRequest name. */
                    public name: string;

                    /** RawEncryptRequest plaintext. */
                    public plaintext: (Uint8Array|Buffer|string);

                    /** RawEncryptRequest additionalAuthenticatedData. */
                    public additionalAuthenticatedData: (Uint8Array|Buffer|string);

                    /** RawEncryptRequest plaintextCrc32c. */
                    public plaintextCrc32c?: (google.protobuf.IInt64Value|null);

                    /** RawEncryptRequest additionalAuthenticatedDataCrc32c. */
                    public additionalAuthenticatedDataCrc32c?: (google.protobuf.IInt64Value|null);

                    /** RawEncryptRequest initializationVector. */
                    public initializationVector: (Uint8Array|Buffer|string);

                    /** RawEncryptRequest initializationVectorCrc32c. */
                    public initializationVectorCrc32c?: (google.protobuf.IInt64Value|null);

                    /**
                     * Creates a new RawEncryptRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RawEncryptRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IRawEncryptRequest): google.cloud.kms.v1.RawEncryptRequest;

                    /**
                     * Encodes the specified RawEncryptRequest message. Does not implicitly {@link google.cloud.kms.v1.RawEncryptRequest.verify|verify} messages.
                     * @param message RawEncryptRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IRawEncryptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RawEncryptRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.RawEncryptRequest.verify|verify} messages.
                     * @param message RawEncryptRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IRawEncryptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RawEncryptRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RawEncryptRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.RawEncryptRequest;

                    /**
                     * Decodes a RawEncryptRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RawEncryptRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.RawEncryptRequest;

                    /**
                     * Verifies a RawEncryptRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RawEncryptRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RawEncryptRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.RawEncryptRequest;

                    /**
                     * Creates a plain object from a RawEncryptRequest message. Also converts values to other types if specified.
                     * @param message RawEncryptRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.RawEncryptRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RawEncryptRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RawEncryptRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RawDecryptRequest. */
                interface IRawDecryptRequest {

                    /** RawDecryptRequest name */
                    name?: (string|null);

                    /** RawDecryptRequest ciphertext */
                    ciphertext?: (Uint8Array|Buffer|string|null);

                    /** RawDecryptRequest additionalAuthenticatedData */
                    additionalAuthenticatedData?: (Uint8Array|Buffer|string|null);

                    /** RawDecryptRequest initializationVector */
                    initializationVector?: (Uint8Array|Buffer|string|null);

                    /** RawDecryptRequest tagLength */
                    tagLength?: (number|null);

                    /** RawDecryptRequest ciphertextCrc32c */
                    ciphertextCrc32c?: (google.protobuf.IInt64Value|null);

                    /** RawDecryptRequest additionalAuthenticatedDataCrc32c */
                    additionalAuthenticatedDataCrc32c?: (google.protobuf.IInt64Value|null);

                    /** RawDecryptRequest initializationVectorCrc32c */
                    initializationVectorCrc32c?: (google.protobuf.IInt64Value|null);
                }

                /** Represents a RawDecryptRequest. */
                class RawDecryptRequest implements IRawDecryptRequest {

                    /**
                     * Constructs a new RawDecryptRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IRawDecryptRequest);

                    /** RawDecryptRequest name. */
                    public name: string;

                    /** RawDecryptRequest ciphertext. */
                    public ciphertext: (Uint8Array|Buffer|string);

                    /** RawDecryptRequest additionalAuthenticatedData. */
                    public additionalAuthenticatedData: (Uint8Array|Buffer|string);

                    /** RawDecryptRequest initializationVector. */
                    public initializationVector: (Uint8Array|Buffer|string);

                    /** RawDecryptRequest tagLength. */
                    public tagLength: number;

                    /** RawDecryptRequest ciphertextCrc32c. */
                    public ciphertextCrc32c?: (google.protobuf.IInt64Value|null);

                    /** RawDecryptRequest additionalAuthenticatedDataCrc32c. */
                    public additionalAuthenticatedDataCrc32c?: (google.protobuf.IInt64Value|null);

                    /** RawDecryptRequest initializationVectorCrc32c. */
                    public initializationVectorCrc32c?: (google.protobuf.IInt64Value|null);

                    /**
                     * Creates a new RawDecryptRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RawDecryptRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IRawDecryptRequest): google.cloud.kms.v1.RawDecryptRequest;

                    /**
                     * Encodes the specified RawDecryptRequest message. Does not implicitly {@link google.cloud.kms.v1.RawDecryptRequest.verify|verify} messages.
                     * @param message RawDecryptRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IRawDecryptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RawDecryptRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.RawDecryptRequest.verify|verify} messages.
                     * @param message RawDecryptRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IRawDecryptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RawDecryptRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RawDecryptRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.RawDecryptRequest;

                    /**
                     * Decodes a RawDecryptRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RawDecryptRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.RawDecryptRequest;

                    /**
                     * Verifies a RawDecryptRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RawDecryptRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RawDecryptRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.RawDecryptRequest;

                    /**
                     * Creates a plain object from a RawDecryptRequest message. Also converts values to other types if specified.
                     * @param message RawDecryptRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.RawDecryptRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RawDecryptRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RawDecryptRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AsymmetricSignRequest. */
                interface IAsymmetricSignRequest {

                    /** AsymmetricSignRequest name */
                    name?: (string|null);

                    /** AsymmetricSignRequest digest */
                    digest?: (google.cloud.kms.v1.IDigest|null);

                    /** AsymmetricSignRequest digestCrc32c */
                    digestCrc32c?: (google.protobuf.IInt64Value|null);

                    /** AsymmetricSignRequest data */
                    data?: (Uint8Array|Buffer|string|null);

                    /** AsymmetricSignRequest dataCrc32c */
                    dataCrc32c?: (google.protobuf.IInt64Value|null);
                }

                /** Represents an AsymmetricSignRequest. */
                class AsymmetricSignRequest implements IAsymmetricSignRequest {

                    /**
                     * Constructs a new AsymmetricSignRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IAsymmetricSignRequest);

                    /** AsymmetricSignRequest name. */
                    public name: string;

                    /** AsymmetricSignRequest digest. */
                    public digest?: (google.cloud.kms.v1.IDigest|null);

                    /** AsymmetricSignRequest digestCrc32c. */
                    public digestCrc32c?: (google.protobuf.IInt64Value|null);

                    /** AsymmetricSignRequest data. */
                    public data: (Uint8Array|Buffer|string);

                    /** AsymmetricSignRequest dataCrc32c. */
                    public dataCrc32c?: (google.protobuf.IInt64Value|null);

                    /**
                     * Creates a new AsymmetricSignRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AsymmetricSignRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IAsymmetricSignRequest): google.cloud.kms.v1.AsymmetricSignRequest;

                    /**
                     * Encodes the specified AsymmetricSignRequest message. Does not implicitly {@link google.cloud.kms.v1.AsymmetricSignRequest.verify|verify} messages.
                     * @param message AsymmetricSignRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IAsymmetricSignRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AsymmetricSignRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.AsymmetricSignRequest.verify|verify} messages.
                     * @param message AsymmetricSignRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IAsymmetricSignRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AsymmetricSignRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AsymmetricSignRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.AsymmetricSignRequest;

                    /**
                     * Decodes an AsymmetricSignRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AsymmetricSignRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.AsymmetricSignRequest;

                    /**
                     * Verifies an AsymmetricSignRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AsymmetricSignRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AsymmetricSignRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.AsymmetricSignRequest;

                    /**
                     * Creates a plain object from an AsymmetricSignRequest message. Also converts values to other types if specified.
                     * @param message AsymmetricSignRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.AsymmetricSignRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AsymmetricSignRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AsymmetricSignRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AsymmetricDecryptRequest. */
                interface IAsymmetricDecryptRequest {

                    /** AsymmetricDecryptRequest name */
                    name?: (string|null);

                    /** AsymmetricDecryptRequest ciphertext */
                    ciphertext?: (Uint8Array|Buffer|string|null);

                    /** AsymmetricDecryptRequest ciphertextCrc32c */
                    ciphertextCrc32c?: (google.protobuf.IInt64Value|null);
                }

                /** Represents an AsymmetricDecryptRequest. */
                class AsymmetricDecryptRequest implements IAsymmetricDecryptRequest {

                    /**
                     * Constructs a new AsymmetricDecryptRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IAsymmetricDecryptRequest);

                    /** AsymmetricDecryptRequest name. */
                    public name: string;

                    /** AsymmetricDecryptRequest ciphertext. */
                    public ciphertext: (Uint8Array|Buffer|string);

                    /** AsymmetricDecryptRequest ciphertextCrc32c. */
                    public ciphertextCrc32c?: (google.protobuf.IInt64Value|null);

                    /**
                     * Creates a new AsymmetricDecryptRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AsymmetricDecryptRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IAsymmetricDecryptRequest): google.cloud.kms.v1.AsymmetricDecryptRequest;

                    /**
                     * Encodes the specified AsymmetricDecryptRequest message. Does not implicitly {@link google.cloud.kms.v1.AsymmetricDecryptRequest.verify|verify} messages.
                     * @param message AsymmetricDecryptRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IAsymmetricDecryptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AsymmetricDecryptRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.AsymmetricDecryptRequest.verify|verify} messages.
                     * @param message AsymmetricDecryptRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IAsymmetricDecryptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AsymmetricDecryptRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AsymmetricDecryptRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.AsymmetricDecryptRequest;

                    /**
                     * Decodes an AsymmetricDecryptRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AsymmetricDecryptRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.AsymmetricDecryptRequest;

                    /**
                     * Verifies an AsymmetricDecryptRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AsymmetricDecryptRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AsymmetricDecryptRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.AsymmetricDecryptRequest;

                    /**
                     * Creates a plain object from an AsymmetricDecryptRequest message. Also converts values to other types if specified.
                     * @param message AsymmetricDecryptRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.AsymmetricDecryptRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AsymmetricDecryptRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AsymmetricDecryptRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MacSignRequest. */
                interface IMacSignRequest {

                    /** MacSignRequest name */
                    name?: (string|null);

                    /** MacSignRequest data */
                    data?: (Uint8Array|Buffer|string|null);

                    /** MacSignRequest dataCrc32c */
                    dataCrc32c?: (google.protobuf.IInt64Value|null);
                }

                /** Represents a MacSignRequest. */
                class MacSignRequest implements IMacSignRequest {

                    /**
                     * Constructs a new MacSignRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IMacSignRequest);

                    /** MacSignRequest name. */
                    public name: string;

                    /** MacSignRequest data. */
                    public data: (Uint8Array|Buffer|string);

                    /** MacSignRequest dataCrc32c. */
                    public dataCrc32c?: (google.protobuf.IInt64Value|null);

                    /**
                     * Creates a new MacSignRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MacSignRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IMacSignRequest): google.cloud.kms.v1.MacSignRequest;

                    /**
                     * Encodes the specified MacSignRequest message. Does not implicitly {@link google.cloud.kms.v1.MacSignRequest.verify|verify} messages.
                     * @param message MacSignRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IMacSignRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MacSignRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.MacSignRequest.verify|verify} messages.
                     * @param message MacSignRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IMacSignRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MacSignRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MacSignRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.MacSignRequest;

                    /**
                     * Decodes a MacSignRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MacSignRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.MacSignRequest;

                    /**
                     * Verifies a MacSignRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MacSignRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MacSignRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.MacSignRequest;

                    /**
                     * Creates a plain object from a MacSignRequest message. Also converts values to other types if specified.
                     * @param message MacSignRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.MacSignRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MacSignRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MacSignRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MacVerifyRequest. */
                interface IMacVerifyRequest {

                    /** MacVerifyRequest name */
                    name?: (string|null);

                    /** MacVerifyRequest data */
                    data?: (Uint8Array|Buffer|string|null);

                    /** MacVerifyRequest dataCrc32c */
                    dataCrc32c?: (google.protobuf.IInt64Value|null);

                    /** MacVerifyRequest mac */
                    mac?: (Uint8Array|Buffer|string|null);

                    /** MacVerifyRequest macCrc32c */
                    macCrc32c?: (google.protobuf.IInt64Value|null);
                }

                /** Represents a MacVerifyRequest. */
                class MacVerifyRequest implements IMacVerifyRequest {

                    /**
                     * Constructs a new MacVerifyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IMacVerifyRequest);

                    /** MacVerifyRequest name. */
                    public name: string;

                    /** MacVerifyRequest data. */
                    public data: (Uint8Array|Buffer|string);

                    /** MacVerifyRequest dataCrc32c. */
                    public dataCrc32c?: (google.protobuf.IInt64Value|null);

                    /** MacVerifyRequest mac. */
                    public mac: (Uint8Array|Buffer|string);

                    /** MacVerifyRequest macCrc32c. */
                    public macCrc32c?: (google.protobuf.IInt64Value|null);

                    /**
                     * Creates a new MacVerifyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MacVerifyRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IMacVerifyRequest): google.cloud.kms.v1.MacVerifyRequest;

                    /**
                     * Encodes the specified MacVerifyRequest message. Does not implicitly {@link google.cloud.kms.v1.MacVerifyRequest.verify|verify} messages.
                     * @param message MacVerifyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IMacVerifyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MacVerifyRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.MacVerifyRequest.verify|verify} messages.
                     * @param message MacVerifyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IMacVerifyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MacVerifyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MacVerifyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.MacVerifyRequest;

                    /**
                     * Decodes a MacVerifyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MacVerifyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.MacVerifyRequest;

                    /**
                     * Verifies a MacVerifyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MacVerifyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MacVerifyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.MacVerifyRequest;

                    /**
                     * Creates a plain object from a MacVerifyRequest message. Also converts values to other types if specified.
                     * @param message MacVerifyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.MacVerifyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MacVerifyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MacVerifyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DecapsulateRequest. */
                interface IDecapsulateRequest {

                    /** DecapsulateRequest name */
                    name?: (string|null);

                    /** DecapsulateRequest ciphertext */
                    ciphertext?: (Uint8Array|Buffer|string|null);

                    /** DecapsulateRequest ciphertextCrc32c */
                    ciphertextCrc32c?: (google.protobuf.IInt64Value|null);
                }

                /** Represents a DecapsulateRequest. */
                class DecapsulateRequest implements IDecapsulateRequest {

                    /**
                     * Constructs a new DecapsulateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IDecapsulateRequest);

                    /** DecapsulateRequest name. */
                    public name: string;

                    /** DecapsulateRequest ciphertext. */
                    public ciphertext: (Uint8Array|Buffer|string);

                    /** DecapsulateRequest ciphertextCrc32c. */
                    public ciphertextCrc32c?: (google.protobuf.IInt64Value|null);

                    /**
                     * Creates a new DecapsulateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DecapsulateRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IDecapsulateRequest): google.cloud.kms.v1.DecapsulateRequest;

                    /**
                     * Encodes the specified DecapsulateRequest message. Does not implicitly {@link google.cloud.kms.v1.DecapsulateRequest.verify|verify} messages.
                     * @param message DecapsulateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IDecapsulateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DecapsulateRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.DecapsulateRequest.verify|verify} messages.
                     * @param message DecapsulateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IDecapsulateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DecapsulateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DecapsulateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.DecapsulateRequest;

                    /**
                     * Decodes a DecapsulateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DecapsulateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.DecapsulateRequest;

                    /**
                     * Verifies a DecapsulateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DecapsulateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DecapsulateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.DecapsulateRequest;

                    /**
                     * Creates a plain object from a DecapsulateRequest message. Also converts values to other types if specified.
                     * @param message DecapsulateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.DecapsulateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DecapsulateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DecapsulateRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GenerateRandomBytesRequest. */
                interface IGenerateRandomBytesRequest {

                    /** GenerateRandomBytesRequest location */
                    location?: (string|null);

                    /** GenerateRandomBytesRequest lengthBytes */
                    lengthBytes?: (number|null);

                    /** GenerateRandomBytesRequest protectionLevel */
                    protectionLevel?: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel|null);
                }

                /** Represents a GenerateRandomBytesRequest. */
                class GenerateRandomBytesRequest implements IGenerateRandomBytesRequest {

                    /**
                     * Constructs a new GenerateRandomBytesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IGenerateRandomBytesRequest);

                    /** GenerateRandomBytesRequest location. */
                    public location: string;

                    /** GenerateRandomBytesRequest lengthBytes. */
                    public lengthBytes: number;

                    /** GenerateRandomBytesRequest protectionLevel. */
                    public protectionLevel: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel);

                    /**
                     * Creates a new GenerateRandomBytesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateRandomBytesRequest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IGenerateRandomBytesRequest): google.cloud.kms.v1.GenerateRandomBytesRequest;

                    /**
                     * Encodes the specified GenerateRandomBytesRequest message. Does not implicitly {@link google.cloud.kms.v1.GenerateRandomBytesRequest.verify|verify} messages.
                     * @param message GenerateRandomBytesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IGenerateRandomBytesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateRandomBytesRequest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.GenerateRandomBytesRequest.verify|verify} messages.
                     * @param message GenerateRandomBytesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IGenerateRandomBytesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateRandomBytesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateRandomBytesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.GenerateRandomBytesRequest;

                    /**
                     * Decodes a GenerateRandomBytesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateRandomBytesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.GenerateRandomBytesRequest;

                    /**
                     * Verifies a GenerateRandomBytesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateRandomBytesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateRandomBytesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.GenerateRandomBytesRequest;

                    /**
                     * Creates a plain object from a GenerateRandomBytesRequest message. Also converts values to other types if specified.
                     * @param message GenerateRandomBytesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.GenerateRandomBytesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateRandomBytesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateRandomBytesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EncryptResponse. */
                interface IEncryptResponse {

                    /** EncryptResponse name */
                    name?: (string|null);

                    /** EncryptResponse ciphertext */
                    ciphertext?: (Uint8Array|Buffer|string|null);

                    /** EncryptResponse ciphertextCrc32c */
                    ciphertextCrc32c?: (google.protobuf.IInt64Value|null);

                    /** EncryptResponse verifiedPlaintextCrc32c */
                    verifiedPlaintextCrc32c?: (boolean|null);

                    /** EncryptResponse verifiedAdditionalAuthenticatedDataCrc32c */
                    verifiedAdditionalAuthenticatedDataCrc32c?: (boolean|null);

                    /** EncryptResponse protectionLevel */
                    protectionLevel?: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel|null);
                }

                /** Represents an EncryptResponse. */
                class EncryptResponse implements IEncryptResponse {

                    /**
                     * Constructs a new EncryptResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IEncryptResponse);

                    /** EncryptResponse name. */
                    public name: string;

                    /** EncryptResponse ciphertext. */
                    public ciphertext: (Uint8Array|Buffer|string);

                    /** EncryptResponse ciphertextCrc32c. */
                    public ciphertextCrc32c?: (google.protobuf.IInt64Value|null);

                    /** EncryptResponse verifiedPlaintextCrc32c. */
                    public verifiedPlaintextCrc32c: boolean;

                    /** EncryptResponse verifiedAdditionalAuthenticatedDataCrc32c. */
                    public verifiedAdditionalAuthenticatedDataCrc32c: boolean;

                    /** EncryptResponse protectionLevel. */
                    public protectionLevel: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel);

                    /**
                     * Creates a new EncryptResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EncryptResponse instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IEncryptResponse): google.cloud.kms.v1.EncryptResponse;

                    /**
                     * Encodes the specified EncryptResponse message. Does not implicitly {@link google.cloud.kms.v1.EncryptResponse.verify|verify} messages.
                     * @param message EncryptResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IEncryptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EncryptResponse message, length delimited. Does not implicitly {@link google.cloud.kms.v1.EncryptResponse.verify|verify} messages.
                     * @param message EncryptResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IEncryptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EncryptResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EncryptResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.EncryptResponse;

                    /**
                     * Decodes an EncryptResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EncryptResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.EncryptResponse;

                    /**
                     * Verifies an EncryptResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EncryptResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EncryptResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.EncryptResponse;

                    /**
                     * Creates a plain object from an EncryptResponse message. Also converts values to other types if specified.
                     * @param message EncryptResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.EncryptResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EncryptResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EncryptResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DecryptResponse. */
                interface IDecryptResponse {

                    /** DecryptResponse plaintext */
                    plaintext?: (Uint8Array|Buffer|string|null);

                    /** DecryptResponse plaintextCrc32c */
                    plaintextCrc32c?: (google.protobuf.IInt64Value|null);

                    /** DecryptResponse usedPrimary */
                    usedPrimary?: (boolean|null);

                    /** DecryptResponse protectionLevel */
                    protectionLevel?: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel|null);
                }

                /** Represents a DecryptResponse. */
                class DecryptResponse implements IDecryptResponse {

                    /**
                     * Constructs a new DecryptResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IDecryptResponse);

                    /** DecryptResponse plaintext. */
                    public plaintext: (Uint8Array|Buffer|string);

                    /** DecryptResponse plaintextCrc32c. */
                    public plaintextCrc32c?: (google.protobuf.IInt64Value|null);

                    /** DecryptResponse usedPrimary. */
                    public usedPrimary: boolean;

                    /** DecryptResponse protectionLevel. */
                    public protectionLevel: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel);

                    /**
                     * Creates a new DecryptResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DecryptResponse instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IDecryptResponse): google.cloud.kms.v1.DecryptResponse;

                    /**
                     * Encodes the specified DecryptResponse message. Does not implicitly {@link google.cloud.kms.v1.DecryptResponse.verify|verify} messages.
                     * @param message DecryptResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IDecryptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DecryptResponse message, length delimited. Does not implicitly {@link google.cloud.kms.v1.DecryptResponse.verify|verify} messages.
                     * @param message DecryptResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IDecryptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DecryptResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DecryptResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.DecryptResponse;

                    /**
                     * Decodes a DecryptResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DecryptResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.DecryptResponse;

                    /**
                     * Verifies a DecryptResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DecryptResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DecryptResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.DecryptResponse;

                    /**
                     * Creates a plain object from a DecryptResponse message. Also converts values to other types if specified.
                     * @param message DecryptResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.DecryptResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DecryptResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DecryptResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RawEncryptResponse. */
                interface IRawEncryptResponse {

                    /** RawEncryptResponse ciphertext */
                    ciphertext?: (Uint8Array|Buffer|string|null);

                    /** RawEncryptResponse initializationVector */
                    initializationVector?: (Uint8Array|Buffer|string|null);

                    /** RawEncryptResponse tagLength */
                    tagLength?: (number|null);

                    /** RawEncryptResponse ciphertextCrc32c */
                    ciphertextCrc32c?: (google.protobuf.IInt64Value|null);

                    /** RawEncryptResponse initializationVectorCrc32c */
                    initializationVectorCrc32c?: (google.protobuf.IInt64Value|null);

                    /** RawEncryptResponse verifiedPlaintextCrc32c */
                    verifiedPlaintextCrc32c?: (boolean|null);

                    /** RawEncryptResponse verifiedAdditionalAuthenticatedDataCrc32c */
                    verifiedAdditionalAuthenticatedDataCrc32c?: (boolean|null);

                    /** RawEncryptResponse verifiedInitializationVectorCrc32c */
                    verifiedInitializationVectorCrc32c?: (boolean|null);

                    /** RawEncryptResponse name */
                    name?: (string|null);

                    /** RawEncryptResponse protectionLevel */
                    protectionLevel?: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel|null);
                }

                /** Represents a RawEncryptResponse. */
                class RawEncryptResponse implements IRawEncryptResponse {

                    /**
                     * Constructs a new RawEncryptResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IRawEncryptResponse);

                    /** RawEncryptResponse ciphertext. */
                    public ciphertext: (Uint8Array|Buffer|string);

                    /** RawEncryptResponse initializationVector. */
                    public initializationVector: (Uint8Array|Buffer|string);

                    /** RawEncryptResponse tagLength. */
                    public tagLength: number;

                    /** RawEncryptResponse ciphertextCrc32c. */
                    public ciphertextCrc32c?: (google.protobuf.IInt64Value|null);

                    /** RawEncryptResponse initializationVectorCrc32c. */
                    public initializationVectorCrc32c?: (google.protobuf.IInt64Value|null);

                    /** RawEncryptResponse verifiedPlaintextCrc32c. */
                    public verifiedPlaintextCrc32c: boolean;

                    /** RawEncryptResponse verifiedAdditionalAuthenticatedDataCrc32c. */
                    public verifiedAdditionalAuthenticatedDataCrc32c: boolean;

                    /** RawEncryptResponse verifiedInitializationVectorCrc32c. */
                    public verifiedInitializationVectorCrc32c: boolean;

                    /** RawEncryptResponse name. */
                    public name: string;

                    /** RawEncryptResponse protectionLevel. */
                    public protectionLevel: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel);

                    /**
                     * Creates a new RawEncryptResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RawEncryptResponse instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IRawEncryptResponse): google.cloud.kms.v1.RawEncryptResponse;

                    /**
                     * Encodes the specified RawEncryptResponse message. Does not implicitly {@link google.cloud.kms.v1.RawEncryptResponse.verify|verify} messages.
                     * @param message RawEncryptResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IRawEncryptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RawEncryptResponse message, length delimited. Does not implicitly {@link google.cloud.kms.v1.RawEncryptResponse.verify|verify} messages.
                     * @param message RawEncryptResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IRawEncryptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RawEncryptResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RawEncryptResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.RawEncryptResponse;

                    /**
                     * Decodes a RawEncryptResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RawEncryptResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.RawEncryptResponse;

                    /**
                     * Verifies a RawEncryptResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RawEncryptResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RawEncryptResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.RawEncryptResponse;

                    /**
                     * Creates a plain object from a RawEncryptResponse message. Also converts values to other types if specified.
                     * @param message RawEncryptResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.RawEncryptResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RawEncryptResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RawEncryptResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RawDecryptResponse. */
                interface IRawDecryptResponse {

                    /** RawDecryptResponse plaintext */
                    plaintext?: (Uint8Array|Buffer|string|null);

                    /** RawDecryptResponse plaintextCrc32c */
                    plaintextCrc32c?: (google.protobuf.IInt64Value|null);

                    /** RawDecryptResponse protectionLevel */
                    protectionLevel?: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel|null);

                    /** RawDecryptResponse verifiedCiphertextCrc32c */
                    verifiedCiphertextCrc32c?: (boolean|null);

                    /** RawDecryptResponse verifiedAdditionalAuthenticatedDataCrc32c */
                    verifiedAdditionalAuthenticatedDataCrc32c?: (boolean|null);

                    /** RawDecryptResponse verifiedInitializationVectorCrc32c */
                    verifiedInitializationVectorCrc32c?: (boolean|null);
                }

                /** Represents a RawDecryptResponse. */
                class RawDecryptResponse implements IRawDecryptResponse {

                    /**
                     * Constructs a new RawDecryptResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IRawDecryptResponse);

                    /** RawDecryptResponse plaintext. */
                    public plaintext: (Uint8Array|Buffer|string);

                    /** RawDecryptResponse plaintextCrc32c. */
                    public plaintextCrc32c?: (google.protobuf.IInt64Value|null);

                    /** RawDecryptResponse protectionLevel. */
                    public protectionLevel: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel);

                    /** RawDecryptResponse verifiedCiphertextCrc32c. */
                    public verifiedCiphertextCrc32c: boolean;

                    /** RawDecryptResponse verifiedAdditionalAuthenticatedDataCrc32c. */
                    public verifiedAdditionalAuthenticatedDataCrc32c: boolean;

                    /** RawDecryptResponse verifiedInitializationVectorCrc32c. */
                    public verifiedInitializationVectorCrc32c: boolean;

                    /**
                     * Creates a new RawDecryptResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RawDecryptResponse instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IRawDecryptResponse): google.cloud.kms.v1.RawDecryptResponse;

                    /**
                     * Encodes the specified RawDecryptResponse message. Does not implicitly {@link google.cloud.kms.v1.RawDecryptResponse.verify|verify} messages.
                     * @param message RawDecryptResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IRawDecryptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RawDecryptResponse message, length delimited. Does not implicitly {@link google.cloud.kms.v1.RawDecryptResponse.verify|verify} messages.
                     * @param message RawDecryptResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IRawDecryptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RawDecryptResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RawDecryptResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.RawDecryptResponse;

                    /**
                     * Decodes a RawDecryptResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RawDecryptResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.RawDecryptResponse;

                    /**
                     * Verifies a RawDecryptResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RawDecryptResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RawDecryptResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.RawDecryptResponse;

                    /**
                     * Creates a plain object from a RawDecryptResponse message. Also converts values to other types if specified.
                     * @param message RawDecryptResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.RawDecryptResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RawDecryptResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RawDecryptResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AsymmetricSignResponse. */
                interface IAsymmetricSignResponse {

                    /** AsymmetricSignResponse signature */
                    signature?: (Uint8Array|Buffer|string|null);

                    /** AsymmetricSignResponse signatureCrc32c */
                    signatureCrc32c?: (google.protobuf.IInt64Value|null);

                    /** AsymmetricSignResponse verifiedDigestCrc32c */
                    verifiedDigestCrc32c?: (boolean|null);

                    /** AsymmetricSignResponse name */
                    name?: (string|null);

                    /** AsymmetricSignResponse verifiedDataCrc32c */
                    verifiedDataCrc32c?: (boolean|null);

                    /** AsymmetricSignResponse protectionLevel */
                    protectionLevel?: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel|null);
                }

                /** Represents an AsymmetricSignResponse. */
                class AsymmetricSignResponse implements IAsymmetricSignResponse {

                    /**
                     * Constructs a new AsymmetricSignResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IAsymmetricSignResponse);

                    /** AsymmetricSignResponse signature. */
                    public signature: (Uint8Array|Buffer|string);

                    /** AsymmetricSignResponse signatureCrc32c. */
                    public signatureCrc32c?: (google.protobuf.IInt64Value|null);

                    /** AsymmetricSignResponse verifiedDigestCrc32c. */
                    public verifiedDigestCrc32c: boolean;

                    /** AsymmetricSignResponse name. */
                    public name: string;

                    /** AsymmetricSignResponse verifiedDataCrc32c. */
                    public verifiedDataCrc32c: boolean;

                    /** AsymmetricSignResponse protectionLevel. */
                    public protectionLevel: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel);

                    /**
                     * Creates a new AsymmetricSignResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AsymmetricSignResponse instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IAsymmetricSignResponse): google.cloud.kms.v1.AsymmetricSignResponse;

                    /**
                     * Encodes the specified AsymmetricSignResponse message. Does not implicitly {@link google.cloud.kms.v1.AsymmetricSignResponse.verify|verify} messages.
                     * @param message AsymmetricSignResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IAsymmetricSignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AsymmetricSignResponse message, length delimited. Does not implicitly {@link google.cloud.kms.v1.AsymmetricSignResponse.verify|verify} messages.
                     * @param message AsymmetricSignResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IAsymmetricSignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AsymmetricSignResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AsymmetricSignResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.AsymmetricSignResponse;

                    /**
                     * Decodes an AsymmetricSignResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AsymmetricSignResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.AsymmetricSignResponse;

                    /**
                     * Verifies an AsymmetricSignResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AsymmetricSignResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AsymmetricSignResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.AsymmetricSignResponse;

                    /**
                     * Creates a plain object from an AsymmetricSignResponse message. Also converts values to other types if specified.
                     * @param message AsymmetricSignResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.AsymmetricSignResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AsymmetricSignResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AsymmetricSignResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AsymmetricDecryptResponse. */
                interface IAsymmetricDecryptResponse {

                    /** AsymmetricDecryptResponse plaintext */
                    plaintext?: (Uint8Array|Buffer|string|null);

                    /** AsymmetricDecryptResponse plaintextCrc32c */
                    plaintextCrc32c?: (google.protobuf.IInt64Value|null);

                    /** AsymmetricDecryptResponse verifiedCiphertextCrc32c */
                    verifiedCiphertextCrc32c?: (boolean|null);

                    /** AsymmetricDecryptResponse protectionLevel */
                    protectionLevel?: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel|null);
                }

                /** Represents an AsymmetricDecryptResponse. */
                class AsymmetricDecryptResponse implements IAsymmetricDecryptResponse {

                    /**
                     * Constructs a new AsymmetricDecryptResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IAsymmetricDecryptResponse);

                    /** AsymmetricDecryptResponse plaintext. */
                    public plaintext: (Uint8Array|Buffer|string);

                    /** AsymmetricDecryptResponse plaintextCrc32c. */
                    public plaintextCrc32c?: (google.protobuf.IInt64Value|null);

                    /** AsymmetricDecryptResponse verifiedCiphertextCrc32c. */
                    public verifiedCiphertextCrc32c: boolean;

                    /** AsymmetricDecryptResponse protectionLevel. */
                    public protectionLevel: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel);

                    /**
                     * Creates a new AsymmetricDecryptResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AsymmetricDecryptResponse instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IAsymmetricDecryptResponse): google.cloud.kms.v1.AsymmetricDecryptResponse;

                    /**
                     * Encodes the specified AsymmetricDecryptResponse message. Does not implicitly {@link google.cloud.kms.v1.AsymmetricDecryptResponse.verify|verify} messages.
                     * @param message AsymmetricDecryptResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IAsymmetricDecryptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AsymmetricDecryptResponse message, length delimited. Does not implicitly {@link google.cloud.kms.v1.AsymmetricDecryptResponse.verify|verify} messages.
                     * @param message AsymmetricDecryptResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IAsymmetricDecryptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AsymmetricDecryptResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AsymmetricDecryptResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.AsymmetricDecryptResponse;

                    /**
                     * Decodes an AsymmetricDecryptResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AsymmetricDecryptResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.AsymmetricDecryptResponse;

                    /**
                     * Verifies an AsymmetricDecryptResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AsymmetricDecryptResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AsymmetricDecryptResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.AsymmetricDecryptResponse;

                    /**
                     * Creates a plain object from an AsymmetricDecryptResponse message. Also converts values to other types if specified.
                     * @param message AsymmetricDecryptResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.AsymmetricDecryptResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AsymmetricDecryptResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AsymmetricDecryptResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MacSignResponse. */
                interface IMacSignResponse {

                    /** MacSignResponse name */
                    name?: (string|null);

                    /** MacSignResponse mac */
                    mac?: (Uint8Array|Buffer|string|null);

                    /** MacSignResponse macCrc32c */
                    macCrc32c?: (google.protobuf.IInt64Value|null);

                    /** MacSignResponse verifiedDataCrc32c */
                    verifiedDataCrc32c?: (boolean|null);

                    /** MacSignResponse protectionLevel */
                    protectionLevel?: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel|null);
                }

                /** Represents a MacSignResponse. */
                class MacSignResponse implements IMacSignResponse {

                    /**
                     * Constructs a new MacSignResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IMacSignResponse);

                    /** MacSignResponse name. */
                    public name: string;

                    /** MacSignResponse mac. */
                    public mac: (Uint8Array|Buffer|string);

                    /** MacSignResponse macCrc32c. */
                    public macCrc32c?: (google.protobuf.IInt64Value|null);

                    /** MacSignResponse verifiedDataCrc32c. */
                    public verifiedDataCrc32c: boolean;

                    /** MacSignResponse protectionLevel. */
                    public protectionLevel: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel);

                    /**
                     * Creates a new MacSignResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MacSignResponse instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IMacSignResponse): google.cloud.kms.v1.MacSignResponse;

                    /**
                     * Encodes the specified MacSignResponse message. Does not implicitly {@link google.cloud.kms.v1.MacSignResponse.verify|verify} messages.
                     * @param message MacSignResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IMacSignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MacSignResponse message, length delimited. Does not implicitly {@link google.cloud.kms.v1.MacSignResponse.verify|verify} messages.
                     * @param message MacSignResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IMacSignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MacSignResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MacSignResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.MacSignResponse;

                    /**
                     * Decodes a MacSignResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MacSignResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.MacSignResponse;

                    /**
                     * Verifies a MacSignResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MacSignResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MacSignResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.MacSignResponse;

                    /**
                     * Creates a plain object from a MacSignResponse message. Also converts values to other types if specified.
                     * @param message MacSignResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.MacSignResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MacSignResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MacSignResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MacVerifyResponse. */
                interface IMacVerifyResponse {

                    /** MacVerifyResponse name */
                    name?: (string|null);

                    /** MacVerifyResponse success */
                    success?: (boolean|null);

                    /** MacVerifyResponse verifiedDataCrc32c */
                    verifiedDataCrc32c?: (boolean|null);

                    /** MacVerifyResponse verifiedMacCrc32c */
                    verifiedMacCrc32c?: (boolean|null);

                    /** MacVerifyResponse verifiedSuccessIntegrity */
                    verifiedSuccessIntegrity?: (boolean|null);

                    /** MacVerifyResponse protectionLevel */
                    protectionLevel?: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel|null);
                }

                /** Represents a MacVerifyResponse. */
                class MacVerifyResponse implements IMacVerifyResponse {

                    /**
                     * Constructs a new MacVerifyResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IMacVerifyResponse);

                    /** MacVerifyResponse name. */
                    public name: string;

                    /** MacVerifyResponse success. */
                    public success: boolean;

                    /** MacVerifyResponse verifiedDataCrc32c. */
                    public verifiedDataCrc32c: boolean;

                    /** MacVerifyResponse verifiedMacCrc32c. */
                    public verifiedMacCrc32c: boolean;

                    /** MacVerifyResponse verifiedSuccessIntegrity. */
                    public verifiedSuccessIntegrity: boolean;

                    /** MacVerifyResponse protectionLevel. */
                    public protectionLevel: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel);

                    /**
                     * Creates a new MacVerifyResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MacVerifyResponse instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IMacVerifyResponse): google.cloud.kms.v1.MacVerifyResponse;

                    /**
                     * Encodes the specified MacVerifyResponse message. Does not implicitly {@link google.cloud.kms.v1.MacVerifyResponse.verify|verify} messages.
                     * @param message MacVerifyResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IMacVerifyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MacVerifyResponse message, length delimited. Does not implicitly {@link google.cloud.kms.v1.MacVerifyResponse.verify|verify} messages.
                     * @param message MacVerifyResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IMacVerifyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MacVerifyResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MacVerifyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.MacVerifyResponse;

                    /**
                     * Decodes a MacVerifyResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MacVerifyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.MacVerifyResponse;

                    /**
                     * Verifies a MacVerifyResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MacVerifyResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MacVerifyResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.MacVerifyResponse;

                    /**
                     * Creates a plain object from a MacVerifyResponse message. Also converts values to other types if specified.
                     * @param message MacVerifyResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.MacVerifyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MacVerifyResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MacVerifyResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DecapsulateResponse. */
                interface IDecapsulateResponse {

                    /** DecapsulateResponse name */
                    name?: (string|null);

                    /** DecapsulateResponse sharedSecret */
                    sharedSecret?: (Uint8Array|Buffer|string|null);

                    /** DecapsulateResponse sharedSecretCrc32c */
                    sharedSecretCrc32c?: (number|Long|string|null);

                    /** DecapsulateResponse verifiedCiphertextCrc32c */
                    verifiedCiphertextCrc32c?: (boolean|null);

                    /** DecapsulateResponse protectionLevel */
                    protectionLevel?: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel|null);
                }

                /** Represents a DecapsulateResponse. */
                class DecapsulateResponse implements IDecapsulateResponse {

                    /**
                     * Constructs a new DecapsulateResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IDecapsulateResponse);

                    /** DecapsulateResponse name. */
                    public name: string;

                    /** DecapsulateResponse sharedSecret. */
                    public sharedSecret: (Uint8Array|Buffer|string);

                    /** DecapsulateResponse sharedSecretCrc32c. */
                    public sharedSecretCrc32c?: (number|Long|string|null);

                    /** DecapsulateResponse verifiedCiphertextCrc32c. */
                    public verifiedCiphertextCrc32c: boolean;

                    /** DecapsulateResponse protectionLevel. */
                    public protectionLevel: (google.cloud.kms.v1.ProtectionLevel|keyof typeof google.cloud.kms.v1.ProtectionLevel);

                    /**
                     * Creates a new DecapsulateResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DecapsulateResponse instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IDecapsulateResponse): google.cloud.kms.v1.DecapsulateResponse;

                    /**
                     * Encodes the specified DecapsulateResponse message. Does not implicitly {@link google.cloud.kms.v1.DecapsulateResponse.verify|verify} messages.
                     * @param message DecapsulateResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IDecapsulateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DecapsulateResponse message, length delimited. Does not implicitly {@link google.cloud.kms.v1.DecapsulateResponse.verify|verify} messages.
                     * @param message DecapsulateResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IDecapsulateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DecapsulateResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DecapsulateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.DecapsulateResponse;

                    /**
                     * Decodes a DecapsulateResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DecapsulateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.DecapsulateResponse;

                    /**
                     * Verifies a DecapsulateResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DecapsulateResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DecapsulateResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.DecapsulateResponse;

                    /**
                     * Creates a plain object from a DecapsulateResponse message. Also converts values to other types if specified.
                     * @param message DecapsulateResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.DecapsulateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DecapsulateResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DecapsulateResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GenerateRandomBytesResponse. */
                interface IGenerateRandomBytesResponse {

                    /** GenerateRandomBytesResponse data */
                    data?: (Uint8Array|Buffer|string|null);

                    /** GenerateRandomBytesResponse dataCrc32c */
                    dataCrc32c?: (google.protobuf.IInt64Value|null);
                }

                /** Represents a GenerateRandomBytesResponse. */
                class GenerateRandomBytesResponse implements IGenerateRandomBytesResponse {

                    /**
                     * Constructs a new GenerateRandomBytesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IGenerateRandomBytesResponse);

                    /** GenerateRandomBytesResponse data. */
                    public data: (Uint8Array|Buffer|string);

                    /** GenerateRandomBytesResponse dataCrc32c. */
                    public dataCrc32c?: (google.protobuf.IInt64Value|null);

                    /**
                     * Creates a new GenerateRandomBytesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateRandomBytesResponse instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IGenerateRandomBytesResponse): google.cloud.kms.v1.GenerateRandomBytesResponse;

                    /**
                     * Encodes the specified GenerateRandomBytesResponse message. Does not implicitly {@link google.cloud.kms.v1.GenerateRandomBytesResponse.verify|verify} messages.
                     * @param message GenerateRandomBytesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IGenerateRandomBytesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateRandomBytesResponse message, length delimited. Does not implicitly {@link google.cloud.kms.v1.GenerateRandomBytesResponse.verify|verify} messages.
                     * @param message GenerateRandomBytesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IGenerateRandomBytesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateRandomBytesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateRandomBytesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.GenerateRandomBytesResponse;

                    /**
                     * Decodes a GenerateRandomBytesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateRandomBytesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.GenerateRandomBytesResponse;

                    /**
                     * Verifies a GenerateRandomBytesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateRandomBytesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateRandomBytesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.GenerateRandomBytesResponse;

                    /**
                     * Creates a plain object from a GenerateRandomBytesResponse message. Also converts values to other types if specified.
                     * @param message GenerateRandomBytesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.GenerateRandomBytesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateRandomBytesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateRandomBytesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Digest. */
                interface IDigest {

                    /** Digest sha256 */
                    sha256?: (Uint8Array|Buffer|string|null);

                    /** Digest sha384 */
                    sha384?: (Uint8Array|Buffer|string|null);

                    /** Digest sha512 */
                    sha512?: (Uint8Array|Buffer|string|null);
                }

                /** Represents a Digest. */
                class Digest implements IDigest {

                    /**
                     * Constructs a new Digest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.IDigest);

                    /** Digest sha256. */
                    public sha256?: (Uint8Array|Buffer|string|null);

                    /** Digest sha384. */
                    public sha384?: (Uint8Array|Buffer|string|null);

                    /** Digest sha512. */
                    public sha512?: (Uint8Array|Buffer|string|null);

                    /** Digest digest. */
                    public digest?: ("sha256"|"sha384"|"sha512");

                    /**
                     * Creates a new Digest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Digest instance
                     */
                    public static create(properties?: google.cloud.kms.v1.IDigest): google.cloud.kms.v1.Digest;

                    /**
                     * Encodes the specified Digest message. Does not implicitly {@link google.cloud.kms.v1.Digest.verify|verify} messages.
                     * @param message Digest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.IDigest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Digest message, length delimited. Does not implicitly {@link google.cloud.kms.v1.Digest.verify|verify} messages.
                     * @param message Digest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.IDigest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Digest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Digest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.Digest;

                    /**
                     * Decodes a Digest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Digest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.Digest;

                    /**
                     * Verifies a Digest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Digest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Digest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.Digest;

                    /**
                     * Creates a plain object from a Digest message. Also converts values to other types if specified.
                     * @param message Digest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.Digest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Digest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Digest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LocationMetadata. */
                interface ILocationMetadata {

                    /** LocationMetadata hsmAvailable */
                    hsmAvailable?: (boolean|null);

                    /** LocationMetadata ekmAvailable */
                    ekmAvailable?: (boolean|null);
                }

                /** Represents a LocationMetadata. */
                class LocationMetadata implements ILocationMetadata {

                    /**
                     * Constructs a new LocationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.kms.v1.ILocationMetadata);

                    /** LocationMetadata hsmAvailable. */
                    public hsmAvailable: boolean;

                    /** LocationMetadata ekmAvailable. */
                    public ekmAvailable: boolean;

                    /**
                     * Creates a new LocationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LocationMetadata instance
                     */
                    public static create(properties?: google.cloud.kms.v1.ILocationMetadata): google.cloud.kms.v1.LocationMetadata;

                    /**
                     * Encodes the specified LocationMetadata message. Does not implicitly {@link google.cloud.kms.v1.LocationMetadata.verify|verify} messages.
                     * @param message LocationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.kms.v1.ILocationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LocationMetadata message, length delimited. Does not implicitly {@link google.cloud.kms.v1.LocationMetadata.verify|verify} messages.
                     * @param message LocationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.kms.v1.ILocationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LocationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LocationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.kms.v1.LocationMetadata;

                    /**
                     * Decodes a LocationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LocationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.kms.v1.LocationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.kms.v1.LocationMetadata;

                    /**
                     * Creates a plain object from a LocationMetadata message. Also converts values to other types if specified.
                     * @param message LocationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.kms.v1.LocationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
