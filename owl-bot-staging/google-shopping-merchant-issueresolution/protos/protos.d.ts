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

    /** Namespace shopping. */
    namespace shopping {

        /** Namespace merchant. */
        namespace merchant {

            /** Namespace issueresolution. */
            namespace issueresolution {

                /** Namespace v1. */
                namespace v1 {

                    /** Represents an AggregateProductStatusesService */
                    class AggregateProductStatusesService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new AggregateProductStatusesService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new AggregateProductStatusesService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AggregateProductStatusesService;

                        /**
                         * Calls ListAggregateProductStatuses.
                         * @param request ListAggregateProductStatusesRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListAggregateProductStatusesResponse
                         */
                        public listAggregateProductStatuses(request: google.shopping.merchant.issueresolution.v1.IListAggregateProductStatusesRequest, callback: google.shopping.merchant.issueresolution.v1.AggregateProductStatusesService.ListAggregateProductStatusesCallback): void;

                        /**
                         * Calls ListAggregateProductStatuses.
                         * @param request ListAggregateProductStatusesRequest message or plain object
                         * @returns Promise
                         */
                        public listAggregateProductStatuses(request: google.shopping.merchant.issueresolution.v1.IListAggregateProductStatusesRequest): Promise<google.shopping.merchant.issueresolution.v1.ListAggregateProductStatusesResponse>;
                    }

                    namespace AggregateProductStatusesService {

                        /**
                         * Callback as used by {@link google.shopping.merchant.issueresolution.v1.AggregateProductStatusesService|listAggregateProductStatuses}.
                         * @param error Error, if any
                         * @param [response] ListAggregateProductStatusesResponse
                         */
                        type ListAggregateProductStatusesCallback = (error: (Error|null), response?: google.shopping.merchant.issueresolution.v1.ListAggregateProductStatusesResponse) => void;
                    }

                    /** Properties of a ListAggregateProductStatusesRequest. */
                    interface IListAggregateProductStatusesRequest {

                        /** ListAggregateProductStatusesRequest parent */
                        parent?: (string|null);

                        /** ListAggregateProductStatusesRequest pageSize */
                        pageSize?: (number|null);

                        /** ListAggregateProductStatusesRequest pageToken */
                        pageToken?: (string|null);

                        /** ListAggregateProductStatusesRequest filter */
                        filter?: (string|null);
                    }

                    /** Represents a ListAggregateProductStatusesRequest. */
                    class ListAggregateProductStatusesRequest implements IListAggregateProductStatusesRequest {

                        /**
                         * Constructs a new ListAggregateProductStatusesRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.IListAggregateProductStatusesRequest);

                        /** ListAggregateProductStatusesRequest parent. */
                        public parent: string;

                        /** ListAggregateProductStatusesRequest pageSize. */
                        public pageSize: number;

                        /** ListAggregateProductStatusesRequest pageToken. */
                        public pageToken: string;

                        /** ListAggregateProductStatusesRequest filter. */
                        public filter: string;

                        /**
                         * Creates a new ListAggregateProductStatusesRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListAggregateProductStatusesRequest instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.IListAggregateProductStatusesRequest): google.shopping.merchant.issueresolution.v1.ListAggregateProductStatusesRequest;

                        /**
                         * Encodes the specified ListAggregateProductStatusesRequest message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.ListAggregateProductStatusesRequest.verify|verify} messages.
                         * @param message ListAggregateProductStatusesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.IListAggregateProductStatusesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListAggregateProductStatusesRequest message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.ListAggregateProductStatusesRequest.verify|verify} messages.
                         * @param message ListAggregateProductStatusesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.IListAggregateProductStatusesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListAggregateProductStatusesRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListAggregateProductStatusesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.ListAggregateProductStatusesRequest;

                        /**
                         * Decodes a ListAggregateProductStatusesRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListAggregateProductStatusesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.ListAggregateProductStatusesRequest;

                        /**
                         * Verifies a ListAggregateProductStatusesRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListAggregateProductStatusesRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListAggregateProductStatusesRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.ListAggregateProductStatusesRequest;

                        /**
                         * Creates a plain object from a ListAggregateProductStatusesRequest message. Also converts values to other types if specified.
                         * @param message ListAggregateProductStatusesRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.ListAggregateProductStatusesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListAggregateProductStatusesRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListAggregateProductStatusesRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListAggregateProductStatusesResponse. */
                    interface IListAggregateProductStatusesResponse {

                        /** ListAggregateProductStatusesResponse aggregateProductStatuses */
                        aggregateProductStatuses?: (google.shopping.merchant.issueresolution.v1.IAggregateProductStatus[]|null);

                        /** ListAggregateProductStatusesResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListAggregateProductStatusesResponse. */
                    class ListAggregateProductStatusesResponse implements IListAggregateProductStatusesResponse {

                        /**
                         * Constructs a new ListAggregateProductStatusesResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.IListAggregateProductStatusesResponse);

                        /** ListAggregateProductStatusesResponse aggregateProductStatuses. */
                        public aggregateProductStatuses: google.shopping.merchant.issueresolution.v1.IAggregateProductStatus[];

                        /** ListAggregateProductStatusesResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListAggregateProductStatusesResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListAggregateProductStatusesResponse instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.IListAggregateProductStatusesResponse): google.shopping.merchant.issueresolution.v1.ListAggregateProductStatusesResponse;

                        /**
                         * Encodes the specified ListAggregateProductStatusesResponse message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.ListAggregateProductStatusesResponse.verify|verify} messages.
                         * @param message ListAggregateProductStatusesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.IListAggregateProductStatusesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListAggregateProductStatusesResponse message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.ListAggregateProductStatusesResponse.verify|verify} messages.
                         * @param message ListAggregateProductStatusesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.IListAggregateProductStatusesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListAggregateProductStatusesResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListAggregateProductStatusesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.ListAggregateProductStatusesResponse;

                        /**
                         * Decodes a ListAggregateProductStatusesResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListAggregateProductStatusesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.ListAggregateProductStatusesResponse;

                        /**
                         * Verifies a ListAggregateProductStatusesResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListAggregateProductStatusesResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListAggregateProductStatusesResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.ListAggregateProductStatusesResponse;

                        /**
                         * Creates a plain object from a ListAggregateProductStatusesResponse message. Also converts values to other types if specified.
                         * @param message ListAggregateProductStatusesResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.ListAggregateProductStatusesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListAggregateProductStatusesResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListAggregateProductStatusesResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AggregateProductStatus. */
                    interface IAggregateProductStatus {

                        /** AggregateProductStatus name */
                        name?: (string|null);

                        /** AggregateProductStatus reportingContext */
                        reportingContext?: (google.shopping.type.ReportingContext.ReportingContextEnum|keyof typeof google.shopping.type.ReportingContext.ReportingContextEnum|null);

                        /** AggregateProductStatus country */
                        country?: (string|null);

                        /** AggregateProductStatus stats */
                        stats?: (google.shopping.merchant.issueresolution.v1.AggregateProductStatus.IStats|null);

                        /** AggregateProductStatus itemLevelIssues */
                        itemLevelIssues?: (google.shopping.merchant.issueresolution.v1.AggregateProductStatus.IItemLevelIssue[]|null);
                    }

                    /** Represents an AggregateProductStatus. */
                    class AggregateProductStatus implements IAggregateProductStatus {

                        /**
                         * Constructs a new AggregateProductStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.IAggregateProductStatus);

                        /** AggregateProductStatus name. */
                        public name: string;

                        /** AggregateProductStatus reportingContext. */
                        public reportingContext: (google.shopping.type.ReportingContext.ReportingContextEnum|keyof typeof google.shopping.type.ReportingContext.ReportingContextEnum);

                        /** AggregateProductStatus country. */
                        public country: string;

                        /** AggregateProductStatus stats. */
                        public stats?: (google.shopping.merchant.issueresolution.v1.AggregateProductStatus.IStats|null);

                        /** AggregateProductStatus itemLevelIssues. */
                        public itemLevelIssues: google.shopping.merchant.issueresolution.v1.AggregateProductStatus.IItemLevelIssue[];

                        /**
                         * Creates a new AggregateProductStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AggregateProductStatus instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.IAggregateProductStatus): google.shopping.merchant.issueresolution.v1.AggregateProductStatus;

                        /**
                         * Encodes the specified AggregateProductStatus message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.AggregateProductStatus.verify|verify} messages.
                         * @param message AggregateProductStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.IAggregateProductStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AggregateProductStatus message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.AggregateProductStatus.verify|verify} messages.
                         * @param message AggregateProductStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.IAggregateProductStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AggregateProductStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AggregateProductStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.AggregateProductStatus;

                        /**
                         * Decodes an AggregateProductStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AggregateProductStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.AggregateProductStatus;

                        /**
                         * Verifies an AggregateProductStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AggregateProductStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AggregateProductStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.AggregateProductStatus;

                        /**
                         * Creates a plain object from an AggregateProductStatus message. Also converts values to other types if specified.
                         * @param message AggregateProductStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.AggregateProductStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AggregateProductStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AggregateProductStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace AggregateProductStatus {

                        /** Properties of a Stats. */
                        interface IStats {

                            /** Stats activeCount */
                            activeCount?: (number|Long|string|null);

                            /** Stats pendingCount */
                            pendingCount?: (number|Long|string|null);

                            /** Stats disapprovedCount */
                            disapprovedCount?: (number|Long|string|null);

                            /** Stats expiringCount */
                            expiringCount?: (number|Long|string|null);
                        }

                        /** Represents a Stats. */
                        class Stats implements IStats {

                            /**
                             * Constructs a new Stats.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.issueresolution.v1.AggregateProductStatus.IStats);

                            /** Stats activeCount. */
                            public activeCount: (number|Long|string);

                            /** Stats pendingCount. */
                            public pendingCount: (number|Long|string);

                            /** Stats disapprovedCount. */
                            public disapprovedCount: (number|Long|string);

                            /** Stats expiringCount. */
                            public expiringCount: (number|Long|string);

                            /**
                             * Creates a new Stats instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Stats instance
                             */
                            public static create(properties?: google.shopping.merchant.issueresolution.v1.AggregateProductStatus.IStats): google.shopping.merchant.issueresolution.v1.AggregateProductStatus.Stats;

                            /**
                             * Encodes the specified Stats message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.AggregateProductStatus.Stats.verify|verify} messages.
                             * @param message Stats message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.issueresolution.v1.AggregateProductStatus.IStats, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Stats message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.AggregateProductStatus.Stats.verify|verify} messages.
                             * @param message Stats message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.AggregateProductStatus.IStats, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Stats message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Stats
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.AggregateProductStatus.Stats;

                            /**
                             * Decodes a Stats message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Stats
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.AggregateProductStatus.Stats;

                            /**
                             * Verifies a Stats message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Stats message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Stats
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.AggregateProductStatus.Stats;

                            /**
                             * Creates a plain object from a Stats message. Also converts values to other types if specified.
                             * @param message Stats
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.issueresolution.v1.AggregateProductStatus.Stats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Stats to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Stats
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an ItemLevelIssue. */
                        interface IItemLevelIssue {

                            /** ItemLevelIssue code */
                            code?: (string|null);

                            /** ItemLevelIssue severity */
                            severity?: (google.shopping.merchant.issueresolution.v1.AggregateProductStatus.ItemLevelIssue.Severity|keyof typeof google.shopping.merchant.issueresolution.v1.AggregateProductStatus.ItemLevelIssue.Severity|null);

                            /** ItemLevelIssue resolution */
                            resolution?: (google.shopping.merchant.issueresolution.v1.AggregateProductStatus.ItemLevelIssue.Resolution|keyof typeof google.shopping.merchant.issueresolution.v1.AggregateProductStatus.ItemLevelIssue.Resolution|null);

                            /** ItemLevelIssue attribute */
                            attribute?: (string|null);

                            /** ItemLevelIssue description */
                            description?: (string|null);

                            /** ItemLevelIssue detail */
                            detail?: (string|null);

                            /** ItemLevelIssue documentationUri */
                            documentationUri?: (string|null);

                            /** ItemLevelIssue productCount */
                            productCount?: (number|Long|string|null);
                        }

                        /** Represents an ItemLevelIssue. */
                        class ItemLevelIssue implements IItemLevelIssue {

                            /**
                             * Constructs a new ItemLevelIssue.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.issueresolution.v1.AggregateProductStatus.IItemLevelIssue);

                            /** ItemLevelIssue code. */
                            public code: string;

                            /** ItemLevelIssue severity. */
                            public severity: (google.shopping.merchant.issueresolution.v1.AggregateProductStatus.ItemLevelIssue.Severity|keyof typeof google.shopping.merchant.issueresolution.v1.AggregateProductStatus.ItemLevelIssue.Severity);

                            /** ItemLevelIssue resolution. */
                            public resolution: (google.shopping.merchant.issueresolution.v1.AggregateProductStatus.ItemLevelIssue.Resolution|keyof typeof google.shopping.merchant.issueresolution.v1.AggregateProductStatus.ItemLevelIssue.Resolution);

                            /** ItemLevelIssue attribute. */
                            public attribute: string;

                            /** ItemLevelIssue description. */
                            public description: string;

                            /** ItemLevelIssue detail. */
                            public detail: string;

                            /** ItemLevelIssue documentationUri. */
                            public documentationUri: string;

                            /** ItemLevelIssue productCount. */
                            public productCount: (number|Long|string);

                            /**
                             * Creates a new ItemLevelIssue instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ItemLevelIssue instance
                             */
                            public static create(properties?: google.shopping.merchant.issueresolution.v1.AggregateProductStatus.IItemLevelIssue): google.shopping.merchant.issueresolution.v1.AggregateProductStatus.ItemLevelIssue;

                            /**
                             * Encodes the specified ItemLevelIssue message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.AggregateProductStatus.ItemLevelIssue.verify|verify} messages.
                             * @param message ItemLevelIssue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.issueresolution.v1.AggregateProductStatus.IItemLevelIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ItemLevelIssue message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.AggregateProductStatus.ItemLevelIssue.verify|verify} messages.
                             * @param message ItemLevelIssue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.AggregateProductStatus.IItemLevelIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an ItemLevelIssue message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ItemLevelIssue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.AggregateProductStatus.ItemLevelIssue;

                            /**
                             * Decodes an ItemLevelIssue message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ItemLevelIssue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.AggregateProductStatus.ItemLevelIssue;

                            /**
                             * Verifies an ItemLevelIssue message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an ItemLevelIssue message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ItemLevelIssue
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.AggregateProductStatus.ItemLevelIssue;

                            /**
                             * Creates a plain object from an ItemLevelIssue message. Also converts values to other types if specified.
                             * @param message ItemLevelIssue
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.issueresolution.v1.AggregateProductStatus.ItemLevelIssue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ItemLevelIssue to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ItemLevelIssue
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace ItemLevelIssue {

                            /** Severity enum. */
                            enum Severity {
                                SEVERITY_UNSPECIFIED = 0,
                                NOT_IMPACTED = 1,
                                DEMOTED = 2,
                                DISAPPROVED = 3
                            }

                            /** Resolution enum. */
                            enum Resolution {
                                RESOLUTION_UNSPECIFIED = 0,
                                MERCHANT_ACTION = 1,
                                PENDING_PROCESSING = 2
                            }
                        }
                    }

                    /** Represents an IssueResolutionService */
                    class IssueResolutionService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new IssueResolutionService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new IssueResolutionService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): IssueResolutionService;

                        /**
                         * Calls RenderAccountIssues.
                         * @param request RenderAccountIssuesRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and RenderAccountIssuesResponse
                         */
                        public renderAccountIssues(request: google.shopping.merchant.issueresolution.v1.IRenderAccountIssuesRequest, callback: google.shopping.merchant.issueresolution.v1.IssueResolutionService.RenderAccountIssuesCallback): void;

                        /**
                         * Calls RenderAccountIssues.
                         * @param request RenderAccountIssuesRequest message or plain object
                         * @returns Promise
                         */
                        public renderAccountIssues(request: google.shopping.merchant.issueresolution.v1.IRenderAccountIssuesRequest): Promise<google.shopping.merchant.issueresolution.v1.RenderAccountIssuesResponse>;

                        /**
                         * Calls RenderProductIssues.
                         * @param request RenderProductIssuesRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and RenderProductIssuesResponse
                         */
                        public renderProductIssues(request: google.shopping.merchant.issueresolution.v1.IRenderProductIssuesRequest, callback: google.shopping.merchant.issueresolution.v1.IssueResolutionService.RenderProductIssuesCallback): void;

                        /**
                         * Calls RenderProductIssues.
                         * @param request RenderProductIssuesRequest message or plain object
                         * @returns Promise
                         */
                        public renderProductIssues(request: google.shopping.merchant.issueresolution.v1.IRenderProductIssuesRequest): Promise<google.shopping.merchant.issueresolution.v1.RenderProductIssuesResponse>;

                        /**
                         * Calls TriggerAction.
                         * @param request TriggerActionRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and TriggerActionResponse
                         */
                        public triggerAction(request: google.shopping.merchant.issueresolution.v1.ITriggerActionRequest, callback: google.shopping.merchant.issueresolution.v1.IssueResolutionService.TriggerActionCallback): void;

                        /**
                         * Calls TriggerAction.
                         * @param request TriggerActionRequest message or plain object
                         * @returns Promise
                         */
                        public triggerAction(request: google.shopping.merchant.issueresolution.v1.ITriggerActionRequest): Promise<google.shopping.merchant.issueresolution.v1.TriggerActionResponse>;
                    }

                    namespace IssueResolutionService {

                        /**
                         * Callback as used by {@link google.shopping.merchant.issueresolution.v1.IssueResolutionService|renderAccountIssues}.
                         * @param error Error, if any
                         * @param [response] RenderAccountIssuesResponse
                         */
                        type RenderAccountIssuesCallback = (error: (Error|null), response?: google.shopping.merchant.issueresolution.v1.RenderAccountIssuesResponse) => void;

                        /**
                         * Callback as used by {@link google.shopping.merchant.issueresolution.v1.IssueResolutionService|renderProductIssues}.
                         * @param error Error, if any
                         * @param [response] RenderProductIssuesResponse
                         */
                        type RenderProductIssuesCallback = (error: (Error|null), response?: google.shopping.merchant.issueresolution.v1.RenderProductIssuesResponse) => void;

                        /**
                         * Callback as used by {@link google.shopping.merchant.issueresolution.v1.IssueResolutionService|triggerAction}.
                         * @param error Error, if any
                         * @param [response] TriggerActionResponse
                         */
                        type TriggerActionCallback = (error: (Error|null), response?: google.shopping.merchant.issueresolution.v1.TriggerActionResponse) => void;
                    }

                    /** Severity enum. */
                    enum Severity {
                        SEVERITY_UNSPECIFIED = 0,
                        ERROR = 1,
                        WARNING = 2,
                        INFO = 3
                    }

                    /** ContentOption enum. */
                    enum ContentOption {
                        CONTENT_OPTION_UNSPECIFIED = 0,
                        PRE_RENDERED_HTML = 1
                    }

                    /** UserInputActionRenderingOption enum. */
                    enum UserInputActionRenderingOption {
                        USER_INPUT_ACTION_RENDERING_OPTION_UNSPECIFIED = 0,
                        REDIRECT_TO_MERCHANT_CENTER = 1,
                        BUILT_IN_USER_INPUT_ACTIONS = 2
                    }

                    /** Properties of a RenderAccountIssuesResponse. */
                    interface IRenderAccountIssuesResponse {

                        /** RenderAccountIssuesResponse renderedIssues */
                        renderedIssues?: (google.shopping.merchant.issueresolution.v1.IRenderedIssue[]|null);
                    }

                    /** Represents a RenderAccountIssuesResponse. */
                    class RenderAccountIssuesResponse implements IRenderAccountIssuesResponse {

                        /**
                         * Constructs a new RenderAccountIssuesResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.IRenderAccountIssuesResponse);

                        /** RenderAccountIssuesResponse renderedIssues. */
                        public renderedIssues: google.shopping.merchant.issueresolution.v1.IRenderedIssue[];

                        /**
                         * Creates a new RenderAccountIssuesResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RenderAccountIssuesResponse instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.IRenderAccountIssuesResponse): google.shopping.merchant.issueresolution.v1.RenderAccountIssuesResponse;

                        /**
                         * Encodes the specified RenderAccountIssuesResponse message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.RenderAccountIssuesResponse.verify|verify} messages.
                         * @param message RenderAccountIssuesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.IRenderAccountIssuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RenderAccountIssuesResponse message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.RenderAccountIssuesResponse.verify|verify} messages.
                         * @param message RenderAccountIssuesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.IRenderAccountIssuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RenderAccountIssuesResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RenderAccountIssuesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.RenderAccountIssuesResponse;

                        /**
                         * Decodes a RenderAccountIssuesResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RenderAccountIssuesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.RenderAccountIssuesResponse;

                        /**
                         * Verifies a RenderAccountIssuesResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RenderAccountIssuesResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RenderAccountIssuesResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.RenderAccountIssuesResponse;

                        /**
                         * Creates a plain object from a RenderAccountIssuesResponse message. Also converts values to other types if specified.
                         * @param message RenderAccountIssuesResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.RenderAccountIssuesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RenderAccountIssuesResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RenderAccountIssuesResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RenderAccountIssuesRequest. */
                    interface IRenderAccountIssuesRequest {

                        /** RenderAccountIssuesRequest name */
                        name?: (string|null);

                        /** RenderAccountIssuesRequest languageCode */
                        languageCode?: (string|null);

                        /** RenderAccountIssuesRequest timeZone */
                        timeZone?: (string|null);

                        /** RenderAccountIssuesRequest payload */
                        payload?: (google.shopping.merchant.issueresolution.v1.IRenderIssuesRequestPayload|null);
                    }

                    /** Represents a RenderAccountIssuesRequest. */
                    class RenderAccountIssuesRequest implements IRenderAccountIssuesRequest {

                        /**
                         * Constructs a new RenderAccountIssuesRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.IRenderAccountIssuesRequest);

                        /** RenderAccountIssuesRequest name. */
                        public name: string;

                        /** RenderAccountIssuesRequest languageCode. */
                        public languageCode: string;

                        /** RenderAccountIssuesRequest timeZone. */
                        public timeZone: string;

                        /** RenderAccountIssuesRequest payload. */
                        public payload?: (google.shopping.merchant.issueresolution.v1.IRenderIssuesRequestPayload|null);

                        /**
                         * Creates a new RenderAccountIssuesRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RenderAccountIssuesRequest instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.IRenderAccountIssuesRequest): google.shopping.merchant.issueresolution.v1.RenderAccountIssuesRequest;

                        /**
                         * Encodes the specified RenderAccountIssuesRequest message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.RenderAccountIssuesRequest.verify|verify} messages.
                         * @param message RenderAccountIssuesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.IRenderAccountIssuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RenderAccountIssuesRequest message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.RenderAccountIssuesRequest.verify|verify} messages.
                         * @param message RenderAccountIssuesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.IRenderAccountIssuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RenderAccountIssuesRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RenderAccountIssuesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.RenderAccountIssuesRequest;

                        /**
                         * Decodes a RenderAccountIssuesRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RenderAccountIssuesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.RenderAccountIssuesRequest;

                        /**
                         * Verifies a RenderAccountIssuesRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RenderAccountIssuesRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RenderAccountIssuesRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.RenderAccountIssuesRequest;

                        /**
                         * Creates a plain object from a RenderAccountIssuesRequest message. Also converts values to other types if specified.
                         * @param message RenderAccountIssuesRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.RenderAccountIssuesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RenderAccountIssuesRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RenderAccountIssuesRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RenderIssuesRequestPayload. */
                    interface IRenderIssuesRequestPayload {

                        /** RenderIssuesRequestPayload contentOption */
                        contentOption?: (google.shopping.merchant.issueresolution.v1.ContentOption|keyof typeof google.shopping.merchant.issueresolution.v1.ContentOption|null);

                        /** RenderIssuesRequestPayload userInputActionOption */
                        userInputActionOption?: (google.shopping.merchant.issueresolution.v1.UserInputActionRenderingOption|keyof typeof google.shopping.merchant.issueresolution.v1.UserInputActionRenderingOption|null);
                    }

                    /** Represents a RenderIssuesRequestPayload. */
                    class RenderIssuesRequestPayload implements IRenderIssuesRequestPayload {

                        /**
                         * Constructs a new RenderIssuesRequestPayload.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.IRenderIssuesRequestPayload);

                        /** RenderIssuesRequestPayload contentOption. */
                        public contentOption?: (google.shopping.merchant.issueresolution.v1.ContentOption|keyof typeof google.shopping.merchant.issueresolution.v1.ContentOption|null);

                        /** RenderIssuesRequestPayload userInputActionOption. */
                        public userInputActionOption?: (google.shopping.merchant.issueresolution.v1.UserInputActionRenderingOption|keyof typeof google.shopping.merchant.issueresolution.v1.UserInputActionRenderingOption|null);

                        /**
                         * Creates a new RenderIssuesRequestPayload instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RenderIssuesRequestPayload instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.IRenderIssuesRequestPayload): google.shopping.merchant.issueresolution.v1.RenderIssuesRequestPayload;

                        /**
                         * Encodes the specified RenderIssuesRequestPayload message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.RenderIssuesRequestPayload.verify|verify} messages.
                         * @param message RenderIssuesRequestPayload message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.IRenderIssuesRequestPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RenderIssuesRequestPayload message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.RenderIssuesRequestPayload.verify|verify} messages.
                         * @param message RenderIssuesRequestPayload message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.IRenderIssuesRequestPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RenderIssuesRequestPayload message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RenderIssuesRequestPayload
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.RenderIssuesRequestPayload;

                        /**
                         * Decodes a RenderIssuesRequestPayload message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RenderIssuesRequestPayload
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.RenderIssuesRequestPayload;

                        /**
                         * Verifies a RenderIssuesRequestPayload message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RenderIssuesRequestPayload message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RenderIssuesRequestPayload
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.RenderIssuesRequestPayload;

                        /**
                         * Creates a plain object from a RenderIssuesRequestPayload message. Also converts values to other types if specified.
                         * @param message RenderIssuesRequestPayload
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.RenderIssuesRequestPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RenderIssuesRequestPayload to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RenderIssuesRequestPayload
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RenderProductIssuesResponse. */
                    interface IRenderProductIssuesResponse {

                        /** RenderProductIssuesResponse renderedIssues */
                        renderedIssues?: (google.shopping.merchant.issueresolution.v1.IRenderedIssue[]|null);
                    }

                    /** Represents a RenderProductIssuesResponse. */
                    class RenderProductIssuesResponse implements IRenderProductIssuesResponse {

                        /**
                         * Constructs a new RenderProductIssuesResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.IRenderProductIssuesResponse);

                        /** RenderProductIssuesResponse renderedIssues. */
                        public renderedIssues: google.shopping.merchant.issueresolution.v1.IRenderedIssue[];

                        /**
                         * Creates a new RenderProductIssuesResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RenderProductIssuesResponse instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.IRenderProductIssuesResponse): google.shopping.merchant.issueresolution.v1.RenderProductIssuesResponse;

                        /**
                         * Encodes the specified RenderProductIssuesResponse message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.RenderProductIssuesResponse.verify|verify} messages.
                         * @param message RenderProductIssuesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.IRenderProductIssuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RenderProductIssuesResponse message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.RenderProductIssuesResponse.verify|verify} messages.
                         * @param message RenderProductIssuesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.IRenderProductIssuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RenderProductIssuesResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RenderProductIssuesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.RenderProductIssuesResponse;

                        /**
                         * Decodes a RenderProductIssuesResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RenderProductIssuesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.RenderProductIssuesResponse;

                        /**
                         * Verifies a RenderProductIssuesResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RenderProductIssuesResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RenderProductIssuesResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.RenderProductIssuesResponse;

                        /**
                         * Creates a plain object from a RenderProductIssuesResponse message. Also converts values to other types if specified.
                         * @param message RenderProductIssuesResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.RenderProductIssuesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RenderProductIssuesResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RenderProductIssuesResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RenderProductIssuesRequest. */
                    interface IRenderProductIssuesRequest {

                        /** RenderProductIssuesRequest name */
                        name?: (string|null);

                        /** RenderProductIssuesRequest languageCode */
                        languageCode?: (string|null);

                        /** RenderProductIssuesRequest timeZone */
                        timeZone?: (string|null);

                        /** RenderProductIssuesRequest payload */
                        payload?: (google.shopping.merchant.issueresolution.v1.IRenderIssuesRequestPayload|null);
                    }

                    /** Represents a RenderProductIssuesRequest. */
                    class RenderProductIssuesRequest implements IRenderProductIssuesRequest {

                        /**
                         * Constructs a new RenderProductIssuesRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.IRenderProductIssuesRequest);

                        /** RenderProductIssuesRequest name. */
                        public name: string;

                        /** RenderProductIssuesRequest languageCode. */
                        public languageCode: string;

                        /** RenderProductIssuesRequest timeZone. */
                        public timeZone: string;

                        /** RenderProductIssuesRequest payload. */
                        public payload?: (google.shopping.merchant.issueresolution.v1.IRenderIssuesRequestPayload|null);

                        /**
                         * Creates a new RenderProductIssuesRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RenderProductIssuesRequest instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.IRenderProductIssuesRequest): google.shopping.merchant.issueresolution.v1.RenderProductIssuesRequest;

                        /**
                         * Encodes the specified RenderProductIssuesRequest message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.RenderProductIssuesRequest.verify|verify} messages.
                         * @param message RenderProductIssuesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.IRenderProductIssuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RenderProductIssuesRequest message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.RenderProductIssuesRequest.verify|verify} messages.
                         * @param message RenderProductIssuesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.IRenderProductIssuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RenderProductIssuesRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RenderProductIssuesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.RenderProductIssuesRequest;

                        /**
                         * Decodes a RenderProductIssuesRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RenderProductIssuesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.RenderProductIssuesRequest;

                        /**
                         * Verifies a RenderProductIssuesRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RenderProductIssuesRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RenderProductIssuesRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.RenderProductIssuesRequest;

                        /**
                         * Creates a plain object from a RenderProductIssuesRequest message. Also converts values to other types if specified.
                         * @param message RenderProductIssuesRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.RenderProductIssuesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RenderProductIssuesRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RenderProductIssuesRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RenderedIssue. */
                    interface IRenderedIssue {

                        /** RenderedIssue prerenderedContent */
                        prerenderedContent?: (string|null);

                        /** RenderedIssue prerenderedOutOfCourtDisputeSettlement */
                        prerenderedOutOfCourtDisputeSettlement?: (string|null);

                        /** RenderedIssue title */
                        title?: (string|null);

                        /** RenderedIssue impact */
                        impact?: (google.shopping.merchant.issueresolution.v1.IImpact|null);

                        /** RenderedIssue actions */
                        actions?: (google.shopping.merchant.issueresolution.v1.IAction[]|null);
                    }

                    /** Represents a RenderedIssue. */
                    class RenderedIssue implements IRenderedIssue {

                        /**
                         * Constructs a new RenderedIssue.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.IRenderedIssue);

                        /** RenderedIssue prerenderedContent. */
                        public prerenderedContent?: (string|null);

                        /** RenderedIssue prerenderedOutOfCourtDisputeSettlement. */
                        public prerenderedOutOfCourtDisputeSettlement?: (string|null);

                        /** RenderedIssue title. */
                        public title: string;

                        /** RenderedIssue impact. */
                        public impact?: (google.shopping.merchant.issueresolution.v1.IImpact|null);

                        /** RenderedIssue actions. */
                        public actions: google.shopping.merchant.issueresolution.v1.IAction[];

                        /** RenderedIssue content. */
                        public content?: "prerenderedContent";

                        /** RenderedIssue outOfCourtDisputeSettlement. */
                        public outOfCourtDisputeSettlement?: "prerenderedOutOfCourtDisputeSettlement";

                        /**
                         * Creates a new RenderedIssue instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RenderedIssue instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.IRenderedIssue): google.shopping.merchant.issueresolution.v1.RenderedIssue;

                        /**
                         * Encodes the specified RenderedIssue message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.RenderedIssue.verify|verify} messages.
                         * @param message RenderedIssue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.IRenderedIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RenderedIssue message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.RenderedIssue.verify|verify} messages.
                         * @param message RenderedIssue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.IRenderedIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RenderedIssue message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RenderedIssue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.RenderedIssue;

                        /**
                         * Decodes a RenderedIssue message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RenderedIssue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.RenderedIssue;

                        /**
                         * Verifies a RenderedIssue message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RenderedIssue message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RenderedIssue
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.RenderedIssue;

                        /**
                         * Creates a plain object from a RenderedIssue message. Also converts values to other types if specified.
                         * @param message RenderedIssue
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.RenderedIssue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RenderedIssue to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RenderedIssue
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Impact. */
                    interface IImpact {

                        /** Impact message */
                        message?: (string|null);

                        /** Impact severity */
                        severity?: (google.shopping.merchant.issueresolution.v1.Severity|keyof typeof google.shopping.merchant.issueresolution.v1.Severity|null);

                        /** Impact breakdowns */
                        breakdowns?: (google.shopping.merchant.issueresolution.v1.IBreakdown[]|null);
                    }

                    /** Represents an Impact. */
                    class Impact implements IImpact {

                        /**
                         * Constructs a new Impact.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.IImpact);

                        /** Impact message. */
                        public message: string;

                        /** Impact severity. */
                        public severity: (google.shopping.merchant.issueresolution.v1.Severity|keyof typeof google.shopping.merchant.issueresolution.v1.Severity);

                        /** Impact breakdowns. */
                        public breakdowns: google.shopping.merchant.issueresolution.v1.IBreakdown[];

                        /**
                         * Creates a new Impact instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Impact instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.IImpact): google.shopping.merchant.issueresolution.v1.Impact;

                        /**
                         * Encodes the specified Impact message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.Impact.verify|verify} messages.
                         * @param message Impact message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.IImpact, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Impact message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.Impact.verify|verify} messages.
                         * @param message Impact message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.IImpact, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Impact message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Impact
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.Impact;

                        /**
                         * Decodes an Impact message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Impact
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.Impact;

                        /**
                         * Verifies an Impact message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Impact message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Impact
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.Impact;

                        /**
                         * Creates a plain object from an Impact message. Also converts values to other types if specified.
                         * @param message Impact
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.Impact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Impact to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Impact
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Breakdown. */
                    interface IBreakdown {

                        /** Breakdown regions */
                        regions?: (google.shopping.merchant.issueresolution.v1.Breakdown.IRegion[]|null);

                        /** Breakdown details */
                        details?: (string[]|null);
                    }

                    /** Represents a Breakdown. */
                    class Breakdown implements IBreakdown {

                        /**
                         * Constructs a new Breakdown.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.IBreakdown);

                        /** Breakdown regions. */
                        public regions: google.shopping.merchant.issueresolution.v1.Breakdown.IRegion[];

                        /** Breakdown details. */
                        public details: string[];

                        /**
                         * Creates a new Breakdown instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Breakdown instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.IBreakdown): google.shopping.merchant.issueresolution.v1.Breakdown;

                        /**
                         * Encodes the specified Breakdown message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.Breakdown.verify|verify} messages.
                         * @param message Breakdown message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.IBreakdown, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Breakdown message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.Breakdown.verify|verify} messages.
                         * @param message Breakdown message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.IBreakdown, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Breakdown message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Breakdown
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.Breakdown;

                        /**
                         * Decodes a Breakdown message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Breakdown
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.Breakdown;

                        /**
                         * Verifies a Breakdown message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Breakdown message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Breakdown
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.Breakdown;

                        /**
                         * Creates a plain object from a Breakdown message. Also converts values to other types if specified.
                         * @param message Breakdown
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.Breakdown, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Breakdown to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Breakdown
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Breakdown {

                        /** Properties of a Region. */
                        interface IRegion {

                            /** Region code */
                            code?: (string|null);

                            /** Region name */
                            name?: (string|null);
                        }

                        /** Represents a Region. */
                        class Region implements IRegion {

                            /**
                             * Constructs a new Region.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.issueresolution.v1.Breakdown.IRegion);

                            /** Region code. */
                            public code: string;

                            /** Region name. */
                            public name: string;

                            /**
                             * Creates a new Region instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Region instance
                             */
                            public static create(properties?: google.shopping.merchant.issueresolution.v1.Breakdown.IRegion): google.shopping.merchant.issueresolution.v1.Breakdown.Region;

                            /**
                             * Encodes the specified Region message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.Breakdown.Region.verify|verify} messages.
                             * @param message Region message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.issueresolution.v1.Breakdown.IRegion, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Region message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.Breakdown.Region.verify|verify} messages.
                             * @param message Region message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.Breakdown.IRegion, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Region message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Region
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.Breakdown.Region;

                            /**
                             * Decodes a Region message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Region
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.Breakdown.Region;

                            /**
                             * Verifies a Region message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Region message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Region
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.Breakdown.Region;

                            /**
                             * Creates a plain object from a Region message. Also converts values to other types if specified.
                             * @param message Region
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.issueresolution.v1.Breakdown.Region, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Region to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Region
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of an Action. */
                    interface IAction {

                        /** Action builtinSimpleAction */
                        builtinSimpleAction?: (google.shopping.merchant.issueresolution.v1.IBuiltInSimpleAction|null);

                        /** Action externalAction */
                        externalAction?: (google.shopping.merchant.issueresolution.v1.IExternalAction|null);

                        /** Action builtinUserInputAction */
                        builtinUserInputAction?: (google.shopping.merchant.issueresolution.v1.IBuiltInUserInputAction|null);

                        /** Action buttonLabel */
                        buttonLabel?: (string|null);

                        /** Action isAvailable */
                        isAvailable?: (boolean|null);

                        /** Action reasons */
                        reasons?: (google.shopping.merchant.issueresolution.v1.Action.IReason[]|null);
                    }

                    /** Represents an Action. */
                    class Action implements IAction {

                        /**
                         * Constructs a new Action.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.IAction);

                        /** Action builtinSimpleAction. */
                        public builtinSimpleAction?: (google.shopping.merchant.issueresolution.v1.IBuiltInSimpleAction|null);

                        /** Action externalAction. */
                        public externalAction?: (google.shopping.merchant.issueresolution.v1.IExternalAction|null);

                        /** Action builtinUserInputAction. */
                        public builtinUserInputAction?: (google.shopping.merchant.issueresolution.v1.IBuiltInUserInputAction|null);

                        /** Action buttonLabel. */
                        public buttonLabel: string;

                        /** Action isAvailable. */
                        public isAvailable: boolean;

                        /** Action reasons. */
                        public reasons: google.shopping.merchant.issueresolution.v1.Action.IReason[];

                        /** Action action. */
                        public action?: ("builtinSimpleAction"|"externalAction"|"builtinUserInputAction");

                        /**
                         * Creates a new Action instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Action instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.IAction): google.shopping.merchant.issueresolution.v1.Action;

                        /**
                         * Encodes the specified Action message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.Action.verify|verify} messages.
                         * @param message Action message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Action message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.Action.verify|verify} messages.
                         * @param message Action message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Action message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Action
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.Action;

                        /**
                         * Decodes an Action message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Action
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.Action;

                        /**
                         * Verifies an Action message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Action message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Action
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.Action;

                        /**
                         * Creates a plain object from an Action message. Also converts values to other types if specified.
                         * @param message Action
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.Action, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Action to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Action
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Action {

                        /** Properties of a Reason. */
                        interface IReason {

                            /** Reason message */
                            message?: (string|null);

                            /** Reason detail */
                            detail?: (string|null);

                            /** Reason action */
                            action?: (google.shopping.merchant.issueresolution.v1.IAction|null);
                        }

                        /** Represents a Reason. */
                        class Reason implements IReason {

                            /**
                             * Constructs a new Reason.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.issueresolution.v1.Action.IReason);

                            /** Reason message. */
                            public message: string;

                            /** Reason detail. */
                            public detail?: (string|null);

                            /** Reason action. */
                            public action?: (google.shopping.merchant.issueresolution.v1.IAction|null);

                            /**
                             * Creates a new Reason instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Reason instance
                             */
                            public static create(properties?: google.shopping.merchant.issueresolution.v1.Action.IReason): google.shopping.merchant.issueresolution.v1.Action.Reason;

                            /**
                             * Encodes the specified Reason message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.Action.Reason.verify|verify} messages.
                             * @param message Reason message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.issueresolution.v1.Action.IReason, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Reason message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.Action.Reason.verify|verify} messages.
                             * @param message Reason message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.Action.IReason, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Reason message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Reason
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.Action.Reason;

                            /**
                             * Decodes a Reason message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Reason
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.Action.Reason;

                            /**
                             * Verifies a Reason message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Reason message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Reason
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.Action.Reason;

                            /**
                             * Creates a plain object from a Reason message. Also converts values to other types if specified.
                             * @param message Reason
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.issueresolution.v1.Action.Reason, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Reason to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Reason
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a BuiltInSimpleAction. */
                    interface IBuiltInSimpleAction {

                        /** BuiltInSimpleAction type */
                        type?: (google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction.BuiltInSimpleActionType|keyof typeof google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction.BuiltInSimpleActionType|null);

                        /** BuiltInSimpleAction attributeCode */
                        attributeCode?: (string|null);

                        /** BuiltInSimpleAction additionalContent */
                        additionalContent?: (google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction.IAdditionalContent|null);
                    }

                    /** Represents a BuiltInSimpleAction. */
                    class BuiltInSimpleAction implements IBuiltInSimpleAction {

                        /**
                         * Constructs a new BuiltInSimpleAction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.IBuiltInSimpleAction);

                        /** BuiltInSimpleAction type. */
                        public type: (google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction.BuiltInSimpleActionType|keyof typeof google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction.BuiltInSimpleActionType);

                        /** BuiltInSimpleAction attributeCode. */
                        public attributeCode?: (string|null);

                        /** BuiltInSimpleAction additionalContent. */
                        public additionalContent?: (google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction.IAdditionalContent|null);

                        /**
                         * Creates a new BuiltInSimpleAction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BuiltInSimpleAction instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.IBuiltInSimpleAction): google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction;

                        /**
                         * Encodes the specified BuiltInSimpleAction message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction.verify|verify} messages.
                         * @param message BuiltInSimpleAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.IBuiltInSimpleAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BuiltInSimpleAction message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction.verify|verify} messages.
                         * @param message BuiltInSimpleAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.IBuiltInSimpleAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BuiltInSimpleAction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BuiltInSimpleAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction;

                        /**
                         * Decodes a BuiltInSimpleAction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BuiltInSimpleAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction;

                        /**
                         * Verifies a BuiltInSimpleAction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BuiltInSimpleAction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BuiltInSimpleAction
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction;

                        /**
                         * Creates a plain object from a BuiltInSimpleAction message. Also converts values to other types if specified.
                         * @param message BuiltInSimpleAction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BuiltInSimpleAction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BuiltInSimpleAction
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace BuiltInSimpleAction {

                        /** Properties of an AdditionalContent. */
                        interface IAdditionalContent {

                            /** AdditionalContent title */
                            title?: (string|null);

                            /** AdditionalContent paragraphs */
                            paragraphs?: (string[]|null);
                        }

                        /** Represents an AdditionalContent. */
                        class AdditionalContent implements IAdditionalContent {

                            /**
                             * Constructs a new AdditionalContent.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction.IAdditionalContent);

                            /** AdditionalContent title. */
                            public title: string;

                            /** AdditionalContent paragraphs. */
                            public paragraphs: string[];

                            /**
                             * Creates a new AdditionalContent instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AdditionalContent instance
                             */
                            public static create(properties?: google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction.IAdditionalContent): google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction.AdditionalContent;

                            /**
                             * Encodes the specified AdditionalContent message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction.AdditionalContent.verify|verify} messages.
                             * @param message AdditionalContent message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction.IAdditionalContent, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AdditionalContent message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction.AdditionalContent.verify|verify} messages.
                             * @param message AdditionalContent message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction.IAdditionalContent, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AdditionalContent message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AdditionalContent
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction.AdditionalContent;

                            /**
                             * Decodes an AdditionalContent message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AdditionalContent
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction.AdditionalContent;

                            /**
                             * Verifies an AdditionalContent message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AdditionalContent message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AdditionalContent
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction.AdditionalContent;

                            /**
                             * Creates a plain object from an AdditionalContent message. Also converts values to other types if specified.
                             * @param message AdditionalContent
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.issueresolution.v1.BuiltInSimpleAction.AdditionalContent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AdditionalContent to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AdditionalContent
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** BuiltInSimpleActionType enum. */
                        enum BuiltInSimpleActionType {
                            BUILT_IN_SIMPLE_ACTION_TYPE_UNSPECIFIED = 0,
                            VERIFY_PHONE = 1,
                            CLAIM_WEBSITE = 2,
                            ADD_PRODUCTS = 3,
                            ADD_CONTACT_INFO = 4,
                            LINK_ADS_ACCOUNT = 5,
                            ADD_BUSINESS_REGISTRATION_NUMBER = 6,
                            EDIT_ITEM_ATTRIBUTE = 7,
                            FIX_ACCOUNT_ISSUE = 8,
                            SHOW_ADDITIONAL_CONTENT = 9
                        }
                    }

                    /** Properties of a BuiltInUserInputAction. */
                    interface IBuiltInUserInputAction {

                        /** BuiltInUserInputAction actionContext */
                        actionContext?: (string|null);

                        /** BuiltInUserInputAction flows */
                        flows?: (google.shopping.merchant.issueresolution.v1.IActionFlow[]|null);
                    }

                    /** Represents a BuiltInUserInputAction. */
                    class BuiltInUserInputAction implements IBuiltInUserInputAction {

                        /**
                         * Constructs a new BuiltInUserInputAction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.IBuiltInUserInputAction);

                        /** BuiltInUserInputAction actionContext. */
                        public actionContext: string;

                        /** BuiltInUserInputAction flows. */
                        public flows: google.shopping.merchant.issueresolution.v1.IActionFlow[];

                        /**
                         * Creates a new BuiltInUserInputAction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BuiltInUserInputAction instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.IBuiltInUserInputAction): google.shopping.merchant.issueresolution.v1.BuiltInUserInputAction;

                        /**
                         * Encodes the specified BuiltInUserInputAction message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.BuiltInUserInputAction.verify|verify} messages.
                         * @param message BuiltInUserInputAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.IBuiltInUserInputAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BuiltInUserInputAction message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.BuiltInUserInputAction.verify|verify} messages.
                         * @param message BuiltInUserInputAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.IBuiltInUserInputAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BuiltInUserInputAction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BuiltInUserInputAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.BuiltInUserInputAction;

                        /**
                         * Decodes a BuiltInUserInputAction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BuiltInUserInputAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.BuiltInUserInputAction;

                        /**
                         * Verifies a BuiltInUserInputAction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BuiltInUserInputAction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BuiltInUserInputAction
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.BuiltInUserInputAction;

                        /**
                         * Creates a plain object from a BuiltInUserInputAction message. Also converts values to other types if specified.
                         * @param message BuiltInUserInputAction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.BuiltInUserInputAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BuiltInUserInputAction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BuiltInUserInputAction
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ActionFlow. */
                    interface IActionFlow {

                        /** ActionFlow id */
                        id?: (string|null);

                        /** ActionFlow label */
                        label?: (string|null);

                        /** ActionFlow inputs */
                        inputs?: (google.shopping.merchant.issueresolution.v1.IInputField[]|null);

                        /** ActionFlow dialogTitle */
                        dialogTitle?: (string|null);

                        /** ActionFlow dialogMessage */
                        dialogMessage?: (google.shopping.merchant.issueresolution.v1.ITextWithTooltip|null);

                        /** ActionFlow dialogCallout */
                        dialogCallout?: (google.shopping.merchant.issueresolution.v1.ICallout|null);

                        /** ActionFlow dialogButtonLabel */
                        dialogButtonLabel?: (string|null);
                    }

                    /** Represents an ActionFlow. */
                    class ActionFlow implements IActionFlow {

                        /**
                         * Constructs a new ActionFlow.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.IActionFlow);

                        /** ActionFlow id. */
                        public id: string;

                        /** ActionFlow label. */
                        public label: string;

                        /** ActionFlow inputs. */
                        public inputs: google.shopping.merchant.issueresolution.v1.IInputField[];

                        /** ActionFlow dialogTitle. */
                        public dialogTitle: string;

                        /** ActionFlow dialogMessage. */
                        public dialogMessage?: (google.shopping.merchant.issueresolution.v1.ITextWithTooltip|null);

                        /** ActionFlow dialogCallout. */
                        public dialogCallout?: (google.shopping.merchant.issueresolution.v1.ICallout|null);

                        /** ActionFlow dialogButtonLabel. */
                        public dialogButtonLabel: string;

                        /**
                         * Creates a new ActionFlow instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ActionFlow instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.IActionFlow): google.shopping.merchant.issueresolution.v1.ActionFlow;

                        /**
                         * Encodes the specified ActionFlow message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.ActionFlow.verify|verify} messages.
                         * @param message ActionFlow message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.IActionFlow, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ActionFlow message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.ActionFlow.verify|verify} messages.
                         * @param message ActionFlow message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.IActionFlow, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ActionFlow message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ActionFlow
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.ActionFlow;

                        /**
                         * Decodes an ActionFlow message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ActionFlow
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.ActionFlow;

                        /**
                         * Verifies an ActionFlow message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ActionFlow message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ActionFlow
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.ActionFlow;

                        /**
                         * Creates a plain object from an ActionFlow message. Also converts values to other types if specified.
                         * @param message ActionFlow
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.ActionFlow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ActionFlow to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ActionFlow
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an InputField. */
                    interface IInputField {

                        /** InputField textInput */
                        textInput?: (google.shopping.merchant.issueresolution.v1.InputField.ITextInput|null);

                        /** InputField choiceInput */
                        choiceInput?: (google.shopping.merchant.issueresolution.v1.InputField.IChoiceInput|null);

                        /** InputField checkboxInput */
                        checkboxInput?: (google.shopping.merchant.issueresolution.v1.InputField.ICheckboxInput|null);

                        /** InputField id */
                        id?: (string|null);

                        /** InputField label */
                        label?: (google.shopping.merchant.issueresolution.v1.ITextWithTooltip|null);

                        /** InputField required */
                        required?: (boolean|null);
                    }

                    /** Represents an InputField. */
                    class InputField implements IInputField {

                        /**
                         * Constructs a new InputField.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.IInputField);

                        /** InputField textInput. */
                        public textInput?: (google.shopping.merchant.issueresolution.v1.InputField.ITextInput|null);

                        /** InputField choiceInput. */
                        public choiceInput?: (google.shopping.merchant.issueresolution.v1.InputField.IChoiceInput|null);

                        /** InputField checkboxInput. */
                        public checkboxInput?: (google.shopping.merchant.issueresolution.v1.InputField.ICheckboxInput|null);

                        /** InputField id. */
                        public id: string;

                        /** InputField label. */
                        public label?: (google.shopping.merchant.issueresolution.v1.ITextWithTooltip|null);

                        /** InputField required. */
                        public required: boolean;

                        /** InputField valueInput. */
                        public valueInput?: ("textInput"|"choiceInput"|"checkboxInput");

                        /**
                         * Creates a new InputField instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InputField instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.IInputField): google.shopping.merchant.issueresolution.v1.InputField;

                        /**
                         * Encodes the specified InputField message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.InputField.verify|verify} messages.
                         * @param message InputField message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.IInputField, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InputField message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.InputField.verify|verify} messages.
                         * @param message InputField message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.IInputField, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InputField message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InputField
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.InputField;

                        /**
                         * Decodes an InputField message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InputField
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.InputField;

                        /**
                         * Verifies an InputField message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InputField message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InputField
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.InputField;

                        /**
                         * Creates a plain object from an InputField message. Also converts values to other types if specified.
                         * @param message InputField
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.InputField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InputField to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InputField
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace InputField {

                        /** Properties of a TextInput. */
                        interface ITextInput {

                            /** TextInput type */
                            type?: (google.shopping.merchant.issueresolution.v1.InputField.TextInput.TextInputType|keyof typeof google.shopping.merchant.issueresolution.v1.InputField.TextInput.TextInputType|null);

                            /** TextInput additionalInfo */
                            additionalInfo?: (google.shopping.merchant.issueresolution.v1.ITextWithTooltip|null);

                            /** TextInput formatInfo */
                            formatInfo?: (string|null);

                            /** TextInput ariaLabel */
                            ariaLabel?: (string|null);
                        }

                        /** Represents a TextInput. */
                        class TextInput implements ITextInput {

                            /**
                             * Constructs a new TextInput.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.issueresolution.v1.InputField.ITextInput);

                            /** TextInput type. */
                            public type: (google.shopping.merchant.issueresolution.v1.InputField.TextInput.TextInputType|keyof typeof google.shopping.merchant.issueresolution.v1.InputField.TextInput.TextInputType);

                            /** TextInput additionalInfo. */
                            public additionalInfo?: (google.shopping.merchant.issueresolution.v1.ITextWithTooltip|null);

                            /** TextInput formatInfo. */
                            public formatInfo?: (string|null);

                            /** TextInput ariaLabel. */
                            public ariaLabel?: (string|null);

                            /**
                             * Creates a new TextInput instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns TextInput instance
                             */
                            public static create(properties?: google.shopping.merchant.issueresolution.v1.InputField.ITextInput): google.shopping.merchant.issueresolution.v1.InputField.TextInput;

                            /**
                             * Encodes the specified TextInput message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.InputField.TextInput.verify|verify} messages.
                             * @param message TextInput message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.issueresolution.v1.InputField.ITextInput, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified TextInput message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.InputField.TextInput.verify|verify} messages.
                             * @param message TextInput message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.InputField.ITextInput, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a TextInput message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns TextInput
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.InputField.TextInput;

                            /**
                             * Decodes a TextInput message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns TextInput
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.InputField.TextInput;

                            /**
                             * Verifies a TextInput message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a TextInput message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns TextInput
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.InputField.TextInput;

                            /**
                             * Creates a plain object from a TextInput message. Also converts values to other types if specified.
                             * @param message TextInput
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.issueresolution.v1.InputField.TextInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this TextInput to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for TextInput
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace TextInput {

                            /** TextInputType enum. */
                            enum TextInputType {
                                TEXT_INPUT_TYPE_UNSPECIFIED = 0,
                                GENERIC_SHORT_TEXT = 1,
                                GENERIC_LONG_TEXT = 2
                            }
                        }

                        /** Properties of a ChoiceInput. */
                        interface IChoiceInput {

                            /** ChoiceInput options */
                            options?: (google.shopping.merchant.issueresolution.v1.InputField.ChoiceInput.IChoiceInputOption[]|null);
                        }

                        /** Represents a ChoiceInput. */
                        class ChoiceInput implements IChoiceInput {

                            /**
                             * Constructs a new ChoiceInput.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.issueresolution.v1.InputField.IChoiceInput);

                            /** ChoiceInput options. */
                            public options: google.shopping.merchant.issueresolution.v1.InputField.ChoiceInput.IChoiceInputOption[];

                            /**
                             * Creates a new ChoiceInput instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ChoiceInput instance
                             */
                            public static create(properties?: google.shopping.merchant.issueresolution.v1.InputField.IChoiceInput): google.shopping.merchant.issueresolution.v1.InputField.ChoiceInput;

                            /**
                             * Encodes the specified ChoiceInput message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.InputField.ChoiceInput.verify|verify} messages.
                             * @param message ChoiceInput message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.issueresolution.v1.InputField.IChoiceInput, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ChoiceInput message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.InputField.ChoiceInput.verify|verify} messages.
                             * @param message ChoiceInput message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.InputField.IChoiceInput, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ChoiceInput message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ChoiceInput
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.InputField.ChoiceInput;

                            /**
                             * Decodes a ChoiceInput message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ChoiceInput
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.InputField.ChoiceInput;

                            /**
                             * Verifies a ChoiceInput message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ChoiceInput message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ChoiceInput
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.InputField.ChoiceInput;

                            /**
                             * Creates a plain object from a ChoiceInput message. Also converts values to other types if specified.
                             * @param message ChoiceInput
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.issueresolution.v1.InputField.ChoiceInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ChoiceInput to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ChoiceInput
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace ChoiceInput {

                            /** Properties of a ChoiceInputOption. */
                            interface IChoiceInputOption {

                                /** ChoiceInputOption id */
                                id?: (string|null);

                                /** ChoiceInputOption label */
                                label?: (google.shopping.merchant.issueresolution.v1.ITextWithTooltip|null);

                                /** ChoiceInputOption additionalInput */
                                additionalInput?: (google.shopping.merchant.issueresolution.v1.IInputField|null);
                            }

                            /** Represents a ChoiceInputOption. */
                            class ChoiceInputOption implements IChoiceInputOption {

                                /**
                                 * Constructs a new ChoiceInputOption.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.shopping.merchant.issueresolution.v1.InputField.ChoiceInput.IChoiceInputOption);

                                /** ChoiceInputOption id. */
                                public id: string;

                                /** ChoiceInputOption label. */
                                public label?: (google.shopping.merchant.issueresolution.v1.ITextWithTooltip|null);

                                /** ChoiceInputOption additionalInput. */
                                public additionalInput?: (google.shopping.merchant.issueresolution.v1.IInputField|null);

                                /**
                                 * Creates a new ChoiceInputOption instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ChoiceInputOption instance
                                 */
                                public static create(properties?: google.shopping.merchant.issueresolution.v1.InputField.ChoiceInput.IChoiceInputOption): google.shopping.merchant.issueresolution.v1.InputField.ChoiceInput.ChoiceInputOption;

                                /**
                                 * Encodes the specified ChoiceInputOption message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.InputField.ChoiceInput.ChoiceInputOption.verify|verify} messages.
                                 * @param message ChoiceInputOption message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.shopping.merchant.issueresolution.v1.InputField.ChoiceInput.IChoiceInputOption, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified ChoiceInputOption message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.InputField.ChoiceInput.ChoiceInputOption.verify|verify} messages.
                                 * @param message ChoiceInputOption message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.InputField.ChoiceInput.IChoiceInputOption, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a ChoiceInputOption message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ChoiceInputOption
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.InputField.ChoiceInput.ChoiceInputOption;

                                /**
                                 * Decodes a ChoiceInputOption message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ChoiceInputOption
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.InputField.ChoiceInput.ChoiceInputOption;

                                /**
                                 * Verifies a ChoiceInputOption message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ChoiceInputOption message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ChoiceInputOption
                                 */
                                public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.InputField.ChoiceInput.ChoiceInputOption;

                                /**
                                 * Creates a plain object from a ChoiceInputOption message. Also converts values to other types if specified.
                                 * @param message ChoiceInputOption
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.shopping.merchant.issueresolution.v1.InputField.ChoiceInput.ChoiceInputOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ChoiceInputOption to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for ChoiceInputOption
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }

                        /** Properties of a CheckboxInput. */
                        interface ICheckboxInput {
                        }

                        /** Represents a CheckboxInput. */
                        class CheckboxInput implements ICheckboxInput {

                            /**
                             * Constructs a new CheckboxInput.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.issueresolution.v1.InputField.ICheckboxInput);

                            /**
                             * Creates a new CheckboxInput instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CheckboxInput instance
                             */
                            public static create(properties?: google.shopping.merchant.issueresolution.v1.InputField.ICheckboxInput): google.shopping.merchant.issueresolution.v1.InputField.CheckboxInput;

                            /**
                             * Encodes the specified CheckboxInput message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.InputField.CheckboxInput.verify|verify} messages.
                             * @param message CheckboxInput message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.issueresolution.v1.InputField.ICheckboxInput, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CheckboxInput message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.InputField.CheckboxInput.verify|verify} messages.
                             * @param message CheckboxInput message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.InputField.ICheckboxInput, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CheckboxInput message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CheckboxInput
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.InputField.CheckboxInput;

                            /**
                             * Decodes a CheckboxInput message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CheckboxInput
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.InputField.CheckboxInput;

                            /**
                             * Verifies a CheckboxInput message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CheckboxInput message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CheckboxInput
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.InputField.CheckboxInput;

                            /**
                             * Creates a plain object from a CheckboxInput message. Also converts values to other types if specified.
                             * @param message CheckboxInput
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.issueresolution.v1.InputField.CheckboxInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CheckboxInput to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for CheckboxInput
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a TextWithTooltip. */
                    interface ITextWithTooltip {

                        /** TextWithTooltip simpleValue */
                        simpleValue?: (string|null);

                        /** TextWithTooltip simpleTooltipValue */
                        simpleTooltipValue?: (string|null);

                        /** TextWithTooltip tooltipIconStyle */
                        tooltipIconStyle?: (google.shopping.merchant.issueresolution.v1.TextWithTooltip.TooltipIconStyle|keyof typeof google.shopping.merchant.issueresolution.v1.TextWithTooltip.TooltipIconStyle|null);
                    }

                    /** Represents a TextWithTooltip. */
                    class TextWithTooltip implements ITextWithTooltip {

                        /**
                         * Constructs a new TextWithTooltip.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.ITextWithTooltip);

                        /** TextWithTooltip simpleValue. */
                        public simpleValue?: (string|null);

                        /** TextWithTooltip simpleTooltipValue. */
                        public simpleTooltipValue?: (string|null);

                        /** TextWithTooltip tooltipIconStyle. */
                        public tooltipIconStyle: (google.shopping.merchant.issueresolution.v1.TextWithTooltip.TooltipIconStyle|keyof typeof google.shopping.merchant.issueresolution.v1.TextWithTooltip.TooltipIconStyle);

                        /** TextWithTooltip value. */
                        public value?: "simpleValue";

                        /** TextWithTooltip tooltipValue. */
                        public tooltipValue?: "simpleTooltipValue";

                        /**
                         * Creates a new TextWithTooltip instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TextWithTooltip instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.ITextWithTooltip): google.shopping.merchant.issueresolution.v1.TextWithTooltip;

                        /**
                         * Encodes the specified TextWithTooltip message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.TextWithTooltip.verify|verify} messages.
                         * @param message TextWithTooltip message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.ITextWithTooltip, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TextWithTooltip message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.TextWithTooltip.verify|verify} messages.
                         * @param message TextWithTooltip message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.ITextWithTooltip, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TextWithTooltip message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TextWithTooltip
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.TextWithTooltip;

                        /**
                         * Decodes a TextWithTooltip message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TextWithTooltip
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.TextWithTooltip;

                        /**
                         * Verifies a TextWithTooltip message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TextWithTooltip message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TextWithTooltip
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.TextWithTooltip;

                        /**
                         * Creates a plain object from a TextWithTooltip message. Also converts values to other types if specified.
                         * @param message TextWithTooltip
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.TextWithTooltip, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TextWithTooltip to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TextWithTooltip
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace TextWithTooltip {

                        /** TooltipIconStyle enum. */
                        enum TooltipIconStyle {
                            TOOLTIP_ICON_STYLE_UNSPECIFIED = 0,
                            INFO = 1,
                            QUESTION = 2
                        }
                    }

                    /** Properties of a Callout. */
                    interface ICallout {

                        /** Callout styleHint */
                        styleHint?: (google.shopping.merchant.issueresolution.v1.Callout.CalloutStyleHint|keyof typeof google.shopping.merchant.issueresolution.v1.Callout.CalloutStyleHint|null);

                        /** Callout fullMessage */
                        fullMessage?: (google.shopping.merchant.issueresolution.v1.ITextWithTooltip|null);
                    }

                    /** Represents a Callout. */
                    class Callout implements ICallout {

                        /**
                         * Constructs a new Callout.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.ICallout);

                        /** Callout styleHint. */
                        public styleHint: (google.shopping.merchant.issueresolution.v1.Callout.CalloutStyleHint|keyof typeof google.shopping.merchant.issueresolution.v1.Callout.CalloutStyleHint);

                        /** Callout fullMessage. */
                        public fullMessage?: (google.shopping.merchant.issueresolution.v1.ITextWithTooltip|null);

                        /**
                         * Creates a new Callout instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Callout instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.ICallout): google.shopping.merchant.issueresolution.v1.Callout;

                        /**
                         * Encodes the specified Callout message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.Callout.verify|verify} messages.
                         * @param message Callout message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.ICallout, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Callout message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.Callout.verify|verify} messages.
                         * @param message Callout message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.ICallout, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Callout message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Callout
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.Callout;

                        /**
                         * Decodes a Callout message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Callout
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.Callout;

                        /**
                         * Verifies a Callout message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Callout message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Callout
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.Callout;

                        /**
                         * Creates a plain object from a Callout message. Also converts values to other types if specified.
                         * @param message Callout
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.Callout, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Callout to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Callout
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Callout {

                        /** CalloutStyleHint enum. */
                        enum CalloutStyleHint {
                            CALLOUT_STYLE_HINT_UNSPECIFIED = 0,
                            ERROR = 1,
                            WARNING = 2,
                            INFO = 3
                        }
                    }

                    /** Properties of an ExternalAction. */
                    interface IExternalAction {

                        /** ExternalAction type */
                        type?: (google.shopping.merchant.issueresolution.v1.ExternalAction.ExternalActionType|keyof typeof google.shopping.merchant.issueresolution.v1.ExternalAction.ExternalActionType|null);

                        /** ExternalAction uri */
                        uri?: (string|null);
                    }

                    /** Represents an ExternalAction. */
                    class ExternalAction implements IExternalAction {

                        /**
                         * Constructs a new ExternalAction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.IExternalAction);

                        /** ExternalAction type. */
                        public type: (google.shopping.merchant.issueresolution.v1.ExternalAction.ExternalActionType|keyof typeof google.shopping.merchant.issueresolution.v1.ExternalAction.ExternalActionType);

                        /** ExternalAction uri. */
                        public uri: string;

                        /**
                         * Creates a new ExternalAction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExternalAction instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.IExternalAction): google.shopping.merchant.issueresolution.v1.ExternalAction;

                        /**
                         * Encodes the specified ExternalAction message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.ExternalAction.verify|verify} messages.
                         * @param message ExternalAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.IExternalAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExternalAction message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.ExternalAction.verify|verify} messages.
                         * @param message ExternalAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.IExternalAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExternalAction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExternalAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.ExternalAction;

                        /**
                         * Decodes an ExternalAction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExternalAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.ExternalAction;

                        /**
                         * Verifies an ExternalAction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExternalAction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExternalAction
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.ExternalAction;

                        /**
                         * Creates a plain object from an ExternalAction message. Also converts values to other types if specified.
                         * @param message ExternalAction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.ExternalAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExternalAction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ExternalAction
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ExternalAction {

                        /** ExternalActionType enum. */
                        enum ExternalActionType {
                            EXTERNAL_ACTION_TYPE_UNSPECIFIED = 0,
                            REVIEW_PRODUCT_ISSUE_IN_MERCHANT_CENTER = 1,
                            REVIEW_ACCOUNT_ISSUE_IN_MERCHANT_CENTER = 2,
                            LEGAL_APPEAL_IN_HELP_CENTER = 3,
                            VERIFY_IDENTITY_IN_MERCHANT_CENTER = 4
                        }
                    }

                    /** Properties of a TriggerActionRequest. */
                    interface ITriggerActionRequest {

                        /** TriggerActionRequest name */
                        name?: (string|null);

                        /** TriggerActionRequest payload */
                        payload?: (google.shopping.merchant.issueresolution.v1.ITriggerActionPayload|null);

                        /** TriggerActionRequest languageCode */
                        languageCode?: (string|null);
                    }

                    /** Represents a TriggerActionRequest. */
                    class TriggerActionRequest implements ITriggerActionRequest {

                        /**
                         * Constructs a new TriggerActionRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.ITriggerActionRequest);

                        /** TriggerActionRequest name. */
                        public name: string;

                        /** TriggerActionRequest payload. */
                        public payload?: (google.shopping.merchant.issueresolution.v1.ITriggerActionPayload|null);

                        /** TriggerActionRequest languageCode. */
                        public languageCode: string;

                        /**
                         * Creates a new TriggerActionRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TriggerActionRequest instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.ITriggerActionRequest): google.shopping.merchant.issueresolution.v1.TriggerActionRequest;

                        /**
                         * Encodes the specified TriggerActionRequest message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.TriggerActionRequest.verify|verify} messages.
                         * @param message TriggerActionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.ITriggerActionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TriggerActionRequest message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.TriggerActionRequest.verify|verify} messages.
                         * @param message TriggerActionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.ITriggerActionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TriggerActionRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TriggerActionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.TriggerActionRequest;

                        /**
                         * Decodes a TriggerActionRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TriggerActionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.TriggerActionRequest;

                        /**
                         * Verifies a TriggerActionRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TriggerActionRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TriggerActionRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.TriggerActionRequest;

                        /**
                         * Creates a plain object from a TriggerActionRequest message. Also converts values to other types if specified.
                         * @param message TriggerActionRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.TriggerActionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TriggerActionRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TriggerActionRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TriggerActionPayload. */
                    interface ITriggerActionPayload {

                        /** TriggerActionPayload actionContext */
                        actionContext?: (string|null);

                        /** TriggerActionPayload actionInput */
                        actionInput?: (google.shopping.merchant.issueresolution.v1.IActionInput|null);
                    }

                    /** Represents a TriggerActionPayload. */
                    class TriggerActionPayload implements ITriggerActionPayload {

                        /**
                         * Constructs a new TriggerActionPayload.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.ITriggerActionPayload);

                        /** TriggerActionPayload actionContext. */
                        public actionContext: string;

                        /** TriggerActionPayload actionInput. */
                        public actionInput?: (google.shopping.merchant.issueresolution.v1.IActionInput|null);

                        /**
                         * Creates a new TriggerActionPayload instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TriggerActionPayload instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.ITriggerActionPayload): google.shopping.merchant.issueresolution.v1.TriggerActionPayload;

                        /**
                         * Encodes the specified TriggerActionPayload message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.TriggerActionPayload.verify|verify} messages.
                         * @param message TriggerActionPayload message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.ITriggerActionPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TriggerActionPayload message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.TriggerActionPayload.verify|verify} messages.
                         * @param message TriggerActionPayload message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.ITriggerActionPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TriggerActionPayload message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TriggerActionPayload
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.TriggerActionPayload;

                        /**
                         * Decodes a TriggerActionPayload message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TriggerActionPayload
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.TriggerActionPayload;

                        /**
                         * Verifies a TriggerActionPayload message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TriggerActionPayload message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TriggerActionPayload
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.TriggerActionPayload;

                        /**
                         * Creates a plain object from a TriggerActionPayload message. Also converts values to other types if specified.
                         * @param message TriggerActionPayload
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.TriggerActionPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TriggerActionPayload to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TriggerActionPayload
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TriggerActionResponse. */
                    interface ITriggerActionResponse {

                        /** TriggerActionResponse message */
                        message?: (string|null);
                    }

                    /** Represents a TriggerActionResponse. */
                    class TriggerActionResponse implements ITriggerActionResponse {

                        /**
                         * Constructs a new TriggerActionResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.ITriggerActionResponse);

                        /** TriggerActionResponse message. */
                        public message: string;

                        /**
                         * Creates a new TriggerActionResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TriggerActionResponse instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.ITriggerActionResponse): google.shopping.merchant.issueresolution.v1.TriggerActionResponse;

                        /**
                         * Encodes the specified TriggerActionResponse message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.TriggerActionResponse.verify|verify} messages.
                         * @param message TriggerActionResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.ITriggerActionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TriggerActionResponse message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.TriggerActionResponse.verify|verify} messages.
                         * @param message TriggerActionResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.ITriggerActionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TriggerActionResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TriggerActionResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.TriggerActionResponse;

                        /**
                         * Decodes a TriggerActionResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TriggerActionResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.TriggerActionResponse;

                        /**
                         * Verifies a TriggerActionResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TriggerActionResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TriggerActionResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.TriggerActionResponse;

                        /**
                         * Creates a plain object from a TriggerActionResponse message. Also converts values to other types if specified.
                         * @param message TriggerActionResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.TriggerActionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TriggerActionResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TriggerActionResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ActionInput. */
                    interface IActionInput {

                        /** ActionInput actionFlowId */
                        actionFlowId?: (string|null);

                        /** ActionInput inputValues */
                        inputValues?: (google.shopping.merchant.issueresolution.v1.IInputValue[]|null);
                    }

                    /** Represents an ActionInput. */
                    class ActionInput implements IActionInput {

                        /**
                         * Constructs a new ActionInput.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.IActionInput);

                        /** ActionInput actionFlowId. */
                        public actionFlowId: string;

                        /** ActionInput inputValues. */
                        public inputValues: google.shopping.merchant.issueresolution.v1.IInputValue[];

                        /**
                         * Creates a new ActionInput instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ActionInput instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.IActionInput): google.shopping.merchant.issueresolution.v1.ActionInput;

                        /**
                         * Encodes the specified ActionInput message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.ActionInput.verify|verify} messages.
                         * @param message ActionInput message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.IActionInput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ActionInput message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.ActionInput.verify|verify} messages.
                         * @param message ActionInput message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.IActionInput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ActionInput message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ActionInput
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.ActionInput;

                        /**
                         * Decodes an ActionInput message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ActionInput
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.ActionInput;

                        /**
                         * Verifies an ActionInput message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ActionInput message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ActionInput
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.ActionInput;

                        /**
                         * Creates a plain object from an ActionInput message. Also converts values to other types if specified.
                         * @param message ActionInput
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.ActionInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ActionInput to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ActionInput
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an InputValue. */
                    interface IInputValue {

                        /** InputValue textInputValue */
                        textInputValue?: (google.shopping.merchant.issueresolution.v1.InputValue.ITextInputValue|null);

                        /** InputValue choiceInputValue */
                        choiceInputValue?: (google.shopping.merchant.issueresolution.v1.InputValue.IChoiceInputValue|null);

                        /** InputValue checkboxInputValue */
                        checkboxInputValue?: (google.shopping.merchant.issueresolution.v1.InputValue.ICheckboxInputValue|null);

                        /** InputValue inputFieldId */
                        inputFieldId?: (string|null);
                    }

                    /** Represents an InputValue. */
                    class InputValue implements IInputValue {

                        /**
                         * Constructs a new InputValue.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1.IInputValue);

                        /** InputValue textInputValue. */
                        public textInputValue?: (google.shopping.merchant.issueresolution.v1.InputValue.ITextInputValue|null);

                        /** InputValue choiceInputValue. */
                        public choiceInputValue?: (google.shopping.merchant.issueresolution.v1.InputValue.IChoiceInputValue|null);

                        /** InputValue checkboxInputValue. */
                        public checkboxInputValue?: (google.shopping.merchant.issueresolution.v1.InputValue.ICheckboxInputValue|null);

                        /** InputValue inputFieldId. */
                        public inputFieldId: string;

                        /** InputValue value. */
                        public value?: ("textInputValue"|"choiceInputValue"|"checkboxInputValue");

                        /**
                         * Creates a new InputValue instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InputValue instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1.IInputValue): google.shopping.merchant.issueresolution.v1.InputValue;

                        /**
                         * Encodes the specified InputValue message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.InputValue.verify|verify} messages.
                         * @param message InputValue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1.IInputValue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InputValue message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.InputValue.verify|verify} messages.
                         * @param message InputValue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.IInputValue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InputValue message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InputValue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.InputValue;

                        /**
                         * Decodes an InputValue message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InputValue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.InputValue;

                        /**
                         * Verifies an InputValue message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InputValue message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InputValue
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.InputValue;

                        /**
                         * Creates a plain object from an InputValue message. Also converts values to other types if specified.
                         * @param message InputValue
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1.InputValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InputValue to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InputValue
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace InputValue {

                        /** Properties of a TextInputValue. */
                        interface ITextInputValue {

                            /** TextInputValue value */
                            value?: (string|null);
                        }

                        /** Represents a TextInputValue. */
                        class TextInputValue implements ITextInputValue {

                            /**
                             * Constructs a new TextInputValue.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.issueresolution.v1.InputValue.ITextInputValue);

                            /** TextInputValue value. */
                            public value: string;

                            /**
                             * Creates a new TextInputValue instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns TextInputValue instance
                             */
                            public static create(properties?: google.shopping.merchant.issueresolution.v1.InputValue.ITextInputValue): google.shopping.merchant.issueresolution.v1.InputValue.TextInputValue;

                            /**
                             * Encodes the specified TextInputValue message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.InputValue.TextInputValue.verify|verify} messages.
                             * @param message TextInputValue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.issueresolution.v1.InputValue.ITextInputValue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified TextInputValue message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.InputValue.TextInputValue.verify|verify} messages.
                             * @param message TextInputValue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.InputValue.ITextInputValue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a TextInputValue message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns TextInputValue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.InputValue.TextInputValue;

                            /**
                             * Decodes a TextInputValue message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns TextInputValue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.InputValue.TextInputValue;

                            /**
                             * Verifies a TextInputValue message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a TextInputValue message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns TextInputValue
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.InputValue.TextInputValue;

                            /**
                             * Creates a plain object from a TextInputValue message. Also converts values to other types if specified.
                             * @param message TextInputValue
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.issueresolution.v1.InputValue.TextInputValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this TextInputValue to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for TextInputValue
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a ChoiceInputValue. */
                        interface IChoiceInputValue {

                            /** ChoiceInputValue choiceInputOptionId */
                            choiceInputOptionId?: (string|null);
                        }

                        /** Represents a ChoiceInputValue. */
                        class ChoiceInputValue implements IChoiceInputValue {

                            /**
                             * Constructs a new ChoiceInputValue.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.issueresolution.v1.InputValue.IChoiceInputValue);

                            /** ChoiceInputValue choiceInputOptionId. */
                            public choiceInputOptionId: string;

                            /**
                             * Creates a new ChoiceInputValue instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ChoiceInputValue instance
                             */
                            public static create(properties?: google.shopping.merchant.issueresolution.v1.InputValue.IChoiceInputValue): google.shopping.merchant.issueresolution.v1.InputValue.ChoiceInputValue;

                            /**
                             * Encodes the specified ChoiceInputValue message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.InputValue.ChoiceInputValue.verify|verify} messages.
                             * @param message ChoiceInputValue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.issueresolution.v1.InputValue.IChoiceInputValue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ChoiceInputValue message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.InputValue.ChoiceInputValue.verify|verify} messages.
                             * @param message ChoiceInputValue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.InputValue.IChoiceInputValue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ChoiceInputValue message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ChoiceInputValue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.InputValue.ChoiceInputValue;

                            /**
                             * Decodes a ChoiceInputValue message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ChoiceInputValue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.InputValue.ChoiceInputValue;

                            /**
                             * Verifies a ChoiceInputValue message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ChoiceInputValue message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ChoiceInputValue
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.InputValue.ChoiceInputValue;

                            /**
                             * Creates a plain object from a ChoiceInputValue message. Also converts values to other types if specified.
                             * @param message ChoiceInputValue
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.issueresolution.v1.InputValue.ChoiceInputValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ChoiceInputValue to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ChoiceInputValue
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a CheckboxInputValue. */
                        interface ICheckboxInputValue {

                            /** CheckboxInputValue value */
                            value?: (boolean|null);
                        }

                        /** Represents a CheckboxInputValue. */
                        class CheckboxInputValue implements ICheckboxInputValue {

                            /**
                             * Constructs a new CheckboxInputValue.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.issueresolution.v1.InputValue.ICheckboxInputValue);

                            /** CheckboxInputValue value. */
                            public value: boolean;

                            /**
                             * Creates a new CheckboxInputValue instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CheckboxInputValue instance
                             */
                            public static create(properties?: google.shopping.merchant.issueresolution.v1.InputValue.ICheckboxInputValue): google.shopping.merchant.issueresolution.v1.InputValue.CheckboxInputValue;

                            /**
                             * Encodes the specified CheckboxInputValue message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.InputValue.CheckboxInputValue.verify|verify} messages.
                             * @param message CheckboxInputValue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.issueresolution.v1.InputValue.ICheckboxInputValue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CheckboxInputValue message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1.InputValue.CheckboxInputValue.verify|verify} messages.
                             * @param message CheckboxInputValue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1.InputValue.ICheckboxInputValue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CheckboxInputValue message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CheckboxInputValue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1.InputValue.CheckboxInputValue;

                            /**
                             * Decodes a CheckboxInputValue message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CheckboxInputValue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1.InputValue.CheckboxInputValue;

                            /**
                             * Verifies a CheckboxInputValue message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CheckboxInputValue message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CheckboxInputValue
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1.InputValue.CheckboxInputValue;

                            /**
                             * Creates a plain object from a CheckboxInputValue message. Also converts values to other types if specified.
                             * @param message CheckboxInputValue
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.issueresolution.v1.InputValue.CheckboxInputValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CheckboxInputValue to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for CheckboxInputValue
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }
                }

                /** Namespace v1beta. */
                namespace v1beta {

                    /** Represents an AggregateProductStatusesService */
                    class AggregateProductStatusesService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new AggregateProductStatusesService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new AggregateProductStatusesService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AggregateProductStatusesService;

                        /**
                         * Calls ListAggregateProductStatuses.
                         * @param request ListAggregateProductStatusesRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListAggregateProductStatusesResponse
                         */
                        public listAggregateProductStatuses(request: google.shopping.merchant.issueresolution.v1beta.IListAggregateProductStatusesRequest, callback: google.shopping.merchant.issueresolution.v1beta.AggregateProductStatusesService.ListAggregateProductStatusesCallback): void;

                        /**
                         * Calls ListAggregateProductStatuses.
                         * @param request ListAggregateProductStatusesRequest message or plain object
                         * @returns Promise
                         */
                        public listAggregateProductStatuses(request: google.shopping.merchant.issueresolution.v1beta.IListAggregateProductStatusesRequest): Promise<google.shopping.merchant.issueresolution.v1beta.ListAggregateProductStatusesResponse>;
                    }

                    namespace AggregateProductStatusesService {

                        /**
                         * Callback as used by {@link google.shopping.merchant.issueresolution.v1beta.AggregateProductStatusesService|listAggregateProductStatuses}.
                         * @param error Error, if any
                         * @param [response] ListAggregateProductStatusesResponse
                         */
                        type ListAggregateProductStatusesCallback = (error: (Error|null), response?: google.shopping.merchant.issueresolution.v1beta.ListAggregateProductStatusesResponse) => void;
                    }

                    /** Properties of a ListAggregateProductStatusesRequest. */
                    interface IListAggregateProductStatusesRequest {

                        /** ListAggregateProductStatusesRequest parent */
                        parent?: (string|null);

                        /** ListAggregateProductStatusesRequest pageSize */
                        pageSize?: (number|null);

                        /** ListAggregateProductStatusesRequest pageToken */
                        pageToken?: (string|null);

                        /** ListAggregateProductStatusesRequest filter */
                        filter?: (string|null);
                    }

                    /** Represents a ListAggregateProductStatusesRequest. */
                    class ListAggregateProductStatusesRequest implements IListAggregateProductStatusesRequest {

                        /**
                         * Constructs a new ListAggregateProductStatusesRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.IListAggregateProductStatusesRequest);

                        /** ListAggregateProductStatusesRequest parent. */
                        public parent: string;

                        /** ListAggregateProductStatusesRequest pageSize. */
                        public pageSize: number;

                        /** ListAggregateProductStatusesRequest pageToken. */
                        public pageToken: string;

                        /** ListAggregateProductStatusesRequest filter. */
                        public filter: string;

                        /**
                         * Creates a new ListAggregateProductStatusesRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListAggregateProductStatusesRequest instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.IListAggregateProductStatusesRequest): google.shopping.merchant.issueresolution.v1beta.ListAggregateProductStatusesRequest;

                        /**
                         * Encodes the specified ListAggregateProductStatusesRequest message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.ListAggregateProductStatusesRequest.verify|verify} messages.
                         * @param message ListAggregateProductStatusesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.IListAggregateProductStatusesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListAggregateProductStatusesRequest message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.ListAggregateProductStatusesRequest.verify|verify} messages.
                         * @param message ListAggregateProductStatusesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.IListAggregateProductStatusesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListAggregateProductStatusesRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListAggregateProductStatusesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.ListAggregateProductStatusesRequest;

                        /**
                         * Decodes a ListAggregateProductStatusesRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListAggregateProductStatusesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.ListAggregateProductStatusesRequest;

                        /**
                         * Verifies a ListAggregateProductStatusesRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListAggregateProductStatusesRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListAggregateProductStatusesRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.ListAggregateProductStatusesRequest;

                        /**
                         * Creates a plain object from a ListAggregateProductStatusesRequest message. Also converts values to other types if specified.
                         * @param message ListAggregateProductStatusesRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.ListAggregateProductStatusesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListAggregateProductStatusesRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListAggregateProductStatusesRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListAggregateProductStatusesResponse. */
                    interface IListAggregateProductStatusesResponse {

                        /** ListAggregateProductStatusesResponse aggregateProductStatuses */
                        aggregateProductStatuses?: (google.shopping.merchant.issueresolution.v1beta.IAggregateProductStatus[]|null);

                        /** ListAggregateProductStatusesResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListAggregateProductStatusesResponse. */
                    class ListAggregateProductStatusesResponse implements IListAggregateProductStatusesResponse {

                        /**
                         * Constructs a new ListAggregateProductStatusesResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.IListAggregateProductStatusesResponse);

                        /** ListAggregateProductStatusesResponse aggregateProductStatuses. */
                        public aggregateProductStatuses: google.shopping.merchant.issueresolution.v1beta.IAggregateProductStatus[];

                        /** ListAggregateProductStatusesResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListAggregateProductStatusesResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListAggregateProductStatusesResponse instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.IListAggregateProductStatusesResponse): google.shopping.merchant.issueresolution.v1beta.ListAggregateProductStatusesResponse;

                        /**
                         * Encodes the specified ListAggregateProductStatusesResponse message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.ListAggregateProductStatusesResponse.verify|verify} messages.
                         * @param message ListAggregateProductStatusesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.IListAggregateProductStatusesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListAggregateProductStatusesResponse message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.ListAggregateProductStatusesResponse.verify|verify} messages.
                         * @param message ListAggregateProductStatusesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.IListAggregateProductStatusesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListAggregateProductStatusesResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListAggregateProductStatusesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.ListAggregateProductStatusesResponse;

                        /**
                         * Decodes a ListAggregateProductStatusesResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListAggregateProductStatusesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.ListAggregateProductStatusesResponse;

                        /**
                         * Verifies a ListAggregateProductStatusesResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListAggregateProductStatusesResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListAggregateProductStatusesResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.ListAggregateProductStatusesResponse;

                        /**
                         * Creates a plain object from a ListAggregateProductStatusesResponse message. Also converts values to other types if specified.
                         * @param message ListAggregateProductStatusesResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.ListAggregateProductStatusesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListAggregateProductStatusesResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListAggregateProductStatusesResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AggregateProductStatus. */
                    interface IAggregateProductStatus {

                        /** AggregateProductStatus name */
                        name?: (string|null);

                        /** AggregateProductStatus reportingContext */
                        reportingContext?: (google.shopping.type.ReportingContext.ReportingContextEnum|keyof typeof google.shopping.type.ReportingContext.ReportingContextEnum|null);

                        /** AggregateProductStatus country */
                        country?: (string|null);

                        /** AggregateProductStatus stats */
                        stats?: (google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.IStats|null);

                        /** AggregateProductStatus itemLevelIssues */
                        itemLevelIssues?: (google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.IItemLevelIssue[]|null);
                    }

                    /** Represents an AggregateProductStatus. */
                    class AggregateProductStatus implements IAggregateProductStatus {

                        /**
                         * Constructs a new AggregateProductStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.IAggregateProductStatus);

                        /** AggregateProductStatus name. */
                        public name: string;

                        /** AggregateProductStatus reportingContext. */
                        public reportingContext: (google.shopping.type.ReportingContext.ReportingContextEnum|keyof typeof google.shopping.type.ReportingContext.ReportingContextEnum);

                        /** AggregateProductStatus country. */
                        public country: string;

                        /** AggregateProductStatus stats. */
                        public stats?: (google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.IStats|null);

                        /** AggregateProductStatus itemLevelIssues. */
                        public itemLevelIssues: google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.IItemLevelIssue[];

                        /**
                         * Creates a new AggregateProductStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AggregateProductStatus instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.IAggregateProductStatus): google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus;

                        /**
                         * Encodes the specified AggregateProductStatus message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.verify|verify} messages.
                         * @param message AggregateProductStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.IAggregateProductStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AggregateProductStatus message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.verify|verify} messages.
                         * @param message AggregateProductStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.IAggregateProductStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AggregateProductStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AggregateProductStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus;

                        /**
                         * Decodes an AggregateProductStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AggregateProductStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus;

                        /**
                         * Verifies an AggregateProductStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AggregateProductStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AggregateProductStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus;

                        /**
                         * Creates a plain object from an AggregateProductStatus message. Also converts values to other types if specified.
                         * @param message AggregateProductStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AggregateProductStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AggregateProductStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace AggregateProductStatus {

                        /** Properties of a Stats. */
                        interface IStats {

                            /** Stats activeCount */
                            activeCount?: (number|Long|string|null);

                            /** Stats pendingCount */
                            pendingCount?: (number|Long|string|null);

                            /** Stats disapprovedCount */
                            disapprovedCount?: (number|Long|string|null);

                            /** Stats expiringCount */
                            expiringCount?: (number|Long|string|null);
                        }

                        /** Represents a Stats. */
                        class Stats implements IStats {

                            /**
                             * Constructs a new Stats.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.IStats);

                            /** Stats activeCount. */
                            public activeCount: (number|Long|string);

                            /** Stats pendingCount. */
                            public pendingCount: (number|Long|string);

                            /** Stats disapprovedCount. */
                            public disapprovedCount: (number|Long|string);

                            /** Stats expiringCount. */
                            public expiringCount: (number|Long|string);

                            /**
                             * Creates a new Stats instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Stats instance
                             */
                            public static create(properties?: google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.IStats): google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.Stats;

                            /**
                             * Encodes the specified Stats message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.Stats.verify|verify} messages.
                             * @param message Stats message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.IStats, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Stats message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.Stats.verify|verify} messages.
                             * @param message Stats message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.IStats, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Stats message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Stats
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.Stats;

                            /**
                             * Decodes a Stats message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Stats
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.Stats;

                            /**
                             * Verifies a Stats message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Stats message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Stats
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.Stats;

                            /**
                             * Creates a plain object from a Stats message. Also converts values to other types if specified.
                             * @param message Stats
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.Stats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Stats to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Stats
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an ItemLevelIssue. */
                        interface IItemLevelIssue {

                            /** ItemLevelIssue code */
                            code?: (string|null);

                            /** ItemLevelIssue severity */
                            severity?: (google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.ItemLevelIssue.Severity|keyof typeof google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.ItemLevelIssue.Severity|null);

                            /** ItemLevelIssue resolution */
                            resolution?: (google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.ItemLevelIssue.Resolution|keyof typeof google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.ItemLevelIssue.Resolution|null);

                            /** ItemLevelIssue attribute */
                            attribute?: (string|null);

                            /** ItemLevelIssue description */
                            description?: (string|null);

                            /** ItemLevelIssue detail */
                            detail?: (string|null);

                            /** ItemLevelIssue documentationUri */
                            documentationUri?: (string|null);

                            /** ItemLevelIssue productCount */
                            productCount?: (number|Long|string|null);
                        }

                        /** Represents an ItemLevelIssue. */
                        class ItemLevelIssue implements IItemLevelIssue {

                            /**
                             * Constructs a new ItemLevelIssue.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.IItemLevelIssue);

                            /** ItemLevelIssue code. */
                            public code: string;

                            /** ItemLevelIssue severity. */
                            public severity: (google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.ItemLevelIssue.Severity|keyof typeof google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.ItemLevelIssue.Severity);

                            /** ItemLevelIssue resolution. */
                            public resolution: (google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.ItemLevelIssue.Resolution|keyof typeof google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.ItemLevelIssue.Resolution);

                            /** ItemLevelIssue attribute. */
                            public attribute: string;

                            /** ItemLevelIssue description. */
                            public description: string;

                            /** ItemLevelIssue detail. */
                            public detail: string;

                            /** ItemLevelIssue documentationUri. */
                            public documentationUri: string;

                            /** ItemLevelIssue productCount. */
                            public productCount: (number|Long|string);

                            /**
                             * Creates a new ItemLevelIssue instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ItemLevelIssue instance
                             */
                            public static create(properties?: google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.IItemLevelIssue): google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.ItemLevelIssue;

                            /**
                             * Encodes the specified ItemLevelIssue message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.ItemLevelIssue.verify|verify} messages.
                             * @param message ItemLevelIssue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.IItemLevelIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ItemLevelIssue message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.ItemLevelIssue.verify|verify} messages.
                             * @param message ItemLevelIssue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.IItemLevelIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an ItemLevelIssue message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ItemLevelIssue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.ItemLevelIssue;

                            /**
                             * Decodes an ItemLevelIssue message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ItemLevelIssue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.ItemLevelIssue;

                            /**
                             * Verifies an ItemLevelIssue message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an ItemLevelIssue message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ItemLevelIssue
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.ItemLevelIssue;

                            /**
                             * Creates a plain object from an ItemLevelIssue message. Also converts values to other types if specified.
                             * @param message ItemLevelIssue
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.issueresolution.v1beta.AggregateProductStatus.ItemLevelIssue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ItemLevelIssue to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ItemLevelIssue
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace ItemLevelIssue {

                            /** Severity enum. */
                            enum Severity {
                                SEVERITY_UNSPECIFIED = 0,
                                NOT_IMPACTED = 1,
                                DEMOTED = 2,
                                DISAPPROVED = 3
                            }

                            /** Resolution enum. */
                            enum Resolution {
                                RESOLUTION_UNSPECIFIED = 0,
                                MERCHANT_ACTION = 1,
                                PENDING_PROCESSING = 2
                            }
                        }
                    }

                    /** Represents an IssueResolutionService */
                    class IssueResolutionService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new IssueResolutionService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new IssueResolutionService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): IssueResolutionService;

                        /**
                         * Calls RenderAccountIssues.
                         * @param request RenderAccountIssuesRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and RenderAccountIssuesResponse
                         */
                        public renderAccountIssues(request: google.shopping.merchant.issueresolution.v1beta.IRenderAccountIssuesRequest, callback: google.shopping.merchant.issueresolution.v1beta.IssueResolutionService.RenderAccountIssuesCallback): void;

                        /**
                         * Calls RenderAccountIssues.
                         * @param request RenderAccountIssuesRequest message or plain object
                         * @returns Promise
                         */
                        public renderAccountIssues(request: google.shopping.merchant.issueresolution.v1beta.IRenderAccountIssuesRequest): Promise<google.shopping.merchant.issueresolution.v1beta.RenderAccountIssuesResponse>;

                        /**
                         * Calls RenderProductIssues.
                         * @param request RenderProductIssuesRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and RenderProductIssuesResponse
                         */
                        public renderProductIssues(request: google.shopping.merchant.issueresolution.v1beta.IRenderProductIssuesRequest, callback: google.shopping.merchant.issueresolution.v1beta.IssueResolutionService.RenderProductIssuesCallback): void;

                        /**
                         * Calls RenderProductIssues.
                         * @param request RenderProductIssuesRequest message or plain object
                         * @returns Promise
                         */
                        public renderProductIssues(request: google.shopping.merchant.issueresolution.v1beta.IRenderProductIssuesRequest): Promise<google.shopping.merchant.issueresolution.v1beta.RenderProductIssuesResponse>;

                        /**
                         * Calls TriggerAction.
                         * @param request TriggerActionRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and TriggerActionResponse
                         */
                        public triggerAction(request: google.shopping.merchant.issueresolution.v1beta.ITriggerActionRequest, callback: google.shopping.merchant.issueresolution.v1beta.IssueResolutionService.TriggerActionCallback): void;

                        /**
                         * Calls TriggerAction.
                         * @param request TriggerActionRequest message or plain object
                         * @returns Promise
                         */
                        public triggerAction(request: google.shopping.merchant.issueresolution.v1beta.ITriggerActionRequest): Promise<google.shopping.merchant.issueresolution.v1beta.TriggerActionResponse>;
                    }

                    namespace IssueResolutionService {

                        /**
                         * Callback as used by {@link google.shopping.merchant.issueresolution.v1beta.IssueResolutionService|renderAccountIssues}.
                         * @param error Error, if any
                         * @param [response] RenderAccountIssuesResponse
                         */
                        type RenderAccountIssuesCallback = (error: (Error|null), response?: google.shopping.merchant.issueresolution.v1beta.RenderAccountIssuesResponse) => void;

                        /**
                         * Callback as used by {@link google.shopping.merchant.issueresolution.v1beta.IssueResolutionService|renderProductIssues}.
                         * @param error Error, if any
                         * @param [response] RenderProductIssuesResponse
                         */
                        type RenderProductIssuesCallback = (error: (Error|null), response?: google.shopping.merchant.issueresolution.v1beta.RenderProductIssuesResponse) => void;

                        /**
                         * Callback as used by {@link google.shopping.merchant.issueresolution.v1beta.IssueResolutionService|triggerAction}.
                         * @param error Error, if any
                         * @param [response] TriggerActionResponse
                         */
                        type TriggerActionCallback = (error: (Error|null), response?: google.shopping.merchant.issueresolution.v1beta.TriggerActionResponse) => void;
                    }

                    /** Severity enum. */
                    enum Severity {
                        SEVERITY_UNSPECIFIED = 0,
                        ERROR = 1,
                        WARNING = 2,
                        INFO = 3
                    }

                    /** ContentOption enum. */
                    enum ContentOption {
                        CONTENT_OPTION_UNSPECIFIED = 0,
                        PRE_RENDERED_HTML = 1
                    }

                    /** UserInputActionRenderingOption enum. */
                    enum UserInputActionRenderingOption {
                        USER_INPUT_ACTION_RENDERING_OPTION_UNSPECIFIED = 0,
                        REDIRECT_TO_MERCHANT_CENTER = 1,
                        BUILT_IN_USER_INPUT_ACTIONS = 2
                    }

                    /** Properties of a RenderAccountIssuesResponse. */
                    interface IRenderAccountIssuesResponse {

                        /** RenderAccountIssuesResponse renderedIssues */
                        renderedIssues?: (google.shopping.merchant.issueresolution.v1beta.IRenderedIssue[]|null);
                    }

                    /** Represents a RenderAccountIssuesResponse. */
                    class RenderAccountIssuesResponse implements IRenderAccountIssuesResponse {

                        /**
                         * Constructs a new RenderAccountIssuesResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.IRenderAccountIssuesResponse);

                        /** RenderAccountIssuesResponse renderedIssues. */
                        public renderedIssues: google.shopping.merchant.issueresolution.v1beta.IRenderedIssue[];

                        /**
                         * Creates a new RenderAccountIssuesResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RenderAccountIssuesResponse instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.IRenderAccountIssuesResponse): google.shopping.merchant.issueresolution.v1beta.RenderAccountIssuesResponse;

                        /**
                         * Encodes the specified RenderAccountIssuesResponse message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.RenderAccountIssuesResponse.verify|verify} messages.
                         * @param message RenderAccountIssuesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.IRenderAccountIssuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RenderAccountIssuesResponse message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.RenderAccountIssuesResponse.verify|verify} messages.
                         * @param message RenderAccountIssuesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.IRenderAccountIssuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RenderAccountIssuesResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RenderAccountIssuesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.RenderAccountIssuesResponse;

                        /**
                         * Decodes a RenderAccountIssuesResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RenderAccountIssuesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.RenderAccountIssuesResponse;

                        /**
                         * Verifies a RenderAccountIssuesResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RenderAccountIssuesResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RenderAccountIssuesResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.RenderAccountIssuesResponse;

                        /**
                         * Creates a plain object from a RenderAccountIssuesResponse message. Also converts values to other types if specified.
                         * @param message RenderAccountIssuesResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.RenderAccountIssuesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RenderAccountIssuesResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RenderAccountIssuesResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RenderAccountIssuesRequest. */
                    interface IRenderAccountIssuesRequest {

                        /** RenderAccountIssuesRequest name */
                        name?: (string|null);

                        /** RenderAccountIssuesRequest languageCode */
                        languageCode?: (string|null);

                        /** RenderAccountIssuesRequest timeZone */
                        timeZone?: (string|null);

                        /** RenderAccountIssuesRequest payload */
                        payload?: (google.shopping.merchant.issueresolution.v1beta.IRenderIssuesRequestPayload|null);
                    }

                    /** Represents a RenderAccountIssuesRequest. */
                    class RenderAccountIssuesRequest implements IRenderAccountIssuesRequest {

                        /**
                         * Constructs a new RenderAccountIssuesRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.IRenderAccountIssuesRequest);

                        /** RenderAccountIssuesRequest name. */
                        public name: string;

                        /** RenderAccountIssuesRequest languageCode. */
                        public languageCode: string;

                        /** RenderAccountIssuesRequest timeZone. */
                        public timeZone: string;

                        /** RenderAccountIssuesRequest payload. */
                        public payload?: (google.shopping.merchant.issueresolution.v1beta.IRenderIssuesRequestPayload|null);

                        /**
                         * Creates a new RenderAccountIssuesRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RenderAccountIssuesRequest instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.IRenderAccountIssuesRequest): google.shopping.merchant.issueresolution.v1beta.RenderAccountIssuesRequest;

                        /**
                         * Encodes the specified RenderAccountIssuesRequest message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.RenderAccountIssuesRequest.verify|verify} messages.
                         * @param message RenderAccountIssuesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.IRenderAccountIssuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RenderAccountIssuesRequest message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.RenderAccountIssuesRequest.verify|verify} messages.
                         * @param message RenderAccountIssuesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.IRenderAccountIssuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RenderAccountIssuesRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RenderAccountIssuesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.RenderAccountIssuesRequest;

                        /**
                         * Decodes a RenderAccountIssuesRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RenderAccountIssuesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.RenderAccountIssuesRequest;

                        /**
                         * Verifies a RenderAccountIssuesRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RenderAccountIssuesRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RenderAccountIssuesRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.RenderAccountIssuesRequest;

                        /**
                         * Creates a plain object from a RenderAccountIssuesRequest message. Also converts values to other types if specified.
                         * @param message RenderAccountIssuesRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.RenderAccountIssuesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RenderAccountIssuesRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RenderAccountIssuesRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RenderIssuesRequestPayload. */
                    interface IRenderIssuesRequestPayload {

                        /** RenderIssuesRequestPayload contentOption */
                        contentOption?: (google.shopping.merchant.issueresolution.v1beta.ContentOption|keyof typeof google.shopping.merchant.issueresolution.v1beta.ContentOption|null);

                        /** RenderIssuesRequestPayload userInputActionOption */
                        userInputActionOption?: (google.shopping.merchant.issueresolution.v1beta.UserInputActionRenderingOption|keyof typeof google.shopping.merchant.issueresolution.v1beta.UserInputActionRenderingOption|null);
                    }

                    /** Represents a RenderIssuesRequestPayload. */
                    class RenderIssuesRequestPayload implements IRenderIssuesRequestPayload {

                        /**
                         * Constructs a new RenderIssuesRequestPayload.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.IRenderIssuesRequestPayload);

                        /** RenderIssuesRequestPayload contentOption. */
                        public contentOption?: (google.shopping.merchant.issueresolution.v1beta.ContentOption|keyof typeof google.shopping.merchant.issueresolution.v1beta.ContentOption|null);

                        /** RenderIssuesRequestPayload userInputActionOption. */
                        public userInputActionOption?: (google.shopping.merchant.issueresolution.v1beta.UserInputActionRenderingOption|keyof typeof google.shopping.merchant.issueresolution.v1beta.UserInputActionRenderingOption|null);

                        /**
                         * Creates a new RenderIssuesRequestPayload instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RenderIssuesRequestPayload instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.IRenderIssuesRequestPayload): google.shopping.merchant.issueresolution.v1beta.RenderIssuesRequestPayload;

                        /**
                         * Encodes the specified RenderIssuesRequestPayload message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.RenderIssuesRequestPayload.verify|verify} messages.
                         * @param message RenderIssuesRequestPayload message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.IRenderIssuesRequestPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RenderIssuesRequestPayload message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.RenderIssuesRequestPayload.verify|verify} messages.
                         * @param message RenderIssuesRequestPayload message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.IRenderIssuesRequestPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RenderIssuesRequestPayload message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RenderIssuesRequestPayload
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.RenderIssuesRequestPayload;

                        /**
                         * Decodes a RenderIssuesRequestPayload message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RenderIssuesRequestPayload
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.RenderIssuesRequestPayload;

                        /**
                         * Verifies a RenderIssuesRequestPayload message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RenderIssuesRequestPayload message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RenderIssuesRequestPayload
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.RenderIssuesRequestPayload;

                        /**
                         * Creates a plain object from a RenderIssuesRequestPayload message. Also converts values to other types if specified.
                         * @param message RenderIssuesRequestPayload
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.RenderIssuesRequestPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RenderIssuesRequestPayload to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RenderIssuesRequestPayload
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RenderProductIssuesResponse. */
                    interface IRenderProductIssuesResponse {

                        /** RenderProductIssuesResponse renderedIssues */
                        renderedIssues?: (google.shopping.merchant.issueresolution.v1beta.IRenderedIssue[]|null);
                    }

                    /** Represents a RenderProductIssuesResponse. */
                    class RenderProductIssuesResponse implements IRenderProductIssuesResponse {

                        /**
                         * Constructs a new RenderProductIssuesResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.IRenderProductIssuesResponse);

                        /** RenderProductIssuesResponse renderedIssues. */
                        public renderedIssues: google.shopping.merchant.issueresolution.v1beta.IRenderedIssue[];

                        /**
                         * Creates a new RenderProductIssuesResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RenderProductIssuesResponse instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.IRenderProductIssuesResponse): google.shopping.merchant.issueresolution.v1beta.RenderProductIssuesResponse;

                        /**
                         * Encodes the specified RenderProductIssuesResponse message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.RenderProductIssuesResponse.verify|verify} messages.
                         * @param message RenderProductIssuesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.IRenderProductIssuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RenderProductIssuesResponse message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.RenderProductIssuesResponse.verify|verify} messages.
                         * @param message RenderProductIssuesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.IRenderProductIssuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RenderProductIssuesResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RenderProductIssuesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.RenderProductIssuesResponse;

                        /**
                         * Decodes a RenderProductIssuesResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RenderProductIssuesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.RenderProductIssuesResponse;

                        /**
                         * Verifies a RenderProductIssuesResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RenderProductIssuesResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RenderProductIssuesResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.RenderProductIssuesResponse;

                        /**
                         * Creates a plain object from a RenderProductIssuesResponse message. Also converts values to other types if specified.
                         * @param message RenderProductIssuesResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.RenderProductIssuesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RenderProductIssuesResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RenderProductIssuesResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RenderProductIssuesRequest. */
                    interface IRenderProductIssuesRequest {

                        /** RenderProductIssuesRequest name */
                        name?: (string|null);

                        /** RenderProductIssuesRequest languageCode */
                        languageCode?: (string|null);

                        /** RenderProductIssuesRequest timeZone */
                        timeZone?: (string|null);

                        /** RenderProductIssuesRequest payload */
                        payload?: (google.shopping.merchant.issueresolution.v1beta.IRenderIssuesRequestPayload|null);
                    }

                    /** Represents a RenderProductIssuesRequest. */
                    class RenderProductIssuesRequest implements IRenderProductIssuesRequest {

                        /**
                         * Constructs a new RenderProductIssuesRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.IRenderProductIssuesRequest);

                        /** RenderProductIssuesRequest name. */
                        public name: string;

                        /** RenderProductIssuesRequest languageCode. */
                        public languageCode: string;

                        /** RenderProductIssuesRequest timeZone. */
                        public timeZone: string;

                        /** RenderProductIssuesRequest payload. */
                        public payload?: (google.shopping.merchant.issueresolution.v1beta.IRenderIssuesRequestPayload|null);

                        /**
                         * Creates a new RenderProductIssuesRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RenderProductIssuesRequest instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.IRenderProductIssuesRequest): google.shopping.merchant.issueresolution.v1beta.RenderProductIssuesRequest;

                        /**
                         * Encodes the specified RenderProductIssuesRequest message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.RenderProductIssuesRequest.verify|verify} messages.
                         * @param message RenderProductIssuesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.IRenderProductIssuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RenderProductIssuesRequest message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.RenderProductIssuesRequest.verify|verify} messages.
                         * @param message RenderProductIssuesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.IRenderProductIssuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RenderProductIssuesRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RenderProductIssuesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.RenderProductIssuesRequest;

                        /**
                         * Decodes a RenderProductIssuesRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RenderProductIssuesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.RenderProductIssuesRequest;

                        /**
                         * Verifies a RenderProductIssuesRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RenderProductIssuesRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RenderProductIssuesRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.RenderProductIssuesRequest;

                        /**
                         * Creates a plain object from a RenderProductIssuesRequest message. Also converts values to other types if specified.
                         * @param message RenderProductIssuesRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.RenderProductIssuesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RenderProductIssuesRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RenderProductIssuesRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RenderedIssue. */
                    interface IRenderedIssue {

                        /** RenderedIssue prerenderedContent */
                        prerenderedContent?: (string|null);

                        /** RenderedIssue prerenderedOutOfCourtDisputeSettlement */
                        prerenderedOutOfCourtDisputeSettlement?: (string|null);

                        /** RenderedIssue title */
                        title?: (string|null);

                        /** RenderedIssue impact */
                        impact?: (google.shopping.merchant.issueresolution.v1beta.IImpact|null);

                        /** RenderedIssue actions */
                        actions?: (google.shopping.merchant.issueresolution.v1beta.IAction[]|null);
                    }

                    /** Represents a RenderedIssue. */
                    class RenderedIssue implements IRenderedIssue {

                        /**
                         * Constructs a new RenderedIssue.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.IRenderedIssue);

                        /** RenderedIssue prerenderedContent. */
                        public prerenderedContent?: (string|null);

                        /** RenderedIssue prerenderedOutOfCourtDisputeSettlement. */
                        public prerenderedOutOfCourtDisputeSettlement?: (string|null);

                        /** RenderedIssue title. */
                        public title: string;

                        /** RenderedIssue impact. */
                        public impact?: (google.shopping.merchant.issueresolution.v1beta.IImpact|null);

                        /** RenderedIssue actions. */
                        public actions: google.shopping.merchant.issueresolution.v1beta.IAction[];

                        /** RenderedIssue content. */
                        public content?: "prerenderedContent";

                        /** RenderedIssue outOfCourtDisputeSettlement. */
                        public outOfCourtDisputeSettlement?: "prerenderedOutOfCourtDisputeSettlement";

                        /**
                         * Creates a new RenderedIssue instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RenderedIssue instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.IRenderedIssue): google.shopping.merchant.issueresolution.v1beta.RenderedIssue;

                        /**
                         * Encodes the specified RenderedIssue message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.RenderedIssue.verify|verify} messages.
                         * @param message RenderedIssue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.IRenderedIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RenderedIssue message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.RenderedIssue.verify|verify} messages.
                         * @param message RenderedIssue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.IRenderedIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RenderedIssue message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RenderedIssue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.RenderedIssue;

                        /**
                         * Decodes a RenderedIssue message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RenderedIssue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.RenderedIssue;

                        /**
                         * Verifies a RenderedIssue message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RenderedIssue message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RenderedIssue
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.RenderedIssue;

                        /**
                         * Creates a plain object from a RenderedIssue message. Also converts values to other types if specified.
                         * @param message RenderedIssue
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.RenderedIssue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RenderedIssue to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RenderedIssue
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Impact. */
                    interface IImpact {

                        /** Impact message */
                        message?: (string|null);

                        /** Impact severity */
                        severity?: (google.shopping.merchant.issueresolution.v1beta.Severity|keyof typeof google.shopping.merchant.issueresolution.v1beta.Severity|null);

                        /** Impact breakdowns */
                        breakdowns?: (google.shopping.merchant.issueresolution.v1beta.IBreakdown[]|null);
                    }

                    /** Represents an Impact. */
                    class Impact implements IImpact {

                        /**
                         * Constructs a new Impact.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.IImpact);

                        /** Impact message. */
                        public message: string;

                        /** Impact severity. */
                        public severity: (google.shopping.merchant.issueresolution.v1beta.Severity|keyof typeof google.shopping.merchant.issueresolution.v1beta.Severity);

                        /** Impact breakdowns. */
                        public breakdowns: google.shopping.merchant.issueresolution.v1beta.IBreakdown[];

                        /**
                         * Creates a new Impact instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Impact instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.IImpact): google.shopping.merchant.issueresolution.v1beta.Impact;

                        /**
                         * Encodes the specified Impact message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.Impact.verify|verify} messages.
                         * @param message Impact message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.IImpact, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Impact message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.Impact.verify|verify} messages.
                         * @param message Impact message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.IImpact, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Impact message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Impact
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.Impact;

                        /**
                         * Decodes an Impact message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Impact
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.Impact;

                        /**
                         * Verifies an Impact message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Impact message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Impact
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.Impact;

                        /**
                         * Creates a plain object from an Impact message. Also converts values to other types if specified.
                         * @param message Impact
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.Impact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Impact to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Impact
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Breakdown. */
                    interface IBreakdown {

                        /** Breakdown regions */
                        regions?: (google.shopping.merchant.issueresolution.v1beta.Breakdown.IRegion[]|null);

                        /** Breakdown details */
                        details?: (string[]|null);
                    }

                    /** Represents a Breakdown. */
                    class Breakdown implements IBreakdown {

                        /**
                         * Constructs a new Breakdown.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.IBreakdown);

                        /** Breakdown regions. */
                        public regions: google.shopping.merchant.issueresolution.v1beta.Breakdown.IRegion[];

                        /** Breakdown details. */
                        public details: string[];

                        /**
                         * Creates a new Breakdown instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Breakdown instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.IBreakdown): google.shopping.merchant.issueresolution.v1beta.Breakdown;

                        /**
                         * Encodes the specified Breakdown message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.Breakdown.verify|verify} messages.
                         * @param message Breakdown message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.IBreakdown, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Breakdown message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.Breakdown.verify|verify} messages.
                         * @param message Breakdown message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.IBreakdown, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Breakdown message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Breakdown
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.Breakdown;

                        /**
                         * Decodes a Breakdown message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Breakdown
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.Breakdown;

                        /**
                         * Verifies a Breakdown message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Breakdown message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Breakdown
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.Breakdown;

                        /**
                         * Creates a plain object from a Breakdown message. Also converts values to other types if specified.
                         * @param message Breakdown
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.Breakdown, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Breakdown to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Breakdown
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Breakdown {

                        /** Properties of a Region. */
                        interface IRegion {

                            /** Region code */
                            code?: (string|null);

                            /** Region name */
                            name?: (string|null);
                        }

                        /** Represents a Region. */
                        class Region implements IRegion {

                            /**
                             * Constructs a new Region.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.issueresolution.v1beta.Breakdown.IRegion);

                            /** Region code. */
                            public code: string;

                            /** Region name. */
                            public name: string;

                            /**
                             * Creates a new Region instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Region instance
                             */
                            public static create(properties?: google.shopping.merchant.issueresolution.v1beta.Breakdown.IRegion): google.shopping.merchant.issueresolution.v1beta.Breakdown.Region;

                            /**
                             * Encodes the specified Region message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.Breakdown.Region.verify|verify} messages.
                             * @param message Region message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.issueresolution.v1beta.Breakdown.IRegion, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Region message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.Breakdown.Region.verify|verify} messages.
                             * @param message Region message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.Breakdown.IRegion, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Region message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Region
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.Breakdown.Region;

                            /**
                             * Decodes a Region message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Region
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.Breakdown.Region;

                            /**
                             * Verifies a Region message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Region message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Region
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.Breakdown.Region;

                            /**
                             * Creates a plain object from a Region message. Also converts values to other types if specified.
                             * @param message Region
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.issueresolution.v1beta.Breakdown.Region, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Region to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Region
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of an Action. */
                    interface IAction {

                        /** Action builtinSimpleAction */
                        builtinSimpleAction?: (google.shopping.merchant.issueresolution.v1beta.IBuiltInSimpleAction|null);

                        /** Action externalAction */
                        externalAction?: (google.shopping.merchant.issueresolution.v1beta.IExternalAction|null);

                        /** Action builtinUserInputAction */
                        builtinUserInputAction?: (google.shopping.merchant.issueresolution.v1beta.IBuiltInUserInputAction|null);

                        /** Action buttonLabel */
                        buttonLabel?: (string|null);

                        /** Action isAvailable */
                        isAvailable?: (boolean|null);

                        /** Action reasons */
                        reasons?: (google.shopping.merchant.issueresolution.v1beta.Action.IReason[]|null);
                    }

                    /** Represents an Action. */
                    class Action implements IAction {

                        /**
                         * Constructs a new Action.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.IAction);

                        /** Action builtinSimpleAction. */
                        public builtinSimpleAction?: (google.shopping.merchant.issueresolution.v1beta.IBuiltInSimpleAction|null);

                        /** Action externalAction. */
                        public externalAction?: (google.shopping.merchant.issueresolution.v1beta.IExternalAction|null);

                        /** Action builtinUserInputAction. */
                        public builtinUserInputAction?: (google.shopping.merchant.issueresolution.v1beta.IBuiltInUserInputAction|null);

                        /** Action buttonLabel. */
                        public buttonLabel: string;

                        /** Action isAvailable. */
                        public isAvailable: boolean;

                        /** Action reasons. */
                        public reasons: google.shopping.merchant.issueresolution.v1beta.Action.IReason[];

                        /** Action action. */
                        public action?: ("builtinSimpleAction"|"externalAction"|"builtinUserInputAction");

                        /**
                         * Creates a new Action instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Action instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.IAction): google.shopping.merchant.issueresolution.v1beta.Action;

                        /**
                         * Encodes the specified Action message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.Action.verify|verify} messages.
                         * @param message Action message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Action message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.Action.verify|verify} messages.
                         * @param message Action message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Action message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Action
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.Action;

                        /**
                         * Decodes an Action message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Action
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.Action;

                        /**
                         * Verifies an Action message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Action message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Action
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.Action;

                        /**
                         * Creates a plain object from an Action message. Also converts values to other types if specified.
                         * @param message Action
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.Action, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Action to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Action
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Action {

                        /** Properties of a Reason. */
                        interface IReason {

                            /** Reason message */
                            message?: (string|null);

                            /** Reason detail */
                            detail?: (string|null);

                            /** Reason action */
                            action?: (google.shopping.merchant.issueresolution.v1beta.IAction|null);
                        }

                        /** Represents a Reason. */
                        class Reason implements IReason {

                            /**
                             * Constructs a new Reason.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.issueresolution.v1beta.Action.IReason);

                            /** Reason message. */
                            public message: string;

                            /** Reason detail. */
                            public detail?: (string|null);

                            /** Reason action. */
                            public action?: (google.shopping.merchant.issueresolution.v1beta.IAction|null);

                            /**
                             * Creates a new Reason instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Reason instance
                             */
                            public static create(properties?: google.shopping.merchant.issueresolution.v1beta.Action.IReason): google.shopping.merchant.issueresolution.v1beta.Action.Reason;

                            /**
                             * Encodes the specified Reason message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.Action.Reason.verify|verify} messages.
                             * @param message Reason message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.issueresolution.v1beta.Action.IReason, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Reason message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.Action.Reason.verify|verify} messages.
                             * @param message Reason message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.Action.IReason, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Reason message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Reason
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.Action.Reason;

                            /**
                             * Decodes a Reason message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Reason
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.Action.Reason;

                            /**
                             * Verifies a Reason message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Reason message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Reason
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.Action.Reason;

                            /**
                             * Creates a plain object from a Reason message. Also converts values to other types if specified.
                             * @param message Reason
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.issueresolution.v1beta.Action.Reason, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Reason to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Reason
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a BuiltInSimpleAction. */
                    interface IBuiltInSimpleAction {

                        /** BuiltInSimpleAction type */
                        type?: (google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction.BuiltInSimpleActionType|keyof typeof google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction.BuiltInSimpleActionType|null);

                        /** BuiltInSimpleAction attributeCode */
                        attributeCode?: (string|null);

                        /** BuiltInSimpleAction additionalContent */
                        additionalContent?: (google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction.IAdditionalContent|null);
                    }

                    /** Represents a BuiltInSimpleAction. */
                    class BuiltInSimpleAction implements IBuiltInSimpleAction {

                        /**
                         * Constructs a new BuiltInSimpleAction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.IBuiltInSimpleAction);

                        /** BuiltInSimpleAction type. */
                        public type: (google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction.BuiltInSimpleActionType|keyof typeof google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction.BuiltInSimpleActionType);

                        /** BuiltInSimpleAction attributeCode. */
                        public attributeCode?: (string|null);

                        /** BuiltInSimpleAction additionalContent. */
                        public additionalContent?: (google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction.IAdditionalContent|null);

                        /**
                         * Creates a new BuiltInSimpleAction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BuiltInSimpleAction instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.IBuiltInSimpleAction): google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction;

                        /**
                         * Encodes the specified BuiltInSimpleAction message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction.verify|verify} messages.
                         * @param message BuiltInSimpleAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.IBuiltInSimpleAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BuiltInSimpleAction message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction.verify|verify} messages.
                         * @param message BuiltInSimpleAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.IBuiltInSimpleAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BuiltInSimpleAction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BuiltInSimpleAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction;

                        /**
                         * Decodes a BuiltInSimpleAction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BuiltInSimpleAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction;

                        /**
                         * Verifies a BuiltInSimpleAction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BuiltInSimpleAction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BuiltInSimpleAction
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction;

                        /**
                         * Creates a plain object from a BuiltInSimpleAction message. Also converts values to other types if specified.
                         * @param message BuiltInSimpleAction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BuiltInSimpleAction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BuiltInSimpleAction
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace BuiltInSimpleAction {

                        /** Properties of an AdditionalContent. */
                        interface IAdditionalContent {

                            /** AdditionalContent title */
                            title?: (string|null);

                            /** AdditionalContent paragraphs */
                            paragraphs?: (string[]|null);
                        }

                        /** Represents an AdditionalContent. */
                        class AdditionalContent implements IAdditionalContent {

                            /**
                             * Constructs a new AdditionalContent.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction.IAdditionalContent);

                            /** AdditionalContent title. */
                            public title: string;

                            /** AdditionalContent paragraphs. */
                            public paragraphs: string[];

                            /**
                             * Creates a new AdditionalContent instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AdditionalContent instance
                             */
                            public static create(properties?: google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction.IAdditionalContent): google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction.AdditionalContent;

                            /**
                             * Encodes the specified AdditionalContent message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction.AdditionalContent.verify|verify} messages.
                             * @param message AdditionalContent message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction.IAdditionalContent, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AdditionalContent message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction.AdditionalContent.verify|verify} messages.
                             * @param message AdditionalContent message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction.IAdditionalContent, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AdditionalContent message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AdditionalContent
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction.AdditionalContent;

                            /**
                             * Decodes an AdditionalContent message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AdditionalContent
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction.AdditionalContent;

                            /**
                             * Verifies an AdditionalContent message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AdditionalContent message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AdditionalContent
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction.AdditionalContent;

                            /**
                             * Creates a plain object from an AdditionalContent message. Also converts values to other types if specified.
                             * @param message AdditionalContent
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.issueresolution.v1beta.BuiltInSimpleAction.AdditionalContent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AdditionalContent to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AdditionalContent
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** BuiltInSimpleActionType enum. */
                        enum BuiltInSimpleActionType {
                            BUILT_IN_SIMPLE_ACTION_TYPE_UNSPECIFIED = 0,
                            VERIFY_PHONE = 1,
                            CLAIM_WEBSITE = 2,
                            ADD_PRODUCTS = 3,
                            ADD_CONTACT_INFO = 4,
                            LINK_ADS_ACCOUNT = 5,
                            ADD_BUSINESS_REGISTRATION_NUMBER = 6,
                            EDIT_ITEM_ATTRIBUTE = 7,
                            FIX_ACCOUNT_ISSUE = 8,
                            SHOW_ADDITIONAL_CONTENT = 9
                        }
                    }

                    /** Properties of a BuiltInUserInputAction. */
                    interface IBuiltInUserInputAction {

                        /** BuiltInUserInputAction actionContext */
                        actionContext?: (string|null);

                        /** BuiltInUserInputAction flows */
                        flows?: (google.shopping.merchant.issueresolution.v1beta.IActionFlow[]|null);
                    }

                    /** Represents a BuiltInUserInputAction. */
                    class BuiltInUserInputAction implements IBuiltInUserInputAction {

                        /**
                         * Constructs a new BuiltInUserInputAction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.IBuiltInUserInputAction);

                        /** BuiltInUserInputAction actionContext. */
                        public actionContext: string;

                        /** BuiltInUserInputAction flows. */
                        public flows: google.shopping.merchant.issueresolution.v1beta.IActionFlow[];

                        /**
                         * Creates a new BuiltInUserInputAction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BuiltInUserInputAction instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.IBuiltInUserInputAction): google.shopping.merchant.issueresolution.v1beta.BuiltInUserInputAction;

                        /**
                         * Encodes the specified BuiltInUserInputAction message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.BuiltInUserInputAction.verify|verify} messages.
                         * @param message BuiltInUserInputAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.IBuiltInUserInputAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BuiltInUserInputAction message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.BuiltInUserInputAction.verify|verify} messages.
                         * @param message BuiltInUserInputAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.IBuiltInUserInputAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BuiltInUserInputAction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BuiltInUserInputAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.BuiltInUserInputAction;

                        /**
                         * Decodes a BuiltInUserInputAction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BuiltInUserInputAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.BuiltInUserInputAction;

                        /**
                         * Verifies a BuiltInUserInputAction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BuiltInUserInputAction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BuiltInUserInputAction
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.BuiltInUserInputAction;

                        /**
                         * Creates a plain object from a BuiltInUserInputAction message. Also converts values to other types if specified.
                         * @param message BuiltInUserInputAction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.BuiltInUserInputAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BuiltInUserInputAction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BuiltInUserInputAction
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ActionFlow. */
                    interface IActionFlow {

                        /** ActionFlow id */
                        id?: (string|null);

                        /** ActionFlow label */
                        label?: (string|null);

                        /** ActionFlow inputs */
                        inputs?: (google.shopping.merchant.issueresolution.v1beta.IInputField[]|null);

                        /** ActionFlow dialogTitle */
                        dialogTitle?: (string|null);

                        /** ActionFlow dialogMessage */
                        dialogMessage?: (google.shopping.merchant.issueresolution.v1beta.ITextWithTooltip|null);

                        /** ActionFlow dialogCallout */
                        dialogCallout?: (google.shopping.merchant.issueresolution.v1beta.ICallout|null);

                        /** ActionFlow dialogButtonLabel */
                        dialogButtonLabel?: (string|null);
                    }

                    /** Represents an ActionFlow. */
                    class ActionFlow implements IActionFlow {

                        /**
                         * Constructs a new ActionFlow.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.IActionFlow);

                        /** ActionFlow id. */
                        public id: string;

                        /** ActionFlow label. */
                        public label: string;

                        /** ActionFlow inputs. */
                        public inputs: google.shopping.merchant.issueresolution.v1beta.IInputField[];

                        /** ActionFlow dialogTitle. */
                        public dialogTitle: string;

                        /** ActionFlow dialogMessage. */
                        public dialogMessage?: (google.shopping.merchant.issueresolution.v1beta.ITextWithTooltip|null);

                        /** ActionFlow dialogCallout. */
                        public dialogCallout?: (google.shopping.merchant.issueresolution.v1beta.ICallout|null);

                        /** ActionFlow dialogButtonLabel. */
                        public dialogButtonLabel: string;

                        /**
                         * Creates a new ActionFlow instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ActionFlow instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.IActionFlow): google.shopping.merchant.issueresolution.v1beta.ActionFlow;

                        /**
                         * Encodes the specified ActionFlow message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.ActionFlow.verify|verify} messages.
                         * @param message ActionFlow message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.IActionFlow, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ActionFlow message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.ActionFlow.verify|verify} messages.
                         * @param message ActionFlow message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.IActionFlow, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ActionFlow message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ActionFlow
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.ActionFlow;

                        /**
                         * Decodes an ActionFlow message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ActionFlow
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.ActionFlow;

                        /**
                         * Verifies an ActionFlow message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ActionFlow message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ActionFlow
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.ActionFlow;

                        /**
                         * Creates a plain object from an ActionFlow message. Also converts values to other types if specified.
                         * @param message ActionFlow
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.ActionFlow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ActionFlow to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ActionFlow
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an InputField. */
                    interface IInputField {

                        /** InputField textInput */
                        textInput?: (google.shopping.merchant.issueresolution.v1beta.InputField.ITextInput|null);

                        /** InputField choiceInput */
                        choiceInput?: (google.shopping.merchant.issueresolution.v1beta.InputField.IChoiceInput|null);

                        /** InputField checkboxInput */
                        checkboxInput?: (google.shopping.merchant.issueresolution.v1beta.InputField.ICheckboxInput|null);

                        /** InputField id */
                        id?: (string|null);

                        /** InputField label */
                        label?: (google.shopping.merchant.issueresolution.v1beta.ITextWithTooltip|null);

                        /** InputField required */
                        required?: (boolean|null);
                    }

                    /** Represents an InputField. */
                    class InputField implements IInputField {

                        /**
                         * Constructs a new InputField.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.IInputField);

                        /** InputField textInput. */
                        public textInput?: (google.shopping.merchant.issueresolution.v1beta.InputField.ITextInput|null);

                        /** InputField choiceInput. */
                        public choiceInput?: (google.shopping.merchant.issueresolution.v1beta.InputField.IChoiceInput|null);

                        /** InputField checkboxInput. */
                        public checkboxInput?: (google.shopping.merchant.issueresolution.v1beta.InputField.ICheckboxInput|null);

                        /** InputField id. */
                        public id: string;

                        /** InputField label. */
                        public label?: (google.shopping.merchant.issueresolution.v1beta.ITextWithTooltip|null);

                        /** InputField required. */
                        public required: boolean;

                        /** InputField valueInput. */
                        public valueInput?: ("textInput"|"choiceInput"|"checkboxInput");

                        /**
                         * Creates a new InputField instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InputField instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.IInputField): google.shopping.merchant.issueresolution.v1beta.InputField;

                        /**
                         * Encodes the specified InputField message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.InputField.verify|verify} messages.
                         * @param message InputField message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.IInputField, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InputField message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.InputField.verify|verify} messages.
                         * @param message InputField message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.IInputField, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InputField message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InputField
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.InputField;

                        /**
                         * Decodes an InputField message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InputField
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.InputField;

                        /**
                         * Verifies an InputField message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InputField message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InputField
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.InputField;

                        /**
                         * Creates a plain object from an InputField message. Also converts values to other types if specified.
                         * @param message InputField
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.InputField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InputField to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InputField
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace InputField {

                        /** Properties of a TextInput. */
                        interface ITextInput {

                            /** TextInput type */
                            type?: (google.shopping.merchant.issueresolution.v1beta.InputField.TextInput.TextInputType|keyof typeof google.shopping.merchant.issueresolution.v1beta.InputField.TextInput.TextInputType|null);

                            /** TextInput additionalInfo */
                            additionalInfo?: (google.shopping.merchant.issueresolution.v1beta.ITextWithTooltip|null);

                            /** TextInput formatInfo */
                            formatInfo?: (string|null);

                            /** TextInput ariaLabel */
                            ariaLabel?: (string|null);
                        }

                        /** Represents a TextInput. */
                        class TextInput implements ITextInput {

                            /**
                             * Constructs a new TextInput.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.issueresolution.v1beta.InputField.ITextInput);

                            /** TextInput type. */
                            public type: (google.shopping.merchant.issueresolution.v1beta.InputField.TextInput.TextInputType|keyof typeof google.shopping.merchant.issueresolution.v1beta.InputField.TextInput.TextInputType);

                            /** TextInput additionalInfo. */
                            public additionalInfo?: (google.shopping.merchant.issueresolution.v1beta.ITextWithTooltip|null);

                            /** TextInput formatInfo. */
                            public formatInfo?: (string|null);

                            /** TextInput ariaLabel. */
                            public ariaLabel?: (string|null);

                            /**
                             * Creates a new TextInput instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns TextInput instance
                             */
                            public static create(properties?: google.shopping.merchant.issueresolution.v1beta.InputField.ITextInput): google.shopping.merchant.issueresolution.v1beta.InputField.TextInput;

                            /**
                             * Encodes the specified TextInput message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.InputField.TextInput.verify|verify} messages.
                             * @param message TextInput message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.issueresolution.v1beta.InputField.ITextInput, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified TextInput message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.InputField.TextInput.verify|verify} messages.
                             * @param message TextInput message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.InputField.ITextInput, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a TextInput message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns TextInput
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.InputField.TextInput;

                            /**
                             * Decodes a TextInput message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns TextInput
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.InputField.TextInput;

                            /**
                             * Verifies a TextInput message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a TextInput message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns TextInput
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.InputField.TextInput;

                            /**
                             * Creates a plain object from a TextInput message. Also converts values to other types if specified.
                             * @param message TextInput
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.issueresolution.v1beta.InputField.TextInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this TextInput to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for TextInput
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace TextInput {

                            /** TextInputType enum. */
                            enum TextInputType {
                                TEXT_INPUT_TYPE_UNSPECIFIED = 0,
                                GENERIC_SHORT_TEXT = 1,
                                GENERIC_LONG_TEXT = 2
                            }
                        }

                        /** Properties of a ChoiceInput. */
                        interface IChoiceInput {

                            /** ChoiceInput options */
                            options?: (google.shopping.merchant.issueresolution.v1beta.InputField.ChoiceInput.IChoiceInputOption[]|null);
                        }

                        /** Represents a ChoiceInput. */
                        class ChoiceInput implements IChoiceInput {

                            /**
                             * Constructs a new ChoiceInput.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.issueresolution.v1beta.InputField.IChoiceInput);

                            /** ChoiceInput options. */
                            public options: google.shopping.merchant.issueresolution.v1beta.InputField.ChoiceInput.IChoiceInputOption[];

                            /**
                             * Creates a new ChoiceInput instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ChoiceInput instance
                             */
                            public static create(properties?: google.shopping.merchant.issueresolution.v1beta.InputField.IChoiceInput): google.shopping.merchant.issueresolution.v1beta.InputField.ChoiceInput;

                            /**
                             * Encodes the specified ChoiceInput message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.InputField.ChoiceInput.verify|verify} messages.
                             * @param message ChoiceInput message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.issueresolution.v1beta.InputField.IChoiceInput, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ChoiceInput message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.InputField.ChoiceInput.verify|verify} messages.
                             * @param message ChoiceInput message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.InputField.IChoiceInput, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ChoiceInput message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ChoiceInput
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.InputField.ChoiceInput;

                            /**
                             * Decodes a ChoiceInput message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ChoiceInput
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.InputField.ChoiceInput;

                            /**
                             * Verifies a ChoiceInput message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ChoiceInput message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ChoiceInput
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.InputField.ChoiceInput;

                            /**
                             * Creates a plain object from a ChoiceInput message. Also converts values to other types if specified.
                             * @param message ChoiceInput
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.issueresolution.v1beta.InputField.ChoiceInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ChoiceInput to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ChoiceInput
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace ChoiceInput {

                            /** Properties of a ChoiceInputOption. */
                            interface IChoiceInputOption {

                                /** ChoiceInputOption id */
                                id?: (string|null);

                                /** ChoiceInputOption label */
                                label?: (google.shopping.merchant.issueresolution.v1beta.ITextWithTooltip|null);

                                /** ChoiceInputOption additionalInput */
                                additionalInput?: (google.shopping.merchant.issueresolution.v1beta.IInputField|null);
                            }

                            /** Represents a ChoiceInputOption. */
                            class ChoiceInputOption implements IChoiceInputOption {

                                /**
                                 * Constructs a new ChoiceInputOption.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.shopping.merchant.issueresolution.v1beta.InputField.ChoiceInput.IChoiceInputOption);

                                /** ChoiceInputOption id. */
                                public id: string;

                                /** ChoiceInputOption label. */
                                public label?: (google.shopping.merchant.issueresolution.v1beta.ITextWithTooltip|null);

                                /** ChoiceInputOption additionalInput. */
                                public additionalInput?: (google.shopping.merchant.issueresolution.v1beta.IInputField|null);

                                /**
                                 * Creates a new ChoiceInputOption instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ChoiceInputOption instance
                                 */
                                public static create(properties?: google.shopping.merchant.issueresolution.v1beta.InputField.ChoiceInput.IChoiceInputOption): google.shopping.merchant.issueresolution.v1beta.InputField.ChoiceInput.ChoiceInputOption;

                                /**
                                 * Encodes the specified ChoiceInputOption message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.InputField.ChoiceInput.ChoiceInputOption.verify|verify} messages.
                                 * @param message ChoiceInputOption message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.shopping.merchant.issueresolution.v1beta.InputField.ChoiceInput.IChoiceInputOption, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified ChoiceInputOption message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.InputField.ChoiceInput.ChoiceInputOption.verify|verify} messages.
                                 * @param message ChoiceInputOption message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.InputField.ChoiceInput.IChoiceInputOption, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a ChoiceInputOption message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ChoiceInputOption
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.InputField.ChoiceInput.ChoiceInputOption;

                                /**
                                 * Decodes a ChoiceInputOption message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ChoiceInputOption
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.InputField.ChoiceInput.ChoiceInputOption;

                                /**
                                 * Verifies a ChoiceInputOption message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ChoiceInputOption message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ChoiceInputOption
                                 */
                                public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.InputField.ChoiceInput.ChoiceInputOption;

                                /**
                                 * Creates a plain object from a ChoiceInputOption message. Also converts values to other types if specified.
                                 * @param message ChoiceInputOption
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.shopping.merchant.issueresolution.v1beta.InputField.ChoiceInput.ChoiceInputOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ChoiceInputOption to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for ChoiceInputOption
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }

                        /** Properties of a CheckboxInput. */
                        interface ICheckboxInput {
                        }

                        /** Represents a CheckboxInput. */
                        class CheckboxInput implements ICheckboxInput {

                            /**
                             * Constructs a new CheckboxInput.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.issueresolution.v1beta.InputField.ICheckboxInput);

                            /**
                             * Creates a new CheckboxInput instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CheckboxInput instance
                             */
                            public static create(properties?: google.shopping.merchant.issueresolution.v1beta.InputField.ICheckboxInput): google.shopping.merchant.issueresolution.v1beta.InputField.CheckboxInput;

                            /**
                             * Encodes the specified CheckboxInput message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.InputField.CheckboxInput.verify|verify} messages.
                             * @param message CheckboxInput message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.issueresolution.v1beta.InputField.ICheckboxInput, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CheckboxInput message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.InputField.CheckboxInput.verify|verify} messages.
                             * @param message CheckboxInput message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.InputField.ICheckboxInput, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CheckboxInput message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CheckboxInput
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.InputField.CheckboxInput;

                            /**
                             * Decodes a CheckboxInput message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CheckboxInput
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.InputField.CheckboxInput;

                            /**
                             * Verifies a CheckboxInput message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CheckboxInput message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CheckboxInput
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.InputField.CheckboxInput;

                            /**
                             * Creates a plain object from a CheckboxInput message. Also converts values to other types if specified.
                             * @param message CheckboxInput
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.issueresolution.v1beta.InputField.CheckboxInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CheckboxInput to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for CheckboxInput
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a TextWithTooltip. */
                    interface ITextWithTooltip {

                        /** TextWithTooltip simpleValue */
                        simpleValue?: (string|null);

                        /** TextWithTooltip simpleTooltipValue */
                        simpleTooltipValue?: (string|null);

                        /** TextWithTooltip tooltipIconStyle */
                        tooltipIconStyle?: (google.shopping.merchant.issueresolution.v1beta.TextWithTooltip.TooltipIconStyle|keyof typeof google.shopping.merchant.issueresolution.v1beta.TextWithTooltip.TooltipIconStyle|null);
                    }

                    /** Represents a TextWithTooltip. */
                    class TextWithTooltip implements ITextWithTooltip {

                        /**
                         * Constructs a new TextWithTooltip.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.ITextWithTooltip);

                        /** TextWithTooltip simpleValue. */
                        public simpleValue?: (string|null);

                        /** TextWithTooltip simpleTooltipValue. */
                        public simpleTooltipValue?: (string|null);

                        /** TextWithTooltip tooltipIconStyle. */
                        public tooltipIconStyle: (google.shopping.merchant.issueresolution.v1beta.TextWithTooltip.TooltipIconStyle|keyof typeof google.shopping.merchant.issueresolution.v1beta.TextWithTooltip.TooltipIconStyle);

                        /** TextWithTooltip value. */
                        public value?: "simpleValue";

                        /** TextWithTooltip tooltipValue. */
                        public tooltipValue?: "simpleTooltipValue";

                        /**
                         * Creates a new TextWithTooltip instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TextWithTooltip instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.ITextWithTooltip): google.shopping.merchant.issueresolution.v1beta.TextWithTooltip;

                        /**
                         * Encodes the specified TextWithTooltip message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.TextWithTooltip.verify|verify} messages.
                         * @param message TextWithTooltip message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.ITextWithTooltip, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TextWithTooltip message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.TextWithTooltip.verify|verify} messages.
                         * @param message TextWithTooltip message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.ITextWithTooltip, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TextWithTooltip message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TextWithTooltip
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.TextWithTooltip;

                        /**
                         * Decodes a TextWithTooltip message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TextWithTooltip
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.TextWithTooltip;

                        /**
                         * Verifies a TextWithTooltip message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TextWithTooltip message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TextWithTooltip
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.TextWithTooltip;

                        /**
                         * Creates a plain object from a TextWithTooltip message. Also converts values to other types if specified.
                         * @param message TextWithTooltip
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.TextWithTooltip, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TextWithTooltip to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TextWithTooltip
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace TextWithTooltip {

                        /** TooltipIconStyle enum. */
                        enum TooltipIconStyle {
                            TOOLTIP_ICON_STYLE_UNSPECIFIED = 0,
                            INFO = 1,
                            QUESTION = 2
                        }
                    }

                    /** Properties of a Callout. */
                    interface ICallout {

                        /** Callout styleHint */
                        styleHint?: (google.shopping.merchant.issueresolution.v1beta.Callout.CalloutStyleHint|keyof typeof google.shopping.merchant.issueresolution.v1beta.Callout.CalloutStyleHint|null);

                        /** Callout fullMessage */
                        fullMessage?: (google.shopping.merchant.issueresolution.v1beta.ITextWithTooltip|null);
                    }

                    /** Represents a Callout. */
                    class Callout implements ICallout {

                        /**
                         * Constructs a new Callout.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.ICallout);

                        /** Callout styleHint. */
                        public styleHint: (google.shopping.merchant.issueresolution.v1beta.Callout.CalloutStyleHint|keyof typeof google.shopping.merchant.issueresolution.v1beta.Callout.CalloutStyleHint);

                        /** Callout fullMessage. */
                        public fullMessage?: (google.shopping.merchant.issueresolution.v1beta.ITextWithTooltip|null);

                        /**
                         * Creates a new Callout instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Callout instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.ICallout): google.shopping.merchant.issueresolution.v1beta.Callout;

                        /**
                         * Encodes the specified Callout message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.Callout.verify|verify} messages.
                         * @param message Callout message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.ICallout, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Callout message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.Callout.verify|verify} messages.
                         * @param message Callout message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.ICallout, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Callout message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Callout
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.Callout;

                        /**
                         * Decodes a Callout message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Callout
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.Callout;

                        /**
                         * Verifies a Callout message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Callout message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Callout
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.Callout;

                        /**
                         * Creates a plain object from a Callout message. Also converts values to other types if specified.
                         * @param message Callout
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.Callout, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Callout to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Callout
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Callout {

                        /** CalloutStyleHint enum. */
                        enum CalloutStyleHint {
                            CALLOUT_STYLE_HINT_UNSPECIFIED = 0,
                            ERROR = 1,
                            WARNING = 2,
                            INFO = 3
                        }
                    }

                    /** Properties of an ExternalAction. */
                    interface IExternalAction {

                        /** ExternalAction type */
                        type?: (google.shopping.merchant.issueresolution.v1beta.ExternalAction.ExternalActionType|keyof typeof google.shopping.merchant.issueresolution.v1beta.ExternalAction.ExternalActionType|null);

                        /** ExternalAction uri */
                        uri?: (string|null);
                    }

                    /** Represents an ExternalAction. */
                    class ExternalAction implements IExternalAction {

                        /**
                         * Constructs a new ExternalAction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.IExternalAction);

                        /** ExternalAction type. */
                        public type: (google.shopping.merchant.issueresolution.v1beta.ExternalAction.ExternalActionType|keyof typeof google.shopping.merchant.issueresolution.v1beta.ExternalAction.ExternalActionType);

                        /** ExternalAction uri. */
                        public uri: string;

                        /**
                         * Creates a new ExternalAction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ExternalAction instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.IExternalAction): google.shopping.merchant.issueresolution.v1beta.ExternalAction;

                        /**
                         * Encodes the specified ExternalAction message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.ExternalAction.verify|verify} messages.
                         * @param message ExternalAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.IExternalAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ExternalAction message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.ExternalAction.verify|verify} messages.
                         * @param message ExternalAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.IExternalAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ExternalAction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ExternalAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.ExternalAction;

                        /**
                         * Decodes an ExternalAction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ExternalAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.ExternalAction;

                        /**
                         * Verifies an ExternalAction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ExternalAction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ExternalAction
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.ExternalAction;

                        /**
                         * Creates a plain object from an ExternalAction message. Also converts values to other types if specified.
                         * @param message ExternalAction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.ExternalAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ExternalAction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ExternalAction
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ExternalAction {

                        /** ExternalActionType enum. */
                        enum ExternalActionType {
                            EXTERNAL_ACTION_TYPE_UNSPECIFIED = 0,
                            REVIEW_PRODUCT_ISSUE_IN_MERCHANT_CENTER = 1,
                            REVIEW_ACCOUNT_ISSUE_IN_MERCHANT_CENTER = 2,
                            LEGAL_APPEAL_IN_HELP_CENTER = 3,
                            VERIFY_IDENTITY_IN_MERCHANT_CENTER = 4
                        }
                    }

                    /** Properties of a TriggerActionRequest. */
                    interface ITriggerActionRequest {

                        /** TriggerActionRequest name */
                        name?: (string|null);

                        /** TriggerActionRequest payload */
                        payload?: (google.shopping.merchant.issueresolution.v1beta.ITriggerActionPayload|null);

                        /** TriggerActionRequest languageCode */
                        languageCode?: (string|null);
                    }

                    /** Represents a TriggerActionRequest. */
                    class TriggerActionRequest implements ITriggerActionRequest {

                        /**
                         * Constructs a new TriggerActionRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.ITriggerActionRequest);

                        /** TriggerActionRequest name. */
                        public name: string;

                        /** TriggerActionRequest payload. */
                        public payload?: (google.shopping.merchant.issueresolution.v1beta.ITriggerActionPayload|null);

                        /** TriggerActionRequest languageCode. */
                        public languageCode: string;

                        /**
                         * Creates a new TriggerActionRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TriggerActionRequest instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.ITriggerActionRequest): google.shopping.merchant.issueresolution.v1beta.TriggerActionRequest;

                        /**
                         * Encodes the specified TriggerActionRequest message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.TriggerActionRequest.verify|verify} messages.
                         * @param message TriggerActionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.ITriggerActionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TriggerActionRequest message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.TriggerActionRequest.verify|verify} messages.
                         * @param message TriggerActionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.ITriggerActionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TriggerActionRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TriggerActionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.TriggerActionRequest;

                        /**
                         * Decodes a TriggerActionRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TriggerActionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.TriggerActionRequest;

                        /**
                         * Verifies a TriggerActionRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TriggerActionRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TriggerActionRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.TriggerActionRequest;

                        /**
                         * Creates a plain object from a TriggerActionRequest message. Also converts values to other types if specified.
                         * @param message TriggerActionRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.TriggerActionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TriggerActionRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TriggerActionRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TriggerActionPayload. */
                    interface ITriggerActionPayload {

                        /** TriggerActionPayload actionContext */
                        actionContext?: (string|null);

                        /** TriggerActionPayload actionInput */
                        actionInput?: (google.shopping.merchant.issueresolution.v1beta.IActionInput|null);
                    }

                    /** Represents a TriggerActionPayload. */
                    class TriggerActionPayload implements ITriggerActionPayload {

                        /**
                         * Constructs a new TriggerActionPayload.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.ITriggerActionPayload);

                        /** TriggerActionPayload actionContext. */
                        public actionContext: string;

                        /** TriggerActionPayload actionInput. */
                        public actionInput?: (google.shopping.merchant.issueresolution.v1beta.IActionInput|null);

                        /**
                         * Creates a new TriggerActionPayload instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TriggerActionPayload instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.ITriggerActionPayload): google.shopping.merchant.issueresolution.v1beta.TriggerActionPayload;

                        /**
                         * Encodes the specified TriggerActionPayload message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.TriggerActionPayload.verify|verify} messages.
                         * @param message TriggerActionPayload message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.ITriggerActionPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TriggerActionPayload message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.TriggerActionPayload.verify|verify} messages.
                         * @param message TriggerActionPayload message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.ITriggerActionPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TriggerActionPayload message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TriggerActionPayload
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.TriggerActionPayload;

                        /**
                         * Decodes a TriggerActionPayload message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TriggerActionPayload
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.TriggerActionPayload;

                        /**
                         * Verifies a TriggerActionPayload message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TriggerActionPayload message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TriggerActionPayload
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.TriggerActionPayload;

                        /**
                         * Creates a plain object from a TriggerActionPayload message. Also converts values to other types if specified.
                         * @param message TriggerActionPayload
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.TriggerActionPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TriggerActionPayload to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TriggerActionPayload
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TriggerActionResponse. */
                    interface ITriggerActionResponse {

                        /** TriggerActionResponse message */
                        message?: (string|null);
                    }

                    /** Represents a TriggerActionResponse. */
                    class TriggerActionResponse implements ITriggerActionResponse {

                        /**
                         * Constructs a new TriggerActionResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.ITriggerActionResponse);

                        /** TriggerActionResponse message. */
                        public message: string;

                        /**
                         * Creates a new TriggerActionResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TriggerActionResponse instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.ITriggerActionResponse): google.shopping.merchant.issueresolution.v1beta.TriggerActionResponse;

                        /**
                         * Encodes the specified TriggerActionResponse message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.TriggerActionResponse.verify|verify} messages.
                         * @param message TriggerActionResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.ITriggerActionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TriggerActionResponse message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.TriggerActionResponse.verify|verify} messages.
                         * @param message TriggerActionResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.ITriggerActionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TriggerActionResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TriggerActionResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.TriggerActionResponse;

                        /**
                         * Decodes a TriggerActionResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TriggerActionResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.TriggerActionResponse;

                        /**
                         * Verifies a TriggerActionResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TriggerActionResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TriggerActionResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.TriggerActionResponse;

                        /**
                         * Creates a plain object from a TriggerActionResponse message. Also converts values to other types if specified.
                         * @param message TriggerActionResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.TriggerActionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TriggerActionResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TriggerActionResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ActionInput. */
                    interface IActionInput {

                        /** ActionInput actionFlowId */
                        actionFlowId?: (string|null);

                        /** ActionInput inputValues */
                        inputValues?: (google.shopping.merchant.issueresolution.v1beta.IInputValue[]|null);
                    }

                    /** Represents an ActionInput. */
                    class ActionInput implements IActionInput {

                        /**
                         * Constructs a new ActionInput.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.IActionInput);

                        /** ActionInput actionFlowId. */
                        public actionFlowId: string;

                        /** ActionInput inputValues. */
                        public inputValues: google.shopping.merchant.issueresolution.v1beta.IInputValue[];

                        /**
                         * Creates a new ActionInput instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ActionInput instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.IActionInput): google.shopping.merchant.issueresolution.v1beta.ActionInput;

                        /**
                         * Encodes the specified ActionInput message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.ActionInput.verify|verify} messages.
                         * @param message ActionInput message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.IActionInput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ActionInput message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.ActionInput.verify|verify} messages.
                         * @param message ActionInput message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.IActionInput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ActionInput message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ActionInput
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.ActionInput;

                        /**
                         * Decodes an ActionInput message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ActionInput
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.ActionInput;

                        /**
                         * Verifies an ActionInput message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ActionInput message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ActionInput
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.ActionInput;

                        /**
                         * Creates a plain object from an ActionInput message. Also converts values to other types if specified.
                         * @param message ActionInput
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.ActionInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ActionInput to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ActionInput
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an InputValue. */
                    interface IInputValue {

                        /** InputValue textInputValue */
                        textInputValue?: (google.shopping.merchant.issueresolution.v1beta.InputValue.ITextInputValue|null);

                        /** InputValue choiceInputValue */
                        choiceInputValue?: (google.shopping.merchant.issueresolution.v1beta.InputValue.IChoiceInputValue|null);

                        /** InputValue checkboxInputValue */
                        checkboxInputValue?: (google.shopping.merchant.issueresolution.v1beta.InputValue.ICheckboxInputValue|null);

                        /** InputValue inputFieldId */
                        inputFieldId?: (string|null);
                    }

                    /** Represents an InputValue. */
                    class InputValue implements IInputValue {

                        /**
                         * Constructs a new InputValue.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.issueresolution.v1beta.IInputValue);

                        /** InputValue textInputValue. */
                        public textInputValue?: (google.shopping.merchant.issueresolution.v1beta.InputValue.ITextInputValue|null);

                        /** InputValue choiceInputValue. */
                        public choiceInputValue?: (google.shopping.merchant.issueresolution.v1beta.InputValue.IChoiceInputValue|null);

                        /** InputValue checkboxInputValue. */
                        public checkboxInputValue?: (google.shopping.merchant.issueresolution.v1beta.InputValue.ICheckboxInputValue|null);

                        /** InputValue inputFieldId. */
                        public inputFieldId: string;

                        /** InputValue value. */
                        public value?: ("textInputValue"|"choiceInputValue"|"checkboxInputValue");

                        /**
                         * Creates a new InputValue instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InputValue instance
                         */
                        public static create(properties?: google.shopping.merchant.issueresolution.v1beta.IInputValue): google.shopping.merchant.issueresolution.v1beta.InputValue;

                        /**
                         * Encodes the specified InputValue message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.InputValue.verify|verify} messages.
                         * @param message InputValue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.issueresolution.v1beta.IInputValue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InputValue message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.InputValue.verify|verify} messages.
                         * @param message InputValue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.IInputValue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InputValue message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InputValue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.InputValue;

                        /**
                         * Decodes an InputValue message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InputValue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.InputValue;

                        /**
                         * Verifies an InputValue message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InputValue message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InputValue
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.InputValue;

                        /**
                         * Creates a plain object from an InputValue message. Also converts values to other types if specified.
                         * @param message InputValue
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.issueresolution.v1beta.InputValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InputValue to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InputValue
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace InputValue {

                        /** Properties of a TextInputValue. */
                        interface ITextInputValue {

                            /** TextInputValue value */
                            value?: (string|null);
                        }

                        /** Represents a TextInputValue. */
                        class TextInputValue implements ITextInputValue {

                            /**
                             * Constructs a new TextInputValue.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.issueresolution.v1beta.InputValue.ITextInputValue);

                            /** TextInputValue value. */
                            public value: string;

                            /**
                             * Creates a new TextInputValue instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns TextInputValue instance
                             */
                            public static create(properties?: google.shopping.merchant.issueresolution.v1beta.InputValue.ITextInputValue): google.shopping.merchant.issueresolution.v1beta.InputValue.TextInputValue;

                            /**
                             * Encodes the specified TextInputValue message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.InputValue.TextInputValue.verify|verify} messages.
                             * @param message TextInputValue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.issueresolution.v1beta.InputValue.ITextInputValue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified TextInputValue message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.InputValue.TextInputValue.verify|verify} messages.
                             * @param message TextInputValue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.InputValue.ITextInputValue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a TextInputValue message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns TextInputValue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.InputValue.TextInputValue;

                            /**
                             * Decodes a TextInputValue message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns TextInputValue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.InputValue.TextInputValue;

                            /**
                             * Verifies a TextInputValue message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a TextInputValue message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns TextInputValue
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.InputValue.TextInputValue;

                            /**
                             * Creates a plain object from a TextInputValue message. Also converts values to other types if specified.
                             * @param message TextInputValue
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.issueresolution.v1beta.InputValue.TextInputValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this TextInputValue to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for TextInputValue
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a ChoiceInputValue. */
                        interface IChoiceInputValue {

                            /** ChoiceInputValue choiceInputOptionId */
                            choiceInputOptionId?: (string|null);
                        }

                        /** Represents a ChoiceInputValue. */
                        class ChoiceInputValue implements IChoiceInputValue {

                            /**
                             * Constructs a new ChoiceInputValue.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.issueresolution.v1beta.InputValue.IChoiceInputValue);

                            /** ChoiceInputValue choiceInputOptionId. */
                            public choiceInputOptionId: string;

                            /**
                             * Creates a new ChoiceInputValue instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ChoiceInputValue instance
                             */
                            public static create(properties?: google.shopping.merchant.issueresolution.v1beta.InputValue.IChoiceInputValue): google.shopping.merchant.issueresolution.v1beta.InputValue.ChoiceInputValue;

                            /**
                             * Encodes the specified ChoiceInputValue message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.InputValue.ChoiceInputValue.verify|verify} messages.
                             * @param message ChoiceInputValue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.issueresolution.v1beta.InputValue.IChoiceInputValue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ChoiceInputValue message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.InputValue.ChoiceInputValue.verify|verify} messages.
                             * @param message ChoiceInputValue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.InputValue.IChoiceInputValue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ChoiceInputValue message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ChoiceInputValue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.InputValue.ChoiceInputValue;

                            /**
                             * Decodes a ChoiceInputValue message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ChoiceInputValue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.InputValue.ChoiceInputValue;

                            /**
                             * Verifies a ChoiceInputValue message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ChoiceInputValue message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ChoiceInputValue
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.InputValue.ChoiceInputValue;

                            /**
                             * Creates a plain object from a ChoiceInputValue message. Also converts values to other types if specified.
                             * @param message ChoiceInputValue
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.issueresolution.v1beta.InputValue.ChoiceInputValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ChoiceInputValue to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ChoiceInputValue
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a CheckboxInputValue. */
                        interface ICheckboxInputValue {

                            /** CheckboxInputValue value */
                            value?: (boolean|null);
                        }

                        /** Represents a CheckboxInputValue. */
                        class CheckboxInputValue implements ICheckboxInputValue {

                            /**
                             * Constructs a new CheckboxInputValue.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.issueresolution.v1beta.InputValue.ICheckboxInputValue);

                            /** CheckboxInputValue value. */
                            public value: boolean;

                            /**
                             * Creates a new CheckboxInputValue instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CheckboxInputValue instance
                             */
                            public static create(properties?: google.shopping.merchant.issueresolution.v1beta.InputValue.ICheckboxInputValue): google.shopping.merchant.issueresolution.v1beta.InputValue.CheckboxInputValue;

                            /**
                             * Encodes the specified CheckboxInputValue message. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.InputValue.CheckboxInputValue.verify|verify} messages.
                             * @param message CheckboxInputValue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.issueresolution.v1beta.InputValue.ICheckboxInputValue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CheckboxInputValue message, length delimited. Does not implicitly {@link google.shopping.merchant.issueresolution.v1beta.InputValue.CheckboxInputValue.verify|verify} messages.
                             * @param message CheckboxInputValue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.issueresolution.v1beta.InputValue.ICheckboxInputValue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CheckboxInputValue message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CheckboxInputValue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.issueresolution.v1beta.InputValue.CheckboxInputValue;

                            /**
                             * Decodes a CheckboxInputValue message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CheckboxInputValue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.issueresolution.v1beta.InputValue.CheckboxInputValue;

                            /**
                             * Verifies a CheckboxInputValue message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CheckboxInputValue message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CheckboxInputValue
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.issueresolution.v1beta.InputValue.CheckboxInputValue;

                            /**
                             * Creates a plain object from a CheckboxInputValue message. Also converts values to other types if specified.
                             * @param message CheckboxInputValue
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.issueresolution.v1beta.InputValue.CheckboxInputValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CheckboxInputValue to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for CheckboxInputValue
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }
                }
            }
        }

        /** Namespace type. */
        namespace type {

            /** Properties of a Weight. */
            interface IWeight {

                /** Weight amountMicros */
                amountMicros?: (number|Long|string|null);

                /** Weight unit */
                unit?: (google.shopping.type.Weight.WeightUnit|keyof typeof google.shopping.type.Weight.WeightUnit|null);
            }

            /** Represents a Weight. */
            class Weight implements IWeight {

                /**
                 * Constructs a new Weight.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.shopping.type.IWeight);

                /** Weight amountMicros. */
                public amountMicros?: (number|Long|string|null);

                /** Weight unit. */
                public unit: (google.shopping.type.Weight.WeightUnit|keyof typeof google.shopping.type.Weight.WeightUnit);

                /**
                 * Creates a new Weight instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Weight instance
                 */
                public static create(properties?: google.shopping.type.IWeight): google.shopping.type.Weight;

                /**
                 * Encodes the specified Weight message. Does not implicitly {@link google.shopping.type.Weight.verify|verify} messages.
                 * @param message Weight message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.shopping.type.IWeight, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Weight message, length delimited. Does not implicitly {@link google.shopping.type.Weight.verify|verify} messages.
                 * @param message Weight message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.shopping.type.IWeight, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Weight message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Weight
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.type.Weight;

                /**
                 * Decodes a Weight message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Weight
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.type.Weight;

                /**
                 * Verifies a Weight message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Weight message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Weight
                 */
                public static fromObject(object: { [k: string]: any }): google.shopping.type.Weight;

                /**
                 * Creates a plain object from a Weight message. Also converts values to other types if specified.
                 * @param message Weight
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.shopping.type.Weight, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Weight to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Weight
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Weight {

                /** WeightUnit enum. */
                enum WeightUnit {
                    WEIGHT_UNIT_UNSPECIFIED = 0,
                    POUND = 1,
                    KILOGRAM = 2
                }
            }

            /** Properties of a Price. */
            interface IPrice {

                /** Price amountMicros */
                amountMicros?: (number|Long|string|null);

                /** Price currencyCode */
                currencyCode?: (string|null);
            }

            /** Represents a Price. */
            class Price implements IPrice {

                /**
                 * Constructs a new Price.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.shopping.type.IPrice);

                /** Price amountMicros. */
                public amountMicros?: (number|Long|string|null);

                /** Price currencyCode. */
                public currencyCode?: (string|null);

                /**
                 * Creates a new Price instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Price instance
                 */
                public static create(properties?: google.shopping.type.IPrice): google.shopping.type.Price;

                /**
                 * Encodes the specified Price message. Does not implicitly {@link google.shopping.type.Price.verify|verify} messages.
                 * @param message Price message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.shopping.type.IPrice, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Price message, length delimited. Does not implicitly {@link google.shopping.type.Price.verify|verify} messages.
                 * @param message Price message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.shopping.type.IPrice, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Price message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Price
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.type.Price;

                /**
                 * Decodes a Price message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Price
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.type.Price;

                /**
                 * Verifies a Price message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Price message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Price
                 */
                public static fromObject(object: { [k: string]: any }): google.shopping.type.Price;

                /**
                 * Creates a plain object from a Price message. Also converts values to other types if specified.
                 * @param message Price
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.shopping.type.Price, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Price to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Price
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CustomAttribute. */
            interface ICustomAttribute {

                /** CustomAttribute name */
                name?: (string|null);

                /** CustomAttribute value */
                value?: (string|null);

                /** CustomAttribute groupValues */
                groupValues?: (google.shopping.type.ICustomAttribute[]|null);
            }

            /** Represents a CustomAttribute. */
            class CustomAttribute implements ICustomAttribute {

                /**
                 * Constructs a new CustomAttribute.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.shopping.type.ICustomAttribute);

                /** CustomAttribute name. */
                public name?: (string|null);

                /** CustomAttribute value. */
                public value?: (string|null);

                /** CustomAttribute groupValues. */
                public groupValues: google.shopping.type.ICustomAttribute[];

                /**
                 * Creates a new CustomAttribute instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CustomAttribute instance
                 */
                public static create(properties?: google.shopping.type.ICustomAttribute): google.shopping.type.CustomAttribute;

                /**
                 * Encodes the specified CustomAttribute message. Does not implicitly {@link google.shopping.type.CustomAttribute.verify|verify} messages.
                 * @param message CustomAttribute message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.shopping.type.ICustomAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CustomAttribute message, length delimited. Does not implicitly {@link google.shopping.type.CustomAttribute.verify|verify} messages.
                 * @param message CustomAttribute message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.shopping.type.ICustomAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CustomAttribute message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CustomAttribute
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.type.CustomAttribute;

                /**
                 * Decodes a CustomAttribute message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CustomAttribute
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.type.CustomAttribute;

                /**
                 * Verifies a CustomAttribute message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CustomAttribute message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CustomAttribute
                 */
                public static fromObject(object: { [k: string]: any }): google.shopping.type.CustomAttribute;

                /**
                 * Creates a plain object from a CustomAttribute message. Also converts values to other types if specified.
                 * @param message CustomAttribute
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.shopping.type.CustomAttribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CustomAttribute to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CustomAttribute
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Destination. */
            interface IDestination {
            }

            /** Represents a Destination. */
            class Destination implements IDestination {

                /**
                 * Constructs a new Destination.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.shopping.type.IDestination);

                /**
                 * Creates a new Destination instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Destination instance
                 */
                public static create(properties?: google.shopping.type.IDestination): google.shopping.type.Destination;

                /**
                 * Encodes the specified Destination message. Does not implicitly {@link google.shopping.type.Destination.verify|verify} messages.
                 * @param message Destination message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.shopping.type.IDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Destination message, length delimited. Does not implicitly {@link google.shopping.type.Destination.verify|verify} messages.
                 * @param message Destination message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.shopping.type.IDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Destination message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Destination
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.type.Destination;

                /**
                 * Decodes a Destination message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Destination
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.type.Destination;

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
                public static fromObject(object: { [k: string]: any }): google.shopping.type.Destination;

                /**
                 * Creates a plain object from a Destination message. Also converts values to other types if specified.
                 * @param message Destination
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.shopping.type.Destination, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** DestinationEnum enum. */
                enum DestinationEnum {
                    DESTINATION_ENUM_UNSPECIFIED = 0,
                    SHOPPING_ADS = 1,
                    DISPLAY_ADS = 2,
                    LOCAL_INVENTORY_ADS = 3,
                    FREE_LISTINGS = 4,
                    FREE_LOCAL_LISTINGS = 5,
                    YOUTUBE_SHOPPING = 6
                }
            }

            /** Properties of a ReportingContext. */
            interface IReportingContext {
            }

            /** Represents a ReportingContext. */
            class ReportingContext implements IReportingContext {

                /**
                 * Constructs a new ReportingContext.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.shopping.type.IReportingContext);

                /**
                 * Creates a new ReportingContext instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReportingContext instance
                 */
                public static create(properties?: google.shopping.type.IReportingContext): google.shopping.type.ReportingContext;

                /**
                 * Encodes the specified ReportingContext message. Does not implicitly {@link google.shopping.type.ReportingContext.verify|verify} messages.
                 * @param message ReportingContext message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.shopping.type.IReportingContext, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReportingContext message, length delimited. Does not implicitly {@link google.shopping.type.ReportingContext.verify|verify} messages.
                 * @param message ReportingContext message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.shopping.type.IReportingContext, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReportingContext message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReportingContext
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.type.ReportingContext;

                /**
                 * Decodes a ReportingContext message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReportingContext
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.type.ReportingContext;

                /**
                 * Verifies a ReportingContext message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReportingContext message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReportingContext
                 */
                public static fromObject(object: { [k: string]: any }): google.shopping.type.ReportingContext;

                /**
                 * Creates a plain object from a ReportingContext message. Also converts values to other types if specified.
                 * @param message ReportingContext
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.shopping.type.ReportingContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReportingContext to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReportingContext
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ReportingContext {

                /** ReportingContextEnum enum. */
                enum ReportingContextEnum {
                    REPORTING_CONTEXT_ENUM_UNSPECIFIED = 0,
                    SHOPPING_ADS = 1,
                    DISCOVERY_ADS = 2,
                    DEMAND_GEN_ADS = 13,
                    DEMAND_GEN_ADS_DISCOVER_SURFACE = 14,
                    VIDEO_ADS = 3,
                    DISPLAY_ADS = 4,
                    LOCAL_INVENTORY_ADS = 5,
                    VEHICLE_INVENTORY_ADS = 6,
                    FREE_LISTINGS = 7,
                    FREE_LOCAL_LISTINGS = 8,
                    FREE_LOCAL_VEHICLE_LISTINGS = 9,
                    YOUTUBE_SHOPPING = 10,
                    CLOUD_RETAIL = 11,
                    LOCAL_CLOUD_RETAIL = 12
                }
            }

            /** Properties of a Channel. */
            interface IChannel {
            }

            /** Represents a Channel. */
            class Channel implements IChannel {

                /**
                 * Constructs a new Channel.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.shopping.type.IChannel);

                /**
                 * Creates a new Channel instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Channel instance
                 */
                public static create(properties?: google.shopping.type.IChannel): google.shopping.type.Channel;

                /**
                 * Encodes the specified Channel message. Does not implicitly {@link google.shopping.type.Channel.verify|verify} messages.
                 * @param message Channel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.shopping.type.IChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Channel message, length delimited. Does not implicitly {@link google.shopping.type.Channel.verify|verify} messages.
                 * @param message Channel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.shopping.type.IChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Channel message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Channel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.type.Channel;

                /**
                 * Decodes a Channel message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Channel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.type.Channel;

                /**
                 * Verifies a Channel message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Channel message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Channel
                 */
                public static fromObject(object: { [k: string]: any }): google.shopping.type.Channel;

                /**
                 * Creates a plain object from a Channel message. Also converts values to other types if specified.
                 * @param message Channel
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.shopping.type.Channel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Channel to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Channel
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Channel {

                /** ChannelEnum enum. */
                enum ChannelEnum {
                    CHANNEL_ENUM_UNSPECIFIED = 0,
                    ONLINE = 1,
                    LOCAL = 2
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
    }
}
