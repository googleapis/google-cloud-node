// Copyright 2021 Google LLC
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

        /** Namespace webrisk. */
        namespace webrisk {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a WebRiskService */
                class WebRiskService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new WebRiskService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new WebRiskService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): WebRiskService;

                    /**
                     * Calls ComputeThreatListDiff.
                     * @param request ComputeThreatListDiffRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ComputeThreatListDiffResponse
                     */
                    public computeThreatListDiff(request: google.cloud.webrisk.v1.IComputeThreatListDiffRequest, callback: google.cloud.webrisk.v1.WebRiskService.ComputeThreatListDiffCallback): void;

                    /**
                     * Calls ComputeThreatListDiff.
                     * @param request ComputeThreatListDiffRequest message or plain object
                     * @returns Promise
                     */
                    public computeThreatListDiff(request: google.cloud.webrisk.v1.IComputeThreatListDiffRequest): Promise<google.cloud.webrisk.v1.ComputeThreatListDiffResponse>;

                    /**
                     * Calls SearchUris.
                     * @param request SearchUrisRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchUrisResponse
                     */
                    public searchUris(request: google.cloud.webrisk.v1.ISearchUrisRequest, callback: google.cloud.webrisk.v1.WebRiskService.SearchUrisCallback): void;

                    /**
                     * Calls SearchUris.
                     * @param request SearchUrisRequest message or plain object
                     * @returns Promise
                     */
                    public searchUris(request: google.cloud.webrisk.v1.ISearchUrisRequest): Promise<google.cloud.webrisk.v1.SearchUrisResponse>;

                    /**
                     * Calls SearchHashes.
                     * @param request SearchHashesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchHashesResponse
                     */
                    public searchHashes(request: google.cloud.webrisk.v1.ISearchHashesRequest, callback: google.cloud.webrisk.v1.WebRiskService.SearchHashesCallback): void;

                    /**
                     * Calls SearchHashes.
                     * @param request SearchHashesRequest message or plain object
                     * @returns Promise
                     */
                    public searchHashes(request: google.cloud.webrisk.v1.ISearchHashesRequest): Promise<google.cloud.webrisk.v1.SearchHashesResponse>;

                    /**
                     * Calls CreateSubmission.
                     * @param request CreateSubmissionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Submission
                     */
                    public createSubmission(request: google.cloud.webrisk.v1.ICreateSubmissionRequest, callback: google.cloud.webrisk.v1.WebRiskService.CreateSubmissionCallback): void;

                    /**
                     * Calls CreateSubmission.
                     * @param request CreateSubmissionRequest message or plain object
                     * @returns Promise
                     */
                    public createSubmission(request: google.cloud.webrisk.v1.ICreateSubmissionRequest): Promise<google.cloud.webrisk.v1.Submission>;
                }

                namespace WebRiskService {

                    /**
                     * Callback as used by {@link google.cloud.webrisk.v1.WebRiskService#computeThreatListDiff}.
                     * @param error Error, if any
                     * @param [response] ComputeThreatListDiffResponse
                     */
                    type ComputeThreatListDiffCallback = (error: (Error|null), response?: google.cloud.webrisk.v1.ComputeThreatListDiffResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.webrisk.v1.WebRiskService#searchUris}.
                     * @param error Error, if any
                     * @param [response] SearchUrisResponse
                     */
                    type SearchUrisCallback = (error: (Error|null), response?: google.cloud.webrisk.v1.SearchUrisResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.webrisk.v1.WebRiskService#searchHashes}.
                     * @param error Error, if any
                     * @param [response] SearchHashesResponse
                     */
                    type SearchHashesCallback = (error: (Error|null), response?: google.cloud.webrisk.v1.SearchHashesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.webrisk.v1.WebRiskService#createSubmission}.
                     * @param error Error, if any
                     * @param [response] Submission
                     */
                    type CreateSubmissionCallback = (error: (Error|null), response?: google.cloud.webrisk.v1.Submission) => void;
                }

                /** Properties of a ComputeThreatListDiffRequest. */
                interface IComputeThreatListDiffRequest {

                    /** ComputeThreatListDiffRequest threatType */
                    threatType?: (google.cloud.webrisk.v1.ThreatType|keyof typeof google.cloud.webrisk.v1.ThreatType|null);

                    /** ComputeThreatListDiffRequest versionToken */
                    versionToken?: (Uint8Array|string|null);

                    /** ComputeThreatListDiffRequest constraints */
                    constraints?: (google.cloud.webrisk.v1.ComputeThreatListDiffRequest.IConstraints|null);
                }

                /** Represents a ComputeThreatListDiffRequest. */
                class ComputeThreatListDiffRequest implements IComputeThreatListDiffRequest {

                    /**
                     * Constructs a new ComputeThreatListDiffRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1.IComputeThreatListDiffRequest);

                    /** ComputeThreatListDiffRequest threatType. */
                    public threatType: (google.cloud.webrisk.v1.ThreatType|keyof typeof google.cloud.webrisk.v1.ThreatType);

                    /** ComputeThreatListDiffRequest versionToken. */
                    public versionToken: (Uint8Array|string);

                    /** ComputeThreatListDiffRequest constraints. */
                    public constraints?: (google.cloud.webrisk.v1.ComputeThreatListDiffRequest.IConstraints|null);

                    /**
                     * Creates a new ComputeThreatListDiffRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ComputeThreatListDiffRequest instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1.IComputeThreatListDiffRequest): google.cloud.webrisk.v1.ComputeThreatListDiffRequest;

                    /**
                     * Encodes the specified ComputeThreatListDiffRequest message. Does not implicitly {@link google.cloud.webrisk.v1.ComputeThreatListDiffRequest.verify|verify} messages.
                     * @param message ComputeThreatListDiffRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1.IComputeThreatListDiffRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ComputeThreatListDiffRequest message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1.ComputeThreatListDiffRequest.verify|verify} messages.
                     * @param message ComputeThreatListDiffRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1.IComputeThreatListDiffRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ComputeThreatListDiffRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ComputeThreatListDiffRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1.ComputeThreatListDiffRequest;

                    /**
                     * Decodes a ComputeThreatListDiffRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ComputeThreatListDiffRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1.ComputeThreatListDiffRequest;

                    /**
                     * Verifies a ComputeThreatListDiffRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ComputeThreatListDiffRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ComputeThreatListDiffRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1.ComputeThreatListDiffRequest;

                    /**
                     * Creates a plain object from a ComputeThreatListDiffRequest message. Also converts values to other types if specified.
                     * @param message ComputeThreatListDiffRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1.ComputeThreatListDiffRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ComputeThreatListDiffRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ComputeThreatListDiffRequest {

                    /** Properties of a Constraints. */
                    interface IConstraints {

                        /** Constraints maxDiffEntries */
                        maxDiffEntries?: (number|null);

                        /** Constraints maxDatabaseEntries */
                        maxDatabaseEntries?: (number|null);

                        /** Constraints supportedCompressions */
                        supportedCompressions?: (google.cloud.webrisk.v1.CompressionType[]|null);
                    }

                    /** Represents a Constraints. */
                    class Constraints implements IConstraints {

                        /**
                         * Constructs a new Constraints.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.webrisk.v1.ComputeThreatListDiffRequest.IConstraints);

                        /** Constraints maxDiffEntries. */
                        public maxDiffEntries: number;

                        /** Constraints maxDatabaseEntries. */
                        public maxDatabaseEntries: number;

                        /** Constraints supportedCompressions. */
                        public supportedCompressions: google.cloud.webrisk.v1.CompressionType[];

                        /**
                         * Creates a new Constraints instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Constraints instance
                         */
                        public static create(properties?: google.cloud.webrisk.v1.ComputeThreatListDiffRequest.IConstraints): google.cloud.webrisk.v1.ComputeThreatListDiffRequest.Constraints;

                        /**
                         * Encodes the specified Constraints message. Does not implicitly {@link google.cloud.webrisk.v1.ComputeThreatListDiffRequest.Constraints.verify|verify} messages.
                         * @param message Constraints message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.webrisk.v1.ComputeThreatListDiffRequest.IConstraints, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Constraints message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1.ComputeThreatListDiffRequest.Constraints.verify|verify} messages.
                         * @param message Constraints message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.webrisk.v1.ComputeThreatListDiffRequest.IConstraints, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Constraints message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Constraints
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1.ComputeThreatListDiffRequest.Constraints;

                        /**
                         * Decodes a Constraints message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Constraints
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1.ComputeThreatListDiffRequest.Constraints;

                        /**
                         * Verifies a Constraints message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Constraints message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Constraints
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1.ComputeThreatListDiffRequest.Constraints;

                        /**
                         * Creates a plain object from a Constraints message. Also converts values to other types if specified.
                         * @param message Constraints
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.webrisk.v1.ComputeThreatListDiffRequest.Constraints, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Constraints to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a ComputeThreatListDiffResponse. */
                interface IComputeThreatListDiffResponse {

                    /** ComputeThreatListDiffResponse responseType */
                    responseType?: (google.cloud.webrisk.v1.ComputeThreatListDiffResponse.ResponseType|keyof typeof google.cloud.webrisk.v1.ComputeThreatListDiffResponse.ResponseType|null);

                    /** ComputeThreatListDiffResponse additions */
                    additions?: (google.cloud.webrisk.v1.IThreatEntryAdditions|null);

                    /** ComputeThreatListDiffResponse removals */
                    removals?: (google.cloud.webrisk.v1.IThreatEntryRemovals|null);

                    /** ComputeThreatListDiffResponse newVersionToken */
                    newVersionToken?: (Uint8Array|string|null);

                    /** ComputeThreatListDiffResponse checksum */
                    checksum?: (google.cloud.webrisk.v1.ComputeThreatListDiffResponse.IChecksum|null);

                    /** ComputeThreatListDiffResponse recommendedNextDiff */
                    recommendedNextDiff?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a ComputeThreatListDiffResponse. */
                class ComputeThreatListDiffResponse implements IComputeThreatListDiffResponse {

                    /**
                     * Constructs a new ComputeThreatListDiffResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1.IComputeThreatListDiffResponse);

                    /** ComputeThreatListDiffResponse responseType. */
                    public responseType: (google.cloud.webrisk.v1.ComputeThreatListDiffResponse.ResponseType|keyof typeof google.cloud.webrisk.v1.ComputeThreatListDiffResponse.ResponseType);

                    /** ComputeThreatListDiffResponse additions. */
                    public additions?: (google.cloud.webrisk.v1.IThreatEntryAdditions|null);

                    /** ComputeThreatListDiffResponse removals. */
                    public removals?: (google.cloud.webrisk.v1.IThreatEntryRemovals|null);

                    /** ComputeThreatListDiffResponse newVersionToken. */
                    public newVersionToken: (Uint8Array|string);

                    /** ComputeThreatListDiffResponse checksum. */
                    public checksum?: (google.cloud.webrisk.v1.ComputeThreatListDiffResponse.IChecksum|null);

                    /** ComputeThreatListDiffResponse recommendedNextDiff. */
                    public recommendedNextDiff?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new ComputeThreatListDiffResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ComputeThreatListDiffResponse instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1.IComputeThreatListDiffResponse): google.cloud.webrisk.v1.ComputeThreatListDiffResponse;

                    /**
                     * Encodes the specified ComputeThreatListDiffResponse message. Does not implicitly {@link google.cloud.webrisk.v1.ComputeThreatListDiffResponse.verify|verify} messages.
                     * @param message ComputeThreatListDiffResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1.IComputeThreatListDiffResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ComputeThreatListDiffResponse message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1.ComputeThreatListDiffResponse.verify|verify} messages.
                     * @param message ComputeThreatListDiffResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1.IComputeThreatListDiffResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ComputeThreatListDiffResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ComputeThreatListDiffResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1.ComputeThreatListDiffResponse;

                    /**
                     * Decodes a ComputeThreatListDiffResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ComputeThreatListDiffResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1.ComputeThreatListDiffResponse;

                    /**
                     * Verifies a ComputeThreatListDiffResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ComputeThreatListDiffResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ComputeThreatListDiffResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1.ComputeThreatListDiffResponse;

                    /**
                     * Creates a plain object from a ComputeThreatListDiffResponse message. Also converts values to other types if specified.
                     * @param message ComputeThreatListDiffResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1.ComputeThreatListDiffResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ComputeThreatListDiffResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ComputeThreatListDiffResponse {

                    /** Properties of a Checksum. */
                    interface IChecksum {

                        /** Checksum sha256 */
                        sha256?: (Uint8Array|string|null);
                    }

                    /** Represents a Checksum. */
                    class Checksum implements IChecksum {

                        /**
                         * Constructs a new Checksum.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.webrisk.v1.ComputeThreatListDiffResponse.IChecksum);

                        /** Checksum sha256. */
                        public sha256: (Uint8Array|string);

                        /**
                         * Creates a new Checksum instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Checksum instance
                         */
                        public static create(properties?: google.cloud.webrisk.v1.ComputeThreatListDiffResponse.IChecksum): google.cloud.webrisk.v1.ComputeThreatListDiffResponse.Checksum;

                        /**
                         * Encodes the specified Checksum message. Does not implicitly {@link google.cloud.webrisk.v1.ComputeThreatListDiffResponse.Checksum.verify|verify} messages.
                         * @param message Checksum message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.webrisk.v1.ComputeThreatListDiffResponse.IChecksum, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Checksum message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1.ComputeThreatListDiffResponse.Checksum.verify|verify} messages.
                         * @param message Checksum message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.webrisk.v1.ComputeThreatListDiffResponse.IChecksum, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Checksum message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Checksum
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1.ComputeThreatListDiffResponse.Checksum;

                        /**
                         * Decodes a Checksum message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Checksum
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1.ComputeThreatListDiffResponse.Checksum;

                        /**
                         * Verifies a Checksum message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Checksum message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Checksum
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1.ComputeThreatListDiffResponse.Checksum;

                        /**
                         * Creates a plain object from a Checksum message. Also converts values to other types if specified.
                         * @param message Checksum
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.webrisk.v1.ComputeThreatListDiffResponse.Checksum, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Checksum to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** ResponseType enum. */
                    enum ResponseType {
                        RESPONSE_TYPE_UNSPECIFIED = 0,
                        DIFF = 1,
                        RESET = 2
                    }
                }

                /** Properties of a SearchUrisRequest. */
                interface ISearchUrisRequest {

                    /** SearchUrisRequest uri */
                    uri?: (string|null);

                    /** SearchUrisRequest threatTypes */
                    threatTypes?: (google.cloud.webrisk.v1.ThreatType[]|null);
                }

                /** Represents a SearchUrisRequest. */
                class SearchUrisRequest implements ISearchUrisRequest {

                    /**
                     * Constructs a new SearchUrisRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1.ISearchUrisRequest);

                    /** SearchUrisRequest uri. */
                    public uri: string;

                    /** SearchUrisRequest threatTypes. */
                    public threatTypes: google.cloud.webrisk.v1.ThreatType[];

                    /**
                     * Creates a new SearchUrisRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchUrisRequest instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1.ISearchUrisRequest): google.cloud.webrisk.v1.SearchUrisRequest;

                    /**
                     * Encodes the specified SearchUrisRequest message. Does not implicitly {@link google.cloud.webrisk.v1.SearchUrisRequest.verify|verify} messages.
                     * @param message SearchUrisRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1.ISearchUrisRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchUrisRequest message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1.SearchUrisRequest.verify|verify} messages.
                     * @param message SearchUrisRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1.ISearchUrisRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchUrisRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchUrisRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1.SearchUrisRequest;

                    /**
                     * Decodes a SearchUrisRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchUrisRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1.SearchUrisRequest;

                    /**
                     * Verifies a SearchUrisRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchUrisRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchUrisRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1.SearchUrisRequest;

                    /**
                     * Creates a plain object from a SearchUrisRequest message. Also converts values to other types if specified.
                     * @param message SearchUrisRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1.SearchUrisRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchUrisRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchUrisResponse. */
                interface ISearchUrisResponse {

                    /** SearchUrisResponse threat */
                    threat?: (google.cloud.webrisk.v1.SearchUrisResponse.IThreatUri|null);
                }

                /** Represents a SearchUrisResponse. */
                class SearchUrisResponse implements ISearchUrisResponse {

                    /**
                     * Constructs a new SearchUrisResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1.ISearchUrisResponse);

                    /** SearchUrisResponse threat. */
                    public threat?: (google.cloud.webrisk.v1.SearchUrisResponse.IThreatUri|null);

                    /**
                     * Creates a new SearchUrisResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchUrisResponse instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1.ISearchUrisResponse): google.cloud.webrisk.v1.SearchUrisResponse;

                    /**
                     * Encodes the specified SearchUrisResponse message. Does not implicitly {@link google.cloud.webrisk.v1.SearchUrisResponse.verify|verify} messages.
                     * @param message SearchUrisResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1.ISearchUrisResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchUrisResponse message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1.SearchUrisResponse.verify|verify} messages.
                     * @param message SearchUrisResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1.ISearchUrisResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchUrisResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchUrisResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1.SearchUrisResponse;

                    /**
                     * Decodes a SearchUrisResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchUrisResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1.SearchUrisResponse;

                    /**
                     * Verifies a SearchUrisResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchUrisResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchUrisResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1.SearchUrisResponse;

                    /**
                     * Creates a plain object from a SearchUrisResponse message. Also converts values to other types if specified.
                     * @param message SearchUrisResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1.SearchUrisResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchUrisResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SearchUrisResponse {

                    /** Properties of a ThreatUri. */
                    interface IThreatUri {

                        /** ThreatUri threatTypes */
                        threatTypes?: (google.cloud.webrisk.v1.ThreatType[]|null);

                        /** ThreatUri expireTime */
                        expireTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a ThreatUri. */
                    class ThreatUri implements IThreatUri {

                        /**
                         * Constructs a new ThreatUri.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.webrisk.v1.SearchUrisResponse.IThreatUri);

                        /** ThreatUri threatTypes. */
                        public threatTypes: google.cloud.webrisk.v1.ThreatType[];

                        /** ThreatUri expireTime. */
                        public expireTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new ThreatUri instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ThreatUri instance
                         */
                        public static create(properties?: google.cloud.webrisk.v1.SearchUrisResponse.IThreatUri): google.cloud.webrisk.v1.SearchUrisResponse.ThreatUri;

                        /**
                         * Encodes the specified ThreatUri message. Does not implicitly {@link google.cloud.webrisk.v1.SearchUrisResponse.ThreatUri.verify|verify} messages.
                         * @param message ThreatUri message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.webrisk.v1.SearchUrisResponse.IThreatUri, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ThreatUri message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1.SearchUrisResponse.ThreatUri.verify|verify} messages.
                         * @param message ThreatUri message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.webrisk.v1.SearchUrisResponse.IThreatUri, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ThreatUri message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ThreatUri
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1.SearchUrisResponse.ThreatUri;

                        /**
                         * Decodes a ThreatUri message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ThreatUri
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1.SearchUrisResponse.ThreatUri;

                        /**
                         * Verifies a ThreatUri message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ThreatUri message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ThreatUri
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1.SearchUrisResponse.ThreatUri;

                        /**
                         * Creates a plain object from a ThreatUri message. Also converts values to other types if specified.
                         * @param message ThreatUri
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.webrisk.v1.SearchUrisResponse.ThreatUri, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ThreatUri to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a SearchHashesRequest. */
                interface ISearchHashesRequest {

                    /** SearchHashesRequest hashPrefix */
                    hashPrefix?: (Uint8Array|string|null);

                    /** SearchHashesRequest threatTypes */
                    threatTypes?: (google.cloud.webrisk.v1.ThreatType[]|null);
                }

                /** Represents a SearchHashesRequest. */
                class SearchHashesRequest implements ISearchHashesRequest {

                    /**
                     * Constructs a new SearchHashesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1.ISearchHashesRequest);

                    /** SearchHashesRequest hashPrefix. */
                    public hashPrefix: (Uint8Array|string);

                    /** SearchHashesRequest threatTypes. */
                    public threatTypes: google.cloud.webrisk.v1.ThreatType[];

                    /**
                     * Creates a new SearchHashesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchHashesRequest instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1.ISearchHashesRequest): google.cloud.webrisk.v1.SearchHashesRequest;

                    /**
                     * Encodes the specified SearchHashesRequest message. Does not implicitly {@link google.cloud.webrisk.v1.SearchHashesRequest.verify|verify} messages.
                     * @param message SearchHashesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1.ISearchHashesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchHashesRequest message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1.SearchHashesRequest.verify|verify} messages.
                     * @param message SearchHashesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1.ISearchHashesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchHashesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchHashesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1.SearchHashesRequest;

                    /**
                     * Decodes a SearchHashesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchHashesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1.SearchHashesRequest;

                    /**
                     * Verifies a SearchHashesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchHashesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchHashesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1.SearchHashesRequest;

                    /**
                     * Creates a plain object from a SearchHashesRequest message. Also converts values to other types if specified.
                     * @param message SearchHashesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1.SearchHashesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchHashesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchHashesResponse. */
                interface ISearchHashesResponse {

                    /** SearchHashesResponse threats */
                    threats?: (google.cloud.webrisk.v1.SearchHashesResponse.IThreatHash[]|null);

                    /** SearchHashesResponse negativeExpireTime */
                    negativeExpireTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a SearchHashesResponse. */
                class SearchHashesResponse implements ISearchHashesResponse {

                    /**
                     * Constructs a new SearchHashesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1.ISearchHashesResponse);

                    /** SearchHashesResponse threats. */
                    public threats: google.cloud.webrisk.v1.SearchHashesResponse.IThreatHash[];

                    /** SearchHashesResponse negativeExpireTime. */
                    public negativeExpireTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new SearchHashesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchHashesResponse instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1.ISearchHashesResponse): google.cloud.webrisk.v1.SearchHashesResponse;

                    /**
                     * Encodes the specified SearchHashesResponse message. Does not implicitly {@link google.cloud.webrisk.v1.SearchHashesResponse.verify|verify} messages.
                     * @param message SearchHashesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1.ISearchHashesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchHashesResponse message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1.SearchHashesResponse.verify|verify} messages.
                     * @param message SearchHashesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1.ISearchHashesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchHashesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchHashesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1.SearchHashesResponse;

                    /**
                     * Decodes a SearchHashesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchHashesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1.SearchHashesResponse;

                    /**
                     * Verifies a SearchHashesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchHashesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchHashesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1.SearchHashesResponse;

                    /**
                     * Creates a plain object from a SearchHashesResponse message. Also converts values to other types if specified.
                     * @param message SearchHashesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1.SearchHashesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchHashesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SearchHashesResponse {

                    /** Properties of a ThreatHash. */
                    interface IThreatHash {

                        /** ThreatHash threatTypes */
                        threatTypes?: (google.cloud.webrisk.v1.ThreatType[]|null);

                        /** ThreatHash hash */
                        hash?: (Uint8Array|string|null);

                        /** ThreatHash expireTime */
                        expireTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a ThreatHash. */
                    class ThreatHash implements IThreatHash {

                        /**
                         * Constructs a new ThreatHash.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.webrisk.v1.SearchHashesResponse.IThreatHash);

                        /** ThreatHash threatTypes. */
                        public threatTypes: google.cloud.webrisk.v1.ThreatType[];

                        /** ThreatHash hash. */
                        public hash: (Uint8Array|string);

                        /** ThreatHash expireTime. */
                        public expireTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new ThreatHash instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ThreatHash instance
                         */
                        public static create(properties?: google.cloud.webrisk.v1.SearchHashesResponse.IThreatHash): google.cloud.webrisk.v1.SearchHashesResponse.ThreatHash;

                        /**
                         * Encodes the specified ThreatHash message. Does not implicitly {@link google.cloud.webrisk.v1.SearchHashesResponse.ThreatHash.verify|verify} messages.
                         * @param message ThreatHash message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.webrisk.v1.SearchHashesResponse.IThreatHash, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ThreatHash message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1.SearchHashesResponse.ThreatHash.verify|verify} messages.
                         * @param message ThreatHash message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.webrisk.v1.SearchHashesResponse.IThreatHash, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ThreatHash message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ThreatHash
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1.SearchHashesResponse.ThreatHash;

                        /**
                         * Decodes a ThreatHash message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ThreatHash
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1.SearchHashesResponse.ThreatHash;

                        /**
                         * Verifies a ThreatHash message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ThreatHash message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ThreatHash
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1.SearchHashesResponse.ThreatHash;

                        /**
                         * Creates a plain object from a ThreatHash message. Also converts values to other types if specified.
                         * @param message ThreatHash
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.webrisk.v1.SearchHashesResponse.ThreatHash, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ThreatHash to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a ThreatEntryAdditions. */
                interface IThreatEntryAdditions {

                    /** ThreatEntryAdditions rawHashes */
                    rawHashes?: (google.cloud.webrisk.v1.IRawHashes[]|null);

                    /** ThreatEntryAdditions riceHashes */
                    riceHashes?: (google.cloud.webrisk.v1.IRiceDeltaEncoding|null);
                }

                /** Represents a ThreatEntryAdditions. */
                class ThreatEntryAdditions implements IThreatEntryAdditions {

                    /**
                     * Constructs a new ThreatEntryAdditions.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1.IThreatEntryAdditions);

                    /** ThreatEntryAdditions rawHashes. */
                    public rawHashes: google.cloud.webrisk.v1.IRawHashes[];

                    /** ThreatEntryAdditions riceHashes. */
                    public riceHashes?: (google.cloud.webrisk.v1.IRiceDeltaEncoding|null);

                    /**
                     * Creates a new ThreatEntryAdditions instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ThreatEntryAdditions instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1.IThreatEntryAdditions): google.cloud.webrisk.v1.ThreatEntryAdditions;

                    /**
                     * Encodes the specified ThreatEntryAdditions message. Does not implicitly {@link google.cloud.webrisk.v1.ThreatEntryAdditions.verify|verify} messages.
                     * @param message ThreatEntryAdditions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1.IThreatEntryAdditions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ThreatEntryAdditions message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1.ThreatEntryAdditions.verify|verify} messages.
                     * @param message ThreatEntryAdditions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1.IThreatEntryAdditions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ThreatEntryAdditions message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ThreatEntryAdditions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1.ThreatEntryAdditions;

                    /**
                     * Decodes a ThreatEntryAdditions message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ThreatEntryAdditions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1.ThreatEntryAdditions;

                    /**
                     * Verifies a ThreatEntryAdditions message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ThreatEntryAdditions message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ThreatEntryAdditions
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1.ThreatEntryAdditions;

                    /**
                     * Creates a plain object from a ThreatEntryAdditions message. Also converts values to other types if specified.
                     * @param message ThreatEntryAdditions
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1.ThreatEntryAdditions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ThreatEntryAdditions to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ThreatEntryRemovals. */
                interface IThreatEntryRemovals {

                    /** ThreatEntryRemovals rawIndices */
                    rawIndices?: (google.cloud.webrisk.v1.IRawIndices|null);

                    /** ThreatEntryRemovals riceIndices */
                    riceIndices?: (google.cloud.webrisk.v1.IRiceDeltaEncoding|null);
                }

                /** Represents a ThreatEntryRemovals. */
                class ThreatEntryRemovals implements IThreatEntryRemovals {

                    /**
                     * Constructs a new ThreatEntryRemovals.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1.IThreatEntryRemovals);

                    /** ThreatEntryRemovals rawIndices. */
                    public rawIndices?: (google.cloud.webrisk.v1.IRawIndices|null);

                    /** ThreatEntryRemovals riceIndices. */
                    public riceIndices?: (google.cloud.webrisk.v1.IRiceDeltaEncoding|null);

                    /**
                     * Creates a new ThreatEntryRemovals instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ThreatEntryRemovals instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1.IThreatEntryRemovals): google.cloud.webrisk.v1.ThreatEntryRemovals;

                    /**
                     * Encodes the specified ThreatEntryRemovals message. Does not implicitly {@link google.cloud.webrisk.v1.ThreatEntryRemovals.verify|verify} messages.
                     * @param message ThreatEntryRemovals message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1.IThreatEntryRemovals, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ThreatEntryRemovals message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1.ThreatEntryRemovals.verify|verify} messages.
                     * @param message ThreatEntryRemovals message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1.IThreatEntryRemovals, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ThreatEntryRemovals message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ThreatEntryRemovals
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1.ThreatEntryRemovals;

                    /**
                     * Decodes a ThreatEntryRemovals message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ThreatEntryRemovals
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1.ThreatEntryRemovals;

                    /**
                     * Verifies a ThreatEntryRemovals message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ThreatEntryRemovals message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ThreatEntryRemovals
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1.ThreatEntryRemovals;

                    /**
                     * Creates a plain object from a ThreatEntryRemovals message. Also converts values to other types if specified.
                     * @param message ThreatEntryRemovals
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1.ThreatEntryRemovals, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ThreatEntryRemovals to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** ThreatType enum. */
                enum ThreatType {
                    THREAT_TYPE_UNSPECIFIED = 0,
                    MALWARE = 1,
                    SOCIAL_ENGINEERING = 2,
                    UNWANTED_SOFTWARE = 3
                }

                /** CompressionType enum. */
                enum CompressionType {
                    COMPRESSION_TYPE_UNSPECIFIED = 0,
                    RAW = 1,
                    RICE = 2
                }

                /** Properties of a RawIndices. */
                interface IRawIndices {

                    /** RawIndices indices */
                    indices?: (number[]|null);
                }

                /** Represents a RawIndices. */
                class RawIndices implements IRawIndices {

                    /**
                     * Constructs a new RawIndices.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1.IRawIndices);

                    /** RawIndices indices. */
                    public indices: number[];

                    /**
                     * Creates a new RawIndices instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RawIndices instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1.IRawIndices): google.cloud.webrisk.v1.RawIndices;

                    /**
                     * Encodes the specified RawIndices message. Does not implicitly {@link google.cloud.webrisk.v1.RawIndices.verify|verify} messages.
                     * @param message RawIndices message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1.IRawIndices, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RawIndices message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1.RawIndices.verify|verify} messages.
                     * @param message RawIndices message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1.IRawIndices, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RawIndices message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RawIndices
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1.RawIndices;

                    /**
                     * Decodes a RawIndices message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RawIndices
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1.RawIndices;

                    /**
                     * Verifies a RawIndices message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RawIndices message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RawIndices
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1.RawIndices;

                    /**
                     * Creates a plain object from a RawIndices message. Also converts values to other types if specified.
                     * @param message RawIndices
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1.RawIndices, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RawIndices to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RawHashes. */
                interface IRawHashes {

                    /** RawHashes prefixSize */
                    prefixSize?: (number|null);

                    /** RawHashes rawHashes */
                    rawHashes?: (Uint8Array|string|null);
                }

                /** Represents a RawHashes. */
                class RawHashes implements IRawHashes {

                    /**
                     * Constructs a new RawHashes.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1.IRawHashes);

                    /** RawHashes prefixSize. */
                    public prefixSize: number;

                    /** RawHashes rawHashes. */
                    public rawHashes: (Uint8Array|string);

                    /**
                     * Creates a new RawHashes instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RawHashes instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1.IRawHashes): google.cloud.webrisk.v1.RawHashes;

                    /**
                     * Encodes the specified RawHashes message. Does not implicitly {@link google.cloud.webrisk.v1.RawHashes.verify|verify} messages.
                     * @param message RawHashes message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1.IRawHashes, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RawHashes message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1.RawHashes.verify|verify} messages.
                     * @param message RawHashes message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1.IRawHashes, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RawHashes message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RawHashes
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1.RawHashes;

                    /**
                     * Decodes a RawHashes message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RawHashes
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1.RawHashes;

                    /**
                     * Verifies a RawHashes message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RawHashes message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RawHashes
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1.RawHashes;

                    /**
                     * Creates a plain object from a RawHashes message. Also converts values to other types if specified.
                     * @param message RawHashes
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1.RawHashes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RawHashes to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RiceDeltaEncoding. */
                interface IRiceDeltaEncoding {

                    /** RiceDeltaEncoding firstValue */
                    firstValue?: (number|Long|string|null);

                    /** RiceDeltaEncoding riceParameter */
                    riceParameter?: (number|null);

                    /** RiceDeltaEncoding entryCount */
                    entryCount?: (number|null);

                    /** RiceDeltaEncoding encodedData */
                    encodedData?: (Uint8Array|string|null);
                }

                /** Represents a RiceDeltaEncoding. */
                class RiceDeltaEncoding implements IRiceDeltaEncoding {

                    /**
                     * Constructs a new RiceDeltaEncoding.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1.IRiceDeltaEncoding);

                    /** RiceDeltaEncoding firstValue. */
                    public firstValue: (number|Long|string);

                    /** RiceDeltaEncoding riceParameter. */
                    public riceParameter: number;

                    /** RiceDeltaEncoding entryCount. */
                    public entryCount: number;

                    /** RiceDeltaEncoding encodedData. */
                    public encodedData: (Uint8Array|string);

                    /**
                     * Creates a new RiceDeltaEncoding instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RiceDeltaEncoding instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1.IRiceDeltaEncoding): google.cloud.webrisk.v1.RiceDeltaEncoding;

                    /**
                     * Encodes the specified RiceDeltaEncoding message. Does not implicitly {@link google.cloud.webrisk.v1.RiceDeltaEncoding.verify|verify} messages.
                     * @param message RiceDeltaEncoding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1.IRiceDeltaEncoding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RiceDeltaEncoding message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1.RiceDeltaEncoding.verify|verify} messages.
                     * @param message RiceDeltaEncoding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1.IRiceDeltaEncoding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RiceDeltaEncoding message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RiceDeltaEncoding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1.RiceDeltaEncoding;

                    /**
                     * Decodes a RiceDeltaEncoding message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RiceDeltaEncoding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1.RiceDeltaEncoding;

                    /**
                     * Verifies a RiceDeltaEncoding message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RiceDeltaEncoding message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RiceDeltaEncoding
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1.RiceDeltaEncoding;

                    /**
                     * Creates a plain object from a RiceDeltaEncoding message. Also converts values to other types if specified.
                     * @param message RiceDeltaEncoding
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1.RiceDeltaEncoding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RiceDeltaEncoding to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Submission. */
                interface ISubmission {

                    /** Submission uri */
                    uri?: (string|null);
                }

                /** Represents a Submission. */
                class Submission implements ISubmission {

                    /**
                     * Constructs a new Submission.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1.ISubmission);

                    /** Submission uri. */
                    public uri: string;

                    /**
                     * Creates a new Submission instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Submission instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1.ISubmission): google.cloud.webrisk.v1.Submission;

                    /**
                     * Encodes the specified Submission message. Does not implicitly {@link google.cloud.webrisk.v1.Submission.verify|verify} messages.
                     * @param message Submission message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1.ISubmission, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Submission message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1.Submission.verify|verify} messages.
                     * @param message Submission message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1.ISubmission, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Submission message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Submission
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1.Submission;

                    /**
                     * Decodes a Submission message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Submission
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1.Submission;

                    /**
                     * Verifies a Submission message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Submission message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Submission
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1.Submission;

                    /**
                     * Creates a plain object from a Submission message. Also converts values to other types if specified.
                     * @param message Submission
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1.Submission, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Submission to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateSubmissionRequest. */
                interface ICreateSubmissionRequest {

                    /** CreateSubmissionRequest parent */
                    parent?: (string|null);

                    /** CreateSubmissionRequest submission */
                    submission?: (google.cloud.webrisk.v1.ISubmission|null);
                }

                /** Represents a CreateSubmissionRequest. */
                class CreateSubmissionRequest implements ICreateSubmissionRequest {

                    /**
                     * Constructs a new CreateSubmissionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1.ICreateSubmissionRequest);

                    /** CreateSubmissionRequest parent. */
                    public parent: string;

                    /** CreateSubmissionRequest submission. */
                    public submission?: (google.cloud.webrisk.v1.ISubmission|null);

                    /**
                     * Creates a new CreateSubmissionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateSubmissionRequest instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1.ICreateSubmissionRequest): google.cloud.webrisk.v1.CreateSubmissionRequest;

                    /**
                     * Encodes the specified CreateSubmissionRequest message. Does not implicitly {@link google.cloud.webrisk.v1.CreateSubmissionRequest.verify|verify} messages.
                     * @param message CreateSubmissionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1.ICreateSubmissionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateSubmissionRequest message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1.CreateSubmissionRequest.verify|verify} messages.
                     * @param message CreateSubmissionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1.ICreateSubmissionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateSubmissionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateSubmissionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1.CreateSubmissionRequest;

                    /**
                     * Decodes a CreateSubmissionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateSubmissionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1.CreateSubmissionRequest;

                    /**
                     * Verifies a CreateSubmissionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateSubmissionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateSubmissionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1.CreateSubmissionRequest;

                    /**
                     * Creates a plain object from a CreateSubmissionRequest message. Also converts values to other types if specified.
                     * @param message CreateSubmissionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1.CreateSubmissionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateSubmissionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Represents a WebRiskServiceV1Beta1 */
                class WebRiskServiceV1Beta1 extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new WebRiskServiceV1Beta1 service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new WebRiskServiceV1Beta1 service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): WebRiskServiceV1Beta1;

                    /**
                     * Calls ComputeThreatListDiff.
                     * @param request ComputeThreatListDiffRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ComputeThreatListDiffResponse
                     */
                    public computeThreatListDiff(request: google.cloud.webrisk.v1beta1.IComputeThreatListDiffRequest, callback: google.cloud.webrisk.v1beta1.WebRiskServiceV1Beta1.ComputeThreatListDiffCallback): void;

                    /**
                     * Calls ComputeThreatListDiff.
                     * @param request ComputeThreatListDiffRequest message or plain object
                     * @returns Promise
                     */
                    public computeThreatListDiff(request: google.cloud.webrisk.v1beta1.IComputeThreatListDiffRequest): Promise<google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse>;

                    /**
                     * Calls SearchUris.
                     * @param request SearchUrisRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchUrisResponse
                     */
                    public searchUris(request: google.cloud.webrisk.v1beta1.ISearchUrisRequest, callback: google.cloud.webrisk.v1beta1.WebRiskServiceV1Beta1.SearchUrisCallback): void;

                    /**
                     * Calls SearchUris.
                     * @param request SearchUrisRequest message or plain object
                     * @returns Promise
                     */
                    public searchUris(request: google.cloud.webrisk.v1beta1.ISearchUrisRequest): Promise<google.cloud.webrisk.v1beta1.SearchUrisResponse>;

                    /**
                     * Calls SearchHashes.
                     * @param request SearchHashesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchHashesResponse
                     */
                    public searchHashes(request: google.cloud.webrisk.v1beta1.ISearchHashesRequest, callback: google.cloud.webrisk.v1beta1.WebRiskServiceV1Beta1.SearchHashesCallback): void;

                    /**
                     * Calls SearchHashes.
                     * @param request SearchHashesRequest message or plain object
                     * @returns Promise
                     */
                    public searchHashes(request: google.cloud.webrisk.v1beta1.ISearchHashesRequest): Promise<google.cloud.webrisk.v1beta1.SearchHashesResponse>;
                }

                namespace WebRiskServiceV1Beta1 {

                    /**
                     * Callback as used by {@link google.cloud.webrisk.v1beta1.WebRiskServiceV1Beta1#computeThreatListDiff}.
                     * @param error Error, if any
                     * @param [response] ComputeThreatListDiffResponse
                     */
                    type ComputeThreatListDiffCallback = (error: (Error|null), response?: google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.webrisk.v1beta1.WebRiskServiceV1Beta1#searchUris}.
                     * @param error Error, if any
                     * @param [response] SearchUrisResponse
                     */
                    type SearchUrisCallback = (error: (Error|null), response?: google.cloud.webrisk.v1beta1.SearchUrisResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.webrisk.v1beta1.WebRiskServiceV1Beta1#searchHashes}.
                     * @param error Error, if any
                     * @param [response] SearchHashesResponse
                     */
                    type SearchHashesCallback = (error: (Error|null), response?: google.cloud.webrisk.v1beta1.SearchHashesResponse) => void;
                }

                /** Properties of a ComputeThreatListDiffRequest. */
                interface IComputeThreatListDiffRequest {

                    /** ComputeThreatListDiffRequest threatType */
                    threatType?: (google.cloud.webrisk.v1beta1.ThreatType|keyof typeof google.cloud.webrisk.v1beta1.ThreatType|null);

                    /** ComputeThreatListDiffRequest versionToken */
                    versionToken?: (Uint8Array|string|null);

                    /** ComputeThreatListDiffRequest constraints */
                    constraints?: (google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest.IConstraints|null);
                }

                /** Represents a ComputeThreatListDiffRequest. */
                class ComputeThreatListDiffRequest implements IComputeThreatListDiffRequest {

                    /**
                     * Constructs a new ComputeThreatListDiffRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1beta1.IComputeThreatListDiffRequest);

                    /** ComputeThreatListDiffRequest threatType. */
                    public threatType: (google.cloud.webrisk.v1beta1.ThreatType|keyof typeof google.cloud.webrisk.v1beta1.ThreatType);

                    /** ComputeThreatListDiffRequest versionToken. */
                    public versionToken: (Uint8Array|string);

                    /** ComputeThreatListDiffRequest constraints. */
                    public constraints?: (google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest.IConstraints|null);

                    /**
                     * Creates a new ComputeThreatListDiffRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ComputeThreatListDiffRequest instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1beta1.IComputeThreatListDiffRequest): google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest;

                    /**
                     * Encodes the specified ComputeThreatListDiffRequest message. Does not implicitly {@link google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest.verify|verify} messages.
                     * @param message ComputeThreatListDiffRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1beta1.IComputeThreatListDiffRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ComputeThreatListDiffRequest message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest.verify|verify} messages.
                     * @param message ComputeThreatListDiffRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1beta1.IComputeThreatListDiffRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ComputeThreatListDiffRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ComputeThreatListDiffRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest;

                    /**
                     * Decodes a ComputeThreatListDiffRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ComputeThreatListDiffRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest;

                    /**
                     * Verifies a ComputeThreatListDiffRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ComputeThreatListDiffRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ComputeThreatListDiffRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest;

                    /**
                     * Creates a plain object from a ComputeThreatListDiffRequest message. Also converts values to other types if specified.
                     * @param message ComputeThreatListDiffRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ComputeThreatListDiffRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ComputeThreatListDiffRequest {

                    /** Properties of a Constraints. */
                    interface IConstraints {

                        /** Constraints maxDiffEntries */
                        maxDiffEntries?: (number|null);

                        /** Constraints maxDatabaseEntries */
                        maxDatabaseEntries?: (number|null);

                        /** Constraints supportedCompressions */
                        supportedCompressions?: (google.cloud.webrisk.v1beta1.CompressionType[]|null);
                    }

                    /** Represents a Constraints. */
                    class Constraints implements IConstraints {

                        /**
                         * Constructs a new Constraints.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest.IConstraints);

                        /** Constraints maxDiffEntries. */
                        public maxDiffEntries: number;

                        /** Constraints maxDatabaseEntries. */
                        public maxDatabaseEntries: number;

                        /** Constraints supportedCompressions. */
                        public supportedCompressions: google.cloud.webrisk.v1beta1.CompressionType[];

                        /**
                         * Creates a new Constraints instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Constraints instance
                         */
                        public static create(properties?: google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest.IConstraints): google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest.Constraints;

                        /**
                         * Encodes the specified Constraints message. Does not implicitly {@link google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest.Constraints.verify|verify} messages.
                         * @param message Constraints message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest.IConstraints, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Constraints message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest.Constraints.verify|verify} messages.
                         * @param message Constraints message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest.IConstraints, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Constraints message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Constraints
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest.Constraints;

                        /**
                         * Decodes a Constraints message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Constraints
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest.Constraints;

                        /**
                         * Verifies a Constraints message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Constraints message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Constraints
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest.Constraints;

                        /**
                         * Creates a plain object from a Constraints message. Also converts values to other types if specified.
                         * @param message Constraints
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest.Constraints, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Constraints to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a ComputeThreatListDiffResponse. */
                interface IComputeThreatListDiffResponse {

                    /** ComputeThreatListDiffResponse responseType */
                    responseType?: (google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse.ResponseType|keyof typeof google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse.ResponseType|null);

                    /** ComputeThreatListDiffResponse additions */
                    additions?: (google.cloud.webrisk.v1beta1.IThreatEntryAdditions|null);

                    /** ComputeThreatListDiffResponse removals */
                    removals?: (google.cloud.webrisk.v1beta1.IThreatEntryRemovals|null);

                    /** ComputeThreatListDiffResponse newVersionToken */
                    newVersionToken?: (Uint8Array|string|null);

                    /** ComputeThreatListDiffResponse checksum */
                    checksum?: (google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse.IChecksum|null);

                    /** ComputeThreatListDiffResponse recommendedNextDiff */
                    recommendedNextDiff?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a ComputeThreatListDiffResponse. */
                class ComputeThreatListDiffResponse implements IComputeThreatListDiffResponse {

                    /**
                     * Constructs a new ComputeThreatListDiffResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1beta1.IComputeThreatListDiffResponse);

                    /** ComputeThreatListDiffResponse responseType. */
                    public responseType: (google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse.ResponseType|keyof typeof google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse.ResponseType);

                    /** ComputeThreatListDiffResponse additions. */
                    public additions?: (google.cloud.webrisk.v1beta1.IThreatEntryAdditions|null);

                    /** ComputeThreatListDiffResponse removals. */
                    public removals?: (google.cloud.webrisk.v1beta1.IThreatEntryRemovals|null);

                    /** ComputeThreatListDiffResponse newVersionToken. */
                    public newVersionToken: (Uint8Array|string);

                    /** ComputeThreatListDiffResponse checksum. */
                    public checksum?: (google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse.IChecksum|null);

                    /** ComputeThreatListDiffResponse recommendedNextDiff. */
                    public recommendedNextDiff?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new ComputeThreatListDiffResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ComputeThreatListDiffResponse instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1beta1.IComputeThreatListDiffResponse): google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse;

                    /**
                     * Encodes the specified ComputeThreatListDiffResponse message. Does not implicitly {@link google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse.verify|verify} messages.
                     * @param message ComputeThreatListDiffResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1beta1.IComputeThreatListDiffResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ComputeThreatListDiffResponse message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse.verify|verify} messages.
                     * @param message ComputeThreatListDiffResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1beta1.IComputeThreatListDiffResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ComputeThreatListDiffResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ComputeThreatListDiffResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse;

                    /**
                     * Decodes a ComputeThreatListDiffResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ComputeThreatListDiffResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse;

                    /**
                     * Verifies a ComputeThreatListDiffResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ComputeThreatListDiffResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ComputeThreatListDiffResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse;

                    /**
                     * Creates a plain object from a ComputeThreatListDiffResponse message. Also converts values to other types if specified.
                     * @param message ComputeThreatListDiffResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ComputeThreatListDiffResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ComputeThreatListDiffResponse {

                    /** Properties of a Checksum. */
                    interface IChecksum {

                        /** Checksum sha256 */
                        sha256?: (Uint8Array|string|null);
                    }

                    /** Represents a Checksum. */
                    class Checksum implements IChecksum {

                        /**
                         * Constructs a new Checksum.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse.IChecksum);

                        /** Checksum sha256. */
                        public sha256: (Uint8Array|string);

                        /**
                         * Creates a new Checksum instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Checksum instance
                         */
                        public static create(properties?: google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse.IChecksum): google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse.Checksum;

                        /**
                         * Encodes the specified Checksum message. Does not implicitly {@link google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse.Checksum.verify|verify} messages.
                         * @param message Checksum message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse.IChecksum, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Checksum message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse.Checksum.verify|verify} messages.
                         * @param message Checksum message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse.IChecksum, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Checksum message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Checksum
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse.Checksum;

                        /**
                         * Decodes a Checksum message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Checksum
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse.Checksum;

                        /**
                         * Verifies a Checksum message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Checksum message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Checksum
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse.Checksum;

                        /**
                         * Creates a plain object from a Checksum message. Also converts values to other types if specified.
                         * @param message Checksum
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse.Checksum, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Checksum to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** ResponseType enum. */
                    enum ResponseType {
                        RESPONSE_TYPE_UNSPECIFIED = 0,
                        DIFF = 1,
                        RESET = 2
                    }
                }

                /** Properties of a SearchUrisRequest. */
                interface ISearchUrisRequest {

                    /** SearchUrisRequest uri */
                    uri?: (string|null);

                    /** SearchUrisRequest threatTypes */
                    threatTypes?: (google.cloud.webrisk.v1beta1.ThreatType[]|null);
                }

                /** Represents a SearchUrisRequest. */
                class SearchUrisRequest implements ISearchUrisRequest {

                    /**
                     * Constructs a new SearchUrisRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1beta1.ISearchUrisRequest);

                    /** SearchUrisRequest uri. */
                    public uri: string;

                    /** SearchUrisRequest threatTypes. */
                    public threatTypes: google.cloud.webrisk.v1beta1.ThreatType[];

                    /**
                     * Creates a new SearchUrisRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchUrisRequest instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1beta1.ISearchUrisRequest): google.cloud.webrisk.v1beta1.SearchUrisRequest;

                    /**
                     * Encodes the specified SearchUrisRequest message. Does not implicitly {@link google.cloud.webrisk.v1beta1.SearchUrisRequest.verify|verify} messages.
                     * @param message SearchUrisRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1beta1.ISearchUrisRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchUrisRequest message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1beta1.SearchUrisRequest.verify|verify} messages.
                     * @param message SearchUrisRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1beta1.ISearchUrisRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchUrisRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchUrisRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1beta1.SearchUrisRequest;

                    /**
                     * Decodes a SearchUrisRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchUrisRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1beta1.SearchUrisRequest;

                    /**
                     * Verifies a SearchUrisRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchUrisRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchUrisRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1beta1.SearchUrisRequest;

                    /**
                     * Creates a plain object from a SearchUrisRequest message. Also converts values to other types if specified.
                     * @param message SearchUrisRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1beta1.SearchUrisRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchUrisRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchUrisResponse. */
                interface ISearchUrisResponse {

                    /** SearchUrisResponse threat */
                    threat?: (google.cloud.webrisk.v1beta1.SearchUrisResponse.IThreatUri|null);
                }

                /** Represents a SearchUrisResponse. */
                class SearchUrisResponse implements ISearchUrisResponse {

                    /**
                     * Constructs a new SearchUrisResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1beta1.ISearchUrisResponse);

                    /** SearchUrisResponse threat. */
                    public threat?: (google.cloud.webrisk.v1beta1.SearchUrisResponse.IThreatUri|null);

                    /**
                     * Creates a new SearchUrisResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchUrisResponse instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1beta1.ISearchUrisResponse): google.cloud.webrisk.v1beta1.SearchUrisResponse;

                    /**
                     * Encodes the specified SearchUrisResponse message. Does not implicitly {@link google.cloud.webrisk.v1beta1.SearchUrisResponse.verify|verify} messages.
                     * @param message SearchUrisResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1beta1.ISearchUrisResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchUrisResponse message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1beta1.SearchUrisResponse.verify|verify} messages.
                     * @param message SearchUrisResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1beta1.ISearchUrisResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchUrisResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchUrisResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1beta1.SearchUrisResponse;

                    /**
                     * Decodes a SearchUrisResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchUrisResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1beta1.SearchUrisResponse;

                    /**
                     * Verifies a SearchUrisResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchUrisResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchUrisResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1beta1.SearchUrisResponse;

                    /**
                     * Creates a plain object from a SearchUrisResponse message. Also converts values to other types if specified.
                     * @param message SearchUrisResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1beta1.SearchUrisResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchUrisResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SearchUrisResponse {

                    /** Properties of a ThreatUri. */
                    interface IThreatUri {

                        /** ThreatUri threatTypes */
                        threatTypes?: (google.cloud.webrisk.v1beta1.ThreatType[]|null);

                        /** ThreatUri expireTime */
                        expireTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a ThreatUri. */
                    class ThreatUri implements IThreatUri {

                        /**
                         * Constructs a new ThreatUri.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.webrisk.v1beta1.SearchUrisResponse.IThreatUri);

                        /** ThreatUri threatTypes. */
                        public threatTypes: google.cloud.webrisk.v1beta1.ThreatType[];

                        /** ThreatUri expireTime. */
                        public expireTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new ThreatUri instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ThreatUri instance
                         */
                        public static create(properties?: google.cloud.webrisk.v1beta1.SearchUrisResponse.IThreatUri): google.cloud.webrisk.v1beta1.SearchUrisResponse.ThreatUri;

                        /**
                         * Encodes the specified ThreatUri message. Does not implicitly {@link google.cloud.webrisk.v1beta1.SearchUrisResponse.ThreatUri.verify|verify} messages.
                         * @param message ThreatUri message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.webrisk.v1beta1.SearchUrisResponse.IThreatUri, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ThreatUri message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1beta1.SearchUrisResponse.ThreatUri.verify|verify} messages.
                         * @param message ThreatUri message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.webrisk.v1beta1.SearchUrisResponse.IThreatUri, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ThreatUri message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ThreatUri
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1beta1.SearchUrisResponse.ThreatUri;

                        /**
                         * Decodes a ThreatUri message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ThreatUri
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1beta1.SearchUrisResponse.ThreatUri;

                        /**
                         * Verifies a ThreatUri message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ThreatUri message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ThreatUri
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1beta1.SearchUrisResponse.ThreatUri;

                        /**
                         * Creates a plain object from a ThreatUri message. Also converts values to other types if specified.
                         * @param message ThreatUri
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.webrisk.v1beta1.SearchUrisResponse.ThreatUri, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ThreatUri to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a SearchHashesRequest. */
                interface ISearchHashesRequest {

                    /** SearchHashesRequest hashPrefix */
                    hashPrefix?: (Uint8Array|string|null);

                    /** SearchHashesRequest threatTypes */
                    threatTypes?: (google.cloud.webrisk.v1beta1.ThreatType[]|null);
                }

                /** Represents a SearchHashesRequest. */
                class SearchHashesRequest implements ISearchHashesRequest {

                    /**
                     * Constructs a new SearchHashesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1beta1.ISearchHashesRequest);

                    /** SearchHashesRequest hashPrefix. */
                    public hashPrefix: (Uint8Array|string);

                    /** SearchHashesRequest threatTypes. */
                    public threatTypes: google.cloud.webrisk.v1beta1.ThreatType[];

                    /**
                     * Creates a new SearchHashesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchHashesRequest instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1beta1.ISearchHashesRequest): google.cloud.webrisk.v1beta1.SearchHashesRequest;

                    /**
                     * Encodes the specified SearchHashesRequest message. Does not implicitly {@link google.cloud.webrisk.v1beta1.SearchHashesRequest.verify|verify} messages.
                     * @param message SearchHashesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1beta1.ISearchHashesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchHashesRequest message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1beta1.SearchHashesRequest.verify|verify} messages.
                     * @param message SearchHashesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1beta1.ISearchHashesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchHashesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchHashesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1beta1.SearchHashesRequest;

                    /**
                     * Decodes a SearchHashesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchHashesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1beta1.SearchHashesRequest;

                    /**
                     * Verifies a SearchHashesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchHashesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchHashesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1beta1.SearchHashesRequest;

                    /**
                     * Creates a plain object from a SearchHashesRequest message. Also converts values to other types if specified.
                     * @param message SearchHashesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1beta1.SearchHashesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchHashesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchHashesResponse. */
                interface ISearchHashesResponse {

                    /** SearchHashesResponse threats */
                    threats?: (google.cloud.webrisk.v1beta1.SearchHashesResponse.IThreatHash[]|null);

                    /** SearchHashesResponse negativeExpireTime */
                    negativeExpireTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a SearchHashesResponse. */
                class SearchHashesResponse implements ISearchHashesResponse {

                    /**
                     * Constructs a new SearchHashesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1beta1.ISearchHashesResponse);

                    /** SearchHashesResponse threats. */
                    public threats: google.cloud.webrisk.v1beta1.SearchHashesResponse.IThreatHash[];

                    /** SearchHashesResponse negativeExpireTime. */
                    public negativeExpireTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new SearchHashesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchHashesResponse instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1beta1.ISearchHashesResponse): google.cloud.webrisk.v1beta1.SearchHashesResponse;

                    /**
                     * Encodes the specified SearchHashesResponse message. Does not implicitly {@link google.cloud.webrisk.v1beta1.SearchHashesResponse.verify|verify} messages.
                     * @param message SearchHashesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1beta1.ISearchHashesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchHashesResponse message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1beta1.SearchHashesResponse.verify|verify} messages.
                     * @param message SearchHashesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1beta1.ISearchHashesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchHashesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchHashesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1beta1.SearchHashesResponse;

                    /**
                     * Decodes a SearchHashesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchHashesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1beta1.SearchHashesResponse;

                    /**
                     * Verifies a SearchHashesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchHashesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchHashesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1beta1.SearchHashesResponse;

                    /**
                     * Creates a plain object from a SearchHashesResponse message. Also converts values to other types if specified.
                     * @param message SearchHashesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1beta1.SearchHashesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchHashesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SearchHashesResponse {

                    /** Properties of a ThreatHash. */
                    interface IThreatHash {

                        /** ThreatHash threatTypes */
                        threatTypes?: (google.cloud.webrisk.v1beta1.ThreatType[]|null);

                        /** ThreatHash hash */
                        hash?: (Uint8Array|string|null);

                        /** ThreatHash expireTime */
                        expireTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a ThreatHash. */
                    class ThreatHash implements IThreatHash {

                        /**
                         * Constructs a new ThreatHash.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.webrisk.v1beta1.SearchHashesResponse.IThreatHash);

                        /** ThreatHash threatTypes. */
                        public threatTypes: google.cloud.webrisk.v1beta1.ThreatType[];

                        /** ThreatHash hash. */
                        public hash: (Uint8Array|string);

                        /** ThreatHash expireTime. */
                        public expireTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new ThreatHash instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ThreatHash instance
                         */
                        public static create(properties?: google.cloud.webrisk.v1beta1.SearchHashesResponse.IThreatHash): google.cloud.webrisk.v1beta1.SearchHashesResponse.ThreatHash;

                        /**
                         * Encodes the specified ThreatHash message. Does not implicitly {@link google.cloud.webrisk.v1beta1.SearchHashesResponse.ThreatHash.verify|verify} messages.
                         * @param message ThreatHash message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.webrisk.v1beta1.SearchHashesResponse.IThreatHash, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ThreatHash message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1beta1.SearchHashesResponse.ThreatHash.verify|verify} messages.
                         * @param message ThreatHash message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.webrisk.v1beta1.SearchHashesResponse.IThreatHash, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ThreatHash message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ThreatHash
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1beta1.SearchHashesResponse.ThreatHash;

                        /**
                         * Decodes a ThreatHash message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ThreatHash
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1beta1.SearchHashesResponse.ThreatHash;

                        /**
                         * Verifies a ThreatHash message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ThreatHash message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ThreatHash
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1beta1.SearchHashesResponse.ThreatHash;

                        /**
                         * Creates a plain object from a ThreatHash message. Also converts values to other types if specified.
                         * @param message ThreatHash
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.webrisk.v1beta1.SearchHashesResponse.ThreatHash, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ThreatHash to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a ThreatEntryAdditions. */
                interface IThreatEntryAdditions {

                    /** ThreatEntryAdditions rawHashes */
                    rawHashes?: (google.cloud.webrisk.v1beta1.IRawHashes[]|null);

                    /** ThreatEntryAdditions riceHashes */
                    riceHashes?: (google.cloud.webrisk.v1beta1.IRiceDeltaEncoding|null);
                }

                /** Represents a ThreatEntryAdditions. */
                class ThreatEntryAdditions implements IThreatEntryAdditions {

                    /**
                     * Constructs a new ThreatEntryAdditions.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1beta1.IThreatEntryAdditions);

                    /** ThreatEntryAdditions rawHashes. */
                    public rawHashes: google.cloud.webrisk.v1beta1.IRawHashes[];

                    /** ThreatEntryAdditions riceHashes. */
                    public riceHashes?: (google.cloud.webrisk.v1beta1.IRiceDeltaEncoding|null);

                    /**
                     * Creates a new ThreatEntryAdditions instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ThreatEntryAdditions instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1beta1.IThreatEntryAdditions): google.cloud.webrisk.v1beta1.ThreatEntryAdditions;

                    /**
                     * Encodes the specified ThreatEntryAdditions message. Does not implicitly {@link google.cloud.webrisk.v1beta1.ThreatEntryAdditions.verify|verify} messages.
                     * @param message ThreatEntryAdditions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1beta1.IThreatEntryAdditions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ThreatEntryAdditions message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1beta1.ThreatEntryAdditions.verify|verify} messages.
                     * @param message ThreatEntryAdditions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1beta1.IThreatEntryAdditions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ThreatEntryAdditions message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ThreatEntryAdditions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1beta1.ThreatEntryAdditions;

                    /**
                     * Decodes a ThreatEntryAdditions message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ThreatEntryAdditions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1beta1.ThreatEntryAdditions;

                    /**
                     * Verifies a ThreatEntryAdditions message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ThreatEntryAdditions message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ThreatEntryAdditions
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1beta1.ThreatEntryAdditions;

                    /**
                     * Creates a plain object from a ThreatEntryAdditions message. Also converts values to other types if specified.
                     * @param message ThreatEntryAdditions
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1beta1.ThreatEntryAdditions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ThreatEntryAdditions to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ThreatEntryRemovals. */
                interface IThreatEntryRemovals {

                    /** ThreatEntryRemovals rawIndices */
                    rawIndices?: (google.cloud.webrisk.v1beta1.IRawIndices|null);

                    /** ThreatEntryRemovals riceIndices */
                    riceIndices?: (google.cloud.webrisk.v1beta1.IRiceDeltaEncoding|null);
                }

                /** Represents a ThreatEntryRemovals. */
                class ThreatEntryRemovals implements IThreatEntryRemovals {

                    /**
                     * Constructs a new ThreatEntryRemovals.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1beta1.IThreatEntryRemovals);

                    /** ThreatEntryRemovals rawIndices. */
                    public rawIndices?: (google.cloud.webrisk.v1beta1.IRawIndices|null);

                    /** ThreatEntryRemovals riceIndices. */
                    public riceIndices?: (google.cloud.webrisk.v1beta1.IRiceDeltaEncoding|null);

                    /**
                     * Creates a new ThreatEntryRemovals instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ThreatEntryRemovals instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1beta1.IThreatEntryRemovals): google.cloud.webrisk.v1beta1.ThreatEntryRemovals;

                    /**
                     * Encodes the specified ThreatEntryRemovals message. Does not implicitly {@link google.cloud.webrisk.v1beta1.ThreatEntryRemovals.verify|verify} messages.
                     * @param message ThreatEntryRemovals message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1beta1.IThreatEntryRemovals, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ThreatEntryRemovals message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1beta1.ThreatEntryRemovals.verify|verify} messages.
                     * @param message ThreatEntryRemovals message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1beta1.IThreatEntryRemovals, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ThreatEntryRemovals message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ThreatEntryRemovals
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1beta1.ThreatEntryRemovals;

                    /**
                     * Decodes a ThreatEntryRemovals message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ThreatEntryRemovals
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1beta1.ThreatEntryRemovals;

                    /**
                     * Verifies a ThreatEntryRemovals message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ThreatEntryRemovals message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ThreatEntryRemovals
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1beta1.ThreatEntryRemovals;

                    /**
                     * Creates a plain object from a ThreatEntryRemovals message. Also converts values to other types if specified.
                     * @param message ThreatEntryRemovals
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1beta1.ThreatEntryRemovals, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ThreatEntryRemovals to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** ThreatType enum. */
                enum ThreatType {
                    THREAT_TYPE_UNSPECIFIED = 0,
                    MALWARE = 1,
                    SOCIAL_ENGINEERING = 2,
                    UNWANTED_SOFTWARE = 3
                }

                /** CompressionType enum. */
                enum CompressionType {
                    COMPRESSION_TYPE_UNSPECIFIED = 0,
                    RAW = 1,
                    RICE = 2
                }

                /** Properties of a RawIndices. */
                interface IRawIndices {

                    /** RawIndices indices */
                    indices?: (number[]|null);
                }

                /** Represents a RawIndices. */
                class RawIndices implements IRawIndices {

                    /**
                     * Constructs a new RawIndices.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1beta1.IRawIndices);

                    /** RawIndices indices. */
                    public indices: number[];

                    /**
                     * Creates a new RawIndices instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RawIndices instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1beta1.IRawIndices): google.cloud.webrisk.v1beta1.RawIndices;

                    /**
                     * Encodes the specified RawIndices message. Does not implicitly {@link google.cloud.webrisk.v1beta1.RawIndices.verify|verify} messages.
                     * @param message RawIndices message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1beta1.IRawIndices, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RawIndices message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1beta1.RawIndices.verify|verify} messages.
                     * @param message RawIndices message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1beta1.IRawIndices, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RawIndices message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RawIndices
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1beta1.RawIndices;

                    /**
                     * Decodes a RawIndices message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RawIndices
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1beta1.RawIndices;

                    /**
                     * Verifies a RawIndices message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RawIndices message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RawIndices
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1beta1.RawIndices;

                    /**
                     * Creates a plain object from a RawIndices message. Also converts values to other types if specified.
                     * @param message RawIndices
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1beta1.RawIndices, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RawIndices to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RawHashes. */
                interface IRawHashes {

                    /** RawHashes prefixSize */
                    prefixSize?: (number|null);

                    /** RawHashes rawHashes */
                    rawHashes?: (Uint8Array|string|null);
                }

                /** Represents a RawHashes. */
                class RawHashes implements IRawHashes {

                    /**
                     * Constructs a new RawHashes.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1beta1.IRawHashes);

                    /** RawHashes prefixSize. */
                    public prefixSize: number;

                    /** RawHashes rawHashes. */
                    public rawHashes: (Uint8Array|string);

                    /**
                     * Creates a new RawHashes instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RawHashes instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1beta1.IRawHashes): google.cloud.webrisk.v1beta1.RawHashes;

                    /**
                     * Encodes the specified RawHashes message. Does not implicitly {@link google.cloud.webrisk.v1beta1.RawHashes.verify|verify} messages.
                     * @param message RawHashes message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1beta1.IRawHashes, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RawHashes message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1beta1.RawHashes.verify|verify} messages.
                     * @param message RawHashes message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1beta1.IRawHashes, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RawHashes message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RawHashes
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1beta1.RawHashes;

                    /**
                     * Decodes a RawHashes message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RawHashes
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1beta1.RawHashes;

                    /**
                     * Verifies a RawHashes message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RawHashes message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RawHashes
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1beta1.RawHashes;

                    /**
                     * Creates a plain object from a RawHashes message. Also converts values to other types if specified.
                     * @param message RawHashes
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1beta1.RawHashes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RawHashes to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RiceDeltaEncoding. */
                interface IRiceDeltaEncoding {

                    /** RiceDeltaEncoding firstValue */
                    firstValue?: (number|Long|string|null);

                    /** RiceDeltaEncoding riceParameter */
                    riceParameter?: (number|null);

                    /** RiceDeltaEncoding entryCount */
                    entryCount?: (number|null);

                    /** RiceDeltaEncoding encodedData */
                    encodedData?: (Uint8Array|string|null);
                }

                /** Represents a RiceDeltaEncoding. */
                class RiceDeltaEncoding implements IRiceDeltaEncoding {

                    /**
                     * Constructs a new RiceDeltaEncoding.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.webrisk.v1beta1.IRiceDeltaEncoding);

                    /** RiceDeltaEncoding firstValue. */
                    public firstValue: (number|Long|string);

                    /** RiceDeltaEncoding riceParameter. */
                    public riceParameter: number;

                    /** RiceDeltaEncoding entryCount. */
                    public entryCount: number;

                    /** RiceDeltaEncoding encodedData. */
                    public encodedData: (Uint8Array|string);

                    /**
                     * Creates a new RiceDeltaEncoding instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RiceDeltaEncoding instance
                     */
                    public static create(properties?: google.cloud.webrisk.v1beta1.IRiceDeltaEncoding): google.cloud.webrisk.v1beta1.RiceDeltaEncoding;

                    /**
                     * Encodes the specified RiceDeltaEncoding message. Does not implicitly {@link google.cloud.webrisk.v1beta1.RiceDeltaEncoding.verify|verify} messages.
                     * @param message RiceDeltaEncoding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.webrisk.v1beta1.IRiceDeltaEncoding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RiceDeltaEncoding message, length delimited. Does not implicitly {@link google.cloud.webrisk.v1beta1.RiceDeltaEncoding.verify|verify} messages.
                     * @param message RiceDeltaEncoding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.webrisk.v1beta1.IRiceDeltaEncoding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RiceDeltaEncoding message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RiceDeltaEncoding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.webrisk.v1beta1.RiceDeltaEncoding;

                    /**
                     * Decodes a RiceDeltaEncoding message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RiceDeltaEncoding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.webrisk.v1beta1.RiceDeltaEncoding;

                    /**
                     * Verifies a RiceDeltaEncoding message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RiceDeltaEncoding message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RiceDeltaEncoding
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.webrisk.v1beta1.RiceDeltaEncoding;

                    /**
                     * Creates a plain object from a RiceDeltaEncoding message. Also converts values to other types if specified.
                     * @param message RiceDeltaEncoding
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.webrisk.v1beta1.RiceDeltaEncoding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RiceDeltaEncoding to JSON.
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
            UNORDERED_LIST = 6
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
    }
}
