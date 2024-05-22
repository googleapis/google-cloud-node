// Copyright 2024 Google LLC
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

        /** Namespace netapp. */
        namespace netapp {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a ListActiveDirectoriesRequest. */
                interface IListActiveDirectoriesRequest {

                    /** ListActiveDirectoriesRequest parent */
                    parent?: (string|null);

                    /** ListActiveDirectoriesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListActiveDirectoriesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListActiveDirectoriesRequest filter */
                    filter?: (string|null);

                    /** ListActiveDirectoriesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListActiveDirectoriesRequest. */
                class ListActiveDirectoriesRequest implements IListActiveDirectoriesRequest {

                    /**
                     * Constructs a new ListActiveDirectoriesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IListActiveDirectoriesRequest);

                    /** ListActiveDirectoriesRequest parent. */
                    public parent: string;

                    /** ListActiveDirectoriesRequest pageSize. */
                    public pageSize: number;

                    /** ListActiveDirectoriesRequest pageToken. */
                    public pageToken: string;

                    /** ListActiveDirectoriesRequest filter. */
                    public filter: string;

                    /** ListActiveDirectoriesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListActiveDirectoriesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListActiveDirectoriesRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IListActiveDirectoriesRequest): google.cloud.netapp.v1.ListActiveDirectoriesRequest;

                    /**
                     * Encodes the specified ListActiveDirectoriesRequest message. Does not implicitly {@link google.cloud.netapp.v1.ListActiveDirectoriesRequest.verify|verify} messages.
                     * @param message ListActiveDirectoriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IListActiveDirectoriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListActiveDirectoriesRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.ListActiveDirectoriesRequest.verify|verify} messages.
                     * @param message ListActiveDirectoriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IListActiveDirectoriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListActiveDirectoriesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListActiveDirectoriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.ListActiveDirectoriesRequest;

                    /**
                     * Decodes a ListActiveDirectoriesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListActiveDirectoriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.ListActiveDirectoriesRequest;

                    /**
                     * Verifies a ListActiveDirectoriesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListActiveDirectoriesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListActiveDirectoriesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.ListActiveDirectoriesRequest;

                    /**
                     * Creates a plain object from a ListActiveDirectoriesRequest message. Also converts values to other types if specified.
                     * @param message ListActiveDirectoriesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.ListActiveDirectoriesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListActiveDirectoriesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListActiveDirectoriesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListActiveDirectoriesResponse. */
                interface IListActiveDirectoriesResponse {

                    /** ListActiveDirectoriesResponse activeDirectories */
                    activeDirectories?: (google.cloud.netapp.v1.IActiveDirectory[]|null);

                    /** ListActiveDirectoriesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListActiveDirectoriesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListActiveDirectoriesResponse. */
                class ListActiveDirectoriesResponse implements IListActiveDirectoriesResponse {

                    /**
                     * Constructs a new ListActiveDirectoriesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IListActiveDirectoriesResponse);

                    /** ListActiveDirectoriesResponse activeDirectories. */
                    public activeDirectories: google.cloud.netapp.v1.IActiveDirectory[];

                    /** ListActiveDirectoriesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListActiveDirectoriesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListActiveDirectoriesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListActiveDirectoriesResponse instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IListActiveDirectoriesResponse): google.cloud.netapp.v1.ListActiveDirectoriesResponse;

                    /**
                     * Encodes the specified ListActiveDirectoriesResponse message. Does not implicitly {@link google.cloud.netapp.v1.ListActiveDirectoriesResponse.verify|verify} messages.
                     * @param message ListActiveDirectoriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IListActiveDirectoriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListActiveDirectoriesResponse message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.ListActiveDirectoriesResponse.verify|verify} messages.
                     * @param message ListActiveDirectoriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IListActiveDirectoriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListActiveDirectoriesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListActiveDirectoriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.ListActiveDirectoriesResponse;

                    /**
                     * Decodes a ListActiveDirectoriesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListActiveDirectoriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.ListActiveDirectoriesResponse;

                    /**
                     * Verifies a ListActiveDirectoriesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListActiveDirectoriesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListActiveDirectoriesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.ListActiveDirectoriesResponse;

                    /**
                     * Creates a plain object from a ListActiveDirectoriesResponse message. Also converts values to other types if specified.
                     * @param message ListActiveDirectoriesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.ListActiveDirectoriesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListActiveDirectoriesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListActiveDirectoriesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetActiveDirectoryRequest. */
                interface IGetActiveDirectoryRequest {

                    /** GetActiveDirectoryRequest name */
                    name?: (string|null);
                }

                /** Represents a GetActiveDirectoryRequest. */
                class GetActiveDirectoryRequest implements IGetActiveDirectoryRequest {

                    /**
                     * Constructs a new GetActiveDirectoryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IGetActiveDirectoryRequest);

                    /** GetActiveDirectoryRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetActiveDirectoryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetActiveDirectoryRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IGetActiveDirectoryRequest): google.cloud.netapp.v1.GetActiveDirectoryRequest;

                    /**
                     * Encodes the specified GetActiveDirectoryRequest message. Does not implicitly {@link google.cloud.netapp.v1.GetActiveDirectoryRequest.verify|verify} messages.
                     * @param message GetActiveDirectoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IGetActiveDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetActiveDirectoryRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.GetActiveDirectoryRequest.verify|verify} messages.
                     * @param message GetActiveDirectoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IGetActiveDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetActiveDirectoryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetActiveDirectoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.GetActiveDirectoryRequest;

                    /**
                     * Decodes a GetActiveDirectoryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetActiveDirectoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.GetActiveDirectoryRequest;

                    /**
                     * Verifies a GetActiveDirectoryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetActiveDirectoryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetActiveDirectoryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.GetActiveDirectoryRequest;

                    /**
                     * Creates a plain object from a GetActiveDirectoryRequest message. Also converts values to other types if specified.
                     * @param message GetActiveDirectoryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.GetActiveDirectoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetActiveDirectoryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetActiveDirectoryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateActiveDirectoryRequest. */
                interface ICreateActiveDirectoryRequest {

                    /** CreateActiveDirectoryRequest parent */
                    parent?: (string|null);

                    /** CreateActiveDirectoryRequest activeDirectory */
                    activeDirectory?: (google.cloud.netapp.v1.IActiveDirectory|null);

                    /** CreateActiveDirectoryRequest activeDirectoryId */
                    activeDirectoryId?: (string|null);
                }

                /** Represents a CreateActiveDirectoryRequest. */
                class CreateActiveDirectoryRequest implements ICreateActiveDirectoryRequest {

                    /**
                     * Constructs a new CreateActiveDirectoryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.ICreateActiveDirectoryRequest);

                    /** CreateActiveDirectoryRequest parent. */
                    public parent: string;

                    /** CreateActiveDirectoryRequest activeDirectory. */
                    public activeDirectory?: (google.cloud.netapp.v1.IActiveDirectory|null);

                    /** CreateActiveDirectoryRequest activeDirectoryId. */
                    public activeDirectoryId: string;

                    /**
                     * Creates a new CreateActiveDirectoryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateActiveDirectoryRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.ICreateActiveDirectoryRequest): google.cloud.netapp.v1.CreateActiveDirectoryRequest;

                    /**
                     * Encodes the specified CreateActiveDirectoryRequest message. Does not implicitly {@link google.cloud.netapp.v1.CreateActiveDirectoryRequest.verify|verify} messages.
                     * @param message CreateActiveDirectoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.ICreateActiveDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateActiveDirectoryRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.CreateActiveDirectoryRequest.verify|verify} messages.
                     * @param message CreateActiveDirectoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.ICreateActiveDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateActiveDirectoryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateActiveDirectoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.CreateActiveDirectoryRequest;

                    /**
                     * Decodes a CreateActiveDirectoryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateActiveDirectoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.CreateActiveDirectoryRequest;

                    /**
                     * Verifies a CreateActiveDirectoryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateActiveDirectoryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateActiveDirectoryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.CreateActiveDirectoryRequest;

                    /**
                     * Creates a plain object from a CreateActiveDirectoryRequest message. Also converts values to other types if specified.
                     * @param message CreateActiveDirectoryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.CreateActiveDirectoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateActiveDirectoryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateActiveDirectoryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateActiveDirectoryRequest. */
                interface IUpdateActiveDirectoryRequest {

                    /** UpdateActiveDirectoryRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateActiveDirectoryRequest activeDirectory */
                    activeDirectory?: (google.cloud.netapp.v1.IActiveDirectory|null);
                }

                /** Represents an UpdateActiveDirectoryRequest. */
                class UpdateActiveDirectoryRequest implements IUpdateActiveDirectoryRequest {

                    /**
                     * Constructs a new UpdateActiveDirectoryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IUpdateActiveDirectoryRequest);

                    /** UpdateActiveDirectoryRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateActiveDirectoryRequest activeDirectory. */
                    public activeDirectory?: (google.cloud.netapp.v1.IActiveDirectory|null);

                    /**
                     * Creates a new UpdateActiveDirectoryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateActiveDirectoryRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IUpdateActiveDirectoryRequest): google.cloud.netapp.v1.UpdateActiveDirectoryRequest;

                    /**
                     * Encodes the specified UpdateActiveDirectoryRequest message. Does not implicitly {@link google.cloud.netapp.v1.UpdateActiveDirectoryRequest.verify|verify} messages.
                     * @param message UpdateActiveDirectoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IUpdateActiveDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateActiveDirectoryRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.UpdateActiveDirectoryRequest.verify|verify} messages.
                     * @param message UpdateActiveDirectoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IUpdateActiveDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateActiveDirectoryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateActiveDirectoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.UpdateActiveDirectoryRequest;

                    /**
                     * Decodes an UpdateActiveDirectoryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateActiveDirectoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.UpdateActiveDirectoryRequest;

                    /**
                     * Verifies an UpdateActiveDirectoryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateActiveDirectoryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateActiveDirectoryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.UpdateActiveDirectoryRequest;

                    /**
                     * Creates a plain object from an UpdateActiveDirectoryRequest message. Also converts values to other types if specified.
                     * @param message UpdateActiveDirectoryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.UpdateActiveDirectoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateActiveDirectoryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateActiveDirectoryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteActiveDirectoryRequest. */
                interface IDeleteActiveDirectoryRequest {

                    /** DeleteActiveDirectoryRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteActiveDirectoryRequest. */
                class DeleteActiveDirectoryRequest implements IDeleteActiveDirectoryRequest {

                    /**
                     * Constructs a new DeleteActiveDirectoryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IDeleteActiveDirectoryRequest);

                    /** DeleteActiveDirectoryRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteActiveDirectoryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteActiveDirectoryRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IDeleteActiveDirectoryRequest): google.cloud.netapp.v1.DeleteActiveDirectoryRequest;

                    /**
                     * Encodes the specified DeleteActiveDirectoryRequest message. Does not implicitly {@link google.cloud.netapp.v1.DeleteActiveDirectoryRequest.verify|verify} messages.
                     * @param message DeleteActiveDirectoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IDeleteActiveDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteActiveDirectoryRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.DeleteActiveDirectoryRequest.verify|verify} messages.
                     * @param message DeleteActiveDirectoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IDeleteActiveDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteActiveDirectoryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteActiveDirectoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.DeleteActiveDirectoryRequest;

                    /**
                     * Decodes a DeleteActiveDirectoryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteActiveDirectoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.DeleteActiveDirectoryRequest;

                    /**
                     * Verifies a DeleteActiveDirectoryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteActiveDirectoryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteActiveDirectoryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.DeleteActiveDirectoryRequest;

                    /**
                     * Creates a plain object from a DeleteActiveDirectoryRequest message. Also converts values to other types if specified.
                     * @param message DeleteActiveDirectoryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.DeleteActiveDirectoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteActiveDirectoryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteActiveDirectoryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ActiveDirectory. */
                interface IActiveDirectory {

                    /** ActiveDirectory name */
                    name?: (string|null);

                    /** ActiveDirectory createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ActiveDirectory state */
                    state?: (google.cloud.netapp.v1.ActiveDirectory.State|keyof typeof google.cloud.netapp.v1.ActiveDirectory.State|null);

                    /** ActiveDirectory domain */
                    domain?: (string|null);

                    /** ActiveDirectory site */
                    site?: (string|null);

                    /** ActiveDirectory dns */
                    dns?: (string|null);

                    /** ActiveDirectory netBiosPrefix */
                    netBiosPrefix?: (string|null);

                    /** ActiveDirectory organizationalUnit */
                    organizationalUnit?: (string|null);

                    /** ActiveDirectory aesEncryption */
                    aesEncryption?: (boolean|null);

                    /** ActiveDirectory username */
                    username?: (string|null);

                    /** ActiveDirectory password */
                    password?: (string|null);

                    /** ActiveDirectory backupOperators */
                    backupOperators?: (string[]|null);

                    /** ActiveDirectory securityOperators */
                    securityOperators?: (string[]|null);

                    /** ActiveDirectory kdcHostname */
                    kdcHostname?: (string|null);

                    /** ActiveDirectory kdcIp */
                    kdcIp?: (string|null);

                    /** ActiveDirectory nfsUsersWithLdap */
                    nfsUsersWithLdap?: (boolean|null);

                    /** ActiveDirectory description */
                    description?: (string|null);

                    /** ActiveDirectory ldapSigning */
                    ldapSigning?: (boolean|null);

                    /** ActiveDirectory encryptDcConnections */
                    encryptDcConnections?: (boolean|null);

                    /** ActiveDirectory labels */
                    labels?: ({ [k: string]: string }|null);

                    /** ActiveDirectory stateDetails */
                    stateDetails?: (string|null);
                }

                /** Represents an ActiveDirectory. */
                class ActiveDirectory implements IActiveDirectory {

                    /**
                     * Constructs a new ActiveDirectory.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IActiveDirectory);

                    /** ActiveDirectory name. */
                    public name: string;

                    /** ActiveDirectory createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ActiveDirectory state. */
                    public state: (google.cloud.netapp.v1.ActiveDirectory.State|keyof typeof google.cloud.netapp.v1.ActiveDirectory.State);

                    /** ActiveDirectory domain. */
                    public domain: string;

                    /** ActiveDirectory site. */
                    public site: string;

                    /** ActiveDirectory dns. */
                    public dns: string;

                    /** ActiveDirectory netBiosPrefix. */
                    public netBiosPrefix: string;

                    /** ActiveDirectory organizationalUnit. */
                    public organizationalUnit: string;

                    /** ActiveDirectory aesEncryption. */
                    public aesEncryption: boolean;

                    /** ActiveDirectory username. */
                    public username: string;

                    /** ActiveDirectory password. */
                    public password: string;

                    /** ActiveDirectory backupOperators. */
                    public backupOperators: string[];

                    /** ActiveDirectory securityOperators. */
                    public securityOperators: string[];

                    /** ActiveDirectory kdcHostname. */
                    public kdcHostname: string;

                    /** ActiveDirectory kdcIp. */
                    public kdcIp: string;

                    /** ActiveDirectory nfsUsersWithLdap. */
                    public nfsUsersWithLdap: boolean;

                    /** ActiveDirectory description. */
                    public description: string;

                    /** ActiveDirectory ldapSigning. */
                    public ldapSigning: boolean;

                    /** ActiveDirectory encryptDcConnections. */
                    public encryptDcConnections: boolean;

                    /** ActiveDirectory labels. */
                    public labels: { [k: string]: string };

                    /** ActiveDirectory stateDetails. */
                    public stateDetails: string;

                    /**
                     * Creates a new ActiveDirectory instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ActiveDirectory instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IActiveDirectory): google.cloud.netapp.v1.ActiveDirectory;

                    /**
                     * Encodes the specified ActiveDirectory message. Does not implicitly {@link google.cloud.netapp.v1.ActiveDirectory.verify|verify} messages.
                     * @param message ActiveDirectory message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IActiveDirectory, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ActiveDirectory message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.ActiveDirectory.verify|verify} messages.
                     * @param message ActiveDirectory message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IActiveDirectory, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ActiveDirectory message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ActiveDirectory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.ActiveDirectory;

                    /**
                     * Decodes an ActiveDirectory message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ActiveDirectory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.ActiveDirectory;

                    /**
                     * Verifies an ActiveDirectory message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ActiveDirectory message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ActiveDirectory
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.ActiveDirectory;

                    /**
                     * Creates a plain object from an ActiveDirectory message. Also converts values to other types if specified.
                     * @param message ActiveDirectory
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.ActiveDirectory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ActiveDirectory to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ActiveDirectory
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ActiveDirectory {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        READY = 2,
                        UPDATING = 3,
                        IN_USE = 4,
                        DELETING = 5,
                        ERROR = 6
                    }
                }

                /** Properties of a Backup. */
                interface IBackup {

                    /** Backup name */
                    name?: (string|null);

                    /** Backup state */
                    state?: (google.cloud.netapp.v1.Backup.State|keyof typeof google.cloud.netapp.v1.Backup.State|null);

                    /** Backup description */
                    description?: (string|null);

                    /** Backup volumeUsageBytes */
                    volumeUsageBytes?: (number|Long|string|null);

                    /** Backup backupType */
                    backupType?: (google.cloud.netapp.v1.Backup.Type|keyof typeof google.cloud.netapp.v1.Backup.Type|null);

                    /** Backup sourceVolume */
                    sourceVolume?: (string|null);

                    /** Backup sourceSnapshot */
                    sourceSnapshot?: (string|null);

                    /** Backup createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Backup labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Backup chainStorageBytes */
                    chainStorageBytes?: (number|Long|string|null);
                }

                /** Represents a Backup. */
                class Backup implements IBackup {

                    /**
                     * Constructs a new Backup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IBackup);

                    /** Backup name. */
                    public name: string;

                    /** Backup state. */
                    public state: (google.cloud.netapp.v1.Backup.State|keyof typeof google.cloud.netapp.v1.Backup.State);

                    /** Backup description. */
                    public description: string;

                    /** Backup volumeUsageBytes. */
                    public volumeUsageBytes: (number|Long|string);

                    /** Backup backupType. */
                    public backupType: (google.cloud.netapp.v1.Backup.Type|keyof typeof google.cloud.netapp.v1.Backup.Type);

                    /** Backup sourceVolume. */
                    public sourceVolume: string;

                    /** Backup sourceSnapshot. */
                    public sourceSnapshot?: (string|null);

                    /** Backup createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Backup labels. */
                    public labels: { [k: string]: string };

                    /** Backup chainStorageBytes. */
                    public chainStorageBytes: (number|Long|string);

                    /** Backup _sourceSnapshot. */
                    public _sourceSnapshot?: "sourceSnapshot";

                    /**
                     * Creates a new Backup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Backup instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IBackup): google.cloud.netapp.v1.Backup;

                    /**
                     * Encodes the specified Backup message. Does not implicitly {@link google.cloud.netapp.v1.Backup.verify|verify} messages.
                     * @param message Backup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Backup message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.Backup.verify|verify} messages.
                     * @param message Backup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Backup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Backup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.Backup;

                    /**
                     * Decodes a Backup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Backup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.Backup;

                    /**
                     * Verifies a Backup message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Backup message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Backup
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.Backup;

                    /**
                     * Creates a plain object from a Backup message. Also converts values to other types if specified.
                     * @param message Backup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.Backup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Backup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Backup
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Backup {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        UPLOADING = 2,
                        READY = 3,
                        DELETING = 4,
                        ERROR = 5,
                        UPDATING = 6
                    }

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        MANUAL = 1,
                        SCHEDULED = 2
                    }
                }

                /** Properties of a ListBackupsRequest. */
                interface IListBackupsRequest {

                    /** ListBackupsRequest parent */
                    parent?: (string|null);

                    /** ListBackupsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListBackupsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListBackupsRequest orderBy */
                    orderBy?: (string|null);

                    /** ListBackupsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListBackupsRequest. */
                class ListBackupsRequest implements IListBackupsRequest {

                    /**
                     * Constructs a new ListBackupsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IListBackupsRequest);

                    /** ListBackupsRequest parent. */
                    public parent: string;

                    /** ListBackupsRequest pageSize. */
                    public pageSize: number;

                    /** ListBackupsRequest pageToken. */
                    public pageToken: string;

                    /** ListBackupsRequest orderBy. */
                    public orderBy: string;

                    /** ListBackupsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListBackupsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupsRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IListBackupsRequest): google.cloud.netapp.v1.ListBackupsRequest;

                    /**
                     * Encodes the specified ListBackupsRequest message. Does not implicitly {@link google.cloud.netapp.v1.ListBackupsRequest.verify|verify} messages.
                     * @param message ListBackupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IListBackupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupsRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.ListBackupsRequest.verify|verify} messages.
                     * @param message ListBackupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IListBackupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.ListBackupsRequest;

                    /**
                     * Decodes a ListBackupsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.ListBackupsRequest;

                    /**
                     * Verifies a ListBackupsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBackupsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBackupsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.ListBackupsRequest;

                    /**
                     * Creates a plain object from a ListBackupsRequest message. Also converts values to other types if specified.
                     * @param message ListBackupsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.ListBackupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBackupsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListBackupsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListBackupsResponse. */
                interface IListBackupsResponse {

                    /** ListBackupsResponse backups */
                    backups?: (google.cloud.netapp.v1.IBackup[]|null);

                    /** ListBackupsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListBackupsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListBackupsResponse. */
                class ListBackupsResponse implements IListBackupsResponse {

                    /**
                     * Constructs a new ListBackupsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IListBackupsResponse);

                    /** ListBackupsResponse backups. */
                    public backups: google.cloud.netapp.v1.IBackup[];

                    /** ListBackupsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListBackupsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListBackupsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupsResponse instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IListBackupsResponse): google.cloud.netapp.v1.ListBackupsResponse;

                    /**
                     * Encodes the specified ListBackupsResponse message. Does not implicitly {@link google.cloud.netapp.v1.ListBackupsResponse.verify|verify} messages.
                     * @param message ListBackupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IListBackupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupsResponse message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.ListBackupsResponse.verify|verify} messages.
                     * @param message ListBackupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IListBackupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.ListBackupsResponse;

                    /**
                     * Decodes a ListBackupsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.ListBackupsResponse;

                    /**
                     * Verifies a ListBackupsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBackupsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBackupsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.ListBackupsResponse;

                    /**
                     * Creates a plain object from a ListBackupsResponse message. Also converts values to other types if specified.
                     * @param message ListBackupsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.ListBackupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBackupsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListBackupsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetBackupRequest. */
                interface IGetBackupRequest {

                    /** GetBackupRequest name */
                    name?: (string|null);
                }

                /** Represents a GetBackupRequest. */
                class GetBackupRequest implements IGetBackupRequest {

                    /**
                     * Constructs a new GetBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IGetBackupRequest);

                    /** GetBackupRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetBackupRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IGetBackupRequest): google.cloud.netapp.v1.GetBackupRequest;

                    /**
                     * Encodes the specified GetBackupRequest message. Does not implicitly {@link google.cloud.netapp.v1.GetBackupRequest.verify|verify} messages.
                     * @param message GetBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IGetBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetBackupRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.GetBackupRequest.verify|verify} messages.
                     * @param message GetBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IGetBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.GetBackupRequest;

                    /**
                     * Decodes a GetBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.GetBackupRequest;

                    /**
                     * Verifies a GetBackupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetBackupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetBackupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.GetBackupRequest;

                    /**
                     * Creates a plain object from a GetBackupRequest message. Also converts values to other types if specified.
                     * @param message GetBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.GetBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetBackupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateBackupRequest. */
                interface ICreateBackupRequest {

                    /** CreateBackupRequest parent */
                    parent?: (string|null);

                    /** CreateBackupRequest backupId */
                    backupId?: (string|null);

                    /** CreateBackupRequest backup */
                    backup?: (google.cloud.netapp.v1.IBackup|null);
                }

                /** Represents a CreateBackupRequest. */
                class CreateBackupRequest implements ICreateBackupRequest {

                    /**
                     * Constructs a new CreateBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.ICreateBackupRequest);

                    /** CreateBackupRequest parent. */
                    public parent: string;

                    /** CreateBackupRequest backupId. */
                    public backupId: string;

                    /** CreateBackupRequest backup. */
                    public backup?: (google.cloud.netapp.v1.IBackup|null);

                    /**
                     * Creates a new CreateBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateBackupRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.ICreateBackupRequest): google.cloud.netapp.v1.CreateBackupRequest;

                    /**
                     * Encodes the specified CreateBackupRequest message. Does not implicitly {@link google.cloud.netapp.v1.CreateBackupRequest.verify|verify} messages.
                     * @param message CreateBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.ICreateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateBackupRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.CreateBackupRequest.verify|verify} messages.
                     * @param message CreateBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.ICreateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.CreateBackupRequest;

                    /**
                     * Decodes a CreateBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.CreateBackupRequest;

                    /**
                     * Verifies a CreateBackupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateBackupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateBackupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.CreateBackupRequest;

                    /**
                     * Creates a plain object from a CreateBackupRequest message. Also converts values to other types if specified.
                     * @param message CreateBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.CreateBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateBackupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteBackupRequest. */
                interface IDeleteBackupRequest {

                    /** DeleteBackupRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteBackupRequest. */
                class DeleteBackupRequest implements IDeleteBackupRequest {

                    /**
                     * Constructs a new DeleteBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IDeleteBackupRequest);

                    /** DeleteBackupRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteBackupRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IDeleteBackupRequest): google.cloud.netapp.v1.DeleteBackupRequest;

                    /**
                     * Encodes the specified DeleteBackupRequest message. Does not implicitly {@link google.cloud.netapp.v1.DeleteBackupRequest.verify|verify} messages.
                     * @param message DeleteBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IDeleteBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteBackupRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.DeleteBackupRequest.verify|verify} messages.
                     * @param message DeleteBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IDeleteBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.DeleteBackupRequest;

                    /**
                     * Decodes a DeleteBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.DeleteBackupRequest;

                    /**
                     * Verifies a DeleteBackupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteBackupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteBackupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.DeleteBackupRequest;

                    /**
                     * Creates a plain object from a DeleteBackupRequest message. Also converts values to other types if specified.
                     * @param message DeleteBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.DeleteBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteBackupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateBackupRequest. */
                interface IUpdateBackupRequest {

                    /** UpdateBackupRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateBackupRequest backup */
                    backup?: (google.cloud.netapp.v1.IBackup|null);
                }

                /** Represents an UpdateBackupRequest. */
                class UpdateBackupRequest implements IUpdateBackupRequest {

                    /**
                     * Constructs a new UpdateBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IUpdateBackupRequest);

                    /** UpdateBackupRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateBackupRequest backup. */
                    public backup?: (google.cloud.netapp.v1.IBackup|null);

                    /**
                     * Creates a new UpdateBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateBackupRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IUpdateBackupRequest): google.cloud.netapp.v1.UpdateBackupRequest;

                    /**
                     * Encodes the specified UpdateBackupRequest message. Does not implicitly {@link google.cloud.netapp.v1.UpdateBackupRequest.verify|verify} messages.
                     * @param message UpdateBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IUpdateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateBackupRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.UpdateBackupRequest.verify|verify} messages.
                     * @param message UpdateBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IUpdateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.UpdateBackupRequest;

                    /**
                     * Decodes an UpdateBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.UpdateBackupRequest;

                    /**
                     * Verifies an UpdateBackupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateBackupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateBackupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.UpdateBackupRequest;

                    /**
                     * Creates a plain object from an UpdateBackupRequest message. Also converts values to other types if specified.
                     * @param message UpdateBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.UpdateBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateBackupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BackupPolicy. */
                interface IBackupPolicy {

                    /** BackupPolicy name */
                    name?: (string|null);

                    /** BackupPolicy dailyBackupLimit */
                    dailyBackupLimit?: (number|null);

                    /** BackupPolicy weeklyBackupLimit */
                    weeklyBackupLimit?: (number|null);

                    /** BackupPolicy monthlyBackupLimit */
                    monthlyBackupLimit?: (number|null);

                    /** BackupPolicy description */
                    description?: (string|null);

                    /** BackupPolicy enabled */
                    enabled?: (boolean|null);

                    /** BackupPolicy assignedVolumeCount */
                    assignedVolumeCount?: (number|null);

                    /** BackupPolicy createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** BackupPolicy labels */
                    labels?: ({ [k: string]: string }|null);

                    /** BackupPolicy state */
                    state?: (google.cloud.netapp.v1.BackupPolicy.State|keyof typeof google.cloud.netapp.v1.BackupPolicy.State|null);
                }

                /** Represents a BackupPolicy. */
                class BackupPolicy implements IBackupPolicy {

                    /**
                     * Constructs a new BackupPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IBackupPolicy);

                    /** BackupPolicy name. */
                    public name: string;

                    /** BackupPolicy dailyBackupLimit. */
                    public dailyBackupLimit?: (number|null);

                    /** BackupPolicy weeklyBackupLimit. */
                    public weeklyBackupLimit?: (number|null);

                    /** BackupPolicy monthlyBackupLimit. */
                    public monthlyBackupLimit?: (number|null);

                    /** BackupPolicy description. */
                    public description?: (string|null);

                    /** BackupPolicy enabled. */
                    public enabled?: (boolean|null);

                    /** BackupPolicy assignedVolumeCount. */
                    public assignedVolumeCount?: (number|null);

                    /** BackupPolicy createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** BackupPolicy labels. */
                    public labels: { [k: string]: string };

                    /** BackupPolicy state. */
                    public state: (google.cloud.netapp.v1.BackupPolicy.State|keyof typeof google.cloud.netapp.v1.BackupPolicy.State);

                    /** BackupPolicy _dailyBackupLimit. */
                    public _dailyBackupLimit?: "dailyBackupLimit";

                    /** BackupPolicy _weeklyBackupLimit. */
                    public _weeklyBackupLimit?: "weeklyBackupLimit";

                    /** BackupPolicy _monthlyBackupLimit. */
                    public _monthlyBackupLimit?: "monthlyBackupLimit";

                    /** BackupPolicy _description. */
                    public _description?: "description";

                    /** BackupPolicy _enabled. */
                    public _enabled?: "enabled";

                    /** BackupPolicy _assignedVolumeCount. */
                    public _assignedVolumeCount?: "assignedVolumeCount";

                    /**
                     * Creates a new BackupPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BackupPolicy instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IBackupPolicy): google.cloud.netapp.v1.BackupPolicy;

                    /**
                     * Encodes the specified BackupPolicy message. Does not implicitly {@link google.cloud.netapp.v1.BackupPolicy.verify|verify} messages.
                     * @param message BackupPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IBackupPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BackupPolicy message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.BackupPolicy.verify|verify} messages.
                     * @param message BackupPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IBackupPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BackupPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BackupPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.BackupPolicy;

                    /**
                     * Decodes a BackupPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BackupPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.BackupPolicy;

                    /**
                     * Verifies a BackupPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BackupPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BackupPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.BackupPolicy;

                    /**
                     * Creates a plain object from a BackupPolicy message. Also converts values to other types if specified.
                     * @param message BackupPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.BackupPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BackupPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BackupPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace BackupPolicy {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        READY = 2,
                        DELETING = 3,
                        ERROR = 4,
                        UPDATING = 5
                    }
                }

                /** Properties of a CreateBackupPolicyRequest. */
                interface ICreateBackupPolicyRequest {

                    /** CreateBackupPolicyRequest parent */
                    parent?: (string|null);

                    /** CreateBackupPolicyRequest backupPolicy */
                    backupPolicy?: (google.cloud.netapp.v1.IBackupPolicy|null);

                    /** CreateBackupPolicyRequest backupPolicyId */
                    backupPolicyId?: (string|null);
                }

                /** Represents a CreateBackupPolicyRequest. */
                class CreateBackupPolicyRequest implements ICreateBackupPolicyRequest {

                    /**
                     * Constructs a new CreateBackupPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.ICreateBackupPolicyRequest);

                    /** CreateBackupPolicyRequest parent. */
                    public parent: string;

                    /** CreateBackupPolicyRequest backupPolicy. */
                    public backupPolicy?: (google.cloud.netapp.v1.IBackupPolicy|null);

                    /** CreateBackupPolicyRequest backupPolicyId. */
                    public backupPolicyId: string;

                    /**
                     * Creates a new CreateBackupPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateBackupPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.ICreateBackupPolicyRequest): google.cloud.netapp.v1.CreateBackupPolicyRequest;

                    /**
                     * Encodes the specified CreateBackupPolicyRequest message. Does not implicitly {@link google.cloud.netapp.v1.CreateBackupPolicyRequest.verify|verify} messages.
                     * @param message CreateBackupPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.ICreateBackupPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateBackupPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.CreateBackupPolicyRequest.verify|verify} messages.
                     * @param message CreateBackupPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.ICreateBackupPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateBackupPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateBackupPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.CreateBackupPolicyRequest;

                    /**
                     * Decodes a CreateBackupPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateBackupPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.CreateBackupPolicyRequest;

                    /**
                     * Verifies a CreateBackupPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateBackupPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateBackupPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.CreateBackupPolicyRequest;

                    /**
                     * Creates a plain object from a CreateBackupPolicyRequest message. Also converts values to other types if specified.
                     * @param message CreateBackupPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.CreateBackupPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateBackupPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateBackupPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetBackupPolicyRequest. */
                interface IGetBackupPolicyRequest {

                    /** GetBackupPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetBackupPolicyRequest. */
                class GetBackupPolicyRequest implements IGetBackupPolicyRequest {

                    /**
                     * Constructs a new GetBackupPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IGetBackupPolicyRequest);

                    /** GetBackupPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetBackupPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetBackupPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IGetBackupPolicyRequest): google.cloud.netapp.v1.GetBackupPolicyRequest;

                    /**
                     * Encodes the specified GetBackupPolicyRequest message. Does not implicitly {@link google.cloud.netapp.v1.GetBackupPolicyRequest.verify|verify} messages.
                     * @param message GetBackupPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IGetBackupPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetBackupPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.GetBackupPolicyRequest.verify|verify} messages.
                     * @param message GetBackupPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IGetBackupPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetBackupPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetBackupPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.GetBackupPolicyRequest;

                    /**
                     * Decodes a GetBackupPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetBackupPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.GetBackupPolicyRequest;

                    /**
                     * Verifies a GetBackupPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetBackupPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetBackupPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.GetBackupPolicyRequest;

                    /**
                     * Creates a plain object from a GetBackupPolicyRequest message. Also converts values to other types if specified.
                     * @param message GetBackupPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.GetBackupPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetBackupPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetBackupPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListBackupPoliciesRequest. */
                interface IListBackupPoliciesRequest {

                    /** ListBackupPoliciesRequest parent */
                    parent?: (string|null);

                    /** ListBackupPoliciesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListBackupPoliciesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListBackupPoliciesRequest filter */
                    filter?: (string|null);

                    /** ListBackupPoliciesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListBackupPoliciesRequest. */
                class ListBackupPoliciesRequest implements IListBackupPoliciesRequest {

                    /**
                     * Constructs a new ListBackupPoliciesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IListBackupPoliciesRequest);

                    /** ListBackupPoliciesRequest parent. */
                    public parent: string;

                    /** ListBackupPoliciesRequest pageSize. */
                    public pageSize: number;

                    /** ListBackupPoliciesRequest pageToken. */
                    public pageToken: string;

                    /** ListBackupPoliciesRequest filter. */
                    public filter: string;

                    /** ListBackupPoliciesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListBackupPoliciesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupPoliciesRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IListBackupPoliciesRequest): google.cloud.netapp.v1.ListBackupPoliciesRequest;

                    /**
                     * Encodes the specified ListBackupPoliciesRequest message. Does not implicitly {@link google.cloud.netapp.v1.ListBackupPoliciesRequest.verify|verify} messages.
                     * @param message ListBackupPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IListBackupPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupPoliciesRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.ListBackupPoliciesRequest.verify|verify} messages.
                     * @param message ListBackupPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IListBackupPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupPoliciesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.ListBackupPoliciesRequest;

                    /**
                     * Decodes a ListBackupPoliciesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.ListBackupPoliciesRequest;

                    /**
                     * Verifies a ListBackupPoliciesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBackupPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBackupPoliciesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.ListBackupPoliciesRequest;

                    /**
                     * Creates a plain object from a ListBackupPoliciesRequest message. Also converts values to other types if specified.
                     * @param message ListBackupPoliciesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.ListBackupPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBackupPoliciesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListBackupPoliciesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListBackupPoliciesResponse. */
                interface IListBackupPoliciesResponse {

                    /** ListBackupPoliciesResponse backupPolicies */
                    backupPolicies?: (google.cloud.netapp.v1.IBackupPolicy[]|null);

                    /** ListBackupPoliciesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListBackupPoliciesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListBackupPoliciesResponse. */
                class ListBackupPoliciesResponse implements IListBackupPoliciesResponse {

                    /**
                     * Constructs a new ListBackupPoliciesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IListBackupPoliciesResponse);

                    /** ListBackupPoliciesResponse backupPolicies. */
                    public backupPolicies: google.cloud.netapp.v1.IBackupPolicy[];

                    /** ListBackupPoliciesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListBackupPoliciesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListBackupPoliciesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupPoliciesResponse instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IListBackupPoliciesResponse): google.cloud.netapp.v1.ListBackupPoliciesResponse;

                    /**
                     * Encodes the specified ListBackupPoliciesResponse message. Does not implicitly {@link google.cloud.netapp.v1.ListBackupPoliciesResponse.verify|verify} messages.
                     * @param message ListBackupPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IListBackupPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupPoliciesResponse message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.ListBackupPoliciesResponse.verify|verify} messages.
                     * @param message ListBackupPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IListBackupPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupPoliciesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.ListBackupPoliciesResponse;

                    /**
                     * Decodes a ListBackupPoliciesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.ListBackupPoliciesResponse;

                    /**
                     * Verifies a ListBackupPoliciesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBackupPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBackupPoliciesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.ListBackupPoliciesResponse;

                    /**
                     * Creates a plain object from a ListBackupPoliciesResponse message. Also converts values to other types if specified.
                     * @param message ListBackupPoliciesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.ListBackupPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBackupPoliciesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListBackupPoliciesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateBackupPolicyRequest. */
                interface IUpdateBackupPolicyRequest {

                    /** UpdateBackupPolicyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateBackupPolicyRequest backupPolicy */
                    backupPolicy?: (google.cloud.netapp.v1.IBackupPolicy|null);
                }

                /** Represents an UpdateBackupPolicyRequest. */
                class UpdateBackupPolicyRequest implements IUpdateBackupPolicyRequest {

                    /**
                     * Constructs a new UpdateBackupPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IUpdateBackupPolicyRequest);

                    /** UpdateBackupPolicyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateBackupPolicyRequest backupPolicy. */
                    public backupPolicy?: (google.cloud.netapp.v1.IBackupPolicy|null);

                    /**
                     * Creates a new UpdateBackupPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateBackupPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IUpdateBackupPolicyRequest): google.cloud.netapp.v1.UpdateBackupPolicyRequest;

                    /**
                     * Encodes the specified UpdateBackupPolicyRequest message. Does not implicitly {@link google.cloud.netapp.v1.UpdateBackupPolicyRequest.verify|verify} messages.
                     * @param message UpdateBackupPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IUpdateBackupPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateBackupPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.UpdateBackupPolicyRequest.verify|verify} messages.
                     * @param message UpdateBackupPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IUpdateBackupPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateBackupPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateBackupPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.UpdateBackupPolicyRequest;

                    /**
                     * Decodes an UpdateBackupPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateBackupPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.UpdateBackupPolicyRequest;

                    /**
                     * Verifies an UpdateBackupPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateBackupPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateBackupPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.UpdateBackupPolicyRequest;

                    /**
                     * Creates a plain object from an UpdateBackupPolicyRequest message. Also converts values to other types if specified.
                     * @param message UpdateBackupPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.UpdateBackupPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateBackupPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateBackupPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteBackupPolicyRequest. */
                interface IDeleteBackupPolicyRequest {

                    /** DeleteBackupPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteBackupPolicyRequest. */
                class DeleteBackupPolicyRequest implements IDeleteBackupPolicyRequest {

                    /**
                     * Constructs a new DeleteBackupPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IDeleteBackupPolicyRequest);

                    /** DeleteBackupPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteBackupPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteBackupPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IDeleteBackupPolicyRequest): google.cloud.netapp.v1.DeleteBackupPolicyRequest;

                    /**
                     * Encodes the specified DeleteBackupPolicyRequest message. Does not implicitly {@link google.cloud.netapp.v1.DeleteBackupPolicyRequest.verify|verify} messages.
                     * @param message DeleteBackupPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IDeleteBackupPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteBackupPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.DeleteBackupPolicyRequest.verify|verify} messages.
                     * @param message DeleteBackupPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IDeleteBackupPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteBackupPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteBackupPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.DeleteBackupPolicyRequest;

                    /**
                     * Decodes a DeleteBackupPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteBackupPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.DeleteBackupPolicyRequest;

                    /**
                     * Verifies a DeleteBackupPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteBackupPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteBackupPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.DeleteBackupPolicyRequest;

                    /**
                     * Creates a plain object from a DeleteBackupPolicyRequest message. Also converts values to other types if specified.
                     * @param message DeleteBackupPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.DeleteBackupPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteBackupPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteBackupPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BackupVault. */
                interface IBackupVault {

                    /** BackupVault name */
                    name?: (string|null);

                    /** BackupVault state */
                    state?: (google.cloud.netapp.v1.BackupVault.State|keyof typeof google.cloud.netapp.v1.BackupVault.State|null);

                    /** BackupVault createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** BackupVault description */
                    description?: (string|null);

                    /** BackupVault labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a BackupVault. */
                class BackupVault implements IBackupVault {

                    /**
                     * Constructs a new BackupVault.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IBackupVault);

                    /** BackupVault name. */
                    public name: string;

                    /** BackupVault state. */
                    public state: (google.cloud.netapp.v1.BackupVault.State|keyof typeof google.cloud.netapp.v1.BackupVault.State);

                    /** BackupVault createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** BackupVault description. */
                    public description: string;

                    /** BackupVault labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new BackupVault instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BackupVault instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IBackupVault): google.cloud.netapp.v1.BackupVault;

                    /**
                     * Encodes the specified BackupVault message. Does not implicitly {@link google.cloud.netapp.v1.BackupVault.verify|verify} messages.
                     * @param message BackupVault message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IBackupVault, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BackupVault message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.BackupVault.verify|verify} messages.
                     * @param message BackupVault message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IBackupVault, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BackupVault message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BackupVault
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.BackupVault;

                    /**
                     * Decodes a BackupVault message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BackupVault
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.BackupVault;

                    /**
                     * Verifies a BackupVault message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BackupVault message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BackupVault
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.BackupVault;

                    /**
                     * Creates a plain object from a BackupVault message. Also converts values to other types if specified.
                     * @param message BackupVault
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.BackupVault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BackupVault to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BackupVault
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace BackupVault {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        READY = 2,
                        DELETING = 3,
                        ERROR = 4,
                        UPDATING = 5
                    }
                }

                /** Properties of a GetBackupVaultRequest. */
                interface IGetBackupVaultRequest {

                    /** GetBackupVaultRequest name */
                    name?: (string|null);
                }

                /** Represents a GetBackupVaultRequest. */
                class GetBackupVaultRequest implements IGetBackupVaultRequest {

                    /**
                     * Constructs a new GetBackupVaultRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IGetBackupVaultRequest);

                    /** GetBackupVaultRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetBackupVaultRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetBackupVaultRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IGetBackupVaultRequest): google.cloud.netapp.v1.GetBackupVaultRequest;

                    /**
                     * Encodes the specified GetBackupVaultRequest message. Does not implicitly {@link google.cloud.netapp.v1.GetBackupVaultRequest.verify|verify} messages.
                     * @param message GetBackupVaultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IGetBackupVaultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetBackupVaultRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.GetBackupVaultRequest.verify|verify} messages.
                     * @param message GetBackupVaultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IGetBackupVaultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetBackupVaultRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetBackupVaultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.GetBackupVaultRequest;

                    /**
                     * Decodes a GetBackupVaultRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetBackupVaultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.GetBackupVaultRequest;

                    /**
                     * Verifies a GetBackupVaultRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetBackupVaultRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetBackupVaultRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.GetBackupVaultRequest;

                    /**
                     * Creates a plain object from a GetBackupVaultRequest message. Also converts values to other types if specified.
                     * @param message GetBackupVaultRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.GetBackupVaultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetBackupVaultRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetBackupVaultRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListBackupVaultsRequest. */
                interface IListBackupVaultsRequest {

                    /** ListBackupVaultsRequest parent */
                    parent?: (string|null);

                    /** ListBackupVaultsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListBackupVaultsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListBackupVaultsRequest orderBy */
                    orderBy?: (string|null);

                    /** ListBackupVaultsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListBackupVaultsRequest. */
                class ListBackupVaultsRequest implements IListBackupVaultsRequest {

                    /**
                     * Constructs a new ListBackupVaultsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IListBackupVaultsRequest);

                    /** ListBackupVaultsRequest parent. */
                    public parent: string;

                    /** ListBackupVaultsRequest pageSize. */
                    public pageSize: number;

                    /** ListBackupVaultsRequest pageToken. */
                    public pageToken: string;

                    /** ListBackupVaultsRequest orderBy. */
                    public orderBy: string;

                    /** ListBackupVaultsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListBackupVaultsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupVaultsRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IListBackupVaultsRequest): google.cloud.netapp.v1.ListBackupVaultsRequest;

                    /**
                     * Encodes the specified ListBackupVaultsRequest message. Does not implicitly {@link google.cloud.netapp.v1.ListBackupVaultsRequest.verify|verify} messages.
                     * @param message ListBackupVaultsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IListBackupVaultsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupVaultsRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.ListBackupVaultsRequest.verify|verify} messages.
                     * @param message ListBackupVaultsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IListBackupVaultsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupVaultsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupVaultsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.ListBackupVaultsRequest;

                    /**
                     * Decodes a ListBackupVaultsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupVaultsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.ListBackupVaultsRequest;

                    /**
                     * Verifies a ListBackupVaultsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBackupVaultsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBackupVaultsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.ListBackupVaultsRequest;

                    /**
                     * Creates a plain object from a ListBackupVaultsRequest message. Also converts values to other types if specified.
                     * @param message ListBackupVaultsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.ListBackupVaultsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBackupVaultsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListBackupVaultsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListBackupVaultsResponse. */
                interface IListBackupVaultsResponse {

                    /** ListBackupVaultsResponse backupVaults */
                    backupVaults?: (google.cloud.netapp.v1.IBackupVault[]|null);

                    /** ListBackupVaultsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListBackupVaultsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListBackupVaultsResponse. */
                class ListBackupVaultsResponse implements IListBackupVaultsResponse {

                    /**
                     * Constructs a new ListBackupVaultsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IListBackupVaultsResponse);

                    /** ListBackupVaultsResponse backupVaults. */
                    public backupVaults: google.cloud.netapp.v1.IBackupVault[];

                    /** ListBackupVaultsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListBackupVaultsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListBackupVaultsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupVaultsResponse instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IListBackupVaultsResponse): google.cloud.netapp.v1.ListBackupVaultsResponse;

                    /**
                     * Encodes the specified ListBackupVaultsResponse message. Does not implicitly {@link google.cloud.netapp.v1.ListBackupVaultsResponse.verify|verify} messages.
                     * @param message ListBackupVaultsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IListBackupVaultsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupVaultsResponse message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.ListBackupVaultsResponse.verify|verify} messages.
                     * @param message ListBackupVaultsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IListBackupVaultsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupVaultsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupVaultsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.ListBackupVaultsResponse;

                    /**
                     * Decodes a ListBackupVaultsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupVaultsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.ListBackupVaultsResponse;

                    /**
                     * Verifies a ListBackupVaultsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBackupVaultsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBackupVaultsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.ListBackupVaultsResponse;

                    /**
                     * Creates a plain object from a ListBackupVaultsResponse message. Also converts values to other types if specified.
                     * @param message ListBackupVaultsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.ListBackupVaultsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBackupVaultsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListBackupVaultsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateBackupVaultRequest. */
                interface ICreateBackupVaultRequest {

                    /** CreateBackupVaultRequest parent */
                    parent?: (string|null);

                    /** CreateBackupVaultRequest backupVaultId */
                    backupVaultId?: (string|null);

                    /** CreateBackupVaultRequest backupVault */
                    backupVault?: (google.cloud.netapp.v1.IBackupVault|null);
                }

                /** Represents a CreateBackupVaultRequest. */
                class CreateBackupVaultRequest implements ICreateBackupVaultRequest {

                    /**
                     * Constructs a new CreateBackupVaultRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.ICreateBackupVaultRequest);

                    /** CreateBackupVaultRequest parent. */
                    public parent: string;

                    /** CreateBackupVaultRequest backupVaultId. */
                    public backupVaultId: string;

                    /** CreateBackupVaultRequest backupVault. */
                    public backupVault?: (google.cloud.netapp.v1.IBackupVault|null);

                    /**
                     * Creates a new CreateBackupVaultRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateBackupVaultRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.ICreateBackupVaultRequest): google.cloud.netapp.v1.CreateBackupVaultRequest;

                    /**
                     * Encodes the specified CreateBackupVaultRequest message. Does not implicitly {@link google.cloud.netapp.v1.CreateBackupVaultRequest.verify|verify} messages.
                     * @param message CreateBackupVaultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.ICreateBackupVaultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateBackupVaultRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.CreateBackupVaultRequest.verify|verify} messages.
                     * @param message CreateBackupVaultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.ICreateBackupVaultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateBackupVaultRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateBackupVaultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.CreateBackupVaultRequest;

                    /**
                     * Decodes a CreateBackupVaultRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateBackupVaultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.CreateBackupVaultRequest;

                    /**
                     * Verifies a CreateBackupVaultRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateBackupVaultRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateBackupVaultRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.CreateBackupVaultRequest;

                    /**
                     * Creates a plain object from a CreateBackupVaultRequest message. Also converts values to other types if specified.
                     * @param message CreateBackupVaultRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.CreateBackupVaultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateBackupVaultRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateBackupVaultRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteBackupVaultRequest. */
                interface IDeleteBackupVaultRequest {

                    /** DeleteBackupVaultRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteBackupVaultRequest. */
                class DeleteBackupVaultRequest implements IDeleteBackupVaultRequest {

                    /**
                     * Constructs a new DeleteBackupVaultRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IDeleteBackupVaultRequest);

                    /** DeleteBackupVaultRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteBackupVaultRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteBackupVaultRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IDeleteBackupVaultRequest): google.cloud.netapp.v1.DeleteBackupVaultRequest;

                    /**
                     * Encodes the specified DeleteBackupVaultRequest message. Does not implicitly {@link google.cloud.netapp.v1.DeleteBackupVaultRequest.verify|verify} messages.
                     * @param message DeleteBackupVaultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IDeleteBackupVaultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteBackupVaultRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.DeleteBackupVaultRequest.verify|verify} messages.
                     * @param message DeleteBackupVaultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IDeleteBackupVaultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteBackupVaultRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteBackupVaultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.DeleteBackupVaultRequest;

                    /**
                     * Decodes a DeleteBackupVaultRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteBackupVaultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.DeleteBackupVaultRequest;

                    /**
                     * Verifies a DeleteBackupVaultRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteBackupVaultRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteBackupVaultRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.DeleteBackupVaultRequest;

                    /**
                     * Creates a plain object from a DeleteBackupVaultRequest message. Also converts values to other types if specified.
                     * @param message DeleteBackupVaultRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.DeleteBackupVaultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteBackupVaultRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteBackupVaultRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateBackupVaultRequest. */
                interface IUpdateBackupVaultRequest {

                    /** UpdateBackupVaultRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateBackupVaultRequest backupVault */
                    backupVault?: (google.cloud.netapp.v1.IBackupVault|null);
                }

                /** Represents an UpdateBackupVaultRequest. */
                class UpdateBackupVaultRequest implements IUpdateBackupVaultRequest {

                    /**
                     * Constructs a new UpdateBackupVaultRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IUpdateBackupVaultRequest);

                    /** UpdateBackupVaultRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateBackupVaultRequest backupVault. */
                    public backupVault?: (google.cloud.netapp.v1.IBackupVault|null);

                    /**
                     * Creates a new UpdateBackupVaultRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateBackupVaultRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IUpdateBackupVaultRequest): google.cloud.netapp.v1.UpdateBackupVaultRequest;

                    /**
                     * Encodes the specified UpdateBackupVaultRequest message. Does not implicitly {@link google.cloud.netapp.v1.UpdateBackupVaultRequest.verify|verify} messages.
                     * @param message UpdateBackupVaultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IUpdateBackupVaultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateBackupVaultRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.UpdateBackupVaultRequest.verify|verify} messages.
                     * @param message UpdateBackupVaultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IUpdateBackupVaultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateBackupVaultRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateBackupVaultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.UpdateBackupVaultRequest;

                    /**
                     * Decodes an UpdateBackupVaultRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateBackupVaultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.UpdateBackupVaultRequest;

                    /**
                     * Verifies an UpdateBackupVaultRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateBackupVaultRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateBackupVaultRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.UpdateBackupVaultRequest;

                    /**
                     * Creates a plain object from an UpdateBackupVaultRequest message. Also converts values to other types if specified.
                     * @param message UpdateBackupVaultRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.UpdateBackupVaultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateBackupVaultRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateBackupVaultRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a NetApp */
                class NetApp extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new NetApp service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new NetApp service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): NetApp;

                    /**
                     * Calls ListStoragePools.
                     * @param request ListStoragePoolsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListStoragePoolsResponse
                     */
                    public listStoragePools(request: google.cloud.netapp.v1.IListStoragePoolsRequest, callback: google.cloud.netapp.v1.NetApp.ListStoragePoolsCallback): void;

                    /**
                     * Calls ListStoragePools.
                     * @param request ListStoragePoolsRequest message or plain object
                     * @returns Promise
                     */
                    public listStoragePools(request: google.cloud.netapp.v1.IListStoragePoolsRequest): Promise<google.cloud.netapp.v1.ListStoragePoolsResponse>;

                    /**
                     * Calls CreateStoragePool.
                     * @param request CreateStoragePoolRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createStoragePool(request: google.cloud.netapp.v1.ICreateStoragePoolRequest, callback: google.cloud.netapp.v1.NetApp.CreateStoragePoolCallback): void;

                    /**
                     * Calls CreateStoragePool.
                     * @param request CreateStoragePoolRequest message or plain object
                     * @returns Promise
                     */
                    public createStoragePool(request: google.cloud.netapp.v1.ICreateStoragePoolRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetStoragePool.
                     * @param request GetStoragePoolRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and StoragePool
                     */
                    public getStoragePool(request: google.cloud.netapp.v1.IGetStoragePoolRequest, callback: google.cloud.netapp.v1.NetApp.GetStoragePoolCallback): void;

                    /**
                     * Calls GetStoragePool.
                     * @param request GetStoragePoolRequest message or plain object
                     * @returns Promise
                     */
                    public getStoragePool(request: google.cloud.netapp.v1.IGetStoragePoolRequest): Promise<google.cloud.netapp.v1.StoragePool>;

                    /**
                     * Calls UpdateStoragePool.
                     * @param request UpdateStoragePoolRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateStoragePool(request: google.cloud.netapp.v1.IUpdateStoragePoolRequest, callback: google.cloud.netapp.v1.NetApp.UpdateStoragePoolCallback): void;

                    /**
                     * Calls UpdateStoragePool.
                     * @param request UpdateStoragePoolRequest message or plain object
                     * @returns Promise
                     */
                    public updateStoragePool(request: google.cloud.netapp.v1.IUpdateStoragePoolRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteStoragePool.
                     * @param request DeleteStoragePoolRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteStoragePool(request: google.cloud.netapp.v1.IDeleteStoragePoolRequest, callback: google.cloud.netapp.v1.NetApp.DeleteStoragePoolCallback): void;

                    /**
                     * Calls DeleteStoragePool.
                     * @param request DeleteStoragePoolRequest message or plain object
                     * @returns Promise
                     */
                    public deleteStoragePool(request: google.cloud.netapp.v1.IDeleteStoragePoolRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListVolumes.
                     * @param request ListVolumesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListVolumesResponse
                     */
                    public listVolumes(request: google.cloud.netapp.v1.IListVolumesRequest, callback: google.cloud.netapp.v1.NetApp.ListVolumesCallback): void;

                    /**
                     * Calls ListVolumes.
                     * @param request ListVolumesRequest message or plain object
                     * @returns Promise
                     */
                    public listVolumes(request: google.cloud.netapp.v1.IListVolumesRequest): Promise<google.cloud.netapp.v1.ListVolumesResponse>;

                    /**
                     * Calls GetVolume.
                     * @param request GetVolumeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Volume
                     */
                    public getVolume(request: google.cloud.netapp.v1.IGetVolumeRequest, callback: google.cloud.netapp.v1.NetApp.GetVolumeCallback): void;

                    /**
                     * Calls GetVolume.
                     * @param request GetVolumeRequest message or plain object
                     * @returns Promise
                     */
                    public getVolume(request: google.cloud.netapp.v1.IGetVolumeRequest): Promise<google.cloud.netapp.v1.Volume>;

                    /**
                     * Calls CreateVolume.
                     * @param request CreateVolumeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createVolume(request: google.cloud.netapp.v1.ICreateVolumeRequest, callback: google.cloud.netapp.v1.NetApp.CreateVolumeCallback): void;

                    /**
                     * Calls CreateVolume.
                     * @param request CreateVolumeRequest message or plain object
                     * @returns Promise
                     */
                    public createVolume(request: google.cloud.netapp.v1.ICreateVolumeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateVolume.
                     * @param request UpdateVolumeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateVolume(request: google.cloud.netapp.v1.IUpdateVolumeRequest, callback: google.cloud.netapp.v1.NetApp.UpdateVolumeCallback): void;

                    /**
                     * Calls UpdateVolume.
                     * @param request UpdateVolumeRequest message or plain object
                     * @returns Promise
                     */
                    public updateVolume(request: google.cloud.netapp.v1.IUpdateVolumeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteVolume.
                     * @param request DeleteVolumeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteVolume(request: google.cloud.netapp.v1.IDeleteVolumeRequest, callback: google.cloud.netapp.v1.NetApp.DeleteVolumeCallback): void;

                    /**
                     * Calls DeleteVolume.
                     * @param request DeleteVolumeRequest message or plain object
                     * @returns Promise
                     */
                    public deleteVolume(request: google.cloud.netapp.v1.IDeleteVolumeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RevertVolume.
                     * @param request RevertVolumeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public revertVolume(request: google.cloud.netapp.v1.IRevertVolumeRequest, callback: google.cloud.netapp.v1.NetApp.RevertVolumeCallback): void;

                    /**
                     * Calls RevertVolume.
                     * @param request RevertVolumeRequest message or plain object
                     * @returns Promise
                     */
                    public revertVolume(request: google.cloud.netapp.v1.IRevertVolumeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListSnapshots.
                     * @param request ListSnapshotsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListSnapshotsResponse
                     */
                    public listSnapshots(request: google.cloud.netapp.v1.IListSnapshotsRequest, callback: google.cloud.netapp.v1.NetApp.ListSnapshotsCallback): void;

                    /**
                     * Calls ListSnapshots.
                     * @param request ListSnapshotsRequest message or plain object
                     * @returns Promise
                     */
                    public listSnapshots(request: google.cloud.netapp.v1.IListSnapshotsRequest): Promise<google.cloud.netapp.v1.ListSnapshotsResponse>;

                    /**
                     * Calls GetSnapshot.
                     * @param request GetSnapshotRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Snapshot
                     */
                    public getSnapshot(request: google.cloud.netapp.v1.IGetSnapshotRequest, callback: google.cloud.netapp.v1.NetApp.GetSnapshotCallback): void;

                    /**
                     * Calls GetSnapshot.
                     * @param request GetSnapshotRequest message or plain object
                     * @returns Promise
                     */
                    public getSnapshot(request: google.cloud.netapp.v1.IGetSnapshotRequest): Promise<google.cloud.netapp.v1.Snapshot>;

                    /**
                     * Calls CreateSnapshot.
                     * @param request CreateSnapshotRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createSnapshot(request: google.cloud.netapp.v1.ICreateSnapshotRequest, callback: google.cloud.netapp.v1.NetApp.CreateSnapshotCallback): void;

                    /**
                     * Calls CreateSnapshot.
                     * @param request CreateSnapshotRequest message or plain object
                     * @returns Promise
                     */
                    public createSnapshot(request: google.cloud.netapp.v1.ICreateSnapshotRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteSnapshot.
                     * @param request DeleteSnapshotRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteSnapshot(request: google.cloud.netapp.v1.IDeleteSnapshotRequest, callback: google.cloud.netapp.v1.NetApp.DeleteSnapshotCallback): void;

                    /**
                     * Calls DeleteSnapshot.
                     * @param request DeleteSnapshotRequest message or plain object
                     * @returns Promise
                     */
                    public deleteSnapshot(request: google.cloud.netapp.v1.IDeleteSnapshotRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateSnapshot.
                     * @param request UpdateSnapshotRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateSnapshot(request: google.cloud.netapp.v1.IUpdateSnapshotRequest, callback: google.cloud.netapp.v1.NetApp.UpdateSnapshotCallback): void;

                    /**
                     * Calls UpdateSnapshot.
                     * @param request UpdateSnapshotRequest message or plain object
                     * @returns Promise
                     */
                    public updateSnapshot(request: google.cloud.netapp.v1.IUpdateSnapshotRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListActiveDirectories.
                     * @param request ListActiveDirectoriesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListActiveDirectoriesResponse
                     */
                    public listActiveDirectories(request: google.cloud.netapp.v1.IListActiveDirectoriesRequest, callback: google.cloud.netapp.v1.NetApp.ListActiveDirectoriesCallback): void;

                    /**
                     * Calls ListActiveDirectories.
                     * @param request ListActiveDirectoriesRequest message or plain object
                     * @returns Promise
                     */
                    public listActiveDirectories(request: google.cloud.netapp.v1.IListActiveDirectoriesRequest): Promise<google.cloud.netapp.v1.ListActiveDirectoriesResponse>;

                    /**
                     * Calls GetActiveDirectory.
                     * @param request GetActiveDirectoryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ActiveDirectory
                     */
                    public getActiveDirectory(request: google.cloud.netapp.v1.IGetActiveDirectoryRequest, callback: google.cloud.netapp.v1.NetApp.GetActiveDirectoryCallback): void;

                    /**
                     * Calls GetActiveDirectory.
                     * @param request GetActiveDirectoryRequest message or plain object
                     * @returns Promise
                     */
                    public getActiveDirectory(request: google.cloud.netapp.v1.IGetActiveDirectoryRequest): Promise<google.cloud.netapp.v1.ActiveDirectory>;

                    /**
                     * Calls CreateActiveDirectory.
                     * @param request CreateActiveDirectoryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createActiveDirectory(request: google.cloud.netapp.v1.ICreateActiveDirectoryRequest, callback: google.cloud.netapp.v1.NetApp.CreateActiveDirectoryCallback): void;

                    /**
                     * Calls CreateActiveDirectory.
                     * @param request CreateActiveDirectoryRequest message or plain object
                     * @returns Promise
                     */
                    public createActiveDirectory(request: google.cloud.netapp.v1.ICreateActiveDirectoryRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateActiveDirectory.
                     * @param request UpdateActiveDirectoryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateActiveDirectory(request: google.cloud.netapp.v1.IUpdateActiveDirectoryRequest, callback: google.cloud.netapp.v1.NetApp.UpdateActiveDirectoryCallback): void;

                    /**
                     * Calls UpdateActiveDirectory.
                     * @param request UpdateActiveDirectoryRequest message or plain object
                     * @returns Promise
                     */
                    public updateActiveDirectory(request: google.cloud.netapp.v1.IUpdateActiveDirectoryRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteActiveDirectory.
                     * @param request DeleteActiveDirectoryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteActiveDirectory(request: google.cloud.netapp.v1.IDeleteActiveDirectoryRequest, callback: google.cloud.netapp.v1.NetApp.DeleteActiveDirectoryCallback): void;

                    /**
                     * Calls DeleteActiveDirectory.
                     * @param request DeleteActiveDirectoryRequest message or plain object
                     * @returns Promise
                     */
                    public deleteActiveDirectory(request: google.cloud.netapp.v1.IDeleteActiveDirectoryRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListKmsConfigs.
                     * @param request ListKmsConfigsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListKmsConfigsResponse
                     */
                    public listKmsConfigs(request: google.cloud.netapp.v1.IListKmsConfigsRequest, callback: google.cloud.netapp.v1.NetApp.ListKmsConfigsCallback): void;

                    /**
                     * Calls ListKmsConfigs.
                     * @param request ListKmsConfigsRequest message or plain object
                     * @returns Promise
                     */
                    public listKmsConfigs(request: google.cloud.netapp.v1.IListKmsConfigsRequest): Promise<google.cloud.netapp.v1.ListKmsConfigsResponse>;

                    /**
                     * Calls CreateKmsConfig.
                     * @param request CreateKmsConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createKmsConfig(request: google.cloud.netapp.v1.ICreateKmsConfigRequest, callback: google.cloud.netapp.v1.NetApp.CreateKmsConfigCallback): void;

                    /**
                     * Calls CreateKmsConfig.
                     * @param request CreateKmsConfigRequest message or plain object
                     * @returns Promise
                     */
                    public createKmsConfig(request: google.cloud.netapp.v1.ICreateKmsConfigRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetKmsConfig.
                     * @param request GetKmsConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and KmsConfig
                     */
                    public getKmsConfig(request: google.cloud.netapp.v1.IGetKmsConfigRequest, callback: google.cloud.netapp.v1.NetApp.GetKmsConfigCallback): void;

                    /**
                     * Calls GetKmsConfig.
                     * @param request GetKmsConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getKmsConfig(request: google.cloud.netapp.v1.IGetKmsConfigRequest): Promise<google.cloud.netapp.v1.KmsConfig>;

                    /**
                     * Calls UpdateKmsConfig.
                     * @param request UpdateKmsConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateKmsConfig(request: google.cloud.netapp.v1.IUpdateKmsConfigRequest, callback: google.cloud.netapp.v1.NetApp.UpdateKmsConfigCallback): void;

                    /**
                     * Calls UpdateKmsConfig.
                     * @param request UpdateKmsConfigRequest message or plain object
                     * @returns Promise
                     */
                    public updateKmsConfig(request: google.cloud.netapp.v1.IUpdateKmsConfigRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls EncryptVolumes.
                     * @param request EncryptVolumesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public encryptVolumes(request: google.cloud.netapp.v1.IEncryptVolumesRequest, callback: google.cloud.netapp.v1.NetApp.EncryptVolumesCallback): void;

                    /**
                     * Calls EncryptVolumes.
                     * @param request EncryptVolumesRequest message or plain object
                     * @returns Promise
                     */
                    public encryptVolumes(request: google.cloud.netapp.v1.IEncryptVolumesRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls VerifyKmsConfig.
                     * @param request VerifyKmsConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and VerifyKmsConfigResponse
                     */
                    public verifyKmsConfig(request: google.cloud.netapp.v1.IVerifyKmsConfigRequest, callback: google.cloud.netapp.v1.NetApp.VerifyKmsConfigCallback): void;

                    /**
                     * Calls VerifyKmsConfig.
                     * @param request VerifyKmsConfigRequest message or plain object
                     * @returns Promise
                     */
                    public verifyKmsConfig(request: google.cloud.netapp.v1.IVerifyKmsConfigRequest): Promise<google.cloud.netapp.v1.VerifyKmsConfigResponse>;

                    /**
                     * Calls DeleteKmsConfig.
                     * @param request DeleteKmsConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteKmsConfig(request: google.cloud.netapp.v1.IDeleteKmsConfigRequest, callback: google.cloud.netapp.v1.NetApp.DeleteKmsConfigCallback): void;

                    /**
                     * Calls DeleteKmsConfig.
                     * @param request DeleteKmsConfigRequest message or plain object
                     * @returns Promise
                     */
                    public deleteKmsConfig(request: google.cloud.netapp.v1.IDeleteKmsConfigRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListReplications.
                     * @param request ListReplicationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListReplicationsResponse
                     */
                    public listReplications(request: google.cloud.netapp.v1.IListReplicationsRequest, callback: google.cloud.netapp.v1.NetApp.ListReplicationsCallback): void;

                    /**
                     * Calls ListReplications.
                     * @param request ListReplicationsRequest message or plain object
                     * @returns Promise
                     */
                    public listReplications(request: google.cloud.netapp.v1.IListReplicationsRequest): Promise<google.cloud.netapp.v1.ListReplicationsResponse>;

                    /**
                     * Calls GetReplication.
                     * @param request GetReplicationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Replication
                     */
                    public getReplication(request: google.cloud.netapp.v1.IGetReplicationRequest, callback: google.cloud.netapp.v1.NetApp.GetReplicationCallback): void;

                    /**
                     * Calls GetReplication.
                     * @param request GetReplicationRequest message or plain object
                     * @returns Promise
                     */
                    public getReplication(request: google.cloud.netapp.v1.IGetReplicationRequest): Promise<google.cloud.netapp.v1.Replication>;

                    /**
                     * Calls CreateReplication.
                     * @param request CreateReplicationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createReplication(request: google.cloud.netapp.v1.ICreateReplicationRequest, callback: google.cloud.netapp.v1.NetApp.CreateReplicationCallback): void;

                    /**
                     * Calls CreateReplication.
                     * @param request CreateReplicationRequest message or plain object
                     * @returns Promise
                     */
                    public createReplication(request: google.cloud.netapp.v1.ICreateReplicationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteReplication.
                     * @param request DeleteReplicationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteReplication(request: google.cloud.netapp.v1.IDeleteReplicationRequest, callback: google.cloud.netapp.v1.NetApp.DeleteReplicationCallback): void;

                    /**
                     * Calls DeleteReplication.
                     * @param request DeleteReplicationRequest message or plain object
                     * @returns Promise
                     */
                    public deleteReplication(request: google.cloud.netapp.v1.IDeleteReplicationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateReplication.
                     * @param request UpdateReplicationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateReplication(request: google.cloud.netapp.v1.IUpdateReplicationRequest, callback: google.cloud.netapp.v1.NetApp.UpdateReplicationCallback): void;

                    /**
                     * Calls UpdateReplication.
                     * @param request UpdateReplicationRequest message or plain object
                     * @returns Promise
                     */
                    public updateReplication(request: google.cloud.netapp.v1.IUpdateReplicationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StopReplication.
                     * @param request StopReplicationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public stopReplication(request: google.cloud.netapp.v1.IStopReplicationRequest, callback: google.cloud.netapp.v1.NetApp.StopReplicationCallback): void;

                    /**
                     * Calls StopReplication.
                     * @param request StopReplicationRequest message or plain object
                     * @returns Promise
                     */
                    public stopReplication(request: google.cloud.netapp.v1.IStopReplicationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ResumeReplication.
                     * @param request ResumeReplicationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public resumeReplication(request: google.cloud.netapp.v1.IResumeReplicationRequest, callback: google.cloud.netapp.v1.NetApp.ResumeReplicationCallback): void;

                    /**
                     * Calls ResumeReplication.
                     * @param request ResumeReplicationRequest message or plain object
                     * @returns Promise
                     */
                    public resumeReplication(request: google.cloud.netapp.v1.IResumeReplicationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ReverseReplicationDirection.
                     * @param request ReverseReplicationDirectionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public reverseReplicationDirection(request: google.cloud.netapp.v1.IReverseReplicationDirectionRequest, callback: google.cloud.netapp.v1.NetApp.ReverseReplicationDirectionCallback): void;

                    /**
                     * Calls ReverseReplicationDirection.
                     * @param request ReverseReplicationDirectionRequest message or plain object
                     * @returns Promise
                     */
                    public reverseReplicationDirection(request: google.cloud.netapp.v1.IReverseReplicationDirectionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateBackupVault.
                     * @param request CreateBackupVaultRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createBackupVault(request: google.cloud.netapp.v1.ICreateBackupVaultRequest, callback: google.cloud.netapp.v1.NetApp.CreateBackupVaultCallback): void;

                    /**
                     * Calls CreateBackupVault.
                     * @param request CreateBackupVaultRequest message or plain object
                     * @returns Promise
                     */
                    public createBackupVault(request: google.cloud.netapp.v1.ICreateBackupVaultRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetBackupVault.
                     * @param request GetBackupVaultRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BackupVault
                     */
                    public getBackupVault(request: google.cloud.netapp.v1.IGetBackupVaultRequest, callback: google.cloud.netapp.v1.NetApp.GetBackupVaultCallback): void;

                    /**
                     * Calls GetBackupVault.
                     * @param request GetBackupVaultRequest message or plain object
                     * @returns Promise
                     */
                    public getBackupVault(request: google.cloud.netapp.v1.IGetBackupVaultRequest): Promise<google.cloud.netapp.v1.BackupVault>;

                    /**
                     * Calls ListBackupVaults.
                     * @param request ListBackupVaultsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListBackupVaultsResponse
                     */
                    public listBackupVaults(request: google.cloud.netapp.v1.IListBackupVaultsRequest, callback: google.cloud.netapp.v1.NetApp.ListBackupVaultsCallback): void;

                    /**
                     * Calls ListBackupVaults.
                     * @param request ListBackupVaultsRequest message or plain object
                     * @returns Promise
                     */
                    public listBackupVaults(request: google.cloud.netapp.v1.IListBackupVaultsRequest): Promise<google.cloud.netapp.v1.ListBackupVaultsResponse>;

                    /**
                     * Calls UpdateBackupVault.
                     * @param request UpdateBackupVaultRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateBackupVault(request: google.cloud.netapp.v1.IUpdateBackupVaultRequest, callback: google.cloud.netapp.v1.NetApp.UpdateBackupVaultCallback): void;

                    /**
                     * Calls UpdateBackupVault.
                     * @param request UpdateBackupVaultRequest message or plain object
                     * @returns Promise
                     */
                    public updateBackupVault(request: google.cloud.netapp.v1.IUpdateBackupVaultRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteBackupVault.
                     * @param request DeleteBackupVaultRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteBackupVault(request: google.cloud.netapp.v1.IDeleteBackupVaultRequest, callback: google.cloud.netapp.v1.NetApp.DeleteBackupVaultCallback): void;

                    /**
                     * Calls DeleteBackupVault.
                     * @param request DeleteBackupVaultRequest message or plain object
                     * @returns Promise
                     */
                    public deleteBackupVault(request: google.cloud.netapp.v1.IDeleteBackupVaultRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateBackup.
                     * @param request CreateBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createBackup(request: google.cloud.netapp.v1.ICreateBackupRequest, callback: google.cloud.netapp.v1.NetApp.CreateBackupCallback): void;

                    /**
                     * Calls CreateBackup.
                     * @param request CreateBackupRequest message or plain object
                     * @returns Promise
                     */
                    public createBackup(request: google.cloud.netapp.v1.ICreateBackupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetBackup.
                     * @param request GetBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Backup
                     */
                    public getBackup(request: google.cloud.netapp.v1.IGetBackupRequest, callback: google.cloud.netapp.v1.NetApp.GetBackupCallback): void;

                    /**
                     * Calls GetBackup.
                     * @param request GetBackupRequest message or plain object
                     * @returns Promise
                     */
                    public getBackup(request: google.cloud.netapp.v1.IGetBackupRequest): Promise<google.cloud.netapp.v1.Backup>;

                    /**
                     * Calls ListBackups.
                     * @param request ListBackupsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListBackupsResponse
                     */
                    public listBackups(request: google.cloud.netapp.v1.IListBackupsRequest, callback: google.cloud.netapp.v1.NetApp.ListBackupsCallback): void;

                    /**
                     * Calls ListBackups.
                     * @param request ListBackupsRequest message or plain object
                     * @returns Promise
                     */
                    public listBackups(request: google.cloud.netapp.v1.IListBackupsRequest): Promise<google.cloud.netapp.v1.ListBackupsResponse>;

                    /**
                     * Calls DeleteBackup.
                     * @param request DeleteBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteBackup(request: google.cloud.netapp.v1.IDeleteBackupRequest, callback: google.cloud.netapp.v1.NetApp.DeleteBackupCallback): void;

                    /**
                     * Calls DeleteBackup.
                     * @param request DeleteBackupRequest message or plain object
                     * @returns Promise
                     */
                    public deleteBackup(request: google.cloud.netapp.v1.IDeleteBackupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateBackup.
                     * @param request UpdateBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateBackup(request: google.cloud.netapp.v1.IUpdateBackupRequest, callback: google.cloud.netapp.v1.NetApp.UpdateBackupCallback): void;

                    /**
                     * Calls UpdateBackup.
                     * @param request UpdateBackupRequest message or plain object
                     * @returns Promise
                     */
                    public updateBackup(request: google.cloud.netapp.v1.IUpdateBackupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateBackupPolicy.
                     * @param request CreateBackupPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createBackupPolicy(request: google.cloud.netapp.v1.ICreateBackupPolicyRequest, callback: google.cloud.netapp.v1.NetApp.CreateBackupPolicyCallback): void;

                    /**
                     * Calls CreateBackupPolicy.
                     * @param request CreateBackupPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public createBackupPolicy(request: google.cloud.netapp.v1.ICreateBackupPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetBackupPolicy.
                     * @param request GetBackupPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BackupPolicy
                     */
                    public getBackupPolicy(request: google.cloud.netapp.v1.IGetBackupPolicyRequest, callback: google.cloud.netapp.v1.NetApp.GetBackupPolicyCallback): void;

                    /**
                     * Calls GetBackupPolicy.
                     * @param request GetBackupPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getBackupPolicy(request: google.cloud.netapp.v1.IGetBackupPolicyRequest): Promise<google.cloud.netapp.v1.BackupPolicy>;

                    /**
                     * Calls ListBackupPolicies.
                     * @param request ListBackupPoliciesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListBackupPoliciesResponse
                     */
                    public listBackupPolicies(request: google.cloud.netapp.v1.IListBackupPoliciesRequest, callback: google.cloud.netapp.v1.NetApp.ListBackupPoliciesCallback): void;

                    /**
                     * Calls ListBackupPolicies.
                     * @param request ListBackupPoliciesRequest message or plain object
                     * @returns Promise
                     */
                    public listBackupPolicies(request: google.cloud.netapp.v1.IListBackupPoliciesRequest): Promise<google.cloud.netapp.v1.ListBackupPoliciesResponse>;

                    /**
                     * Calls UpdateBackupPolicy.
                     * @param request UpdateBackupPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateBackupPolicy(request: google.cloud.netapp.v1.IUpdateBackupPolicyRequest, callback: google.cloud.netapp.v1.NetApp.UpdateBackupPolicyCallback): void;

                    /**
                     * Calls UpdateBackupPolicy.
                     * @param request UpdateBackupPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public updateBackupPolicy(request: google.cloud.netapp.v1.IUpdateBackupPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteBackupPolicy.
                     * @param request DeleteBackupPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteBackupPolicy(request: google.cloud.netapp.v1.IDeleteBackupPolicyRequest, callback: google.cloud.netapp.v1.NetApp.DeleteBackupPolicyCallback): void;

                    /**
                     * Calls DeleteBackupPolicy.
                     * @param request DeleteBackupPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteBackupPolicy(request: google.cloud.netapp.v1.IDeleteBackupPolicyRequest): Promise<google.longrunning.Operation>;
                }

                namespace NetApp {

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|listStoragePools}.
                     * @param error Error, if any
                     * @param [response] ListStoragePoolsResponse
                     */
                    type ListStoragePoolsCallback = (error: (Error|null), response?: google.cloud.netapp.v1.ListStoragePoolsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|createStoragePool}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateStoragePoolCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|getStoragePool}.
                     * @param error Error, if any
                     * @param [response] StoragePool
                     */
                    type GetStoragePoolCallback = (error: (Error|null), response?: google.cloud.netapp.v1.StoragePool) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|updateStoragePool}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateStoragePoolCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|deleteStoragePool}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteStoragePoolCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|listVolumes}.
                     * @param error Error, if any
                     * @param [response] ListVolumesResponse
                     */
                    type ListVolumesCallback = (error: (Error|null), response?: google.cloud.netapp.v1.ListVolumesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|getVolume}.
                     * @param error Error, if any
                     * @param [response] Volume
                     */
                    type GetVolumeCallback = (error: (Error|null), response?: google.cloud.netapp.v1.Volume) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|createVolume}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateVolumeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|updateVolume}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateVolumeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|deleteVolume}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteVolumeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|revertVolume}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RevertVolumeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|listSnapshots}.
                     * @param error Error, if any
                     * @param [response] ListSnapshotsResponse
                     */
                    type ListSnapshotsCallback = (error: (Error|null), response?: google.cloud.netapp.v1.ListSnapshotsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|getSnapshot}.
                     * @param error Error, if any
                     * @param [response] Snapshot
                     */
                    type GetSnapshotCallback = (error: (Error|null), response?: google.cloud.netapp.v1.Snapshot) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|createSnapshot}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateSnapshotCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|deleteSnapshot}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteSnapshotCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|updateSnapshot}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateSnapshotCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|listActiveDirectories}.
                     * @param error Error, if any
                     * @param [response] ListActiveDirectoriesResponse
                     */
                    type ListActiveDirectoriesCallback = (error: (Error|null), response?: google.cloud.netapp.v1.ListActiveDirectoriesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|getActiveDirectory}.
                     * @param error Error, if any
                     * @param [response] ActiveDirectory
                     */
                    type GetActiveDirectoryCallback = (error: (Error|null), response?: google.cloud.netapp.v1.ActiveDirectory) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|createActiveDirectory}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateActiveDirectoryCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|updateActiveDirectory}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateActiveDirectoryCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|deleteActiveDirectory}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteActiveDirectoryCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|listKmsConfigs}.
                     * @param error Error, if any
                     * @param [response] ListKmsConfigsResponse
                     */
                    type ListKmsConfigsCallback = (error: (Error|null), response?: google.cloud.netapp.v1.ListKmsConfigsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|createKmsConfig}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateKmsConfigCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|getKmsConfig}.
                     * @param error Error, if any
                     * @param [response] KmsConfig
                     */
                    type GetKmsConfigCallback = (error: (Error|null), response?: google.cloud.netapp.v1.KmsConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|updateKmsConfig}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateKmsConfigCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|encryptVolumes}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type EncryptVolumesCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|verifyKmsConfig}.
                     * @param error Error, if any
                     * @param [response] VerifyKmsConfigResponse
                     */
                    type VerifyKmsConfigCallback = (error: (Error|null), response?: google.cloud.netapp.v1.VerifyKmsConfigResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|deleteKmsConfig}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteKmsConfigCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|listReplications}.
                     * @param error Error, if any
                     * @param [response] ListReplicationsResponse
                     */
                    type ListReplicationsCallback = (error: (Error|null), response?: google.cloud.netapp.v1.ListReplicationsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|getReplication}.
                     * @param error Error, if any
                     * @param [response] Replication
                     */
                    type GetReplicationCallback = (error: (Error|null), response?: google.cloud.netapp.v1.Replication) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|createReplication}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateReplicationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|deleteReplication}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteReplicationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|updateReplication}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateReplicationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|stopReplication}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StopReplicationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|resumeReplication}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ResumeReplicationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|reverseReplicationDirection}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ReverseReplicationDirectionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|createBackupVault}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateBackupVaultCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|getBackupVault}.
                     * @param error Error, if any
                     * @param [response] BackupVault
                     */
                    type GetBackupVaultCallback = (error: (Error|null), response?: google.cloud.netapp.v1.BackupVault) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|listBackupVaults}.
                     * @param error Error, if any
                     * @param [response] ListBackupVaultsResponse
                     */
                    type ListBackupVaultsCallback = (error: (Error|null), response?: google.cloud.netapp.v1.ListBackupVaultsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|updateBackupVault}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateBackupVaultCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|deleteBackupVault}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteBackupVaultCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|createBackup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateBackupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|getBackup}.
                     * @param error Error, if any
                     * @param [response] Backup
                     */
                    type GetBackupCallback = (error: (Error|null), response?: google.cloud.netapp.v1.Backup) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|listBackups}.
                     * @param error Error, if any
                     * @param [response] ListBackupsResponse
                     */
                    type ListBackupsCallback = (error: (Error|null), response?: google.cloud.netapp.v1.ListBackupsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|deleteBackup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteBackupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|updateBackup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateBackupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|createBackupPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateBackupPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|getBackupPolicy}.
                     * @param error Error, if any
                     * @param [response] BackupPolicy
                     */
                    type GetBackupPolicyCallback = (error: (Error|null), response?: google.cloud.netapp.v1.BackupPolicy) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|listBackupPolicies}.
                     * @param error Error, if any
                     * @param [response] ListBackupPoliciesResponse
                     */
                    type ListBackupPoliciesCallback = (error: (Error|null), response?: google.cloud.netapp.v1.ListBackupPoliciesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|updateBackupPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateBackupPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.netapp.v1.NetApp|deleteBackupPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteBackupPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
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
                    constructor(properties?: google.cloud.netapp.v1.IOperationMetadata);

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
                    public static create(properties?: google.cloud.netapp.v1.IOperationMetadata): google.cloud.netapp.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.netapp.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a GetKmsConfigRequest. */
                interface IGetKmsConfigRequest {

                    /** GetKmsConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetKmsConfigRequest. */
                class GetKmsConfigRequest implements IGetKmsConfigRequest {

                    /**
                     * Constructs a new GetKmsConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IGetKmsConfigRequest);

                    /** GetKmsConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetKmsConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetKmsConfigRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IGetKmsConfigRequest): google.cloud.netapp.v1.GetKmsConfigRequest;

                    /**
                     * Encodes the specified GetKmsConfigRequest message. Does not implicitly {@link google.cloud.netapp.v1.GetKmsConfigRequest.verify|verify} messages.
                     * @param message GetKmsConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IGetKmsConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetKmsConfigRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.GetKmsConfigRequest.verify|verify} messages.
                     * @param message GetKmsConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IGetKmsConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetKmsConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetKmsConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.GetKmsConfigRequest;

                    /**
                     * Decodes a GetKmsConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetKmsConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.GetKmsConfigRequest;

                    /**
                     * Verifies a GetKmsConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetKmsConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetKmsConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.GetKmsConfigRequest;

                    /**
                     * Creates a plain object from a GetKmsConfigRequest message. Also converts values to other types if specified.
                     * @param message GetKmsConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.GetKmsConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetKmsConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetKmsConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListKmsConfigsRequest. */
                interface IListKmsConfigsRequest {

                    /** ListKmsConfigsRequest parent */
                    parent?: (string|null);

                    /** ListKmsConfigsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListKmsConfigsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListKmsConfigsRequest orderBy */
                    orderBy?: (string|null);

                    /** ListKmsConfigsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListKmsConfigsRequest. */
                class ListKmsConfigsRequest implements IListKmsConfigsRequest {

                    /**
                     * Constructs a new ListKmsConfigsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IListKmsConfigsRequest);

                    /** ListKmsConfigsRequest parent. */
                    public parent: string;

                    /** ListKmsConfigsRequest pageSize. */
                    public pageSize: number;

                    /** ListKmsConfigsRequest pageToken. */
                    public pageToken: string;

                    /** ListKmsConfigsRequest orderBy. */
                    public orderBy: string;

                    /** ListKmsConfigsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListKmsConfigsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListKmsConfigsRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IListKmsConfigsRequest): google.cloud.netapp.v1.ListKmsConfigsRequest;

                    /**
                     * Encodes the specified ListKmsConfigsRequest message. Does not implicitly {@link google.cloud.netapp.v1.ListKmsConfigsRequest.verify|verify} messages.
                     * @param message ListKmsConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IListKmsConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListKmsConfigsRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.ListKmsConfigsRequest.verify|verify} messages.
                     * @param message ListKmsConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IListKmsConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListKmsConfigsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListKmsConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.ListKmsConfigsRequest;

                    /**
                     * Decodes a ListKmsConfigsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListKmsConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.ListKmsConfigsRequest;

                    /**
                     * Verifies a ListKmsConfigsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListKmsConfigsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListKmsConfigsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.ListKmsConfigsRequest;

                    /**
                     * Creates a plain object from a ListKmsConfigsRequest message. Also converts values to other types if specified.
                     * @param message ListKmsConfigsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.ListKmsConfigsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListKmsConfigsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListKmsConfigsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListKmsConfigsResponse. */
                interface IListKmsConfigsResponse {

                    /** ListKmsConfigsResponse kmsConfigs */
                    kmsConfigs?: (google.cloud.netapp.v1.IKmsConfig[]|null);

                    /** ListKmsConfigsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListKmsConfigsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListKmsConfigsResponse. */
                class ListKmsConfigsResponse implements IListKmsConfigsResponse {

                    /**
                     * Constructs a new ListKmsConfigsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IListKmsConfigsResponse);

                    /** ListKmsConfigsResponse kmsConfigs. */
                    public kmsConfigs: google.cloud.netapp.v1.IKmsConfig[];

                    /** ListKmsConfigsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListKmsConfigsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListKmsConfigsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListKmsConfigsResponse instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IListKmsConfigsResponse): google.cloud.netapp.v1.ListKmsConfigsResponse;

                    /**
                     * Encodes the specified ListKmsConfigsResponse message. Does not implicitly {@link google.cloud.netapp.v1.ListKmsConfigsResponse.verify|verify} messages.
                     * @param message ListKmsConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IListKmsConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListKmsConfigsResponse message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.ListKmsConfigsResponse.verify|verify} messages.
                     * @param message ListKmsConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IListKmsConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListKmsConfigsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListKmsConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.ListKmsConfigsResponse;

                    /**
                     * Decodes a ListKmsConfigsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListKmsConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.ListKmsConfigsResponse;

                    /**
                     * Verifies a ListKmsConfigsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListKmsConfigsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListKmsConfigsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.ListKmsConfigsResponse;

                    /**
                     * Creates a plain object from a ListKmsConfigsResponse message. Also converts values to other types if specified.
                     * @param message ListKmsConfigsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.ListKmsConfigsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListKmsConfigsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListKmsConfigsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateKmsConfigRequest. */
                interface ICreateKmsConfigRequest {

                    /** CreateKmsConfigRequest parent */
                    parent?: (string|null);

                    /** CreateKmsConfigRequest kmsConfigId */
                    kmsConfigId?: (string|null);

                    /** CreateKmsConfigRequest kmsConfig */
                    kmsConfig?: (google.cloud.netapp.v1.IKmsConfig|null);
                }

                /** Represents a CreateKmsConfigRequest. */
                class CreateKmsConfigRequest implements ICreateKmsConfigRequest {

                    /**
                     * Constructs a new CreateKmsConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.ICreateKmsConfigRequest);

                    /** CreateKmsConfigRequest parent. */
                    public parent: string;

                    /** CreateKmsConfigRequest kmsConfigId. */
                    public kmsConfigId: string;

                    /** CreateKmsConfigRequest kmsConfig. */
                    public kmsConfig?: (google.cloud.netapp.v1.IKmsConfig|null);

                    /**
                     * Creates a new CreateKmsConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateKmsConfigRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.ICreateKmsConfigRequest): google.cloud.netapp.v1.CreateKmsConfigRequest;

                    /**
                     * Encodes the specified CreateKmsConfigRequest message. Does not implicitly {@link google.cloud.netapp.v1.CreateKmsConfigRequest.verify|verify} messages.
                     * @param message CreateKmsConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.ICreateKmsConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateKmsConfigRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.CreateKmsConfigRequest.verify|verify} messages.
                     * @param message CreateKmsConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.ICreateKmsConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateKmsConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateKmsConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.CreateKmsConfigRequest;

                    /**
                     * Decodes a CreateKmsConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateKmsConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.CreateKmsConfigRequest;

                    /**
                     * Verifies a CreateKmsConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateKmsConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateKmsConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.CreateKmsConfigRequest;

                    /**
                     * Creates a plain object from a CreateKmsConfigRequest message. Also converts values to other types if specified.
                     * @param message CreateKmsConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.CreateKmsConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateKmsConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateKmsConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateKmsConfigRequest. */
                interface IUpdateKmsConfigRequest {

                    /** UpdateKmsConfigRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateKmsConfigRequest kmsConfig */
                    kmsConfig?: (google.cloud.netapp.v1.IKmsConfig|null);
                }

                /** Represents an UpdateKmsConfigRequest. */
                class UpdateKmsConfigRequest implements IUpdateKmsConfigRequest {

                    /**
                     * Constructs a new UpdateKmsConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IUpdateKmsConfigRequest);

                    /** UpdateKmsConfigRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateKmsConfigRequest kmsConfig. */
                    public kmsConfig?: (google.cloud.netapp.v1.IKmsConfig|null);

                    /**
                     * Creates a new UpdateKmsConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateKmsConfigRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IUpdateKmsConfigRequest): google.cloud.netapp.v1.UpdateKmsConfigRequest;

                    /**
                     * Encodes the specified UpdateKmsConfigRequest message. Does not implicitly {@link google.cloud.netapp.v1.UpdateKmsConfigRequest.verify|verify} messages.
                     * @param message UpdateKmsConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IUpdateKmsConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateKmsConfigRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.UpdateKmsConfigRequest.verify|verify} messages.
                     * @param message UpdateKmsConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IUpdateKmsConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateKmsConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateKmsConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.UpdateKmsConfigRequest;

                    /**
                     * Decodes an UpdateKmsConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateKmsConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.UpdateKmsConfigRequest;

                    /**
                     * Verifies an UpdateKmsConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateKmsConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateKmsConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.UpdateKmsConfigRequest;

                    /**
                     * Creates a plain object from an UpdateKmsConfigRequest message. Also converts values to other types if specified.
                     * @param message UpdateKmsConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.UpdateKmsConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateKmsConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateKmsConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteKmsConfigRequest. */
                interface IDeleteKmsConfigRequest {

                    /** DeleteKmsConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteKmsConfigRequest. */
                class DeleteKmsConfigRequest implements IDeleteKmsConfigRequest {

                    /**
                     * Constructs a new DeleteKmsConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IDeleteKmsConfigRequest);

                    /** DeleteKmsConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteKmsConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteKmsConfigRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IDeleteKmsConfigRequest): google.cloud.netapp.v1.DeleteKmsConfigRequest;

                    /**
                     * Encodes the specified DeleteKmsConfigRequest message. Does not implicitly {@link google.cloud.netapp.v1.DeleteKmsConfigRequest.verify|verify} messages.
                     * @param message DeleteKmsConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IDeleteKmsConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteKmsConfigRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.DeleteKmsConfigRequest.verify|verify} messages.
                     * @param message DeleteKmsConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IDeleteKmsConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteKmsConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteKmsConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.DeleteKmsConfigRequest;

                    /**
                     * Decodes a DeleteKmsConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteKmsConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.DeleteKmsConfigRequest;

                    /**
                     * Verifies a DeleteKmsConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteKmsConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteKmsConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.DeleteKmsConfigRequest;

                    /**
                     * Creates a plain object from a DeleteKmsConfigRequest message. Also converts values to other types if specified.
                     * @param message DeleteKmsConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.DeleteKmsConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteKmsConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteKmsConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EncryptVolumesRequest. */
                interface IEncryptVolumesRequest {

                    /** EncryptVolumesRequest name */
                    name?: (string|null);
                }

                /** Represents an EncryptVolumesRequest. */
                class EncryptVolumesRequest implements IEncryptVolumesRequest {

                    /**
                     * Constructs a new EncryptVolumesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IEncryptVolumesRequest);

                    /** EncryptVolumesRequest name. */
                    public name: string;

                    /**
                     * Creates a new EncryptVolumesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EncryptVolumesRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IEncryptVolumesRequest): google.cloud.netapp.v1.EncryptVolumesRequest;

                    /**
                     * Encodes the specified EncryptVolumesRequest message. Does not implicitly {@link google.cloud.netapp.v1.EncryptVolumesRequest.verify|verify} messages.
                     * @param message EncryptVolumesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IEncryptVolumesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EncryptVolumesRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.EncryptVolumesRequest.verify|verify} messages.
                     * @param message EncryptVolumesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IEncryptVolumesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EncryptVolumesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EncryptVolumesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.EncryptVolumesRequest;

                    /**
                     * Decodes an EncryptVolumesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EncryptVolumesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.EncryptVolumesRequest;

                    /**
                     * Verifies an EncryptVolumesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EncryptVolumesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EncryptVolumesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.EncryptVolumesRequest;

                    /**
                     * Creates a plain object from an EncryptVolumesRequest message. Also converts values to other types if specified.
                     * @param message EncryptVolumesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.EncryptVolumesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EncryptVolumesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EncryptVolumesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a VerifyKmsConfigRequest. */
                interface IVerifyKmsConfigRequest {

                    /** VerifyKmsConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a VerifyKmsConfigRequest. */
                class VerifyKmsConfigRequest implements IVerifyKmsConfigRequest {

                    /**
                     * Constructs a new VerifyKmsConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IVerifyKmsConfigRequest);

                    /** VerifyKmsConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new VerifyKmsConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VerifyKmsConfigRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IVerifyKmsConfigRequest): google.cloud.netapp.v1.VerifyKmsConfigRequest;

                    /**
                     * Encodes the specified VerifyKmsConfigRequest message. Does not implicitly {@link google.cloud.netapp.v1.VerifyKmsConfigRequest.verify|verify} messages.
                     * @param message VerifyKmsConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IVerifyKmsConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VerifyKmsConfigRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.VerifyKmsConfigRequest.verify|verify} messages.
                     * @param message VerifyKmsConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IVerifyKmsConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VerifyKmsConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VerifyKmsConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.VerifyKmsConfigRequest;

                    /**
                     * Decodes a VerifyKmsConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VerifyKmsConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.VerifyKmsConfigRequest;

                    /**
                     * Verifies a VerifyKmsConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VerifyKmsConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VerifyKmsConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.VerifyKmsConfigRequest;

                    /**
                     * Creates a plain object from a VerifyKmsConfigRequest message. Also converts values to other types if specified.
                     * @param message VerifyKmsConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.VerifyKmsConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VerifyKmsConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VerifyKmsConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a VerifyKmsConfigResponse. */
                interface IVerifyKmsConfigResponse {

                    /** VerifyKmsConfigResponse healthy */
                    healthy?: (boolean|null);

                    /** VerifyKmsConfigResponse healthError */
                    healthError?: (string|null);

                    /** VerifyKmsConfigResponse instructions */
                    instructions?: (string|null);
                }

                /** Represents a VerifyKmsConfigResponse. */
                class VerifyKmsConfigResponse implements IVerifyKmsConfigResponse {

                    /**
                     * Constructs a new VerifyKmsConfigResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IVerifyKmsConfigResponse);

                    /** VerifyKmsConfigResponse healthy. */
                    public healthy: boolean;

                    /** VerifyKmsConfigResponse healthError. */
                    public healthError: string;

                    /** VerifyKmsConfigResponse instructions. */
                    public instructions: string;

                    /**
                     * Creates a new VerifyKmsConfigResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VerifyKmsConfigResponse instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IVerifyKmsConfigResponse): google.cloud.netapp.v1.VerifyKmsConfigResponse;

                    /**
                     * Encodes the specified VerifyKmsConfigResponse message. Does not implicitly {@link google.cloud.netapp.v1.VerifyKmsConfigResponse.verify|verify} messages.
                     * @param message VerifyKmsConfigResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IVerifyKmsConfigResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VerifyKmsConfigResponse message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.VerifyKmsConfigResponse.verify|verify} messages.
                     * @param message VerifyKmsConfigResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IVerifyKmsConfigResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VerifyKmsConfigResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VerifyKmsConfigResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.VerifyKmsConfigResponse;

                    /**
                     * Decodes a VerifyKmsConfigResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VerifyKmsConfigResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.VerifyKmsConfigResponse;

                    /**
                     * Verifies a VerifyKmsConfigResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VerifyKmsConfigResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VerifyKmsConfigResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.VerifyKmsConfigResponse;

                    /**
                     * Creates a plain object from a VerifyKmsConfigResponse message. Also converts values to other types if specified.
                     * @param message VerifyKmsConfigResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.VerifyKmsConfigResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VerifyKmsConfigResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VerifyKmsConfigResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a KmsConfig. */
                interface IKmsConfig {

                    /** KmsConfig name */
                    name?: (string|null);

                    /** KmsConfig cryptoKeyName */
                    cryptoKeyName?: (string|null);

                    /** KmsConfig state */
                    state?: (google.cloud.netapp.v1.KmsConfig.State|keyof typeof google.cloud.netapp.v1.KmsConfig.State|null);

                    /** KmsConfig stateDetails */
                    stateDetails?: (string|null);

                    /** KmsConfig createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** KmsConfig description */
                    description?: (string|null);

                    /** KmsConfig labels */
                    labels?: ({ [k: string]: string }|null);

                    /** KmsConfig instructions */
                    instructions?: (string|null);

                    /** KmsConfig serviceAccount */
                    serviceAccount?: (string|null);
                }

                /** Represents a KmsConfig. */
                class KmsConfig implements IKmsConfig {

                    /**
                     * Constructs a new KmsConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IKmsConfig);

                    /** KmsConfig name. */
                    public name: string;

                    /** KmsConfig cryptoKeyName. */
                    public cryptoKeyName: string;

                    /** KmsConfig state. */
                    public state: (google.cloud.netapp.v1.KmsConfig.State|keyof typeof google.cloud.netapp.v1.KmsConfig.State);

                    /** KmsConfig stateDetails. */
                    public stateDetails: string;

                    /** KmsConfig createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** KmsConfig description. */
                    public description: string;

                    /** KmsConfig labels. */
                    public labels: { [k: string]: string };

                    /** KmsConfig instructions. */
                    public instructions: string;

                    /** KmsConfig serviceAccount. */
                    public serviceAccount: string;

                    /**
                     * Creates a new KmsConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns KmsConfig instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IKmsConfig): google.cloud.netapp.v1.KmsConfig;

                    /**
                     * Encodes the specified KmsConfig message. Does not implicitly {@link google.cloud.netapp.v1.KmsConfig.verify|verify} messages.
                     * @param message KmsConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IKmsConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified KmsConfig message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.KmsConfig.verify|verify} messages.
                     * @param message KmsConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IKmsConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a KmsConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns KmsConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.KmsConfig;

                    /**
                     * Decodes a KmsConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns KmsConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.KmsConfig;

                    /**
                     * Verifies a KmsConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a KmsConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns KmsConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.KmsConfig;

                    /**
                     * Creates a plain object from a KmsConfig message. Also converts values to other types if specified.
                     * @param message KmsConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.KmsConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this KmsConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for KmsConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace KmsConfig {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        READY = 1,
                        CREATING = 2,
                        DELETING = 3,
                        UPDATING = 4,
                        IN_USE = 5,
                        ERROR = 6,
                        KEY_CHECK_PENDING = 7,
                        KEY_NOT_REACHABLE = 8,
                        DISABLING = 9,
                        DISABLED = 10,
                        MIGRATING = 11
                    }
                }

                /** Properties of a TransferStats. */
                interface ITransferStats {

                    /** TransferStats transferBytes */
                    transferBytes?: (number|Long|string|null);

                    /** TransferStats totalTransferDuration */
                    totalTransferDuration?: (google.protobuf.IDuration|null);

                    /** TransferStats lastTransferBytes */
                    lastTransferBytes?: (number|Long|string|null);

                    /** TransferStats lastTransferDuration */
                    lastTransferDuration?: (google.protobuf.IDuration|null);

                    /** TransferStats lagDuration */
                    lagDuration?: (google.protobuf.IDuration|null);

                    /** TransferStats updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** TransferStats lastTransferEndTime */
                    lastTransferEndTime?: (google.protobuf.ITimestamp|null);

                    /** TransferStats lastTransferError */
                    lastTransferError?: (string|null);
                }

                /** Represents a TransferStats. */
                class TransferStats implements ITransferStats {

                    /**
                     * Constructs a new TransferStats.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.ITransferStats);

                    /** TransferStats transferBytes. */
                    public transferBytes?: (number|Long|string|null);

                    /** TransferStats totalTransferDuration. */
                    public totalTransferDuration?: (google.protobuf.IDuration|null);

                    /** TransferStats lastTransferBytes. */
                    public lastTransferBytes?: (number|Long|string|null);

                    /** TransferStats lastTransferDuration. */
                    public lastTransferDuration?: (google.protobuf.IDuration|null);

                    /** TransferStats lagDuration. */
                    public lagDuration?: (google.protobuf.IDuration|null);

                    /** TransferStats updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** TransferStats lastTransferEndTime. */
                    public lastTransferEndTime?: (google.protobuf.ITimestamp|null);

                    /** TransferStats lastTransferError. */
                    public lastTransferError?: (string|null);

                    /** TransferStats _transferBytes. */
                    public _transferBytes?: "transferBytes";

                    /** TransferStats _totalTransferDuration. */
                    public _totalTransferDuration?: "totalTransferDuration";

                    /** TransferStats _lastTransferBytes. */
                    public _lastTransferBytes?: "lastTransferBytes";

                    /** TransferStats _lastTransferDuration. */
                    public _lastTransferDuration?: "lastTransferDuration";

                    /** TransferStats _lagDuration. */
                    public _lagDuration?: "lagDuration";

                    /** TransferStats _updateTime. */
                    public _updateTime?: "updateTime";

                    /** TransferStats _lastTransferEndTime. */
                    public _lastTransferEndTime?: "lastTransferEndTime";

                    /** TransferStats _lastTransferError. */
                    public _lastTransferError?: "lastTransferError";

                    /**
                     * Creates a new TransferStats instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TransferStats instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.ITransferStats): google.cloud.netapp.v1.TransferStats;

                    /**
                     * Encodes the specified TransferStats message. Does not implicitly {@link google.cloud.netapp.v1.TransferStats.verify|verify} messages.
                     * @param message TransferStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.ITransferStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TransferStats message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.TransferStats.verify|verify} messages.
                     * @param message TransferStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.ITransferStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TransferStats message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TransferStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.TransferStats;

                    /**
                     * Decodes a TransferStats message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TransferStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.TransferStats;

                    /**
                     * Verifies a TransferStats message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TransferStats message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TransferStats
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.TransferStats;

                    /**
                     * Creates a plain object from a TransferStats message. Also converts values to other types if specified.
                     * @param message TransferStats
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.TransferStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TransferStats to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TransferStats
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Replication. */
                interface IReplication {

                    /** Replication name */
                    name?: (string|null);

                    /** Replication state */
                    state?: (google.cloud.netapp.v1.Replication.State|keyof typeof google.cloud.netapp.v1.Replication.State|null);

                    /** Replication stateDetails */
                    stateDetails?: (string|null);

                    /** Replication role */
                    role?: (google.cloud.netapp.v1.Replication.ReplicationRole|keyof typeof google.cloud.netapp.v1.Replication.ReplicationRole|null);

                    /** Replication replicationSchedule */
                    replicationSchedule?: (google.cloud.netapp.v1.Replication.ReplicationSchedule|keyof typeof google.cloud.netapp.v1.Replication.ReplicationSchedule|null);

                    /** Replication mirrorState */
                    mirrorState?: (google.cloud.netapp.v1.Replication.MirrorState|keyof typeof google.cloud.netapp.v1.Replication.MirrorState|null);

                    /** Replication healthy */
                    healthy?: (boolean|null);

                    /** Replication createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Replication destinationVolume */
                    destinationVolume?: (string|null);

                    /** Replication transferStats */
                    transferStats?: (google.cloud.netapp.v1.ITransferStats|null);

                    /** Replication labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Replication description */
                    description?: (string|null);

                    /** Replication destinationVolumeParameters */
                    destinationVolumeParameters?: (google.cloud.netapp.v1.IDestinationVolumeParameters|null);

                    /** Replication sourceVolume */
                    sourceVolume?: (string|null);
                }

                /** Represents a Replication. */
                class Replication implements IReplication {

                    /**
                     * Constructs a new Replication.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IReplication);

                    /** Replication name. */
                    public name: string;

                    /** Replication state. */
                    public state: (google.cloud.netapp.v1.Replication.State|keyof typeof google.cloud.netapp.v1.Replication.State);

                    /** Replication stateDetails. */
                    public stateDetails: string;

                    /** Replication role. */
                    public role: (google.cloud.netapp.v1.Replication.ReplicationRole|keyof typeof google.cloud.netapp.v1.Replication.ReplicationRole);

                    /** Replication replicationSchedule. */
                    public replicationSchedule: (google.cloud.netapp.v1.Replication.ReplicationSchedule|keyof typeof google.cloud.netapp.v1.Replication.ReplicationSchedule);

                    /** Replication mirrorState. */
                    public mirrorState: (google.cloud.netapp.v1.Replication.MirrorState|keyof typeof google.cloud.netapp.v1.Replication.MirrorState);

                    /** Replication healthy. */
                    public healthy?: (boolean|null);

                    /** Replication createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Replication destinationVolume. */
                    public destinationVolume: string;

                    /** Replication transferStats. */
                    public transferStats?: (google.cloud.netapp.v1.ITransferStats|null);

                    /** Replication labels. */
                    public labels: { [k: string]: string };

                    /** Replication description. */
                    public description?: (string|null);

                    /** Replication destinationVolumeParameters. */
                    public destinationVolumeParameters?: (google.cloud.netapp.v1.IDestinationVolumeParameters|null);

                    /** Replication sourceVolume. */
                    public sourceVolume: string;

                    /** Replication _healthy. */
                    public _healthy?: "healthy";

                    /** Replication _description. */
                    public _description?: "description";

                    /**
                     * Creates a new Replication instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Replication instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IReplication): google.cloud.netapp.v1.Replication;

                    /**
                     * Encodes the specified Replication message. Does not implicitly {@link google.cloud.netapp.v1.Replication.verify|verify} messages.
                     * @param message Replication message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IReplication, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Replication message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.Replication.verify|verify} messages.
                     * @param message Replication message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IReplication, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Replication message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Replication
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.Replication;

                    /**
                     * Decodes a Replication message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Replication
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.Replication;

                    /**
                     * Verifies a Replication message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Replication message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Replication
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.Replication;

                    /**
                     * Creates a plain object from a Replication message. Also converts values to other types if specified.
                     * @param message Replication
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.Replication, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Replication to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Replication
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Replication {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        READY = 2,
                        UPDATING = 3,
                        DELETING = 5,
                        ERROR = 6
                    }

                    /** ReplicationRole enum. */
                    enum ReplicationRole {
                        REPLICATION_ROLE_UNSPECIFIED = 0,
                        SOURCE = 1,
                        DESTINATION = 2
                    }

                    /** ReplicationSchedule enum. */
                    enum ReplicationSchedule {
                        REPLICATION_SCHEDULE_UNSPECIFIED = 0,
                        EVERY_10_MINUTES = 1,
                        HOURLY = 2,
                        DAILY = 3
                    }

                    /** MirrorState enum. */
                    enum MirrorState {
                        MIRROR_STATE_UNSPECIFIED = 0,
                        PREPARING = 1,
                        MIRRORED = 2,
                        STOPPED = 3,
                        TRANSFERRING = 4
                    }
                }

                /** Properties of a ListReplicationsRequest. */
                interface IListReplicationsRequest {

                    /** ListReplicationsRequest parent */
                    parent?: (string|null);

                    /** ListReplicationsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListReplicationsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListReplicationsRequest orderBy */
                    orderBy?: (string|null);

                    /** ListReplicationsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListReplicationsRequest. */
                class ListReplicationsRequest implements IListReplicationsRequest {

                    /**
                     * Constructs a new ListReplicationsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IListReplicationsRequest);

                    /** ListReplicationsRequest parent. */
                    public parent: string;

                    /** ListReplicationsRequest pageSize. */
                    public pageSize: number;

                    /** ListReplicationsRequest pageToken. */
                    public pageToken: string;

                    /** ListReplicationsRequest orderBy. */
                    public orderBy: string;

                    /** ListReplicationsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListReplicationsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListReplicationsRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IListReplicationsRequest): google.cloud.netapp.v1.ListReplicationsRequest;

                    /**
                     * Encodes the specified ListReplicationsRequest message. Does not implicitly {@link google.cloud.netapp.v1.ListReplicationsRequest.verify|verify} messages.
                     * @param message ListReplicationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IListReplicationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListReplicationsRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.ListReplicationsRequest.verify|verify} messages.
                     * @param message ListReplicationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IListReplicationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListReplicationsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListReplicationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.ListReplicationsRequest;

                    /**
                     * Decodes a ListReplicationsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListReplicationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.ListReplicationsRequest;

                    /**
                     * Verifies a ListReplicationsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListReplicationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListReplicationsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.ListReplicationsRequest;

                    /**
                     * Creates a plain object from a ListReplicationsRequest message. Also converts values to other types if specified.
                     * @param message ListReplicationsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.ListReplicationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListReplicationsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListReplicationsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListReplicationsResponse. */
                interface IListReplicationsResponse {

                    /** ListReplicationsResponse replications */
                    replications?: (google.cloud.netapp.v1.IReplication[]|null);

                    /** ListReplicationsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListReplicationsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListReplicationsResponse. */
                class ListReplicationsResponse implements IListReplicationsResponse {

                    /**
                     * Constructs a new ListReplicationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IListReplicationsResponse);

                    /** ListReplicationsResponse replications. */
                    public replications: google.cloud.netapp.v1.IReplication[];

                    /** ListReplicationsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListReplicationsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListReplicationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListReplicationsResponse instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IListReplicationsResponse): google.cloud.netapp.v1.ListReplicationsResponse;

                    /**
                     * Encodes the specified ListReplicationsResponse message. Does not implicitly {@link google.cloud.netapp.v1.ListReplicationsResponse.verify|verify} messages.
                     * @param message ListReplicationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IListReplicationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListReplicationsResponse message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.ListReplicationsResponse.verify|verify} messages.
                     * @param message ListReplicationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IListReplicationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListReplicationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListReplicationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.ListReplicationsResponse;

                    /**
                     * Decodes a ListReplicationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListReplicationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.ListReplicationsResponse;

                    /**
                     * Verifies a ListReplicationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListReplicationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListReplicationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.ListReplicationsResponse;

                    /**
                     * Creates a plain object from a ListReplicationsResponse message. Also converts values to other types if specified.
                     * @param message ListReplicationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.ListReplicationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListReplicationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListReplicationsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetReplicationRequest. */
                interface IGetReplicationRequest {

                    /** GetReplicationRequest name */
                    name?: (string|null);
                }

                /** Represents a GetReplicationRequest. */
                class GetReplicationRequest implements IGetReplicationRequest {

                    /**
                     * Constructs a new GetReplicationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IGetReplicationRequest);

                    /** GetReplicationRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetReplicationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetReplicationRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IGetReplicationRequest): google.cloud.netapp.v1.GetReplicationRequest;

                    /**
                     * Encodes the specified GetReplicationRequest message. Does not implicitly {@link google.cloud.netapp.v1.GetReplicationRequest.verify|verify} messages.
                     * @param message GetReplicationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IGetReplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetReplicationRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.GetReplicationRequest.verify|verify} messages.
                     * @param message GetReplicationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IGetReplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetReplicationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetReplicationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.GetReplicationRequest;

                    /**
                     * Decodes a GetReplicationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetReplicationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.GetReplicationRequest;

                    /**
                     * Verifies a GetReplicationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetReplicationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetReplicationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.GetReplicationRequest;

                    /**
                     * Creates a plain object from a GetReplicationRequest message. Also converts values to other types if specified.
                     * @param message GetReplicationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.GetReplicationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetReplicationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetReplicationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DestinationVolumeParameters. */
                interface IDestinationVolumeParameters {

                    /** DestinationVolumeParameters storagePool */
                    storagePool?: (string|null);

                    /** DestinationVolumeParameters volumeId */
                    volumeId?: (string|null);

                    /** DestinationVolumeParameters shareName */
                    shareName?: (string|null);

                    /** DestinationVolumeParameters description */
                    description?: (string|null);
                }

                /** Represents a DestinationVolumeParameters. */
                class DestinationVolumeParameters implements IDestinationVolumeParameters {

                    /**
                     * Constructs a new DestinationVolumeParameters.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IDestinationVolumeParameters);

                    /** DestinationVolumeParameters storagePool. */
                    public storagePool: string;

                    /** DestinationVolumeParameters volumeId. */
                    public volumeId: string;

                    /** DestinationVolumeParameters shareName. */
                    public shareName: string;

                    /** DestinationVolumeParameters description. */
                    public description?: (string|null);

                    /** DestinationVolumeParameters _description. */
                    public _description?: "description";

                    /**
                     * Creates a new DestinationVolumeParameters instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DestinationVolumeParameters instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IDestinationVolumeParameters): google.cloud.netapp.v1.DestinationVolumeParameters;

                    /**
                     * Encodes the specified DestinationVolumeParameters message. Does not implicitly {@link google.cloud.netapp.v1.DestinationVolumeParameters.verify|verify} messages.
                     * @param message DestinationVolumeParameters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IDestinationVolumeParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DestinationVolumeParameters message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.DestinationVolumeParameters.verify|verify} messages.
                     * @param message DestinationVolumeParameters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IDestinationVolumeParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DestinationVolumeParameters message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DestinationVolumeParameters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.DestinationVolumeParameters;

                    /**
                     * Decodes a DestinationVolumeParameters message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DestinationVolumeParameters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.DestinationVolumeParameters;

                    /**
                     * Verifies a DestinationVolumeParameters message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DestinationVolumeParameters message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DestinationVolumeParameters
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.DestinationVolumeParameters;

                    /**
                     * Creates a plain object from a DestinationVolumeParameters message. Also converts values to other types if specified.
                     * @param message DestinationVolumeParameters
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.DestinationVolumeParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DestinationVolumeParameters to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DestinationVolumeParameters
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateReplicationRequest. */
                interface ICreateReplicationRequest {

                    /** CreateReplicationRequest parent */
                    parent?: (string|null);

                    /** CreateReplicationRequest replication */
                    replication?: (google.cloud.netapp.v1.IReplication|null);

                    /** CreateReplicationRequest replicationId */
                    replicationId?: (string|null);
                }

                /** Represents a CreateReplicationRequest. */
                class CreateReplicationRequest implements ICreateReplicationRequest {

                    /**
                     * Constructs a new CreateReplicationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.ICreateReplicationRequest);

                    /** CreateReplicationRequest parent. */
                    public parent: string;

                    /** CreateReplicationRequest replication. */
                    public replication?: (google.cloud.netapp.v1.IReplication|null);

                    /** CreateReplicationRequest replicationId. */
                    public replicationId: string;

                    /**
                     * Creates a new CreateReplicationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateReplicationRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.ICreateReplicationRequest): google.cloud.netapp.v1.CreateReplicationRequest;

                    /**
                     * Encodes the specified CreateReplicationRequest message. Does not implicitly {@link google.cloud.netapp.v1.CreateReplicationRequest.verify|verify} messages.
                     * @param message CreateReplicationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.ICreateReplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateReplicationRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.CreateReplicationRequest.verify|verify} messages.
                     * @param message CreateReplicationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.ICreateReplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateReplicationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateReplicationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.CreateReplicationRequest;

                    /**
                     * Decodes a CreateReplicationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateReplicationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.CreateReplicationRequest;

                    /**
                     * Verifies a CreateReplicationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateReplicationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateReplicationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.CreateReplicationRequest;

                    /**
                     * Creates a plain object from a CreateReplicationRequest message. Also converts values to other types if specified.
                     * @param message CreateReplicationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.CreateReplicationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateReplicationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateReplicationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteReplicationRequest. */
                interface IDeleteReplicationRequest {

                    /** DeleteReplicationRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteReplicationRequest. */
                class DeleteReplicationRequest implements IDeleteReplicationRequest {

                    /**
                     * Constructs a new DeleteReplicationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IDeleteReplicationRequest);

                    /** DeleteReplicationRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteReplicationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteReplicationRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IDeleteReplicationRequest): google.cloud.netapp.v1.DeleteReplicationRequest;

                    /**
                     * Encodes the specified DeleteReplicationRequest message. Does not implicitly {@link google.cloud.netapp.v1.DeleteReplicationRequest.verify|verify} messages.
                     * @param message DeleteReplicationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IDeleteReplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteReplicationRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.DeleteReplicationRequest.verify|verify} messages.
                     * @param message DeleteReplicationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IDeleteReplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteReplicationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteReplicationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.DeleteReplicationRequest;

                    /**
                     * Decodes a DeleteReplicationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteReplicationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.DeleteReplicationRequest;

                    /**
                     * Verifies a DeleteReplicationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteReplicationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteReplicationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.DeleteReplicationRequest;

                    /**
                     * Creates a plain object from a DeleteReplicationRequest message. Also converts values to other types if specified.
                     * @param message DeleteReplicationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.DeleteReplicationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteReplicationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteReplicationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateReplicationRequest. */
                interface IUpdateReplicationRequest {

                    /** UpdateReplicationRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateReplicationRequest replication */
                    replication?: (google.cloud.netapp.v1.IReplication|null);
                }

                /** Represents an UpdateReplicationRequest. */
                class UpdateReplicationRequest implements IUpdateReplicationRequest {

                    /**
                     * Constructs a new UpdateReplicationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IUpdateReplicationRequest);

                    /** UpdateReplicationRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateReplicationRequest replication. */
                    public replication?: (google.cloud.netapp.v1.IReplication|null);

                    /**
                     * Creates a new UpdateReplicationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateReplicationRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IUpdateReplicationRequest): google.cloud.netapp.v1.UpdateReplicationRequest;

                    /**
                     * Encodes the specified UpdateReplicationRequest message. Does not implicitly {@link google.cloud.netapp.v1.UpdateReplicationRequest.verify|verify} messages.
                     * @param message UpdateReplicationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IUpdateReplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateReplicationRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.UpdateReplicationRequest.verify|verify} messages.
                     * @param message UpdateReplicationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IUpdateReplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateReplicationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateReplicationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.UpdateReplicationRequest;

                    /**
                     * Decodes an UpdateReplicationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateReplicationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.UpdateReplicationRequest;

                    /**
                     * Verifies an UpdateReplicationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateReplicationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateReplicationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.UpdateReplicationRequest;

                    /**
                     * Creates a plain object from an UpdateReplicationRequest message. Also converts values to other types if specified.
                     * @param message UpdateReplicationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.UpdateReplicationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateReplicationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateReplicationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StopReplicationRequest. */
                interface IStopReplicationRequest {

                    /** StopReplicationRequest name */
                    name?: (string|null);

                    /** StopReplicationRequest force */
                    force?: (boolean|null);
                }

                /** Represents a StopReplicationRequest. */
                class StopReplicationRequest implements IStopReplicationRequest {

                    /**
                     * Constructs a new StopReplicationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IStopReplicationRequest);

                    /** StopReplicationRequest name. */
                    public name: string;

                    /** StopReplicationRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new StopReplicationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StopReplicationRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IStopReplicationRequest): google.cloud.netapp.v1.StopReplicationRequest;

                    /**
                     * Encodes the specified StopReplicationRequest message. Does not implicitly {@link google.cloud.netapp.v1.StopReplicationRequest.verify|verify} messages.
                     * @param message StopReplicationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IStopReplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StopReplicationRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.StopReplicationRequest.verify|verify} messages.
                     * @param message StopReplicationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IStopReplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StopReplicationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StopReplicationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.StopReplicationRequest;

                    /**
                     * Decodes a StopReplicationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StopReplicationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.StopReplicationRequest;

                    /**
                     * Verifies a StopReplicationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StopReplicationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StopReplicationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.StopReplicationRequest;

                    /**
                     * Creates a plain object from a StopReplicationRequest message. Also converts values to other types if specified.
                     * @param message StopReplicationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.StopReplicationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StopReplicationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StopReplicationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResumeReplicationRequest. */
                interface IResumeReplicationRequest {

                    /** ResumeReplicationRequest name */
                    name?: (string|null);
                }

                /** Represents a ResumeReplicationRequest. */
                class ResumeReplicationRequest implements IResumeReplicationRequest {

                    /**
                     * Constructs a new ResumeReplicationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IResumeReplicationRequest);

                    /** ResumeReplicationRequest name. */
                    public name: string;

                    /**
                     * Creates a new ResumeReplicationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResumeReplicationRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IResumeReplicationRequest): google.cloud.netapp.v1.ResumeReplicationRequest;

                    /**
                     * Encodes the specified ResumeReplicationRequest message. Does not implicitly {@link google.cloud.netapp.v1.ResumeReplicationRequest.verify|verify} messages.
                     * @param message ResumeReplicationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IResumeReplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResumeReplicationRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.ResumeReplicationRequest.verify|verify} messages.
                     * @param message ResumeReplicationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IResumeReplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResumeReplicationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResumeReplicationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.ResumeReplicationRequest;

                    /**
                     * Decodes a ResumeReplicationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResumeReplicationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.ResumeReplicationRequest;

                    /**
                     * Verifies a ResumeReplicationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResumeReplicationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResumeReplicationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.ResumeReplicationRequest;

                    /**
                     * Creates a plain object from a ResumeReplicationRequest message. Also converts values to other types if specified.
                     * @param message ResumeReplicationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.ResumeReplicationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResumeReplicationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResumeReplicationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ReverseReplicationDirectionRequest. */
                interface IReverseReplicationDirectionRequest {

                    /** ReverseReplicationDirectionRequest name */
                    name?: (string|null);
                }

                /** Represents a ReverseReplicationDirectionRequest. */
                class ReverseReplicationDirectionRequest implements IReverseReplicationDirectionRequest {

                    /**
                     * Constructs a new ReverseReplicationDirectionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IReverseReplicationDirectionRequest);

                    /** ReverseReplicationDirectionRequest name. */
                    public name: string;

                    /**
                     * Creates a new ReverseReplicationDirectionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReverseReplicationDirectionRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IReverseReplicationDirectionRequest): google.cloud.netapp.v1.ReverseReplicationDirectionRequest;

                    /**
                     * Encodes the specified ReverseReplicationDirectionRequest message. Does not implicitly {@link google.cloud.netapp.v1.ReverseReplicationDirectionRequest.verify|verify} messages.
                     * @param message ReverseReplicationDirectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IReverseReplicationDirectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReverseReplicationDirectionRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.ReverseReplicationDirectionRequest.verify|verify} messages.
                     * @param message ReverseReplicationDirectionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IReverseReplicationDirectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReverseReplicationDirectionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReverseReplicationDirectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.ReverseReplicationDirectionRequest;

                    /**
                     * Decodes a ReverseReplicationDirectionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReverseReplicationDirectionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.ReverseReplicationDirectionRequest;

                    /**
                     * Verifies a ReverseReplicationDirectionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReverseReplicationDirectionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReverseReplicationDirectionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.ReverseReplicationDirectionRequest;

                    /**
                     * Creates a plain object from a ReverseReplicationDirectionRequest message. Also converts values to other types if specified.
                     * @param message ReverseReplicationDirectionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.ReverseReplicationDirectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReverseReplicationDirectionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ReverseReplicationDirectionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListSnapshotsRequest. */
                interface IListSnapshotsRequest {

                    /** ListSnapshotsRequest parent */
                    parent?: (string|null);

                    /** ListSnapshotsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListSnapshotsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListSnapshotsRequest orderBy */
                    orderBy?: (string|null);

                    /** ListSnapshotsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListSnapshotsRequest. */
                class ListSnapshotsRequest implements IListSnapshotsRequest {

                    /**
                     * Constructs a new ListSnapshotsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IListSnapshotsRequest);

                    /** ListSnapshotsRequest parent. */
                    public parent: string;

                    /** ListSnapshotsRequest pageSize. */
                    public pageSize: number;

                    /** ListSnapshotsRequest pageToken. */
                    public pageToken: string;

                    /** ListSnapshotsRequest orderBy. */
                    public orderBy: string;

                    /** ListSnapshotsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListSnapshotsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSnapshotsRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IListSnapshotsRequest): google.cloud.netapp.v1.ListSnapshotsRequest;

                    /**
                     * Encodes the specified ListSnapshotsRequest message. Does not implicitly {@link google.cloud.netapp.v1.ListSnapshotsRequest.verify|verify} messages.
                     * @param message ListSnapshotsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IListSnapshotsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSnapshotsRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.ListSnapshotsRequest.verify|verify} messages.
                     * @param message ListSnapshotsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IListSnapshotsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSnapshotsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSnapshotsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.ListSnapshotsRequest;

                    /**
                     * Decodes a ListSnapshotsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSnapshotsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.ListSnapshotsRequest;

                    /**
                     * Verifies a ListSnapshotsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSnapshotsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSnapshotsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.ListSnapshotsRequest;

                    /**
                     * Creates a plain object from a ListSnapshotsRequest message. Also converts values to other types if specified.
                     * @param message ListSnapshotsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.ListSnapshotsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSnapshotsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSnapshotsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListSnapshotsResponse. */
                interface IListSnapshotsResponse {

                    /** ListSnapshotsResponse snapshots */
                    snapshots?: (google.cloud.netapp.v1.ISnapshot[]|null);

                    /** ListSnapshotsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListSnapshotsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListSnapshotsResponse. */
                class ListSnapshotsResponse implements IListSnapshotsResponse {

                    /**
                     * Constructs a new ListSnapshotsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IListSnapshotsResponse);

                    /** ListSnapshotsResponse snapshots. */
                    public snapshots: google.cloud.netapp.v1.ISnapshot[];

                    /** ListSnapshotsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListSnapshotsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListSnapshotsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSnapshotsResponse instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IListSnapshotsResponse): google.cloud.netapp.v1.ListSnapshotsResponse;

                    /**
                     * Encodes the specified ListSnapshotsResponse message. Does not implicitly {@link google.cloud.netapp.v1.ListSnapshotsResponse.verify|verify} messages.
                     * @param message ListSnapshotsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IListSnapshotsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSnapshotsResponse message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.ListSnapshotsResponse.verify|verify} messages.
                     * @param message ListSnapshotsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IListSnapshotsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSnapshotsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSnapshotsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.ListSnapshotsResponse;

                    /**
                     * Decodes a ListSnapshotsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSnapshotsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.ListSnapshotsResponse;

                    /**
                     * Verifies a ListSnapshotsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSnapshotsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSnapshotsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.ListSnapshotsResponse;

                    /**
                     * Creates a plain object from a ListSnapshotsResponse message. Also converts values to other types if specified.
                     * @param message ListSnapshotsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.ListSnapshotsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSnapshotsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSnapshotsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetSnapshotRequest. */
                interface IGetSnapshotRequest {

                    /** GetSnapshotRequest name */
                    name?: (string|null);
                }

                /** Represents a GetSnapshotRequest. */
                class GetSnapshotRequest implements IGetSnapshotRequest {

                    /**
                     * Constructs a new GetSnapshotRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IGetSnapshotRequest);

                    /** GetSnapshotRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetSnapshotRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSnapshotRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IGetSnapshotRequest): google.cloud.netapp.v1.GetSnapshotRequest;

                    /**
                     * Encodes the specified GetSnapshotRequest message. Does not implicitly {@link google.cloud.netapp.v1.GetSnapshotRequest.verify|verify} messages.
                     * @param message GetSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IGetSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSnapshotRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.GetSnapshotRequest.verify|verify} messages.
                     * @param message GetSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IGetSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSnapshotRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.GetSnapshotRequest;

                    /**
                     * Decodes a GetSnapshotRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.GetSnapshotRequest;

                    /**
                     * Verifies a GetSnapshotRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSnapshotRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSnapshotRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.GetSnapshotRequest;

                    /**
                     * Creates a plain object from a GetSnapshotRequest message. Also converts values to other types if specified.
                     * @param message GetSnapshotRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.GetSnapshotRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSnapshotRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetSnapshotRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateSnapshotRequest. */
                interface ICreateSnapshotRequest {

                    /** CreateSnapshotRequest parent */
                    parent?: (string|null);

                    /** CreateSnapshotRequest snapshot */
                    snapshot?: (google.cloud.netapp.v1.ISnapshot|null);

                    /** CreateSnapshotRequest snapshotId */
                    snapshotId?: (string|null);
                }

                /** Represents a CreateSnapshotRequest. */
                class CreateSnapshotRequest implements ICreateSnapshotRequest {

                    /**
                     * Constructs a new CreateSnapshotRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.ICreateSnapshotRequest);

                    /** CreateSnapshotRequest parent. */
                    public parent: string;

                    /** CreateSnapshotRequest snapshot. */
                    public snapshot?: (google.cloud.netapp.v1.ISnapshot|null);

                    /** CreateSnapshotRequest snapshotId. */
                    public snapshotId: string;

                    /**
                     * Creates a new CreateSnapshotRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateSnapshotRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.ICreateSnapshotRequest): google.cloud.netapp.v1.CreateSnapshotRequest;

                    /**
                     * Encodes the specified CreateSnapshotRequest message. Does not implicitly {@link google.cloud.netapp.v1.CreateSnapshotRequest.verify|verify} messages.
                     * @param message CreateSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.ICreateSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateSnapshotRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.CreateSnapshotRequest.verify|verify} messages.
                     * @param message CreateSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.ICreateSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateSnapshotRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.CreateSnapshotRequest;

                    /**
                     * Decodes a CreateSnapshotRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.CreateSnapshotRequest;

                    /**
                     * Verifies a CreateSnapshotRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateSnapshotRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateSnapshotRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.CreateSnapshotRequest;

                    /**
                     * Creates a plain object from a CreateSnapshotRequest message. Also converts values to other types if specified.
                     * @param message CreateSnapshotRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.CreateSnapshotRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateSnapshotRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateSnapshotRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteSnapshotRequest. */
                interface IDeleteSnapshotRequest {

                    /** DeleteSnapshotRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteSnapshotRequest. */
                class DeleteSnapshotRequest implements IDeleteSnapshotRequest {

                    /**
                     * Constructs a new DeleteSnapshotRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IDeleteSnapshotRequest);

                    /** DeleteSnapshotRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteSnapshotRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteSnapshotRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IDeleteSnapshotRequest): google.cloud.netapp.v1.DeleteSnapshotRequest;

                    /**
                     * Encodes the specified DeleteSnapshotRequest message. Does not implicitly {@link google.cloud.netapp.v1.DeleteSnapshotRequest.verify|verify} messages.
                     * @param message DeleteSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IDeleteSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteSnapshotRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.DeleteSnapshotRequest.verify|verify} messages.
                     * @param message DeleteSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IDeleteSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteSnapshotRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.DeleteSnapshotRequest;

                    /**
                     * Decodes a DeleteSnapshotRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.DeleteSnapshotRequest;

                    /**
                     * Verifies a DeleteSnapshotRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteSnapshotRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteSnapshotRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.DeleteSnapshotRequest;

                    /**
                     * Creates a plain object from a DeleteSnapshotRequest message. Also converts values to other types if specified.
                     * @param message DeleteSnapshotRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.DeleteSnapshotRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteSnapshotRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteSnapshotRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateSnapshotRequest. */
                interface IUpdateSnapshotRequest {

                    /** UpdateSnapshotRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateSnapshotRequest snapshot */
                    snapshot?: (google.cloud.netapp.v1.ISnapshot|null);
                }

                /** Represents an UpdateSnapshotRequest. */
                class UpdateSnapshotRequest implements IUpdateSnapshotRequest {

                    /**
                     * Constructs a new UpdateSnapshotRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IUpdateSnapshotRequest);

                    /** UpdateSnapshotRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateSnapshotRequest snapshot. */
                    public snapshot?: (google.cloud.netapp.v1.ISnapshot|null);

                    /**
                     * Creates a new UpdateSnapshotRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateSnapshotRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IUpdateSnapshotRequest): google.cloud.netapp.v1.UpdateSnapshotRequest;

                    /**
                     * Encodes the specified UpdateSnapshotRequest message. Does not implicitly {@link google.cloud.netapp.v1.UpdateSnapshotRequest.verify|verify} messages.
                     * @param message UpdateSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IUpdateSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateSnapshotRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.UpdateSnapshotRequest.verify|verify} messages.
                     * @param message UpdateSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IUpdateSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSnapshotRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.UpdateSnapshotRequest;

                    /**
                     * Decodes an UpdateSnapshotRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.UpdateSnapshotRequest;

                    /**
                     * Verifies an UpdateSnapshotRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateSnapshotRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateSnapshotRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.UpdateSnapshotRequest;

                    /**
                     * Creates a plain object from an UpdateSnapshotRequest message. Also converts values to other types if specified.
                     * @param message UpdateSnapshotRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.UpdateSnapshotRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateSnapshotRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateSnapshotRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Snapshot. */
                interface ISnapshot {

                    /** Snapshot name */
                    name?: (string|null);

                    /** Snapshot state */
                    state?: (google.cloud.netapp.v1.Snapshot.State|keyof typeof google.cloud.netapp.v1.Snapshot.State|null);

                    /** Snapshot stateDetails */
                    stateDetails?: (string|null);

                    /** Snapshot description */
                    description?: (string|null);

                    /** Snapshot usedBytes */
                    usedBytes?: (number|null);

                    /** Snapshot createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Snapshot labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a Snapshot. */
                class Snapshot implements ISnapshot {

                    /**
                     * Constructs a new Snapshot.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.ISnapshot);

                    /** Snapshot name. */
                    public name: string;

                    /** Snapshot state. */
                    public state: (google.cloud.netapp.v1.Snapshot.State|keyof typeof google.cloud.netapp.v1.Snapshot.State);

                    /** Snapshot stateDetails. */
                    public stateDetails: string;

                    /** Snapshot description. */
                    public description: string;

                    /** Snapshot usedBytes. */
                    public usedBytes: number;

                    /** Snapshot createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Snapshot labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new Snapshot instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Snapshot instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.ISnapshot): google.cloud.netapp.v1.Snapshot;

                    /**
                     * Encodes the specified Snapshot message. Does not implicitly {@link google.cloud.netapp.v1.Snapshot.verify|verify} messages.
                     * @param message Snapshot message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.ISnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Snapshot message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.Snapshot.verify|verify} messages.
                     * @param message Snapshot message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.ISnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Snapshot message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Snapshot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.Snapshot;

                    /**
                     * Decodes a Snapshot message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Snapshot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.Snapshot;

                    /**
                     * Verifies a Snapshot message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Snapshot message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Snapshot
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.Snapshot;

                    /**
                     * Creates a plain object from a Snapshot message. Also converts values to other types if specified.
                     * @param message Snapshot
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.Snapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Snapshot to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Snapshot
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Snapshot {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        READY = 1,
                        CREATING = 2,
                        DELETING = 3,
                        UPDATING = 4,
                        DISABLED = 5,
                        ERROR = 6
                    }
                }

                /** Properties of a GetStoragePoolRequest. */
                interface IGetStoragePoolRequest {

                    /** GetStoragePoolRequest name */
                    name?: (string|null);
                }

                /** Represents a GetStoragePoolRequest. */
                class GetStoragePoolRequest implements IGetStoragePoolRequest {

                    /**
                     * Constructs a new GetStoragePoolRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IGetStoragePoolRequest);

                    /** GetStoragePoolRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetStoragePoolRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetStoragePoolRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IGetStoragePoolRequest): google.cloud.netapp.v1.GetStoragePoolRequest;

                    /**
                     * Encodes the specified GetStoragePoolRequest message. Does not implicitly {@link google.cloud.netapp.v1.GetStoragePoolRequest.verify|verify} messages.
                     * @param message GetStoragePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IGetStoragePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetStoragePoolRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.GetStoragePoolRequest.verify|verify} messages.
                     * @param message GetStoragePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IGetStoragePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetStoragePoolRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetStoragePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.GetStoragePoolRequest;

                    /**
                     * Decodes a GetStoragePoolRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetStoragePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.GetStoragePoolRequest;

                    /**
                     * Verifies a GetStoragePoolRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetStoragePoolRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetStoragePoolRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.GetStoragePoolRequest;

                    /**
                     * Creates a plain object from a GetStoragePoolRequest message. Also converts values to other types if specified.
                     * @param message GetStoragePoolRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.GetStoragePoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetStoragePoolRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetStoragePoolRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListStoragePoolsRequest. */
                interface IListStoragePoolsRequest {

                    /** ListStoragePoolsRequest parent */
                    parent?: (string|null);

                    /** ListStoragePoolsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListStoragePoolsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListStoragePoolsRequest orderBy */
                    orderBy?: (string|null);

                    /** ListStoragePoolsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListStoragePoolsRequest. */
                class ListStoragePoolsRequest implements IListStoragePoolsRequest {

                    /**
                     * Constructs a new ListStoragePoolsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IListStoragePoolsRequest);

                    /** ListStoragePoolsRequest parent. */
                    public parent: string;

                    /** ListStoragePoolsRequest pageSize. */
                    public pageSize: number;

                    /** ListStoragePoolsRequest pageToken. */
                    public pageToken: string;

                    /** ListStoragePoolsRequest orderBy. */
                    public orderBy: string;

                    /** ListStoragePoolsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListStoragePoolsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListStoragePoolsRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IListStoragePoolsRequest): google.cloud.netapp.v1.ListStoragePoolsRequest;

                    /**
                     * Encodes the specified ListStoragePoolsRequest message. Does not implicitly {@link google.cloud.netapp.v1.ListStoragePoolsRequest.verify|verify} messages.
                     * @param message ListStoragePoolsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IListStoragePoolsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListStoragePoolsRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.ListStoragePoolsRequest.verify|verify} messages.
                     * @param message ListStoragePoolsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IListStoragePoolsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListStoragePoolsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListStoragePoolsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.ListStoragePoolsRequest;

                    /**
                     * Decodes a ListStoragePoolsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListStoragePoolsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.ListStoragePoolsRequest;

                    /**
                     * Verifies a ListStoragePoolsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListStoragePoolsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListStoragePoolsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.ListStoragePoolsRequest;

                    /**
                     * Creates a plain object from a ListStoragePoolsRequest message. Also converts values to other types if specified.
                     * @param message ListStoragePoolsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.ListStoragePoolsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListStoragePoolsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListStoragePoolsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListStoragePoolsResponse. */
                interface IListStoragePoolsResponse {

                    /** ListStoragePoolsResponse storagePools */
                    storagePools?: (google.cloud.netapp.v1.IStoragePool[]|null);

                    /** ListStoragePoolsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListStoragePoolsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListStoragePoolsResponse. */
                class ListStoragePoolsResponse implements IListStoragePoolsResponse {

                    /**
                     * Constructs a new ListStoragePoolsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IListStoragePoolsResponse);

                    /** ListStoragePoolsResponse storagePools. */
                    public storagePools: google.cloud.netapp.v1.IStoragePool[];

                    /** ListStoragePoolsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListStoragePoolsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListStoragePoolsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListStoragePoolsResponse instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IListStoragePoolsResponse): google.cloud.netapp.v1.ListStoragePoolsResponse;

                    /**
                     * Encodes the specified ListStoragePoolsResponse message. Does not implicitly {@link google.cloud.netapp.v1.ListStoragePoolsResponse.verify|verify} messages.
                     * @param message ListStoragePoolsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IListStoragePoolsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListStoragePoolsResponse message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.ListStoragePoolsResponse.verify|verify} messages.
                     * @param message ListStoragePoolsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IListStoragePoolsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListStoragePoolsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListStoragePoolsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.ListStoragePoolsResponse;

                    /**
                     * Decodes a ListStoragePoolsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListStoragePoolsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.ListStoragePoolsResponse;

                    /**
                     * Verifies a ListStoragePoolsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListStoragePoolsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListStoragePoolsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.ListStoragePoolsResponse;

                    /**
                     * Creates a plain object from a ListStoragePoolsResponse message. Also converts values to other types if specified.
                     * @param message ListStoragePoolsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.ListStoragePoolsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListStoragePoolsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListStoragePoolsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateStoragePoolRequest. */
                interface ICreateStoragePoolRequest {

                    /** CreateStoragePoolRequest parent */
                    parent?: (string|null);

                    /** CreateStoragePoolRequest storagePoolId */
                    storagePoolId?: (string|null);

                    /** CreateStoragePoolRequest storagePool */
                    storagePool?: (google.cloud.netapp.v1.IStoragePool|null);
                }

                /** Represents a CreateStoragePoolRequest. */
                class CreateStoragePoolRequest implements ICreateStoragePoolRequest {

                    /**
                     * Constructs a new CreateStoragePoolRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.ICreateStoragePoolRequest);

                    /** CreateStoragePoolRequest parent. */
                    public parent: string;

                    /** CreateStoragePoolRequest storagePoolId. */
                    public storagePoolId: string;

                    /** CreateStoragePoolRequest storagePool. */
                    public storagePool?: (google.cloud.netapp.v1.IStoragePool|null);

                    /**
                     * Creates a new CreateStoragePoolRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateStoragePoolRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.ICreateStoragePoolRequest): google.cloud.netapp.v1.CreateStoragePoolRequest;

                    /**
                     * Encodes the specified CreateStoragePoolRequest message. Does not implicitly {@link google.cloud.netapp.v1.CreateStoragePoolRequest.verify|verify} messages.
                     * @param message CreateStoragePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.ICreateStoragePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateStoragePoolRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.CreateStoragePoolRequest.verify|verify} messages.
                     * @param message CreateStoragePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.ICreateStoragePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateStoragePoolRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateStoragePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.CreateStoragePoolRequest;

                    /**
                     * Decodes a CreateStoragePoolRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateStoragePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.CreateStoragePoolRequest;

                    /**
                     * Verifies a CreateStoragePoolRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateStoragePoolRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateStoragePoolRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.CreateStoragePoolRequest;

                    /**
                     * Creates a plain object from a CreateStoragePoolRequest message. Also converts values to other types if specified.
                     * @param message CreateStoragePoolRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.CreateStoragePoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateStoragePoolRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateStoragePoolRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateStoragePoolRequest. */
                interface IUpdateStoragePoolRequest {

                    /** UpdateStoragePoolRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateStoragePoolRequest storagePool */
                    storagePool?: (google.cloud.netapp.v1.IStoragePool|null);
                }

                /** Represents an UpdateStoragePoolRequest. */
                class UpdateStoragePoolRequest implements IUpdateStoragePoolRequest {

                    /**
                     * Constructs a new UpdateStoragePoolRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IUpdateStoragePoolRequest);

                    /** UpdateStoragePoolRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateStoragePoolRequest storagePool. */
                    public storagePool?: (google.cloud.netapp.v1.IStoragePool|null);

                    /**
                     * Creates a new UpdateStoragePoolRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateStoragePoolRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IUpdateStoragePoolRequest): google.cloud.netapp.v1.UpdateStoragePoolRequest;

                    /**
                     * Encodes the specified UpdateStoragePoolRequest message. Does not implicitly {@link google.cloud.netapp.v1.UpdateStoragePoolRequest.verify|verify} messages.
                     * @param message UpdateStoragePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IUpdateStoragePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateStoragePoolRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.UpdateStoragePoolRequest.verify|verify} messages.
                     * @param message UpdateStoragePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IUpdateStoragePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateStoragePoolRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateStoragePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.UpdateStoragePoolRequest;

                    /**
                     * Decodes an UpdateStoragePoolRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateStoragePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.UpdateStoragePoolRequest;

                    /**
                     * Verifies an UpdateStoragePoolRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateStoragePoolRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateStoragePoolRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.UpdateStoragePoolRequest;

                    /**
                     * Creates a plain object from an UpdateStoragePoolRequest message. Also converts values to other types if specified.
                     * @param message UpdateStoragePoolRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.UpdateStoragePoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateStoragePoolRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateStoragePoolRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteStoragePoolRequest. */
                interface IDeleteStoragePoolRequest {

                    /** DeleteStoragePoolRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteStoragePoolRequest. */
                class DeleteStoragePoolRequest implements IDeleteStoragePoolRequest {

                    /**
                     * Constructs a new DeleteStoragePoolRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IDeleteStoragePoolRequest);

                    /** DeleteStoragePoolRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteStoragePoolRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteStoragePoolRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IDeleteStoragePoolRequest): google.cloud.netapp.v1.DeleteStoragePoolRequest;

                    /**
                     * Encodes the specified DeleteStoragePoolRequest message. Does not implicitly {@link google.cloud.netapp.v1.DeleteStoragePoolRequest.verify|verify} messages.
                     * @param message DeleteStoragePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IDeleteStoragePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteStoragePoolRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.DeleteStoragePoolRequest.verify|verify} messages.
                     * @param message DeleteStoragePoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IDeleteStoragePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteStoragePoolRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteStoragePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.DeleteStoragePoolRequest;

                    /**
                     * Decodes a DeleteStoragePoolRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteStoragePoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.DeleteStoragePoolRequest;

                    /**
                     * Verifies a DeleteStoragePoolRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteStoragePoolRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteStoragePoolRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.DeleteStoragePoolRequest;

                    /**
                     * Creates a plain object from a DeleteStoragePoolRequest message. Also converts values to other types if specified.
                     * @param message DeleteStoragePoolRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.DeleteStoragePoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteStoragePoolRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteStoragePoolRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StoragePool. */
                interface IStoragePool {

                    /** StoragePool name */
                    name?: (string|null);

                    /** StoragePool serviceLevel */
                    serviceLevel?: (google.cloud.netapp.v1.ServiceLevel|keyof typeof google.cloud.netapp.v1.ServiceLevel|null);

                    /** StoragePool capacityGib */
                    capacityGib?: (number|Long|string|null);

                    /** StoragePool volumeCapacityGib */
                    volumeCapacityGib?: (number|Long|string|null);

                    /** StoragePool volumeCount */
                    volumeCount?: (number|null);

                    /** StoragePool state */
                    state?: (google.cloud.netapp.v1.StoragePool.State|keyof typeof google.cloud.netapp.v1.StoragePool.State|null);

                    /** StoragePool stateDetails */
                    stateDetails?: (string|null);

                    /** StoragePool createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** StoragePool description */
                    description?: (string|null);

                    /** StoragePool labels */
                    labels?: ({ [k: string]: string }|null);

                    /** StoragePool network */
                    network?: (string|null);

                    /** StoragePool activeDirectory */
                    activeDirectory?: (string|null);

                    /** StoragePool kmsConfig */
                    kmsConfig?: (string|null);

                    /** StoragePool ldapEnabled */
                    ldapEnabled?: (boolean|null);

                    /** StoragePool psaRange */
                    psaRange?: (string|null);

                    /** StoragePool encryptionType */
                    encryptionType?: (google.cloud.netapp.v1.EncryptionType|keyof typeof google.cloud.netapp.v1.EncryptionType|null);

                    /** StoragePool globalAccessAllowed */
                    globalAccessAllowed?: (boolean|null);
                }

                /** Represents a StoragePool. */
                class StoragePool implements IStoragePool {

                    /**
                     * Constructs a new StoragePool.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IStoragePool);

                    /** StoragePool name. */
                    public name: string;

                    /** StoragePool serviceLevel. */
                    public serviceLevel: (google.cloud.netapp.v1.ServiceLevel|keyof typeof google.cloud.netapp.v1.ServiceLevel);

                    /** StoragePool capacityGib. */
                    public capacityGib: (number|Long|string);

                    /** StoragePool volumeCapacityGib. */
                    public volumeCapacityGib: (number|Long|string);

                    /** StoragePool volumeCount. */
                    public volumeCount: number;

                    /** StoragePool state. */
                    public state: (google.cloud.netapp.v1.StoragePool.State|keyof typeof google.cloud.netapp.v1.StoragePool.State);

                    /** StoragePool stateDetails. */
                    public stateDetails: string;

                    /** StoragePool createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** StoragePool description. */
                    public description: string;

                    /** StoragePool labels. */
                    public labels: { [k: string]: string };

                    /** StoragePool network. */
                    public network: string;

                    /** StoragePool activeDirectory. */
                    public activeDirectory: string;

                    /** StoragePool kmsConfig. */
                    public kmsConfig: string;

                    /** StoragePool ldapEnabled. */
                    public ldapEnabled: boolean;

                    /** StoragePool psaRange. */
                    public psaRange: string;

                    /** StoragePool encryptionType. */
                    public encryptionType: (google.cloud.netapp.v1.EncryptionType|keyof typeof google.cloud.netapp.v1.EncryptionType);

                    /** StoragePool globalAccessAllowed. */
                    public globalAccessAllowed?: (boolean|null);

                    /** StoragePool _globalAccessAllowed. */
                    public _globalAccessAllowed?: "globalAccessAllowed";

                    /**
                     * Creates a new StoragePool instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StoragePool instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IStoragePool): google.cloud.netapp.v1.StoragePool;

                    /**
                     * Encodes the specified StoragePool message. Does not implicitly {@link google.cloud.netapp.v1.StoragePool.verify|verify} messages.
                     * @param message StoragePool message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IStoragePool, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StoragePool message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.StoragePool.verify|verify} messages.
                     * @param message StoragePool message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IStoragePool, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StoragePool message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StoragePool
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.StoragePool;

                    /**
                     * Decodes a StoragePool message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StoragePool
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.StoragePool;

                    /**
                     * Verifies a StoragePool message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StoragePool message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StoragePool
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.StoragePool;

                    /**
                     * Creates a plain object from a StoragePool message. Also converts values to other types if specified.
                     * @param message StoragePool
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.StoragePool, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StoragePool to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StoragePool
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace StoragePool {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        READY = 1,
                        CREATING = 2,
                        DELETING = 3,
                        UPDATING = 4,
                        RESTORING = 5,
                        DISABLED = 6,
                        ERROR = 7
                    }
                }

                /** ServiceLevel enum. */
                enum ServiceLevel {
                    SERVICE_LEVEL_UNSPECIFIED = 0,
                    PREMIUM = 1,
                    EXTREME = 2,
                    STANDARD = 3,
                    FLEX = 4
                }

                /** EncryptionType enum. */
                enum EncryptionType {
                    ENCRYPTION_TYPE_UNSPECIFIED = 0,
                    SERVICE_MANAGED = 1,
                    CLOUD_KMS = 2
                }

                /** Properties of a LocationMetadata. */
                interface ILocationMetadata {

                    /** LocationMetadata supportedServiceLevels */
                    supportedServiceLevels?: (google.cloud.netapp.v1.ServiceLevel[]|null);
                }

                /** Represents a LocationMetadata. */
                class LocationMetadata implements ILocationMetadata {

                    /**
                     * Constructs a new LocationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.ILocationMetadata);

                    /** LocationMetadata supportedServiceLevels. */
                    public supportedServiceLevels: google.cloud.netapp.v1.ServiceLevel[];

                    /**
                     * Creates a new LocationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LocationMetadata instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.ILocationMetadata): google.cloud.netapp.v1.LocationMetadata;

                    /**
                     * Encodes the specified LocationMetadata message. Does not implicitly {@link google.cloud.netapp.v1.LocationMetadata.verify|verify} messages.
                     * @param message LocationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.ILocationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LocationMetadata message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.LocationMetadata.verify|verify} messages.
                     * @param message LocationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.ILocationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LocationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LocationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.LocationMetadata;

                    /**
                     * Decodes a LocationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LocationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.LocationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.LocationMetadata;

                    /**
                     * Creates a plain object from a LocationMetadata message. Also converts values to other types if specified.
                     * @param message LocationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.LocationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Protocols enum. */
                enum Protocols {
                    PROTOCOLS_UNSPECIFIED = 0,
                    NFSV3 = 1,
                    NFSV4 = 2,
                    SMB = 3
                }

                /** AccessType enum. */
                enum AccessType {
                    ACCESS_TYPE_UNSPECIFIED = 0,
                    READ_ONLY = 1,
                    READ_WRITE = 2,
                    READ_NONE = 3
                }

                /** SMBSettings enum. */
                enum SMBSettings {
                    SMB_SETTINGS_UNSPECIFIED = 0,
                    ENCRYPT_DATA = 1,
                    BROWSABLE = 2,
                    CHANGE_NOTIFY = 3,
                    NON_BROWSABLE = 4,
                    OPLOCKS = 5,
                    SHOW_SNAPSHOT = 6,
                    SHOW_PREVIOUS_VERSIONS = 7,
                    ACCESS_BASED_ENUMERATION = 8,
                    CONTINUOUSLY_AVAILABLE = 9
                }

                /** SecurityStyle enum. */
                enum SecurityStyle {
                    SECURITY_STYLE_UNSPECIFIED = 0,
                    NTFS = 1,
                    UNIX = 2
                }

                /** RestrictedAction enum. */
                enum RestrictedAction {
                    RESTRICTED_ACTION_UNSPECIFIED = 0,
                    DELETE = 1
                }

                /** Properties of a ListVolumesRequest. */
                interface IListVolumesRequest {

                    /** ListVolumesRequest parent */
                    parent?: (string|null);

                    /** ListVolumesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListVolumesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListVolumesRequest filter */
                    filter?: (string|null);

                    /** ListVolumesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListVolumesRequest. */
                class ListVolumesRequest implements IListVolumesRequest {

                    /**
                     * Constructs a new ListVolumesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IListVolumesRequest);

                    /** ListVolumesRequest parent. */
                    public parent: string;

                    /** ListVolumesRequest pageSize. */
                    public pageSize: number;

                    /** ListVolumesRequest pageToken. */
                    public pageToken: string;

                    /** ListVolumesRequest filter. */
                    public filter: string;

                    /** ListVolumesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListVolumesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListVolumesRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IListVolumesRequest): google.cloud.netapp.v1.ListVolumesRequest;

                    /**
                     * Encodes the specified ListVolumesRequest message. Does not implicitly {@link google.cloud.netapp.v1.ListVolumesRequest.verify|verify} messages.
                     * @param message ListVolumesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IListVolumesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListVolumesRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.ListVolumesRequest.verify|verify} messages.
                     * @param message ListVolumesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IListVolumesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListVolumesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListVolumesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.ListVolumesRequest;

                    /**
                     * Decodes a ListVolumesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListVolumesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.ListVolumesRequest;

                    /**
                     * Verifies a ListVolumesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListVolumesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListVolumesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.ListVolumesRequest;

                    /**
                     * Creates a plain object from a ListVolumesRequest message. Also converts values to other types if specified.
                     * @param message ListVolumesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.ListVolumesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListVolumesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListVolumesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListVolumesResponse. */
                interface IListVolumesResponse {

                    /** ListVolumesResponse volumes */
                    volumes?: (google.cloud.netapp.v1.IVolume[]|null);

                    /** ListVolumesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListVolumesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListVolumesResponse. */
                class ListVolumesResponse implements IListVolumesResponse {

                    /**
                     * Constructs a new ListVolumesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IListVolumesResponse);

                    /** ListVolumesResponse volumes. */
                    public volumes: google.cloud.netapp.v1.IVolume[];

                    /** ListVolumesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListVolumesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListVolumesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListVolumesResponse instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IListVolumesResponse): google.cloud.netapp.v1.ListVolumesResponse;

                    /**
                     * Encodes the specified ListVolumesResponse message. Does not implicitly {@link google.cloud.netapp.v1.ListVolumesResponse.verify|verify} messages.
                     * @param message ListVolumesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IListVolumesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListVolumesResponse message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.ListVolumesResponse.verify|verify} messages.
                     * @param message ListVolumesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IListVolumesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListVolumesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListVolumesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.ListVolumesResponse;

                    /**
                     * Decodes a ListVolumesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListVolumesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.ListVolumesResponse;

                    /**
                     * Verifies a ListVolumesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListVolumesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListVolumesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.ListVolumesResponse;

                    /**
                     * Creates a plain object from a ListVolumesResponse message. Also converts values to other types if specified.
                     * @param message ListVolumesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.ListVolumesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListVolumesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListVolumesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetVolumeRequest. */
                interface IGetVolumeRequest {

                    /** GetVolumeRequest name */
                    name?: (string|null);
                }

                /** Represents a GetVolumeRequest. */
                class GetVolumeRequest implements IGetVolumeRequest {

                    /**
                     * Constructs a new GetVolumeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IGetVolumeRequest);

                    /** GetVolumeRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetVolumeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetVolumeRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IGetVolumeRequest): google.cloud.netapp.v1.GetVolumeRequest;

                    /**
                     * Encodes the specified GetVolumeRequest message. Does not implicitly {@link google.cloud.netapp.v1.GetVolumeRequest.verify|verify} messages.
                     * @param message GetVolumeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IGetVolumeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetVolumeRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.GetVolumeRequest.verify|verify} messages.
                     * @param message GetVolumeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IGetVolumeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetVolumeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetVolumeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.GetVolumeRequest;

                    /**
                     * Decodes a GetVolumeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetVolumeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.GetVolumeRequest;

                    /**
                     * Verifies a GetVolumeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetVolumeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetVolumeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.GetVolumeRequest;

                    /**
                     * Creates a plain object from a GetVolumeRequest message. Also converts values to other types if specified.
                     * @param message GetVolumeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.GetVolumeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetVolumeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetVolumeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateVolumeRequest. */
                interface ICreateVolumeRequest {

                    /** CreateVolumeRequest parent */
                    parent?: (string|null);

                    /** CreateVolumeRequest volumeId */
                    volumeId?: (string|null);

                    /** CreateVolumeRequest volume */
                    volume?: (google.cloud.netapp.v1.IVolume|null);
                }

                /** Represents a CreateVolumeRequest. */
                class CreateVolumeRequest implements ICreateVolumeRequest {

                    /**
                     * Constructs a new CreateVolumeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.ICreateVolumeRequest);

                    /** CreateVolumeRequest parent. */
                    public parent: string;

                    /** CreateVolumeRequest volumeId. */
                    public volumeId: string;

                    /** CreateVolumeRequest volume. */
                    public volume?: (google.cloud.netapp.v1.IVolume|null);

                    /**
                     * Creates a new CreateVolumeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateVolumeRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.ICreateVolumeRequest): google.cloud.netapp.v1.CreateVolumeRequest;

                    /**
                     * Encodes the specified CreateVolumeRequest message. Does not implicitly {@link google.cloud.netapp.v1.CreateVolumeRequest.verify|verify} messages.
                     * @param message CreateVolumeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.ICreateVolumeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateVolumeRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.CreateVolumeRequest.verify|verify} messages.
                     * @param message CreateVolumeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.ICreateVolumeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateVolumeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateVolumeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.CreateVolumeRequest;

                    /**
                     * Decodes a CreateVolumeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateVolumeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.CreateVolumeRequest;

                    /**
                     * Verifies a CreateVolumeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateVolumeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateVolumeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.CreateVolumeRequest;

                    /**
                     * Creates a plain object from a CreateVolumeRequest message. Also converts values to other types if specified.
                     * @param message CreateVolumeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.CreateVolumeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateVolumeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateVolumeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateVolumeRequest. */
                interface IUpdateVolumeRequest {

                    /** UpdateVolumeRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateVolumeRequest volume */
                    volume?: (google.cloud.netapp.v1.IVolume|null);
                }

                /** Represents an UpdateVolumeRequest. */
                class UpdateVolumeRequest implements IUpdateVolumeRequest {

                    /**
                     * Constructs a new UpdateVolumeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IUpdateVolumeRequest);

                    /** UpdateVolumeRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateVolumeRequest volume. */
                    public volume?: (google.cloud.netapp.v1.IVolume|null);

                    /**
                     * Creates a new UpdateVolumeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateVolumeRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IUpdateVolumeRequest): google.cloud.netapp.v1.UpdateVolumeRequest;

                    /**
                     * Encodes the specified UpdateVolumeRequest message. Does not implicitly {@link google.cloud.netapp.v1.UpdateVolumeRequest.verify|verify} messages.
                     * @param message UpdateVolumeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IUpdateVolumeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateVolumeRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.UpdateVolumeRequest.verify|verify} messages.
                     * @param message UpdateVolumeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IUpdateVolumeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateVolumeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateVolumeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.UpdateVolumeRequest;

                    /**
                     * Decodes an UpdateVolumeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateVolumeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.UpdateVolumeRequest;

                    /**
                     * Verifies an UpdateVolumeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateVolumeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateVolumeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.UpdateVolumeRequest;

                    /**
                     * Creates a plain object from an UpdateVolumeRequest message. Also converts values to other types if specified.
                     * @param message UpdateVolumeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.UpdateVolumeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateVolumeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateVolumeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteVolumeRequest. */
                interface IDeleteVolumeRequest {

                    /** DeleteVolumeRequest name */
                    name?: (string|null);

                    /** DeleteVolumeRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteVolumeRequest. */
                class DeleteVolumeRequest implements IDeleteVolumeRequest {

                    /**
                     * Constructs a new DeleteVolumeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IDeleteVolumeRequest);

                    /** DeleteVolumeRequest name. */
                    public name: string;

                    /** DeleteVolumeRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteVolumeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteVolumeRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IDeleteVolumeRequest): google.cloud.netapp.v1.DeleteVolumeRequest;

                    /**
                     * Encodes the specified DeleteVolumeRequest message. Does not implicitly {@link google.cloud.netapp.v1.DeleteVolumeRequest.verify|verify} messages.
                     * @param message DeleteVolumeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IDeleteVolumeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteVolumeRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.DeleteVolumeRequest.verify|verify} messages.
                     * @param message DeleteVolumeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IDeleteVolumeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteVolumeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteVolumeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.DeleteVolumeRequest;

                    /**
                     * Decodes a DeleteVolumeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteVolumeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.DeleteVolumeRequest;

                    /**
                     * Verifies a DeleteVolumeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteVolumeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteVolumeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.DeleteVolumeRequest;

                    /**
                     * Creates a plain object from a DeleteVolumeRequest message. Also converts values to other types if specified.
                     * @param message DeleteVolumeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.DeleteVolumeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteVolumeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteVolumeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RevertVolumeRequest. */
                interface IRevertVolumeRequest {

                    /** RevertVolumeRequest name */
                    name?: (string|null);

                    /** RevertVolumeRequest snapshotId */
                    snapshotId?: (string|null);
                }

                /** Represents a RevertVolumeRequest. */
                class RevertVolumeRequest implements IRevertVolumeRequest {

                    /**
                     * Constructs a new RevertVolumeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IRevertVolumeRequest);

                    /** RevertVolumeRequest name. */
                    public name: string;

                    /** RevertVolumeRequest snapshotId. */
                    public snapshotId: string;

                    /**
                     * Creates a new RevertVolumeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RevertVolumeRequest instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IRevertVolumeRequest): google.cloud.netapp.v1.RevertVolumeRequest;

                    /**
                     * Encodes the specified RevertVolumeRequest message. Does not implicitly {@link google.cloud.netapp.v1.RevertVolumeRequest.verify|verify} messages.
                     * @param message RevertVolumeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IRevertVolumeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RevertVolumeRequest message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.RevertVolumeRequest.verify|verify} messages.
                     * @param message RevertVolumeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IRevertVolumeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RevertVolumeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RevertVolumeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.RevertVolumeRequest;

                    /**
                     * Decodes a RevertVolumeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RevertVolumeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.RevertVolumeRequest;

                    /**
                     * Verifies a RevertVolumeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RevertVolumeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RevertVolumeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.RevertVolumeRequest;

                    /**
                     * Creates a plain object from a RevertVolumeRequest message. Also converts values to other types if specified.
                     * @param message RevertVolumeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.RevertVolumeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RevertVolumeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RevertVolumeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Volume. */
                interface IVolume {

                    /** Volume name */
                    name?: (string|null);

                    /** Volume state */
                    state?: (google.cloud.netapp.v1.Volume.State|keyof typeof google.cloud.netapp.v1.Volume.State|null);

                    /** Volume stateDetails */
                    stateDetails?: (string|null);

                    /** Volume createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Volume shareName */
                    shareName?: (string|null);

                    /** Volume psaRange */
                    psaRange?: (string|null);

                    /** Volume storagePool */
                    storagePool?: (string|null);

                    /** Volume network */
                    network?: (string|null);

                    /** Volume serviceLevel */
                    serviceLevel?: (google.cloud.netapp.v1.ServiceLevel|keyof typeof google.cloud.netapp.v1.ServiceLevel|null);

                    /** Volume capacityGib */
                    capacityGib?: (number|Long|string|null);

                    /** Volume exportPolicy */
                    exportPolicy?: (google.cloud.netapp.v1.IExportPolicy|null);

                    /** Volume protocols */
                    protocols?: (google.cloud.netapp.v1.Protocols[]|null);

                    /** Volume smbSettings */
                    smbSettings?: (google.cloud.netapp.v1.SMBSettings[]|null);

                    /** Volume mountOptions */
                    mountOptions?: (google.cloud.netapp.v1.IMountOption[]|null);

                    /** Volume unixPermissions */
                    unixPermissions?: (string|null);

                    /** Volume labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Volume description */
                    description?: (string|null);

                    /** Volume snapshotPolicy */
                    snapshotPolicy?: (google.cloud.netapp.v1.ISnapshotPolicy|null);

                    /** Volume snapReserve */
                    snapReserve?: (number|null);

                    /** Volume snapshotDirectory */
                    snapshotDirectory?: (boolean|null);

                    /** Volume usedGib */
                    usedGib?: (number|Long|string|null);

                    /** Volume securityStyle */
                    securityStyle?: (google.cloud.netapp.v1.SecurityStyle|keyof typeof google.cloud.netapp.v1.SecurityStyle|null);

                    /** Volume kerberosEnabled */
                    kerberosEnabled?: (boolean|null);

                    /** Volume ldapEnabled */
                    ldapEnabled?: (boolean|null);

                    /** Volume activeDirectory */
                    activeDirectory?: (string|null);

                    /** Volume restoreParameters */
                    restoreParameters?: (google.cloud.netapp.v1.IRestoreParameters|null);

                    /** Volume kmsConfig */
                    kmsConfig?: (string|null);

                    /** Volume encryptionType */
                    encryptionType?: (google.cloud.netapp.v1.EncryptionType|keyof typeof google.cloud.netapp.v1.EncryptionType|null);

                    /** Volume hasReplication */
                    hasReplication?: (boolean|null);

                    /** Volume backupConfig */
                    backupConfig?: (google.cloud.netapp.v1.IBackupConfig|null);

                    /** Volume restrictedActions */
                    restrictedActions?: (google.cloud.netapp.v1.RestrictedAction[]|null);

                    /** Volume tieringPolicy */
                    tieringPolicy?: (google.cloud.netapp.v1.ITieringPolicy|null);
                }

                /** Represents a Volume. */
                class Volume implements IVolume {

                    /**
                     * Constructs a new Volume.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IVolume);

                    /** Volume name. */
                    public name: string;

                    /** Volume state. */
                    public state: (google.cloud.netapp.v1.Volume.State|keyof typeof google.cloud.netapp.v1.Volume.State);

                    /** Volume stateDetails. */
                    public stateDetails: string;

                    /** Volume createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Volume shareName. */
                    public shareName: string;

                    /** Volume psaRange. */
                    public psaRange: string;

                    /** Volume storagePool. */
                    public storagePool: string;

                    /** Volume network. */
                    public network: string;

                    /** Volume serviceLevel. */
                    public serviceLevel: (google.cloud.netapp.v1.ServiceLevel|keyof typeof google.cloud.netapp.v1.ServiceLevel);

                    /** Volume capacityGib. */
                    public capacityGib: (number|Long|string);

                    /** Volume exportPolicy. */
                    public exportPolicy?: (google.cloud.netapp.v1.IExportPolicy|null);

                    /** Volume protocols. */
                    public protocols: google.cloud.netapp.v1.Protocols[];

                    /** Volume smbSettings. */
                    public smbSettings: google.cloud.netapp.v1.SMBSettings[];

                    /** Volume mountOptions. */
                    public mountOptions: google.cloud.netapp.v1.IMountOption[];

                    /** Volume unixPermissions. */
                    public unixPermissions: string;

                    /** Volume labels. */
                    public labels: { [k: string]: string };

                    /** Volume description. */
                    public description: string;

                    /** Volume snapshotPolicy. */
                    public snapshotPolicy?: (google.cloud.netapp.v1.ISnapshotPolicy|null);

                    /** Volume snapReserve. */
                    public snapReserve: number;

                    /** Volume snapshotDirectory. */
                    public snapshotDirectory: boolean;

                    /** Volume usedGib. */
                    public usedGib: (number|Long|string);

                    /** Volume securityStyle. */
                    public securityStyle: (google.cloud.netapp.v1.SecurityStyle|keyof typeof google.cloud.netapp.v1.SecurityStyle);

                    /** Volume kerberosEnabled. */
                    public kerberosEnabled: boolean;

                    /** Volume ldapEnabled. */
                    public ldapEnabled: boolean;

                    /** Volume activeDirectory. */
                    public activeDirectory: string;

                    /** Volume restoreParameters. */
                    public restoreParameters?: (google.cloud.netapp.v1.IRestoreParameters|null);

                    /** Volume kmsConfig. */
                    public kmsConfig: string;

                    /** Volume encryptionType. */
                    public encryptionType: (google.cloud.netapp.v1.EncryptionType|keyof typeof google.cloud.netapp.v1.EncryptionType);

                    /** Volume hasReplication. */
                    public hasReplication: boolean;

                    /** Volume backupConfig. */
                    public backupConfig?: (google.cloud.netapp.v1.IBackupConfig|null);

                    /** Volume restrictedActions. */
                    public restrictedActions: google.cloud.netapp.v1.RestrictedAction[];

                    /** Volume tieringPolicy. */
                    public tieringPolicy?: (google.cloud.netapp.v1.ITieringPolicy|null);

                    /** Volume _backupConfig. */
                    public _backupConfig?: "backupConfig";

                    /** Volume _tieringPolicy. */
                    public _tieringPolicy?: "tieringPolicy";

                    /**
                     * Creates a new Volume instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Volume instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IVolume): google.cloud.netapp.v1.Volume;

                    /**
                     * Encodes the specified Volume message. Does not implicitly {@link google.cloud.netapp.v1.Volume.verify|verify} messages.
                     * @param message Volume message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IVolume, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Volume message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.Volume.verify|verify} messages.
                     * @param message Volume message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IVolume, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Volume message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Volume
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.Volume;

                    /**
                     * Decodes a Volume message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Volume
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.Volume;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.Volume;

                    /**
                     * Creates a plain object from a Volume message. Also converts values to other types if specified.
                     * @param message Volume
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.Volume, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                namespace Volume {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        READY = 1,
                        CREATING = 2,
                        DELETING = 3,
                        UPDATING = 4,
                        RESTORING = 5,
                        DISABLED = 6,
                        ERROR = 7
                    }
                }

                /** Properties of an ExportPolicy. */
                interface IExportPolicy {

                    /** ExportPolicy rules */
                    rules?: (google.cloud.netapp.v1.ISimpleExportPolicyRule[]|null);
                }

                /** Represents an ExportPolicy. */
                class ExportPolicy implements IExportPolicy {

                    /**
                     * Constructs a new ExportPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IExportPolicy);

                    /** ExportPolicy rules. */
                    public rules: google.cloud.netapp.v1.ISimpleExportPolicyRule[];

                    /**
                     * Creates a new ExportPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportPolicy instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IExportPolicy): google.cloud.netapp.v1.ExportPolicy;

                    /**
                     * Encodes the specified ExportPolicy message. Does not implicitly {@link google.cloud.netapp.v1.ExportPolicy.verify|verify} messages.
                     * @param message ExportPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IExportPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportPolicy message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.ExportPolicy.verify|verify} messages.
                     * @param message ExportPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IExportPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.ExportPolicy;

                    /**
                     * Decodes an ExportPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.ExportPolicy;

                    /**
                     * Verifies an ExportPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.ExportPolicy;

                    /**
                     * Creates a plain object from an ExportPolicy message. Also converts values to other types if specified.
                     * @param message ExportPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.ExportPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SimpleExportPolicyRule. */
                interface ISimpleExportPolicyRule {

                    /** SimpleExportPolicyRule allowedClients */
                    allowedClients?: (string|null);

                    /** SimpleExportPolicyRule hasRootAccess */
                    hasRootAccess?: (string|null);

                    /** SimpleExportPolicyRule accessType */
                    accessType?: (google.cloud.netapp.v1.AccessType|keyof typeof google.cloud.netapp.v1.AccessType|null);

                    /** SimpleExportPolicyRule nfsv3 */
                    nfsv3?: (boolean|null);

                    /** SimpleExportPolicyRule nfsv4 */
                    nfsv4?: (boolean|null);

                    /** SimpleExportPolicyRule kerberos_5ReadOnly */
                    kerberos_5ReadOnly?: (boolean|null);

                    /** SimpleExportPolicyRule kerberos_5ReadWrite */
                    kerberos_5ReadWrite?: (boolean|null);

                    /** SimpleExportPolicyRule kerberos_5iReadOnly */
                    kerberos_5iReadOnly?: (boolean|null);

                    /** SimpleExportPolicyRule kerberos_5iReadWrite */
                    kerberos_5iReadWrite?: (boolean|null);

                    /** SimpleExportPolicyRule kerberos_5pReadOnly */
                    kerberos_5pReadOnly?: (boolean|null);

                    /** SimpleExportPolicyRule kerberos_5pReadWrite */
                    kerberos_5pReadWrite?: (boolean|null);
                }

                /** Represents a SimpleExportPolicyRule. */
                class SimpleExportPolicyRule implements ISimpleExportPolicyRule {

                    /**
                     * Constructs a new SimpleExportPolicyRule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.ISimpleExportPolicyRule);

                    /** SimpleExportPolicyRule allowedClients. */
                    public allowedClients?: (string|null);

                    /** SimpleExportPolicyRule hasRootAccess. */
                    public hasRootAccess?: (string|null);

                    /** SimpleExportPolicyRule accessType. */
                    public accessType?: (google.cloud.netapp.v1.AccessType|keyof typeof google.cloud.netapp.v1.AccessType|null);

                    /** SimpleExportPolicyRule nfsv3. */
                    public nfsv3?: (boolean|null);

                    /** SimpleExportPolicyRule nfsv4. */
                    public nfsv4?: (boolean|null);

                    /** SimpleExportPolicyRule kerberos_5ReadOnly. */
                    public kerberos_5ReadOnly?: (boolean|null);

                    /** SimpleExportPolicyRule kerberos_5ReadWrite. */
                    public kerberos_5ReadWrite?: (boolean|null);

                    /** SimpleExportPolicyRule kerberos_5iReadOnly. */
                    public kerberos_5iReadOnly?: (boolean|null);

                    /** SimpleExportPolicyRule kerberos_5iReadWrite. */
                    public kerberos_5iReadWrite?: (boolean|null);

                    /** SimpleExportPolicyRule kerberos_5pReadOnly. */
                    public kerberos_5pReadOnly?: (boolean|null);

                    /** SimpleExportPolicyRule kerberos_5pReadWrite. */
                    public kerberos_5pReadWrite?: (boolean|null);

                    /** SimpleExportPolicyRule _allowedClients. */
                    public _allowedClients?: "allowedClients";

                    /** SimpleExportPolicyRule _hasRootAccess. */
                    public _hasRootAccess?: "hasRootAccess";

                    /** SimpleExportPolicyRule _accessType. */
                    public _accessType?: "accessType";

                    /** SimpleExportPolicyRule _nfsv3. */
                    public _nfsv3?: "nfsv3";

                    /** SimpleExportPolicyRule _nfsv4. */
                    public _nfsv4?: "nfsv4";

                    /** SimpleExportPolicyRule _kerberos_5ReadOnly. */
                    public _kerberos_5ReadOnly?: "kerberos_5ReadOnly";

                    /** SimpleExportPolicyRule _kerberos_5ReadWrite. */
                    public _kerberos_5ReadWrite?: "kerberos_5ReadWrite";

                    /** SimpleExportPolicyRule _kerberos_5iReadOnly. */
                    public _kerberos_5iReadOnly?: "kerberos_5iReadOnly";

                    /** SimpleExportPolicyRule _kerberos_5iReadWrite. */
                    public _kerberos_5iReadWrite?: "kerberos_5iReadWrite";

                    /** SimpleExportPolicyRule _kerberos_5pReadOnly. */
                    public _kerberos_5pReadOnly?: "kerberos_5pReadOnly";

                    /** SimpleExportPolicyRule _kerberos_5pReadWrite. */
                    public _kerberos_5pReadWrite?: "kerberos_5pReadWrite";

                    /**
                     * Creates a new SimpleExportPolicyRule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SimpleExportPolicyRule instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.ISimpleExportPolicyRule): google.cloud.netapp.v1.SimpleExportPolicyRule;

                    /**
                     * Encodes the specified SimpleExportPolicyRule message. Does not implicitly {@link google.cloud.netapp.v1.SimpleExportPolicyRule.verify|verify} messages.
                     * @param message SimpleExportPolicyRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.ISimpleExportPolicyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SimpleExportPolicyRule message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.SimpleExportPolicyRule.verify|verify} messages.
                     * @param message SimpleExportPolicyRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.ISimpleExportPolicyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SimpleExportPolicyRule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SimpleExportPolicyRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.SimpleExportPolicyRule;

                    /**
                     * Decodes a SimpleExportPolicyRule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SimpleExportPolicyRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.SimpleExportPolicyRule;

                    /**
                     * Verifies a SimpleExportPolicyRule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SimpleExportPolicyRule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SimpleExportPolicyRule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.SimpleExportPolicyRule;

                    /**
                     * Creates a plain object from a SimpleExportPolicyRule message. Also converts values to other types if specified.
                     * @param message SimpleExportPolicyRule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.SimpleExportPolicyRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SimpleExportPolicyRule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SimpleExportPolicyRule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SnapshotPolicy. */
                interface ISnapshotPolicy {

                    /** SnapshotPolicy enabled */
                    enabled?: (boolean|null);

                    /** SnapshotPolicy hourlySchedule */
                    hourlySchedule?: (google.cloud.netapp.v1.IHourlySchedule|null);

                    /** SnapshotPolicy dailySchedule */
                    dailySchedule?: (google.cloud.netapp.v1.IDailySchedule|null);

                    /** SnapshotPolicy weeklySchedule */
                    weeklySchedule?: (google.cloud.netapp.v1.IWeeklySchedule|null);

                    /** SnapshotPolicy monthlySchedule */
                    monthlySchedule?: (google.cloud.netapp.v1.IMonthlySchedule|null);
                }

                /** Represents a SnapshotPolicy. */
                class SnapshotPolicy implements ISnapshotPolicy {

                    /**
                     * Constructs a new SnapshotPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.ISnapshotPolicy);

                    /** SnapshotPolicy enabled. */
                    public enabled?: (boolean|null);

                    /** SnapshotPolicy hourlySchedule. */
                    public hourlySchedule?: (google.cloud.netapp.v1.IHourlySchedule|null);

                    /** SnapshotPolicy dailySchedule. */
                    public dailySchedule?: (google.cloud.netapp.v1.IDailySchedule|null);

                    /** SnapshotPolicy weeklySchedule. */
                    public weeklySchedule?: (google.cloud.netapp.v1.IWeeklySchedule|null);

                    /** SnapshotPolicy monthlySchedule. */
                    public monthlySchedule?: (google.cloud.netapp.v1.IMonthlySchedule|null);

                    /** SnapshotPolicy _enabled. */
                    public _enabled?: "enabled";

                    /** SnapshotPolicy _hourlySchedule. */
                    public _hourlySchedule?: "hourlySchedule";

                    /** SnapshotPolicy _dailySchedule. */
                    public _dailySchedule?: "dailySchedule";

                    /** SnapshotPolicy _weeklySchedule. */
                    public _weeklySchedule?: "weeklySchedule";

                    /** SnapshotPolicy _monthlySchedule. */
                    public _monthlySchedule?: "monthlySchedule";

                    /**
                     * Creates a new SnapshotPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SnapshotPolicy instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.ISnapshotPolicy): google.cloud.netapp.v1.SnapshotPolicy;

                    /**
                     * Encodes the specified SnapshotPolicy message. Does not implicitly {@link google.cloud.netapp.v1.SnapshotPolicy.verify|verify} messages.
                     * @param message SnapshotPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.ISnapshotPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SnapshotPolicy message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.SnapshotPolicy.verify|verify} messages.
                     * @param message SnapshotPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.ISnapshotPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SnapshotPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SnapshotPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.SnapshotPolicy;

                    /**
                     * Decodes a SnapshotPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SnapshotPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.SnapshotPolicy;

                    /**
                     * Verifies a SnapshotPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SnapshotPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SnapshotPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.SnapshotPolicy;

                    /**
                     * Creates a plain object from a SnapshotPolicy message. Also converts values to other types if specified.
                     * @param message SnapshotPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.SnapshotPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SnapshotPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SnapshotPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an HourlySchedule. */
                interface IHourlySchedule {

                    /** HourlySchedule snapshotsToKeep */
                    snapshotsToKeep?: (number|null);

                    /** HourlySchedule minute */
                    minute?: (number|null);
                }

                /** Represents an HourlySchedule. */
                class HourlySchedule implements IHourlySchedule {

                    /**
                     * Constructs a new HourlySchedule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IHourlySchedule);

                    /** HourlySchedule snapshotsToKeep. */
                    public snapshotsToKeep?: (number|null);

                    /** HourlySchedule minute. */
                    public minute?: (number|null);

                    /** HourlySchedule _snapshotsToKeep. */
                    public _snapshotsToKeep?: "snapshotsToKeep";

                    /** HourlySchedule _minute. */
                    public _minute?: "minute";

                    /**
                     * Creates a new HourlySchedule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HourlySchedule instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IHourlySchedule): google.cloud.netapp.v1.HourlySchedule;

                    /**
                     * Encodes the specified HourlySchedule message. Does not implicitly {@link google.cloud.netapp.v1.HourlySchedule.verify|verify} messages.
                     * @param message HourlySchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IHourlySchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HourlySchedule message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.HourlySchedule.verify|verify} messages.
                     * @param message HourlySchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IHourlySchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an HourlySchedule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HourlySchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.HourlySchedule;

                    /**
                     * Decodes an HourlySchedule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HourlySchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.HourlySchedule;

                    /**
                     * Verifies an HourlySchedule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an HourlySchedule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HourlySchedule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.HourlySchedule;

                    /**
                     * Creates a plain object from an HourlySchedule message. Also converts values to other types if specified.
                     * @param message HourlySchedule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.HourlySchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HourlySchedule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for HourlySchedule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DailySchedule. */
                interface IDailySchedule {

                    /** DailySchedule snapshotsToKeep */
                    snapshotsToKeep?: (number|null);

                    /** DailySchedule minute */
                    minute?: (number|null);

                    /** DailySchedule hour */
                    hour?: (number|null);
                }

                /** Represents a DailySchedule. */
                class DailySchedule implements IDailySchedule {

                    /**
                     * Constructs a new DailySchedule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IDailySchedule);

                    /** DailySchedule snapshotsToKeep. */
                    public snapshotsToKeep?: (number|null);

                    /** DailySchedule minute. */
                    public minute?: (number|null);

                    /** DailySchedule hour. */
                    public hour?: (number|null);

                    /** DailySchedule _snapshotsToKeep. */
                    public _snapshotsToKeep?: "snapshotsToKeep";

                    /** DailySchedule _minute. */
                    public _minute?: "minute";

                    /** DailySchedule _hour. */
                    public _hour?: "hour";

                    /**
                     * Creates a new DailySchedule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DailySchedule instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IDailySchedule): google.cloud.netapp.v1.DailySchedule;

                    /**
                     * Encodes the specified DailySchedule message. Does not implicitly {@link google.cloud.netapp.v1.DailySchedule.verify|verify} messages.
                     * @param message DailySchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IDailySchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DailySchedule message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.DailySchedule.verify|verify} messages.
                     * @param message DailySchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IDailySchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DailySchedule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DailySchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.DailySchedule;

                    /**
                     * Decodes a DailySchedule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DailySchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.DailySchedule;

                    /**
                     * Verifies a DailySchedule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DailySchedule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DailySchedule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.DailySchedule;

                    /**
                     * Creates a plain object from a DailySchedule message. Also converts values to other types if specified.
                     * @param message DailySchedule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.DailySchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DailySchedule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DailySchedule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WeeklySchedule. */
                interface IWeeklySchedule {

                    /** WeeklySchedule snapshotsToKeep */
                    snapshotsToKeep?: (number|null);

                    /** WeeklySchedule minute */
                    minute?: (number|null);

                    /** WeeklySchedule hour */
                    hour?: (number|null);

                    /** WeeklySchedule day */
                    day?: (string|null);
                }

                /** Represents a WeeklySchedule. */
                class WeeklySchedule implements IWeeklySchedule {

                    /**
                     * Constructs a new WeeklySchedule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IWeeklySchedule);

                    /** WeeklySchedule snapshotsToKeep. */
                    public snapshotsToKeep?: (number|null);

                    /** WeeklySchedule minute. */
                    public minute?: (number|null);

                    /** WeeklySchedule hour. */
                    public hour?: (number|null);

                    /** WeeklySchedule day. */
                    public day?: (string|null);

                    /** WeeklySchedule _snapshotsToKeep. */
                    public _snapshotsToKeep?: "snapshotsToKeep";

                    /** WeeklySchedule _minute. */
                    public _minute?: "minute";

                    /** WeeklySchedule _hour. */
                    public _hour?: "hour";

                    /** WeeklySchedule _day. */
                    public _day?: "day";

                    /**
                     * Creates a new WeeklySchedule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WeeklySchedule instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IWeeklySchedule): google.cloud.netapp.v1.WeeklySchedule;

                    /**
                     * Encodes the specified WeeklySchedule message. Does not implicitly {@link google.cloud.netapp.v1.WeeklySchedule.verify|verify} messages.
                     * @param message WeeklySchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IWeeklySchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WeeklySchedule message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.WeeklySchedule.verify|verify} messages.
                     * @param message WeeklySchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IWeeklySchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WeeklySchedule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WeeklySchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.WeeklySchedule;

                    /**
                     * Decodes a WeeklySchedule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WeeklySchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.WeeklySchedule;

                    /**
                     * Verifies a WeeklySchedule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WeeklySchedule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WeeklySchedule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.WeeklySchedule;

                    /**
                     * Creates a plain object from a WeeklySchedule message. Also converts values to other types if specified.
                     * @param message WeeklySchedule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.WeeklySchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WeeklySchedule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WeeklySchedule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MonthlySchedule. */
                interface IMonthlySchedule {

                    /** MonthlySchedule snapshotsToKeep */
                    snapshotsToKeep?: (number|null);

                    /** MonthlySchedule minute */
                    minute?: (number|null);

                    /** MonthlySchedule hour */
                    hour?: (number|null);

                    /** MonthlySchedule daysOfMonth */
                    daysOfMonth?: (string|null);
                }

                /** Represents a MonthlySchedule. */
                class MonthlySchedule implements IMonthlySchedule {

                    /**
                     * Constructs a new MonthlySchedule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IMonthlySchedule);

                    /** MonthlySchedule snapshotsToKeep. */
                    public snapshotsToKeep?: (number|null);

                    /** MonthlySchedule minute. */
                    public minute?: (number|null);

                    /** MonthlySchedule hour. */
                    public hour?: (number|null);

                    /** MonthlySchedule daysOfMonth. */
                    public daysOfMonth?: (string|null);

                    /** MonthlySchedule _snapshotsToKeep. */
                    public _snapshotsToKeep?: "snapshotsToKeep";

                    /** MonthlySchedule _minute. */
                    public _minute?: "minute";

                    /** MonthlySchedule _hour. */
                    public _hour?: "hour";

                    /** MonthlySchedule _daysOfMonth. */
                    public _daysOfMonth?: "daysOfMonth";

                    /**
                     * Creates a new MonthlySchedule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MonthlySchedule instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IMonthlySchedule): google.cloud.netapp.v1.MonthlySchedule;

                    /**
                     * Encodes the specified MonthlySchedule message. Does not implicitly {@link google.cloud.netapp.v1.MonthlySchedule.verify|verify} messages.
                     * @param message MonthlySchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IMonthlySchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MonthlySchedule message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.MonthlySchedule.verify|verify} messages.
                     * @param message MonthlySchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IMonthlySchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MonthlySchedule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MonthlySchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.MonthlySchedule;

                    /**
                     * Decodes a MonthlySchedule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MonthlySchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.MonthlySchedule;

                    /**
                     * Verifies a MonthlySchedule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MonthlySchedule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MonthlySchedule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.MonthlySchedule;

                    /**
                     * Creates a plain object from a MonthlySchedule message. Also converts values to other types if specified.
                     * @param message MonthlySchedule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.MonthlySchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MonthlySchedule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MonthlySchedule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MountOption. */
                interface IMountOption {

                    /** MountOption export */
                    "export"?: (string|null);

                    /** MountOption exportFull */
                    exportFull?: (string|null);

                    /** MountOption protocol */
                    protocol?: (google.cloud.netapp.v1.Protocols|keyof typeof google.cloud.netapp.v1.Protocols|null);

                    /** MountOption instructions */
                    instructions?: (string|null);
                }

                /** Represents a MountOption. */
                class MountOption implements IMountOption {

                    /**
                     * Constructs a new MountOption.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IMountOption);

                    /** MountOption export. */
                    public export: string;

                    /** MountOption exportFull. */
                    public exportFull: string;

                    /** MountOption protocol. */
                    public protocol: (google.cloud.netapp.v1.Protocols|keyof typeof google.cloud.netapp.v1.Protocols);

                    /** MountOption instructions. */
                    public instructions: string;

                    /**
                     * Creates a new MountOption instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MountOption instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IMountOption): google.cloud.netapp.v1.MountOption;

                    /**
                     * Encodes the specified MountOption message. Does not implicitly {@link google.cloud.netapp.v1.MountOption.verify|verify} messages.
                     * @param message MountOption message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IMountOption, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MountOption message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.MountOption.verify|verify} messages.
                     * @param message MountOption message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IMountOption, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MountOption message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MountOption
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.MountOption;

                    /**
                     * Decodes a MountOption message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MountOption
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.MountOption;

                    /**
                     * Verifies a MountOption message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MountOption message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MountOption
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.MountOption;

                    /**
                     * Creates a plain object from a MountOption message. Also converts values to other types if specified.
                     * @param message MountOption
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.MountOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MountOption to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MountOption
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RestoreParameters. */
                interface IRestoreParameters {

                    /** RestoreParameters sourceSnapshot */
                    sourceSnapshot?: (string|null);

                    /** RestoreParameters sourceBackup */
                    sourceBackup?: (string|null);
                }

                /** Represents a RestoreParameters. */
                class RestoreParameters implements IRestoreParameters {

                    /**
                     * Constructs a new RestoreParameters.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IRestoreParameters);

                    /** RestoreParameters sourceSnapshot. */
                    public sourceSnapshot?: (string|null);

                    /** RestoreParameters sourceBackup. */
                    public sourceBackup?: (string|null);

                    /** RestoreParameters source. */
                    public source?: ("sourceSnapshot"|"sourceBackup");

                    /**
                     * Creates a new RestoreParameters instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestoreParameters instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IRestoreParameters): google.cloud.netapp.v1.RestoreParameters;

                    /**
                     * Encodes the specified RestoreParameters message. Does not implicitly {@link google.cloud.netapp.v1.RestoreParameters.verify|verify} messages.
                     * @param message RestoreParameters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IRestoreParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestoreParameters message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.RestoreParameters.verify|verify} messages.
                     * @param message RestoreParameters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IRestoreParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestoreParameters message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestoreParameters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.RestoreParameters;

                    /**
                     * Decodes a RestoreParameters message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestoreParameters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.RestoreParameters;

                    /**
                     * Verifies a RestoreParameters message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestoreParameters message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestoreParameters
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.RestoreParameters;

                    /**
                     * Creates a plain object from a RestoreParameters message. Also converts values to other types if specified.
                     * @param message RestoreParameters
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.RestoreParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestoreParameters to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RestoreParameters
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BackupConfig. */
                interface IBackupConfig {

                    /** BackupConfig backupPolicies */
                    backupPolicies?: (string[]|null);

                    /** BackupConfig backupVault */
                    backupVault?: (string|null);

                    /** BackupConfig scheduledBackupEnabled */
                    scheduledBackupEnabled?: (boolean|null);

                    /** BackupConfig backupChainBytes */
                    backupChainBytes?: (number|Long|string|null);
                }

                /** Represents a BackupConfig. */
                class BackupConfig implements IBackupConfig {

                    /**
                     * Constructs a new BackupConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.IBackupConfig);

                    /** BackupConfig backupPolicies. */
                    public backupPolicies: string[];

                    /** BackupConfig backupVault. */
                    public backupVault: string;

                    /** BackupConfig scheduledBackupEnabled. */
                    public scheduledBackupEnabled?: (boolean|null);

                    /** BackupConfig backupChainBytes. */
                    public backupChainBytes?: (number|Long|string|null);

                    /** BackupConfig _scheduledBackupEnabled. */
                    public _scheduledBackupEnabled?: "scheduledBackupEnabled";

                    /** BackupConfig _backupChainBytes. */
                    public _backupChainBytes?: "backupChainBytes";

                    /**
                     * Creates a new BackupConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BackupConfig instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.IBackupConfig): google.cloud.netapp.v1.BackupConfig;

                    /**
                     * Encodes the specified BackupConfig message. Does not implicitly {@link google.cloud.netapp.v1.BackupConfig.verify|verify} messages.
                     * @param message BackupConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.IBackupConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BackupConfig message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.BackupConfig.verify|verify} messages.
                     * @param message BackupConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.IBackupConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BackupConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BackupConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.BackupConfig;

                    /**
                     * Decodes a BackupConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BackupConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.BackupConfig;

                    /**
                     * Verifies a BackupConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BackupConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BackupConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.BackupConfig;

                    /**
                     * Creates a plain object from a BackupConfig message. Also converts values to other types if specified.
                     * @param message BackupConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.BackupConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BackupConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BackupConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TieringPolicy. */
                interface ITieringPolicy {

                    /** TieringPolicy tierAction */
                    tierAction?: (google.cloud.netapp.v1.TieringPolicy.TierAction|keyof typeof google.cloud.netapp.v1.TieringPolicy.TierAction|null);

                    /** TieringPolicy coolingThresholdDays */
                    coolingThresholdDays?: (number|null);
                }

                /** Represents a TieringPolicy. */
                class TieringPolicy implements ITieringPolicy {

                    /**
                     * Constructs a new TieringPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.netapp.v1.ITieringPolicy);

                    /** TieringPolicy tierAction. */
                    public tierAction?: (google.cloud.netapp.v1.TieringPolicy.TierAction|keyof typeof google.cloud.netapp.v1.TieringPolicy.TierAction|null);

                    /** TieringPolicy coolingThresholdDays. */
                    public coolingThresholdDays?: (number|null);

                    /** TieringPolicy _tierAction. */
                    public _tierAction?: "tierAction";

                    /** TieringPolicy _coolingThresholdDays. */
                    public _coolingThresholdDays?: "coolingThresholdDays";

                    /**
                     * Creates a new TieringPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TieringPolicy instance
                     */
                    public static create(properties?: google.cloud.netapp.v1.ITieringPolicy): google.cloud.netapp.v1.TieringPolicy;

                    /**
                     * Encodes the specified TieringPolicy message. Does not implicitly {@link google.cloud.netapp.v1.TieringPolicy.verify|verify} messages.
                     * @param message TieringPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.netapp.v1.ITieringPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TieringPolicy message, length delimited. Does not implicitly {@link google.cloud.netapp.v1.TieringPolicy.verify|verify} messages.
                     * @param message TieringPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.netapp.v1.ITieringPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TieringPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TieringPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.netapp.v1.TieringPolicy;

                    /**
                     * Decodes a TieringPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TieringPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.netapp.v1.TieringPolicy;

                    /**
                     * Verifies a TieringPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TieringPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TieringPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.netapp.v1.TieringPolicy;

                    /**
                     * Creates a plain object from a TieringPolicy message. Also converts values to other types if specified.
                     * @param message TieringPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.netapp.v1.TieringPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TieringPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TieringPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TieringPolicy {

                    /** TierAction enum. */
                    enum TierAction {
                        TIER_ACTION_UNSPECIFIED = 0,
                        ENABLED = 1,
                        PAUSED = 2
                    }
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
