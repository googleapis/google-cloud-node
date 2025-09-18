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

        /** Namespace financialservices. */
        namespace financialservices {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a BacktestResult. */
                interface IBacktestResult {

                    /** BacktestResult name */
                    name?: (string|null);

                    /** BacktestResult createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** BacktestResult updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** BacktestResult labels */
                    labels?: ({ [k: string]: string }|null);

                    /** BacktestResult state */
                    state?: (google.cloud.financialservices.v1.BacktestResult.State|keyof typeof google.cloud.financialservices.v1.BacktestResult.State|null);

                    /** BacktestResult dataset */
                    dataset?: (string|null);

                    /** BacktestResult model */
                    model?: (string|null);

                    /** BacktestResult endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** BacktestResult backtestPeriods */
                    backtestPeriods?: (number|null);

                    /** BacktestResult performanceTarget */
                    performanceTarget?: (google.cloud.financialservices.v1.BacktestResult.IPerformanceTarget|null);

                    /** BacktestResult lineOfBusiness */
                    lineOfBusiness?: (google.cloud.financialservices.v1.LineOfBusiness|keyof typeof google.cloud.financialservices.v1.LineOfBusiness|null);
                }

                /** Represents a BacktestResult. */
                class BacktestResult implements IBacktestResult {

                    /**
                     * Constructs a new BacktestResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IBacktestResult);

                    /** BacktestResult name. */
                    public name: string;

                    /** BacktestResult createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** BacktestResult updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** BacktestResult labels. */
                    public labels: { [k: string]: string };

                    /** BacktestResult state. */
                    public state: (google.cloud.financialservices.v1.BacktestResult.State|keyof typeof google.cloud.financialservices.v1.BacktestResult.State);

                    /** BacktestResult dataset. */
                    public dataset: string;

                    /** BacktestResult model. */
                    public model: string;

                    /** BacktestResult endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** BacktestResult backtestPeriods. */
                    public backtestPeriods: number;

                    /** BacktestResult performanceTarget. */
                    public performanceTarget?: (google.cloud.financialservices.v1.BacktestResult.IPerformanceTarget|null);

                    /** BacktestResult lineOfBusiness. */
                    public lineOfBusiness: (google.cloud.financialservices.v1.LineOfBusiness|keyof typeof google.cloud.financialservices.v1.LineOfBusiness);

                    /**
                     * Creates a new BacktestResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BacktestResult instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IBacktestResult): google.cloud.financialservices.v1.BacktestResult;

                    /**
                     * Encodes the specified BacktestResult message. Does not implicitly {@link google.cloud.financialservices.v1.BacktestResult.verify|verify} messages.
                     * @param message BacktestResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IBacktestResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BacktestResult message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.BacktestResult.verify|verify} messages.
                     * @param message BacktestResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IBacktestResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BacktestResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BacktestResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.BacktestResult;

                    /**
                     * Decodes a BacktestResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BacktestResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.BacktestResult;

                    /**
                     * Verifies a BacktestResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BacktestResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BacktestResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.BacktestResult;

                    /**
                     * Creates a plain object from a BacktestResult message. Also converts values to other types if specified.
                     * @param message BacktestResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.BacktestResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BacktestResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BacktestResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace BacktestResult {

                    /** Properties of a PerformanceTarget. */
                    interface IPerformanceTarget {

                        /** PerformanceTarget partyInvestigationsPerPeriodHint */
                        partyInvestigationsPerPeriodHint?: (number|Long|string|null);
                    }

                    /** Represents a PerformanceTarget. */
                    class PerformanceTarget implements IPerformanceTarget {

                        /**
                         * Constructs a new PerformanceTarget.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.financialservices.v1.BacktestResult.IPerformanceTarget);

                        /** PerformanceTarget partyInvestigationsPerPeriodHint. */
                        public partyInvestigationsPerPeriodHint: (number|Long|string);

                        /**
                         * Creates a new PerformanceTarget instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PerformanceTarget instance
                         */
                        public static create(properties?: google.cloud.financialservices.v1.BacktestResult.IPerformanceTarget): google.cloud.financialservices.v1.BacktestResult.PerformanceTarget;

                        /**
                         * Encodes the specified PerformanceTarget message. Does not implicitly {@link google.cloud.financialservices.v1.BacktestResult.PerformanceTarget.verify|verify} messages.
                         * @param message PerformanceTarget message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.financialservices.v1.BacktestResult.IPerformanceTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PerformanceTarget message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.BacktestResult.PerformanceTarget.verify|verify} messages.
                         * @param message PerformanceTarget message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.financialservices.v1.BacktestResult.IPerformanceTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PerformanceTarget message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PerformanceTarget
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.BacktestResult.PerformanceTarget;

                        /**
                         * Decodes a PerformanceTarget message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PerformanceTarget
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.BacktestResult.PerformanceTarget;

                        /**
                         * Verifies a PerformanceTarget message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PerformanceTarget message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PerformanceTarget
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.BacktestResult.PerformanceTarget;

                        /**
                         * Creates a plain object from a PerformanceTarget message. Also converts values to other types if specified.
                         * @param message PerformanceTarget
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.financialservices.v1.BacktestResult.PerformanceTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PerformanceTarget to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PerformanceTarget
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
                        UPDATING = 3,
                        DELETING = 4
                    }
                }

                /** Properties of a ListBacktestResultsRequest. */
                interface IListBacktestResultsRequest {

                    /** ListBacktestResultsRequest parent */
                    parent?: (string|null);

                    /** ListBacktestResultsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListBacktestResultsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListBacktestResultsRequest filter */
                    filter?: (string|null);

                    /** ListBacktestResultsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListBacktestResultsRequest. */
                class ListBacktestResultsRequest implements IListBacktestResultsRequest {

                    /**
                     * Constructs a new ListBacktestResultsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IListBacktestResultsRequest);

                    /** ListBacktestResultsRequest parent. */
                    public parent: string;

                    /** ListBacktestResultsRequest pageSize. */
                    public pageSize: number;

                    /** ListBacktestResultsRequest pageToken. */
                    public pageToken: string;

                    /** ListBacktestResultsRequest filter. */
                    public filter: string;

                    /** ListBacktestResultsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListBacktestResultsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBacktestResultsRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IListBacktestResultsRequest): google.cloud.financialservices.v1.ListBacktestResultsRequest;

                    /**
                     * Encodes the specified ListBacktestResultsRequest message. Does not implicitly {@link google.cloud.financialservices.v1.ListBacktestResultsRequest.verify|verify} messages.
                     * @param message ListBacktestResultsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IListBacktestResultsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBacktestResultsRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ListBacktestResultsRequest.verify|verify} messages.
                     * @param message ListBacktestResultsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IListBacktestResultsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBacktestResultsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBacktestResultsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ListBacktestResultsRequest;

                    /**
                     * Decodes a ListBacktestResultsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBacktestResultsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ListBacktestResultsRequest;

                    /**
                     * Verifies a ListBacktestResultsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBacktestResultsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBacktestResultsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ListBacktestResultsRequest;

                    /**
                     * Creates a plain object from a ListBacktestResultsRequest message. Also converts values to other types if specified.
                     * @param message ListBacktestResultsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ListBacktestResultsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBacktestResultsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListBacktestResultsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListBacktestResultsResponse. */
                interface IListBacktestResultsResponse {

                    /** ListBacktestResultsResponse backtestResults */
                    backtestResults?: (google.cloud.financialservices.v1.IBacktestResult[]|null);

                    /** ListBacktestResultsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListBacktestResultsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListBacktestResultsResponse. */
                class ListBacktestResultsResponse implements IListBacktestResultsResponse {

                    /**
                     * Constructs a new ListBacktestResultsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IListBacktestResultsResponse);

                    /** ListBacktestResultsResponse backtestResults. */
                    public backtestResults: google.cloud.financialservices.v1.IBacktestResult[];

                    /** ListBacktestResultsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListBacktestResultsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListBacktestResultsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBacktestResultsResponse instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IListBacktestResultsResponse): google.cloud.financialservices.v1.ListBacktestResultsResponse;

                    /**
                     * Encodes the specified ListBacktestResultsResponse message. Does not implicitly {@link google.cloud.financialservices.v1.ListBacktestResultsResponse.verify|verify} messages.
                     * @param message ListBacktestResultsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IListBacktestResultsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBacktestResultsResponse message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ListBacktestResultsResponse.verify|verify} messages.
                     * @param message ListBacktestResultsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IListBacktestResultsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBacktestResultsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBacktestResultsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ListBacktestResultsResponse;

                    /**
                     * Decodes a ListBacktestResultsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBacktestResultsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ListBacktestResultsResponse;

                    /**
                     * Verifies a ListBacktestResultsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBacktestResultsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBacktestResultsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ListBacktestResultsResponse;

                    /**
                     * Creates a plain object from a ListBacktestResultsResponse message. Also converts values to other types if specified.
                     * @param message ListBacktestResultsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ListBacktestResultsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBacktestResultsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListBacktestResultsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetBacktestResultRequest. */
                interface IGetBacktestResultRequest {

                    /** GetBacktestResultRequest name */
                    name?: (string|null);
                }

                /** Represents a GetBacktestResultRequest. */
                class GetBacktestResultRequest implements IGetBacktestResultRequest {

                    /**
                     * Constructs a new GetBacktestResultRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IGetBacktestResultRequest);

                    /** GetBacktestResultRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetBacktestResultRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetBacktestResultRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IGetBacktestResultRequest): google.cloud.financialservices.v1.GetBacktestResultRequest;

                    /**
                     * Encodes the specified GetBacktestResultRequest message. Does not implicitly {@link google.cloud.financialservices.v1.GetBacktestResultRequest.verify|verify} messages.
                     * @param message GetBacktestResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IGetBacktestResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetBacktestResultRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.GetBacktestResultRequest.verify|verify} messages.
                     * @param message GetBacktestResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IGetBacktestResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetBacktestResultRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetBacktestResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.GetBacktestResultRequest;

                    /**
                     * Decodes a GetBacktestResultRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetBacktestResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.GetBacktestResultRequest;

                    /**
                     * Verifies a GetBacktestResultRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetBacktestResultRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetBacktestResultRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.GetBacktestResultRequest;

                    /**
                     * Creates a plain object from a GetBacktestResultRequest message. Also converts values to other types if specified.
                     * @param message GetBacktestResultRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.GetBacktestResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetBacktestResultRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetBacktestResultRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateBacktestResultRequest. */
                interface ICreateBacktestResultRequest {

                    /** CreateBacktestResultRequest parent */
                    parent?: (string|null);

                    /** CreateBacktestResultRequest backtestResultId */
                    backtestResultId?: (string|null);

                    /** CreateBacktestResultRequest backtestResult */
                    backtestResult?: (google.cloud.financialservices.v1.IBacktestResult|null);

                    /** CreateBacktestResultRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateBacktestResultRequest. */
                class CreateBacktestResultRequest implements ICreateBacktestResultRequest {

                    /**
                     * Constructs a new CreateBacktestResultRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.ICreateBacktestResultRequest);

                    /** CreateBacktestResultRequest parent. */
                    public parent: string;

                    /** CreateBacktestResultRequest backtestResultId. */
                    public backtestResultId: string;

                    /** CreateBacktestResultRequest backtestResult. */
                    public backtestResult?: (google.cloud.financialservices.v1.IBacktestResult|null);

                    /** CreateBacktestResultRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateBacktestResultRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateBacktestResultRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.ICreateBacktestResultRequest): google.cloud.financialservices.v1.CreateBacktestResultRequest;

                    /**
                     * Encodes the specified CreateBacktestResultRequest message. Does not implicitly {@link google.cloud.financialservices.v1.CreateBacktestResultRequest.verify|verify} messages.
                     * @param message CreateBacktestResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.ICreateBacktestResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateBacktestResultRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.CreateBacktestResultRequest.verify|verify} messages.
                     * @param message CreateBacktestResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.ICreateBacktestResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateBacktestResultRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateBacktestResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.CreateBacktestResultRequest;

                    /**
                     * Decodes a CreateBacktestResultRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateBacktestResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.CreateBacktestResultRequest;

                    /**
                     * Verifies a CreateBacktestResultRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateBacktestResultRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateBacktestResultRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.CreateBacktestResultRequest;

                    /**
                     * Creates a plain object from a CreateBacktestResultRequest message. Also converts values to other types if specified.
                     * @param message CreateBacktestResultRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.CreateBacktestResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateBacktestResultRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateBacktestResultRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateBacktestResultRequest. */
                interface IUpdateBacktestResultRequest {

                    /** UpdateBacktestResultRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateBacktestResultRequest backtestResult */
                    backtestResult?: (google.cloud.financialservices.v1.IBacktestResult|null);

                    /** UpdateBacktestResultRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateBacktestResultRequest. */
                class UpdateBacktestResultRequest implements IUpdateBacktestResultRequest {

                    /**
                     * Constructs a new UpdateBacktestResultRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IUpdateBacktestResultRequest);

                    /** UpdateBacktestResultRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateBacktestResultRequest backtestResult. */
                    public backtestResult?: (google.cloud.financialservices.v1.IBacktestResult|null);

                    /** UpdateBacktestResultRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateBacktestResultRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateBacktestResultRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IUpdateBacktestResultRequest): google.cloud.financialservices.v1.UpdateBacktestResultRequest;

                    /**
                     * Encodes the specified UpdateBacktestResultRequest message. Does not implicitly {@link google.cloud.financialservices.v1.UpdateBacktestResultRequest.verify|verify} messages.
                     * @param message UpdateBacktestResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IUpdateBacktestResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateBacktestResultRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.UpdateBacktestResultRequest.verify|verify} messages.
                     * @param message UpdateBacktestResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IUpdateBacktestResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateBacktestResultRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateBacktestResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.UpdateBacktestResultRequest;

                    /**
                     * Decodes an UpdateBacktestResultRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateBacktestResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.UpdateBacktestResultRequest;

                    /**
                     * Verifies an UpdateBacktestResultRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateBacktestResultRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateBacktestResultRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.UpdateBacktestResultRequest;

                    /**
                     * Creates a plain object from an UpdateBacktestResultRequest message. Also converts values to other types if specified.
                     * @param message UpdateBacktestResultRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.UpdateBacktestResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateBacktestResultRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateBacktestResultRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteBacktestResultRequest. */
                interface IDeleteBacktestResultRequest {

                    /** DeleteBacktestResultRequest name */
                    name?: (string|null);

                    /** DeleteBacktestResultRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteBacktestResultRequest. */
                class DeleteBacktestResultRequest implements IDeleteBacktestResultRequest {

                    /**
                     * Constructs a new DeleteBacktestResultRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IDeleteBacktestResultRequest);

                    /** DeleteBacktestResultRequest name. */
                    public name: string;

                    /** DeleteBacktestResultRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteBacktestResultRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteBacktestResultRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IDeleteBacktestResultRequest): google.cloud.financialservices.v1.DeleteBacktestResultRequest;

                    /**
                     * Encodes the specified DeleteBacktestResultRequest message. Does not implicitly {@link google.cloud.financialservices.v1.DeleteBacktestResultRequest.verify|verify} messages.
                     * @param message DeleteBacktestResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IDeleteBacktestResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteBacktestResultRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.DeleteBacktestResultRequest.verify|verify} messages.
                     * @param message DeleteBacktestResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IDeleteBacktestResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteBacktestResultRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteBacktestResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.DeleteBacktestResultRequest;

                    /**
                     * Decodes a DeleteBacktestResultRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteBacktestResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.DeleteBacktestResultRequest;

                    /**
                     * Verifies a DeleteBacktestResultRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteBacktestResultRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteBacktestResultRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.DeleteBacktestResultRequest;

                    /**
                     * Creates a plain object from a DeleteBacktestResultRequest message. Also converts values to other types if specified.
                     * @param message DeleteBacktestResultRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.DeleteBacktestResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteBacktestResultRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteBacktestResultRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportBacktestResultMetadataRequest. */
                interface IExportBacktestResultMetadataRequest {

                    /** ExportBacktestResultMetadataRequest backtestResult */
                    backtestResult?: (string|null);

                    /** ExportBacktestResultMetadataRequest structuredMetadataDestination */
                    structuredMetadataDestination?: (google.cloud.financialservices.v1.IBigQueryDestination|null);
                }

                /** Represents an ExportBacktestResultMetadataRequest. */
                class ExportBacktestResultMetadataRequest implements IExportBacktestResultMetadataRequest {

                    /**
                     * Constructs a new ExportBacktestResultMetadataRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IExportBacktestResultMetadataRequest);

                    /** ExportBacktestResultMetadataRequest backtestResult. */
                    public backtestResult: string;

                    /** ExportBacktestResultMetadataRequest structuredMetadataDestination. */
                    public structuredMetadataDestination?: (google.cloud.financialservices.v1.IBigQueryDestination|null);

                    /**
                     * Creates a new ExportBacktestResultMetadataRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportBacktestResultMetadataRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IExportBacktestResultMetadataRequest): google.cloud.financialservices.v1.ExportBacktestResultMetadataRequest;

                    /**
                     * Encodes the specified ExportBacktestResultMetadataRequest message. Does not implicitly {@link google.cloud.financialservices.v1.ExportBacktestResultMetadataRequest.verify|verify} messages.
                     * @param message ExportBacktestResultMetadataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IExportBacktestResultMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportBacktestResultMetadataRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ExportBacktestResultMetadataRequest.verify|verify} messages.
                     * @param message ExportBacktestResultMetadataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IExportBacktestResultMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportBacktestResultMetadataRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportBacktestResultMetadataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ExportBacktestResultMetadataRequest;

                    /**
                     * Decodes an ExportBacktestResultMetadataRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportBacktestResultMetadataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ExportBacktestResultMetadataRequest;

                    /**
                     * Verifies an ExportBacktestResultMetadataRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportBacktestResultMetadataRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportBacktestResultMetadataRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ExportBacktestResultMetadataRequest;

                    /**
                     * Creates a plain object from an ExportBacktestResultMetadataRequest message. Also converts values to other types if specified.
                     * @param message ExportBacktestResultMetadataRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ExportBacktestResultMetadataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportBacktestResultMetadataRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportBacktestResultMetadataRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportBacktestResultMetadataResponse. */
                interface IExportBacktestResultMetadataResponse {
                }

                /** Represents an ExportBacktestResultMetadataResponse. */
                class ExportBacktestResultMetadataResponse implements IExportBacktestResultMetadataResponse {

                    /**
                     * Constructs a new ExportBacktestResultMetadataResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IExportBacktestResultMetadataResponse);

                    /**
                     * Creates a new ExportBacktestResultMetadataResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportBacktestResultMetadataResponse instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IExportBacktestResultMetadataResponse): google.cloud.financialservices.v1.ExportBacktestResultMetadataResponse;

                    /**
                     * Encodes the specified ExportBacktestResultMetadataResponse message. Does not implicitly {@link google.cloud.financialservices.v1.ExportBacktestResultMetadataResponse.verify|verify} messages.
                     * @param message ExportBacktestResultMetadataResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IExportBacktestResultMetadataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportBacktestResultMetadataResponse message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ExportBacktestResultMetadataResponse.verify|verify} messages.
                     * @param message ExportBacktestResultMetadataResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IExportBacktestResultMetadataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportBacktestResultMetadataResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportBacktestResultMetadataResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ExportBacktestResultMetadataResponse;

                    /**
                     * Decodes an ExportBacktestResultMetadataResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportBacktestResultMetadataResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ExportBacktestResultMetadataResponse;

                    /**
                     * Verifies an ExportBacktestResultMetadataResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportBacktestResultMetadataResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportBacktestResultMetadataResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ExportBacktestResultMetadataResponse;

                    /**
                     * Creates a plain object from an ExportBacktestResultMetadataResponse message. Also converts values to other types if specified.
                     * @param message ExportBacktestResultMetadataResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ExportBacktestResultMetadataResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportBacktestResultMetadataResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportBacktestResultMetadataResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BigQueryDestination. */
                interface IBigQueryDestination {

                    /** BigQueryDestination tableUri */
                    tableUri?: (string|null);

                    /** BigQueryDestination writeDisposition */
                    writeDisposition?: (google.cloud.financialservices.v1.BigQueryDestination.WriteDisposition|keyof typeof google.cloud.financialservices.v1.BigQueryDestination.WriteDisposition|null);
                }

                /** Represents a BigQueryDestination. */
                class BigQueryDestination implements IBigQueryDestination {

                    /**
                     * Constructs a new BigQueryDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IBigQueryDestination);

                    /** BigQueryDestination tableUri. */
                    public tableUri: string;

                    /** BigQueryDestination writeDisposition. */
                    public writeDisposition: (google.cloud.financialservices.v1.BigQueryDestination.WriteDisposition|keyof typeof google.cloud.financialservices.v1.BigQueryDestination.WriteDisposition);

                    /**
                     * Creates a new BigQueryDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BigQueryDestination instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IBigQueryDestination): google.cloud.financialservices.v1.BigQueryDestination;

                    /**
                     * Encodes the specified BigQueryDestination message. Does not implicitly {@link google.cloud.financialservices.v1.BigQueryDestination.verify|verify} messages.
                     * @param message BigQueryDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IBigQueryDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BigQueryDestination message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.BigQueryDestination.verify|verify} messages.
                     * @param message BigQueryDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IBigQueryDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BigQueryDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BigQueryDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.BigQueryDestination;

                    /**
                     * Decodes a BigQueryDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BigQueryDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.BigQueryDestination;

                    /**
                     * Verifies a BigQueryDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BigQueryDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BigQueryDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.BigQueryDestination;

                    /**
                     * Creates a plain object from a BigQueryDestination message. Also converts values to other types if specified.
                     * @param message BigQueryDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.BigQueryDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BigQueryDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BigQueryDestination
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace BigQueryDestination {

                    /** WriteDisposition enum. */
                    enum WriteDisposition {
                        WRITE_DISPOSITION_UNSPECIFIED = 0,
                        WRITE_EMPTY = 1,
                        WRITE_TRUNCATE = 2
                    }
                }

                /** LineOfBusiness enum. */
                enum LineOfBusiness {
                    LINE_OF_BUSINESS_UNSPECIFIED = 0,
                    COMMERCIAL = 1,
                    RETAIL = 2
                }

                /** Properties of a Dataset. */
                interface IDataset {

                    /** Dataset name */
                    name?: (string|null);

                    /** Dataset createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Dataset updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Dataset labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Dataset tableSpecs */
                    tableSpecs?: ({ [k: string]: string }|null);

                    /** Dataset state */
                    state?: (google.cloud.financialservices.v1.Dataset.State|keyof typeof google.cloud.financialservices.v1.Dataset.State|null);

                    /** Dataset dateRange */
                    dateRange?: (google.type.IInterval|null);

                    /** Dataset timeZone */
                    timeZone?: (google.type.ITimeZone|null);
                }

                /** Represents a Dataset. */
                class Dataset implements IDataset {

                    /**
                     * Constructs a new Dataset.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IDataset);

                    /** Dataset name. */
                    public name: string;

                    /** Dataset createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Dataset updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Dataset labels. */
                    public labels: { [k: string]: string };

                    /** Dataset tableSpecs. */
                    public tableSpecs: { [k: string]: string };

                    /** Dataset state. */
                    public state: (google.cloud.financialservices.v1.Dataset.State|keyof typeof google.cloud.financialservices.v1.Dataset.State);

                    /** Dataset dateRange. */
                    public dateRange?: (google.type.IInterval|null);

                    /** Dataset timeZone. */
                    public timeZone?: (google.type.ITimeZone|null);

                    /**
                     * Creates a new Dataset instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Dataset instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IDataset): google.cloud.financialservices.v1.Dataset;

                    /**
                     * Encodes the specified Dataset message. Does not implicitly {@link google.cloud.financialservices.v1.Dataset.verify|verify} messages.
                     * @param message Dataset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IDataset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Dataset message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.Dataset.verify|verify} messages.
                     * @param message Dataset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IDataset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Dataset message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Dataset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.Dataset;

                    /**
                     * Decodes a Dataset message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Dataset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.Dataset;

                    /**
                     * Verifies a Dataset message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Dataset message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Dataset
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.Dataset;

                    /**
                     * Creates a plain object from a Dataset message. Also converts values to other types if specified.
                     * @param message Dataset
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.Dataset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Dataset to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Dataset
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Dataset {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        ACTIVE = 2,
                        UPDATING = 3,
                        DELETING = 4
                    }
                }

                /** Properties of a ListDatasetsRequest. */
                interface IListDatasetsRequest {

                    /** ListDatasetsRequest parent */
                    parent?: (string|null);

                    /** ListDatasetsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListDatasetsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListDatasetsRequest filter */
                    filter?: (string|null);

                    /** ListDatasetsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListDatasetsRequest. */
                class ListDatasetsRequest implements IListDatasetsRequest {

                    /**
                     * Constructs a new ListDatasetsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IListDatasetsRequest);

                    /** ListDatasetsRequest parent. */
                    public parent: string;

                    /** ListDatasetsRequest pageSize. */
                    public pageSize: number;

                    /** ListDatasetsRequest pageToken. */
                    public pageToken: string;

                    /** ListDatasetsRequest filter. */
                    public filter: string;

                    /** ListDatasetsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListDatasetsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDatasetsRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IListDatasetsRequest): google.cloud.financialservices.v1.ListDatasetsRequest;

                    /**
                     * Encodes the specified ListDatasetsRequest message. Does not implicitly {@link google.cloud.financialservices.v1.ListDatasetsRequest.verify|verify} messages.
                     * @param message ListDatasetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IListDatasetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDatasetsRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ListDatasetsRequest.verify|verify} messages.
                     * @param message ListDatasetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IListDatasetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDatasetsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDatasetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ListDatasetsRequest;

                    /**
                     * Decodes a ListDatasetsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDatasetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ListDatasetsRequest;

                    /**
                     * Verifies a ListDatasetsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDatasetsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDatasetsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ListDatasetsRequest;

                    /**
                     * Creates a plain object from a ListDatasetsRequest message. Also converts values to other types if specified.
                     * @param message ListDatasetsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ListDatasetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDatasetsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDatasetsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDatasetsResponse. */
                interface IListDatasetsResponse {

                    /** ListDatasetsResponse datasets */
                    datasets?: (google.cloud.financialservices.v1.IDataset[]|null);

                    /** ListDatasetsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListDatasetsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListDatasetsResponse. */
                class ListDatasetsResponse implements IListDatasetsResponse {

                    /**
                     * Constructs a new ListDatasetsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IListDatasetsResponse);

                    /** ListDatasetsResponse datasets. */
                    public datasets: google.cloud.financialservices.v1.IDataset[];

                    /** ListDatasetsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListDatasetsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListDatasetsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDatasetsResponse instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IListDatasetsResponse): google.cloud.financialservices.v1.ListDatasetsResponse;

                    /**
                     * Encodes the specified ListDatasetsResponse message. Does not implicitly {@link google.cloud.financialservices.v1.ListDatasetsResponse.verify|verify} messages.
                     * @param message ListDatasetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IListDatasetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDatasetsResponse message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ListDatasetsResponse.verify|verify} messages.
                     * @param message ListDatasetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IListDatasetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDatasetsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDatasetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ListDatasetsResponse;

                    /**
                     * Decodes a ListDatasetsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDatasetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ListDatasetsResponse;

                    /**
                     * Verifies a ListDatasetsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDatasetsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDatasetsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ListDatasetsResponse;

                    /**
                     * Creates a plain object from a ListDatasetsResponse message. Also converts values to other types if specified.
                     * @param message ListDatasetsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ListDatasetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDatasetsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDatasetsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetDatasetRequest. */
                interface IGetDatasetRequest {

                    /** GetDatasetRequest name */
                    name?: (string|null);
                }

                /** Represents a GetDatasetRequest. */
                class GetDatasetRequest implements IGetDatasetRequest {

                    /**
                     * Constructs a new GetDatasetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IGetDatasetRequest);

                    /** GetDatasetRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetDatasetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetDatasetRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IGetDatasetRequest): google.cloud.financialservices.v1.GetDatasetRequest;

                    /**
                     * Encodes the specified GetDatasetRequest message. Does not implicitly {@link google.cloud.financialservices.v1.GetDatasetRequest.verify|verify} messages.
                     * @param message GetDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IGetDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetDatasetRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.GetDatasetRequest.verify|verify} messages.
                     * @param message GetDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IGetDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetDatasetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.GetDatasetRequest;

                    /**
                     * Decodes a GetDatasetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.GetDatasetRequest;

                    /**
                     * Verifies a GetDatasetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetDatasetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetDatasetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.GetDatasetRequest;

                    /**
                     * Creates a plain object from a GetDatasetRequest message. Also converts values to other types if specified.
                     * @param message GetDatasetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.GetDatasetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetDatasetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetDatasetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateDatasetRequest. */
                interface ICreateDatasetRequest {

                    /** CreateDatasetRequest parent */
                    parent?: (string|null);

                    /** CreateDatasetRequest datasetId */
                    datasetId?: (string|null);

                    /** CreateDatasetRequest dataset */
                    dataset?: (google.cloud.financialservices.v1.IDataset|null);

                    /** CreateDatasetRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateDatasetRequest. */
                class CreateDatasetRequest implements ICreateDatasetRequest {

                    /**
                     * Constructs a new CreateDatasetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.ICreateDatasetRequest);

                    /** CreateDatasetRequest parent. */
                    public parent: string;

                    /** CreateDatasetRequest datasetId. */
                    public datasetId: string;

                    /** CreateDatasetRequest dataset. */
                    public dataset?: (google.cloud.financialservices.v1.IDataset|null);

                    /** CreateDatasetRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateDatasetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateDatasetRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.ICreateDatasetRequest): google.cloud.financialservices.v1.CreateDatasetRequest;

                    /**
                     * Encodes the specified CreateDatasetRequest message. Does not implicitly {@link google.cloud.financialservices.v1.CreateDatasetRequest.verify|verify} messages.
                     * @param message CreateDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.ICreateDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateDatasetRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.CreateDatasetRequest.verify|verify} messages.
                     * @param message CreateDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.ICreateDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateDatasetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.CreateDatasetRequest;

                    /**
                     * Decodes a CreateDatasetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.CreateDatasetRequest;

                    /**
                     * Verifies a CreateDatasetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateDatasetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateDatasetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.CreateDatasetRequest;

                    /**
                     * Creates a plain object from a CreateDatasetRequest message. Also converts values to other types if specified.
                     * @param message CreateDatasetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.CreateDatasetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateDatasetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateDatasetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateDatasetRequest. */
                interface IUpdateDatasetRequest {

                    /** UpdateDatasetRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateDatasetRequest dataset */
                    dataset?: (google.cloud.financialservices.v1.IDataset|null);

                    /** UpdateDatasetRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateDatasetRequest. */
                class UpdateDatasetRequest implements IUpdateDatasetRequest {

                    /**
                     * Constructs a new UpdateDatasetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IUpdateDatasetRequest);

                    /** UpdateDatasetRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateDatasetRequest dataset. */
                    public dataset?: (google.cloud.financialservices.v1.IDataset|null);

                    /** UpdateDatasetRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateDatasetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateDatasetRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IUpdateDatasetRequest): google.cloud.financialservices.v1.UpdateDatasetRequest;

                    /**
                     * Encodes the specified UpdateDatasetRequest message. Does not implicitly {@link google.cloud.financialservices.v1.UpdateDatasetRequest.verify|verify} messages.
                     * @param message UpdateDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IUpdateDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateDatasetRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.UpdateDatasetRequest.verify|verify} messages.
                     * @param message UpdateDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IUpdateDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateDatasetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.UpdateDatasetRequest;

                    /**
                     * Decodes an UpdateDatasetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.UpdateDatasetRequest;

                    /**
                     * Verifies an UpdateDatasetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateDatasetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateDatasetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.UpdateDatasetRequest;

                    /**
                     * Creates a plain object from an UpdateDatasetRequest message. Also converts values to other types if specified.
                     * @param message UpdateDatasetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.UpdateDatasetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateDatasetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateDatasetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteDatasetRequest. */
                interface IDeleteDatasetRequest {

                    /** DeleteDatasetRequest name */
                    name?: (string|null);

                    /** DeleteDatasetRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteDatasetRequest. */
                class DeleteDatasetRequest implements IDeleteDatasetRequest {

                    /**
                     * Constructs a new DeleteDatasetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IDeleteDatasetRequest);

                    /** DeleteDatasetRequest name. */
                    public name: string;

                    /** DeleteDatasetRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteDatasetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteDatasetRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IDeleteDatasetRequest): google.cloud.financialservices.v1.DeleteDatasetRequest;

                    /**
                     * Encodes the specified DeleteDatasetRequest message. Does not implicitly {@link google.cloud.financialservices.v1.DeleteDatasetRequest.verify|verify} messages.
                     * @param message DeleteDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IDeleteDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteDatasetRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.DeleteDatasetRequest.verify|verify} messages.
                     * @param message DeleteDatasetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IDeleteDatasetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteDatasetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.DeleteDatasetRequest;

                    /**
                     * Decodes a DeleteDatasetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteDatasetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.DeleteDatasetRequest;

                    /**
                     * Verifies a DeleteDatasetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteDatasetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteDatasetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.DeleteDatasetRequest;

                    /**
                     * Creates a plain object from a DeleteDatasetRequest message. Also converts values to other types if specified.
                     * @param message DeleteDatasetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.DeleteDatasetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteDatasetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteDatasetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EngineConfig. */
                interface IEngineConfig {

                    /** EngineConfig name */
                    name?: (string|null);

                    /** EngineConfig createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** EngineConfig updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** EngineConfig labels */
                    labels?: ({ [k: string]: string }|null);

                    /** EngineConfig state */
                    state?: (google.cloud.financialservices.v1.EngineConfig.State|keyof typeof google.cloud.financialservices.v1.EngineConfig.State|null);

                    /** EngineConfig engineVersion */
                    engineVersion?: (string|null);

                    /** EngineConfig tuning */
                    tuning?: (google.cloud.financialservices.v1.EngineConfig.ITuning|null);

                    /** EngineConfig performanceTarget */
                    performanceTarget?: (google.cloud.financialservices.v1.EngineConfig.IPerformanceTarget|null);

                    /** EngineConfig lineOfBusiness */
                    lineOfBusiness?: (google.cloud.financialservices.v1.LineOfBusiness|keyof typeof google.cloud.financialservices.v1.LineOfBusiness|null);

                    /** EngineConfig hyperparameterSourceType */
                    hyperparameterSourceType?: (google.cloud.financialservices.v1.EngineConfig.HyperparameterSourceType|keyof typeof google.cloud.financialservices.v1.EngineConfig.HyperparameterSourceType|null);

                    /** EngineConfig hyperparameterSource */
                    hyperparameterSource?: (google.cloud.financialservices.v1.EngineConfig.IHyperparameterSource|null);
                }

                /** Represents an EngineConfig. */
                class EngineConfig implements IEngineConfig {

                    /**
                     * Constructs a new EngineConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IEngineConfig);

                    /** EngineConfig name. */
                    public name: string;

                    /** EngineConfig createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** EngineConfig updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** EngineConfig labels. */
                    public labels: { [k: string]: string };

                    /** EngineConfig state. */
                    public state: (google.cloud.financialservices.v1.EngineConfig.State|keyof typeof google.cloud.financialservices.v1.EngineConfig.State);

                    /** EngineConfig engineVersion. */
                    public engineVersion: string;

                    /** EngineConfig tuning. */
                    public tuning?: (google.cloud.financialservices.v1.EngineConfig.ITuning|null);

                    /** EngineConfig performanceTarget. */
                    public performanceTarget?: (google.cloud.financialservices.v1.EngineConfig.IPerformanceTarget|null);

                    /** EngineConfig lineOfBusiness. */
                    public lineOfBusiness: (google.cloud.financialservices.v1.LineOfBusiness|keyof typeof google.cloud.financialservices.v1.LineOfBusiness);

                    /** EngineConfig hyperparameterSourceType. */
                    public hyperparameterSourceType: (google.cloud.financialservices.v1.EngineConfig.HyperparameterSourceType|keyof typeof google.cloud.financialservices.v1.EngineConfig.HyperparameterSourceType);

                    /** EngineConfig hyperparameterSource. */
                    public hyperparameterSource?: (google.cloud.financialservices.v1.EngineConfig.IHyperparameterSource|null);

                    /**
                     * Creates a new EngineConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EngineConfig instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IEngineConfig): google.cloud.financialservices.v1.EngineConfig;

                    /**
                     * Encodes the specified EngineConfig message. Does not implicitly {@link google.cloud.financialservices.v1.EngineConfig.verify|verify} messages.
                     * @param message EngineConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IEngineConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EngineConfig message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.EngineConfig.verify|verify} messages.
                     * @param message EngineConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IEngineConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EngineConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EngineConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.EngineConfig;

                    /**
                     * Decodes an EngineConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EngineConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.EngineConfig;

                    /**
                     * Verifies an EngineConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EngineConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EngineConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.EngineConfig;

                    /**
                     * Creates a plain object from an EngineConfig message. Also converts values to other types if specified.
                     * @param message EngineConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.EngineConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EngineConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EngineConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace EngineConfig {

                    /** Properties of a Tuning. */
                    interface ITuning {

                        /** Tuning primaryDataset */
                        primaryDataset?: (string|null);

                        /** Tuning endTime */
                        endTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a Tuning. */
                    class Tuning implements ITuning {

                        /**
                         * Constructs a new Tuning.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.financialservices.v1.EngineConfig.ITuning);

                        /** Tuning primaryDataset. */
                        public primaryDataset: string;

                        /** Tuning endTime. */
                        public endTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new Tuning instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Tuning instance
                         */
                        public static create(properties?: google.cloud.financialservices.v1.EngineConfig.ITuning): google.cloud.financialservices.v1.EngineConfig.Tuning;

                        /**
                         * Encodes the specified Tuning message. Does not implicitly {@link google.cloud.financialservices.v1.EngineConfig.Tuning.verify|verify} messages.
                         * @param message Tuning message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.financialservices.v1.EngineConfig.ITuning, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Tuning message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.EngineConfig.Tuning.verify|verify} messages.
                         * @param message Tuning message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.financialservices.v1.EngineConfig.ITuning, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Tuning message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Tuning
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.EngineConfig.Tuning;

                        /**
                         * Decodes a Tuning message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Tuning
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.EngineConfig.Tuning;

                        /**
                         * Verifies a Tuning message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Tuning message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Tuning
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.EngineConfig.Tuning;

                        /**
                         * Creates a plain object from a Tuning message. Also converts values to other types if specified.
                         * @param message Tuning
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.financialservices.v1.EngineConfig.Tuning, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Tuning to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Tuning
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PerformanceTarget. */
                    interface IPerformanceTarget {

                        /** PerformanceTarget partyInvestigationsPerPeriodHint */
                        partyInvestigationsPerPeriodHint?: (number|Long|string|null);
                    }

                    /** Represents a PerformanceTarget. */
                    class PerformanceTarget implements IPerformanceTarget {

                        /**
                         * Constructs a new PerformanceTarget.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.financialservices.v1.EngineConfig.IPerformanceTarget);

                        /** PerformanceTarget partyInvestigationsPerPeriodHint. */
                        public partyInvestigationsPerPeriodHint: (number|Long|string);

                        /**
                         * Creates a new PerformanceTarget instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PerformanceTarget instance
                         */
                        public static create(properties?: google.cloud.financialservices.v1.EngineConfig.IPerformanceTarget): google.cloud.financialservices.v1.EngineConfig.PerformanceTarget;

                        /**
                         * Encodes the specified PerformanceTarget message. Does not implicitly {@link google.cloud.financialservices.v1.EngineConfig.PerformanceTarget.verify|verify} messages.
                         * @param message PerformanceTarget message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.financialservices.v1.EngineConfig.IPerformanceTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PerformanceTarget message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.EngineConfig.PerformanceTarget.verify|verify} messages.
                         * @param message PerformanceTarget message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.financialservices.v1.EngineConfig.IPerformanceTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PerformanceTarget message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PerformanceTarget
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.EngineConfig.PerformanceTarget;

                        /**
                         * Decodes a PerformanceTarget message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PerformanceTarget
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.EngineConfig.PerformanceTarget;

                        /**
                         * Verifies a PerformanceTarget message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PerformanceTarget message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PerformanceTarget
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.EngineConfig.PerformanceTarget;

                        /**
                         * Creates a plain object from a PerformanceTarget message. Also converts values to other types if specified.
                         * @param message PerformanceTarget
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.financialservices.v1.EngineConfig.PerformanceTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PerformanceTarget to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PerformanceTarget
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a HyperparameterSource. */
                    interface IHyperparameterSource {

                        /** HyperparameterSource sourceEngineConfig */
                        sourceEngineConfig?: (string|null);

                        /** HyperparameterSource sourceEngineVersion */
                        sourceEngineVersion?: (string|null);
                    }

                    /** Represents a HyperparameterSource. */
                    class HyperparameterSource implements IHyperparameterSource {

                        /**
                         * Constructs a new HyperparameterSource.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.financialservices.v1.EngineConfig.IHyperparameterSource);

                        /** HyperparameterSource sourceEngineConfig. */
                        public sourceEngineConfig: string;

                        /** HyperparameterSource sourceEngineVersion. */
                        public sourceEngineVersion: string;

                        /**
                         * Creates a new HyperparameterSource instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns HyperparameterSource instance
                         */
                        public static create(properties?: google.cloud.financialservices.v1.EngineConfig.IHyperparameterSource): google.cloud.financialservices.v1.EngineConfig.HyperparameterSource;

                        /**
                         * Encodes the specified HyperparameterSource message. Does not implicitly {@link google.cloud.financialservices.v1.EngineConfig.HyperparameterSource.verify|verify} messages.
                         * @param message HyperparameterSource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.financialservices.v1.EngineConfig.IHyperparameterSource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified HyperparameterSource message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.EngineConfig.HyperparameterSource.verify|verify} messages.
                         * @param message HyperparameterSource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.financialservices.v1.EngineConfig.IHyperparameterSource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a HyperparameterSource message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns HyperparameterSource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.EngineConfig.HyperparameterSource;

                        /**
                         * Decodes a HyperparameterSource message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns HyperparameterSource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.EngineConfig.HyperparameterSource;

                        /**
                         * Verifies a HyperparameterSource message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a HyperparameterSource message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns HyperparameterSource
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.EngineConfig.HyperparameterSource;

                        /**
                         * Creates a plain object from a HyperparameterSource message. Also converts values to other types if specified.
                         * @param message HyperparameterSource
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.financialservices.v1.EngineConfig.HyperparameterSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this HyperparameterSource to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for HyperparameterSource
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
                        UPDATING = 3,
                        DELETING = 4
                    }

                    /** HyperparameterSourceType enum. */
                    enum HyperparameterSourceType {
                        HYPERPARAMETER_SOURCE_TYPE_UNSPECIFIED = 0,
                        TUNING = 1,
                        INHERITED = 2
                    }
                }

                /** Properties of a ListEngineConfigsRequest. */
                interface IListEngineConfigsRequest {

                    /** ListEngineConfigsRequest parent */
                    parent?: (string|null);

                    /** ListEngineConfigsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListEngineConfigsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListEngineConfigsRequest filter */
                    filter?: (string|null);

                    /** ListEngineConfigsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListEngineConfigsRequest. */
                class ListEngineConfigsRequest implements IListEngineConfigsRequest {

                    /**
                     * Constructs a new ListEngineConfigsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IListEngineConfigsRequest);

                    /** ListEngineConfigsRequest parent. */
                    public parent: string;

                    /** ListEngineConfigsRequest pageSize. */
                    public pageSize: number;

                    /** ListEngineConfigsRequest pageToken. */
                    public pageToken: string;

                    /** ListEngineConfigsRequest filter. */
                    public filter: string;

                    /** ListEngineConfigsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListEngineConfigsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEngineConfigsRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IListEngineConfigsRequest): google.cloud.financialservices.v1.ListEngineConfigsRequest;

                    /**
                     * Encodes the specified ListEngineConfigsRequest message. Does not implicitly {@link google.cloud.financialservices.v1.ListEngineConfigsRequest.verify|verify} messages.
                     * @param message ListEngineConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IListEngineConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEngineConfigsRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ListEngineConfigsRequest.verify|verify} messages.
                     * @param message ListEngineConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IListEngineConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEngineConfigsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEngineConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ListEngineConfigsRequest;

                    /**
                     * Decodes a ListEngineConfigsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEngineConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ListEngineConfigsRequest;

                    /**
                     * Verifies a ListEngineConfigsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEngineConfigsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEngineConfigsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ListEngineConfigsRequest;

                    /**
                     * Creates a plain object from a ListEngineConfigsRequest message. Also converts values to other types if specified.
                     * @param message ListEngineConfigsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ListEngineConfigsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEngineConfigsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEngineConfigsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListEngineConfigsResponse. */
                interface IListEngineConfigsResponse {

                    /** ListEngineConfigsResponse engineConfigs */
                    engineConfigs?: (google.cloud.financialservices.v1.IEngineConfig[]|null);

                    /** ListEngineConfigsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListEngineConfigsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListEngineConfigsResponse. */
                class ListEngineConfigsResponse implements IListEngineConfigsResponse {

                    /**
                     * Constructs a new ListEngineConfigsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IListEngineConfigsResponse);

                    /** ListEngineConfigsResponse engineConfigs. */
                    public engineConfigs: google.cloud.financialservices.v1.IEngineConfig[];

                    /** ListEngineConfigsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListEngineConfigsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListEngineConfigsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEngineConfigsResponse instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IListEngineConfigsResponse): google.cloud.financialservices.v1.ListEngineConfigsResponse;

                    /**
                     * Encodes the specified ListEngineConfigsResponse message. Does not implicitly {@link google.cloud.financialservices.v1.ListEngineConfigsResponse.verify|verify} messages.
                     * @param message ListEngineConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IListEngineConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEngineConfigsResponse message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ListEngineConfigsResponse.verify|verify} messages.
                     * @param message ListEngineConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IListEngineConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEngineConfigsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEngineConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ListEngineConfigsResponse;

                    /**
                     * Decodes a ListEngineConfigsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEngineConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ListEngineConfigsResponse;

                    /**
                     * Verifies a ListEngineConfigsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEngineConfigsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEngineConfigsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ListEngineConfigsResponse;

                    /**
                     * Creates a plain object from a ListEngineConfigsResponse message. Also converts values to other types if specified.
                     * @param message ListEngineConfigsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ListEngineConfigsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEngineConfigsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEngineConfigsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetEngineConfigRequest. */
                interface IGetEngineConfigRequest {

                    /** GetEngineConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetEngineConfigRequest. */
                class GetEngineConfigRequest implements IGetEngineConfigRequest {

                    /**
                     * Constructs a new GetEngineConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IGetEngineConfigRequest);

                    /** GetEngineConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetEngineConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetEngineConfigRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IGetEngineConfigRequest): google.cloud.financialservices.v1.GetEngineConfigRequest;

                    /**
                     * Encodes the specified GetEngineConfigRequest message. Does not implicitly {@link google.cloud.financialservices.v1.GetEngineConfigRequest.verify|verify} messages.
                     * @param message GetEngineConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IGetEngineConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetEngineConfigRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.GetEngineConfigRequest.verify|verify} messages.
                     * @param message GetEngineConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IGetEngineConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetEngineConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetEngineConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.GetEngineConfigRequest;

                    /**
                     * Decodes a GetEngineConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetEngineConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.GetEngineConfigRequest;

                    /**
                     * Verifies a GetEngineConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetEngineConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetEngineConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.GetEngineConfigRequest;

                    /**
                     * Creates a plain object from a GetEngineConfigRequest message. Also converts values to other types if specified.
                     * @param message GetEngineConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.GetEngineConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetEngineConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetEngineConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateEngineConfigRequest. */
                interface ICreateEngineConfigRequest {

                    /** CreateEngineConfigRequest parent */
                    parent?: (string|null);

                    /** CreateEngineConfigRequest engineConfigId */
                    engineConfigId?: (string|null);

                    /** CreateEngineConfigRequest engineConfig */
                    engineConfig?: (google.cloud.financialservices.v1.IEngineConfig|null);

                    /** CreateEngineConfigRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateEngineConfigRequest. */
                class CreateEngineConfigRequest implements ICreateEngineConfigRequest {

                    /**
                     * Constructs a new CreateEngineConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.ICreateEngineConfigRequest);

                    /** CreateEngineConfigRequest parent. */
                    public parent: string;

                    /** CreateEngineConfigRequest engineConfigId. */
                    public engineConfigId: string;

                    /** CreateEngineConfigRequest engineConfig. */
                    public engineConfig?: (google.cloud.financialservices.v1.IEngineConfig|null);

                    /** CreateEngineConfigRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateEngineConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateEngineConfigRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.ICreateEngineConfigRequest): google.cloud.financialservices.v1.CreateEngineConfigRequest;

                    /**
                     * Encodes the specified CreateEngineConfigRequest message. Does not implicitly {@link google.cloud.financialservices.v1.CreateEngineConfigRequest.verify|verify} messages.
                     * @param message CreateEngineConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.ICreateEngineConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateEngineConfigRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.CreateEngineConfigRequest.verify|verify} messages.
                     * @param message CreateEngineConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.ICreateEngineConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateEngineConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateEngineConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.CreateEngineConfigRequest;

                    /**
                     * Decodes a CreateEngineConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateEngineConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.CreateEngineConfigRequest;

                    /**
                     * Verifies a CreateEngineConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateEngineConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateEngineConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.CreateEngineConfigRequest;

                    /**
                     * Creates a plain object from a CreateEngineConfigRequest message. Also converts values to other types if specified.
                     * @param message CreateEngineConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.CreateEngineConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateEngineConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateEngineConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateEngineConfigRequest. */
                interface IUpdateEngineConfigRequest {

                    /** UpdateEngineConfigRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateEngineConfigRequest engineConfig */
                    engineConfig?: (google.cloud.financialservices.v1.IEngineConfig|null);

                    /** UpdateEngineConfigRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateEngineConfigRequest. */
                class UpdateEngineConfigRequest implements IUpdateEngineConfigRequest {

                    /**
                     * Constructs a new UpdateEngineConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IUpdateEngineConfigRequest);

                    /** UpdateEngineConfigRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateEngineConfigRequest engineConfig. */
                    public engineConfig?: (google.cloud.financialservices.v1.IEngineConfig|null);

                    /** UpdateEngineConfigRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateEngineConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateEngineConfigRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IUpdateEngineConfigRequest): google.cloud.financialservices.v1.UpdateEngineConfigRequest;

                    /**
                     * Encodes the specified UpdateEngineConfigRequest message. Does not implicitly {@link google.cloud.financialservices.v1.UpdateEngineConfigRequest.verify|verify} messages.
                     * @param message UpdateEngineConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IUpdateEngineConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateEngineConfigRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.UpdateEngineConfigRequest.verify|verify} messages.
                     * @param message UpdateEngineConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IUpdateEngineConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateEngineConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateEngineConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.UpdateEngineConfigRequest;

                    /**
                     * Decodes an UpdateEngineConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateEngineConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.UpdateEngineConfigRequest;

                    /**
                     * Verifies an UpdateEngineConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateEngineConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateEngineConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.UpdateEngineConfigRequest;

                    /**
                     * Creates a plain object from an UpdateEngineConfigRequest message. Also converts values to other types if specified.
                     * @param message UpdateEngineConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.UpdateEngineConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateEngineConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateEngineConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteEngineConfigRequest. */
                interface IDeleteEngineConfigRequest {

                    /** DeleteEngineConfigRequest name */
                    name?: (string|null);

                    /** DeleteEngineConfigRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteEngineConfigRequest. */
                class DeleteEngineConfigRequest implements IDeleteEngineConfigRequest {

                    /**
                     * Constructs a new DeleteEngineConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IDeleteEngineConfigRequest);

                    /** DeleteEngineConfigRequest name. */
                    public name: string;

                    /** DeleteEngineConfigRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteEngineConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteEngineConfigRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IDeleteEngineConfigRequest): google.cloud.financialservices.v1.DeleteEngineConfigRequest;

                    /**
                     * Encodes the specified DeleteEngineConfigRequest message. Does not implicitly {@link google.cloud.financialservices.v1.DeleteEngineConfigRequest.verify|verify} messages.
                     * @param message DeleteEngineConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IDeleteEngineConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteEngineConfigRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.DeleteEngineConfigRequest.verify|verify} messages.
                     * @param message DeleteEngineConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IDeleteEngineConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteEngineConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteEngineConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.DeleteEngineConfigRequest;

                    /**
                     * Decodes a DeleteEngineConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteEngineConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.DeleteEngineConfigRequest;

                    /**
                     * Verifies a DeleteEngineConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteEngineConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteEngineConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.DeleteEngineConfigRequest;

                    /**
                     * Creates a plain object from a DeleteEngineConfigRequest message. Also converts values to other types if specified.
                     * @param message DeleteEngineConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.DeleteEngineConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteEngineConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteEngineConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportEngineConfigMetadataRequest. */
                interface IExportEngineConfigMetadataRequest {

                    /** ExportEngineConfigMetadataRequest engineConfig */
                    engineConfig?: (string|null);

                    /** ExportEngineConfigMetadataRequest structuredMetadataDestination */
                    structuredMetadataDestination?: (google.cloud.financialservices.v1.IBigQueryDestination|null);
                }

                /** Represents an ExportEngineConfigMetadataRequest. */
                class ExportEngineConfigMetadataRequest implements IExportEngineConfigMetadataRequest {

                    /**
                     * Constructs a new ExportEngineConfigMetadataRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IExportEngineConfigMetadataRequest);

                    /** ExportEngineConfigMetadataRequest engineConfig. */
                    public engineConfig: string;

                    /** ExportEngineConfigMetadataRequest structuredMetadataDestination. */
                    public structuredMetadataDestination?: (google.cloud.financialservices.v1.IBigQueryDestination|null);

                    /**
                     * Creates a new ExportEngineConfigMetadataRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportEngineConfigMetadataRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IExportEngineConfigMetadataRequest): google.cloud.financialservices.v1.ExportEngineConfigMetadataRequest;

                    /**
                     * Encodes the specified ExportEngineConfigMetadataRequest message. Does not implicitly {@link google.cloud.financialservices.v1.ExportEngineConfigMetadataRequest.verify|verify} messages.
                     * @param message ExportEngineConfigMetadataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IExportEngineConfigMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportEngineConfigMetadataRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ExportEngineConfigMetadataRequest.verify|verify} messages.
                     * @param message ExportEngineConfigMetadataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IExportEngineConfigMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportEngineConfigMetadataRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportEngineConfigMetadataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ExportEngineConfigMetadataRequest;

                    /**
                     * Decodes an ExportEngineConfigMetadataRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportEngineConfigMetadataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ExportEngineConfigMetadataRequest;

                    /**
                     * Verifies an ExportEngineConfigMetadataRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportEngineConfigMetadataRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportEngineConfigMetadataRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ExportEngineConfigMetadataRequest;

                    /**
                     * Creates a plain object from an ExportEngineConfigMetadataRequest message. Also converts values to other types if specified.
                     * @param message ExportEngineConfigMetadataRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ExportEngineConfigMetadataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportEngineConfigMetadataRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportEngineConfigMetadataRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportEngineConfigMetadataResponse. */
                interface IExportEngineConfigMetadataResponse {
                }

                /** Represents an ExportEngineConfigMetadataResponse. */
                class ExportEngineConfigMetadataResponse implements IExportEngineConfigMetadataResponse {

                    /**
                     * Constructs a new ExportEngineConfigMetadataResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IExportEngineConfigMetadataResponse);

                    /**
                     * Creates a new ExportEngineConfigMetadataResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportEngineConfigMetadataResponse instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IExportEngineConfigMetadataResponse): google.cloud.financialservices.v1.ExportEngineConfigMetadataResponse;

                    /**
                     * Encodes the specified ExportEngineConfigMetadataResponse message. Does not implicitly {@link google.cloud.financialservices.v1.ExportEngineConfigMetadataResponse.verify|verify} messages.
                     * @param message ExportEngineConfigMetadataResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IExportEngineConfigMetadataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportEngineConfigMetadataResponse message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ExportEngineConfigMetadataResponse.verify|verify} messages.
                     * @param message ExportEngineConfigMetadataResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IExportEngineConfigMetadataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportEngineConfigMetadataResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportEngineConfigMetadataResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ExportEngineConfigMetadataResponse;

                    /**
                     * Decodes an ExportEngineConfigMetadataResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportEngineConfigMetadataResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ExportEngineConfigMetadataResponse;

                    /**
                     * Verifies an ExportEngineConfigMetadataResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportEngineConfigMetadataResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportEngineConfigMetadataResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ExportEngineConfigMetadataResponse;

                    /**
                     * Creates a plain object from an ExportEngineConfigMetadataResponse message. Also converts values to other types if specified.
                     * @param message ExportEngineConfigMetadataResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ExportEngineConfigMetadataResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportEngineConfigMetadataResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportEngineConfigMetadataResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EngineVersion. */
                interface IEngineVersion {

                    /** EngineVersion name */
                    name?: (string|null);

                    /** EngineVersion state */
                    state?: (google.cloud.financialservices.v1.EngineVersion.State|keyof typeof google.cloud.financialservices.v1.EngineVersion.State|null);

                    /** EngineVersion expectedLimitationStartTime */
                    expectedLimitationStartTime?: (google.protobuf.ITimestamp|null);

                    /** EngineVersion expectedDecommissionTime */
                    expectedDecommissionTime?: (google.protobuf.ITimestamp|null);

                    /** EngineVersion lineOfBusiness */
                    lineOfBusiness?: (google.cloud.financialservices.v1.LineOfBusiness|keyof typeof google.cloud.financialservices.v1.LineOfBusiness|null);
                }

                /** Represents an EngineVersion. */
                class EngineVersion implements IEngineVersion {

                    /**
                     * Constructs a new EngineVersion.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IEngineVersion);

                    /** EngineVersion name. */
                    public name: string;

                    /** EngineVersion state. */
                    public state: (google.cloud.financialservices.v1.EngineVersion.State|keyof typeof google.cloud.financialservices.v1.EngineVersion.State);

                    /** EngineVersion expectedLimitationStartTime. */
                    public expectedLimitationStartTime?: (google.protobuf.ITimestamp|null);

                    /** EngineVersion expectedDecommissionTime. */
                    public expectedDecommissionTime?: (google.protobuf.ITimestamp|null);

                    /** EngineVersion lineOfBusiness. */
                    public lineOfBusiness: (google.cloud.financialservices.v1.LineOfBusiness|keyof typeof google.cloud.financialservices.v1.LineOfBusiness);

                    /**
                     * Creates a new EngineVersion instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EngineVersion instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IEngineVersion): google.cloud.financialservices.v1.EngineVersion;

                    /**
                     * Encodes the specified EngineVersion message. Does not implicitly {@link google.cloud.financialservices.v1.EngineVersion.verify|verify} messages.
                     * @param message EngineVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IEngineVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EngineVersion message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.EngineVersion.verify|verify} messages.
                     * @param message EngineVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IEngineVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EngineVersion message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EngineVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.EngineVersion;

                    /**
                     * Decodes an EngineVersion message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EngineVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.EngineVersion;

                    /**
                     * Verifies an EngineVersion message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EngineVersion message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EngineVersion
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.EngineVersion;

                    /**
                     * Creates a plain object from an EngineVersion message. Also converts values to other types if specified.
                     * @param message EngineVersion
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.EngineVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EngineVersion to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EngineVersion
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace EngineVersion {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        LIMITED = 2,
                        DECOMMISSIONED = 3
                    }
                }

                /** Properties of a ListEngineVersionsRequest. */
                interface IListEngineVersionsRequest {

                    /** ListEngineVersionsRequest parent */
                    parent?: (string|null);

                    /** ListEngineVersionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListEngineVersionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListEngineVersionsRequest filter */
                    filter?: (string|null);

                    /** ListEngineVersionsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListEngineVersionsRequest. */
                class ListEngineVersionsRequest implements IListEngineVersionsRequest {

                    /**
                     * Constructs a new ListEngineVersionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IListEngineVersionsRequest);

                    /** ListEngineVersionsRequest parent. */
                    public parent: string;

                    /** ListEngineVersionsRequest pageSize. */
                    public pageSize: number;

                    /** ListEngineVersionsRequest pageToken. */
                    public pageToken: string;

                    /** ListEngineVersionsRequest filter. */
                    public filter: string;

                    /** ListEngineVersionsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListEngineVersionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEngineVersionsRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IListEngineVersionsRequest): google.cloud.financialservices.v1.ListEngineVersionsRequest;

                    /**
                     * Encodes the specified ListEngineVersionsRequest message. Does not implicitly {@link google.cloud.financialservices.v1.ListEngineVersionsRequest.verify|verify} messages.
                     * @param message ListEngineVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IListEngineVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEngineVersionsRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ListEngineVersionsRequest.verify|verify} messages.
                     * @param message ListEngineVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IListEngineVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEngineVersionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEngineVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ListEngineVersionsRequest;

                    /**
                     * Decodes a ListEngineVersionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEngineVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ListEngineVersionsRequest;

                    /**
                     * Verifies a ListEngineVersionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEngineVersionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEngineVersionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ListEngineVersionsRequest;

                    /**
                     * Creates a plain object from a ListEngineVersionsRequest message. Also converts values to other types if specified.
                     * @param message ListEngineVersionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ListEngineVersionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEngineVersionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEngineVersionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListEngineVersionsResponse. */
                interface IListEngineVersionsResponse {

                    /** ListEngineVersionsResponse engineVersions */
                    engineVersions?: (google.cloud.financialservices.v1.IEngineVersion[]|null);

                    /** ListEngineVersionsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListEngineVersionsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListEngineVersionsResponse. */
                class ListEngineVersionsResponse implements IListEngineVersionsResponse {

                    /**
                     * Constructs a new ListEngineVersionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IListEngineVersionsResponse);

                    /** ListEngineVersionsResponse engineVersions. */
                    public engineVersions: google.cloud.financialservices.v1.IEngineVersion[];

                    /** ListEngineVersionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListEngineVersionsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListEngineVersionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEngineVersionsResponse instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IListEngineVersionsResponse): google.cloud.financialservices.v1.ListEngineVersionsResponse;

                    /**
                     * Encodes the specified ListEngineVersionsResponse message. Does not implicitly {@link google.cloud.financialservices.v1.ListEngineVersionsResponse.verify|verify} messages.
                     * @param message ListEngineVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IListEngineVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEngineVersionsResponse message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ListEngineVersionsResponse.verify|verify} messages.
                     * @param message ListEngineVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IListEngineVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEngineVersionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEngineVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ListEngineVersionsResponse;

                    /**
                     * Decodes a ListEngineVersionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEngineVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ListEngineVersionsResponse;

                    /**
                     * Verifies a ListEngineVersionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEngineVersionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEngineVersionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ListEngineVersionsResponse;

                    /**
                     * Creates a plain object from a ListEngineVersionsResponse message. Also converts values to other types if specified.
                     * @param message ListEngineVersionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ListEngineVersionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEngineVersionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEngineVersionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetEngineVersionRequest. */
                interface IGetEngineVersionRequest {

                    /** GetEngineVersionRequest name */
                    name?: (string|null);
                }

                /** Represents a GetEngineVersionRequest. */
                class GetEngineVersionRequest implements IGetEngineVersionRequest {

                    /**
                     * Constructs a new GetEngineVersionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IGetEngineVersionRequest);

                    /** GetEngineVersionRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetEngineVersionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetEngineVersionRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IGetEngineVersionRequest): google.cloud.financialservices.v1.GetEngineVersionRequest;

                    /**
                     * Encodes the specified GetEngineVersionRequest message. Does not implicitly {@link google.cloud.financialservices.v1.GetEngineVersionRequest.verify|verify} messages.
                     * @param message GetEngineVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IGetEngineVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetEngineVersionRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.GetEngineVersionRequest.verify|verify} messages.
                     * @param message GetEngineVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IGetEngineVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetEngineVersionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetEngineVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.GetEngineVersionRequest;

                    /**
                     * Decodes a GetEngineVersionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetEngineVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.GetEngineVersionRequest;

                    /**
                     * Verifies a GetEngineVersionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetEngineVersionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetEngineVersionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.GetEngineVersionRequest;

                    /**
                     * Creates a plain object from a GetEngineVersionRequest message. Also converts values to other types if specified.
                     * @param message GetEngineVersionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.GetEngineVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetEngineVersionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetEngineVersionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Instance. */
                interface IInstance {

                    /** Instance name */
                    name?: (string|null);

                    /** Instance createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Instance updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Instance state */
                    state?: (google.cloud.financialservices.v1.Instance.State|keyof typeof google.cloud.financialservices.v1.Instance.State|null);

                    /** Instance labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Instance kmsKey */
                    kmsKey?: (string|null);
                }

                /** Represents an Instance. */
                class Instance implements IInstance {

                    /**
                     * Constructs a new Instance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IInstance);

                    /** Instance name. */
                    public name: string;

                    /** Instance createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Instance updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Instance state. */
                    public state: (google.cloud.financialservices.v1.Instance.State|keyof typeof google.cloud.financialservices.v1.Instance.State);

                    /** Instance labels. */
                    public labels: { [k: string]: string };

                    /** Instance kmsKey. */
                    public kmsKey: string;

                    /**
                     * Creates a new Instance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Instance instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IInstance): google.cloud.financialservices.v1.Instance;

                    /**
                     * Encodes the specified Instance message. Does not implicitly {@link google.cloud.financialservices.v1.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Instance message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Instance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.Instance;

                    /**
                     * Decodes an Instance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.Instance;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.Instance;

                    /**
                     * Creates a plain object from an Instance message. Also converts values to other types if specified.
                     * @param message Instance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.Instance, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                namespace Instance {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        ACTIVE = 2,
                        UPDATING = 3,
                        DELETING = 4
                    }
                }

                /** Properties of a ListInstancesRequest. */
                interface IListInstancesRequest {

                    /** ListInstancesRequest parent */
                    parent?: (string|null);

                    /** ListInstancesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListInstancesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListInstancesRequest filter */
                    filter?: (string|null);

                    /** ListInstancesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListInstancesRequest. */
                class ListInstancesRequest implements IListInstancesRequest {

                    /**
                     * Constructs a new ListInstancesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IListInstancesRequest);

                    /** ListInstancesRequest parent. */
                    public parent: string;

                    /** ListInstancesRequest pageSize. */
                    public pageSize: number;

                    /** ListInstancesRequest pageToken. */
                    public pageToken: string;

                    /** ListInstancesRequest filter. */
                    public filter: string;

                    /** ListInstancesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListInstancesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInstancesRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IListInstancesRequest): google.cloud.financialservices.v1.ListInstancesRequest;

                    /**
                     * Encodes the specified ListInstancesRequest message. Does not implicitly {@link google.cloud.financialservices.v1.ListInstancesRequest.verify|verify} messages.
                     * @param message ListInstancesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IListInstancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInstancesRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ListInstancesRequest.verify|verify} messages.
                     * @param message ListInstancesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IListInstancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInstancesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ListInstancesRequest;

                    /**
                     * Decodes a ListInstancesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ListInstancesRequest;

                    /**
                     * Verifies a ListInstancesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInstancesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInstancesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ListInstancesRequest;

                    /**
                     * Creates a plain object from a ListInstancesRequest message. Also converts values to other types if specified.
                     * @param message ListInstancesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ListInstancesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInstancesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListInstancesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListInstancesResponse. */
                interface IListInstancesResponse {

                    /** ListInstancesResponse instances */
                    instances?: (google.cloud.financialservices.v1.IInstance[]|null);

                    /** ListInstancesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListInstancesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListInstancesResponse. */
                class ListInstancesResponse implements IListInstancesResponse {

                    /**
                     * Constructs a new ListInstancesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IListInstancesResponse);

                    /** ListInstancesResponse instances. */
                    public instances: google.cloud.financialservices.v1.IInstance[];

                    /** ListInstancesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListInstancesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListInstancesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInstancesResponse instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IListInstancesResponse): google.cloud.financialservices.v1.ListInstancesResponse;

                    /**
                     * Encodes the specified ListInstancesResponse message. Does not implicitly {@link google.cloud.financialservices.v1.ListInstancesResponse.verify|verify} messages.
                     * @param message ListInstancesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IListInstancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInstancesResponse message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ListInstancesResponse.verify|verify} messages.
                     * @param message ListInstancesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IListInstancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInstancesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ListInstancesResponse;

                    /**
                     * Decodes a ListInstancesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ListInstancesResponse;

                    /**
                     * Verifies a ListInstancesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInstancesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInstancesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ListInstancesResponse;

                    /**
                     * Creates a plain object from a ListInstancesResponse message. Also converts values to other types if specified.
                     * @param message ListInstancesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ListInstancesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInstancesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListInstancesResponse
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
                    constructor(properties?: google.cloud.financialservices.v1.IGetInstanceRequest);

                    /** GetInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IGetInstanceRequest): google.cloud.financialservices.v1.GetInstanceRequest;

                    /**
                     * Encodes the specified GetInstanceRequest message. Does not implicitly {@link google.cloud.financialservices.v1.GetInstanceRequest.verify|verify} messages.
                     * @param message GetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IGetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.GetInstanceRequest.verify|verify} messages.
                     * @param message GetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IGetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.GetInstanceRequest;

                    /**
                     * Decodes a GetInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.GetInstanceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.GetInstanceRequest;

                    /**
                     * Creates a plain object from a GetInstanceRequest message. Also converts values to other types if specified.
                     * @param message GetInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.GetInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a CreateInstanceRequest. */
                interface ICreateInstanceRequest {

                    /** CreateInstanceRequest parent */
                    parent?: (string|null);

                    /** CreateInstanceRequest instanceId */
                    instanceId?: (string|null);

                    /** CreateInstanceRequest instance */
                    instance?: (google.cloud.financialservices.v1.IInstance|null);

                    /** CreateInstanceRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateInstanceRequest. */
                class CreateInstanceRequest implements ICreateInstanceRequest {

                    /**
                     * Constructs a new CreateInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.ICreateInstanceRequest);

                    /** CreateInstanceRequest parent. */
                    public parent: string;

                    /** CreateInstanceRequest instanceId. */
                    public instanceId: string;

                    /** CreateInstanceRequest instance. */
                    public instance?: (google.cloud.financialservices.v1.IInstance|null);

                    /** CreateInstanceRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.ICreateInstanceRequest): google.cloud.financialservices.v1.CreateInstanceRequest;

                    /**
                     * Encodes the specified CreateInstanceRequest message. Does not implicitly {@link google.cloud.financialservices.v1.CreateInstanceRequest.verify|verify} messages.
                     * @param message CreateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.ICreateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.CreateInstanceRequest.verify|verify} messages.
                     * @param message CreateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.ICreateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.CreateInstanceRequest;

                    /**
                     * Decodes a CreateInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.CreateInstanceRequest;

                    /**
                     * Verifies a CreateInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.CreateInstanceRequest;

                    /**
                     * Creates a plain object from a CreateInstanceRequest message. Also converts values to other types if specified.
                     * @param message CreateInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.CreateInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateInstanceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateInstanceRequest. */
                interface IUpdateInstanceRequest {

                    /** UpdateInstanceRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateInstanceRequest instance */
                    instance?: (google.cloud.financialservices.v1.IInstance|null);

                    /** UpdateInstanceRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateInstanceRequest. */
                class UpdateInstanceRequest implements IUpdateInstanceRequest {

                    /**
                     * Constructs a new UpdateInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IUpdateInstanceRequest);

                    /** UpdateInstanceRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateInstanceRequest instance. */
                    public instance?: (google.cloud.financialservices.v1.IInstance|null);

                    /** UpdateInstanceRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IUpdateInstanceRequest): google.cloud.financialservices.v1.UpdateInstanceRequest;

                    /**
                     * Encodes the specified UpdateInstanceRequest message. Does not implicitly {@link google.cloud.financialservices.v1.UpdateInstanceRequest.verify|verify} messages.
                     * @param message UpdateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IUpdateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.UpdateInstanceRequest.verify|verify} messages.
                     * @param message UpdateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IUpdateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.UpdateInstanceRequest;

                    /**
                     * Decodes an UpdateInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.UpdateInstanceRequest;

                    /**
                     * Verifies an UpdateInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.UpdateInstanceRequest;

                    /**
                     * Creates a plain object from an UpdateInstanceRequest message. Also converts values to other types if specified.
                     * @param message UpdateInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.UpdateInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateInstanceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteInstanceRequest. */
                interface IDeleteInstanceRequest {

                    /** DeleteInstanceRequest name */
                    name?: (string|null);

                    /** DeleteInstanceRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteInstanceRequest. */
                class DeleteInstanceRequest implements IDeleteInstanceRequest {

                    /**
                     * Constructs a new DeleteInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IDeleteInstanceRequest);

                    /** DeleteInstanceRequest name. */
                    public name: string;

                    /** DeleteInstanceRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IDeleteInstanceRequest): google.cloud.financialservices.v1.DeleteInstanceRequest;

                    /**
                     * Encodes the specified DeleteInstanceRequest message. Does not implicitly {@link google.cloud.financialservices.v1.DeleteInstanceRequest.verify|verify} messages.
                     * @param message DeleteInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IDeleteInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.DeleteInstanceRequest.verify|verify} messages.
                     * @param message DeleteInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IDeleteInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.DeleteInstanceRequest;

                    /**
                     * Decodes a DeleteInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.DeleteInstanceRequest;

                    /**
                     * Verifies a DeleteInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.DeleteInstanceRequest;

                    /**
                     * Creates a plain object from a DeleteInstanceRequest message. Also converts values to other types if specified.
                     * @param message DeleteInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.DeleteInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteInstanceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportRegisteredPartiesRequest. */
                interface IImportRegisteredPartiesRequest {

                    /** ImportRegisteredPartiesRequest name */
                    name?: (string|null);

                    /** ImportRegisteredPartiesRequest partyTables */
                    partyTables?: (string[]|null);

                    /** ImportRegisteredPartiesRequest mode */
                    mode?: (google.cloud.financialservices.v1.ImportRegisteredPartiesRequest.UpdateMode|keyof typeof google.cloud.financialservices.v1.ImportRegisteredPartiesRequest.UpdateMode|null);

                    /** ImportRegisteredPartiesRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** ImportRegisteredPartiesRequest lineOfBusiness */
                    lineOfBusiness?: (google.cloud.financialservices.v1.LineOfBusiness|keyof typeof google.cloud.financialservices.v1.LineOfBusiness|null);
                }

                /** Represents an ImportRegisteredPartiesRequest. */
                class ImportRegisteredPartiesRequest implements IImportRegisteredPartiesRequest {

                    /**
                     * Constructs a new ImportRegisteredPartiesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IImportRegisteredPartiesRequest);

                    /** ImportRegisteredPartiesRequest name. */
                    public name: string;

                    /** ImportRegisteredPartiesRequest partyTables. */
                    public partyTables: string[];

                    /** ImportRegisteredPartiesRequest mode. */
                    public mode: (google.cloud.financialservices.v1.ImportRegisteredPartiesRequest.UpdateMode|keyof typeof google.cloud.financialservices.v1.ImportRegisteredPartiesRequest.UpdateMode);

                    /** ImportRegisteredPartiesRequest validateOnly. */
                    public validateOnly: boolean;

                    /** ImportRegisteredPartiesRequest lineOfBusiness. */
                    public lineOfBusiness: (google.cloud.financialservices.v1.LineOfBusiness|keyof typeof google.cloud.financialservices.v1.LineOfBusiness);

                    /**
                     * Creates a new ImportRegisteredPartiesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportRegisteredPartiesRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IImportRegisteredPartiesRequest): google.cloud.financialservices.v1.ImportRegisteredPartiesRequest;

                    /**
                     * Encodes the specified ImportRegisteredPartiesRequest message. Does not implicitly {@link google.cloud.financialservices.v1.ImportRegisteredPartiesRequest.verify|verify} messages.
                     * @param message ImportRegisteredPartiesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IImportRegisteredPartiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportRegisteredPartiesRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ImportRegisteredPartiesRequest.verify|verify} messages.
                     * @param message ImportRegisteredPartiesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IImportRegisteredPartiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportRegisteredPartiesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportRegisteredPartiesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ImportRegisteredPartiesRequest;

                    /**
                     * Decodes an ImportRegisteredPartiesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportRegisteredPartiesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ImportRegisteredPartiesRequest;

                    /**
                     * Verifies an ImportRegisteredPartiesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportRegisteredPartiesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportRegisteredPartiesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ImportRegisteredPartiesRequest;

                    /**
                     * Creates a plain object from an ImportRegisteredPartiesRequest message. Also converts values to other types if specified.
                     * @param message ImportRegisteredPartiesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ImportRegisteredPartiesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportRegisteredPartiesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportRegisteredPartiesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ImportRegisteredPartiesRequest {

                    /** UpdateMode enum. */
                    enum UpdateMode {
                        UPDATE_MODE_UNSPECIFIED = 0,
                        REPLACE = 1,
                        APPEND = 2
                    }
                }

                /** Properties of an ImportRegisteredPartiesResponse. */
                interface IImportRegisteredPartiesResponse {

                    /** ImportRegisteredPartiesResponse partiesAdded */
                    partiesAdded?: (number|Long|string|null);

                    /** ImportRegisteredPartiesResponse partiesRemoved */
                    partiesRemoved?: (number|Long|string|null);

                    /** ImportRegisteredPartiesResponse partiesTotal */
                    partiesTotal?: (number|Long|string|null);

                    /** ImportRegisteredPartiesResponse partiesFailedToRemove */
                    partiesFailedToRemove?: (number|Long|string|null);

                    /** ImportRegisteredPartiesResponse partiesUptiered */
                    partiesUptiered?: (number|Long|string|null);

                    /** ImportRegisteredPartiesResponse partiesDowntiered */
                    partiesDowntiered?: (number|Long|string|null);

                    /** ImportRegisteredPartiesResponse partiesFailedToDowntier */
                    partiesFailedToDowntier?: (number|Long|string|null);
                }

                /** Represents an ImportRegisteredPartiesResponse. */
                class ImportRegisteredPartiesResponse implements IImportRegisteredPartiesResponse {

                    /**
                     * Constructs a new ImportRegisteredPartiesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IImportRegisteredPartiesResponse);

                    /** ImportRegisteredPartiesResponse partiesAdded. */
                    public partiesAdded: (number|Long|string);

                    /** ImportRegisteredPartiesResponse partiesRemoved. */
                    public partiesRemoved: (number|Long|string);

                    /** ImportRegisteredPartiesResponse partiesTotal. */
                    public partiesTotal: (number|Long|string);

                    /** ImportRegisteredPartiesResponse partiesFailedToRemove. */
                    public partiesFailedToRemove: (number|Long|string);

                    /** ImportRegisteredPartiesResponse partiesUptiered. */
                    public partiesUptiered: (number|Long|string);

                    /** ImportRegisteredPartiesResponse partiesDowntiered. */
                    public partiesDowntiered: (number|Long|string);

                    /** ImportRegisteredPartiesResponse partiesFailedToDowntier. */
                    public partiesFailedToDowntier: (number|Long|string);

                    /**
                     * Creates a new ImportRegisteredPartiesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportRegisteredPartiesResponse instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IImportRegisteredPartiesResponse): google.cloud.financialservices.v1.ImportRegisteredPartiesResponse;

                    /**
                     * Encodes the specified ImportRegisteredPartiesResponse message. Does not implicitly {@link google.cloud.financialservices.v1.ImportRegisteredPartiesResponse.verify|verify} messages.
                     * @param message ImportRegisteredPartiesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IImportRegisteredPartiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportRegisteredPartiesResponse message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ImportRegisteredPartiesResponse.verify|verify} messages.
                     * @param message ImportRegisteredPartiesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IImportRegisteredPartiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportRegisteredPartiesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportRegisteredPartiesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ImportRegisteredPartiesResponse;

                    /**
                     * Decodes an ImportRegisteredPartiesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportRegisteredPartiesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ImportRegisteredPartiesResponse;

                    /**
                     * Verifies an ImportRegisteredPartiesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportRegisteredPartiesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportRegisteredPartiesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ImportRegisteredPartiesResponse;

                    /**
                     * Creates a plain object from an ImportRegisteredPartiesResponse message. Also converts values to other types if specified.
                     * @param message ImportRegisteredPartiesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ImportRegisteredPartiesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportRegisteredPartiesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportRegisteredPartiesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportRegisteredPartiesRequest. */
                interface IExportRegisteredPartiesRequest {

                    /** ExportRegisteredPartiesRequest name */
                    name?: (string|null);

                    /** ExportRegisteredPartiesRequest dataset */
                    dataset?: (google.cloud.financialservices.v1.IBigQueryDestination|null);

                    /** ExportRegisteredPartiesRequest lineOfBusiness */
                    lineOfBusiness?: (google.cloud.financialservices.v1.LineOfBusiness|keyof typeof google.cloud.financialservices.v1.LineOfBusiness|null);
                }

                /** Represents an ExportRegisteredPartiesRequest. */
                class ExportRegisteredPartiesRequest implements IExportRegisteredPartiesRequest {

                    /**
                     * Constructs a new ExportRegisteredPartiesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IExportRegisteredPartiesRequest);

                    /** ExportRegisteredPartiesRequest name. */
                    public name: string;

                    /** ExportRegisteredPartiesRequest dataset. */
                    public dataset?: (google.cloud.financialservices.v1.IBigQueryDestination|null);

                    /** ExportRegisteredPartiesRequest lineOfBusiness. */
                    public lineOfBusiness: (google.cloud.financialservices.v1.LineOfBusiness|keyof typeof google.cloud.financialservices.v1.LineOfBusiness);

                    /**
                     * Creates a new ExportRegisteredPartiesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportRegisteredPartiesRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IExportRegisteredPartiesRequest): google.cloud.financialservices.v1.ExportRegisteredPartiesRequest;

                    /**
                     * Encodes the specified ExportRegisteredPartiesRequest message. Does not implicitly {@link google.cloud.financialservices.v1.ExportRegisteredPartiesRequest.verify|verify} messages.
                     * @param message ExportRegisteredPartiesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IExportRegisteredPartiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportRegisteredPartiesRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ExportRegisteredPartiesRequest.verify|verify} messages.
                     * @param message ExportRegisteredPartiesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IExportRegisteredPartiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportRegisteredPartiesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportRegisteredPartiesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ExportRegisteredPartiesRequest;

                    /**
                     * Decodes an ExportRegisteredPartiesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportRegisteredPartiesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ExportRegisteredPartiesRequest;

                    /**
                     * Verifies an ExportRegisteredPartiesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportRegisteredPartiesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportRegisteredPartiesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ExportRegisteredPartiesRequest;

                    /**
                     * Creates a plain object from an ExportRegisteredPartiesRequest message. Also converts values to other types if specified.
                     * @param message ExportRegisteredPartiesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ExportRegisteredPartiesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportRegisteredPartiesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportRegisteredPartiesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportRegisteredPartiesResponse. */
                interface IExportRegisteredPartiesResponse {
                }

                /** Represents an ExportRegisteredPartiesResponse. */
                class ExportRegisteredPartiesResponse implements IExportRegisteredPartiesResponse {

                    /**
                     * Constructs a new ExportRegisteredPartiesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IExportRegisteredPartiesResponse);

                    /**
                     * Creates a new ExportRegisteredPartiesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportRegisteredPartiesResponse instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IExportRegisteredPartiesResponse): google.cloud.financialservices.v1.ExportRegisteredPartiesResponse;

                    /**
                     * Encodes the specified ExportRegisteredPartiesResponse message. Does not implicitly {@link google.cloud.financialservices.v1.ExportRegisteredPartiesResponse.verify|verify} messages.
                     * @param message ExportRegisteredPartiesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IExportRegisteredPartiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportRegisteredPartiesResponse message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ExportRegisteredPartiesResponse.verify|verify} messages.
                     * @param message ExportRegisteredPartiesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IExportRegisteredPartiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportRegisteredPartiesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportRegisteredPartiesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ExportRegisteredPartiesResponse;

                    /**
                     * Decodes an ExportRegisteredPartiesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportRegisteredPartiesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ExportRegisteredPartiesResponse;

                    /**
                     * Verifies an ExportRegisteredPartiesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportRegisteredPartiesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportRegisteredPartiesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ExportRegisteredPartiesResponse;

                    /**
                     * Creates a plain object from an ExportRegisteredPartiesResponse message. Also converts values to other types if specified.
                     * @param message ExportRegisteredPartiesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ExportRegisteredPartiesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportRegisteredPartiesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportRegisteredPartiesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Model. */
                interface IModel {

                    /** Model name */
                    name?: (string|null);

                    /** Model createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Model updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Model labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Model state */
                    state?: (google.cloud.financialservices.v1.Model.State|keyof typeof google.cloud.financialservices.v1.Model.State|null);

                    /** Model engineVersion */
                    engineVersion?: (string|null);

                    /** Model engineConfig */
                    engineConfig?: (string|null);

                    /** Model primaryDataset */
                    primaryDataset?: (string|null);

                    /** Model endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** Model lineOfBusiness */
                    lineOfBusiness?: (google.cloud.financialservices.v1.LineOfBusiness|keyof typeof google.cloud.financialservices.v1.LineOfBusiness|null);
                }

                /** Represents a Model. */
                class Model implements IModel {

                    /**
                     * Constructs a new Model.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IModel);

                    /** Model name. */
                    public name: string;

                    /** Model createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Model updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Model labels. */
                    public labels: { [k: string]: string };

                    /** Model state. */
                    public state: (google.cloud.financialservices.v1.Model.State|keyof typeof google.cloud.financialservices.v1.Model.State);

                    /** Model engineVersion. */
                    public engineVersion: string;

                    /** Model engineConfig. */
                    public engineConfig: string;

                    /** Model primaryDataset. */
                    public primaryDataset: string;

                    /** Model endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** Model lineOfBusiness. */
                    public lineOfBusiness: (google.cloud.financialservices.v1.LineOfBusiness|keyof typeof google.cloud.financialservices.v1.LineOfBusiness);

                    /**
                     * Creates a new Model instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Model instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IModel): google.cloud.financialservices.v1.Model;

                    /**
                     * Encodes the specified Model message. Does not implicitly {@link google.cloud.financialservices.v1.Model.verify|verify} messages.
                     * @param message Model message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IModel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Model message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.Model.verify|verify} messages.
                     * @param message Model message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IModel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Model message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Model
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.Model;

                    /**
                     * Decodes a Model message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Model
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.Model;

                    /**
                     * Verifies a Model message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Model message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Model
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.Model;

                    /**
                     * Creates a plain object from a Model message. Also converts values to other types if specified.
                     * @param message Model
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.Model, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Model to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Model
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Model {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        ACTIVE = 2,
                        UPDATING = 3,
                        DELETING = 4
                    }
                }

                /** Properties of a ListModelsRequest. */
                interface IListModelsRequest {

                    /** ListModelsRequest parent */
                    parent?: (string|null);

                    /** ListModelsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListModelsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListModelsRequest filter */
                    filter?: (string|null);

                    /** ListModelsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListModelsRequest. */
                class ListModelsRequest implements IListModelsRequest {

                    /**
                     * Constructs a new ListModelsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IListModelsRequest);

                    /** ListModelsRequest parent. */
                    public parent: string;

                    /** ListModelsRequest pageSize. */
                    public pageSize: number;

                    /** ListModelsRequest pageToken. */
                    public pageToken: string;

                    /** ListModelsRequest filter. */
                    public filter: string;

                    /** ListModelsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListModelsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListModelsRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IListModelsRequest): google.cloud.financialservices.v1.ListModelsRequest;

                    /**
                     * Encodes the specified ListModelsRequest message. Does not implicitly {@link google.cloud.financialservices.v1.ListModelsRequest.verify|verify} messages.
                     * @param message ListModelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IListModelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListModelsRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ListModelsRequest.verify|verify} messages.
                     * @param message ListModelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IListModelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListModelsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListModelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ListModelsRequest;

                    /**
                     * Decodes a ListModelsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListModelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ListModelsRequest;

                    /**
                     * Verifies a ListModelsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListModelsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListModelsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ListModelsRequest;

                    /**
                     * Creates a plain object from a ListModelsRequest message. Also converts values to other types if specified.
                     * @param message ListModelsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ListModelsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListModelsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListModelsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListModelsResponse. */
                interface IListModelsResponse {

                    /** ListModelsResponse models */
                    models?: (google.cloud.financialservices.v1.IModel[]|null);

                    /** ListModelsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListModelsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListModelsResponse. */
                class ListModelsResponse implements IListModelsResponse {

                    /**
                     * Constructs a new ListModelsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IListModelsResponse);

                    /** ListModelsResponse models. */
                    public models: google.cloud.financialservices.v1.IModel[];

                    /** ListModelsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListModelsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListModelsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListModelsResponse instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IListModelsResponse): google.cloud.financialservices.v1.ListModelsResponse;

                    /**
                     * Encodes the specified ListModelsResponse message. Does not implicitly {@link google.cloud.financialservices.v1.ListModelsResponse.verify|verify} messages.
                     * @param message ListModelsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IListModelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListModelsResponse message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ListModelsResponse.verify|verify} messages.
                     * @param message ListModelsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IListModelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListModelsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListModelsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ListModelsResponse;

                    /**
                     * Decodes a ListModelsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListModelsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ListModelsResponse;

                    /**
                     * Verifies a ListModelsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListModelsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListModelsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ListModelsResponse;

                    /**
                     * Creates a plain object from a ListModelsResponse message. Also converts values to other types if specified.
                     * @param message ListModelsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ListModelsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListModelsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListModelsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetModelRequest. */
                interface IGetModelRequest {

                    /** GetModelRequest name */
                    name?: (string|null);
                }

                /** Represents a GetModelRequest. */
                class GetModelRequest implements IGetModelRequest {

                    /**
                     * Constructs a new GetModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IGetModelRequest);

                    /** GetModelRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetModelRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IGetModelRequest): google.cloud.financialservices.v1.GetModelRequest;

                    /**
                     * Encodes the specified GetModelRequest message. Does not implicitly {@link google.cloud.financialservices.v1.GetModelRequest.verify|verify} messages.
                     * @param message GetModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IGetModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetModelRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.GetModelRequest.verify|verify} messages.
                     * @param message GetModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IGetModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.GetModelRequest;

                    /**
                     * Decodes a GetModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.GetModelRequest;

                    /**
                     * Verifies a GetModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.GetModelRequest;

                    /**
                     * Creates a plain object from a GetModelRequest message. Also converts values to other types if specified.
                     * @param message GetModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.GetModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetModelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateModelRequest. */
                interface ICreateModelRequest {

                    /** CreateModelRequest parent */
                    parent?: (string|null);

                    /** CreateModelRequest modelId */
                    modelId?: (string|null);

                    /** CreateModelRequest model */
                    model?: (google.cloud.financialservices.v1.IModel|null);

                    /** CreateModelRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateModelRequest. */
                class CreateModelRequest implements ICreateModelRequest {

                    /**
                     * Constructs a new CreateModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.ICreateModelRequest);

                    /** CreateModelRequest parent. */
                    public parent: string;

                    /** CreateModelRequest modelId. */
                    public modelId: string;

                    /** CreateModelRequest model. */
                    public model?: (google.cloud.financialservices.v1.IModel|null);

                    /** CreateModelRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateModelRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.ICreateModelRequest): google.cloud.financialservices.v1.CreateModelRequest;

                    /**
                     * Encodes the specified CreateModelRequest message. Does not implicitly {@link google.cloud.financialservices.v1.CreateModelRequest.verify|verify} messages.
                     * @param message CreateModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.ICreateModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateModelRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.CreateModelRequest.verify|verify} messages.
                     * @param message CreateModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.ICreateModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.CreateModelRequest;

                    /**
                     * Decodes a CreateModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.CreateModelRequest;

                    /**
                     * Verifies a CreateModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.CreateModelRequest;

                    /**
                     * Creates a plain object from a CreateModelRequest message. Also converts values to other types if specified.
                     * @param message CreateModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.CreateModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateModelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateModelRequest. */
                interface IUpdateModelRequest {

                    /** UpdateModelRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateModelRequest model */
                    model?: (google.cloud.financialservices.v1.IModel|null);

                    /** UpdateModelRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateModelRequest. */
                class UpdateModelRequest implements IUpdateModelRequest {

                    /**
                     * Constructs a new UpdateModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IUpdateModelRequest);

                    /** UpdateModelRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateModelRequest model. */
                    public model?: (google.cloud.financialservices.v1.IModel|null);

                    /** UpdateModelRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateModelRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IUpdateModelRequest): google.cloud.financialservices.v1.UpdateModelRequest;

                    /**
                     * Encodes the specified UpdateModelRequest message. Does not implicitly {@link google.cloud.financialservices.v1.UpdateModelRequest.verify|verify} messages.
                     * @param message UpdateModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IUpdateModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateModelRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.UpdateModelRequest.verify|verify} messages.
                     * @param message UpdateModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IUpdateModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.UpdateModelRequest;

                    /**
                     * Decodes an UpdateModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.UpdateModelRequest;

                    /**
                     * Verifies an UpdateModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.UpdateModelRequest;

                    /**
                     * Creates a plain object from an UpdateModelRequest message. Also converts values to other types if specified.
                     * @param message UpdateModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.UpdateModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateModelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteModelRequest. */
                interface IDeleteModelRequest {

                    /** DeleteModelRequest name */
                    name?: (string|null);

                    /** DeleteModelRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteModelRequest. */
                class DeleteModelRequest implements IDeleteModelRequest {

                    /**
                     * Constructs a new DeleteModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IDeleteModelRequest);

                    /** DeleteModelRequest name. */
                    public name: string;

                    /** DeleteModelRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteModelRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IDeleteModelRequest): google.cloud.financialservices.v1.DeleteModelRequest;

                    /**
                     * Encodes the specified DeleteModelRequest message. Does not implicitly {@link google.cloud.financialservices.v1.DeleteModelRequest.verify|verify} messages.
                     * @param message DeleteModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IDeleteModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteModelRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.DeleteModelRequest.verify|verify} messages.
                     * @param message DeleteModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IDeleteModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.DeleteModelRequest;

                    /**
                     * Decodes a DeleteModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.DeleteModelRequest;

                    /**
                     * Verifies a DeleteModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.DeleteModelRequest;

                    /**
                     * Creates a plain object from a DeleteModelRequest message. Also converts values to other types if specified.
                     * @param message DeleteModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.DeleteModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteModelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportModelMetadataRequest. */
                interface IExportModelMetadataRequest {

                    /** ExportModelMetadataRequest model */
                    model?: (string|null);

                    /** ExportModelMetadataRequest structuredMetadataDestination */
                    structuredMetadataDestination?: (google.cloud.financialservices.v1.IBigQueryDestination|null);
                }

                /** Represents an ExportModelMetadataRequest. */
                class ExportModelMetadataRequest implements IExportModelMetadataRequest {

                    /**
                     * Constructs a new ExportModelMetadataRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IExportModelMetadataRequest);

                    /** ExportModelMetadataRequest model. */
                    public model: string;

                    /** ExportModelMetadataRequest structuredMetadataDestination. */
                    public structuredMetadataDestination?: (google.cloud.financialservices.v1.IBigQueryDestination|null);

                    /**
                     * Creates a new ExportModelMetadataRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportModelMetadataRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IExportModelMetadataRequest): google.cloud.financialservices.v1.ExportModelMetadataRequest;

                    /**
                     * Encodes the specified ExportModelMetadataRequest message. Does not implicitly {@link google.cloud.financialservices.v1.ExportModelMetadataRequest.verify|verify} messages.
                     * @param message ExportModelMetadataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IExportModelMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportModelMetadataRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ExportModelMetadataRequest.verify|verify} messages.
                     * @param message ExportModelMetadataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IExportModelMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportModelMetadataRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportModelMetadataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ExportModelMetadataRequest;

                    /**
                     * Decodes an ExportModelMetadataRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportModelMetadataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ExportModelMetadataRequest;

                    /**
                     * Verifies an ExportModelMetadataRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportModelMetadataRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportModelMetadataRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ExportModelMetadataRequest;

                    /**
                     * Creates a plain object from an ExportModelMetadataRequest message. Also converts values to other types if specified.
                     * @param message ExportModelMetadataRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ExportModelMetadataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportModelMetadataRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportModelMetadataRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportModelMetadataResponse. */
                interface IExportModelMetadataResponse {
                }

                /** Represents an ExportModelMetadataResponse. */
                class ExportModelMetadataResponse implements IExportModelMetadataResponse {

                    /**
                     * Constructs a new ExportModelMetadataResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IExportModelMetadataResponse);

                    /**
                     * Creates a new ExportModelMetadataResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportModelMetadataResponse instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IExportModelMetadataResponse): google.cloud.financialservices.v1.ExportModelMetadataResponse;

                    /**
                     * Encodes the specified ExportModelMetadataResponse message. Does not implicitly {@link google.cloud.financialservices.v1.ExportModelMetadataResponse.verify|verify} messages.
                     * @param message ExportModelMetadataResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IExportModelMetadataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportModelMetadataResponse message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ExportModelMetadataResponse.verify|verify} messages.
                     * @param message ExportModelMetadataResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IExportModelMetadataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportModelMetadataResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportModelMetadataResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ExportModelMetadataResponse;

                    /**
                     * Decodes an ExportModelMetadataResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportModelMetadataResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ExportModelMetadataResponse;

                    /**
                     * Verifies an ExportModelMetadataResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportModelMetadataResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportModelMetadataResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ExportModelMetadataResponse;

                    /**
                     * Creates a plain object from an ExportModelMetadataResponse message. Also converts values to other types if specified.
                     * @param message ExportModelMetadataResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ExportModelMetadataResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportModelMetadataResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportModelMetadataResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PredictionResult. */
                interface IPredictionResult {

                    /** PredictionResult name */
                    name?: (string|null);

                    /** PredictionResult createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** PredictionResult updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** PredictionResult labels */
                    labels?: ({ [k: string]: string }|null);

                    /** PredictionResult state */
                    state?: (google.cloud.financialservices.v1.PredictionResult.State|keyof typeof google.cloud.financialservices.v1.PredictionResult.State|null);

                    /** PredictionResult dataset */
                    dataset?: (string|null);

                    /** PredictionResult model */
                    model?: (string|null);

                    /** PredictionResult endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** PredictionResult predictionPeriods */
                    predictionPeriods?: (number|null);

                    /** PredictionResult outputs */
                    outputs?: (google.cloud.financialservices.v1.PredictionResult.IOutputs|null);

                    /** PredictionResult lineOfBusiness */
                    lineOfBusiness?: (google.cloud.financialservices.v1.LineOfBusiness|keyof typeof google.cloud.financialservices.v1.LineOfBusiness|null);
                }

                /** Represents a PredictionResult. */
                class PredictionResult implements IPredictionResult {

                    /**
                     * Constructs a new PredictionResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IPredictionResult);

                    /** PredictionResult name. */
                    public name: string;

                    /** PredictionResult createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** PredictionResult updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** PredictionResult labels. */
                    public labels: { [k: string]: string };

                    /** PredictionResult state. */
                    public state: (google.cloud.financialservices.v1.PredictionResult.State|keyof typeof google.cloud.financialservices.v1.PredictionResult.State);

                    /** PredictionResult dataset. */
                    public dataset: string;

                    /** PredictionResult model. */
                    public model: string;

                    /** PredictionResult endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** PredictionResult predictionPeriods. */
                    public predictionPeriods: number;

                    /** PredictionResult outputs. */
                    public outputs?: (google.cloud.financialservices.v1.PredictionResult.IOutputs|null);

                    /** PredictionResult lineOfBusiness. */
                    public lineOfBusiness: (google.cloud.financialservices.v1.LineOfBusiness|keyof typeof google.cloud.financialservices.v1.LineOfBusiness);

                    /**
                     * Creates a new PredictionResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PredictionResult instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IPredictionResult): google.cloud.financialservices.v1.PredictionResult;

                    /**
                     * Encodes the specified PredictionResult message. Does not implicitly {@link google.cloud.financialservices.v1.PredictionResult.verify|verify} messages.
                     * @param message PredictionResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IPredictionResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PredictionResult message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.PredictionResult.verify|verify} messages.
                     * @param message PredictionResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IPredictionResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PredictionResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PredictionResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.PredictionResult;

                    /**
                     * Decodes a PredictionResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PredictionResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.PredictionResult;

                    /**
                     * Verifies a PredictionResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PredictionResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PredictionResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.PredictionResult;

                    /**
                     * Creates a plain object from a PredictionResult message. Also converts values to other types if specified.
                     * @param message PredictionResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.PredictionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PredictionResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PredictionResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PredictionResult {

                    /** Properties of an Outputs. */
                    interface IOutputs {

                        /** Outputs predictionDestination */
                        predictionDestination?: (google.cloud.financialservices.v1.IBigQueryDestination|null);

                        /** Outputs explainabilityDestination */
                        explainabilityDestination?: (google.cloud.financialservices.v1.IBigQueryDestination|null);
                    }

                    /** Represents an Outputs. */
                    class Outputs implements IOutputs {

                        /**
                         * Constructs a new Outputs.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.financialservices.v1.PredictionResult.IOutputs);

                        /** Outputs predictionDestination. */
                        public predictionDestination?: (google.cloud.financialservices.v1.IBigQueryDestination|null);

                        /** Outputs explainabilityDestination. */
                        public explainabilityDestination?: (google.cloud.financialservices.v1.IBigQueryDestination|null);

                        /**
                         * Creates a new Outputs instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Outputs instance
                         */
                        public static create(properties?: google.cloud.financialservices.v1.PredictionResult.IOutputs): google.cloud.financialservices.v1.PredictionResult.Outputs;

                        /**
                         * Encodes the specified Outputs message. Does not implicitly {@link google.cloud.financialservices.v1.PredictionResult.Outputs.verify|verify} messages.
                         * @param message Outputs message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.financialservices.v1.PredictionResult.IOutputs, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Outputs message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.PredictionResult.Outputs.verify|verify} messages.
                         * @param message Outputs message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.financialservices.v1.PredictionResult.IOutputs, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Outputs message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Outputs
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.PredictionResult.Outputs;

                        /**
                         * Decodes an Outputs message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Outputs
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.PredictionResult.Outputs;

                        /**
                         * Verifies an Outputs message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Outputs message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Outputs
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.PredictionResult.Outputs;

                        /**
                         * Creates a plain object from an Outputs message. Also converts values to other types if specified.
                         * @param message Outputs
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.financialservices.v1.PredictionResult.Outputs, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Outputs to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Outputs
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
                        UPDATING = 3,
                        DELETING = 4
                    }
                }

                /** Properties of a ListPredictionResultsRequest. */
                interface IListPredictionResultsRequest {

                    /** ListPredictionResultsRequest parent */
                    parent?: (string|null);

                    /** ListPredictionResultsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPredictionResultsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListPredictionResultsRequest filter */
                    filter?: (string|null);

                    /** ListPredictionResultsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListPredictionResultsRequest. */
                class ListPredictionResultsRequest implements IListPredictionResultsRequest {

                    /**
                     * Constructs a new ListPredictionResultsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IListPredictionResultsRequest);

                    /** ListPredictionResultsRequest parent. */
                    public parent: string;

                    /** ListPredictionResultsRequest pageSize. */
                    public pageSize: number;

                    /** ListPredictionResultsRequest pageToken. */
                    public pageToken: string;

                    /** ListPredictionResultsRequest filter. */
                    public filter: string;

                    /** ListPredictionResultsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListPredictionResultsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPredictionResultsRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IListPredictionResultsRequest): google.cloud.financialservices.v1.ListPredictionResultsRequest;

                    /**
                     * Encodes the specified ListPredictionResultsRequest message. Does not implicitly {@link google.cloud.financialservices.v1.ListPredictionResultsRequest.verify|verify} messages.
                     * @param message ListPredictionResultsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IListPredictionResultsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPredictionResultsRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ListPredictionResultsRequest.verify|verify} messages.
                     * @param message ListPredictionResultsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IListPredictionResultsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPredictionResultsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPredictionResultsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ListPredictionResultsRequest;

                    /**
                     * Decodes a ListPredictionResultsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPredictionResultsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ListPredictionResultsRequest;

                    /**
                     * Verifies a ListPredictionResultsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPredictionResultsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPredictionResultsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ListPredictionResultsRequest;

                    /**
                     * Creates a plain object from a ListPredictionResultsRequest message. Also converts values to other types if specified.
                     * @param message ListPredictionResultsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ListPredictionResultsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPredictionResultsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPredictionResultsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPredictionResultsResponse. */
                interface IListPredictionResultsResponse {

                    /** ListPredictionResultsResponse predictionResults */
                    predictionResults?: (google.cloud.financialservices.v1.IPredictionResult[]|null);

                    /** ListPredictionResultsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListPredictionResultsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListPredictionResultsResponse. */
                class ListPredictionResultsResponse implements IListPredictionResultsResponse {

                    /**
                     * Constructs a new ListPredictionResultsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IListPredictionResultsResponse);

                    /** ListPredictionResultsResponse predictionResults. */
                    public predictionResults: google.cloud.financialservices.v1.IPredictionResult[];

                    /** ListPredictionResultsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListPredictionResultsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListPredictionResultsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPredictionResultsResponse instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IListPredictionResultsResponse): google.cloud.financialservices.v1.ListPredictionResultsResponse;

                    /**
                     * Encodes the specified ListPredictionResultsResponse message. Does not implicitly {@link google.cloud.financialservices.v1.ListPredictionResultsResponse.verify|verify} messages.
                     * @param message ListPredictionResultsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IListPredictionResultsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPredictionResultsResponse message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ListPredictionResultsResponse.verify|verify} messages.
                     * @param message ListPredictionResultsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IListPredictionResultsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPredictionResultsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPredictionResultsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ListPredictionResultsResponse;

                    /**
                     * Decodes a ListPredictionResultsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPredictionResultsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ListPredictionResultsResponse;

                    /**
                     * Verifies a ListPredictionResultsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPredictionResultsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPredictionResultsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ListPredictionResultsResponse;

                    /**
                     * Creates a plain object from a ListPredictionResultsResponse message. Also converts values to other types if specified.
                     * @param message ListPredictionResultsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ListPredictionResultsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPredictionResultsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPredictionResultsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPredictionResultRequest. */
                interface IGetPredictionResultRequest {

                    /** GetPredictionResultRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPredictionResultRequest. */
                class GetPredictionResultRequest implements IGetPredictionResultRequest {

                    /**
                     * Constructs a new GetPredictionResultRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IGetPredictionResultRequest);

                    /** GetPredictionResultRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPredictionResultRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPredictionResultRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IGetPredictionResultRequest): google.cloud.financialservices.v1.GetPredictionResultRequest;

                    /**
                     * Encodes the specified GetPredictionResultRequest message. Does not implicitly {@link google.cloud.financialservices.v1.GetPredictionResultRequest.verify|verify} messages.
                     * @param message GetPredictionResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IGetPredictionResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPredictionResultRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.GetPredictionResultRequest.verify|verify} messages.
                     * @param message GetPredictionResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IGetPredictionResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPredictionResultRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPredictionResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.GetPredictionResultRequest;

                    /**
                     * Decodes a GetPredictionResultRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPredictionResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.GetPredictionResultRequest;

                    /**
                     * Verifies a GetPredictionResultRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPredictionResultRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPredictionResultRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.GetPredictionResultRequest;

                    /**
                     * Creates a plain object from a GetPredictionResultRequest message. Also converts values to other types if specified.
                     * @param message GetPredictionResultRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.GetPredictionResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPredictionResultRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPredictionResultRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreatePredictionResultRequest. */
                interface ICreatePredictionResultRequest {

                    /** CreatePredictionResultRequest parent */
                    parent?: (string|null);

                    /** CreatePredictionResultRequest predictionResultId */
                    predictionResultId?: (string|null);

                    /** CreatePredictionResultRequest predictionResult */
                    predictionResult?: (google.cloud.financialservices.v1.IPredictionResult|null);

                    /** CreatePredictionResultRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreatePredictionResultRequest. */
                class CreatePredictionResultRequest implements ICreatePredictionResultRequest {

                    /**
                     * Constructs a new CreatePredictionResultRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.ICreatePredictionResultRequest);

                    /** CreatePredictionResultRequest parent. */
                    public parent: string;

                    /** CreatePredictionResultRequest predictionResultId. */
                    public predictionResultId: string;

                    /** CreatePredictionResultRequest predictionResult. */
                    public predictionResult?: (google.cloud.financialservices.v1.IPredictionResult|null);

                    /** CreatePredictionResultRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreatePredictionResultRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePredictionResultRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.ICreatePredictionResultRequest): google.cloud.financialservices.v1.CreatePredictionResultRequest;

                    /**
                     * Encodes the specified CreatePredictionResultRequest message. Does not implicitly {@link google.cloud.financialservices.v1.CreatePredictionResultRequest.verify|verify} messages.
                     * @param message CreatePredictionResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.ICreatePredictionResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePredictionResultRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.CreatePredictionResultRequest.verify|verify} messages.
                     * @param message CreatePredictionResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.ICreatePredictionResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePredictionResultRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePredictionResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.CreatePredictionResultRequest;

                    /**
                     * Decodes a CreatePredictionResultRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePredictionResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.CreatePredictionResultRequest;

                    /**
                     * Verifies a CreatePredictionResultRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePredictionResultRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePredictionResultRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.CreatePredictionResultRequest;

                    /**
                     * Creates a plain object from a CreatePredictionResultRequest message. Also converts values to other types if specified.
                     * @param message CreatePredictionResultRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.CreatePredictionResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePredictionResultRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreatePredictionResultRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdatePredictionResultRequest. */
                interface IUpdatePredictionResultRequest {

                    /** UpdatePredictionResultRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdatePredictionResultRequest predictionResult */
                    predictionResult?: (google.cloud.financialservices.v1.IPredictionResult|null);

                    /** UpdatePredictionResultRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdatePredictionResultRequest. */
                class UpdatePredictionResultRequest implements IUpdatePredictionResultRequest {

                    /**
                     * Constructs a new UpdatePredictionResultRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IUpdatePredictionResultRequest);

                    /** UpdatePredictionResultRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdatePredictionResultRequest predictionResult. */
                    public predictionResult?: (google.cloud.financialservices.v1.IPredictionResult|null);

                    /** UpdatePredictionResultRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdatePredictionResultRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdatePredictionResultRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IUpdatePredictionResultRequest): google.cloud.financialservices.v1.UpdatePredictionResultRequest;

                    /**
                     * Encodes the specified UpdatePredictionResultRequest message. Does not implicitly {@link google.cloud.financialservices.v1.UpdatePredictionResultRequest.verify|verify} messages.
                     * @param message UpdatePredictionResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IUpdatePredictionResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdatePredictionResultRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.UpdatePredictionResultRequest.verify|verify} messages.
                     * @param message UpdatePredictionResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IUpdatePredictionResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdatePredictionResultRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdatePredictionResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.UpdatePredictionResultRequest;

                    /**
                     * Decodes an UpdatePredictionResultRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdatePredictionResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.UpdatePredictionResultRequest;

                    /**
                     * Verifies an UpdatePredictionResultRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdatePredictionResultRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdatePredictionResultRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.UpdatePredictionResultRequest;

                    /**
                     * Creates a plain object from an UpdatePredictionResultRequest message. Also converts values to other types if specified.
                     * @param message UpdatePredictionResultRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.UpdatePredictionResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdatePredictionResultRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdatePredictionResultRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeletePredictionResultRequest. */
                interface IDeletePredictionResultRequest {

                    /** DeletePredictionResultRequest name */
                    name?: (string|null);

                    /** DeletePredictionResultRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeletePredictionResultRequest. */
                class DeletePredictionResultRequest implements IDeletePredictionResultRequest {

                    /**
                     * Constructs a new DeletePredictionResultRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IDeletePredictionResultRequest);

                    /** DeletePredictionResultRequest name. */
                    public name: string;

                    /** DeletePredictionResultRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeletePredictionResultRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePredictionResultRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IDeletePredictionResultRequest): google.cloud.financialservices.v1.DeletePredictionResultRequest;

                    /**
                     * Encodes the specified DeletePredictionResultRequest message. Does not implicitly {@link google.cloud.financialservices.v1.DeletePredictionResultRequest.verify|verify} messages.
                     * @param message DeletePredictionResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IDeletePredictionResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePredictionResultRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.DeletePredictionResultRequest.verify|verify} messages.
                     * @param message DeletePredictionResultRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IDeletePredictionResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePredictionResultRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePredictionResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.DeletePredictionResultRequest;

                    /**
                     * Decodes a DeletePredictionResultRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePredictionResultRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.DeletePredictionResultRequest;

                    /**
                     * Verifies a DeletePredictionResultRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePredictionResultRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePredictionResultRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.DeletePredictionResultRequest;

                    /**
                     * Creates a plain object from a DeletePredictionResultRequest message. Also converts values to other types if specified.
                     * @param message DeletePredictionResultRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.DeletePredictionResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePredictionResultRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeletePredictionResultRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportPredictionResultMetadataRequest. */
                interface IExportPredictionResultMetadataRequest {

                    /** ExportPredictionResultMetadataRequest predictionResult */
                    predictionResult?: (string|null);

                    /** ExportPredictionResultMetadataRequest structuredMetadataDestination */
                    structuredMetadataDestination?: (google.cloud.financialservices.v1.IBigQueryDestination|null);
                }

                /** Represents an ExportPredictionResultMetadataRequest. */
                class ExportPredictionResultMetadataRequest implements IExportPredictionResultMetadataRequest {

                    /**
                     * Constructs a new ExportPredictionResultMetadataRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IExportPredictionResultMetadataRequest);

                    /** ExportPredictionResultMetadataRequest predictionResult. */
                    public predictionResult: string;

                    /** ExportPredictionResultMetadataRequest structuredMetadataDestination. */
                    public structuredMetadataDestination?: (google.cloud.financialservices.v1.IBigQueryDestination|null);

                    /**
                     * Creates a new ExportPredictionResultMetadataRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportPredictionResultMetadataRequest instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IExportPredictionResultMetadataRequest): google.cloud.financialservices.v1.ExportPredictionResultMetadataRequest;

                    /**
                     * Encodes the specified ExportPredictionResultMetadataRequest message. Does not implicitly {@link google.cloud.financialservices.v1.ExportPredictionResultMetadataRequest.verify|verify} messages.
                     * @param message ExportPredictionResultMetadataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IExportPredictionResultMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportPredictionResultMetadataRequest message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ExportPredictionResultMetadataRequest.verify|verify} messages.
                     * @param message ExportPredictionResultMetadataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IExportPredictionResultMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportPredictionResultMetadataRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportPredictionResultMetadataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ExportPredictionResultMetadataRequest;

                    /**
                     * Decodes an ExportPredictionResultMetadataRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportPredictionResultMetadataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ExportPredictionResultMetadataRequest;

                    /**
                     * Verifies an ExportPredictionResultMetadataRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportPredictionResultMetadataRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportPredictionResultMetadataRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ExportPredictionResultMetadataRequest;

                    /**
                     * Creates a plain object from an ExportPredictionResultMetadataRequest message. Also converts values to other types if specified.
                     * @param message ExportPredictionResultMetadataRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ExportPredictionResultMetadataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportPredictionResultMetadataRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportPredictionResultMetadataRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportPredictionResultMetadataResponse. */
                interface IExportPredictionResultMetadataResponse {
                }

                /** Represents an ExportPredictionResultMetadataResponse. */
                class ExportPredictionResultMetadataResponse implements IExportPredictionResultMetadataResponse {

                    /**
                     * Constructs a new ExportPredictionResultMetadataResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.financialservices.v1.IExportPredictionResultMetadataResponse);

                    /**
                     * Creates a new ExportPredictionResultMetadataResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportPredictionResultMetadataResponse instance
                     */
                    public static create(properties?: google.cloud.financialservices.v1.IExportPredictionResultMetadataResponse): google.cloud.financialservices.v1.ExportPredictionResultMetadataResponse;

                    /**
                     * Encodes the specified ExportPredictionResultMetadataResponse message. Does not implicitly {@link google.cloud.financialservices.v1.ExportPredictionResultMetadataResponse.verify|verify} messages.
                     * @param message ExportPredictionResultMetadataResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IExportPredictionResultMetadataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportPredictionResultMetadataResponse message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.ExportPredictionResultMetadataResponse.verify|verify} messages.
                     * @param message ExportPredictionResultMetadataResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IExportPredictionResultMetadataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportPredictionResultMetadataResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportPredictionResultMetadataResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.ExportPredictionResultMetadataResponse;

                    /**
                     * Decodes an ExportPredictionResultMetadataResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportPredictionResultMetadataResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.ExportPredictionResultMetadataResponse;

                    /**
                     * Verifies an ExportPredictionResultMetadataResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportPredictionResultMetadataResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportPredictionResultMetadataResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.ExportPredictionResultMetadataResponse;

                    /**
                     * Creates a plain object from an ExportPredictionResultMetadataResponse message. Also converts values to other types if specified.
                     * @param message ExportPredictionResultMetadataResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.ExportPredictionResultMetadataResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportPredictionResultMetadataResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportPredictionResultMetadataResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a AML */
                class AML extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new AML service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new AML service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AML;

                    /**
                     * Calls ListInstances.
                     * @param request ListInstancesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListInstancesResponse
                     */
                    public listInstances(request: google.cloud.financialservices.v1.IListInstancesRequest, callback: google.cloud.financialservices.v1.AML.ListInstancesCallback): void;

                    /**
                     * Calls ListInstances.
                     * @param request ListInstancesRequest message or plain object
                     * @returns Promise
                     */
                    public listInstances(request: google.cloud.financialservices.v1.IListInstancesRequest): Promise<google.cloud.financialservices.v1.ListInstancesResponse>;

                    /**
                     * Calls GetInstance.
                     * @param request GetInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Instance
                     */
                    public getInstance(request: google.cloud.financialservices.v1.IGetInstanceRequest, callback: google.cloud.financialservices.v1.AML.GetInstanceCallback): void;

                    /**
                     * Calls GetInstance.
                     * @param request GetInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public getInstance(request: google.cloud.financialservices.v1.IGetInstanceRequest): Promise<google.cloud.financialservices.v1.Instance>;

                    /**
                     * Calls CreateInstance.
                     * @param request CreateInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createInstance(request: google.cloud.financialservices.v1.ICreateInstanceRequest, callback: google.cloud.financialservices.v1.AML.CreateInstanceCallback): void;

                    /**
                     * Calls CreateInstance.
                     * @param request CreateInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public createInstance(request: google.cloud.financialservices.v1.ICreateInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateInstance.
                     * @param request UpdateInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateInstance(request: google.cloud.financialservices.v1.IUpdateInstanceRequest, callback: google.cloud.financialservices.v1.AML.UpdateInstanceCallback): void;

                    /**
                     * Calls UpdateInstance.
                     * @param request UpdateInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public updateInstance(request: google.cloud.financialservices.v1.IUpdateInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteInstance.
                     * @param request DeleteInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteInstance(request: google.cloud.financialservices.v1.IDeleteInstanceRequest, callback: google.cloud.financialservices.v1.AML.DeleteInstanceCallback): void;

                    /**
                     * Calls DeleteInstance.
                     * @param request DeleteInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public deleteInstance(request: google.cloud.financialservices.v1.IDeleteInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ImportRegisteredParties.
                     * @param request ImportRegisteredPartiesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public importRegisteredParties(request: google.cloud.financialservices.v1.IImportRegisteredPartiesRequest, callback: google.cloud.financialservices.v1.AML.ImportRegisteredPartiesCallback): void;

                    /**
                     * Calls ImportRegisteredParties.
                     * @param request ImportRegisteredPartiesRequest message or plain object
                     * @returns Promise
                     */
                    public importRegisteredParties(request: google.cloud.financialservices.v1.IImportRegisteredPartiesRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ExportRegisteredParties.
                     * @param request ExportRegisteredPartiesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public exportRegisteredParties(request: google.cloud.financialservices.v1.IExportRegisteredPartiesRequest, callback: google.cloud.financialservices.v1.AML.ExportRegisteredPartiesCallback): void;

                    /**
                     * Calls ExportRegisteredParties.
                     * @param request ExportRegisteredPartiesRequest message or plain object
                     * @returns Promise
                     */
                    public exportRegisteredParties(request: google.cloud.financialservices.v1.IExportRegisteredPartiesRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListDatasets.
                     * @param request ListDatasetsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListDatasetsResponse
                     */
                    public listDatasets(request: google.cloud.financialservices.v1.IListDatasetsRequest, callback: google.cloud.financialservices.v1.AML.ListDatasetsCallback): void;

                    /**
                     * Calls ListDatasets.
                     * @param request ListDatasetsRequest message or plain object
                     * @returns Promise
                     */
                    public listDatasets(request: google.cloud.financialservices.v1.IListDatasetsRequest): Promise<google.cloud.financialservices.v1.ListDatasetsResponse>;

                    /**
                     * Calls GetDataset.
                     * @param request GetDatasetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Dataset
                     */
                    public getDataset(request: google.cloud.financialservices.v1.IGetDatasetRequest, callback: google.cloud.financialservices.v1.AML.GetDatasetCallback): void;

                    /**
                     * Calls GetDataset.
                     * @param request GetDatasetRequest message or plain object
                     * @returns Promise
                     */
                    public getDataset(request: google.cloud.financialservices.v1.IGetDatasetRequest): Promise<google.cloud.financialservices.v1.Dataset>;

                    /**
                     * Calls CreateDataset.
                     * @param request CreateDatasetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createDataset(request: google.cloud.financialservices.v1.ICreateDatasetRequest, callback: google.cloud.financialservices.v1.AML.CreateDatasetCallback): void;

                    /**
                     * Calls CreateDataset.
                     * @param request CreateDatasetRequest message or plain object
                     * @returns Promise
                     */
                    public createDataset(request: google.cloud.financialservices.v1.ICreateDatasetRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateDataset.
                     * @param request UpdateDatasetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateDataset(request: google.cloud.financialservices.v1.IUpdateDatasetRequest, callback: google.cloud.financialservices.v1.AML.UpdateDatasetCallback): void;

                    /**
                     * Calls UpdateDataset.
                     * @param request UpdateDatasetRequest message or plain object
                     * @returns Promise
                     */
                    public updateDataset(request: google.cloud.financialservices.v1.IUpdateDatasetRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteDataset.
                     * @param request DeleteDatasetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteDataset(request: google.cloud.financialservices.v1.IDeleteDatasetRequest, callback: google.cloud.financialservices.v1.AML.DeleteDatasetCallback): void;

                    /**
                     * Calls DeleteDataset.
                     * @param request DeleteDatasetRequest message or plain object
                     * @returns Promise
                     */
                    public deleteDataset(request: google.cloud.financialservices.v1.IDeleteDatasetRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListModels.
                     * @param request ListModelsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListModelsResponse
                     */
                    public listModels(request: google.cloud.financialservices.v1.IListModelsRequest, callback: google.cloud.financialservices.v1.AML.ListModelsCallback): void;

                    /**
                     * Calls ListModels.
                     * @param request ListModelsRequest message or plain object
                     * @returns Promise
                     */
                    public listModels(request: google.cloud.financialservices.v1.IListModelsRequest): Promise<google.cloud.financialservices.v1.ListModelsResponse>;

                    /**
                     * Calls GetModel.
                     * @param request GetModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Model
                     */
                    public getModel(request: google.cloud.financialservices.v1.IGetModelRequest, callback: google.cloud.financialservices.v1.AML.GetModelCallback): void;

                    /**
                     * Calls GetModel.
                     * @param request GetModelRequest message or plain object
                     * @returns Promise
                     */
                    public getModel(request: google.cloud.financialservices.v1.IGetModelRequest): Promise<google.cloud.financialservices.v1.Model>;

                    /**
                     * Calls CreateModel.
                     * @param request CreateModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createModel(request: google.cloud.financialservices.v1.ICreateModelRequest, callback: google.cloud.financialservices.v1.AML.CreateModelCallback): void;

                    /**
                     * Calls CreateModel.
                     * @param request CreateModelRequest message or plain object
                     * @returns Promise
                     */
                    public createModel(request: google.cloud.financialservices.v1.ICreateModelRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateModel.
                     * @param request UpdateModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateModel(request: google.cloud.financialservices.v1.IUpdateModelRequest, callback: google.cloud.financialservices.v1.AML.UpdateModelCallback): void;

                    /**
                     * Calls UpdateModel.
                     * @param request UpdateModelRequest message or plain object
                     * @returns Promise
                     */
                    public updateModel(request: google.cloud.financialservices.v1.IUpdateModelRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ExportModelMetadata.
                     * @param request ExportModelMetadataRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public exportModelMetadata(request: google.cloud.financialservices.v1.IExportModelMetadataRequest, callback: google.cloud.financialservices.v1.AML.ExportModelMetadataCallback): void;

                    /**
                     * Calls ExportModelMetadata.
                     * @param request ExportModelMetadataRequest message or plain object
                     * @returns Promise
                     */
                    public exportModelMetadata(request: google.cloud.financialservices.v1.IExportModelMetadataRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteModel.
                     * @param request DeleteModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteModel(request: google.cloud.financialservices.v1.IDeleteModelRequest, callback: google.cloud.financialservices.v1.AML.DeleteModelCallback): void;

                    /**
                     * Calls DeleteModel.
                     * @param request DeleteModelRequest message or plain object
                     * @returns Promise
                     */
                    public deleteModel(request: google.cloud.financialservices.v1.IDeleteModelRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListEngineConfigs.
                     * @param request ListEngineConfigsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListEngineConfigsResponse
                     */
                    public listEngineConfigs(request: google.cloud.financialservices.v1.IListEngineConfigsRequest, callback: google.cloud.financialservices.v1.AML.ListEngineConfigsCallback): void;

                    /**
                     * Calls ListEngineConfigs.
                     * @param request ListEngineConfigsRequest message or plain object
                     * @returns Promise
                     */
                    public listEngineConfigs(request: google.cloud.financialservices.v1.IListEngineConfigsRequest): Promise<google.cloud.financialservices.v1.ListEngineConfigsResponse>;

                    /**
                     * Calls GetEngineConfig.
                     * @param request GetEngineConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EngineConfig
                     */
                    public getEngineConfig(request: google.cloud.financialservices.v1.IGetEngineConfigRequest, callback: google.cloud.financialservices.v1.AML.GetEngineConfigCallback): void;

                    /**
                     * Calls GetEngineConfig.
                     * @param request GetEngineConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getEngineConfig(request: google.cloud.financialservices.v1.IGetEngineConfigRequest): Promise<google.cloud.financialservices.v1.EngineConfig>;

                    /**
                     * Calls CreateEngineConfig.
                     * @param request CreateEngineConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createEngineConfig(request: google.cloud.financialservices.v1.ICreateEngineConfigRequest, callback: google.cloud.financialservices.v1.AML.CreateEngineConfigCallback): void;

                    /**
                     * Calls CreateEngineConfig.
                     * @param request CreateEngineConfigRequest message or plain object
                     * @returns Promise
                     */
                    public createEngineConfig(request: google.cloud.financialservices.v1.ICreateEngineConfigRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateEngineConfig.
                     * @param request UpdateEngineConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateEngineConfig(request: google.cloud.financialservices.v1.IUpdateEngineConfigRequest, callback: google.cloud.financialservices.v1.AML.UpdateEngineConfigCallback): void;

                    /**
                     * Calls UpdateEngineConfig.
                     * @param request UpdateEngineConfigRequest message or plain object
                     * @returns Promise
                     */
                    public updateEngineConfig(request: google.cloud.financialservices.v1.IUpdateEngineConfigRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ExportEngineConfigMetadata.
                     * @param request ExportEngineConfigMetadataRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public exportEngineConfigMetadata(request: google.cloud.financialservices.v1.IExportEngineConfigMetadataRequest, callback: google.cloud.financialservices.v1.AML.ExportEngineConfigMetadataCallback): void;

                    /**
                     * Calls ExportEngineConfigMetadata.
                     * @param request ExportEngineConfigMetadataRequest message or plain object
                     * @returns Promise
                     */
                    public exportEngineConfigMetadata(request: google.cloud.financialservices.v1.IExportEngineConfigMetadataRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteEngineConfig.
                     * @param request DeleteEngineConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteEngineConfig(request: google.cloud.financialservices.v1.IDeleteEngineConfigRequest, callback: google.cloud.financialservices.v1.AML.DeleteEngineConfigCallback): void;

                    /**
                     * Calls DeleteEngineConfig.
                     * @param request DeleteEngineConfigRequest message or plain object
                     * @returns Promise
                     */
                    public deleteEngineConfig(request: google.cloud.financialservices.v1.IDeleteEngineConfigRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetEngineVersion.
                     * @param request GetEngineVersionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EngineVersion
                     */
                    public getEngineVersion(request: google.cloud.financialservices.v1.IGetEngineVersionRequest, callback: google.cloud.financialservices.v1.AML.GetEngineVersionCallback): void;

                    /**
                     * Calls GetEngineVersion.
                     * @param request GetEngineVersionRequest message or plain object
                     * @returns Promise
                     */
                    public getEngineVersion(request: google.cloud.financialservices.v1.IGetEngineVersionRequest): Promise<google.cloud.financialservices.v1.EngineVersion>;

                    /**
                     * Calls ListEngineVersions.
                     * @param request ListEngineVersionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListEngineVersionsResponse
                     */
                    public listEngineVersions(request: google.cloud.financialservices.v1.IListEngineVersionsRequest, callback: google.cloud.financialservices.v1.AML.ListEngineVersionsCallback): void;

                    /**
                     * Calls ListEngineVersions.
                     * @param request ListEngineVersionsRequest message or plain object
                     * @returns Promise
                     */
                    public listEngineVersions(request: google.cloud.financialservices.v1.IListEngineVersionsRequest): Promise<google.cloud.financialservices.v1.ListEngineVersionsResponse>;

                    /**
                     * Calls ListPredictionResults.
                     * @param request ListPredictionResultsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPredictionResultsResponse
                     */
                    public listPredictionResults(request: google.cloud.financialservices.v1.IListPredictionResultsRequest, callback: google.cloud.financialservices.v1.AML.ListPredictionResultsCallback): void;

                    /**
                     * Calls ListPredictionResults.
                     * @param request ListPredictionResultsRequest message or plain object
                     * @returns Promise
                     */
                    public listPredictionResults(request: google.cloud.financialservices.v1.IListPredictionResultsRequest): Promise<google.cloud.financialservices.v1.ListPredictionResultsResponse>;

                    /**
                     * Calls GetPredictionResult.
                     * @param request GetPredictionResultRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PredictionResult
                     */
                    public getPredictionResult(request: google.cloud.financialservices.v1.IGetPredictionResultRequest, callback: google.cloud.financialservices.v1.AML.GetPredictionResultCallback): void;

                    /**
                     * Calls GetPredictionResult.
                     * @param request GetPredictionResultRequest message or plain object
                     * @returns Promise
                     */
                    public getPredictionResult(request: google.cloud.financialservices.v1.IGetPredictionResultRequest): Promise<google.cloud.financialservices.v1.PredictionResult>;

                    /**
                     * Calls CreatePredictionResult.
                     * @param request CreatePredictionResultRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createPredictionResult(request: google.cloud.financialservices.v1.ICreatePredictionResultRequest, callback: google.cloud.financialservices.v1.AML.CreatePredictionResultCallback): void;

                    /**
                     * Calls CreatePredictionResult.
                     * @param request CreatePredictionResultRequest message or plain object
                     * @returns Promise
                     */
                    public createPredictionResult(request: google.cloud.financialservices.v1.ICreatePredictionResultRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdatePredictionResult.
                     * @param request UpdatePredictionResultRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updatePredictionResult(request: google.cloud.financialservices.v1.IUpdatePredictionResultRequest, callback: google.cloud.financialservices.v1.AML.UpdatePredictionResultCallback): void;

                    /**
                     * Calls UpdatePredictionResult.
                     * @param request UpdatePredictionResultRequest message or plain object
                     * @returns Promise
                     */
                    public updatePredictionResult(request: google.cloud.financialservices.v1.IUpdatePredictionResultRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ExportPredictionResultMetadata.
                     * @param request ExportPredictionResultMetadataRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public exportPredictionResultMetadata(request: google.cloud.financialservices.v1.IExportPredictionResultMetadataRequest, callback: google.cloud.financialservices.v1.AML.ExportPredictionResultMetadataCallback): void;

                    /**
                     * Calls ExportPredictionResultMetadata.
                     * @param request ExportPredictionResultMetadataRequest message or plain object
                     * @returns Promise
                     */
                    public exportPredictionResultMetadata(request: google.cloud.financialservices.v1.IExportPredictionResultMetadataRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeletePredictionResult.
                     * @param request DeletePredictionResultRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deletePredictionResult(request: google.cloud.financialservices.v1.IDeletePredictionResultRequest, callback: google.cloud.financialservices.v1.AML.DeletePredictionResultCallback): void;

                    /**
                     * Calls DeletePredictionResult.
                     * @param request DeletePredictionResultRequest message or plain object
                     * @returns Promise
                     */
                    public deletePredictionResult(request: google.cloud.financialservices.v1.IDeletePredictionResultRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListBacktestResults.
                     * @param request ListBacktestResultsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListBacktestResultsResponse
                     */
                    public listBacktestResults(request: google.cloud.financialservices.v1.IListBacktestResultsRequest, callback: google.cloud.financialservices.v1.AML.ListBacktestResultsCallback): void;

                    /**
                     * Calls ListBacktestResults.
                     * @param request ListBacktestResultsRequest message or plain object
                     * @returns Promise
                     */
                    public listBacktestResults(request: google.cloud.financialservices.v1.IListBacktestResultsRequest): Promise<google.cloud.financialservices.v1.ListBacktestResultsResponse>;

                    /**
                     * Calls GetBacktestResult.
                     * @param request GetBacktestResultRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BacktestResult
                     */
                    public getBacktestResult(request: google.cloud.financialservices.v1.IGetBacktestResultRequest, callback: google.cloud.financialservices.v1.AML.GetBacktestResultCallback): void;

                    /**
                     * Calls GetBacktestResult.
                     * @param request GetBacktestResultRequest message or plain object
                     * @returns Promise
                     */
                    public getBacktestResult(request: google.cloud.financialservices.v1.IGetBacktestResultRequest): Promise<google.cloud.financialservices.v1.BacktestResult>;

                    /**
                     * Calls CreateBacktestResult.
                     * @param request CreateBacktestResultRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createBacktestResult(request: google.cloud.financialservices.v1.ICreateBacktestResultRequest, callback: google.cloud.financialservices.v1.AML.CreateBacktestResultCallback): void;

                    /**
                     * Calls CreateBacktestResult.
                     * @param request CreateBacktestResultRequest message or plain object
                     * @returns Promise
                     */
                    public createBacktestResult(request: google.cloud.financialservices.v1.ICreateBacktestResultRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateBacktestResult.
                     * @param request UpdateBacktestResultRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateBacktestResult(request: google.cloud.financialservices.v1.IUpdateBacktestResultRequest, callback: google.cloud.financialservices.v1.AML.UpdateBacktestResultCallback): void;

                    /**
                     * Calls UpdateBacktestResult.
                     * @param request UpdateBacktestResultRequest message or plain object
                     * @returns Promise
                     */
                    public updateBacktestResult(request: google.cloud.financialservices.v1.IUpdateBacktestResultRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ExportBacktestResultMetadata.
                     * @param request ExportBacktestResultMetadataRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public exportBacktestResultMetadata(request: google.cloud.financialservices.v1.IExportBacktestResultMetadataRequest, callback: google.cloud.financialservices.v1.AML.ExportBacktestResultMetadataCallback): void;

                    /**
                     * Calls ExportBacktestResultMetadata.
                     * @param request ExportBacktestResultMetadataRequest message or plain object
                     * @returns Promise
                     */
                    public exportBacktestResultMetadata(request: google.cloud.financialservices.v1.IExportBacktestResultMetadataRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteBacktestResult.
                     * @param request DeleteBacktestResultRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteBacktestResult(request: google.cloud.financialservices.v1.IDeleteBacktestResultRequest, callback: google.cloud.financialservices.v1.AML.DeleteBacktestResultCallback): void;

                    /**
                     * Calls DeleteBacktestResult.
                     * @param request DeleteBacktestResultRequest message or plain object
                     * @returns Promise
                     */
                    public deleteBacktestResult(request: google.cloud.financialservices.v1.IDeleteBacktestResultRequest): Promise<google.longrunning.Operation>;
                }

                namespace AML {

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|listInstances}.
                     * @param error Error, if any
                     * @param [response] ListInstancesResponse
                     */
                    type ListInstancesCallback = (error: (Error|null), response?: google.cloud.financialservices.v1.ListInstancesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|getInstance}.
                     * @param error Error, if any
                     * @param [response] Instance
                     */
                    type GetInstanceCallback = (error: (Error|null), response?: google.cloud.financialservices.v1.Instance) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|createInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|updateInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|deleteInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|importRegisteredParties}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ImportRegisteredPartiesCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|exportRegisteredParties}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExportRegisteredPartiesCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|listDatasets}.
                     * @param error Error, if any
                     * @param [response] ListDatasetsResponse
                     */
                    type ListDatasetsCallback = (error: (Error|null), response?: google.cloud.financialservices.v1.ListDatasetsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|getDataset}.
                     * @param error Error, if any
                     * @param [response] Dataset
                     */
                    type GetDatasetCallback = (error: (Error|null), response?: google.cloud.financialservices.v1.Dataset) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|createDataset}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateDatasetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|updateDataset}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateDatasetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|deleteDataset}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteDatasetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|listModels}.
                     * @param error Error, if any
                     * @param [response] ListModelsResponse
                     */
                    type ListModelsCallback = (error: (Error|null), response?: google.cloud.financialservices.v1.ListModelsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|getModel}.
                     * @param error Error, if any
                     * @param [response] Model
                     */
                    type GetModelCallback = (error: (Error|null), response?: google.cloud.financialservices.v1.Model) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|createModel}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateModelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|updateModel}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateModelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|exportModelMetadata}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExportModelMetadataCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|deleteModel}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteModelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|listEngineConfigs}.
                     * @param error Error, if any
                     * @param [response] ListEngineConfigsResponse
                     */
                    type ListEngineConfigsCallback = (error: (Error|null), response?: google.cloud.financialservices.v1.ListEngineConfigsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|getEngineConfig}.
                     * @param error Error, if any
                     * @param [response] EngineConfig
                     */
                    type GetEngineConfigCallback = (error: (Error|null), response?: google.cloud.financialservices.v1.EngineConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|createEngineConfig}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateEngineConfigCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|updateEngineConfig}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateEngineConfigCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|exportEngineConfigMetadata}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExportEngineConfigMetadataCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|deleteEngineConfig}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteEngineConfigCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|getEngineVersion}.
                     * @param error Error, if any
                     * @param [response] EngineVersion
                     */
                    type GetEngineVersionCallback = (error: (Error|null), response?: google.cloud.financialservices.v1.EngineVersion) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|listEngineVersions}.
                     * @param error Error, if any
                     * @param [response] ListEngineVersionsResponse
                     */
                    type ListEngineVersionsCallback = (error: (Error|null), response?: google.cloud.financialservices.v1.ListEngineVersionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|listPredictionResults}.
                     * @param error Error, if any
                     * @param [response] ListPredictionResultsResponse
                     */
                    type ListPredictionResultsCallback = (error: (Error|null), response?: google.cloud.financialservices.v1.ListPredictionResultsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|getPredictionResult}.
                     * @param error Error, if any
                     * @param [response] PredictionResult
                     */
                    type GetPredictionResultCallback = (error: (Error|null), response?: google.cloud.financialservices.v1.PredictionResult) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|createPredictionResult}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreatePredictionResultCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|updatePredictionResult}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdatePredictionResultCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|exportPredictionResultMetadata}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExportPredictionResultMetadataCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|deletePredictionResult}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeletePredictionResultCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|listBacktestResults}.
                     * @param error Error, if any
                     * @param [response] ListBacktestResultsResponse
                     */
                    type ListBacktestResultsCallback = (error: (Error|null), response?: google.cloud.financialservices.v1.ListBacktestResultsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|getBacktestResult}.
                     * @param error Error, if any
                     * @param [response] BacktestResult
                     */
                    type GetBacktestResultCallback = (error: (Error|null), response?: google.cloud.financialservices.v1.BacktestResult) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|createBacktestResult}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateBacktestResultCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|updateBacktestResult}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateBacktestResultCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|exportBacktestResultMetadata}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExportBacktestResultMetadataCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.financialservices.v1.AML|deleteBacktestResult}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteBacktestResultCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
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
                    constructor(properties?: google.cloud.financialservices.v1.IOperationMetadata);

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
                    public static create(properties?: google.cloud.financialservices.v1.IOperationMetadata): google.cloud.financialservices.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.financialservices.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.financialservices.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.financialservices.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.financialservices.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.financialservices.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.financialservices.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.financialservices.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.financialservices.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Namespace type. */
    namespace type {

        /** Properties of a DateTime. */
        interface IDateTime {

            /** DateTime year */
            year?: (number|null);

            /** DateTime month */
            month?: (number|null);

            /** DateTime day */
            day?: (number|null);

            /** DateTime hours */
            hours?: (number|null);

            /** DateTime minutes */
            minutes?: (number|null);

            /** DateTime seconds */
            seconds?: (number|null);

            /** DateTime nanos */
            nanos?: (number|null);

            /** DateTime utcOffset */
            utcOffset?: (google.protobuf.IDuration|null);

            /** DateTime timeZone */
            timeZone?: (google.type.ITimeZone|null);
        }

        /** Represents a DateTime. */
        class DateTime implements IDateTime {

            /**
             * Constructs a new DateTime.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IDateTime);

            /** DateTime year. */
            public year: number;

            /** DateTime month. */
            public month: number;

            /** DateTime day. */
            public day: number;

            /** DateTime hours. */
            public hours: number;

            /** DateTime minutes. */
            public minutes: number;

            /** DateTime seconds. */
            public seconds: number;

            /** DateTime nanos. */
            public nanos: number;

            /** DateTime utcOffset. */
            public utcOffset?: (google.protobuf.IDuration|null);

            /** DateTime timeZone. */
            public timeZone?: (google.type.ITimeZone|null);

            /** DateTime timeOffset. */
            public timeOffset?: ("utcOffset"|"timeZone");

            /**
             * Creates a new DateTime instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DateTime instance
             */
            public static create(properties?: google.type.IDateTime): google.type.DateTime;

            /**
             * Encodes the specified DateTime message. Does not implicitly {@link google.type.DateTime.verify|verify} messages.
             * @param message DateTime message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IDateTime, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DateTime message, length delimited. Does not implicitly {@link google.type.DateTime.verify|verify} messages.
             * @param message DateTime message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IDateTime, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DateTime message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DateTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.DateTime;

            /**
             * Decodes a DateTime message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DateTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.DateTime;

            /**
             * Verifies a DateTime message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DateTime message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DateTime
             */
            public static fromObject(object: { [k: string]: any }): google.type.DateTime;

            /**
             * Creates a plain object from a DateTime message. Also converts values to other types if specified.
             * @param message DateTime
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.DateTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DateTime to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DateTime
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TimeZone. */
        interface ITimeZone {

            /** TimeZone id */
            id?: (string|null);

            /** TimeZone version */
            version?: (string|null);
        }

        /** Represents a TimeZone. */
        class TimeZone implements ITimeZone {

            /**
             * Constructs a new TimeZone.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ITimeZone);

            /** TimeZone id. */
            public id: string;

            /** TimeZone version. */
            public version: string;

            /**
             * Creates a new TimeZone instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TimeZone instance
             */
            public static create(properties?: google.type.ITimeZone): google.type.TimeZone;

            /**
             * Encodes the specified TimeZone message. Does not implicitly {@link google.type.TimeZone.verify|verify} messages.
             * @param message TimeZone message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.ITimeZone, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TimeZone message, length delimited. Does not implicitly {@link google.type.TimeZone.verify|verify} messages.
             * @param message TimeZone message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.ITimeZone, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TimeZone message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TimeZone
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.TimeZone;

            /**
             * Decodes a TimeZone message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TimeZone
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.TimeZone;

            /**
             * Verifies a TimeZone message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TimeZone message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TimeZone
             */
            public static fromObject(object: { [k: string]: any }): google.type.TimeZone;

            /**
             * Creates a plain object from a TimeZone message. Also converts values to other types if specified.
             * @param message TimeZone
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.TimeZone, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TimeZone to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TimeZone
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

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
