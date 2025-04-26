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

        /** Namespace certificatemanager. */
        namespace certificatemanager {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a ListCertificateIssuanceConfigsRequest. */
                interface IListCertificateIssuanceConfigsRequest {

                    /** ListCertificateIssuanceConfigsRequest parent */
                    parent?: (string|null);

                    /** ListCertificateIssuanceConfigsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListCertificateIssuanceConfigsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListCertificateIssuanceConfigsRequest filter */
                    filter?: (string|null);

                    /** ListCertificateIssuanceConfigsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListCertificateIssuanceConfigsRequest. */
                class ListCertificateIssuanceConfigsRequest implements IListCertificateIssuanceConfigsRequest {

                    /**
                     * Constructs a new ListCertificateIssuanceConfigsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IListCertificateIssuanceConfigsRequest);

                    /** ListCertificateIssuanceConfigsRequest parent. */
                    public parent: string;

                    /** ListCertificateIssuanceConfigsRequest pageSize. */
                    public pageSize: number;

                    /** ListCertificateIssuanceConfigsRequest pageToken. */
                    public pageToken: string;

                    /** ListCertificateIssuanceConfigsRequest filter. */
                    public filter: string;

                    /** ListCertificateIssuanceConfigsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListCertificateIssuanceConfigsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCertificateIssuanceConfigsRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IListCertificateIssuanceConfigsRequest): google.cloud.certificatemanager.v1.ListCertificateIssuanceConfigsRequest;

                    /**
                     * Encodes the specified ListCertificateIssuanceConfigsRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.ListCertificateIssuanceConfigsRequest.verify|verify} messages.
                     * @param message ListCertificateIssuanceConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IListCertificateIssuanceConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCertificateIssuanceConfigsRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.ListCertificateIssuanceConfigsRequest.verify|verify} messages.
                     * @param message ListCertificateIssuanceConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IListCertificateIssuanceConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCertificateIssuanceConfigsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCertificateIssuanceConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.ListCertificateIssuanceConfigsRequest;

                    /**
                     * Decodes a ListCertificateIssuanceConfigsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCertificateIssuanceConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.ListCertificateIssuanceConfigsRequest;

                    /**
                     * Verifies a ListCertificateIssuanceConfigsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCertificateIssuanceConfigsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCertificateIssuanceConfigsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.ListCertificateIssuanceConfigsRequest;

                    /**
                     * Creates a plain object from a ListCertificateIssuanceConfigsRequest message. Also converts values to other types if specified.
                     * @param message ListCertificateIssuanceConfigsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.ListCertificateIssuanceConfigsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCertificateIssuanceConfigsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCertificateIssuanceConfigsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCertificateIssuanceConfigsResponse. */
                interface IListCertificateIssuanceConfigsResponse {

                    /** ListCertificateIssuanceConfigsResponse certificateIssuanceConfigs */
                    certificateIssuanceConfigs?: (google.cloud.certificatemanager.v1.ICertificateIssuanceConfig[]|null);

                    /** ListCertificateIssuanceConfigsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListCertificateIssuanceConfigsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListCertificateIssuanceConfigsResponse. */
                class ListCertificateIssuanceConfigsResponse implements IListCertificateIssuanceConfigsResponse {

                    /**
                     * Constructs a new ListCertificateIssuanceConfigsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IListCertificateIssuanceConfigsResponse);

                    /** ListCertificateIssuanceConfigsResponse certificateIssuanceConfigs. */
                    public certificateIssuanceConfigs: google.cloud.certificatemanager.v1.ICertificateIssuanceConfig[];

                    /** ListCertificateIssuanceConfigsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListCertificateIssuanceConfigsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListCertificateIssuanceConfigsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCertificateIssuanceConfigsResponse instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IListCertificateIssuanceConfigsResponse): google.cloud.certificatemanager.v1.ListCertificateIssuanceConfigsResponse;

                    /**
                     * Encodes the specified ListCertificateIssuanceConfigsResponse message. Does not implicitly {@link google.cloud.certificatemanager.v1.ListCertificateIssuanceConfigsResponse.verify|verify} messages.
                     * @param message ListCertificateIssuanceConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IListCertificateIssuanceConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCertificateIssuanceConfigsResponse message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.ListCertificateIssuanceConfigsResponse.verify|verify} messages.
                     * @param message ListCertificateIssuanceConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IListCertificateIssuanceConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCertificateIssuanceConfigsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCertificateIssuanceConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.ListCertificateIssuanceConfigsResponse;

                    /**
                     * Decodes a ListCertificateIssuanceConfigsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCertificateIssuanceConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.ListCertificateIssuanceConfigsResponse;

                    /**
                     * Verifies a ListCertificateIssuanceConfigsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCertificateIssuanceConfigsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCertificateIssuanceConfigsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.ListCertificateIssuanceConfigsResponse;

                    /**
                     * Creates a plain object from a ListCertificateIssuanceConfigsResponse message. Also converts values to other types if specified.
                     * @param message ListCertificateIssuanceConfigsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.ListCertificateIssuanceConfigsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCertificateIssuanceConfigsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCertificateIssuanceConfigsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetCertificateIssuanceConfigRequest. */
                interface IGetCertificateIssuanceConfigRequest {

                    /** GetCertificateIssuanceConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetCertificateIssuanceConfigRequest. */
                class GetCertificateIssuanceConfigRequest implements IGetCertificateIssuanceConfigRequest {

                    /**
                     * Constructs a new GetCertificateIssuanceConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IGetCertificateIssuanceConfigRequest);

                    /** GetCertificateIssuanceConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetCertificateIssuanceConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCertificateIssuanceConfigRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IGetCertificateIssuanceConfigRequest): google.cloud.certificatemanager.v1.GetCertificateIssuanceConfigRequest;

                    /**
                     * Encodes the specified GetCertificateIssuanceConfigRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.GetCertificateIssuanceConfigRequest.verify|verify} messages.
                     * @param message GetCertificateIssuanceConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IGetCertificateIssuanceConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCertificateIssuanceConfigRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.GetCertificateIssuanceConfigRequest.verify|verify} messages.
                     * @param message GetCertificateIssuanceConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IGetCertificateIssuanceConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCertificateIssuanceConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCertificateIssuanceConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.GetCertificateIssuanceConfigRequest;

                    /**
                     * Decodes a GetCertificateIssuanceConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCertificateIssuanceConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.GetCertificateIssuanceConfigRequest;

                    /**
                     * Verifies a GetCertificateIssuanceConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCertificateIssuanceConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCertificateIssuanceConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.GetCertificateIssuanceConfigRequest;

                    /**
                     * Creates a plain object from a GetCertificateIssuanceConfigRequest message. Also converts values to other types if specified.
                     * @param message GetCertificateIssuanceConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.GetCertificateIssuanceConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCertificateIssuanceConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetCertificateIssuanceConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateCertificateIssuanceConfigRequest. */
                interface ICreateCertificateIssuanceConfigRequest {

                    /** CreateCertificateIssuanceConfigRequest parent */
                    parent?: (string|null);

                    /** CreateCertificateIssuanceConfigRequest certificateIssuanceConfigId */
                    certificateIssuanceConfigId?: (string|null);

                    /** CreateCertificateIssuanceConfigRequest certificateIssuanceConfig */
                    certificateIssuanceConfig?: (google.cloud.certificatemanager.v1.ICertificateIssuanceConfig|null);
                }

                /** Represents a CreateCertificateIssuanceConfigRequest. */
                class CreateCertificateIssuanceConfigRequest implements ICreateCertificateIssuanceConfigRequest {

                    /**
                     * Constructs a new CreateCertificateIssuanceConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.ICreateCertificateIssuanceConfigRequest);

                    /** CreateCertificateIssuanceConfigRequest parent. */
                    public parent: string;

                    /** CreateCertificateIssuanceConfigRequest certificateIssuanceConfigId. */
                    public certificateIssuanceConfigId: string;

                    /** CreateCertificateIssuanceConfigRequest certificateIssuanceConfig. */
                    public certificateIssuanceConfig?: (google.cloud.certificatemanager.v1.ICertificateIssuanceConfig|null);

                    /**
                     * Creates a new CreateCertificateIssuanceConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateCertificateIssuanceConfigRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.ICreateCertificateIssuanceConfigRequest): google.cloud.certificatemanager.v1.CreateCertificateIssuanceConfigRequest;

                    /**
                     * Encodes the specified CreateCertificateIssuanceConfigRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.CreateCertificateIssuanceConfigRequest.verify|verify} messages.
                     * @param message CreateCertificateIssuanceConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.ICreateCertificateIssuanceConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateCertificateIssuanceConfigRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.CreateCertificateIssuanceConfigRequest.verify|verify} messages.
                     * @param message CreateCertificateIssuanceConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.ICreateCertificateIssuanceConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateCertificateIssuanceConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateCertificateIssuanceConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.CreateCertificateIssuanceConfigRequest;

                    /**
                     * Decodes a CreateCertificateIssuanceConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateCertificateIssuanceConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.CreateCertificateIssuanceConfigRequest;

                    /**
                     * Verifies a CreateCertificateIssuanceConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateCertificateIssuanceConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateCertificateIssuanceConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.CreateCertificateIssuanceConfigRequest;

                    /**
                     * Creates a plain object from a CreateCertificateIssuanceConfigRequest message. Also converts values to other types if specified.
                     * @param message CreateCertificateIssuanceConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.CreateCertificateIssuanceConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateCertificateIssuanceConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateCertificateIssuanceConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteCertificateIssuanceConfigRequest. */
                interface IDeleteCertificateIssuanceConfigRequest {

                    /** DeleteCertificateIssuanceConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteCertificateIssuanceConfigRequest. */
                class DeleteCertificateIssuanceConfigRequest implements IDeleteCertificateIssuanceConfigRequest {

                    /**
                     * Constructs a new DeleteCertificateIssuanceConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IDeleteCertificateIssuanceConfigRequest);

                    /** DeleteCertificateIssuanceConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteCertificateIssuanceConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteCertificateIssuanceConfigRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IDeleteCertificateIssuanceConfigRequest): google.cloud.certificatemanager.v1.DeleteCertificateIssuanceConfigRequest;

                    /**
                     * Encodes the specified DeleteCertificateIssuanceConfigRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.DeleteCertificateIssuanceConfigRequest.verify|verify} messages.
                     * @param message DeleteCertificateIssuanceConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IDeleteCertificateIssuanceConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteCertificateIssuanceConfigRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.DeleteCertificateIssuanceConfigRequest.verify|verify} messages.
                     * @param message DeleteCertificateIssuanceConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IDeleteCertificateIssuanceConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteCertificateIssuanceConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteCertificateIssuanceConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.DeleteCertificateIssuanceConfigRequest;

                    /**
                     * Decodes a DeleteCertificateIssuanceConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteCertificateIssuanceConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.DeleteCertificateIssuanceConfigRequest;

                    /**
                     * Verifies a DeleteCertificateIssuanceConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteCertificateIssuanceConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteCertificateIssuanceConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.DeleteCertificateIssuanceConfigRequest;

                    /**
                     * Creates a plain object from a DeleteCertificateIssuanceConfigRequest message. Also converts values to other types if specified.
                     * @param message DeleteCertificateIssuanceConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.DeleteCertificateIssuanceConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteCertificateIssuanceConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteCertificateIssuanceConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CertificateIssuanceConfig. */
                interface ICertificateIssuanceConfig {

                    /** CertificateIssuanceConfig name */
                    name?: (string|null);

                    /** CertificateIssuanceConfig createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** CertificateIssuanceConfig updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** CertificateIssuanceConfig labels */
                    labels?: ({ [k: string]: string }|null);

                    /** CertificateIssuanceConfig description */
                    description?: (string|null);

                    /** CertificateIssuanceConfig certificateAuthorityConfig */
                    certificateAuthorityConfig?: (google.cloud.certificatemanager.v1.CertificateIssuanceConfig.ICertificateAuthorityConfig|null);

                    /** CertificateIssuanceConfig lifetime */
                    lifetime?: (google.protobuf.IDuration|null);

                    /** CertificateIssuanceConfig rotationWindowPercentage */
                    rotationWindowPercentage?: (number|null);

                    /** CertificateIssuanceConfig keyAlgorithm */
                    keyAlgorithm?: (google.cloud.certificatemanager.v1.CertificateIssuanceConfig.KeyAlgorithm|keyof typeof google.cloud.certificatemanager.v1.CertificateIssuanceConfig.KeyAlgorithm|null);
                }

                /** Represents a CertificateIssuanceConfig. */
                class CertificateIssuanceConfig implements ICertificateIssuanceConfig {

                    /**
                     * Constructs a new CertificateIssuanceConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.ICertificateIssuanceConfig);

                    /** CertificateIssuanceConfig name. */
                    public name: string;

                    /** CertificateIssuanceConfig createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** CertificateIssuanceConfig updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** CertificateIssuanceConfig labels. */
                    public labels: { [k: string]: string };

                    /** CertificateIssuanceConfig description. */
                    public description: string;

                    /** CertificateIssuanceConfig certificateAuthorityConfig. */
                    public certificateAuthorityConfig?: (google.cloud.certificatemanager.v1.CertificateIssuanceConfig.ICertificateAuthorityConfig|null);

                    /** CertificateIssuanceConfig lifetime. */
                    public lifetime?: (google.protobuf.IDuration|null);

                    /** CertificateIssuanceConfig rotationWindowPercentage. */
                    public rotationWindowPercentage: number;

                    /** CertificateIssuanceConfig keyAlgorithm. */
                    public keyAlgorithm: (google.cloud.certificatemanager.v1.CertificateIssuanceConfig.KeyAlgorithm|keyof typeof google.cloud.certificatemanager.v1.CertificateIssuanceConfig.KeyAlgorithm);

                    /**
                     * Creates a new CertificateIssuanceConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CertificateIssuanceConfig instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.ICertificateIssuanceConfig): google.cloud.certificatemanager.v1.CertificateIssuanceConfig;

                    /**
                     * Encodes the specified CertificateIssuanceConfig message. Does not implicitly {@link google.cloud.certificatemanager.v1.CertificateIssuanceConfig.verify|verify} messages.
                     * @param message CertificateIssuanceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.ICertificateIssuanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CertificateIssuanceConfig message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.CertificateIssuanceConfig.verify|verify} messages.
                     * @param message CertificateIssuanceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.ICertificateIssuanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CertificateIssuanceConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CertificateIssuanceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.CertificateIssuanceConfig;

                    /**
                     * Decodes a CertificateIssuanceConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CertificateIssuanceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.CertificateIssuanceConfig;

                    /**
                     * Verifies a CertificateIssuanceConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CertificateIssuanceConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CertificateIssuanceConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.CertificateIssuanceConfig;

                    /**
                     * Creates a plain object from a CertificateIssuanceConfig message. Also converts values to other types if specified.
                     * @param message CertificateIssuanceConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.CertificateIssuanceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CertificateIssuanceConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CertificateIssuanceConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CertificateIssuanceConfig {

                    /** Properties of a CertificateAuthorityConfig. */
                    interface ICertificateAuthorityConfig {

                        /** CertificateAuthorityConfig certificateAuthorityServiceConfig */
                        certificateAuthorityServiceConfig?: (google.cloud.certificatemanager.v1.CertificateIssuanceConfig.CertificateAuthorityConfig.ICertificateAuthorityServiceConfig|null);
                    }

                    /** Represents a CertificateAuthorityConfig. */
                    class CertificateAuthorityConfig implements ICertificateAuthorityConfig {

                        /**
                         * Constructs a new CertificateAuthorityConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.certificatemanager.v1.CertificateIssuanceConfig.ICertificateAuthorityConfig);

                        /** CertificateAuthorityConfig certificateAuthorityServiceConfig. */
                        public certificateAuthorityServiceConfig?: (google.cloud.certificatemanager.v1.CertificateIssuanceConfig.CertificateAuthorityConfig.ICertificateAuthorityServiceConfig|null);

                        /** CertificateAuthorityConfig kind. */
                        public kind?: "certificateAuthorityServiceConfig";

                        /**
                         * Creates a new CertificateAuthorityConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CertificateAuthorityConfig instance
                         */
                        public static create(properties?: google.cloud.certificatemanager.v1.CertificateIssuanceConfig.ICertificateAuthorityConfig): google.cloud.certificatemanager.v1.CertificateIssuanceConfig.CertificateAuthorityConfig;

                        /**
                         * Encodes the specified CertificateAuthorityConfig message. Does not implicitly {@link google.cloud.certificatemanager.v1.CertificateIssuanceConfig.CertificateAuthorityConfig.verify|verify} messages.
                         * @param message CertificateAuthorityConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.certificatemanager.v1.CertificateIssuanceConfig.ICertificateAuthorityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CertificateAuthorityConfig message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.CertificateIssuanceConfig.CertificateAuthorityConfig.verify|verify} messages.
                         * @param message CertificateAuthorityConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.certificatemanager.v1.CertificateIssuanceConfig.ICertificateAuthorityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CertificateAuthorityConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CertificateAuthorityConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.CertificateIssuanceConfig.CertificateAuthorityConfig;

                        /**
                         * Decodes a CertificateAuthorityConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CertificateAuthorityConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.CertificateIssuanceConfig.CertificateAuthorityConfig;

                        /**
                         * Verifies a CertificateAuthorityConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CertificateAuthorityConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CertificateAuthorityConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.CertificateIssuanceConfig.CertificateAuthorityConfig;

                        /**
                         * Creates a plain object from a CertificateAuthorityConfig message. Also converts values to other types if specified.
                         * @param message CertificateAuthorityConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.certificatemanager.v1.CertificateIssuanceConfig.CertificateAuthorityConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CertificateAuthorityConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CertificateAuthorityConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace CertificateAuthorityConfig {

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
                            constructor(properties?: google.cloud.certificatemanager.v1.CertificateIssuanceConfig.CertificateAuthorityConfig.ICertificateAuthorityServiceConfig);

                            /** CertificateAuthorityServiceConfig caPool. */
                            public caPool: string;

                            /**
                             * Creates a new CertificateAuthorityServiceConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CertificateAuthorityServiceConfig instance
                             */
                            public static create(properties?: google.cloud.certificatemanager.v1.CertificateIssuanceConfig.CertificateAuthorityConfig.ICertificateAuthorityServiceConfig): google.cloud.certificatemanager.v1.CertificateIssuanceConfig.CertificateAuthorityConfig.CertificateAuthorityServiceConfig;

                            /**
                             * Encodes the specified CertificateAuthorityServiceConfig message. Does not implicitly {@link google.cloud.certificatemanager.v1.CertificateIssuanceConfig.CertificateAuthorityConfig.CertificateAuthorityServiceConfig.verify|verify} messages.
                             * @param message CertificateAuthorityServiceConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.certificatemanager.v1.CertificateIssuanceConfig.CertificateAuthorityConfig.ICertificateAuthorityServiceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CertificateAuthorityServiceConfig message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.CertificateIssuanceConfig.CertificateAuthorityConfig.CertificateAuthorityServiceConfig.verify|verify} messages.
                             * @param message CertificateAuthorityServiceConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.certificatemanager.v1.CertificateIssuanceConfig.CertificateAuthorityConfig.ICertificateAuthorityServiceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CertificateAuthorityServiceConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CertificateAuthorityServiceConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.CertificateIssuanceConfig.CertificateAuthorityConfig.CertificateAuthorityServiceConfig;

                            /**
                             * Decodes a CertificateAuthorityServiceConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CertificateAuthorityServiceConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.CertificateIssuanceConfig.CertificateAuthorityConfig.CertificateAuthorityServiceConfig;

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
                            public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.CertificateIssuanceConfig.CertificateAuthorityConfig.CertificateAuthorityServiceConfig;

                            /**
                             * Creates a plain object from a CertificateAuthorityServiceConfig message. Also converts values to other types if specified.
                             * @param message CertificateAuthorityServiceConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.certificatemanager.v1.CertificateIssuanceConfig.CertificateAuthorityConfig.CertificateAuthorityServiceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** KeyAlgorithm enum. */
                    enum KeyAlgorithm {
                        KEY_ALGORITHM_UNSPECIFIED = 0,
                        RSA_2048 = 1,
                        ECDSA_P256 = 4
                    }
                }

                /** Represents a CertificateManager */
                class CertificateManager extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CertificateManager service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CertificateManager service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CertificateManager;

                    /**
                     * Calls ListCertificates.
                     * @param request ListCertificatesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCertificatesResponse
                     */
                    public listCertificates(request: google.cloud.certificatemanager.v1.IListCertificatesRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.ListCertificatesCallback): void;

                    /**
                     * Calls ListCertificates.
                     * @param request ListCertificatesRequest message or plain object
                     * @returns Promise
                     */
                    public listCertificates(request: google.cloud.certificatemanager.v1.IListCertificatesRequest): Promise<google.cloud.certificatemanager.v1.ListCertificatesResponse>;

                    /**
                     * Calls GetCertificate.
                     * @param request GetCertificateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Certificate
                     */
                    public getCertificate(request: google.cloud.certificatemanager.v1.IGetCertificateRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.GetCertificateCallback): void;

                    /**
                     * Calls GetCertificate.
                     * @param request GetCertificateRequest message or plain object
                     * @returns Promise
                     */
                    public getCertificate(request: google.cloud.certificatemanager.v1.IGetCertificateRequest): Promise<google.cloud.certificatemanager.v1.Certificate>;

                    /**
                     * Calls CreateCertificate.
                     * @param request CreateCertificateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createCertificate(request: google.cloud.certificatemanager.v1.ICreateCertificateRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.CreateCertificateCallback): void;

                    /**
                     * Calls CreateCertificate.
                     * @param request CreateCertificateRequest message or plain object
                     * @returns Promise
                     */
                    public createCertificate(request: google.cloud.certificatemanager.v1.ICreateCertificateRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateCertificate.
                     * @param request UpdateCertificateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateCertificate(request: google.cloud.certificatemanager.v1.IUpdateCertificateRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.UpdateCertificateCallback): void;

                    /**
                     * Calls UpdateCertificate.
                     * @param request UpdateCertificateRequest message or plain object
                     * @returns Promise
                     */
                    public updateCertificate(request: google.cloud.certificatemanager.v1.IUpdateCertificateRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteCertificate.
                     * @param request DeleteCertificateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteCertificate(request: google.cloud.certificatemanager.v1.IDeleteCertificateRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.DeleteCertificateCallback): void;

                    /**
                     * Calls DeleteCertificate.
                     * @param request DeleteCertificateRequest message or plain object
                     * @returns Promise
                     */
                    public deleteCertificate(request: google.cloud.certificatemanager.v1.IDeleteCertificateRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListCertificateMaps.
                     * @param request ListCertificateMapsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCertificateMapsResponse
                     */
                    public listCertificateMaps(request: google.cloud.certificatemanager.v1.IListCertificateMapsRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.ListCertificateMapsCallback): void;

                    /**
                     * Calls ListCertificateMaps.
                     * @param request ListCertificateMapsRequest message or plain object
                     * @returns Promise
                     */
                    public listCertificateMaps(request: google.cloud.certificatemanager.v1.IListCertificateMapsRequest): Promise<google.cloud.certificatemanager.v1.ListCertificateMapsResponse>;

                    /**
                     * Calls GetCertificateMap.
                     * @param request GetCertificateMapRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CertificateMap
                     */
                    public getCertificateMap(request: google.cloud.certificatemanager.v1.IGetCertificateMapRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.GetCertificateMapCallback): void;

                    /**
                     * Calls GetCertificateMap.
                     * @param request GetCertificateMapRequest message or plain object
                     * @returns Promise
                     */
                    public getCertificateMap(request: google.cloud.certificatemanager.v1.IGetCertificateMapRequest): Promise<google.cloud.certificatemanager.v1.CertificateMap>;

                    /**
                     * Calls CreateCertificateMap.
                     * @param request CreateCertificateMapRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createCertificateMap(request: google.cloud.certificatemanager.v1.ICreateCertificateMapRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.CreateCertificateMapCallback): void;

                    /**
                     * Calls CreateCertificateMap.
                     * @param request CreateCertificateMapRequest message or plain object
                     * @returns Promise
                     */
                    public createCertificateMap(request: google.cloud.certificatemanager.v1.ICreateCertificateMapRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateCertificateMap.
                     * @param request UpdateCertificateMapRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateCertificateMap(request: google.cloud.certificatemanager.v1.IUpdateCertificateMapRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.UpdateCertificateMapCallback): void;

                    /**
                     * Calls UpdateCertificateMap.
                     * @param request UpdateCertificateMapRequest message or plain object
                     * @returns Promise
                     */
                    public updateCertificateMap(request: google.cloud.certificatemanager.v1.IUpdateCertificateMapRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteCertificateMap.
                     * @param request DeleteCertificateMapRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteCertificateMap(request: google.cloud.certificatemanager.v1.IDeleteCertificateMapRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.DeleteCertificateMapCallback): void;

                    /**
                     * Calls DeleteCertificateMap.
                     * @param request DeleteCertificateMapRequest message or plain object
                     * @returns Promise
                     */
                    public deleteCertificateMap(request: google.cloud.certificatemanager.v1.IDeleteCertificateMapRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListCertificateMapEntries.
                     * @param request ListCertificateMapEntriesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCertificateMapEntriesResponse
                     */
                    public listCertificateMapEntries(request: google.cloud.certificatemanager.v1.IListCertificateMapEntriesRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.ListCertificateMapEntriesCallback): void;

                    /**
                     * Calls ListCertificateMapEntries.
                     * @param request ListCertificateMapEntriesRequest message or plain object
                     * @returns Promise
                     */
                    public listCertificateMapEntries(request: google.cloud.certificatemanager.v1.IListCertificateMapEntriesRequest): Promise<google.cloud.certificatemanager.v1.ListCertificateMapEntriesResponse>;

                    /**
                     * Calls GetCertificateMapEntry.
                     * @param request GetCertificateMapEntryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CertificateMapEntry
                     */
                    public getCertificateMapEntry(request: google.cloud.certificatemanager.v1.IGetCertificateMapEntryRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.GetCertificateMapEntryCallback): void;

                    /**
                     * Calls GetCertificateMapEntry.
                     * @param request GetCertificateMapEntryRequest message or plain object
                     * @returns Promise
                     */
                    public getCertificateMapEntry(request: google.cloud.certificatemanager.v1.IGetCertificateMapEntryRequest): Promise<google.cloud.certificatemanager.v1.CertificateMapEntry>;

                    /**
                     * Calls CreateCertificateMapEntry.
                     * @param request CreateCertificateMapEntryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createCertificateMapEntry(request: google.cloud.certificatemanager.v1.ICreateCertificateMapEntryRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.CreateCertificateMapEntryCallback): void;

                    /**
                     * Calls CreateCertificateMapEntry.
                     * @param request CreateCertificateMapEntryRequest message or plain object
                     * @returns Promise
                     */
                    public createCertificateMapEntry(request: google.cloud.certificatemanager.v1.ICreateCertificateMapEntryRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateCertificateMapEntry.
                     * @param request UpdateCertificateMapEntryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateCertificateMapEntry(request: google.cloud.certificatemanager.v1.IUpdateCertificateMapEntryRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.UpdateCertificateMapEntryCallback): void;

                    /**
                     * Calls UpdateCertificateMapEntry.
                     * @param request UpdateCertificateMapEntryRequest message or plain object
                     * @returns Promise
                     */
                    public updateCertificateMapEntry(request: google.cloud.certificatemanager.v1.IUpdateCertificateMapEntryRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteCertificateMapEntry.
                     * @param request DeleteCertificateMapEntryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteCertificateMapEntry(request: google.cloud.certificatemanager.v1.IDeleteCertificateMapEntryRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.DeleteCertificateMapEntryCallback): void;

                    /**
                     * Calls DeleteCertificateMapEntry.
                     * @param request DeleteCertificateMapEntryRequest message or plain object
                     * @returns Promise
                     */
                    public deleteCertificateMapEntry(request: google.cloud.certificatemanager.v1.IDeleteCertificateMapEntryRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListDnsAuthorizations.
                     * @param request ListDnsAuthorizationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListDnsAuthorizationsResponse
                     */
                    public listDnsAuthorizations(request: google.cloud.certificatemanager.v1.IListDnsAuthorizationsRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.ListDnsAuthorizationsCallback): void;

                    /**
                     * Calls ListDnsAuthorizations.
                     * @param request ListDnsAuthorizationsRequest message or plain object
                     * @returns Promise
                     */
                    public listDnsAuthorizations(request: google.cloud.certificatemanager.v1.IListDnsAuthorizationsRequest): Promise<google.cloud.certificatemanager.v1.ListDnsAuthorizationsResponse>;

                    /**
                     * Calls GetDnsAuthorization.
                     * @param request GetDnsAuthorizationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DnsAuthorization
                     */
                    public getDnsAuthorization(request: google.cloud.certificatemanager.v1.IGetDnsAuthorizationRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.GetDnsAuthorizationCallback): void;

                    /**
                     * Calls GetDnsAuthorization.
                     * @param request GetDnsAuthorizationRequest message or plain object
                     * @returns Promise
                     */
                    public getDnsAuthorization(request: google.cloud.certificatemanager.v1.IGetDnsAuthorizationRequest): Promise<google.cloud.certificatemanager.v1.DnsAuthorization>;

                    /**
                     * Calls CreateDnsAuthorization.
                     * @param request CreateDnsAuthorizationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createDnsAuthorization(request: google.cloud.certificatemanager.v1.ICreateDnsAuthorizationRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.CreateDnsAuthorizationCallback): void;

                    /**
                     * Calls CreateDnsAuthorization.
                     * @param request CreateDnsAuthorizationRequest message or plain object
                     * @returns Promise
                     */
                    public createDnsAuthorization(request: google.cloud.certificatemanager.v1.ICreateDnsAuthorizationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateDnsAuthorization.
                     * @param request UpdateDnsAuthorizationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateDnsAuthorization(request: google.cloud.certificatemanager.v1.IUpdateDnsAuthorizationRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.UpdateDnsAuthorizationCallback): void;

                    /**
                     * Calls UpdateDnsAuthorization.
                     * @param request UpdateDnsAuthorizationRequest message or plain object
                     * @returns Promise
                     */
                    public updateDnsAuthorization(request: google.cloud.certificatemanager.v1.IUpdateDnsAuthorizationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteDnsAuthorization.
                     * @param request DeleteDnsAuthorizationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteDnsAuthorization(request: google.cloud.certificatemanager.v1.IDeleteDnsAuthorizationRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.DeleteDnsAuthorizationCallback): void;

                    /**
                     * Calls DeleteDnsAuthorization.
                     * @param request DeleteDnsAuthorizationRequest message or plain object
                     * @returns Promise
                     */
                    public deleteDnsAuthorization(request: google.cloud.certificatemanager.v1.IDeleteDnsAuthorizationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListCertificateIssuanceConfigs.
                     * @param request ListCertificateIssuanceConfigsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCertificateIssuanceConfigsResponse
                     */
                    public listCertificateIssuanceConfigs(request: google.cloud.certificatemanager.v1.IListCertificateIssuanceConfigsRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.ListCertificateIssuanceConfigsCallback): void;

                    /**
                     * Calls ListCertificateIssuanceConfigs.
                     * @param request ListCertificateIssuanceConfigsRequest message or plain object
                     * @returns Promise
                     */
                    public listCertificateIssuanceConfigs(request: google.cloud.certificatemanager.v1.IListCertificateIssuanceConfigsRequest): Promise<google.cloud.certificatemanager.v1.ListCertificateIssuanceConfigsResponse>;

                    /**
                     * Calls GetCertificateIssuanceConfig.
                     * @param request GetCertificateIssuanceConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CertificateIssuanceConfig
                     */
                    public getCertificateIssuanceConfig(request: google.cloud.certificatemanager.v1.IGetCertificateIssuanceConfigRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.GetCertificateIssuanceConfigCallback): void;

                    /**
                     * Calls GetCertificateIssuanceConfig.
                     * @param request GetCertificateIssuanceConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getCertificateIssuanceConfig(request: google.cloud.certificatemanager.v1.IGetCertificateIssuanceConfigRequest): Promise<google.cloud.certificatemanager.v1.CertificateIssuanceConfig>;

                    /**
                     * Calls CreateCertificateIssuanceConfig.
                     * @param request CreateCertificateIssuanceConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createCertificateIssuanceConfig(request: google.cloud.certificatemanager.v1.ICreateCertificateIssuanceConfigRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.CreateCertificateIssuanceConfigCallback): void;

                    /**
                     * Calls CreateCertificateIssuanceConfig.
                     * @param request CreateCertificateIssuanceConfigRequest message or plain object
                     * @returns Promise
                     */
                    public createCertificateIssuanceConfig(request: google.cloud.certificatemanager.v1.ICreateCertificateIssuanceConfigRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteCertificateIssuanceConfig.
                     * @param request DeleteCertificateIssuanceConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteCertificateIssuanceConfig(request: google.cloud.certificatemanager.v1.IDeleteCertificateIssuanceConfigRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.DeleteCertificateIssuanceConfigCallback): void;

                    /**
                     * Calls DeleteCertificateIssuanceConfig.
                     * @param request DeleteCertificateIssuanceConfigRequest message or plain object
                     * @returns Promise
                     */
                    public deleteCertificateIssuanceConfig(request: google.cloud.certificatemanager.v1.IDeleteCertificateIssuanceConfigRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListTrustConfigs.
                     * @param request ListTrustConfigsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTrustConfigsResponse
                     */
                    public listTrustConfigs(request: google.cloud.certificatemanager.v1.IListTrustConfigsRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.ListTrustConfigsCallback): void;

                    /**
                     * Calls ListTrustConfigs.
                     * @param request ListTrustConfigsRequest message or plain object
                     * @returns Promise
                     */
                    public listTrustConfigs(request: google.cloud.certificatemanager.v1.IListTrustConfigsRequest): Promise<google.cloud.certificatemanager.v1.ListTrustConfigsResponse>;

                    /**
                     * Calls GetTrustConfig.
                     * @param request GetTrustConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TrustConfig
                     */
                    public getTrustConfig(request: google.cloud.certificatemanager.v1.IGetTrustConfigRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.GetTrustConfigCallback): void;

                    /**
                     * Calls GetTrustConfig.
                     * @param request GetTrustConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getTrustConfig(request: google.cloud.certificatemanager.v1.IGetTrustConfigRequest): Promise<google.cloud.certificatemanager.v1.TrustConfig>;

                    /**
                     * Calls CreateTrustConfig.
                     * @param request CreateTrustConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createTrustConfig(request: google.cloud.certificatemanager.v1.ICreateTrustConfigRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.CreateTrustConfigCallback): void;

                    /**
                     * Calls CreateTrustConfig.
                     * @param request CreateTrustConfigRequest message or plain object
                     * @returns Promise
                     */
                    public createTrustConfig(request: google.cloud.certificatemanager.v1.ICreateTrustConfigRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateTrustConfig.
                     * @param request UpdateTrustConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateTrustConfig(request: google.cloud.certificatemanager.v1.IUpdateTrustConfigRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.UpdateTrustConfigCallback): void;

                    /**
                     * Calls UpdateTrustConfig.
                     * @param request UpdateTrustConfigRequest message or plain object
                     * @returns Promise
                     */
                    public updateTrustConfig(request: google.cloud.certificatemanager.v1.IUpdateTrustConfigRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteTrustConfig.
                     * @param request DeleteTrustConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteTrustConfig(request: google.cloud.certificatemanager.v1.IDeleteTrustConfigRequest, callback: google.cloud.certificatemanager.v1.CertificateManager.DeleteTrustConfigCallback): void;

                    /**
                     * Calls DeleteTrustConfig.
                     * @param request DeleteTrustConfigRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTrustConfig(request: google.cloud.certificatemanager.v1.IDeleteTrustConfigRequest): Promise<google.longrunning.Operation>;
                }

                namespace CertificateManager {

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|listCertificates}.
                     * @param error Error, if any
                     * @param [response] ListCertificatesResponse
                     */
                    type ListCertificatesCallback = (error: (Error|null), response?: google.cloud.certificatemanager.v1.ListCertificatesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|getCertificate}.
                     * @param error Error, if any
                     * @param [response] Certificate
                     */
                    type GetCertificateCallback = (error: (Error|null), response?: google.cloud.certificatemanager.v1.Certificate) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|createCertificate}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateCertificateCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|updateCertificate}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateCertificateCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|deleteCertificate}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteCertificateCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|listCertificateMaps}.
                     * @param error Error, if any
                     * @param [response] ListCertificateMapsResponse
                     */
                    type ListCertificateMapsCallback = (error: (Error|null), response?: google.cloud.certificatemanager.v1.ListCertificateMapsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|getCertificateMap}.
                     * @param error Error, if any
                     * @param [response] CertificateMap
                     */
                    type GetCertificateMapCallback = (error: (Error|null), response?: google.cloud.certificatemanager.v1.CertificateMap) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|createCertificateMap}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateCertificateMapCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|updateCertificateMap}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateCertificateMapCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|deleteCertificateMap}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteCertificateMapCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|listCertificateMapEntries}.
                     * @param error Error, if any
                     * @param [response] ListCertificateMapEntriesResponse
                     */
                    type ListCertificateMapEntriesCallback = (error: (Error|null), response?: google.cloud.certificatemanager.v1.ListCertificateMapEntriesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|getCertificateMapEntry}.
                     * @param error Error, if any
                     * @param [response] CertificateMapEntry
                     */
                    type GetCertificateMapEntryCallback = (error: (Error|null), response?: google.cloud.certificatemanager.v1.CertificateMapEntry) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|createCertificateMapEntry}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateCertificateMapEntryCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|updateCertificateMapEntry}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateCertificateMapEntryCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|deleteCertificateMapEntry}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteCertificateMapEntryCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|listDnsAuthorizations}.
                     * @param error Error, if any
                     * @param [response] ListDnsAuthorizationsResponse
                     */
                    type ListDnsAuthorizationsCallback = (error: (Error|null), response?: google.cloud.certificatemanager.v1.ListDnsAuthorizationsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|getDnsAuthorization}.
                     * @param error Error, if any
                     * @param [response] DnsAuthorization
                     */
                    type GetDnsAuthorizationCallback = (error: (Error|null), response?: google.cloud.certificatemanager.v1.DnsAuthorization) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|createDnsAuthorization}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateDnsAuthorizationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|updateDnsAuthorization}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateDnsAuthorizationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|deleteDnsAuthorization}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteDnsAuthorizationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|listCertificateIssuanceConfigs}.
                     * @param error Error, if any
                     * @param [response] ListCertificateIssuanceConfigsResponse
                     */
                    type ListCertificateIssuanceConfigsCallback = (error: (Error|null), response?: google.cloud.certificatemanager.v1.ListCertificateIssuanceConfigsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|getCertificateIssuanceConfig}.
                     * @param error Error, if any
                     * @param [response] CertificateIssuanceConfig
                     */
                    type GetCertificateIssuanceConfigCallback = (error: (Error|null), response?: google.cloud.certificatemanager.v1.CertificateIssuanceConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|createCertificateIssuanceConfig}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateCertificateIssuanceConfigCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|deleteCertificateIssuanceConfig}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteCertificateIssuanceConfigCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|listTrustConfigs}.
                     * @param error Error, if any
                     * @param [response] ListTrustConfigsResponse
                     */
                    type ListTrustConfigsCallback = (error: (Error|null), response?: google.cloud.certificatemanager.v1.ListTrustConfigsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|getTrustConfig}.
                     * @param error Error, if any
                     * @param [response] TrustConfig
                     */
                    type GetTrustConfigCallback = (error: (Error|null), response?: google.cloud.certificatemanager.v1.TrustConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|createTrustConfig}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateTrustConfigCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|updateTrustConfig}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateTrustConfigCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.certificatemanager.v1.CertificateManager|deleteTrustConfig}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteTrustConfigCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a ListCertificatesRequest. */
                interface IListCertificatesRequest {

                    /** ListCertificatesRequest parent */
                    parent?: (string|null);

                    /** ListCertificatesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListCertificatesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListCertificatesRequest filter */
                    filter?: (string|null);

                    /** ListCertificatesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListCertificatesRequest. */
                class ListCertificatesRequest implements IListCertificatesRequest {

                    /**
                     * Constructs a new ListCertificatesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IListCertificatesRequest);

                    /** ListCertificatesRequest parent. */
                    public parent: string;

                    /** ListCertificatesRequest pageSize. */
                    public pageSize: number;

                    /** ListCertificatesRequest pageToken. */
                    public pageToken: string;

                    /** ListCertificatesRequest filter. */
                    public filter: string;

                    /** ListCertificatesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListCertificatesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCertificatesRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IListCertificatesRequest): google.cloud.certificatemanager.v1.ListCertificatesRequest;

                    /**
                     * Encodes the specified ListCertificatesRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.ListCertificatesRequest.verify|verify} messages.
                     * @param message ListCertificatesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IListCertificatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCertificatesRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.ListCertificatesRequest.verify|verify} messages.
                     * @param message ListCertificatesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IListCertificatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCertificatesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCertificatesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.ListCertificatesRequest;

                    /**
                     * Decodes a ListCertificatesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCertificatesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.ListCertificatesRequest;

                    /**
                     * Verifies a ListCertificatesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCertificatesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCertificatesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.ListCertificatesRequest;

                    /**
                     * Creates a plain object from a ListCertificatesRequest message. Also converts values to other types if specified.
                     * @param message ListCertificatesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.ListCertificatesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCertificatesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCertificatesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCertificatesResponse. */
                interface IListCertificatesResponse {

                    /** ListCertificatesResponse certificates */
                    certificates?: (google.cloud.certificatemanager.v1.ICertificate[]|null);

                    /** ListCertificatesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListCertificatesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListCertificatesResponse. */
                class ListCertificatesResponse implements IListCertificatesResponse {

                    /**
                     * Constructs a new ListCertificatesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IListCertificatesResponse);

                    /** ListCertificatesResponse certificates. */
                    public certificates: google.cloud.certificatemanager.v1.ICertificate[];

                    /** ListCertificatesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListCertificatesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListCertificatesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCertificatesResponse instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IListCertificatesResponse): google.cloud.certificatemanager.v1.ListCertificatesResponse;

                    /**
                     * Encodes the specified ListCertificatesResponse message. Does not implicitly {@link google.cloud.certificatemanager.v1.ListCertificatesResponse.verify|verify} messages.
                     * @param message ListCertificatesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IListCertificatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCertificatesResponse message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.ListCertificatesResponse.verify|verify} messages.
                     * @param message ListCertificatesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IListCertificatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCertificatesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCertificatesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.ListCertificatesResponse;

                    /**
                     * Decodes a ListCertificatesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCertificatesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.ListCertificatesResponse;

                    /**
                     * Verifies a ListCertificatesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCertificatesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCertificatesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.ListCertificatesResponse;

                    /**
                     * Creates a plain object from a ListCertificatesResponse message. Also converts values to other types if specified.
                     * @param message ListCertificatesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.ListCertificatesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCertificatesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCertificatesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetCertificateRequest. */
                interface IGetCertificateRequest {

                    /** GetCertificateRequest name */
                    name?: (string|null);
                }

                /** Represents a GetCertificateRequest. */
                class GetCertificateRequest implements IGetCertificateRequest {

                    /**
                     * Constructs a new GetCertificateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IGetCertificateRequest);

                    /** GetCertificateRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetCertificateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCertificateRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IGetCertificateRequest): google.cloud.certificatemanager.v1.GetCertificateRequest;

                    /**
                     * Encodes the specified GetCertificateRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.GetCertificateRequest.verify|verify} messages.
                     * @param message GetCertificateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IGetCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCertificateRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.GetCertificateRequest.verify|verify} messages.
                     * @param message GetCertificateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IGetCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCertificateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCertificateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.GetCertificateRequest;

                    /**
                     * Decodes a GetCertificateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCertificateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.GetCertificateRequest;

                    /**
                     * Verifies a GetCertificateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCertificateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCertificateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.GetCertificateRequest;

                    /**
                     * Creates a plain object from a GetCertificateRequest message. Also converts values to other types if specified.
                     * @param message GetCertificateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.GetCertificateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCertificateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetCertificateRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateCertificateRequest. */
                interface ICreateCertificateRequest {

                    /** CreateCertificateRequest parent */
                    parent?: (string|null);

                    /** CreateCertificateRequest certificateId */
                    certificateId?: (string|null);

                    /** CreateCertificateRequest certificate */
                    certificate?: (google.cloud.certificatemanager.v1.ICertificate|null);
                }

                /** Represents a CreateCertificateRequest. */
                class CreateCertificateRequest implements ICreateCertificateRequest {

                    /**
                     * Constructs a new CreateCertificateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.ICreateCertificateRequest);

                    /** CreateCertificateRequest parent. */
                    public parent: string;

                    /** CreateCertificateRequest certificateId. */
                    public certificateId: string;

                    /** CreateCertificateRequest certificate. */
                    public certificate?: (google.cloud.certificatemanager.v1.ICertificate|null);

                    /**
                     * Creates a new CreateCertificateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateCertificateRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.ICreateCertificateRequest): google.cloud.certificatemanager.v1.CreateCertificateRequest;

                    /**
                     * Encodes the specified CreateCertificateRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.CreateCertificateRequest.verify|verify} messages.
                     * @param message CreateCertificateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.ICreateCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateCertificateRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.CreateCertificateRequest.verify|verify} messages.
                     * @param message CreateCertificateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.ICreateCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateCertificateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateCertificateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.CreateCertificateRequest;

                    /**
                     * Decodes a CreateCertificateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateCertificateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.CreateCertificateRequest;

                    /**
                     * Verifies a CreateCertificateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateCertificateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateCertificateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.CreateCertificateRequest;

                    /**
                     * Creates a plain object from a CreateCertificateRequest message. Also converts values to other types if specified.
                     * @param message CreateCertificateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.CreateCertificateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateCertificateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateCertificateRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateCertificateRequest. */
                interface IUpdateCertificateRequest {

                    /** UpdateCertificateRequest certificate */
                    certificate?: (google.cloud.certificatemanager.v1.ICertificate|null);

                    /** UpdateCertificateRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateCertificateRequest. */
                class UpdateCertificateRequest implements IUpdateCertificateRequest {

                    /**
                     * Constructs a new UpdateCertificateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IUpdateCertificateRequest);

                    /** UpdateCertificateRequest certificate. */
                    public certificate?: (google.cloud.certificatemanager.v1.ICertificate|null);

                    /** UpdateCertificateRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateCertificateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateCertificateRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IUpdateCertificateRequest): google.cloud.certificatemanager.v1.UpdateCertificateRequest;

                    /**
                     * Encodes the specified UpdateCertificateRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.UpdateCertificateRequest.verify|verify} messages.
                     * @param message UpdateCertificateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IUpdateCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateCertificateRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.UpdateCertificateRequest.verify|verify} messages.
                     * @param message UpdateCertificateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IUpdateCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateCertificateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateCertificateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.UpdateCertificateRequest;

                    /**
                     * Decodes an UpdateCertificateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateCertificateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.UpdateCertificateRequest;

                    /**
                     * Verifies an UpdateCertificateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateCertificateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateCertificateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.UpdateCertificateRequest;

                    /**
                     * Creates a plain object from an UpdateCertificateRequest message. Also converts values to other types if specified.
                     * @param message UpdateCertificateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.UpdateCertificateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateCertificateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateCertificateRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteCertificateRequest. */
                interface IDeleteCertificateRequest {

                    /** DeleteCertificateRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteCertificateRequest. */
                class DeleteCertificateRequest implements IDeleteCertificateRequest {

                    /**
                     * Constructs a new DeleteCertificateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IDeleteCertificateRequest);

                    /** DeleteCertificateRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteCertificateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteCertificateRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IDeleteCertificateRequest): google.cloud.certificatemanager.v1.DeleteCertificateRequest;

                    /**
                     * Encodes the specified DeleteCertificateRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.DeleteCertificateRequest.verify|verify} messages.
                     * @param message DeleteCertificateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IDeleteCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteCertificateRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.DeleteCertificateRequest.verify|verify} messages.
                     * @param message DeleteCertificateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IDeleteCertificateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteCertificateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteCertificateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.DeleteCertificateRequest;

                    /**
                     * Decodes a DeleteCertificateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteCertificateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.DeleteCertificateRequest;

                    /**
                     * Verifies a DeleteCertificateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteCertificateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteCertificateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.DeleteCertificateRequest;

                    /**
                     * Creates a plain object from a DeleteCertificateRequest message. Also converts values to other types if specified.
                     * @param message DeleteCertificateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.DeleteCertificateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteCertificateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteCertificateRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCertificateMapsRequest. */
                interface IListCertificateMapsRequest {

                    /** ListCertificateMapsRequest parent */
                    parent?: (string|null);

                    /** ListCertificateMapsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListCertificateMapsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListCertificateMapsRequest filter */
                    filter?: (string|null);

                    /** ListCertificateMapsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListCertificateMapsRequest. */
                class ListCertificateMapsRequest implements IListCertificateMapsRequest {

                    /**
                     * Constructs a new ListCertificateMapsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IListCertificateMapsRequest);

                    /** ListCertificateMapsRequest parent. */
                    public parent: string;

                    /** ListCertificateMapsRequest pageSize. */
                    public pageSize: number;

                    /** ListCertificateMapsRequest pageToken. */
                    public pageToken: string;

                    /** ListCertificateMapsRequest filter. */
                    public filter: string;

                    /** ListCertificateMapsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListCertificateMapsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCertificateMapsRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IListCertificateMapsRequest): google.cloud.certificatemanager.v1.ListCertificateMapsRequest;

                    /**
                     * Encodes the specified ListCertificateMapsRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.ListCertificateMapsRequest.verify|verify} messages.
                     * @param message ListCertificateMapsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IListCertificateMapsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCertificateMapsRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.ListCertificateMapsRequest.verify|verify} messages.
                     * @param message ListCertificateMapsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IListCertificateMapsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCertificateMapsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCertificateMapsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.ListCertificateMapsRequest;

                    /**
                     * Decodes a ListCertificateMapsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCertificateMapsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.ListCertificateMapsRequest;

                    /**
                     * Verifies a ListCertificateMapsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCertificateMapsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCertificateMapsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.ListCertificateMapsRequest;

                    /**
                     * Creates a plain object from a ListCertificateMapsRequest message. Also converts values to other types if specified.
                     * @param message ListCertificateMapsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.ListCertificateMapsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCertificateMapsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCertificateMapsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCertificateMapsResponse. */
                interface IListCertificateMapsResponse {

                    /** ListCertificateMapsResponse certificateMaps */
                    certificateMaps?: (google.cloud.certificatemanager.v1.ICertificateMap[]|null);

                    /** ListCertificateMapsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListCertificateMapsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListCertificateMapsResponse. */
                class ListCertificateMapsResponse implements IListCertificateMapsResponse {

                    /**
                     * Constructs a new ListCertificateMapsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IListCertificateMapsResponse);

                    /** ListCertificateMapsResponse certificateMaps. */
                    public certificateMaps: google.cloud.certificatemanager.v1.ICertificateMap[];

                    /** ListCertificateMapsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListCertificateMapsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListCertificateMapsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCertificateMapsResponse instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IListCertificateMapsResponse): google.cloud.certificatemanager.v1.ListCertificateMapsResponse;

                    /**
                     * Encodes the specified ListCertificateMapsResponse message. Does not implicitly {@link google.cloud.certificatemanager.v1.ListCertificateMapsResponse.verify|verify} messages.
                     * @param message ListCertificateMapsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IListCertificateMapsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCertificateMapsResponse message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.ListCertificateMapsResponse.verify|verify} messages.
                     * @param message ListCertificateMapsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IListCertificateMapsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCertificateMapsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCertificateMapsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.ListCertificateMapsResponse;

                    /**
                     * Decodes a ListCertificateMapsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCertificateMapsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.ListCertificateMapsResponse;

                    /**
                     * Verifies a ListCertificateMapsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCertificateMapsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCertificateMapsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.ListCertificateMapsResponse;

                    /**
                     * Creates a plain object from a ListCertificateMapsResponse message. Also converts values to other types if specified.
                     * @param message ListCertificateMapsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.ListCertificateMapsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCertificateMapsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCertificateMapsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetCertificateMapRequest. */
                interface IGetCertificateMapRequest {

                    /** GetCertificateMapRequest name */
                    name?: (string|null);
                }

                /** Represents a GetCertificateMapRequest. */
                class GetCertificateMapRequest implements IGetCertificateMapRequest {

                    /**
                     * Constructs a new GetCertificateMapRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IGetCertificateMapRequest);

                    /** GetCertificateMapRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetCertificateMapRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCertificateMapRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IGetCertificateMapRequest): google.cloud.certificatemanager.v1.GetCertificateMapRequest;

                    /**
                     * Encodes the specified GetCertificateMapRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.GetCertificateMapRequest.verify|verify} messages.
                     * @param message GetCertificateMapRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IGetCertificateMapRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCertificateMapRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.GetCertificateMapRequest.verify|verify} messages.
                     * @param message GetCertificateMapRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IGetCertificateMapRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCertificateMapRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCertificateMapRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.GetCertificateMapRequest;

                    /**
                     * Decodes a GetCertificateMapRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCertificateMapRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.GetCertificateMapRequest;

                    /**
                     * Verifies a GetCertificateMapRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCertificateMapRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCertificateMapRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.GetCertificateMapRequest;

                    /**
                     * Creates a plain object from a GetCertificateMapRequest message. Also converts values to other types if specified.
                     * @param message GetCertificateMapRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.GetCertificateMapRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCertificateMapRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetCertificateMapRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateCertificateMapRequest. */
                interface ICreateCertificateMapRequest {

                    /** CreateCertificateMapRequest parent */
                    parent?: (string|null);

                    /** CreateCertificateMapRequest certificateMapId */
                    certificateMapId?: (string|null);

                    /** CreateCertificateMapRequest certificateMap */
                    certificateMap?: (google.cloud.certificatemanager.v1.ICertificateMap|null);
                }

                /** Represents a CreateCertificateMapRequest. */
                class CreateCertificateMapRequest implements ICreateCertificateMapRequest {

                    /**
                     * Constructs a new CreateCertificateMapRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.ICreateCertificateMapRequest);

                    /** CreateCertificateMapRequest parent. */
                    public parent: string;

                    /** CreateCertificateMapRequest certificateMapId. */
                    public certificateMapId: string;

                    /** CreateCertificateMapRequest certificateMap. */
                    public certificateMap?: (google.cloud.certificatemanager.v1.ICertificateMap|null);

                    /**
                     * Creates a new CreateCertificateMapRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateCertificateMapRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.ICreateCertificateMapRequest): google.cloud.certificatemanager.v1.CreateCertificateMapRequest;

                    /**
                     * Encodes the specified CreateCertificateMapRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.CreateCertificateMapRequest.verify|verify} messages.
                     * @param message CreateCertificateMapRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.ICreateCertificateMapRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateCertificateMapRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.CreateCertificateMapRequest.verify|verify} messages.
                     * @param message CreateCertificateMapRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.ICreateCertificateMapRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateCertificateMapRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateCertificateMapRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.CreateCertificateMapRequest;

                    /**
                     * Decodes a CreateCertificateMapRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateCertificateMapRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.CreateCertificateMapRequest;

                    /**
                     * Verifies a CreateCertificateMapRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateCertificateMapRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateCertificateMapRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.CreateCertificateMapRequest;

                    /**
                     * Creates a plain object from a CreateCertificateMapRequest message. Also converts values to other types if specified.
                     * @param message CreateCertificateMapRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.CreateCertificateMapRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateCertificateMapRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateCertificateMapRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateCertificateMapRequest. */
                interface IUpdateCertificateMapRequest {

                    /** UpdateCertificateMapRequest certificateMap */
                    certificateMap?: (google.cloud.certificatemanager.v1.ICertificateMap|null);

                    /** UpdateCertificateMapRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateCertificateMapRequest. */
                class UpdateCertificateMapRequest implements IUpdateCertificateMapRequest {

                    /**
                     * Constructs a new UpdateCertificateMapRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IUpdateCertificateMapRequest);

                    /** UpdateCertificateMapRequest certificateMap. */
                    public certificateMap?: (google.cloud.certificatemanager.v1.ICertificateMap|null);

                    /** UpdateCertificateMapRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateCertificateMapRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateCertificateMapRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IUpdateCertificateMapRequest): google.cloud.certificatemanager.v1.UpdateCertificateMapRequest;

                    /**
                     * Encodes the specified UpdateCertificateMapRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.UpdateCertificateMapRequest.verify|verify} messages.
                     * @param message UpdateCertificateMapRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IUpdateCertificateMapRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateCertificateMapRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.UpdateCertificateMapRequest.verify|verify} messages.
                     * @param message UpdateCertificateMapRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IUpdateCertificateMapRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateCertificateMapRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateCertificateMapRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.UpdateCertificateMapRequest;

                    /**
                     * Decodes an UpdateCertificateMapRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateCertificateMapRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.UpdateCertificateMapRequest;

                    /**
                     * Verifies an UpdateCertificateMapRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateCertificateMapRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateCertificateMapRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.UpdateCertificateMapRequest;

                    /**
                     * Creates a plain object from an UpdateCertificateMapRequest message. Also converts values to other types if specified.
                     * @param message UpdateCertificateMapRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.UpdateCertificateMapRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateCertificateMapRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateCertificateMapRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteCertificateMapRequest. */
                interface IDeleteCertificateMapRequest {

                    /** DeleteCertificateMapRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteCertificateMapRequest. */
                class DeleteCertificateMapRequest implements IDeleteCertificateMapRequest {

                    /**
                     * Constructs a new DeleteCertificateMapRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IDeleteCertificateMapRequest);

                    /** DeleteCertificateMapRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteCertificateMapRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteCertificateMapRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IDeleteCertificateMapRequest): google.cloud.certificatemanager.v1.DeleteCertificateMapRequest;

                    /**
                     * Encodes the specified DeleteCertificateMapRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.DeleteCertificateMapRequest.verify|verify} messages.
                     * @param message DeleteCertificateMapRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IDeleteCertificateMapRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteCertificateMapRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.DeleteCertificateMapRequest.verify|verify} messages.
                     * @param message DeleteCertificateMapRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IDeleteCertificateMapRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteCertificateMapRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteCertificateMapRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.DeleteCertificateMapRequest;

                    /**
                     * Decodes a DeleteCertificateMapRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteCertificateMapRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.DeleteCertificateMapRequest;

                    /**
                     * Verifies a DeleteCertificateMapRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteCertificateMapRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteCertificateMapRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.DeleteCertificateMapRequest;

                    /**
                     * Creates a plain object from a DeleteCertificateMapRequest message. Also converts values to other types if specified.
                     * @param message DeleteCertificateMapRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.DeleteCertificateMapRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteCertificateMapRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteCertificateMapRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCertificateMapEntriesRequest. */
                interface IListCertificateMapEntriesRequest {

                    /** ListCertificateMapEntriesRequest parent */
                    parent?: (string|null);

                    /** ListCertificateMapEntriesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListCertificateMapEntriesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListCertificateMapEntriesRequest filter */
                    filter?: (string|null);

                    /** ListCertificateMapEntriesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListCertificateMapEntriesRequest. */
                class ListCertificateMapEntriesRequest implements IListCertificateMapEntriesRequest {

                    /**
                     * Constructs a new ListCertificateMapEntriesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IListCertificateMapEntriesRequest);

                    /** ListCertificateMapEntriesRequest parent. */
                    public parent: string;

                    /** ListCertificateMapEntriesRequest pageSize. */
                    public pageSize: number;

                    /** ListCertificateMapEntriesRequest pageToken. */
                    public pageToken: string;

                    /** ListCertificateMapEntriesRequest filter. */
                    public filter: string;

                    /** ListCertificateMapEntriesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListCertificateMapEntriesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCertificateMapEntriesRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IListCertificateMapEntriesRequest): google.cloud.certificatemanager.v1.ListCertificateMapEntriesRequest;

                    /**
                     * Encodes the specified ListCertificateMapEntriesRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.ListCertificateMapEntriesRequest.verify|verify} messages.
                     * @param message ListCertificateMapEntriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IListCertificateMapEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCertificateMapEntriesRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.ListCertificateMapEntriesRequest.verify|verify} messages.
                     * @param message ListCertificateMapEntriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IListCertificateMapEntriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCertificateMapEntriesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCertificateMapEntriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.ListCertificateMapEntriesRequest;

                    /**
                     * Decodes a ListCertificateMapEntriesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCertificateMapEntriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.ListCertificateMapEntriesRequest;

                    /**
                     * Verifies a ListCertificateMapEntriesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCertificateMapEntriesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCertificateMapEntriesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.ListCertificateMapEntriesRequest;

                    /**
                     * Creates a plain object from a ListCertificateMapEntriesRequest message. Also converts values to other types if specified.
                     * @param message ListCertificateMapEntriesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.ListCertificateMapEntriesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCertificateMapEntriesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCertificateMapEntriesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCertificateMapEntriesResponse. */
                interface IListCertificateMapEntriesResponse {

                    /** ListCertificateMapEntriesResponse certificateMapEntries */
                    certificateMapEntries?: (google.cloud.certificatemanager.v1.ICertificateMapEntry[]|null);

                    /** ListCertificateMapEntriesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListCertificateMapEntriesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListCertificateMapEntriesResponse. */
                class ListCertificateMapEntriesResponse implements IListCertificateMapEntriesResponse {

                    /**
                     * Constructs a new ListCertificateMapEntriesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IListCertificateMapEntriesResponse);

                    /** ListCertificateMapEntriesResponse certificateMapEntries. */
                    public certificateMapEntries: google.cloud.certificatemanager.v1.ICertificateMapEntry[];

                    /** ListCertificateMapEntriesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListCertificateMapEntriesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListCertificateMapEntriesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCertificateMapEntriesResponse instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IListCertificateMapEntriesResponse): google.cloud.certificatemanager.v1.ListCertificateMapEntriesResponse;

                    /**
                     * Encodes the specified ListCertificateMapEntriesResponse message. Does not implicitly {@link google.cloud.certificatemanager.v1.ListCertificateMapEntriesResponse.verify|verify} messages.
                     * @param message ListCertificateMapEntriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IListCertificateMapEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCertificateMapEntriesResponse message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.ListCertificateMapEntriesResponse.verify|verify} messages.
                     * @param message ListCertificateMapEntriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IListCertificateMapEntriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCertificateMapEntriesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCertificateMapEntriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.ListCertificateMapEntriesResponse;

                    /**
                     * Decodes a ListCertificateMapEntriesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCertificateMapEntriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.ListCertificateMapEntriesResponse;

                    /**
                     * Verifies a ListCertificateMapEntriesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCertificateMapEntriesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCertificateMapEntriesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.ListCertificateMapEntriesResponse;

                    /**
                     * Creates a plain object from a ListCertificateMapEntriesResponse message. Also converts values to other types if specified.
                     * @param message ListCertificateMapEntriesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.ListCertificateMapEntriesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCertificateMapEntriesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCertificateMapEntriesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetCertificateMapEntryRequest. */
                interface IGetCertificateMapEntryRequest {

                    /** GetCertificateMapEntryRequest name */
                    name?: (string|null);
                }

                /** Represents a GetCertificateMapEntryRequest. */
                class GetCertificateMapEntryRequest implements IGetCertificateMapEntryRequest {

                    /**
                     * Constructs a new GetCertificateMapEntryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IGetCertificateMapEntryRequest);

                    /** GetCertificateMapEntryRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetCertificateMapEntryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCertificateMapEntryRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IGetCertificateMapEntryRequest): google.cloud.certificatemanager.v1.GetCertificateMapEntryRequest;

                    /**
                     * Encodes the specified GetCertificateMapEntryRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.GetCertificateMapEntryRequest.verify|verify} messages.
                     * @param message GetCertificateMapEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IGetCertificateMapEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCertificateMapEntryRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.GetCertificateMapEntryRequest.verify|verify} messages.
                     * @param message GetCertificateMapEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IGetCertificateMapEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCertificateMapEntryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCertificateMapEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.GetCertificateMapEntryRequest;

                    /**
                     * Decodes a GetCertificateMapEntryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCertificateMapEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.GetCertificateMapEntryRequest;

                    /**
                     * Verifies a GetCertificateMapEntryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCertificateMapEntryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCertificateMapEntryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.GetCertificateMapEntryRequest;

                    /**
                     * Creates a plain object from a GetCertificateMapEntryRequest message. Also converts values to other types if specified.
                     * @param message GetCertificateMapEntryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.GetCertificateMapEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCertificateMapEntryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetCertificateMapEntryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateCertificateMapEntryRequest. */
                interface ICreateCertificateMapEntryRequest {

                    /** CreateCertificateMapEntryRequest parent */
                    parent?: (string|null);

                    /** CreateCertificateMapEntryRequest certificateMapEntryId */
                    certificateMapEntryId?: (string|null);

                    /** CreateCertificateMapEntryRequest certificateMapEntry */
                    certificateMapEntry?: (google.cloud.certificatemanager.v1.ICertificateMapEntry|null);
                }

                /** Represents a CreateCertificateMapEntryRequest. */
                class CreateCertificateMapEntryRequest implements ICreateCertificateMapEntryRequest {

                    /**
                     * Constructs a new CreateCertificateMapEntryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.ICreateCertificateMapEntryRequest);

                    /** CreateCertificateMapEntryRequest parent. */
                    public parent: string;

                    /** CreateCertificateMapEntryRequest certificateMapEntryId. */
                    public certificateMapEntryId: string;

                    /** CreateCertificateMapEntryRequest certificateMapEntry. */
                    public certificateMapEntry?: (google.cloud.certificatemanager.v1.ICertificateMapEntry|null);

                    /**
                     * Creates a new CreateCertificateMapEntryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateCertificateMapEntryRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.ICreateCertificateMapEntryRequest): google.cloud.certificatemanager.v1.CreateCertificateMapEntryRequest;

                    /**
                     * Encodes the specified CreateCertificateMapEntryRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.CreateCertificateMapEntryRequest.verify|verify} messages.
                     * @param message CreateCertificateMapEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.ICreateCertificateMapEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateCertificateMapEntryRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.CreateCertificateMapEntryRequest.verify|verify} messages.
                     * @param message CreateCertificateMapEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.ICreateCertificateMapEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateCertificateMapEntryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateCertificateMapEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.CreateCertificateMapEntryRequest;

                    /**
                     * Decodes a CreateCertificateMapEntryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateCertificateMapEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.CreateCertificateMapEntryRequest;

                    /**
                     * Verifies a CreateCertificateMapEntryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateCertificateMapEntryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateCertificateMapEntryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.CreateCertificateMapEntryRequest;

                    /**
                     * Creates a plain object from a CreateCertificateMapEntryRequest message. Also converts values to other types if specified.
                     * @param message CreateCertificateMapEntryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.CreateCertificateMapEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateCertificateMapEntryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateCertificateMapEntryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateCertificateMapEntryRequest. */
                interface IUpdateCertificateMapEntryRequest {

                    /** UpdateCertificateMapEntryRequest certificateMapEntry */
                    certificateMapEntry?: (google.cloud.certificatemanager.v1.ICertificateMapEntry|null);

                    /** UpdateCertificateMapEntryRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateCertificateMapEntryRequest. */
                class UpdateCertificateMapEntryRequest implements IUpdateCertificateMapEntryRequest {

                    /**
                     * Constructs a new UpdateCertificateMapEntryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IUpdateCertificateMapEntryRequest);

                    /** UpdateCertificateMapEntryRequest certificateMapEntry. */
                    public certificateMapEntry?: (google.cloud.certificatemanager.v1.ICertificateMapEntry|null);

                    /** UpdateCertificateMapEntryRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateCertificateMapEntryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateCertificateMapEntryRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IUpdateCertificateMapEntryRequest): google.cloud.certificatemanager.v1.UpdateCertificateMapEntryRequest;

                    /**
                     * Encodes the specified UpdateCertificateMapEntryRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.UpdateCertificateMapEntryRequest.verify|verify} messages.
                     * @param message UpdateCertificateMapEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IUpdateCertificateMapEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateCertificateMapEntryRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.UpdateCertificateMapEntryRequest.verify|verify} messages.
                     * @param message UpdateCertificateMapEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IUpdateCertificateMapEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateCertificateMapEntryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateCertificateMapEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.UpdateCertificateMapEntryRequest;

                    /**
                     * Decodes an UpdateCertificateMapEntryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateCertificateMapEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.UpdateCertificateMapEntryRequest;

                    /**
                     * Verifies an UpdateCertificateMapEntryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateCertificateMapEntryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateCertificateMapEntryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.UpdateCertificateMapEntryRequest;

                    /**
                     * Creates a plain object from an UpdateCertificateMapEntryRequest message. Also converts values to other types if specified.
                     * @param message UpdateCertificateMapEntryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.UpdateCertificateMapEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateCertificateMapEntryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateCertificateMapEntryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteCertificateMapEntryRequest. */
                interface IDeleteCertificateMapEntryRequest {

                    /** DeleteCertificateMapEntryRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteCertificateMapEntryRequest. */
                class DeleteCertificateMapEntryRequest implements IDeleteCertificateMapEntryRequest {

                    /**
                     * Constructs a new DeleteCertificateMapEntryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IDeleteCertificateMapEntryRequest);

                    /** DeleteCertificateMapEntryRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteCertificateMapEntryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteCertificateMapEntryRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IDeleteCertificateMapEntryRequest): google.cloud.certificatemanager.v1.DeleteCertificateMapEntryRequest;

                    /**
                     * Encodes the specified DeleteCertificateMapEntryRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.DeleteCertificateMapEntryRequest.verify|verify} messages.
                     * @param message DeleteCertificateMapEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IDeleteCertificateMapEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteCertificateMapEntryRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.DeleteCertificateMapEntryRequest.verify|verify} messages.
                     * @param message DeleteCertificateMapEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IDeleteCertificateMapEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteCertificateMapEntryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteCertificateMapEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.DeleteCertificateMapEntryRequest;

                    /**
                     * Decodes a DeleteCertificateMapEntryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteCertificateMapEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.DeleteCertificateMapEntryRequest;

                    /**
                     * Verifies a DeleteCertificateMapEntryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteCertificateMapEntryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteCertificateMapEntryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.DeleteCertificateMapEntryRequest;

                    /**
                     * Creates a plain object from a DeleteCertificateMapEntryRequest message. Also converts values to other types if specified.
                     * @param message DeleteCertificateMapEntryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.DeleteCertificateMapEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteCertificateMapEntryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteCertificateMapEntryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDnsAuthorizationsRequest. */
                interface IListDnsAuthorizationsRequest {

                    /** ListDnsAuthorizationsRequest parent */
                    parent?: (string|null);

                    /** ListDnsAuthorizationsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListDnsAuthorizationsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListDnsAuthorizationsRequest filter */
                    filter?: (string|null);

                    /** ListDnsAuthorizationsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListDnsAuthorizationsRequest. */
                class ListDnsAuthorizationsRequest implements IListDnsAuthorizationsRequest {

                    /**
                     * Constructs a new ListDnsAuthorizationsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IListDnsAuthorizationsRequest);

                    /** ListDnsAuthorizationsRequest parent. */
                    public parent: string;

                    /** ListDnsAuthorizationsRequest pageSize. */
                    public pageSize: number;

                    /** ListDnsAuthorizationsRequest pageToken. */
                    public pageToken: string;

                    /** ListDnsAuthorizationsRequest filter. */
                    public filter: string;

                    /** ListDnsAuthorizationsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListDnsAuthorizationsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDnsAuthorizationsRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IListDnsAuthorizationsRequest): google.cloud.certificatemanager.v1.ListDnsAuthorizationsRequest;

                    /**
                     * Encodes the specified ListDnsAuthorizationsRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.ListDnsAuthorizationsRequest.verify|verify} messages.
                     * @param message ListDnsAuthorizationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IListDnsAuthorizationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDnsAuthorizationsRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.ListDnsAuthorizationsRequest.verify|verify} messages.
                     * @param message ListDnsAuthorizationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IListDnsAuthorizationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDnsAuthorizationsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDnsAuthorizationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.ListDnsAuthorizationsRequest;

                    /**
                     * Decodes a ListDnsAuthorizationsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDnsAuthorizationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.ListDnsAuthorizationsRequest;

                    /**
                     * Verifies a ListDnsAuthorizationsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDnsAuthorizationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDnsAuthorizationsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.ListDnsAuthorizationsRequest;

                    /**
                     * Creates a plain object from a ListDnsAuthorizationsRequest message. Also converts values to other types if specified.
                     * @param message ListDnsAuthorizationsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.ListDnsAuthorizationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDnsAuthorizationsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDnsAuthorizationsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDnsAuthorizationsResponse. */
                interface IListDnsAuthorizationsResponse {

                    /** ListDnsAuthorizationsResponse dnsAuthorizations */
                    dnsAuthorizations?: (google.cloud.certificatemanager.v1.IDnsAuthorization[]|null);

                    /** ListDnsAuthorizationsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListDnsAuthorizationsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListDnsAuthorizationsResponse. */
                class ListDnsAuthorizationsResponse implements IListDnsAuthorizationsResponse {

                    /**
                     * Constructs a new ListDnsAuthorizationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IListDnsAuthorizationsResponse);

                    /** ListDnsAuthorizationsResponse dnsAuthorizations. */
                    public dnsAuthorizations: google.cloud.certificatemanager.v1.IDnsAuthorization[];

                    /** ListDnsAuthorizationsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListDnsAuthorizationsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListDnsAuthorizationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDnsAuthorizationsResponse instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IListDnsAuthorizationsResponse): google.cloud.certificatemanager.v1.ListDnsAuthorizationsResponse;

                    /**
                     * Encodes the specified ListDnsAuthorizationsResponse message. Does not implicitly {@link google.cloud.certificatemanager.v1.ListDnsAuthorizationsResponse.verify|verify} messages.
                     * @param message ListDnsAuthorizationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IListDnsAuthorizationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDnsAuthorizationsResponse message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.ListDnsAuthorizationsResponse.verify|verify} messages.
                     * @param message ListDnsAuthorizationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IListDnsAuthorizationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDnsAuthorizationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDnsAuthorizationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.ListDnsAuthorizationsResponse;

                    /**
                     * Decodes a ListDnsAuthorizationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDnsAuthorizationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.ListDnsAuthorizationsResponse;

                    /**
                     * Verifies a ListDnsAuthorizationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDnsAuthorizationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDnsAuthorizationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.ListDnsAuthorizationsResponse;

                    /**
                     * Creates a plain object from a ListDnsAuthorizationsResponse message. Also converts values to other types if specified.
                     * @param message ListDnsAuthorizationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.ListDnsAuthorizationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDnsAuthorizationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDnsAuthorizationsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetDnsAuthorizationRequest. */
                interface IGetDnsAuthorizationRequest {

                    /** GetDnsAuthorizationRequest name */
                    name?: (string|null);
                }

                /** Represents a GetDnsAuthorizationRequest. */
                class GetDnsAuthorizationRequest implements IGetDnsAuthorizationRequest {

                    /**
                     * Constructs a new GetDnsAuthorizationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IGetDnsAuthorizationRequest);

                    /** GetDnsAuthorizationRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetDnsAuthorizationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetDnsAuthorizationRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IGetDnsAuthorizationRequest): google.cloud.certificatemanager.v1.GetDnsAuthorizationRequest;

                    /**
                     * Encodes the specified GetDnsAuthorizationRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.GetDnsAuthorizationRequest.verify|verify} messages.
                     * @param message GetDnsAuthorizationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IGetDnsAuthorizationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetDnsAuthorizationRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.GetDnsAuthorizationRequest.verify|verify} messages.
                     * @param message GetDnsAuthorizationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IGetDnsAuthorizationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetDnsAuthorizationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetDnsAuthorizationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.GetDnsAuthorizationRequest;

                    /**
                     * Decodes a GetDnsAuthorizationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetDnsAuthorizationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.GetDnsAuthorizationRequest;

                    /**
                     * Verifies a GetDnsAuthorizationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetDnsAuthorizationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetDnsAuthorizationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.GetDnsAuthorizationRequest;

                    /**
                     * Creates a plain object from a GetDnsAuthorizationRequest message. Also converts values to other types if specified.
                     * @param message GetDnsAuthorizationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.GetDnsAuthorizationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetDnsAuthorizationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetDnsAuthorizationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateDnsAuthorizationRequest. */
                interface ICreateDnsAuthorizationRequest {

                    /** CreateDnsAuthorizationRequest parent */
                    parent?: (string|null);

                    /** CreateDnsAuthorizationRequest dnsAuthorizationId */
                    dnsAuthorizationId?: (string|null);

                    /** CreateDnsAuthorizationRequest dnsAuthorization */
                    dnsAuthorization?: (google.cloud.certificatemanager.v1.IDnsAuthorization|null);
                }

                /** Represents a CreateDnsAuthorizationRequest. */
                class CreateDnsAuthorizationRequest implements ICreateDnsAuthorizationRequest {

                    /**
                     * Constructs a new CreateDnsAuthorizationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.ICreateDnsAuthorizationRequest);

                    /** CreateDnsAuthorizationRequest parent. */
                    public parent: string;

                    /** CreateDnsAuthorizationRequest dnsAuthorizationId. */
                    public dnsAuthorizationId: string;

                    /** CreateDnsAuthorizationRequest dnsAuthorization. */
                    public dnsAuthorization?: (google.cloud.certificatemanager.v1.IDnsAuthorization|null);

                    /**
                     * Creates a new CreateDnsAuthorizationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateDnsAuthorizationRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.ICreateDnsAuthorizationRequest): google.cloud.certificatemanager.v1.CreateDnsAuthorizationRequest;

                    /**
                     * Encodes the specified CreateDnsAuthorizationRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.CreateDnsAuthorizationRequest.verify|verify} messages.
                     * @param message CreateDnsAuthorizationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.ICreateDnsAuthorizationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateDnsAuthorizationRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.CreateDnsAuthorizationRequest.verify|verify} messages.
                     * @param message CreateDnsAuthorizationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.ICreateDnsAuthorizationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateDnsAuthorizationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateDnsAuthorizationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.CreateDnsAuthorizationRequest;

                    /**
                     * Decodes a CreateDnsAuthorizationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateDnsAuthorizationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.CreateDnsAuthorizationRequest;

                    /**
                     * Verifies a CreateDnsAuthorizationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateDnsAuthorizationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateDnsAuthorizationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.CreateDnsAuthorizationRequest;

                    /**
                     * Creates a plain object from a CreateDnsAuthorizationRequest message. Also converts values to other types if specified.
                     * @param message CreateDnsAuthorizationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.CreateDnsAuthorizationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateDnsAuthorizationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateDnsAuthorizationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateDnsAuthorizationRequest. */
                interface IUpdateDnsAuthorizationRequest {

                    /** UpdateDnsAuthorizationRequest dnsAuthorization */
                    dnsAuthorization?: (google.cloud.certificatemanager.v1.IDnsAuthorization|null);

                    /** UpdateDnsAuthorizationRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateDnsAuthorizationRequest. */
                class UpdateDnsAuthorizationRequest implements IUpdateDnsAuthorizationRequest {

                    /**
                     * Constructs a new UpdateDnsAuthorizationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IUpdateDnsAuthorizationRequest);

                    /** UpdateDnsAuthorizationRequest dnsAuthorization. */
                    public dnsAuthorization?: (google.cloud.certificatemanager.v1.IDnsAuthorization|null);

                    /** UpdateDnsAuthorizationRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateDnsAuthorizationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateDnsAuthorizationRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IUpdateDnsAuthorizationRequest): google.cloud.certificatemanager.v1.UpdateDnsAuthorizationRequest;

                    /**
                     * Encodes the specified UpdateDnsAuthorizationRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.UpdateDnsAuthorizationRequest.verify|verify} messages.
                     * @param message UpdateDnsAuthorizationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IUpdateDnsAuthorizationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateDnsAuthorizationRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.UpdateDnsAuthorizationRequest.verify|verify} messages.
                     * @param message UpdateDnsAuthorizationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IUpdateDnsAuthorizationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateDnsAuthorizationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateDnsAuthorizationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.UpdateDnsAuthorizationRequest;

                    /**
                     * Decodes an UpdateDnsAuthorizationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateDnsAuthorizationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.UpdateDnsAuthorizationRequest;

                    /**
                     * Verifies an UpdateDnsAuthorizationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateDnsAuthorizationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateDnsAuthorizationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.UpdateDnsAuthorizationRequest;

                    /**
                     * Creates a plain object from an UpdateDnsAuthorizationRequest message. Also converts values to other types if specified.
                     * @param message UpdateDnsAuthorizationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.UpdateDnsAuthorizationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateDnsAuthorizationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateDnsAuthorizationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteDnsAuthorizationRequest. */
                interface IDeleteDnsAuthorizationRequest {

                    /** DeleteDnsAuthorizationRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteDnsAuthorizationRequest. */
                class DeleteDnsAuthorizationRequest implements IDeleteDnsAuthorizationRequest {

                    /**
                     * Constructs a new DeleteDnsAuthorizationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IDeleteDnsAuthorizationRequest);

                    /** DeleteDnsAuthorizationRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteDnsAuthorizationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteDnsAuthorizationRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IDeleteDnsAuthorizationRequest): google.cloud.certificatemanager.v1.DeleteDnsAuthorizationRequest;

                    /**
                     * Encodes the specified DeleteDnsAuthorizationRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.DeleteDnsAuthorizationRequest.verify|verify} messages.
                     * @param message DeleteDnsAuthorizationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IDeleteDnsAuthorizationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteDnsAuthorizationRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.DeleteDnsAuthorizationRequest.verify|verify} messages.
                     * @param message DeleteDnsAuthorizationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IDeleteDnsAuthorizationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteDnsAuthorizationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteDnsAuthorizationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.DeleteDnsAuthorizationRequest;

                    /**
                     * Decodes a DeleteDnsAuthorizationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteDnsAuthorizationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.DeleteDnsAuthorizationRequest;

                    /**
                     * Verifies a DeleteDnsAuthorizationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteDnsAuthorizationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteDnsAuthorizationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.DeleteDnsAuthorizationRequest;

                    /**
                     * Creates a plain object from a DeleteDnsAuthorizationRequest message. Also converts values to other types if specified.
                     * @param message DeleteDnsAuthorizationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.DeleteDnsAuthorizationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteDnsAuthorizationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteDnsAuthorizationRequest
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
                    constructor(properties?: google.cloud.certificatemanager.v1.IOperationMetadata);

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
                    public static create(properties?: google.cloud.certificatemanager.v1.IOperationMetadata): google.cloud.certificatemanager.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.certificatemanager.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a Certificate. */
                interface ICertificate {

                    /** Certificate name */
                    name?: (string|null);

                    /** Certificate description */
                    description?: (string|null);

                    /** Certificate createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Certificate updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Certificate labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Certificate selfManaged */
                    selfManaged?: (google.cloud.certificatemanager.v1.Certificate.ISelfManagedCertificate|null);

                    /** Certificate managed */
                    managed?: (google.cloud.certificatemanager.v1.Certificate.IManagedCertificate|null);

                    /** Certificate sanDnsnames */
                    sanDnsnames?: (string[]|null);

                    /** Certificate pemCertificate */
                    pemCertificate?: (string|null);

                    /** Certificate expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);

                    /** Certificate scope */
                    scope?: (google.cloud.certificatemanager.v1.Certificate.Scope|keyof typeof google.cloud.certificatemanager.v1.Certificate.Scope|null);
                }

                /** Represents a Certificate. */
                class Certificate implements ICertificate {

                    /**
                     * Constructs a new Certificate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.ICertificate);

                    /** Certificate name. */
                    public name: string;

                    /** Certificate description. */
                    public description: string;

                    /** Certificate createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Certificate updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Certificate labels. */
                    public labels: { [k: string]: string };

                    /** Certificate selfManaged. */
                    public selfManaged?: (google.cloud.certificatemanager.v1.Certificate.ISelfManagedCertificate|null);

                    /** Certificate managed. */
                    public managed?: (google.cloud.certificatemanager.v1.Certificate.IManagedCertificate|null);

                    /** Certificate sanDnsnames. */
                    public sanDnsnames: string[];

                    /** Certificate pemCertificate. */
                    public pemCertificate: string;

                    /** Certificate expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /** Certificate scope. */
                    public scope: (google.cloud.certificatemanager.v1.Certificate.Scope|keyof typeof google.cloud.certificatemanager.v1.Certificate.Scope);

                    /** Certificate type. */
                    public type?: ("selfManaged"|"managed");

                    /**
                     * Creates a new Certificate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Certificate instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.ICertificate): google.cloud.certificatemanager.v1.Certificate;

                    /**
                     * Encodes the specified Certificate message. Does not implicitly {@link google.cloud.certificatemanager.v1.Certificate.verify|verify} messages.
                     * @param message Certificate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.ICertificate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Certificate message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.Certificate.verify|verify} messages.
                     * @param message Certificate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.ICertificate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Certificate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Certificate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.Certificate;

                    /**
                     * Decodes a Certificate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Certificate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.Certificate;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.Certificate;

                    /**
                     * Creates a plain object from a Certificate message. Also converts values to other types if specified.
                     * @param message Certificate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.Certificate, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                namespace Certificate {

                    /** Properties of a SelfManagedCertificate. */
                    interface ISelfManagedCertificate {

                        /** SelfManagedCertificate pemCertificate */
                        pemCertificate?: (string|null);

                        /** SelfManagedCertificate pemPrivateKey */
                        pemPrivateKey?: (string|null);
                    }

                    /** Represents a SelfManagedCertificate. */
                    class SelfManagedCertificate implements ISelfManagedCertificate {

                        /**
                         * Constructs a new SelfManagedCertificate.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.certificatemanager.v1.Certificate.ISelfManagedCertificate);

                        /** SelfManagedCertificate pemCertificate. */
                        public pemCertificate: string;

                        /** SelfManagedCertificate pemPrivateKey. */
                        public pemPrivateKey: string;

                        /**
                         * Creates a new SelfManagedCertificate instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SelfManagedCertificate instance
                         */
                        public static create(properties?: google.cloud.certificatemanager.v1.Certificate.ISelfManagedCertificate): google.cloud.certificatemanager.v1.Certificate.SelfManagedCertificate;

                        /**
                         * Encodes the specified SelfManagedCertificate message. Does not implicitly {@link google.cloud.certificatemanager.v1.Certificate.SelfManagedCertificate.verify|verify} messages.
                         * @param message SelfManagedCertificate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.certificatemanager.v1.Certificate.ISelfManagedCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SelfManagedCertificate message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.Certificate.SelfManagedCertificate.verify|verify} messages.
                         * @param message SelfManagedCertificate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.certificatemanager.v1.Certificate.ISelfManagedCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SelfManagedCertificate message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SelfManagedCertificate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.Certificate.SelfManagedCertificate;

                        /**
                         * Decodes a SelfManagedCertificate message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SelfManagedCertificate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.Certificate.SelfManagedCertificate;

                        /**
                         * Verifies a SelfManagedCertificate message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SelfManagedCertificate message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SelfManagedCertificate
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.Certificate.SelfManagedCertificate;

                        /**
                         * Creates a plain object from a SelfManagedCertificate message. Also converts values to other types if specified.
                         * @param message SelfManagedCertificate
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.certificatemanager.v1.Certificate.SelfManagedCertificate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SelfManagedCertificate to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SelfManagedCertificate
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ManagedCertificate. */
                    interface IManagedCertificate {

                        /** ManagedCertificate domains */
                        domains?: (string[]|null);

                        /** ManagedCertificate dnsAuthorizations */
                        dnsAuthorizations?: (string[]|null);

                        /** ManagedCertificate issuanceConfig */
                        issuanceConfig?: (string|null);

                        /** ManagedCertificate state */
                        state?: (google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.State|keyof typeof google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.State|null);

                        /** ManagedCertificate provisioningIssue */
                        provisioningIssue?: (google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.IProvisioningIssue|null);

                        /** ManagedCertificate authorizationAttemptInfo */
                        authorizationAttemptInfo?: (google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.IAuthorizationAttemptInfo[]|null);
                    }

                    /** Represents a ManagedCertificate. */
                    class ManagedCertificate implements IManagedCertificate {

                        /**
                         * Constructs a new ManagedCertificate.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.certificatemanager.v1.Certificate.IManagedCertificate);

                        /** ManagedCertificate domains. */
                        public domains: string[];

                        /** ManagedCertificate dnsAuthorizations. */
                        public dnsAuthorizations: string[];

                        /** ManagedCertificate issuanceConfig. */
                        public issuanceConfig: string;

                        /** ManagedCertificate state. */
                        public state: (google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.State|keyof typeof google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.State);

                        /** ManagedCertificate provisioningIssue. */
                        public provisioningIssue?: (google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.IProvisioningIssue|null);

                        /** ManagedCertificate authorizationAttemptInfo. */
                        public authorizationAttemptInfo: google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.IAuthorizationAttemptInfo[];

                        /**
                         * Creates a new ManagedCertificate instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ManagedCertificate instance
                         */
                        public static create(properties?: google.cloud.certificatemanager.v1.Certificate.IManagedCertificate): google.cloud.certificatemanager.v1.Certificate.ManagedCertificate;

                        /**
                         * Encodes the specified ManagedCertificate message. Does not implicitly {@link google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.verify|verify} messages.
                         * @param message ManagedCertificate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.certificatemanager.v1.Certificate.IManagedCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ManagedCertificate message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.verify|verify} messages.
                         * @param message ManagedCertificate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.certificatemanager.v1.Certificate.IManagedCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ManagedCertificate message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ManagedCertificate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.Certificate.ManagedCertificate;

                        /**
                         * Decodes a ManagedCertificate message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ManagedCertificate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.Certificate.ManagedCertificate;

                        /**
                         * Verifies a ManagedCertificate message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ManagedCertificate message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ManagedCertificate
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.Certificate.ManagedCertificate;

                        /**
                         * Creates a plain object from a ManagedCertificate message. Also converts values to other types if specified.
                         * @param message ManagedCertificate
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.certificatemanager.v1.Certificate.ManagedCertificate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ManagedCertificate to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ManagedCertificate
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ManagedCertificate {

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            PROVISIONING = 1,
                            FAILED = 2,
                            ACTIVE = 3
                        }

                        /** Properties of a ProvisioningIssue. */
                        interface IProvisioningIssue {

                            /** ProvisioningIssue reason */
                            reason?: (google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.ProvisioningIssue.Reason|keyof typeof google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.ProvisioningIssue.Reason|null);

                            /** ProvisioningIssue details */
                            details?: (string|null);
                        }

                        /** Represents a ProvisioningIssue. */
                        class ProvisioningIssue implements IProvisioningIssue {

                            /**
                             * Constructs a new ProvisioningIssue.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.IProvisioningIssue);

                            /** ProvisioningIssue reason. */
                            public reason: (google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.ProvisioningIssue.Reason|keyof typeof google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.ProvisioningIssue.Reason);

                            /** ProvisioningIssue details. */
                            public details: string;

                            /**
                             * Creates a new ProvisioningIssue instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ProvisioningIssue instance
                             */
                            public static create(properties?: google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.IProvisioningIssue): google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.ProvisioningIssue;

                            /**
                             * Encodes the specified ProvisioningIssue message. Does not implicitly {@link google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.ProvisioningIssue.verify|verify} messages.
                             * @param message ProvisioningIssue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.IProvisioningIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ProvisioningIssue message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.ProvisioningIssue.verify|verify} messages.
                             * @param message ProvisioningIssue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.IProvisioningIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ProvisioningIssue message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ProvisioningIssue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.ProvisioningIssue;

                            /**
                             * Decodes a ProvisioningIssue message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ProvisioningIssue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.ProvisioningIssue;

                            /**
                             * Verifies a ProvisioningIssue message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ProvisioningIssue message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ProvisioningIssue
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.ProvisioningIssue;

                            /**
                             * Creates a plain object from a ProvisioningIssue message. Also converts values to other types if specified.
                             * @param message ProvisioningIssue
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.ProvisioningIssue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ProvisioningIssue to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ProvisioningIssue
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace ProvisioningIssue {

                            /** Reason enum. */
                            enum Reason {
                                REASON_UNSPECIFIED = 0,
                                AUTHORIZATION_ISSUE = 1,
                                RATE_LIMITED = 2
                            }
                        }

                        /** Properties of an AuthorizationAttemptInfo. */
                        interface IAuthorizationAttemptInfo {

                            /** AuthorizationAttemptInfo domain */
                            domain?: (string|null);

                            /** AuthorizationAttemptInfo state */
                            state?: (google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo.State|keyof typeof google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo.State|null);

                            /** AuthorizationAttemptInfo failureReason */
                            failureReason?: (google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo.FailureReason|keyof typeof google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo.FailureReason|null);

                            /** AuthorizationAttemptInfo details */
                            details?: (string|null);
                        }

                        /** Represents an AuthorizationAttemptInfo. */
                        class AuthorizationAttemptInfo implements IAuthorizationAttemptInfo {

                            /**
                             * Constructs a new AuthorizationAttemptInfo.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.IAuthorizationAttemptInfo);

                            /** AuthorizationAttemptInfo domain. */
                            public domain: string;

                            /** AuthorizationAttemptInfo state. */
                            public state: (google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo.State|keyof typeof google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo.State);

                            /** AuthorizationAttemptInfo failureReason. */
                            public failureReason: (google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo.FailureReason|keyof typeof google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo.FailureReason);

                            /** AuthorizationAttemptInfo details. */
                            public details: string;

                            /**
                             * Creates a new AuthorizationAttemptInfo instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AuthorizationAttemptInfo instance
                             */
                            public static create(properties?: google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.IAuthorizationAttemptInfo): google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo;

                            /**
                             * Encodes the specified AuthorizationAttemptInfo message. Does not implicitly {@link google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo.verify|verify} messages.
                             * @param message AuthorizationAttemptInfo message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.IAuthorizationAttemptInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AuthorizationAttemptInfo message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo.verify|verify} messages.
                             * @param message AuthorizationAttemptInfo message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.IAuthorizationAttemptInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AuthorizationAttemptInfo message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AuthorizationAttemptInfo
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo;

                            /**
                             * Decodes an AuthorizationAttemptInfo message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AuthorizationAttemptInfo
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo;

                            /**
                             * Verifies an AuthorizationAttemptInfo message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AuthorizationAttemptInfo message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AuthorizationAttemptInfo
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo;

                            /**
                             * Creates a plain object from an AuthorizationAttemptInfo message. Also converts values to other types if specified.
                             * @param message AuthorizationAttemptInfo
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.certificatemanager.v1.Certificate.ManagedCertificate.AuthorizationAttemptInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AuthorizationAttemptInfo to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AuthorizationAttemptInfo
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace AuthorizationAttemptInfo {

                            /** State enum. */
                            enum State {
                                STATE_UNSPECIFIED = 0,
                                AUTHORIZING = 1,
                                AUTHORIZED = 6,
                                FAILED = 7
                            }

                            /** FailureReason enum. */
                            enum FailureReason {
                                FAILURE_REASON_UNSPECIFIED = 0,
                                CONFIG = 1,
                                CAA = 2,
                                RATE_LIMITED = 3
                            }
                        }
                    }

                    /** Scope enum. */
                    enum Scope {
                        DEFAULT = 0,
                        EDGE_CACHE = 1,
                        ALL_REGIONS = 2
                    }
                }

                /** Properties of a CertificateMap. */
                interface ICertificateMap {

                    /** CertificateMap name */
                    name?: (string|null);

                    /** CertificateMap description */
                    description?: (string|null);

                    /** CertificateMap createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** CertificateMap updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** CertificateMap labels */
                    labels?: ({ [k: string]: string }|null);

                    /** CertificateMap gclbTargets */
                    gclbTargets?: (google.cloud.certificatemanager.v1.CertificateMap.IGclbTarget[]|null);
                }

                /** Represents a CertificateMap. */
                class CertificateMap implements ICertificateMap {

                    /**
                     * Constructs a new CertificateMap.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.ICertificateMap);

                    /** CertificateMap name. */
                    public name: string;

                    /** CertificateMap description. */
                    public description: string;

                    /** CertificateMap createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** CertificateMap updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** CertificateMap labels. */
                    public labels: { [k: string]: string };

                    /** CertificateMap gclbTargets. */
                    public gclbTargets: google.cloud.certificatemanager.v1.CertificateMap.IGclbTarget[];

                    /**
                     * Creates a new CertificateMap instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CertificateMap instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.ICertificateMap): google.cloud.certificatemanager.v1.CertificateMap;

                    /**
                     * Encodes the specified CertificateMap message. Does not implicitly {@link google.cloud.certificatemanager.v1.CertificateMap.verify|verify} messages.
                     * @param message CertificateMap message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.ICertificateMap, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CertificateMap message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.CertificateMap.verify|verify} messages.
                     * @param message CertificateMap message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.ICertificateMap, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CertificateMap message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CertificateMap
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.CertificateMap;

                    /**
                     * Decodes a CertificateMap message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CertificateMap
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.CertificateMap;

                    /**
                     * Verifies a CertificateMap message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CertificateMap message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CertificateMap
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.CertificateMap;

                    /**
                     * Creates a plain object from a CertificateMap message. Also converts values to other types if specified.
                     * @param message CertificateMap
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.CertificateMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CertificateMap to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CertificateMap
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CertificateMap {

                    /** Properties of a GclbTarget. */
                    interface IGclbTarget {

                        /** GclbTarget targetHttpsProxy */
                        targetHttpsProxy?: (string|null);

                        /** GclbTarget targetSslProxy */
                        targetSslProxy?: (string|null);

                        /** GclbTarget ipConfigs */
                        ipConfigs?: (google.cloud.certificatemanager.v1.CertificateMap.GclbTarget.IIpConfig[]|null);
                    }

                    /** Represents a GclbTarget. */
                    class GclbTarget implements IGclbTarget {

                        /**
                         * Constructs a new GclbTarget.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.certificatemanager.v1.CertificateMap.IGclbTarget);

                        /** GclbTarget targetHttpsProxy. */
                        public targetHttpsProxy?: (string|null);

                        /** GclbTarget targetSslProxy. */
                        public targetSslProxy?: (string|null);

                        /** GclbTarget ipConfigs. */
                        public ipConfigs: google.cloud.certificatemanager.v1.CertificateMap.GclbTarget.IIpConfig[];

                        /** GclbTarget targetProxy. */
                        public targetProxy?: ("targetHttpsProxy"|"targetSslProxy");

                        /**
                         * Creates a new GclbTarget instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GclbTarget instance
                         */
                        public static create(properties?: google.cloud.certificatemanager.v1.CertificateMap.IGclbTarget): google.cloud.certificatemanager.v1.CertificateMap.GclbTarget;

                        /**
                         * Encodes the specified GclbTarget message. Does not implicitly {@link google.cloud.certificatemanager.v1.CertificateMap.GclbTarget.verify|verify} messages.
                         * @param message GclbTarget message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.certificatemanager.v1.CertificateMap.IGclbTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GclbTarget message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.CertificateMap.GclbTarget.verify|verify} messages.
                         * @param message GclbTarget message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.certificatemanager.v1.CertificateMap.IGclbTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GclbTarget message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GclbTarget
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.CertificateMap.GclbTarget;

                        /**
                         * Decodes a GclbTarget message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GclbTarget
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.CertificateMap.GclbTarget;

                        /**
                         * Verifies a GclbTarget message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GclbTarget message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GclbTarget
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.CertificateMap.GclbTarget;

                        /**
                         * Creates a plain object from a GclbTarget message. Also converts values to other types if specified.
                         * @param message GclbTarget
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.certificatemanager.v1.CertificateMap.GclbTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GclbTarget to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GclbTarget
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace GclbTarget {

                        /** Properties of an IpConfig. */
                        interface IIpConfig {

                            /** IpConfig ipAddress */
                            ipAddress?: (string|null);

                            /** IpConfig ports */
                            ports?: (number[]|null);
                        }

                        /** Represents an IpConfig. */
                        class IpConfig implements IIpConfig {

                            /**
                             * Constructs a new IpConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.certificatemanager.v1.CertificateMap.GclbTarget.IIpConfig);

                            /** IpConfig ipAddress. */
                            public ipAddress: string;

                            /** IpConfig ports. */
                            public ports: number[];

                            /**
                             * Creates a new IpConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns IpConfig instance
                             */
                            public static create(properties?: google.cloud.certificatemanager.v1.CertificateMap.GclbTarget.IIpConfig): google.cloud.certificatemanager.v1.CertificateMap.GclbTarget.IpConfig;

                            /**
                             * Encodes the specified IpConfig message. Does not implicitly {@link google.cloud.certificatemanager.v1.CertificateMap.GclbTarget.IpConfig.verify|verify} messages.
                             * @param message IpConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.certificatemanager.v1.CertificateMap.GclbTarget.IIpConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified IpConfig message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.CertificateMap.GclbTarget.IpConfig.verify|verify} messages.
                             * @param message IpConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.certificatemanager.v1.CertificateMap.GclbTarget.IIpConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an IpConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns IpConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.CertificateMap.GclbTarget.IpConfig;

                            /**
                             * Decodes an IpConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns IpConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.CertificateMap.GclbTarget.IpConfig;

                            /**
                             * Verifies an IpConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an IpConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns IpConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.CertificateMap.GclbTarget.IpConfig;

                            /**
                             * Creates a plain object from an IpConfig message. Also converts values to other types if specified.
                             * @param message IpConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.certificatemanager.v1.CertificateMap.GclbTarget.IpConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this IpConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for IpConfig
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }
                }

                /** Properties of a CertificateMapEntry. */
                interface ICertificateMapEntry {

                    /** CertificateMapEntry name */
                    name?: (string|null);

                    /** CertificateMapEntry description */
                    description?: (string|null);

                    /** CertificateMapEntry createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** CertificateMapEntry updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** CertificateMapEntry labels */
                    labels?: ({ [k: string]: string }|null);

                    /** CertificateMapEntry hostname */
                    hostname?: (string|null);

                    /** CertificateMapEntry matcher */
                    matcher?: (google.cloud.certificatemanager.v1.CertificateMapEntry.Matcher|keyof typeof google.cloud.certificatemanager.v1.CertificateMapEntry.Matcher|null);

                    /** CertificateMapEntry certificates */
                    certificates?: (string[]|null);

                    /** CertificateMapEntry state */
                    state?: (google.cloud.certificatemanager.v1.ServingState|keyof typeof google.cloud.certificatemanager.v1.ServingState|null);
                }

                /** Represents a CertificateMapEntry. */
                class CertificateMapEntry implements ICertificateMapEntry {

                    /**
                     * Constructs a new CertificateMapEntry.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.ICertificateMapEntry);

                    /** CertificateMapEntry name. */
                    public name: string;

                    /** CertificateMapEntry description. */
                    public description: string;

                    /** CertificateMapEntry createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** CertificateMapEntry updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** CertificateMapEntry labels. */
                    public labels: { [k: string]: string };

                    /** CertificateMapEntry hostname. */
                    public hostname?: (string|null);

                    /** CertificateMapEntry matcher. */
                    public matcher?: (google.cloud.certificatemanager.v1.CertificateMapEntry.Matcher|keyof typeof google.cloud.certificatemanager.v1.CertificateMapEntry.Matcher|null);

                    /** CertificateMapEntry certificates. */
                    public certificates: string[];

                    /** CertificateMapEntry state. */
                    public state: (google.cloud.certificatemanager.v1.ServingState|keyof typeof google.cloud.certificatemanager.v1.ServingState);

                    /** CertificateMapEntry match. */
                    public match?: ("hostname"|"matcher");

                    /**
                     * Creates a new CertificateMapEntry instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CertificateMapEntry instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.ICertificateMapEntry): google.cloud.certificatemanager.v1.CertificateMapEntry;

                    /**
                     * Encodes the specified CertificateMapEntry message. Does not implicitly {@link google.cloud.certificatemanager.v1.CertificateMapEntry.verify|verify} messages.
                     * @param message CertificateMapEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.ICertificateMapEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CertificateMapEntry message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.CertificateMapEntry.verify|verify} messages.
                     * @param message CertificateMapEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.ICertificateMapEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CertificateMapEntry message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CertificateMapEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.CertificateMapEntry;

                    /**
                     * Decodes a CertificateMapEntry message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CertificateMapEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.CertificateMapEntry;

                    /**
                     * Verifies a CertificateMapEntry message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CertificateMapEntry message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CertificateMapEntry
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.CertificateMapEntry;

                    /**
                     * Creates a plain object from a CertificateMapEntry message. Also converts values to other types if specified.
                     * @param message CertificateMapEntry
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.CertificateMapEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CertificateMapEntry to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CertificateMapEntry
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CertificateMapEntry {

                    /** Matcher enum. */
                    enum Matcher {
                        MATCHER_UNSPECIFIED = 0,
                        PRIMARY = 1
                    }
                }

                /** Properties of a DnsAuthorization. */
                interface IDnsAuthorization {

                    /** DnsAuthorization name */
                    name?: (string|null);

                    /** DnsAuthorization createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** DnsAuthorization updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** DnsAuthorization labels */
                    labels?: ({ [k: string]: string }|null);

                    /** DnsAuthorization description */
                    description?: (string|null);

                    /** DnsAuthorization domain */
                    domain?: (string|null);

                    /** DnsAuthorization dnsResourceRecord */
                    dnsResourceRecord?: (google.cloud.certificatemanager.v1.DnsAuthorization.IDnsResourceRecord|null);

                    /** DnsAuthorization type */
                    type?: (google.cloud.certificatemanager.v1.DnsAuthorization.Type|keyof typeof google.cloud.certificatemanager.v1.DnsAuthorization.Type|null);
                }

                /** Represents a DnsAuthorization. */
                class DnsAuthorization implements IDnsAuthorization {

                    /**
                     * Constructs a new DnsAuthorization.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IDnsAuthorization);

                    /** DnsAuthorization name. */
                    public name: string;

                    /** DnsAuthorization createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** DnsAuthorization updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** DnsAuthorization labels. */
                    public labels: { [k: string]: string };

                    /** DnsAuthorization description. */
                    public description: string;

                    /** DnsAuthorization domain. */
                    public domain: string;

                    /** DnsAuthorization dnsResourceRecord. */
                    public dnsResourceRecord?: (google.cloud.certificatemanager.v1.DnsAuthorization.IDnsResourceRecord|null);

                    /** DnsAuthorization type. */
                    public type: (google.cloud.certificatemanager.v1.DnsAuthorization.Type|keyof typeof google.cloud.certificatemanager.v1.DnsAuthorization.Type);

                    /**
                     * Creates a new DnsAuthorization instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DnsAuthorization instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IDnsAuthorization): google.cloud.certificatemanager.v1.DnsAuthorization;

                    /**
                     * Encodes the specified DnsAuthorization message. Does not implicitly {@link google.cloud.certificatemanager.v1.DnsAuthorization.verify|verify} messages.
                     * @param message DnsAuthorization message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IDnsAuthorization, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DnsAuthorization message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.DnsAuthorization.verify|verify} messages.
                     * @param message DnsAuthorization message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IDnsAuthorization, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DnsAuthorization message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DnsAuthorization
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.DnsAuthorization;

                    /**
                     * Decodes a DnsAuthorization message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DnsAuthorization
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.DnsAuthorization;

                    /**
                     * Verifies a DnsAuthorization message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DnsAuthorization message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DnsAuthorization
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.DnsAuthorization;

                    /**
                     * Creates a plain object from a DnsAuthorization message. Also converts values to other types if specified.
                     * @param message DnsAuthorization
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.DnsAuthorization, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DnsAuthorization to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DnsAuthorization
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace DnsAuthorization {

                    /** Properties of a DnsResourceRecord. */
                    interface IDnsResourceRecord {

                        /** DnsResourceRecord name */
                        name?: (string|null);

                        /** DnsResourceRecord type */
                        type?: (string|null);

                        /** DnsResourceRecord data */
                        data?: (string|null);
                    }

                    /** Represents a DnsResourceRecord. */
                    class DnsResourceRecord implements IDnsResourceRecord {

                        /**
                         * Constructs a new DnsResourceRecord.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.certificatemanager.v1.DnsAuthorization.IDnsResourceRecord);

                        /** DnsResourceRecord name. */
                        public name: string;

                        /** DnsResourceRecord type. */
                        public type: string;

                        /** DnsResourceRecord data. */
                        public data: string;

                        /**
                         * Creates a new DnsResourceRecord instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DnsResourceRecord instance
                         */
                        public static create(properties?: google.cloud.certificatemanager.v1.DnsAuthorization.IDnsResourceRecord): google.cloud.certificatemanager.v1.DnsAuthorization.DnsResourceRecord;

                        /**
                         * Encodes the specified DnsResourceRecord message. Does not implicitly {@link google.cloud.certificatemanager.v1.DnsAuthorization.DnsResourceRecord.verify|verify} messages.
                         * @param message DnsResourceRecord message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.certificatemanager.v1.DnsAuthorization.IDnsResourceRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DnsResourceRecord message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.DnsAuthorization.DnsResourceRecord.verify|verify} messages.
                         * @param message DnsResourceRecord message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.certificatemanager.v1.DnsAuthorization.IDnsResourceRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DnsResourceRecord message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DnsResourceRecord
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.DnsAuthorization.DnsResourceRecord;

                        /**
                         * Decodes a DnsResourceRecord message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DnsResourceRecord
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.DnsAuthorization.DnsResourceRecord;

                        /**
                         * Verifies a DnsResourceRecord message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DnsResourceRecord message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DnsResourceRecord
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.DnsAuthorization.DnsResourceRecord;

                        /**
                         * Creates a plain object from a DnsResourceRecord message. Also converts values to other types if specified.
                         * @param message DnsResourceRecord
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.certificatemanager.v1.DnsAuthorization.DnsResourceRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DnsResourceRecord to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DnsResourceRecord
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        FIXED_RECORD = 1,
                        PER_PROJECT_RECORD = 2
                    }
                }

                /** ServingState enum. */
                enum ServingState {
                    SERVING_STATE_UNSPECIFIED = 0,
                    ACTIVE = 1,
                    PENDING = 2
                }

                /** Properties of a ListTrustConfigsRequest. */
                interface IListTrustConfigsRequest {

                    /** ListTrustConfigsRequest parent */
                    parent?: (string|null);

                    /** ListTrustConfigsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTrustConfigsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListTrustConfigsRequest filter */
                    filter?: (string|null);

                    /** ListTrustConfigsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListTrustConfigsRequest. */
                class ListTrustConfigsRequest implements IListTrustConfigsRequest {

                    /**
                     * Constructs a new ListTrustConfigsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IListTrustConfigsRequest);

                    /** ListTrustConfigsRequest parent. */
                    public parent: string;

                    /** ListTrustConfigsRequest pageSize. */
                    public pageSize: number;

                    /** ListTrustConfigsRequest pageToken. */
                    public pageToken: string;

                    /** ListTrustConfigsRequest filter. */
                    public filter: string;

                    /** ListTrustConfigsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListTrustConfigsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTrustConfigsRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IListTrustConfigsRequest): google.cloud.certificatemanager.v1.ListTrustConfigsRequest;

                    /**
                     * Encodes the specified ListTrustConfigsRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.ListTrustConfigsRequest.verify|verify} messages.
                     * @param message ListTrustConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IListTrustConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTrustConfigsRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.ListTrustConfigsRequest.verify|verify} messages.
                     * @param message ListTrustConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IListTrustConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTrustConfigsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTrustConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.ListTrustConfigsRequest;

                    /**
                     * Decodes a ListTrustConfigsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTrustConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.ListTrustConfigsRequest;

                    /**
                     * Verifies a ListTrustConfigsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTrustConfigsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTrustConfigsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.ListTrustConfigsRequest;

                    /**
                     * Creates a plain object from a ListTrustConfigsRequest message. Also converts values to other types if specified.
                     * @param message ListTrustConfigsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.ListTrustConfigsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTrustConfigsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTrustConfigsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTrustConfigsResponse. */
                interface IListTrustConfigsResponse {

                    /** ListTrustConfigsResponse trustConfigs */
                    trustConfigs?: (google.cloud.certificatemanager.v1.ITrustConfig[]|null);

                    /** ListTrustConfigsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListTrustConfigsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListTrustConfigsResponse. */
                class ListTrustConfigsResponse implements IListTrustConfigsResponse {

                    /**
                     * Constructs a new ListTrustConfigsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IListTrustConfigsResponse);

                    /** ListTrustConfigsResponse trustConfigs. */
                    public trustConfigs: google.cloud.certificatemanager.v1.ITrustConfig[];

                    /** ListTrustConfigsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListTrustConfigsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListTrustConfigsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTrustConfigsResponse instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IListTrustConfigsResponse): google.cloud.certificatemanager.v1.ListTrustConfigsResponse;

                    /**
                     * Encodes the specified ListTrustConfigsResponse message. Does not implicitly {@link google.cloud.certificatemanager.v1.ListTrustConfigsResponse.verify|verify} messages.
                     * @param message ListTrustConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IListTrustConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTrustConfigsResponse message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.ListTrustConfigsResponse.verify|verify} messages.
                     * @param message ListTrustConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IListTrustConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTrustConfigsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTrustConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.ListTrustConfigsResponse;

                    /**
                     * Decodes a ListTrustConfigsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTrustConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.ListTrustConfigsResponse;

                    /**
                     * Verifies a ListTrustConfigsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTrustConfigsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTrustConfigsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.ListTrustConfigsResponse;

                    /**
                     * Creates a plain object from a ListTrustConfigsResponse message. Also converts values to other types if specified.
                     * @param message ListTrustConfigsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.ListTrustConfigsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTrustConfigsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTrustConfigsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetTrustConfigRequest. */
                interface IGetTrustConfigRequest {

                    /** GetTrustConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTrustConfigRequest. */
                class GetTrustConfigRequest implements IGetTrustConfigRequest {

                    /**
                     * Constructs a new GetTrustConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IGetTrustConfigRequest);

                    /** GetTrustConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTrustConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTrustConfigRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IGetTrustConfigRequest): google.cloud.certificatemanager.v1.GetTrustConfigRequest;

                    /**
                     * Encodes the specified GetTrustConfigRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.GetTrustConfigRequest.verify|verify} messages.
                     * @param message GetTrustConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IGetTrustConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTrustConfigRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.GetTrustConfigRequest.verify|verify} messages.
                     * @param message GetTrustConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IGetTrustConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTrustConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTrustConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.GetTrustConfigRequest;

                    /**
                     * Decodes a GetTrustConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTrustConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.GetTrustConfigRequest;

                    /**
                     * Verifies a GetTrustConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTrustConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTrustConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.GetTrustConfigRequest;

                    /**
                     * Creates a plain object from a GetTrustConfigRequest message. Also converts values to other types if specified.
                     * @param message GetTrustConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.GetTrustConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTrustConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetTrustConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateTrustConfigRequest. */
                interface ICreateTrustConfigRequest {

                    /** CreateTrustConfigRequest parent */
                    parent?: (string|null);

                    /** CreateTrustConfigRequest trustConfigId */
                    trustConfigId?: (string|null);

                    /** CreateTrustConfigRequest trustConfig */
                    trustConfig?: (google.cloud.certificatemanager.v1.ITrustConfig|null);
                }

                /** Represents a CreateTrustConfigRequest. */
                class CreateTrustConfigRequest implements ICreateTrustConfigRequest {

                    /**
                     * Constructs a new CreateTrustConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.ICreateTrustConfigRequest);

                    /** CreateTrustConfigRequest parent. */
                    public parent: string;

                    /** CreateTrustConfigRequest trustConfigId. */
                    public trustConfigId: string;

                    /** CreateTrustConfigRequest trustConfig. */
                    public trustConfig?: (google.cloud.certificatemanager.v1.ITrustConfig|null);

                    /**
                     * Creates a new CreateTrustConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTrustConfigRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.ICreateTrustConfigRequest): google.cloud.certificatemanager.v1.CreateTrustConfigRequest;

                    /**
                     * Encodes the specified CreateTrustConfigRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.CreateTrustConfigRequest.verify|verify} messages.
                     * @param message CreateTrustConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.ICreateTrustConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTrustConfigRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.CreateTrustConfigRequest.verify|verify} messages.
                     * @param message CreateTrustConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.ICreateTrustConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTrustConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTrustConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.CreateTrustConfigRequest;

                    /**
                     * Decodes a CreateTrustConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTrustConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.CreateTrustConfigRequest;

                    /**
                     * Verifies a CreateTrustConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTrustConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTrustConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.CreateTrustConfigRequest;

                    /**
                     * Creates a plain object from a CreateTrustConfigRequest message. Also converts values to other types if specified.
                     * @param message CreateTrustConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.CreateTrustConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTrustConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateTrustConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateTrustConfigRequest. */
                interface IUpdateTrustConfigRequest {

                    /** UpdateTrustConfigRequest trustConfig */
                    trustConfig?: (google.cloud.certificatemanager.v1.ITrustConfig|null);

                    /** UpdateTrustConfigRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateTrustConfigRequest. */
                class UpdateTrustConfigRequest implements IUpdateTrustConfigRequest {

                    /**
                     * Constructs a new UpdateTrustConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IUpdateTrustConfigRequest);

                    /** UpdateTrustConfigRequest trustConfig. */
                    public trustConfig?: (google.cloud.certificatemanager.v1.ITrustConfig|null);

                    /** UpdateTrustConfigRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateTrustConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateTrustConfigRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IUpdateTrustConfigRequest): google.cloud.certificatemanager.v1.UpdateTrustConfigRequest;

                    /**
                     * Encodes the specified UpdateTrustConfigRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.UpdateTrustConfigRequest.verify|verify} messages.
                     * @param message UpdateTrustConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IUpdateTrustConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateTrustConfigRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.UpdateTrustConfigRequest.verify|verify} messages.
                     * @param message UpdateTrustConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IUpdateTrustConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateTrustConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateTrustConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.UpdateTrustConfigRequest;

                    /**
                     * Decodes an UpdateTrustConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateTrustConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.UpdateTrustConfigRequest;

                    /**
                     * Verifies an UpdateTrustConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateTrustConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateTrustConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.UpdateTrustConfigRequest;

                    /**
                     * Creates a plain object from an UpdateTrustConfigRequest message. Also converts values to other types if specified.
                     * @param message UpdateTrustConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.UpdateTrustConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateTrustConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateTrustConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteTrustConfigRequest. */
                interface IDeleteTrustConfigRequest {

                    /** DeleteTrustConfigRequest name */
                    name?: (string|null);

                    /** DeleteTrustConfigRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeleteTrustConfigRequest. */
                class DeleteTrustConfigRequest implements IDeleteTrustConfigRequest {

                    /**
                     * Constructs a new DeleteTrustConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.IDeleteTrustConfigRequest);

                    /** DeleteTrustConfigRequest name. */
                    public name: string;

                    /** DeleteTrustConfigRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeleteTrustConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTrustConfigRequest instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.IDeleteTrustConfigRequest): google.cloud.certificatemanager.v1.DeleteTrustConfigRequest;

                    /**
                     * Encodes the specified DeleteTrustConfigRequest message. Does not implicitly {@link google.cloud.certificatemanager.v1.DeleteTrustConfigRequest.verify|verify} messages.
                     * @param message DeleteTrustConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.IDeleteTrustConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTrustConfigRequest message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.DeleteTrustConfigRequest.verify|verify} messages.
                     * @param message DeleteTrustConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.IDeleteTrustConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTrustConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTrustConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.DeleteTrustConfigRequest;

                    /**
                     * Decodes a DeleteTrustConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTrustConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.DeleteTrustConfigRequest;

                    /**
                     * Verifies a DeleteTrustConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTrustConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTrustConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.DeleteTrustConfigRequest;

                    /**
                     * Creates a plain object from a DeleteTrustConfigRequest message. Also converts values to other types if specified.
                     * @param message DeleteTrustConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.DeleteTrustConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTrustConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteTrustConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TrustConfig. */
                interface ITrustConfig {

                    /** TrustConfig name */
                    name?: (string|null);

                    /** TrustConfig createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** TrustConfig updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** TrustConfig labels */
                    labels?: ({ [k: string]: string }|null);

                    /** TrustConfig description */
                    description?: (string|null);

                    /** TrustConfig etag */
                    etag?: (string|null);

                    /** TrustConfig trustStores */
                    trustStores?: (google.cloud.certificatemanager.v1.TrustConfig.ITrustStore[]|null);
                }

                /** Represents a TrustConfig. */
                class TrustConfig implements ITrustConfig {

                    /**
                     * Constructs a new TrustConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.certificatemanager.v1.ITrustConfig);

                    /** TrustConfig name. */
                    public name: string;

                    /** TrustConfig createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** TrustConfig updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** TrustConfig labels. */
                    public labels: { [k: string]: string };

                    /** TrustConfig description. */
                    public description: string;

                    /** TrustConfig etag. */
                    public etag: string;

                    /** TrustConfig trustStores. */
                    public trustStores: google.cloud.certificatemanager.v1.TrustConfig.ITrustStore[];

                    /**
                     * Creates a new TrustConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TrustConfig instance
                     */
                    public static create(properties?: google.cloud.certificatemanager.v1.ITrustConfig): google.cloud.certificatemanager.v1.TrustConfig;

                    /**
                     * Encodes the specified TrustConfig message. Does not implicitly {@link google.cloud.certificatemanager.v1.TrustConfig.verify|verify} messages.
                     * @param message TrustConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.certificatemanager.v1.ITrustConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TrustConfig message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.TrustConfig.verify|verify} messages.
                     * @param message TrustConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.certificatemanager.v1.ITrustConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TrustConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TrustConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.TrustConfig;

                    /**
                     * Decodes a TrustConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TrustConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.TrustConfig;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.TrustConfig;

                    /**
                     * Creates a plain object from a TrustConfig message. Also converts values to other types if specified.
                     * @param message TrustConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.certificatemanager.v1.TrustConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of a TrustAnchor. */
                    interface ITrustAnchor {

                        /** TrustAnchor pemCertificate */
                        pemCertificate?: (string|null);
                    }

                    /** Represents a TrustAnchor. */
                    class TrustAnchor implements ITrustAnchor {

                        /**
                         * Constructs a new TrustAnchor.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.certificatemanager.v1.TrustConfig.ITrustAnchor);

                        /** TrustAnchor pemCertificate. */
                        public pemCertificate?: (string|null);

                        /** TrustAnchor kind. */
                        public kind?: "pemCertificate";

                        /**
                         * Creates a new TrustAnchor instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TrustAnchor instance
                         */
                        public static create(properties?: google.cloud.certificatemanager.v1.TrustConfig.ITrustAnchor): google.cloud.certificatemanager.v1.TrustConfig.TrustAnchor;

                        /**
                         * Encodes the specified TrustAnchor message. Does not implicitly {@link google.cloud.certificatemanager.v1.TrustConfig.TrustAnchor.verify|verify} messages.
                         * @param message TrustAnchor message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.certificatemanager.v1.TrustConfig.ITrustAnchor, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TrustAnchor message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.TrustConfig.TrustAnchor.verify|verify} messages.
                         * @param message TrustAnchor message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.certificatemanager.v1.TrustConfig.ITrustAnchor, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TrustAnchor message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TrustAnchor
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.TrustConfig.TrustAnchor;

                        /**
                         * Decodes a TrustAnchor message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TrustAnchor
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.TrustConfig.TrustAnchor;

                        /**
                         * Verifies a TrustAnchor message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TrustAnchor message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TrustAnchor
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.TrustConfig.TrustAnchor;

                        /**
                         * Creates a plain object from a TrustAnchor message. Also converts values to other types if specified.
                         * @param message TrustAnchor
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.certificatemanager.v1.TrustConfig.TrustAnchor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TrustAnchor to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TrustAnchor
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an IntermediateCA. */
                    interface IIntermediateCA {

                        /** IntermediateCA pemCertificate */
                        pemCertificate?: (string|null);
                    }

                    /** Represents an IntermediateCA. */
                    class IntermediateCA implements IIntermediateCA {

                        /**
                         * Constructs a new IntermediateCA.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.certificatemanager.v1.TrustConfig.IIntermediateCA);

                        /** IntermediateCA pemCertificate. */
                        public pemCertificate?: (string|null);

                        /** IntermediateCA kind. */
                        public kind?: "pemCertificate";

                        /**
                         * Creates a new IntermediateCA instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IntermediateCA instance
                         */
                        public static create(properties?: google.cloud.certificatemanager.v1.TrustConfig.IIntermediateCA): google.cloud.certificatemanager.v1.TrustConfig.IntermediateCA;

                        /**
                         * Encodes the specified IntermediateCA message. Does not implicitly {@link google.cloud.certificatemanager.v1.TrustConfig.IntermediateCA.verify|verify} messages.
                         * @param message IntermediateCA message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.certificatemanager.v1.TrustConfig.IIntermediateCA, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IntermediateCA message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.TrustConfig.IntermediateCA.verify|verify} messages.
                         * @param message IntermediateCA message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.certificatemanager.v1.TrustConfig.IIntermediateCA, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IntermediateCA message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IntermediateCA
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.TrustConfig.IntermediateCA;

                        /**
                         * Decodes an IntermediateCA message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IntermediateCA
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.TrustConfig.IntermediateCA;

                        /**
                         * Verifies an IntermediateCA message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IntermediateCA message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IntermediateCA
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.TrustConfig.IntermediateCA;

                        /**
                         * Creates a plain object from an IntermediateCA message. Also converts values to other types if specified.
                         * @param message IntermediateCA
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.certificatemanager.v1.TrustConfig.IntermediateCA, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IntermediateCA to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for IntermediateCA
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TrustStore. */
                    interface ITrustStore {

                        /** TrustStore trustAnchors */
                        trustAnchors?: (google.cloud.certificatemanager.v1.TrustConfig.ITrustAnchor[]|null);

                        /** TrustStore intermediateCas */
                        intermediateCas?: (google.cloud.certificatemanager.v1.TrustConfig.IIntermediateCA[]|null);
                    }

                    /** Represents a TrustStore. */
                    class TrustStore implements ITrustStore {

                        /**
                         * Constructs a new TrustStore.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.certificatemanager.v1.TrustConfig.ITrustStore);

                        /** TrustStore trustAnchors. */
                        public trustAnchors: google.cloud.certificatemanager.v1.TrustConfig.ITrustAnchor[];

                        /** TrustStore intermediateCas. */
                        public intermediateCas: google.cloud.certificatemanager.v1.TrustConfig.IIntermediateCA[];

                        /**
                         * Creates a new TrustStore instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TrustStore instance
                         */
                        public static create(properties?: google.cloud.certificatemanager.v1.TrustConfig.ITrustStore): google.cloud.certificatemanager.v1.TrustConfig.TrustStore;

                        /**
                         * Encodes the specified TrustStore message. Does not implicitly {@link google.cloud.certificatemanager.v1.TrustConfig.TrustStore.verify|verify} messages.
                         * @param message TrustStore message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.certificatemanager.v1.TrustConfig.ITrustStore, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TrustStore message, length delimited. Does not implicitly {@link google.cloud.certificatemanager.v1.TrustConfig.TrustStore.verify|verify} messages.
                         * @param message TrustStore message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.certificatemanager.v1.TrustConfig.ITrustStore, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TrustStore message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TrustStore
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.certificatemanager.v1.TrustConfig.TrustStore;

                        /**
                         * Decodes a TrustStore message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TrustStore
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.certificatemanager.v1.TrustConfig.TrustStore;

                        /**
                         * Verifies a TrustStore message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TrustStore message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TrustStore
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.certificatemanager.v1.TrustConfig.TrustStore;

                        /**
                         * Creates a plain object from a TrustStore message. Also converts values to other types if specified.
                         * @param message TrustStore
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.certificatemanager.v1.TrustConfig.TrustStore, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TrustStore to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TrustStore
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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
