// Copyright 2022 Google LLC
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

    /** Namespace analytics. */
    namespace analytics {

        /** Namespace data. */
        namespace data {

            /** Namespace v1alpha. */
            namespace v1alpha {

                /** Represents an AlphaAnalyticsData */
                class AlphaAnalyticsData extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new AlphaAnalyticsData service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new AlphaAnalyticsData service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AlphaAnalyticsData;

                    /**
                     * Calls RunReport.
                     * @param request RunReportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RunReportResponse
                     */
                    public runReport(request: google.analytics.data.v1alpha.IRunReportRequest, callback: google.analytics.data.v1alpha.AlphaAnalyticsData.RunReportCallback): void;

                    /**
                     * Calls RunReport.
                     * @param request RunReportRequest message or plain object
                     * @returns Promise
                     */
                    public runReport(request: google.analytics.data.v1alpha.IRunReportRequest): Promise<google.analytics.data.v1alpha.RunReportResponse>;

                    /**
                     * Calls RunPivotReport.
                     * @param request RunPivotReportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RunPivotReportResponse
                     */
                    public runPivotReport(request: google.analytics.data.v1alpha.IRunPivotReportRequest, callback: google.analytics.data.v1alpha.AlphaAnalyticsData.RunPivotReportCallback): void;

                    /**
                     * Calls RunPivotReport.
                     * @param request RunPivotReportRequest message or plain object
                     * @returns Promise
                     */
                    public runPivotReport(request: google.analytics.data.v1alpha.IRunPivotReportRequest): Promise<google.analytics.data.v1alpha.RunPivotReportResponse>;

                    /**
                     * Calls BatchRunReports.
                     * @param request BatchRunReportsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BatchRunReportsResponse
                     */
                    public batchRunReports(request: google.analytics.data.v1alpha.IBatchRunReportsRequest, callback: google.analytics.data.v1alpha.AlphaAnalyticsData.BatchRunReportsCallback): void;

                    /**
                     * Calls BatchRunReports.
                     * @param request BatchRunReportsRequest message or plain object
                     * @returns Promise
                     */
                    public batchRunReports(request: google.analytics.data.v1alpha.IBatchRunReportsRequest): Promise<google.analytics.data.v1alpha.BatchRunReportsResponse>;

                    /**
                     * Calls BatchRunPivotReports.
                     * @param request BatchRunPivotReportsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BatchRunPivotReportsResponse
                     */
                    public batchRunPivotReports(request: google.analytics.data.v1alpha.IBatchRunPivotReportsRequest, callback: google.analytics.data.v1alpha.AlphaAnalyticsData.BatchRunPivotReportsCallback): void;

                    /**
                     * Calls BatchRunPivotReports.
                     * @param request BatchRunPivotReportsRequest message or plain object
                     * @returns Promise
                     */
                    public batchRunPivotReports(request: google.analytics.data.v1alpha.IBatchRunPivotReportsRequest): Promise<google.analytics.data.v1alpha.BatchRunPivotReportsResponse>;

                    /**
                     * Calls GetMetadata.
                     * @param request GetMetadataRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Metadata
                     */
                    public getMetadata(request: google.analytics.data.v1alpha.IGetMetadataRequest, callback: google.analytics.data.v1alpha.AlphaAnalyticsData.GetMetadataCallback): void;

                    /**
                     * Calls GetMetadata.
                     * @param request GetMetadataRequest message or plain object
                     * @returns Promise
                     */
                    public getMetadata(request: google.analytics.data.v1alpha.IGetMetadataRequest): Promise<google.analytics.data.v1alpha.Metadata>;

                    /**
                     * Calls RunRealtimeReport.
                     * @param request RunRealtimeReportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RunRealtimeReportResponse
                     */
                    public runRealtimeReport(request: google.analytics.data.v1alpha.IRunRealtimeReportRequest, callback: google.analytics.data.v1alpha.AlphaAnalyticsData.RunRealtimeReportCallback): void;

                    /**
                     * Calls RunRealtimeReport.
                     * @param request RunRealtimeReportRequest message or plain object
                     * @returns Promise
                     */
                    public runRealtimeReport(request: google.analytics.data.v1alpha.IRunRealtimeReportRequest): Promise<google.analytics.data.v1alpha.RunRealtimeReportResponse>;
                }

                namespace AlphaAnalyticsData {

                    /**
                     * Callback as used by {@link google.analytics.data.v1alpha.AlphaAnalyticsData#runReport}.
                     * @param error Error, if any
                     * @param [response] RunReportResponse
                     */
                    type RunReportCallback = (error: (Error|null), response?: google.analytics.data.v1alpha.RunReportResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.data.v1alpha.AlphaAnalyticsData#runPivotReport}.
                     * @param error Error, if any
                     * @param [response] RunPivotReportResponse
                     */
                    type RunPivotReportCallback = (error: (Error|null), response?: google.analytics.data.v1alpha.RunPivotReportResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.data.v1alpha.AlphaAnalyticsData#batchRunReports}.
                     * @param error Error, if any
                     * @param [response] BatchRunReportsResponse
                     */
                    type BatchRunReportsCallback = (error: (Error|null), response?: google.analytics.data.v1alpha.BatchRunReportsResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.data.v1alpha.AlphaAnalyticsData#batchRunPivotReports}.
                     * @param error Error, if any
                     * @param [response] BatchRunPivotReportsResponse
                     */
                    type BatchRunPivotReportsCallback = (error: (Error|null), response?: google.analytics.data.v1alpha.BatchRunPivotReportsResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.data.v1alpha.AlphaAnalyticsData#getMetadata}.
                     * @param error Error, if any
                     * @param [response] Metadata
                     */
                    type GetMetadataCallback = (error: (Error|null), response?: google.analytics.data.v1alpha.Metadata) => void;

                    /**
                     * Callback as used by {@link google.analytics.data.v1alpha.AlphaAnalyticsData#runRealtimeReport}.
                     * @param error Error, if any
                     * @param [response] RunRealtimeReportResponse
                     */
                    type RunRealtimeReportCallback = (error: (Error|null), response?: google.analytics.data.v1alpha.RunRealtimeReportResponse) => void;
                }

                /** Properties of a Metadata. */
                interface IMetadata {

                    /** Metadata name */
                    name?: (string|null);

                    /** Metadata dimensions */
                    dimensions?: (google.analytics.data.v1alpha.IDimensionMetadata[]|null);

                    /** Metadata metrics */
                    metrics?: (google.analytics.data.v1alpha.IMetricMetadata[]|null);
                }

                /** Represents a Metadata. */
                class Metadata implements IMetadata {

                    /**
                     * Constructs a new Metadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IMetadata);

                    /** Metadata name. */
                    public name: string;

                    /** Metadata dimensions. */
                    public dimensions: google.analytics.data.v1alpha.IDimensionMetadata[];

                    /** Metadata metrics. */
                    public metrics: google.analytics.data.v1alpha.IMetricMetadata[];

                    /**
                     * Creates a new Metadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Metadata instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IMetadata): google.analytics.data.v1alpha.Metadata;

                    /**
                     * Encodes the specified Metadata message. Does not implicitly {@link google.analytics.data.v1alpha.Metadata.verify|verify} messages.
                     * @param message Metadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Metadata message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.Metadata.verify|verify} messages.
                     * @param message Metadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Metadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Metadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.Metadata;

                    /**
                     * Decodes a Metadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Metadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.Metadata;

                    /**
                     * Verifies a Metadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Metadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.Metadata;

                    /**
                     * Creates a plain object from a Metadata message. Also converts values to other types if specified.
                     * @param message Metadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.Metadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Metadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RunReportRequest. */
                interface IRunReportRequest {

                    /** RunReportRequest entity */
                    entity?: (google.analytics.data.v1alpha.IEntity|null);

                    /** RunReportRequest dimensions */
                    dimensions?: (google.analytics.data.v1alpha.IDimension[]|null);

                    /** RunReportRequest metrics */
                    metrics?: (google.analytics.data.v1alpha.IMetric[]|null);

                    /** RunReportRequest dateRanges */
                    dateRanges?: (google.analytics.data.v1alpha.IDateRange[]|null);

                    /** RunReportRequest offset */
                    offset?: (number|Long|string|null);

                    /** RunReportRequest limit */
                    limit?: (number|Long|string|null);

                    /** RunReportRequest metricAggregations */
                    metricAggregations?: (google.analytics.data.v1alpha.MetricAggregation[]|null);

                    /** RunReportRequest dimensionFilter */
                    dimensionFilter?: (google.analytics.data.v1alpha.IFilterExpression|null);

                    /** RunReportRequest metricFilter */
                    metricFilter?: (google.analytics.data.v1alpha.IFilterExpression|null);

                    /** RunReportRequest orderBys */
                    orderBys?: (google.analytics.data.v1alpha.IOrderBy[]|null);

                    /** RunReportRequest currencyCode */
                    currencyCode?: (string|null);

                    /** RunReportRequest cohortSpec */
                    cohortSpec?: (google.analytics.data.v1alpha.ICohortSpec|null);

                    /** RunReportRequest keepEmptyRows */
                    keepEmptyRows?: (boolean|null);

                    /** RunReportRequest returnPropertyQuota */
                    returnPropertyQuota?: (boolean|null);
                }

                /** Represents a RunReportRequest. */
                class RunReportRequest implements IRunReportRequest {

                    /**
                     * Constructs a new RunReportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IRunReportRequest);

                    /** RunReportRequest entity. */
                    public entity?: (google.analytics.data.v1alpha.IEntity|null);

                    /** RunReportRequest dimensions. */
                    public dimensions: google.analytics.data.v1alpha.IDimension[];

                    /** RunReportRequest metrics. */
                    public metrics: google.analytics.data.v1alpha.IMetric[];

                    /** RunReportRequest dateRanges. */
                    public dateRanges: google.analytics.data.v1alpha.IDateRange[];

                    /** RunReportRequest offset. */
                    public offset: (number|Long|string);

                    /** RunReportRequest limit. */
                    public limit: (number|Long|string);

                    /** RunReportRequest metricAggregations. */
                    public metricAggregations: google.analytics.data.v1alpha.MetricAggregation[];

                    /** RunReportRequest dimensionFilter. */
                    public dimensionFilter?: (google.analytics.data.v1alpha.IFilterExpression|null);

                    /** RunReportRequest metricFilter. */
                    public metricFilter?: (google.analytics.data.v1alpha.IFilterExpression|null);

                    /** RunReportRequest orderBys. */
                    public orderBys: google.analytics.data.v1alpha.IOrderBy[];

                    /** RunReportRequest currencyCode. */
                    public currencyCode: string;

                    /** RunReportRequest cohortSpec. */
                    public cohortSpec?: (google.analytics.data.v1alpha.ICohortSpec|null);

                    /** RunReportRequest keepEmptyRows. */
                    public keepEmptyRows: boolean;

                    /** RunReportRequest returnPropertyQuota. */
                    public returnPropertyQuota: boolean;

                    /**
                     * Creates a new RunReportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunReportRequest instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IRunReportRequest): google.analytics.data.v1alpha.RunReportRequest;

                    /**
                     * Encodes the specified RunReportRequest message. Does not implicitly {@link google.analytics.data.v1alpha.RunReportRequest.verify|verify} messages.
                     * @param message RunReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IRunReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunReportRequest message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.RunReportRequest.verify|verify} messages.
                     * @param message RunReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IRunReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunReportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.RunReportRequest;

                    /**
                     * Decodes a RunReportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.RunReportRequest;

                    /**
                     * Verifies a RunReportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunReportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunReportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.RunReportRequest;

                    /**
                     * Creates a plain object from a RunReportRequest message. Also converts values to other types if specified.
                     * @param message RunReportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.RunReportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunReportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RunReportResponse. */
                interface IRunReportResponse {

                    /** RunReportResponse dimensionHeaders */
                    dimensionHeaders?: (google.analytics.data.v1alpha.IDimensionHeader[]|null);

                    /** RunReportResponse metricHeaders */
                    metricHeaders?: (google.analytics.data.v1alpha.IMetricHeader[]|null);

                    /** RunReportResponse rows */
                    rows?: (google.analytics.data.v1alpha.IRow[]|null);

                    /** RunReportResponse totals */
                    totals?: (google.analytics.data.v1alpha.IRow[]|null);

                    /** RunReportResponse maximums */
                    maximums?: (google.analytics.data.v1alpha.IRow[]|null);

                    /** RunReportResponse minimums */
                    minimums?: (google.analytics.data.v1alpha.IRow[]|null);

                    /** RunReportResponse rowCount */
                    rowCount?: (number|null);

                    /** RunReportResponse metadata */
                    metadata?: (google.analytics.data.v1alpha.IResponseMetaData|null);

                    /** RunReportResponse propertyQuota */
                    propertyQuota?: (google.analytics.data.v1alpha.IPropertyQuota|null);
                }

                /** Represents a RunReportResponse. */
                class RunReportResponse implements IRunReportResponse {

                    /**
                     * Constructs a new RunReportResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IRunReportResponse);

                    /** RunReportResponse dimensionHeaders. */
                    public dimensionHeaders: google.analytics.data.v1alpha.IDimensionHeader[];

                    /** RunReportResponse metricHeaders. */
                    public metricHeaders: google.analytics.data.v1alpha.IMetricHeader[];

                    /** RunReportResponse rows. */
                    public rows: google.analytics.data.v1alpha.IRow[];

                    /** RunReportResponse totals. */
                    public totals: google.analytics.data.v1alpha.IRow[];

                    /** RunReportResponse maximums. */
                    public maximums: google.analytics.data.v1alpha.IRow[];

                    /** RunReportResponse minimums. */
                    public minimums: google.analytics.data.v1alpha.IRow[];

                    /** RunReportResponse rowCount. */
                    public rowCount: number;

                    /** RunReportResponse metadata. */
                    public metadata?: (google.analytics.data.v1alpha.IResponseMetaData|null);

                    /** RunReportResponse propertyQuota. */
                    public propertyQuota?: (google.analytics.data.v1alpha.IPropertyQuota|null);

                    /**
                     * Creates a new RunReportResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunReportResponse instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IRunReportResponse): google.analytics.data.v1alpha.RunReportResponse;

                    /**
                     * Encodes the specified RunReportResponse message. Does not implicitly {@link google.analytics.data.v1alpha.RunReportResponse.verify|verify} messages.
                     * @param message RunReportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IRunReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunReportResponse message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.RunReportResponse.verify|verify} messages.
                     * @param message RunReportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IRunReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunReportResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunReportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.RunReportResponse;

                    /**
                     * Decodes a RunReportResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunReportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.RunReportResponse;

                    /**
                     * Verifies a RunReportResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunReportResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunReportResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.RunReportResponse;

                    /**
                     * Creates a plain object from a RunReportResponse message. Also converts values to other types if specified.
                     * @param message RunReportResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.RunReportResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunReportResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RunPivotReportRequest. */
                interface IRunPivotReportRequest {

                    /** RunPivotReportRequest entity */
                    entity?: (google.analytics.data.v1alpha.IEntity|null);

                    /** RunPivotReportRequest dimensions */
                    dimensions?: (google.analytics.data.v1alpha.IDimension[]|null);

                    /** RunPivotReportRequest metrics */
                    metrics?: (google.analytics.data.v1alpha.IMetric[]|null);

                    /** RunPivotReportRequest dimensionFilter */
                    dimensionFilter?: (google.analytics.data.v1alpha.IFilterExpression|null);

                    /** RunPivotReportRequest metricFilter */
                    metricFilter?: (google.analytics.data.v1alpha.IFilterExpression|null);

                    /** RunPivotReportRequest pivots */
                    pivots?: (google.analytics.data.v1alpha.IPivot[]|null);

                    /** RunPivotReportRequest dateRanges */
                    dateRanges?: (google.analytics.data.v1alpha.IDateRange[]|null);

                    /** RunPivotReportRequest currencyCode */
                    currencyCode?: (string|null);

                    /** RunPivotReportRequest cohortSpec */
                    cohortSpec?: (google.analytics.data.v1alpha.ICohortSpec|null);

                    /** RunPivotReportRequest keepEmptyRows */
                    keepEmptyRows?: (boolean|null);

                    /** RunPivotReportRequest returnPropertyQuota */
                    returnPropertyQuota?: (boolean|null);
                }

                /** Represents a RunPivotReportRequest. */
                class RunPivotReportRequest implements IRunPivotReportRequest {

                    /**
                     * Constructs a new RunPivotReportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IRunPivotReportRequest);

                    /** RunPivotReportRequest entity. */
                    public entity?: (google.analytics.data.v1alpha.IEntity|null);

                    /** RunPivotReportRequest dimensions. */
                    public dimensions: google.analytics.data.v1alpha.IDimension[];

                    /** RunPivotReportRequest metrics. */
                    public metrics: google.analytics.data.v1alpha.IMetric[];

                    /** RunPivotReportRequest dimensionFilter. */
                    public dimensionFilter?: (google.analytics.data.v1alpha.IFilterExpression|null);

                    /** RunPivotReportRequest metricFilter. */
                    public metricFilter?: (google.analytics.data.v1alpha.IFilterExpression|null);

                    /** RunPivotReportRequest pivots. */
                    public pivots: google.analytics.data.v1alpha.IPivot[];

                    /** RunPivotReportRequest dateRanges. */
                    public dateRanges: google.analytics.data.v1alpha.IDateRange[];

                    /** RunPivotReportRequest currencyCode. */
                    public currencyCode: string;

                    /** RunPivotReportRequest cohortSpec. */
                    public cohortSpec?: (google.analytics.data.v1alpha.ICohortSpec|null);

                    /** RunPivotReportRequest keepEmptyRows. */
                    public keepEmptyRows: boolean;

                    /** RunPivotReportRequest returnPropertyQuota. */
                    public returnPropertyQuota: boolean;

                    /**
                     * Creates a new RunPivotReportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunPivotReportRequest instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IRunPivotReportRequest): google.analytics.data.v1alpha.RunPivotReportRequest;

                    /**
                     * Encodes the specified RunPivotReportRequest message. Does not implicitly {@link google.analytics.data.v1alpha.RunPivotReportRequest.verify|verify} messages.
                     * @param message RunPivotReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IRunPivotReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunPivotReportRequest message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.RunPivotReportRequest.verify|verify} messages.
                     * @param message RunPivotReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IRunPivotReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunPivotReportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunPivotReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.RunPivotReportRequest;

                    /**
                     * Decodes a RunPivotReportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunPivotReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.RunPivotReportRequest;

                    /**
                     * Verifies a RunPivotReportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunPivotReportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunPivotReportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.RunPivotReportRequest;

                    /**
                     * Creates a plain object from a RunPivotReportRequest message. Also converts values to other types if specified.
                     * @param message RunPivotReportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.RunPivotReportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunPivotReportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RunPivotReportResponse. */
                interface IRunPivotReportResponse {

                    /** RunPivotReportResponse pivotHeaders */
                    pivotHeaders?: (google.analytics.data.v1alpha.IPivotHeader[]|null);

                    /** RunPivotReportResponse dimensionHeaders */
                    dimensionHeaders?: (google.analytics.data.v1alpha.IDimensionHeader[]|null);

                    /** RunPivotReportResponse metricHeaders */
                    metricHeaders?: (google.analytics.data.v1alpha.IMetricHeader[]|null);

                    /** RunPivotReportResponse rows */
                    rows?: (google.analytics.data.v1alpha.IRow[]|null);

                    /** RunPivotReportResponse aggregates */
                    aggregates?: (google.analytics.data.v1alpha.IRow[]|null);

                    /** RunPivotReportResponse metadata */
                    metadata?: (google.analytics.data.v1alpha.IResponseMetaData|null);

                    /** RunPivotReportResponse propertyQuota */
                    propertyQuota?: (google.analytics.data.v1alpha.IPropertyQuota|null);
                }

                /** Represents a RunPivotReportResponse. */
                class RunPivotReportResponse implements IRunPivotReportResponse {

                    /**
                     * Constructs a new RunPivotReportResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IRunPivotReportResponse);

                    /** RunPivotReportResponse pivotHeaders. */
                    public pivotHeaders: google.analytics.data.v1alpha.IPivotHeader[];

                    /** RunPivotReportResponse dimensionHeaders. */
                    public dimensionHeaders: google.analytics.data.v1alpha.IDimensionHeader[];

                    /** RunPivotReportResponse metricHeaders. */
                    public metricHeaders: google.analytics.data.v1alpha.IMetricHeader[];

                    /** RunPivotReportResponse rows. */
                    public rows: google.analytics.data.v1alpha.IRow[];

                    /** RunPivotReportResponse aggregates. */
                    public aggregates: google.analytics.data.v1alpha.IRow[];

                    /** RunPivotReportResponse metadata. */
                    public metadata?: (google.analytics.data.v1alpha.IResponseMetaData|null);

                    /** RunPivotReportResponse propertyQuota. */
                    public propertyQuota?: (google.analytics.data.v1alpha.IPropertyQuota|null);

                    /**
                     * Creates a new RunPivotReportResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunPivotReportResponse instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IRunPivotReportResponse): google.analytics.data.v1alpha.RunPivotReportResponse;

                    /**
                     * Encodes the specified RunPivotReportResponse message. Does not implicitly {@link google.analytics.data.v1alpha.RunPivotReportResponse.verify|verify} messages.
                     * @param message RunPivotReportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IRunPivotReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunPivotReportResponse message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.RunPivotReportResponse.verify|verify} messages.
                     * @param message RunPivotReportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IRunPivotReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunPivotReportResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunPivotReportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.RunPivotReportResponse;

                    /**
                     * Decodes a RunPivotReportResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunPivotReportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.RunPivotReportResponse;

                    /**
                     * Verifies a RunPivotReportResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunPivotReportResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunPivotReportResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.RunPivotReportResponse;

                    /**
                     * Creates a plain object from a RunPivotReportResponse message. Also converts values to other types if specified.
                     * @param message RunPivotReportResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.RunPivotReportResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunPivotReportResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchRunReportsRequest. */
                interface IBatchRunReportsRequest {

                    /** BatchRunReportsRequest entity */
                    entity?: (google.analytics.data.v1alpha.IEntity|null);

                    /** BatchRunReportsRequest requests */
                    requests?: (google.analytics.data.v1alpha.IRunReportRequest[]|null);
                }

                /** Represents a BatchRunReportsRequest. */
                class BatchRunReportsRequest implements IBatchRunReportsRequest {

                    /**
                     * Constructs a new BatchRunReportsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IBatchRunReportsRequest);

                    /** BatchRunReportsRequest entity. */
                    public entity?: (google.analytics.data.v1alpha.IEntity|null);

                    /** BatchRunReportsRequest requests. */
                    public requests: google.analytics.data.v1alpha.IRunReportRequest[];

                    /**
                     * Creates a new BatchRunReportsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchRunReportsRequest instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IBatchRunReportsRequest): google.analytics.data.v1alpha.BatchRunReportsRequest;

                    /**
                     * Encodes the specified BatchRunReportsRequest message. Does not implicitly {@link google.analytics.data.v1alpha.BatchRunReportsRequest.verify|verify} messages.
                     * @param message BatchRunReportsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IBatchRunReportsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchRunReportsRequest message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.BatchRunReportsRequest.verify|verify} messages.
                     * @param message BatchRunReportsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IBatchRunReportsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchRunReportsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchRunReportsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.BatchRunReportsRequest;

                    /**
                     * Decodes a BatchRunReportsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchRunReportsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.BatchRunReportsRequest;

                    /**
                     * Verifies a BatchRunReportsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchRunReportsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchRunReportsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.BatchRunReportsRequest;

                    /**
                     * Creates a plain object from a BatchRunReportsRequest message. Also converts values to other types if specified.
                     * @param message BatchRunReportsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.BatchRunReportsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchRunReportsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchRunReportsResponse. */
                interface IBatchRunReportsResponse {

                    /** BatchRunReportsResponse reports */
                    reports?: (google.analytics.data.v1alpha.IRunReportResponse[]|null);
                }

                /** Represents a BatchRunReportsResponse. */
                class BatchRunReportsResponse implements IBatchRunReportsResponse {

                    /**
                     * Constructs a new BatchRunReportsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IBatchRunReportsResponse);

                    /** BatchRunReportsResponse reports. */
                    public reports: google.analytics.data.v1alpha.IRunReportResponse[];

                    /**
                     * Creates a new BatchRunReportsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchRunReportsResponse instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IBatchRunReportsResponse): google.analytics.data.v1alpha.BatchRunReportsResponse;

                    /**
                     * Encodes the specified BatchRunReportsResponse message. Does not implicitly {@link google.analytics.data.v1alpha.BatchRunReportsResponse.verify|verify} messages.
                     * @param message BatchRunReportsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IBatchRunReportsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchRunReportsResponse message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.BatchRunReportsResponse.verify|verify} messages.
                     * @param message BatchRunReportsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IBatchRunReportsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchRunReportsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchRunReportsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.BatchRunReportsResponse;

                    /**
                     * Decodes a BatchRunReportsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchRunReportsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.BatchRunReportsResponse;

                    /**
                     * Verifies a BatchRunReportsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchRunReportsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchRunReportsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.BatchRunReportsResponse;

                    /**
                     * Creates a plain object from a BatchRunReportsResponse message. Also converts values to other types if specified.
                     * @param message BatchRunReportsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.BatchRunReportsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchRunReportsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchRunPivotReportsRequest. */
                interface IBatchRunPivotReportsRequest {

                    /** BatchRunPivotReportsRequest entity */
                    entity?: (google.analytics.data.v1alpha.IEntity|null);

                    /** BatchRunPivotReportsRequest requests */
                    requests?: (google.analytics.data.v1alpha.IRunPivotReportRequest[]|null);
                }

                /** Represents a BatchRunPivotReportsRequest. */
                class BatchRunPivotReportsRequest implements IBatchRunPivotReportsRequest {

                    /**
                     * Constructs a new BatchRunPivotReportsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IBatchRunPivotReportsRequest);

                    /** BatchRunPivotReportsRequest entity. */
                    public entity?: (google.analytics.data.v1alpha.IEntity|null);

                    /** BatchRunPivotReportsRequest requests. */
                    public requests: google.analytics.data.v1alpha.IRunPivotReportRequest[];

                    /**
                     * Creates a new BatchRunPivotReportsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchRunPivotReportsRequest instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IBatchRunPivotReportsRequest): google.analytics.data.v1alpha.BatchRunPivotReportsRequest;

                    /**
                     * Encodes the specified BatchRunPivotReportsRequest message. Does not implicitly {@link google.analytics.data.v1alpha.BatchRunPivotReportsRequest.verify|verify} messages.
                     * @param message BatchRunPivotReportsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IBatchRunPivotReportsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchRunPivotReportsRequest message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.BatchRunPivotReportsRequest.verify|verify} messages.
                     * @param message BatchRunPivotReportsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IBatchRunPivotReportsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchRunPivotReportsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchRunPivotReportsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.BatchRunPivotReportsRequest;

                    /**
                     * Decodes a BatchRunPivotReportsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchRunPivotReportsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.BatchRunPivotReportsRequest;

                    /**
                     * Verifies a BatchRunPivotReportsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchRunPivotReportsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchRunPivotReportsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.BatchRunPivotReportsRequest;

                    /**
                     * Creates a plain object from a BatchRunPivotReportsRequest message. Also converts values to other types if specified.
                     * @param message BatchRunPivotReportsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.BatchRunPivotReportsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchRunPivotReportsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchRunPivotReportsResponse. */
                interface IBatchRunPivotReportsResponse {

                    /** BatchRunPivotReportsResponse pivotReports */
                    pivotReports?: (google.analytics.data.v1alpha.IRunPivotReportResponse[]|null);
                }

                /** Represents a BatchRunPivotReportsResponse. */
                class BatchRunPivotReportsResponse implements IBatchRunPivotReportsResponse {

                    /**
                     * Constructs a new BatchRunPivotReportsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IBatchRunPivotReportsResponse);

                    /** BatchRunPivotReportsResponse pivotReports. */
                    public pivotReports: google.analytics.data.v1alpha.IRunPivotReportResponse[];

                    /**
                     * Creates a new BatchRunPivotReportsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchRunPivotReportsResponse instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IBatchRunPivotReportsResponse): google.analytics.data.v1alpha.BatchRunPivotReportsResponse;

                    /**
                     * Encodes the specified BatchRunPivotReportsResponse message. Does not implicitly {@link google.analytics.data.v1alpha.BatchRunPivotReportsResponse.verify|verify} messages.
                     * @param message BatchRunPivotReportsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IBatchRunPivotReportsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchRunPivotReportsResponse message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.BatchRunPivotReportsResponse.verify|verify} messages.
                     * @param message BatchRunPivotReportsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IBatchRunPivotReportsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchRunPivotReportsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchRunPivotReportsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.BatchRunPivotReportsResponse;

                    /**
                     * Decodes a BatchRunPivotReportsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchRunPivotReportsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.BatchRunPivotReportsResponse;

                    /**
                     * Verifies a BatchRunPivotReportsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchRunPivotReportsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchRunPivotReportsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.BatchRunPivotReportsResponse;

                    /**
                     * Creates a plain object from a BatchRunPivotReportsResponse message. Also converts values to other types if specified.
                     * @param message BatchRunPivotReportsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.BatchRunPivotReportsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchRunPivotReportsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetMetadataRequest. */
                interface IGetMetadataRequest {

                    /** GetMetadataRequest name */
                    name?: (string|null);
                }

                /** Represents a GetMetadataRequest. */
                class GetMetadataRequest implements IGetMetadataRequest {

                    /**
                     * Constructs a new GetMetadataRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IGetMetadataRequest);

                    /** GetMetadataRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetMetadataRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetMetadataRequest instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IGetMetadataRequest): google.analytics.data.v1alpha.GetMetadataRequest;

                    /**
                     * Encodes the specified GetMetadataRequest message. Does not implicitly {@link google.analytics.data.v1alpha.GetMetadataRequest.verify|verify} messages.
                     * @param message GetMetadataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IGetMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetMetadataRequest message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.GetMetadataRequest.verify|verify} messages.
                     * @param message GetMetadataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IGetMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetMetadataRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetMetadataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.GetMetadataRequest;

                    /**
                     * Decodes a GetMetadataRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetMetadataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.GetMetadataRequest;

                    /**
                     * Verifies a GetMetadataRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetMetadataRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetMetadataRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.GetMetadataRequest;

                    /**
                     * Creates a plain object from a GetMetadataRequest message. Also converts values to other types if specified.
                     * @param message GetMetadataRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.GetMetadataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetMetadataRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RunRealtimeReportRequest. */
                interface IRunRealtimeReportRequest {

                    /** RunRealtimeReportRequest property */
                    property?: (string|null);

                    /** RunRealtimeReportRequest dimensions */
                    dimensions?: (google.analytics.data.v1alpha.IDimension[]|null);

                    /** RunRealtimeReportRequest metrics */
                    metrics?: (google.analytics.data.v1alpha.IMetric[]|null);

                    /** RunRealtimeReportRequest limit */
                    limit?: (number|Long|string|null);

                    /** RunRealtimeReportRequest dimensionFilter */
                    dimensionFilter?: (google.analytics.data.v1alpha.IFilterExpression|null);

                    /** RunRealtimeReportRequest metricFilter */
                    metricFilter?: (google.analytics.data.v1alpha.IFilterExpression|null);

                    /** RunRealtimeReportRequest metricAggregations */
                    metricAggregations?: (google.analytics.data.v1alpha.MetricAggregation[]|null);

                    /** RunRealtimeReportRequest orderBys */
                    orderBys?: (google.analytics.data.v1alpha.IOrderBy[]|null);

                    /** RunRealtimeReportRequest returnPropertyQuota */
                    returnPropertyQuota?: (boolean|null);
                }

                /** Represents a RunRealtimeReportRequest. */
                class RunRealtimeReportRequest implements IRunRealtimeReportRequest {

                    /**
                     * Constructs a new RunRealtimeReportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IRunRealtimeReportRequest);

                    /** RunRealtimeReportRequest property. */
                    public property: string;

                    /** RunRealtimeReportRequest dimensions. */
                    public dimensions: google.analytics.data.v1alpha.IDimension[];

                    /** RunRealtimeReportRequest metrics. */
                    public metrics: google.analytics.data.v1alpha.IMetric[];

                    /** RunRealtimeReportRequest limit. */
                    public limit: (number|Long|string);

                    /** RunRealtimeReportRequest dimensionFilter. */
                    public dimensionFilter?: (google.analytics.data.v1alpha.IFilterExpression|null);

                    /** RunRealtimeReportRequest metricFilter. */
                    public metricFilter?: (google.analytics.data.v1alpha.IFilterExpression|null);

                    /** RunRealtimeReportRequest metricAggregations. */
                    public metricAggregations: google.analytics.data.v1alpha.MetricAggregation[];

                    /** RunRealtimeReportRequest orderBys. */
                    public orderBys: google.analytics.data.v1alpha.IOrderBy[];

                    /** RunRealtimeReportRequest returnPropertyQuota. */
                    public returnPropertyQuota: boolean;

                    /**
                     * Creates a new RunRealtimeReportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunRealtimeReportRequest instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IRunRealtimeReportRequest): google.analytics.data.v1alpha.RunRealtimeReportRequest;

                    /**
                     * Encodes the specified RunRealtimeReportRequest message. Does not implicitly {@link google.analytics.data.v1alpha.RunRealtimeReportRequest.verify|verify} messages.
                     * @param message RunRealtimeReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IRunRealtimeReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunRealtimeReportRequest message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.RunRealtimeReportRequest.verify|verify} messages.
                     * @param message RunRealtimeReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IRunRealtimeReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunRealtimeReportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunRealtimeReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.RunRealtimeReportRequest;

                    /**
                     * Decodes a RunRealtimeReportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunRealtimeReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.RunRealtimeReportRequest;

                    /**
                     * Verifies a RunRealtimeReportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunRealtimeReportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunRealtimeReportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.RunRealtimeReportRequest;

                    /**
                     * Creates a plain object from a RunRealtimeReportRequest message. Also converts values to other types if specified.
                     * @param message RunRealtimeReportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.RunRealtimeReportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunRealtimeReportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RunRealtimeReportResponse. */
                interface IRunRealtimeReportResponse {

                    /** RunRealtimeReportResponse dimensionHeaders */
                    dimensionHeaders?: (google.analytics.data.v1alpha.IDimensionHeader[]|null);

                    /** RunRealtimeReportResponse metricHeaders */
                    metricHeaders?: (google.analytics.data.v1alpha.IMetricHeader[]|null);

                    /** RunRealtimeReportResponse rows */
                    rows?: (google.analytics.data.v1alpha.IRow[]|null);

                    /** RunRealtimeReportResponse totals */
                    totals?: (google.analytics.data.v1alpha.IRow[]|null);

                    /** RunRealtimeReportResponse maximums */
                    maximums?: (google.analytics.data.v1alpha.IRow[]|null);

                    /** RunRealtimeReportResponse minimums */
                    minimums?: (google.analytics.data.v1alpha.IRow[]|null);

                    /** RunRealtimeReportResponse rowCount */
                    rowCount?: (number|null);

                    /** RunRealtimeReportResponse propertyQuota */
                    propertyQuota?: (google.analytics.data.v1alpha.IPropertyQuota|null);
                }

                /** Represents a RunRealtimeReportResponse. */
                class RunRealtimeReportResponse implements IRunRealtimeReportResponse {

                    /**
                     * Constructs a new RunRealtimeReportResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IRunRealtimeReportResponse);

                    /** RunRealtimeReportResponse dimensionHeaders. */
                    public dimensionHeaders: google.analytics.data.v1alpha.IDimensionHeader[];

                    /** RunRealtimeReportResponse metricHeaders. */
                    public metricHeaders: google.analytics.data.v1alpha.IMetricHeader[];

                    /** RunRealtimeReportResponse rows. */
                    public rows: google.analytics.data.v1alpha.IRow[];

                    /** RunRealtimeReportResponse totals. */
                    public totals: google.analytics.data.v1alpha.IRow[];

                    /** RunRealtimeReportResponse maximums. */
                    public maximums: google.analytics.data.v1alpha.IRow[];

                    /** RunRealtimeReportResponse minimums. */
                    public minimums: google.analytics.data.v1alpha.IRow[];

                    /** RunRealtimeReportResponse rowCount. */
                    public rowCount: number;

                    /** RunRealtimeReportResponse propertyQuota. */
                    public propertyQuota?: (google.analytics.data.v1alpha.IPropertyQuota|null);

                    /**
                     * Creates a new RunRealtimeReportResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunRealtimeReportResponse instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IRunRealtimeReportResponse): google.analytics.data.v1alpha.RunRealtimeReportResponse;

                    /**
                     * Encodes the specified RunRealtimeReportResponse message. Does not implicitly {@link google.analytics.data.v1alpha.RunRealtimeReportResponse.verify|verify} messages.
                     * @param message RunRealtimeReportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IRunRealtimeReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunRealtimeReportResponse message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.RunRealtimeReportResponse.verify|verify} messages.
                     * @param message RunRealtimeReportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IRunRealtimeReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunRealtimeReportResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunRealtimeReportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.RunRealtimeReportResponse;

                    /**
                     * Decodes a RunRealtimeReportResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunRealtimeReportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.RunRealtimeReportResponse;

                    /**
                     * Verifies a RunRealtimeReportResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunRealtimeReportResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunRealtimeReportResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.RunRealtimeReportResponse;

                    /**
                     * Creates a plain object from a RunRealtimeReportResponse message. Also converts values to other types if specified.
                     * @param message RunRealtimeReportResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.RunRealtimeReportResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunRealtimeReportResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DateRange. */
                interface IDateRange {

                    /** DateRange startDate */
                    startDate?: (string|null);

                    /** DateRange endDate */
                    endDate?: (string|null);

                    /** DateRange name */
                    name?: (string|null);
                }

                /** Represents a DateRange. */
                class DateRange implements IDateRange {

                    /**
                     * Constructs a new DateRange.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IDateRange);

                    /** DateRange startDate. */
                    public startDate: string;

                    /** DateRange endDate. */
                    public endDate: string;

                    /** DateRange name. */
                    public name: string;

                    /**
                     * Creates a new DateRange instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DateRange instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IDateRange): google.analytics.data.v1alpha.DateRange;

                    /**
                     * Encodes the specified DateRange message. Does not implicitly {@link google.analytics.data.v1alpha.DateRange.verify|verify} messages.
                     * @param message DateRange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IDateRange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DateRange message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.DateRange.verify|verify} messages.
                     * @param message DateRange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IDateRange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DateRange message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DateRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.DateRange;

                    /**
                     * Decodes a DateRange message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DateRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.DateRange;

                    /**
                     * Verifies a DateRange message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DateRange message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DateRange
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.DateRange;

                    /**
                     * Creates a plain object from a DateRange message. Also converts values to other types if specified.
                     * @param message DateRange
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.DateRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DateRange to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Entity. */
                interface IEntity {

                    /** Entity propertyId */
                    propertyId?: (string|null);
                }

                /** Represents an Entity. */
                class Entity implements IEntity {

                    /**
                     * Constructs a new Entity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IEntity);

                    /** Entity propertyId. */
                    public propertyId: string;

                    /**
                     * Creates a new Entity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Entity instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IEntity): google.analytics.data.v1alpha.Entity;

                    /**
                     * Encodes the specified Entity message. Does not implicitly {@link google.analytics.data.v1alpha.Entity.verify|verify} messages.
                     * @param message Entity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Entity message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.Entity.verify|verify} messages.
                     * @param message Entity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Entity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Entity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.Entity;

                    /**
                     * Decodes an Entity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Entity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.Entity;

                    /**
                     * Verifies an Entity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Entity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Entity
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.Entity;

                    /**
                     * Creates a plain object from an Entity message. Also converts values to other types if specified.
                     * @param message Entity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Entity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Dimension. */
                interface IDimension {

                    /** Dimension name */
                    name?: (string|null);

                    /** Dimension dimensionExpression */
                    dimensionExpression?: (google.analytics.data.v1alpha.IDimensionExpression|null);
                }

                /** Represents a Dimension. */
                class Dimension implements IDimension {

                    /**
                     * Constructs a new Dimension.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IDimension);

                    /** Dimension name. */
                    public name: string;

                    /** Dimension dimensionExpression. */
                    public dimensionExpression?: (google.analytics.data.v1alpha.IDimensionExpression|null);

                    /**
                     * Creates a new Dimension instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Dimension instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IDimension): google.analytics.data.v1alpha.Dimension;

                    /**
                     * Encodes the specified Dimension message. Does not implicitly {@link google.analytics.data.v1alpha.Dimension.verify|verify} messages.
                     * @param message Dimension message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IDimension, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Dimension message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.Dimension.verify|verify} messages.
                     * @param message Dimension message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IDimension, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Dimension message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Dimension
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.Dimension;

                    /**
                     * Decodes a Dimension message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Dimension
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.Dimension;

                    /**
                     * Verifies a Dimension message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Dimension message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Dimension
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.Dimension;

                    /**
                     * Creates a plain object from a Dimension message. Also converts values to other types if specified.
                     * @param message Dimension
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.Dimension, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Dimension to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DimensionExpression. */
                interface IDimensionExpression {

                    /** DimensionExpression lowerCase */
                    lowerCase?: (google.analytics.data.v1alpha.DimensionExpression.ICaseExpression|null);

                    /** DimensionExpression upperCase */
                    upperCase?: (google.analytics.data.v1alpha.DimensionExpression.ICaseExpression|null);

                    /** DimensionExpression concatenate */
                    concatenate?: (google.analytics.data.v1alpha.DimensionExpression.IConcatenateExpression|null);
                }

                /** Represents a DimensionExpression. */
                class DimensionExpression implements IDimensionExpression {

                    /**
                     * Constructs a new DimensionExpression.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IDimensionExpression);

                    /** DimensionExpression lowerCase. */
                    public lowerCase?: (google.analytics.data.v1alpha.DimensionExpression.ICaseExpression|null);

                    /** DimensionExpression upperCase. */
                    public upperCase?: (google.analytics.data.v1alpha.DimensionExpression.ICaseExpression|null);

                    /** DimensionExpression concatenate. */
                    public concatenate?: (google.analytics.data.v1alpha.DimensionExpression.IConcatenateExpression|null);

                    /** DimensionExpression oneExpression. */
                    public oneExpression?: ("lowerCase"|"upperCase"|"concatenate");

                    /**
                     * Creates a new DimensionExpression instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DimensionExpression instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IDimensionExpression): google.analytics.data.v1alpha.DimensionExpression;

                    /**
                     * Encodes the specified DimensionExpression message. Does not implicitly {@link google.analytics.data.v1alpha.DimensionExpression.verify|verify} messages.
                     * @param message DimensionExpression message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IDimensionExpression, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DimensionExpression message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.DimensionExpression.verify|verify} messages.
                     * @param message DimensionExpression message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IDimensionExpression, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DimensionExpression message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DimensionExpression
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.DimensionExpression;

                    /**
                     * Decodes a DimensionExpression message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DimensionExpression
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.DimensionExpression;

                    /**
                     * Verifies a DimensionExpression message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DimensionExpression message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DimensionExpression
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.DimensionExpression;

                    /**
                     * Creates a plain object from a DimensionExpression message. Also converts values to other types if specified.
                     * @param message DimensionExpression
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.DimensionExpression, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DimensionExpression to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace DimensionExpression {

                    /** Properties of a CaseExpression. */
                    interface ICaseExpression {

                        /** CaseExpression dimensionName */
                        dimensionName?: (string|null);
                    }

                    /** Represents a CaseExpression. */
                    class CaseExpression implements ICaseExpression {

                        /**
                         * Constructs a new CaseExpression.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.analytics.data.v1alpha.DimensionExpression.ICaseExpression);

                        /** CaseExpression dimensionName. */
                        public dimensionName: string;

                        /**
                         * Creates a new CaseExpression instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CaseExpression instance
                         */
                        public static create(properties?: google.analytics.data.v1alpha.DimensionExpression.ICaseExpression): google.analytics.data.v1alpha.DimensionExpression.CaseExpression;

                        /**
                         * Encodes the specified CaseExpression message. Does not implicitly {@link google.analytics.data.v1alpha.DimensionExpression.CaseExpression.verify|verify} messages.
                         * @param message CaseExpression message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.analytics.data.v1alpha.DimensionExpression.ICaseExpression, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CaseExpression message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.DimensionExpression.CaseExpression.verify|verify} messages.
                         * @param message CaseExpression message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.analytics.data.v1alpha.DimensionExpression.ICaseExpression, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CaseExpression message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CaseExpression
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.DimensionExpression.CaseExpression;

                        /**
                         * Decodes a CaseExpression message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CaseExpression
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.DimensionExpression.CaseExpression;

                        /**
                         * Verifies a CaseExpression message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CaseExpression message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CaseExpression
                         */
                        public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.DimensionExpression.CaseExpression;

                        /**
                         * Creates a plain object from a CaseExpression message. Also converts values to other types if specified.
                         * @param message CaseExpression
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.analytics.data.v1alpha.DimensionExpression.CaseExpression, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CaseExpression to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ConcatenateExpression. */
                    interface IConcatenateExpression {

                        /** ConcatenateExpression dimensionNames */
                        dimensionNames?: (string[]|null);

                        /** ConcatenateExpression delimiter */
                        delimiter?: (string|null);
                    }

                    /** Represents a ConcatenateExpression. */
                    class ConcatenateExpression implements IConcatenateExpression {

                        /**
                         * Constructs a new ConcatenateExpression.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.analytics.data.v1alpha.DimensionExpression.IConcatenateExpression);

                        /** ConcatenateExpression dimensionNames. */
                        public dimensionNames: string[];

                        /** ConcatenateExpression delimiter. */
                        public delimiter: string;

                        /**
                         * Creates a new ConcatenateExpression instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ConcatenateExpression instance
                         */
                        public static create(properties?: google.analytics.data.v1alpha.DimensionExpression.IConcatenateExpression): google.analytics.data.v1alpha.DimensionExpression.ConcatenateExpression;

                        /**
                         * Encodes the specified ConcatenateExpression message. Does not implicitly {@link google.analytics.data.v1alpha.DimensionExpression.ConcatenateExpression.verify|verify} messages.
                         * @param message ConcatenateExpression message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.analytics.data.v1alpha.DimensionExpression.IConcatenateExpression, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ConcatenateExpression message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.DimensionExpression.ConcatenateExpression.verify|verify} messages.
                         * @param message ConcatenateExpression message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.analytics.data.v1alpha.DimensionExpression.IConcatenateExpression, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ConcatenateExpression message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ConcatenateExpression
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.DimensionExpression.ConcatenateExpression;

                        /**
                         * Decodes a ConcatenateExpression message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ConcatenateExpression
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.DimensionExpression.ConcatenateExpression;

                        /**
                         * Verifies a ConcatenateExpression message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ConcatenateExpression message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ConcatenateExpression
                         */
                        public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.DimensionExpression.ConcatenateExpression;

                        /**
                         * Creates a plain object from a ConcatenateExpression message. Also converts values to other types if specified.
                         * @param message ConcatenateExpression
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.analytics.data.v1alpha.DimensionExpression.ConcatenateExpression, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ConcatenateExpression to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a Metric. */
                interface IMetric {

                    /** Metric name */
                    name?: (string|null);

                    /** Metric expression */
                    expression?: (string|null);

                    /** Metric invisible */
                    invisible?: (boolean|null);
                }

                /** Represents a Metric. */
                class Metric implements IMetric {

                    /**
                     * Constructs a new Metric.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IMetric);

                    /** Metric name. */
                    public name: string;

                    /** Metric expression. */
                    public expression: string;

                    /** Metric invisible. */
                    public invisible: boolean;

                    /**
                     * Creates a new Metric instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Metric instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IMetric): google.analytics.data.v1alpha.Metric;

                    /**
                     * Encodes the specified Metric message. Does not implicitly {@link google.analytics.data.v1alpha.Metric.verify|verify} messages.
                     * @param message Metric message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Metric message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.Metric.verify|verify} messages.
                     * @param message Metric message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Metric message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Metric
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.Metric;

                    /**
                     * Decodes a Metric message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Metric
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.Metric;

                    /**
                     * Verifies a Metric message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Metric message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Metric
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.Metric;

                    /**
                     * Creates a plain object from a Metric message. Also converts values to other types if specified.
                     * @param message Metric
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.Metric, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Metric to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FilterExpression. */
                interface IFilterExpression {

                    /** FilterExpression andGroup */
                    andGroup?: (google.analytics.data.v1alpha.IFilterExpressionList|null);

                    /** FilterExpression orGroup */
                    orGroup?: (google.analytics.data.v1alpha.IFilterExpressionList|null);

                    /** FilterExpression notExpression */
                    notExpression?: (google.analytics.data.v1alpha.IFilterExpression|null);

                    /** FilterExpression filter */
                    filter?: (google.analytics.data.v1alpha.IFilter|null);
                }

                /** Represents a FilterExpression. */
                class FilterExpression implements IFilterExpression {

                    /**
                     * Constructs a new FilterExpression.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IFilterExpression);

                    /** FilterExpression andGroup. */
                    public andGroup?: (google.analytics.data.v1alpha.IFilterExpressionList|null);

                    /** FilterExpression orGroup. */
                    public orGroup?: (google.analytics.data.v1alpha.IFilterExpressionList|null);

                    /** FilterExpression notExpression. */
                    public notExpression?: (google.analytics.data.v1alpha.IFilterExpression|null);

                    /** FilterExpression filter. */
                    public filter?: (google.analytics.data.v1alpha.IFilter|null);

                    /** FilterExpression expr. */
                    public expr?: ("andGroup"|"orGroup"|"notExpression"|"filter");

                    /**
                     * Creates a new FilterExpression instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FilterExpression instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IFilterExpression): google.analytics.data.v1alpha.FilterExpression;

                    /**
                     * Encodes the specified FilterExpression message. Does not implicitly {@link google.analytics.data.v1alpha.FilterExpression.verify|verify} messages.
                     * @param message FilterExpression message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IFilterExpression, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FilterExpression message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.FilterExpression.verify|verify} messages.
                     * @param message FilterExpression message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IFilterExpression, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FilterExpression message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FilterExpression
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.FilterExpression;

                    /**
                     * Decodes a FilterExpression message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FilterExpression
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.FilterExpression;

                    /**
                     * Verifies a FilterExpression message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FilterExpression message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FilterExpression
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.FilterExpression;

                    /**
                     * Creates a plain object from a FilterExpression message. Also converts values to other types if specified.
                     * @param message FilterExpression
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.FilterExpression, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FilterExpression to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FilterExpressionList. */
                interface IFilterExpressionList {

                    /** FilterExpressionList expressions */
                    expressions?: (google.analytics.data.v1alpha.IFilterExpression[]|null);
                }

                /** Represents a FilterExpressionList. */
                class FilterExpressionList implements IFilterExpressionList {

                    /**
                     * Constructs a new FilterExpressionList.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IFilterExpressionList);

                    /** FilterExpressionList expressions. */
                    public expressions: google.analytics.data.v1alpha.IFilterExpression[];

                    /**
                     * Creates a new FilterExpressionList instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FilterExpressionList instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IFilterExpressionList): google.analytics.data.v1alpha.FilterExpressionList;

                    /**
                     * Encodes the specified FilterExpressionList message. Does not implicitly {@link google.analytics.data.v1alpha.FilterExpressionList.verify|verify} messages.
                     * @param message FilterExpressionList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IFilterExpressionList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FilterExpressionList message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.FilterExpressionList.verify|verify} messages.
                     * @param message FilterExpressionList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IFilterExpressionList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FilterExpressionList message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FilterExpressionList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.FilterExpressionList;

                    /**
                     * Decodes a FilterExpressionList message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FilterExpressionList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.FilterExpressionList;

                    /**
                     * Verifies a FilterExpressionList message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FilterExpressionList message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FilterExpressionList
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.FilterExpressionList;

                    /**
                     * Creates a plain object from a FilterExpressionList message. Also converts values to other types if specified.
                     * @param message FilterExpressionList
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.FilterExpressionList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FilterExpressionList to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Filter. */
                interface IFilter {

                    /** Filter fieldName */
                    fieldName?: (string|null);

                    /** Filter nullFilter */
                    nullFilter?: (boolean|null);

                    /** Filter stringFilter */
                    stringFilter?: (google.analytics.data.v1alpha.Filter.IStringFilter|null);

                    /** Filter inListFilter */
                    inListFilter?: (google.analytics.data.v1alpha.Filter.IInListFilter|null);

                    /** Filter numericFilter */
                    numericFilter?: (google.analytics.data.v1alpha.Filter.INumericFilter|null);

                    /** Filter betweenFilter */
                    betweenFilter?: (google.analytics.data.v1alpha.Filter.IBetweenFilter|null);
                }

                /** Represents a Filter. */
                class Filter implements IFilter {

                    /**
                     * Constructs a new Filter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IFilter);

                    /** Filter fieldName. */
                    public fieldName: string;

                    /** Filter nullFilter. */
                    public nullFilter?: (boolean|null);

                    /** Filter stringFilter. */
                    public stringFilter?: (google.analytics.data.v1alpha.Filter.IStringFilter|null);

                    /** Filter inListFilter. */
                    public inListFilter?: (google.analytics.data.v1alpha.Filter.IInListFilter|null);

                    /** Filter numericFilter. */
                    public numericFilter?: (google.analytics.data.v1alpha.Filter.INumericFilter|null);

                    /** Filter betweenFilter. */
                    public betweenFilter?: (google.analytics.data.v1alpha.Filter.IBetweenFilter|null);

                    /** Filter oneFilter. */
                    public oneFilter?: ("nullFilter"|"stringFilter"|"inListFilter"|"numericFilter"|"betweenFilter");

                    /**
                     * Creates a new Filter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Filter instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IFilter): google.analytics.data.v1alpha.Filter;

                    /**
                     * Encodes the specified Filter message. Does not implicitly {@link google.analytics.data.v1alpha.Filter.verify|verify} messages.
                     * @param message Filter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Filter message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.Filter.verify|verify} messages.
                     * @param message Filter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Filter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Filter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.Filter;

                    /**
                     * Decodes a Filter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Filter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.Filter;

                    /**
                     * Verifies a Filter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Filter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Filter
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.Filter;

                    /**
                     * Creates a plain object from a Filter message. Also converts values to other types if specified.
                     * @param message Filter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.Filter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Filter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Filter {

                    /** Properties of a StringFilter. */
                    interface IStringFilter {

                        /** StringFilter matchType */
                        matchType?: (google.analytics.data.v1alpha.Filter.StringFilter.MatchType|keyof typeof google.analytics.data.v1alpha.Filter.StringFilter.MatchType|null);

                        /** StringFilter value */
                        value?: (string|null);

                        /** StringFilter caseSensitive */
                        caseSensitive?: (boolean|null);
                    }

                    /** Represents a StringFilter. */
                    class StringFilter implements IStringFilter {

                        /**
                         * Constructs a new StringFilter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.analytics.data.v1alpha.Filter.IStringFilter);

                        /** StringFilter matchType. */
                        public matchType: (google.analytics.data.v1alpha.Filter.StringFilter.MatchType|keyof typeof google.analytics.data.v1alpha.Filter.StringFilter.MatchType);

                        /** StringFilter value. */
                        public value: string;

                        /** StringFilter caseSensitive. */
                        public caseSensitive: boolean;

                        /**
                         * Creates a new StringFilter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StringFilter instance
                         */
                        public static create(properties?: google.analytics.data.v1alpha.Filter.IStringFilter): google.analytics.data.v1alpha.Filter.StringFilter;

                        /**
                         * Encodes the specified StringFilter message. Does not implicitly {@link google.analytics.data.v1alpha.Filter.StringFilter.verify|verify} messages.
                         * @param message StringFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.analytics.data.v1alpha.Filter.IStringFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StringFilter message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.Filter.StringFilter.verify|verify} messages.
                         * @param message StringFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.analytics.data.v1alpha.Filter.IStringFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StringFilter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StringFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.Filter.StringFilter;

                        /**
                         * Decodes a StringFilter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StringFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.Filter.StringFilter;

                        /**
                         * Verifies a StringFilter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StringFilter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StringFilter
                         */
                        public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.Filter.StringFilter;

                        /**
                         * Creates a plain object from a StringFilter message. Also converts values to other types if specified.
                         * @param message StringFilter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.analytics.data.v1alpha.Filter.StringFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StringFilter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace StringFilter {

                        /** MatchType enum. */
                        enum MatchType {
                            MATCH_TYPE_UNSPECIFIED = 0,
                            EXACT = 1,
                            BEGINS_WITH = 2,
                            ENDS_WITH = 3,
                            CONTAINS = 4,
                            FULL_REGEXP = 5,
                            PARTIAL_REGEXP = 6
                        }
                    }

                    /** Properties of an InListFilter. */
                    interface IInListFilter {

                        /** InListFilter values */
                        values?: (string[]|null);

                        /** InListFilter caseSensitive */
                        caseSensitive?: (boolean|null);
                    }

                    /** Represents an InListFilter. */
                    class InListFilter implements IInListFilter {

                        /**
                         * Constructs a new InListFilter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.analytics.data.v1alpha.Filter.IInListFilter);

                        /** InListFilter values. */
                        public values: string[];

                        /** InListFilter caseSensitive. */
                        public caseSensitive: boolean;

                        /**
                         * Creates a new InListFilter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InListFilter instance
                         */
                        public static create(properties?: google.analytics.data.v1alpha.Filter.IInListFilter): google.analytics.data.v1alpha.Filter.InListFilter;

                        /**
                         * Encodes the specified InListFilter message. Does not implicitly {@link google.analytics.data.v1alpha.Filter.InListFilter.verify|verify} messages.
                         * @param message InListFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.analytics.data.v1alpha.Filter.IInListFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InListFilter message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.Filter.InListFilter.verify|verify} messages.
                         * @param message InListFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.analytics.data.v1alpha.Filter.IInListFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InListFilter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InListFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.Filter.InListFilter;

                        /**
                         * Decodes an InListFilter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InListFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.Filter.InListFilter;

                        /**
                         * Verifies an InListFilter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InListFilter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InListFilter
                         */
                        public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.Filter.InListFilter;

                        /**
                         * Creates a plain object from an InListFilter message. Also converts values to other types if specified.
                         * @param message InListFilter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.analytics.data.v1alpha.Filter.InListFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InListFilter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a NumericFilter. */
                    interface INumericFilter {

                        /** NumericFilter operation */
                        operation?: (google.analytics.data.v1alpha.Filter.NumericFilter.Operation|keyof typeof google.analytics.data.v1alpha.Filter.NumericFilter.Operation|null);

                        /** NumericFilter value */
                        value?: (google.analytics.data.v1alpha.INumericValue|null);
                    }

                    /** Represents a NumericFilter. */
                    class NumericFilter implements INumericFilter {

                        /**
                         * Constructs a new NumericFilter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.analytics.data.v1alpha.Filter.INumericFilter);

                        /** NumericFilter operation. */
                        public operation: (google.analytics.data.v1alpha.Filter.NumericFilter.Operation|keyof typeof google.analytics.data.v1alpha.Filter.NumericFilter.Operation);

                        /** NumericFilter value. */
                        public value?: (google.analytics.data.v1alpha.INumericValue|null);

                        /**
                         * Creates a new NumericFilter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NumericFilter instance
                         */
                        public static create(properties?: google.analytics.data.v1alpha.Filter.INumericFilter): google.analytics.data.v1alpha.Filter.NumericFilter;

                        /**
                         * Encodes the specified NumericFilter message. Does not implicitly {@link google.analytics.data.v1alpha.Filter.NumericFilter.verify|verify} messages.
                         * @param message NumericFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.analytics.data.v1alpha.Filter.INumericFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NumericFilter message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.Filter.NumericFilter.verify|verify} messages.
                         * @param message NumericFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.analytics.data.v1alpha.Filter.INumericFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NumericFilter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NumericFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.Filter.NumericFilter;

                        /**
                         * Decodes a NumericFilter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NumericFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.Filter.NumericFilter;

                        /**
                         * Verifies a NumericFilter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NumericFilter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NumericFilter
                         */
                        public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.Filter.NumericFilter;

                        /**
                         * Creates a plain object from a NumericFilter message. Also converts values to other types if specified.
                         * @param message NumericFilter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.analytics.data.v1alpha.Filter.NumericFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NumericFilter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace NumericFilter {

                        /** Operation enum. */
                        enum Operation {
                            OPERATION_UNSPECIFIED = 0,
                            EQUAL = 1,
                            LESS_THAN = 2,
                            LESS_THAN_OR_EQUAL = 3,
                            GREATER_THAN = 4,
                            GREATER_THAN_OR_EQUAL = 5
                        }
                    }

                    /** Properties of a BetweenFilter. */
                    interface IBetweenFilter {

                        /** BetweenFilter fromValue */
                        fromValue?: (google.analytics.data.v1alpha.INumericValue|null);

                        /** BetweenFilter toValue */
                        toValue?: (google.analytics.data.v1alpha.INumericValue|null);
                    }

                    /** Represents a BetweenFilter. */
                    class BetweenFilter implements IBetweenFilter {

                        /**
                         * Constructs a new BetweenFilter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.analytics.data.v1alpha.Filter.IBetweenFilter);

                        /** BetweenFilter fromValue. */
                        public fromValue?: (google.analytics.data.v1alpha.INumericValue|null);

                        /** BetweenFilter toValue. */
                        public toValue?: (google.analytics.data.v1alpha.INumericValue|null);

                        /**
                         * Creates a new BetweenFilter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BetweenFilter instance
                         */
                        public static create(properties?: google.analytics.data.v1alpha.Filter.IBetweenFilter): google.analytics.data.v1alpha.Filter.BetweenFilter;

                        /**
                         * Encodes the specified BetweenFilter message. Does not implicitly {@link google.analytics.data.v1alpha.Filter.BetweenFilter.verify|verify} messages.
                         * @param message BetweenFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.analytics.data.v1alpha.Filter.IBetweenFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BetweenFilter message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.Filter.BetweenFilter.verify|verify} messages.
                         * @param message BetweenFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.analytics.data.v1alpha.Filter.IBetweenFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BetweenFilter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BetweenFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.Filter.BetweenFilter;

                        /**
                         * Decodes a BetweenFilter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BetweenFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.Filter.BetweenFilter;

                        /**
                         * Verifies a BetweenFilter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BetweenFilter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BetweenFilter
                         */
                        public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.Filter.BetweenFilter;

                        /**
                         * Creates a plain object from a BetweenFilter message. Also converts values to other types if specified.
                         * @param message BetweenFilter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.analytics.data.v1alpha.Filter.BetweenFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BetweenFilter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of an OrderBy. */
                interface IOrderBy {

                    /** OrderBy metric */
                    metric?: (google.analytics.data.v1alpha.OrderBy.IMetricOrderBy|null);

                    /** OrderBy dimension */
                    dimension?: (google.analytics.data.v1alpha.OrderBy.IDimensionOrderBy|null);

                    /** OrderBy pivot */
                    pivot?: (google.analytics.data.v1alpha.OrderBy.IPivotOrderBy|null);

                    /** OrderBy desc */
                    desc?: (boolean|null);
                }

                /** Represents an OrderBy. */
                class OrderBy implements IOrderBy {

                    /**
                     * Constructs a new OrderBy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IOrderBy);

                    /** OrderBy metric. */
                    public metric?: (google.analytics.data.v1alpha.OrderBy.IMetricOrderBy|null);

                    /** OrderBy dimension. */
                    public dimension?: (google.analytics.data.v1alpha.OrderBy.IDimensionOrderBy|null);

                    /** OrderBy pivot. */
                    public pivot?: (google.analytics.data.v1alpha.OrderBy.IPivotOrderBy|null);

                    /** OrderBy desc. */
                    public desc: boolean;

                    /** OrderBy oneOrderBy. */
                    public oneOrderBy?: ("metric"|"dimension"|"pivot");

                    /**
                     * Creates a new OrderBy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OrderBy instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IOrderBy): google.analytics.data.v1alpha.OrderBy;

                    /**
                     * Encodes the specified OrderBy message. Does not implicitly {@link google.analytics.data.v1alpha.OrderBy.verify|verify} messages.
                     * @param message OrderBy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IOrderBy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OrderBy message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.OrderBy.verify|verify} messages.
                     * @param message OrderBy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IOrderBy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OrderBy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OrderBy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.OrderBy;

                    /**
                     * Decodes an OrderBy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OrderBy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.OrderBy;

                    /**
                     * Verifies an OrderBy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OrderBy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OrderBy
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.OrderBy;

                    /**
                     * Creates a plain object from an OrderBy message. Also converts values to other types if specified.
                     * @param message OrderBy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.OrderBy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OrderBy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace OrderBy {

                    /** Properties of a MetricOrderBy. */
                    interface IMetricOrderBy {

                        /** MetricOrderBy metricName */
                        metricName?: (string|null);
                    }

                    /** Represents a MetricOrderBy. */
                    class MetricOrderBy implements IMetricOrderBy {

                        /**
                         * Constructs a new MetricOrderBy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.analytics.data.v1alpha.OrderBy.IMetricOrderBy);

                        /** MetricOrderBy metricName. */
                        public metricName: string;

                        /**
                         * Creates a new MetricOrderBy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MetricOrderBy instance
                         */
                        public static create(properties?: google.analytics.data.v1alpha.OrderBy.IMetricOrderBy): google.analytics.data.v1alpha.OrderBy.MetricOrderBy;

                        /**
                         * Encodes the specified MetricOrderBy message. Does not implicitly {@link google.analytics.data.v1alpha.OrderBy.MetricOrderBy.verify|verify} messages.
                         * @param message MetricOrderBy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.analytics.data.v1alpha.OrderBy.IMetricOrderBy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MetricOrderBy message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.OrderBy.MetricOrderBy.verify|verify} messages.
                         * @param message MetricOrderBy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.analytics.data.v1alpha.OrderBy.IMetricOrderBy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MetricOrderBy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MetricOrderBy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.OrderBy.MetricOrderBy;

                        /**
                         * Decodes a MetricOrderBy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MetricOrderBy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.OrderBy.MetricOrderBy;

                        /**
                         * Verifies a MetricOrderBy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MetricOrderBy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MetricOrderBy
                         */
                        public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.OrderBy.MetricOrderBy;

                        /**
                         * Creates a plain object from a MetricOrderBy message. Also converts values to other types if specified.
                         * @param message MetricOrderBy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.analytics.data.v1alpha.OrderBy.MetricOrderBy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MetricOrderBy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DimensionOrderBy. */
                    interface IDimensionOrderBy {

                        /** DimensionOrderBy dimensionName */
                        dimensionName?: (string|null);

                        /** DimensionOrderBy orderType */
                        orderType?: (google.analytics.data.v1alpha.OrderBy.DimensionOrderBy.OrderType|keyof typeof google.analytics.data.v1alpha.OrderBy.DimensionOrderBy.OrderType|null);
                    }

                    /** Represents a DimensionOrderBy. */
                    class DimensionOrderBy implements IDimensionOrderBy {

                        /**
                         * Constructs a new DimensionOrderBy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.analytics.data.v1alpha.OrderBy.IDimensionOrderBy);

                        /** DimensionOrderBy dimensionName. */
                        public dimensionName: string;

                        /** DimensionOrderBy orderType. */
                        public orderType: (google.analytics.data.v1alpha.OrderBy.DimensionOrderBy.OrderType|keyof typeof google.analytics.data.v1alpha.OrderBy.DimensionOrderBy.OrderType);

                        /**
                         * Creates a new DimensionOrderBy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DimensionOrderBy instance
                         */
                        public static create(properties?: google.analytics.data.v1alpha.OrderBy.IDimensionOrderBy): google.analytics.data.v1alpha.OrderBy.DimensionOrderBy;

                        /**
                         * Encodes the specified DimensionOrderBy message. Does not implicitly {@link google.analytics.data.v1alpha.OrderBy.DimensionOrderBy.verify|verify} messages.
                         * @param message DimensionOrderBy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.analytics.data.v1alpha.OrderBy.IDimensionOrderBy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DimensionOrderBy message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.OrderBy.DimensionOrderBy.verify|verify} messages.
                         * @param message DimensionOrderBy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.analytics.data.v1alpha.OrderBy.IDimensionOrderBy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DimensionOrderBy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DimensionOrderBy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.OrderBy.DimensionOrderBy;

                        /**
                         * Decodes a DimensionOrderBy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DimensionOrderBy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.OrderBy.DimensionOrderBy;

                        /**
                         * Verifies a DimensionOrderBy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DimensionOrderBy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DimensionOrderBy
                         */
                        public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.OrderBy.DimensionOrderBy;

                        /**
                         * Creates a plain object from a DimensionOrderBy message. Also converts values to other types if specified.
                         * @param message DimensionOrderBy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.analytics.data.v1alpha.OrderBy.DimensionOrderBy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DimensionOrderBy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace DimensionOrderBy {

                        /** OrderType enum. */
                        enum OrderType {
                            ORDER_TYPE_UNSPECIFIED = 0,
                            ALPHANUMERIC = 1,
                            CASE_INSENSITIVE_ALPHANUMERIC = 2,
                            NUMERIC = 3
                        }
                    }

                    /** Properties of a PivotOrderBy. */
                    interface IPivotOrderBy {

                        /** PivotOrderBy metricName */
                        metricName?: (string|null);

                        /** PivotOrderBy pivotSelections */
                        pivotSelections?: (google.analytics.data.v1alpha.OrderBy.PivotOrderBy.IPivotSelection[]|null);
                    }

                    /** Represents a PivotOrderBy. */
                    class PivotOrderBy implements IPivotOrderBy {

                        /**
                         * Constructs a new PivotOrderBy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.analytics.data.v1alpha.OrderBy.IPivotOrderBy);

                        /** PivotOrderBy metricName. */
                        public metricName: string;

                        /** PivotOrderBy pivotSelections. */
                        public pivotSelections: google.analytics.data.v1alpha.OrderBy.PivotOrderBy.IPivotSelection[];

                        /**
                         * Creates a new PivotOrderBy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PivotOrderBy instance
                         */
                        public static create(properties?: google.analytics.data.v1alpha.OrderBy.IPivotOrderBy): google.analytics.data.v1alpha.OrderBy.PivotOrderBy;

                        /**
                         * Encodes the specified PivotOrderBy message. Does not implicitly {@link google.analytics.data.v1alpha.OrderBy.PivotOrderBy.verify|verify} messages.
                         * @param message PivotOrderBy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.analytics.data.v1alpha.OrderBy.IPivotOrderBy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PivotOrderBy message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.OrderBy.PivotOrderBy.verify|verify} messages.
                         * @param message PivotOrderBy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.analytics.data.v1alpha.OrderBy.IPivotOrderBy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PivotOrderBy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PivotOrderBy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.OrderBy.PivotOrderBy;

                        /**
                         * Decodes a PivotOrderBy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PivotOrderBy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.OrderBy.PivotOrderBy;

                        /**
                         * Verifies a PivotOrderBy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PivotOrderBy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PivotOrderBy
                         */
                        public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.OrderBy.PivotOrderBy;

                        /**
                         * Creates a plain object from a PivotOrderBy message. Also converts values to other types if specified.
                         * @param message PivotOrderBy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.analytics.data.v1alpha.OrderBy.PivotOrderBy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PivotOrderBy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace PivotOrderBy {

                        /** Properties of a PivotSelection. */
                        interface IPivotSelection {

                            /** PivotSelection dimensionName */
                            dimensionName?: (string|null);

                            /** PivotSelection dimensionValue */
                            dimensionValue?: (string|null);
                        }

                        /** Represents a PivotSelection. */
                        class PivotSelection implements IPivotSelection {

                            /**
                             * Constructs a new PivotSelection.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.analytics.data.v1alpha.OrderBy.PivotOrderBy.IPivotSelection);

                            /** PivotSelection dimensionName. */
                            public dimensionName: string;

                            /** PivotSelection dimensionValue. */
                            public dimensionValue: string;

                            /**
                             * Creates a new PivotSelection instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PivotSelection instance
                             */
                            public static create(properties?: google.analytics.data.v1alpha.OrderBy.PivotOrderBy.IPivotSelection): google.analytics.data.v1alpha.OrderBy.PivotOrderBy.PivotSelection;

                            /**
                             * Encodes the specified PivotSelection message. Does not implicitly {@link google.analytics.data.v1alpha.OrderBy.PivotOrderBy.PivotSelection.verify|verify} messages.
                             * @param message PivotSelection message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.analytics.data.v1alpha.OrderBy.PivotOrderBy.IPivotSelection, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PivotSelection message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.OrderBy.PivotOrderBy.PivotSelection.verify|verify} messages.
                             * @param message PivotSelection message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.analytics.data.v1alpha.OrderBy.PivotOrderBy.IPivotSelection, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PivotSelection message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PivotSelection
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.OrderBy.PivotOrderBy.PivotSelection;

                            /**
                             * Decodes a PivotSelection message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PivotSelection
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.OrderBy.PivotOrderBy.PivotSelection;

                            /**
                             * Verifies a PivotSelection message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PivotSelection message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PivotSelection
                             */
                            public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.OrderBy.PivotOrderBy.PivotSelection;

                            /**
                             * Creates a plain object from a PivotSelection message. Also converts values to other types if specified.
                             * @param message PivotSelection
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.analytics.data.v1alpha.OrderBy.PivotOrderBy.PivotSelection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PivotSelection to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }

                /** Properties of a Pivot. */
                interface IPivot {

                    /** Pivot fieldNames */
                    fieldNames?: (string[]|null);

                    /** Pivot orderBys */
                    orderBys?: (google.analytics.data.v1alpha.IOrderBy[]|null);

                    /** Pivot offset */
                    offset?: (number|Long|string|null);

                    /** Pivot limit */
                    limit?: (number|Long|string|null);

                    /** Pivot metricAggregations */
                    metricAggregations?: (google.analytics.data.v1alpha.MetricAggregation[]|null);
                }

                /** Represents a Pivot. */
                class Pivot implements IPivot {

                    /**
                     * Constructs a new Pivot.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IPivot);

                    /** Pivot fieldNames. */
                    public fieldNames: string[];

                    /** Pivot orderBys. */
                    public orderBys: google.analytics.data.v1alpha.IOrderBy[];

                    /** Pivot offset. */
                    public offset: (number|Long|string);

                    /** Pivot limit. */
                    public limit: (number|Long|string);

                    /** Pivot metricAggregations. */
                    public metricAggregations: google.analytics.data.v1alpha.MetricAggregation[];

                    /**
                     * Creates a new Pivot instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Pivot instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IPivot): google.analytics.data.v1alpha.Pivot;

                    /**
                     * Encodes the specified Pivot message. Does not implicitly {@link google.analytics.data.v1alpha.Pivot.verify|verify} messages.
                     * @param message Pivot message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IPivot, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Pivot message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.Pivot.verify|verify} messages.
                     * @param message Pivot message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IPivot, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Pivot message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Pivot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.Pivot;

                    /**
                     * Decodes a Pivot message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Pivot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.Pivot;

                    /**
                     * Verifies a Pivot message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Pivot message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Pivot
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.Pivot;

                    /**
                     * Creates a plain object from a Pivot message. Also converts values to other types if specified.
                     * @param message Pivot
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.Pivot, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Pivot to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CohortSpec. */
                interface ICohortSpec {

                    /** CohortSpec cohorts */
                    cohorts?: (google.analytics.data.v1alpha.ICohort[]|null);

                    /** CohortSpec cohortsRange */
                    cohortsRange?: (google.analytics.data.v1alpha.ICohortsRange|null);

                    /** CohortSpec cohortReportSettings */
                    cohortReportSettings?: (google.analytics.data.v1alpha.ICohortReportSettings|null);
                }

                /** Represents a CohortSpec. */
                class CohortSpec implements ICohortSpec {

                    /**
                     * Constructs a new CohortSpec.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.ICohortSpec);

                    /** CohortSpec cohorts. */
                    public cohorts: google.analytics.data.v1alpha.ICohort[];

                    /** CohortSpec cohortsRange. */
                    public cohortsRange?: (google.analytics.data.v1alpha.ICohortsRange|null);

                    /** CohortSpec cohortReportSettings. */
                    public cohortReportSettings?: (google.analytics.data.v1alpha.ICohortReportSettings|null);

                    /**
                     * Creates a new CohortSpec instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CohortSpec instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.ICohortSpec): google.analytics.data.v1alpha.CohortSpec;

                    /**
                     * Encodes the specified CohortSpec message. Does not implicitly {@link google.analytics.data.v1alpha.CohortSpec.verify|verify} messages.
                     * @param message CohortSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.ICohortSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CohortSpec message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.CohortSpec.verify|verify} messages.
                     * @param message CohortSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.ICohortSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CohortSpec message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CohortSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.CohortSpec;

                    /**
                     * Decodes a CohortSpec message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CohortSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.CohortSpec;

                    /**
                     * Verifies a CohortSpec message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CohortSpec message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CohortSpec
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.CohortSpec;

                    /**
                     * Creates a plain object from a CohortSpec message. Also converts values to other types if specified.
                     * @param message CohortSpec
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.CohortSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CohortSpec to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Cohort. */
                interface ICohort {

                    /** Cohort name */
                    name?: (string|null);

                    /** Cohort dimension */
                    dimension?: (string|null);

                    /** Cohort dateRange */
                    dateRange?: (google.analytics.data.v1alpha.IDateRange|null);
                }

                /** Represents a Cohort. */
                class Cohort implements ICohort {

                    /**
                     * Constructs a new Cohort.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.ICohort);

                    /** Cohort name. */
                    public name: string;

                    /** Cohort dimension. */
                    public dimension: string;

                    /** Cohort dateRange. */
                    public dateRange?: (google.analytics.data.v1alpha.IDateRange|null);

                    /**
                     * Creates a new Cohort instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Cohort instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.ICohort): google.analytics.data.v1alpha.Cohort;

                    /**
                     * Encodes the specified Cohort message. Does not implicitly {@link google.analytics.data.v1alpha.Cohort.verify|verify} messages.
                     * @param message Cohort message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.ICohort, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Cohort message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.Cohort.verify|verify} messages.
                     * @param message Cohort message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.ICohort, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Cohort message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Cohort
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.Cohort;

                    /**
                     * Decodes a Cohort message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Cohort
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.Cohort;

                    /**
                     * Verifies a Cohort message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Cohort message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Cohort
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.Cohort;

                    /**
                     * Creates a plain object from a Cohort message. Also converts values to other types if specified.
                     * @param message Cohort
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.Cohort, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Cohort to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CohortsRange. */
                interface ICohortsRange {

                    /** CohortsRange granularity */
                    granularity?: (google.analytics.data.v1alpha.CohortsRange.Granularity|keyof typeof google.analytics.data.v1alpha.CohortsRange.Granularity|null);

                    /** CohortsRange startOffset */
                    startOffset?: (number|null);

                    /** CohortsRange endOffset */
                    endOffset?: (number|null);
                }

                /** Represents a CohortsRange. */
                class CohortsRange implements ICohortsRange {

                    /**
                     * Constructs a new CohortsRange.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.ICohortsRange);

                    /** CohortsRange granularity. */
                    public granularity: (google.analytics.data.v1alpha.CohortsRange.Granularity|keyof typeof google.analytics.data.v1alpha.CohortsRange.Granularity);

                    /** CohortsRange startOffset. */
                    public startOffset: number;

                    /** CohortsRange endOffset. */
                    public endOffset: number;

                    /**
                     * Creates a new CohortsRange instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CohortsRange instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.ICohortsRange): google.analytics.data.v1alpha.CohortsRange;

                    /**
                     * Encodes the specified CohortsRange message. Does not implicitly {@link google.analytics.data.v1alpha.CohortsRange.verify|verify} messages.
                     * @param message CohortsRange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.ICohortsRange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CohortsRange message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.CohortsRange.verify|verify} messages.
                     * @param message CohortsRange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.ICohortsRange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CohortsRange message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CohortsRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.CohortsRange;

                    /**
                     * Decodes a CohortsRange message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CohortsRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.CohortsRange;

                    /**
                     * Verifies a CohortsRange message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CohortsRange message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CohortsRange
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.CohortsRange;

                    /**
                     * Creates a plain object from a CohortsRange message. Also converts values to other types if specified.
                     * @param message CohortsRange
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.CohortsRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CohortsRange to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace CohortsRange {

                    /** Granularity enum. */
                    enum Granularity {
                        GRANULARITY_UNSPECIFIED = 0,
                        DAILY = 1,
                        WEEKLY = 2,
                        MONTHLY = 3
                    }
                }

                /** Properties of a CohortReportSettings. */
                interface ICohortReportSettings {

                    /** CohortReportSettings accumulate */
                    accumulate?: (boolean|null);
                }

                /** Represents a CohortReportSettings. */
                class CohortReportSettings implements ICohortReportSettings {

                    /**
                     * Constructs a new CohortReportSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.ICohortReportSettings);

                    /** CohortReportSettings accumulate. */
                    public accumulate: boolean;

                    /**
                     * Creates a new CohortReportSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CohortReportSettings instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.ICohortReportSettings): google.analytics.data.v1alpha.CohortReportSettings;

                    /**
                     * Encodes the specified CohortReportSettings message. Does not implicitly {@link google.analytics.data.v1alpha.CohortReportSettings.verify|verify} messages.
                     * @param message CohortReportSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.ICohortReportSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CohortReportSettings message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.CohortReportSettings.verify|verify} messages.
                     * @param message CohortReportSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.ICohortReportSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CohortReportSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CohortReportSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.CohortReportSettings;

                    /**
                     * Decodes a CohortReportSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CohortReportSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.CohortReportSettings;

                    /**
                     * Verifies a CohortReportSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CohortReportSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CohortReportSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.CohortReportSettings;

                    /**
                     * Creates a plain object from a CohortReportSettings message. Also converts values to other types if specified.
                     * @param message CohortReportSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.CohortReportSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CohortReportSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ResponseMetaData. */
                interface IResponseMetaData {

                    /** ResponseMetaData dataLossFromOtherRow */
                    dataLossFromOtherRow?: (boolean|null);
                }

                /** Represents a ResponseMetaData. */
                class ResponseMetaData implements IResponseMetaData {

                    /**
                     * Constructs a new ResponseMetaData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IResponseMetaData);

                    /** ResponseMetaData dataLossFromOtherRow. */
                    public dataLossFromOtherRow: boolean;

                    /**
                     * Creates a new ResponseMetaData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResponseMetaData instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IResponseMetaData): google.analytics.data.v1alpha.ResponseMetaData;

                    /**
                     * Encodes the specified ResponseMetaData message. Does not implicitly {@link google.analytics.data.v1alpha.ResponseMetaData.verify|verify} messages.
                     * @param message ResponseMetaData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IResponseMetaData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResponseMetaData message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.ResponseMetaData.verify|verify} messages.
                     * @param message ResponseMetaData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IResponseMetaData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResponseMetaData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResponseMetaData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.ResponseMetaData;

                    /**
                     * Decodes a ResponseMetaData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResponseMetaData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.ResponseMetaData;

                    /**
                     * Verifies a ResponseMetaData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResponseMetaData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResponseMetaData
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.ResponseMetaData;

                    /**
                     * Creates a plain object from a ResponseMetaData message. Also converts values to other types if specified.
                     * @param message ResponseMetaData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.ResponseMetaData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResponseMetaData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DimensionHeader. */
                interface IDimensionHeader {

                    /** DimensionHeader name */
                    name?: (string|null);
                }

                /** Represents a DimensionHeader. */
                class DimensionHeader implements IDimensionHeader {

                    /**
                     * Constructs a new DimensionHeader.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IDimensionHeader);

                    /** DimensionHeader name. */
                    public name: string;

                    /**
                     * Creates a new DimensionHeader instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DimensionHeader instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IDimensionHeader): google.analytics.data.v1alpha.DimensionHeader;

                    /**
                     * Encodes the specified DimensionHeader message. Does not implicitly {@link google.analytics.data.v1alpha.DimensionHeader.verify|verify} messages.
                     * @param message DimensionHeader message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IDimensionHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DimensionHeader message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.DimensionHeader.verify|verify} messages.
                     * @param message DimensionHeader message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IDimensionHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DimensionHeader message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DimensionHeader
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.DimensionHeader;

                    /**
                     * Decodes a DimensionHeader message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DimensionHeader
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.DimensionHeader;

                    /**
                     * Verifies a DimensionHeader message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DimensionHeader message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DimensionHeader
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.DimensionHeader;

                    /**
                     * Creates a plain object from a DimensionHeader message. Also converts values to other types if specified.
                     * @param message DimensionHeader
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.DimensionHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DimensionHeader to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MetricHeader. */
                interface IMetricHeader {

                    /** MetricHeader name */
                    name?: (string|null);

                    /** MetricHeader type */
                    type?: (google.analytics.data.v1alpha.MetricType|keyof typeof google.analytics.data.v1alpha.MetricType|null);
                }

                /** Represents a MetricHeader. */
                class MetricHeader implements IMetricHeader {

                    /**
                     * Constructs a new MetricHeader.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IMetricHeader);

                    /** MetricHeader name. */
                    public name: string;

                    /** MetricHeader type. */
                    public type: (google.analytics.data.v1alpha.MetricType|keyof typeof google.analytics.data.v1alpha.MetricType);

                    /**
                     * Creates a new MetricHeader instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MetricHeader instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IMetricHeader): google.analytics.data.v1alpha.MetricHeader;

                    /**
                     * Encodes the specified MetricHeader message. Does not implicitly {@link google.analytics.data.v1alpha.MetricHeader.verify|verify} messages.
                     * @param message MetricHeader message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IMetricHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MetricHeader message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.MetricHeader.verify|verify} messages.
                     * @param message MetricHeader message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IMetricHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetricHeader message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MetricHeader
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.MetricHeader;

                    /**
                     * Decodes a MetricHeader message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MetricHeader
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.MetricHeader;

                    /**
                     * Verifies a MetricHeader message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MetricHeader message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetricHeader
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.MetricHeader;

                    /**
                     * Creates a plain object from a MetricHeader message. Also converts values to other types if specified.
                     * @param message MetricHeader
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.MetricHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetricHeader to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PivotHeader. */
                interface IPivotHeader {

                    /** PivotHeader pivotDimensionHeaders */
                    pivotDimensionHeaders?: (google.analytics.data.v1alpha.IPivotDimensionHeader[]|null);

                    /** PivotHeader rowCount */
                    rowCount?: (number|null);
                }

                /** Represents a PivotHeader. */
                class PivotHeader implements IPivotHeader {

                    /**
                     * Constructs a new PivotHeader.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IPivotHeader);

                    /** PivotHeader pivotDimensionHeaders. */
                    public pivotDimensionHeaders: google.analytics.data.v1alpha.IPivotDimensionHeader[];

                    /** PivotHeader rowCount. */
                    public rowCount: number;

                    /**
                     * Creates a new PivotHeader instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PivotHeader instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IPivotHeader): google.analytics.data.v1alpha.PivotHeader;

                    /**
                     * Encodes the specified PivotHeader message. Does not implicitly {@link google.analytics.data.v1alpha.PivotHeader.verify|verify} messages.
                     * @param message PivotHeader message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IPivotHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PivotHeader message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.PivotHeader.verify|verify} messages.
                     * @param message PivotHeader message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IPivotHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PivotHeader message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PivotHeader
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.PivotHeader;

                    /**
                     * Decodes a PivotHeader message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PivotHeader
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.PivotHeader;

                    /**
                     * Verifies a PivotHeader message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PivotHeader message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PivotHeader
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.PivotHeader;

                    /**
                     * Creates a plain object from a PivotHeader message. Also converts values to other types if specified.
                     * @param message PivotHeader
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.PivotHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PivotHeader to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PivotDimensionHeader. */
                interface IPivotDimensionHeader {

                    /** PivotDimensionHeader dimensionValues */
                    dimensionValues?: (google.analytics.data.v1alpha.IDimensionValue[]|null);
                }

                /** Represents a PivotDimensionHeader. */
                class PivotDimensionHeader implements IPivotDimensionHeader {

                    /**
                     * Constructs a new PivotDimensionHeader.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IPivotDimensionHeader);

                    /** PivotDimensionHeader dimensionValues. */
                    public dimensionValues: google.analytics.data.v1alpha.IDimensionValue[];

                    /**
                     * Creates a new PivotDimensionHeader instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PivotDimensionHeader instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IPivotDimensionHeader): google.analytics.data.v1alpha.PivotDimensionHeader;

                    /**
                     * Encodes the specified PivotDimensionHeader message. Does not implicitly {@link google.analytics.data.v1alpha.PivotDimensionHeader.verify|verify} messages.
                     * @param message PivotDimensionHeader message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IPivotDimensionHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PivotDimensionHeader message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.PivotDimensionHeader.verify|verify} messages.
                     * @param message PivotDimensionHeader message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IPivotDimensionHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PivotDimensionHeader message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PivotDimensionHeader
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.PivotDimensionHeader;

                    /**
                     * Decodes a PivotDimensionHeader message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PivotDimensionHeader
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.PivotDimensionHeader;

                    /**
                     * Verifies a PivotDimensionHeader message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PivotDimensionHeader message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PivotDimensionHeader
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.PivotDimensionHeader;

                    /**
                     * Creates a plain object from a PivotDimensionHeader message. Also converts values to other types if specified.
                     * @param message PivotDimensionHeader
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.PivotDimensionHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PivotDimensionHeader to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Row. */
                interface IRow {

                    /** Row dimensionValues */
                    dimensionValues?: (google.analytics.data.v1alpha.IDimensionValue[]|null);

                    /** Row metricValues */
                    metricValues?: (google.analytics.data.v1alpha.IMetricValue[]|null);
                }

                /** Represents a Row. */
                class Row implements IRow {

                    /**
                     * Constructs a new Row.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IRow);

                    /** Row dimensionValues. */
                    public dimensionValues: google.analytics.data.v1alpha.IDimensionValue[];

                    /** Row metricValues. */
                    public metricValues: google.analytics.data.v1alpha.IMetricValue[];

                    /**
                     * Creates a new Row instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Row instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IRow): google.analytics.data.v1alpha.Row;

                    /**
                     * Encodes the specified Row message. Does not implicitly {@link google.analytics.data.v1alpha.Row.verify|verify} messages.
                     * @param message Row message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IRow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Row message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.Row.verify|verify} messages.
                     * @param message Row message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IRow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Row message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Row
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.Row;

                    /**
                     * Decodes a Row message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Row
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.Row;

                    /**
                     * Verifies a Row message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Row message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Row
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.Row;

                    /**
                     * Creates a plain object from a Row message. Also converts values to other types if specified.
                     * @param message Row
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.Row, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Row to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DimensionValue. */
                interface IDimensionValue {

                    /** DimensionValue value */
                    value?: (string|null);
                }

                /** Represents a DimensionValue. */
                class DimensionValue implements IDimensionValue {

                    /**
                     * Constructs a new DimensionValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IDimensionValue);

                    /** DimensionValue value. */
                    public value?: (string|null);

                    /** DimensionValue oneValue. */
                    public oneValue?: "value";

                    /**
                     * Creates a new DimensionValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DimensionValue instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IDimensionValue): google.analytics.data.v1alpha.DimensionValue;

                    /**
                     * Encodes the specified DimensionValue message. Does not implicitly {@link google.analytics.data.v1alpha.DimensionValue.verify|verify} messages.
                     * @param message DimensionValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IDimensionValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DimensionValue message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.DimensionValue.verify|verify} messages.
                     * @param message DimensionValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IDimensionValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DimensionValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DimensionValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.DimensionValue;

                    /**
                     * Decodes a DimensionValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DimensionValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.DimensionValue;

                    /**
                     * Verifies a DimensionValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DimensionValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DimensionValue
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.DimensionValue;

                    /**
                     * Creates a plain object from a DimensionValue message. Also converts values to other types if specified.
                     * @param message DimensionValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.DimensionValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DimensionValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MetricValue. */
                interface IMetricValue {

                    /** MetricValue value */
                    value?: (string|null);
                }

                /** Represents a MetricValue. */
                class MetricValue implements IMetricValue {

                    /**
                     * Constructs a new MetricValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IMetricValue);

                    /** MetricValue value. */
                    public value?: (string|null);

                    /** MetricValue oneValue. */
                    public oneValue?: "value";

                    /**
                     * Creates a new MetricValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MetricValue instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IMetricValue): google.analytics.data.v1alpha.MetricValue;

                    /**
                     * Encodes the specified MetricValue message. Does not implicitly {@link google.analytics.data.v1alpha.MetricValue.verify|verify} messages.
                     * @param message MetricValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IMetricValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MetricValue message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.MetricValue.verify|verify} messages.
                     * @param message MetricValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IMetricValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetricValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MetricValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.MetricValue;

                    /**
                     * Decodes a MetricValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MetricValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.MetricValue;

                    /**
                     * Verifies a MetricValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MetricValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetricValue
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.MetricValue;

                    /**
                     * Creates a plain object from a MetricValue message. Also converts values to other types if specified.
                     * @param message MetricValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.MetricValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetricValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a NumericValue. */
                interface INumericValue {

                    /** NumericValue int64Value */
                    int64Value?: (number|Long|string|null);

                    /** NumericValue doubleValue */
                    doubleValue?: (number|null);
                }

                /** Represents a NumericValue. */
                class NumericValue implements INumericValue {

                    /**
                     * Constructs a new NumericValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.INumericValue);

                    /** NumericValue int64Value. */
                    public int64Value?: (number|Long|string|null);

                    /** NumericValue doubleValue. */
                    public doubleValue?: (number|null);

                    /** NumericValue oneValue. */
                    public oneValue?: ("int64Value"|"doubleValue");

                    /**
                     * Creates a new NumericValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NumericValue instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.INumericValue): google.analytics.data.v1alpha.NumericValue;

                    /**
                     * Encodes the specified NumericValue message. Does not implicitly {@link google.analytics.data.v1alpha.NumericValue.verify|verify} messages.
                     * @param message NumericValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.INumericValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NumericValue message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.NumericValue.verify|verify} messages.
                     * @param message NumericValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.INumericValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NumericValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NumericValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.NumericValue;

                    /**
                     * Decodes a NumericValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NumericValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.NumericValue;

                    /**
                     * Verifies a NumericValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NumericValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NumericValue
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.NumericValue;

                    /**
                     * Creates a plain object from a NumericValue message. Also converts values to other types if specified.
                     * @param message NumericValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.NumericValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NumericValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PropertyQuota. */
                interface IPropertyQuota {

                    /** PropertyQuota tokensPerDay */
                    tokensPerDay?: (google.analytics.data.v1alpha.IQuotaStatus|null);

                    /** PropertyQuota tokensPerHour */
                    tokensPerHour?: (google.analytics.data.v1alpha.IQuotaStatus|null);

                    /** PropertyQuota concurrentRequests */
                    concurrentRequests?: (google.analytics.data.v1alpha.IQuotaStatus|null);

                    /** PropertyQuota serverErrorsPerProjectPerHour */
                    serverErrorsPerProjectPerHour?: (google.analytics.data.v1alpha.IQuotaStatus|null);
                }

                /** Represents a PropertyQuota. */
                class PropertyQuota implements IPropertyQuota {

                    /**
                     * Constructs a new PropertyQuota.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IPropertyQuota);

                    /** PropertyQuota tokensPerDay. */
                    public tokensPerDay?: (google.analytics.data.v1alpha.IQuotaStatus|null);

                    /** PropertyQuota tokensPerHour. */
                    public tokensPerHour?: (google.analytics.data.v1alpha.IQuotaStatus|null);

                    /** PropertyQuota concurrentRequests. */
                    public concurrentRequests?: (google.analytics.data.v1alpha.IQuotaStatus|null);

                    /** PropertyQuota serverErrorsPerProjectPerHour. */
                    public serverErrorsPerProjectPerHour?: (google.analytics.data.v1alpha.IQuotaStatus|null);

                    /**
                     * Creates a new PropertyQuota instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PropertyQuota instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IPropertyQuota): google.analytics.data.v1alpha.PropertyQuota;

                    /**
                     * Encodes the specified PropertyQuota message. Does not implicitly {@link google.analytics.data.v1alpha.PropertyQuota.verify|verify} messages.
                     * @param message PropertyQuota message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IPropertyQuota, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PropertyQuota message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.PropertyQuota.verify|verify} messages.
                     * @param message PropertyQuota message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IPropertyQuota, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PropertyQuota message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PropertyQuota
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.PropertyQuota;

                    /**
                     * Decodes a PropertyQuota message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PropertyQuota
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.PropertyQuota;

                    /**
                     * Verifies a PropertyQuota message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PropertyQuota message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PropertyQuota
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.PropertyQuota;

                    /**
                     * Creates a plain object from a PropertyQuota message. Also converts values to other types if specified.
                     * @param message PropertyQuota
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.PropertyQuota, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PropertyQuota to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QuotaStatus. */
                interface IQuotaStatus {

                    /** QuotaStatus consumed */
                    consumed?: (number|null);

                    /** QuotaStatus remaining */
                    remaining?: (number|null);
                }

                /** Represents a QuotaStatus. */
                class QuotaStatus implements IQuotaStatus {

                    /**
                     * Constructs a new QuotaStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IQuotaStatus);

                    /** QuotaStatus consumed. */
                    public consumed: number;

                    /** QuotaStatus remaining. */
                    public remaining: number;

                    /**
                     * Creates a new QuotaStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QuotaStatus instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IQuotaStatus): google.analytics.data.v1alpha.QuotaStatus;

                    /**
                     * Encodes the specified QuotaStatus message. Does not implicitly {@link google.analytics.data.v1alpha.QuotaStatus.verify|verify} messages.
                     * @param message QuotaStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IQuotaStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QuotaStatus message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.QuotaStatus.verify|verify} messages.
                     * @param message QuotaStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IQuotaStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QuotaStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QuotaStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.QuotaStatus;

                    /**
                     * Decodes a QuotaStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QuotaStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.QuotaStatus;

                    /**
                     * Verifies a QuotaStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QuotaStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QuotaStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.QuotaStatus;

                    /**
                     * Creates a plain object from a QuotaStatus message. Also converts values to other types if specified.
                     * @param message QuotaStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.QuotaStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QuotaStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DimensionMetadata. */
                interface IDimensionMetadata {

                    /** DimensionMetadata apiName */
                    apiName?: (string|null);

                    /** DimensionMetadata uiName */
                    uiName?: (string|null);

                    /** DimensionMetadata description */
                    description?: (string|null);

                    /** DimensionMetadata deprecatedApiNames */
                    deprecatedApiNames?: (string[]|null);

                    /** DimensionMetadata customDefinition */
                    customDefinition?: (boolean|null);
                }

                /** Represents a DimensionMetadata. */
                class DimensionMetadata implements IDimensionMetadata {

                    /**
                     * Constructs a new DimensionMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IDimensionMetadata);

                    /** DimensionMetadata apiName. */
                    public apiName: string;

                    /** DimensionMetadata uiName. */
                    public uiName: string;

                    /** DimensionMetadata description. */
                    public description: string;

                    /** DimensionMetadata deprecatedApiNames. */
                    public deprecatedApiNames: string[];

                    /** DimensionMetadata customDefinition. */
                    public customDefinition: boolean;

                    /**
                     * Creates a new DimensionMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DimensionMetadata instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IDimensionMetadata): google.analytics.data.v1alpha.DimensionMetadata;

                    /**
                     * Encodes the specified DimensionMetadata message. Does not implicitly {@link google.analytics.data.v1alpha.DimensionMetadata.verify|verify} messages.
                     * @param message DimensionMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IDimensionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DimensionMetadata message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.DimensionMetadata.verify|verify} messages.
                     * @param message DimensionMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IDimensionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DimensionMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DimensionMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.DimensionMetadata;

                    /**
                     * Decodes a DimensionMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DimensionMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.DimensionMetadata;

                    /**
                     * Verifies a DimensionMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DimensionMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DimensionMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.DimensionMetadata;

                    /**
                     * Creates a plain object from a DimensionMetadata message. Also converts values to other types if specified.
                     * @param message DimensionMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.DimensionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DimensionMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MetricMetadata. */
                interface IMetricMetadata {

                    /** MetricMetadata apiName */
                    apiName?: (string|null);

                    /** MetricMetadata uiName */
                    uiName?: (string|null);

                    /** MetricMetadata description */
                    description?: (string|null);

                    /** MetricMetadata deprecatedApiNames */
                    deprecatedApiNames?: (string[]|null);

                    /** MetricMetadata type */
                    type?: (google.analytics.data.v1alpha.MetricType|keyof typeof google.analytics.data.v1alpha.MetricType|null);

                    /** MetricMetadata expression */
                    expression?: (string|null);

                    /** MetricMetadata customDefinition */
                    customDefinition?: (boolean|null);
                }

                /** Represents a MetricMetadata. */
                class MetricMetadata implements IMetricMetadata {

                    /**
                     * Constructs a new MetricMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1alpha.IMetricMetadata);

                    /** MetricMetadata apiName. */
                    public apiName: string;

                    /** MetricMetadata uiName. */
                    public uiName: string;

                    /** MetricMetadata description. */
                    public description: string;

                    /** MetricMetadata deprecatedApiNames. */
                    public deprecatedApiNames: string[];

                    /** MetricMetadata type. */
                    public type: (google.analytics.data.v1alpha.MetricType|keyof typeof google.analytics.data.v1alpha.MetricType);

                    /** MetricMetadata expression. */
                    public expression: string;

                    /** MetricMetadata customDefinition. */
                    public customDefinition: boolean;

                    /**
                     * Creates a new MetricMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MetricMetadata instance
                     */
                    public static create(properties?: google.analytics.data.v1alpha.IMetricMetadata): google.analytics.data.v1alpha.MetricMetadata;

                    /**
                     * Encodes the specified MetricMetadata message. Does not implicitly {@link google.analytics.data.v1alpha.MetricMetadata.verify|verify} messages.
                     * @param message MetricMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1alpha.IMetricMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MetricMetadata message, length delimited. Does not implicitly {@link google.analytics.data.v1alpha.MetricMetadata.verify|verify} messages.
                     * @param message MetricMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1alpha.IMetricMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetricMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MetricMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1alpha.MetricMetadata;

                    /**
                     * Decodes a MetricMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MetricMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1alpha.MetricMetadata;

                    /**
                     * Verifies a MetricMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MetricMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetricMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1alpha.MetricMetadata;

                    /**
                     * Creates a plain object from a MetricMetadata message. Also converts values to other types if specified.
                     * @param message MetricMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1alpha.MetricMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetricMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** MetricAggregation enum. */
                enum MetricAggregation {
                    METRIC_AGGREGATION_UNSPECIFIED = 0,
                    TOTAL = 1,
                    MINIMUM = 5,
                    MAXIMUM = 6,
                    COUNT = 4
                }

                /** MetricType enum. */
                enum MetricType {
                    METRIC_TYPE_UNSPECIFIED = 0,
                    TYPE_INTEGER = 1,
                    TYPE_FLOAT = 2,
                    TYPE_SECONDS = 4,
                    TYPE_MILLISECONDS = 5,
                    TYPE_MINUTES = 6,
                    TYPE_HOURS = 7,
                    TYPE_STANDARD = 8,
                    TYPE_CURRENCY = 9,
                    TYPE_FEET = 10,
                    TYPE_MILES = 11,
                    TYPE_METERS = 12,
                    TYPE_KILOMETERS = 13
                }
            }

            /** Namespace v1beta. */
            namespace v1beta {

                /** Represents a BetaAnalyticsData */
                class BetaAnalyticsData extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new BetaAnalyticsData service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new BetaAnalyticsData service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): BetaAnalyticsData;

                    /**
                     * Calls RunReport.
                     * @param request RunReportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RunReportResponse
                     */
                    public runReport(request: google.analytics.data.v1beta.IRunReportRequest, callback: google.analytics.data.v1beta.BetaAnalyticsData.RunReportCallback): void;

                    /**
                     * Calls RunReport.
                     * @param request RunReportRequest message or plain object
                     * @returns Promise
                     */
                    public runReport(request: google.analytics.data.v1beta.IRunReportRequest): Promise<google.analytics.data.v1beta.RunReportResponse>;

                    /**
                     * Calls RunPivotReport.
                     * @param request RunPivotReportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RunPivotReportResponse
                     */
                    public runPivotReport(request: google.analytics.data.v1beta.IRunPivotReportRequest, callback: google.analytics.data.v1beta.BetaAnalyticsData.RunPivotReportCallback): void;

                    /**
                     * Calls RunPivotReport.
                     * @param request RunPivotReportRequest message or plain object
                     * @returns Promise
                     */
                    public runPivotReport(request: google.analytics.data.v1beta.IRunPivotReportRequest): Promise<google.analytics.data.v1beta.RunPivotReportResponse>;

                    /**
                     * Calls BatchRunReports.
                     * @param request BatchRunReportsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BatchRunReportsResponse
                     */
                    public batchRunReports(request: google.analytics.data.v1beta.IBatchRunReportsRequest, callback: google.analytics.data.v1beta.BetaAnalyticsData.BatchRunReportsCallback): void;

                    /**
                     * Calls BatchRunReports.
                     * @param request BatchRunReportsRequest message or plain object
                     * @returns Promise
                     */
                    public batchRunReports(request: google.analytics.data.v1beta.IBatchRunReportsRequest): Promise<google.analytics.data.v1beta.BatchRunReportsResponse>;

                    /**
                     * Calls BatchRunPivotReports.
                     * @param request BatchRunPivotReportsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BatchRunPivotReportsResponse
                     */
                    public batchRunPivotReports(request: google.analytics.data.v1beta.IBatchRunPivotReportsRequest, callback: google.analytics.data.v1beta.BetaAnalyticsData.BatchRunPivotReportsCallback): void;

                    /**
                     * Calls BatchRunPivotReports.
                     * @param request BatchRunPivotReportsRequest message or plain object
                     * @returns Promise
                     */
                    public batchRunPivotReports(request: google.analytics.data.v1beta.IBatchRunPivotReportsRequest): Promise<google.analytics.data.v1beta.BatchRunPivotReportsResponse>;

                    /**
                     * Calls GetMetadata.
                     * @param request GetMetadataRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Metadata
                     */
                    public getMetadata(request: google.analytics.data.v1beta.IGetMetadataRequest, callback: google.analytics.data.v1beta.BetaAnalyticsData.GetMetadataCallback): void;

                    /**
                     * Calls GetMetadata.
                     * @param request GetMetadataRequest message or plain object
                     * @returns Promise
                     */
                    public getMetadata(request: google.analytics.data.v1beta.IGetMetadataRequest): Promise<google.analytics.data.v1beta.Metadata>;

                    /**
                     * Calls RunRealtimeReport.
                     * @param request RunRealtimeReportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RunRealtimeReportResponse
                     */
                    public runRealtimeReport(request: google.analytics.data.v1beta.IRunRealtimeReportRequest, callback: google.analytics.data.v1beta.BetaAnalyticsData.RunRealtimeReportCallback): void;

                    /**
                     * Calls RunRealtimeReport.
                     * @param request RunRealtimeReportRequest message or plain object
                     * @returns Promise
                     */
                    public runRealtimeReport(request: google.analytics.data.v1beta.IRunRealtimeReportRequest): Promise<google.analytics.data.v1beta.RunRealtimeReportResponse>;

                    /**
                     * Calls CheckCompatibility.
                     * @param request CheckCompatibilityRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CheckCompatibilityResponse
                     */
                    public checkCompatibility(request: google.analytics.data.v1beta.ICheckCompatibilityRequest, callback: google.analytics.data.v1beta.BetaAnalyticsData.CheckCompatibilityCallback): void;

                    /**
                     * Calls CheckCompatibility.
                     * @param request CheckCompatibilityRequest message or plain object
                     * @returns Promise
                     */
                    public checkCompatibility(request: google.analytics.data.v1beta.ICheckCompatibilityRequest): Promise<google.analytics.data.v1beta.CheckCompatibilityResponse>;
                }

                namespace BetaAnalyticsData {

                    /**
                     * Callback as used by {@link google.analytics.data.v1beta.BetaAnalyticsData#runReport}.
                     * @param error Error, if any
                     * @param [response] RunReportResponse
                     */
                    type RunReportCallback = (error: (Error|null), response?: google.analytics.data.v1beta.RunReportResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.data.v1beta.BetaAnalyticsData#runPivotReport}.
                     * @param error Error, if any
                     * @param [response] RunPivotReportResponse
                     */
                    type RunPivotReportCallback = (error: (Error|null), response?: google.analytics.data.v1beta.RunPivotReportResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.data.v1beta.BetaAnalyticsData#batchRunReports}.
                     * @param error Error, if any
                     * @param [response] BatchRunReportsResponse
                     */
                    type BatchRunReportsCallback = (error: (Error|null), response?: google.analytics.data.v1beta.BatchRunReportsResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.data.v1beta.BetaAnalyticsData#batchRunPivotReports}.
                     * @param error Error, if any
                     * @param [response] BatchRunPivotReportsResponse
                     */
                    type BatchRunPivotReportsCallback = (error: (Error|null), response?: google.analytics.data.v1beta.BatchRunPivotReportsResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.data.v1beta.BetaAnalyticsData#getMetadata}.
                     * @param error Error, if any
                     * @param [response] Metadata
                     */
                    type GetMetadataCallback = (error: (Error|null), response?: google.analytics.data.v1beta.Metadata) => void;

                    /**
                     * Callback as used by {@link google.analytics.data.v1beta.BetaAnalyticsData#runRealtimeReport}.
                     * @param error Error, if any
                     * @param [response] RunRealtimeReportResponse
                     */
                    type RunRealtimeReportCallback = (error: (Error|null), response?: google.analytics.data.v1beta.RunRealtimeReportResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.data.v1beta.BetaAnalyticsData#checkCompatibility}.
                     * @param error Error, if any
                     * @param [response] CheckCompatibilityResponse
                     */
                    type CheckCompatibilityCallback = (error: (Error|null), response?: google.analytics.data.v1beta.CheckCompatibilityResponse) => void;
                }

                /** Properties of a CheckCompatibilityRequest. */
                interface ICheckCompatibilityRequest {

                    /** CheckCompatibilityRequest property */
                    property?: (string|null);

                    /** CheckCompatibilityRequest dimensions */
                    dimensions?: (google.analytics.data.v1beta.IDimension[]|null);

                    /** CheckCompatibilityRequest metrics */
                    metrics?: (google.analytics.data.v1beta.IMetric[]|null);

                    /** CheckCompatibilityRequest dimensionFilter */
                    dimensionFilter?: (google.analytics.data.v1beta.IFilterExpression|null);

                    /** CheckCompatibilityRequest metricFilter */
                    metricFilter?: (google.analytics.data.v1beta.IFilterExpression|null);

                    /** CheckCompatibilityRequest compatibilityFilter */
                    compatibilityFilter?: (google.analytics.data.v1beta.Compatibility|keyof typeof google.analytics.data.v1beta.Compatibility|null);
                }

                /** Represents a CheckCompatibilityRequest. */
                class CheckCompatibilityRequest implements ICheckCompatibilityRequest {

                    /**
                     * Constructs a new CheckCompatibilityRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.ICheckCompatibilityRequest);

                    /** CheckCompatibilityRequest property. */
                    public property: string;

                    /** CheckCompatibilityRequest dimensions. */
                    public dimensions: google.analytics.data.v1beta.IDimension[];

                    /** CheckCompatibilityRequest metrics. */
                    public metrics: google.analytics.data.v1beta.IMetric[];

                    /** CheckCompatibilityRequest dimensionFilter. */
                    public dimensionFilter?: (google.analytics.data.v1beta.IFilterExpression|null);

                    /** CheckCompatibilityRequest metricFilter. */
                    public metricFilter?: (google.analytics.data.v1beta.IFilterExpression|null);

                    /** CheckCompatibilityRequest compatibilityFilter. */
                    public compatibilityFilter: (google.analytics.data.v1beta.Compatibility|keyof typeof google.analytics.data.v1beta.Compatibility);

                    /**
                     * Creates a new CheckCompatibilityRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CheckCompatibilityRequest instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.ICheckCompatibilityRequest): google.analytics.data.v1beta.CheckCompatibilityRequest;

                    /**
                     * Encodes the specified CheckCompatibilityRequest message. Does not implicitly {@link google.analytics.data.v1beta.CheckCompatibilityRequest.verify|verify} messages.
                     * @param message CheckCompatibilityRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.ICheckCompatibilityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CheckCompatibilityRequest message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.CheckCompatibilityRequest.verify|verify} messages.
                     * @param message CheckCompatibilityRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.ICheckCompatibilityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CheckCompatibilityRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CheckCompatibilityRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.CheckCompatibilityRequest;

                    /**
                     * Decodes a CheckCompatibilityRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CheckCompatibilityRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.CheckCompatibilityRequest;

                    /**
                     * Verifies a CheckCompatibilityRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CheckCompatibilityRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CheckCompatibilityRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.CheckCompatibilityRequest;

                    /**
                     * Creates a plain object from a CheckCompatibilityRequest message. Also converts values to other types if specified.
                     * @param message CheckCompatibilityRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.CheckCompatibilityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CheckCompatibilityRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CheckCompatibilityResponse. */
                interface ICheckCompatibilityResponse {

                    /** CheckCompatibilityResponse dimensionCompatibilities */
                    dimensionCompatibilities?: (google.analytics.data.v1beta.IDimensionCompatibility[]|null);

                    /** CheckCompatibilityResponse metricCompatibilities */
                    metricCompatibilities?: (google.analytics.data.v1beta.IMetricCompatibility[]|null);
                }

                /** Represents a CheckCompatibilityResponse. */
                class CheckCompatibilityResponse implements ICheckCompatibilityResponse {

                    /**
                     * Constructs a new CheckCompatibilityResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.ICheckCompatibilityResponse);

                    /** CheckCompatibilityResponse dimensionCompatibilities. */
                    public dimensionCompatibilities: google.analytics.data.v1beta.IDimensionCompatibility[];

                    /** CheckCompatibilityResponse metricCompatibilities. */
                    public metricCompatibilities: google.analytics.data.v1beta.IMetricCompatibility[];

                    /**
                     * Creates a new CheckCompatibilityResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CheckCompatibilityResponse instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.ICheckCompatibilityResponse): google.analytics.data.v1beta.CheckCompatibilityResponse;

                    /**
                     * Encodes the specified CheckCompatibilityResponse message. Does not implicitly {@link google.analytics.data.v1beta.CheckCompatibilityResponse.verify|verify} messages.
                     * @param message CheckCompatibilityResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.ICheckCompatibilityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CheckCompatibilityResponse message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.CheckCompatibilityResponse.verify|verify} messages.
                     * @param message CheckCompatibilityResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.ICheckCompatibilityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CheckCompatibilityResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CheckCompatibilityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.CheckCompatibilityResponse;

                    /**
                     * Decodes a CheckCompatibilityResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CheckCompatibilityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.CheckCompatibilityResponse;

                    /**
                     * Verifies a CheckCompatibilityResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CheckCompatibilityResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CheckCompatibilityResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.CheckCompatibilityResponse;

                    /**
                     * Creates a plain object from a CheckCompatibilityResponse message. Also converts values to other types if specified.
                     * @param message CheckCompatibilityResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.CheckCompatibilityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CheckCompatibilityResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Metadata. */
                interface IMetadata {

                    /** Metadata name */
                    name?: (string|null);

                    /** Metadata dimensions */
                    dimensions?: (google.analytics.data.v1beta.IDimensionMetadata[]|null);

                    /** Metadata metrics */
                    metrics?: (google.analytics.data.v1beta.IMetricMetadata[]|null);
                }

                /** Represents a Metadata. */
                class Metadata implements IMetadata {

                    /**
                     * Constructs a new Metadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IMetadata);

                    /** Metadata name. */
                    public name: string;

                    /** Metadata dimensions. */
                    public dimensions: google.analytics.data.v1beta.IDimensionMetadata[];

                    /** Metadata metrics. */
                    public metrics: google.analytics.data.v1beta.IMetricMetadata[];

                    /**
                     * Creates a new Metadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Metadata instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IMetadata): google.analytics.data.v1beta.Metadata;

                    /**
                     * Encodes the specified Metadata message. Does not implicitly {@link google.analytics.data.v1beta.Metadata.verify|verify} messages.
                     * @param message Metadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Metadata message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.Metadata.verify|verify} messages.
                     * @param message Metadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Metadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Metadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.Metadata;

                    /**
                     * Decodes a Metadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Metadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.Metadata;

                    /**
                     * Verifies a Metadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Metadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.Metadata;

                    /**
                     * Creates a plain object from a Metadata message. Also converts values to other types if specified.
                     * @param message Metadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.Metadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Metadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RunReportRequest. */
                interface IRunReportRequest {

                    /** RunReportRequest property */
                    property?: (string|null);

                    /** RunReportRequest dimensions */
                    dimensions?: (google.analytics.data.v1beta.IDimension[]|null);

                    /** RunReportRequest metrics */
                    metrics?: (google.analytics.data.v1beta.IMetric[]|null);

                    /** RunReportRequest dateRanges */
                    dateRanges?: (google.analytics.data.v1beta.IDateRange[]|null);

                    /** RunReportRequest dimensionFilter */
                    dimensionFilter?: (google.analytics.data.v1beta.IFilterExpression|null);

                    /** RunReportRequest metricFilter */
                    metricFilter?: (google.analytics.data.v1beta.IFilterExpression|null);

                    /** RunReportRequest offset */
                    offset?: (number|Long|string|null);

                    /** RunReportRequest limit */
                    limit?: (number|Long|string|null);

                    /** RunReportRequest metricAggregations */
                    metricAggregations?: (google.analytics.data.v1beta.MetricAggregation[]|null);

                    /** RunReportRequest orderBys */
                    orderBys?: (google.analytics.data.v1beta.IOrderBy[]|null);

                    /** RunReportRequest currencyCode */
                    currencyCode?: (string|null);

                    /** RunReportRequest cohortSpec */
                    cohortSpec?: (google.analytics.data.v1beta.ICohortSpec|null);

                    /** RunReportRequest keepEmptyRows */
                    keepEmptyRows?: (boolean|null);

                    /** RunReportRequest returnPropertyQuota */
                    returnPropertyQuota?: (boolean|null);
                }

                /** Represents a RunReportRequest. */
                class RunReportRequest implements IRunReportRequest {

                    /**
                     * Constructs a new RunReportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IRunReportRequest);

                    /** RunReportRequest property. */
                    public property: string;

                    /** RunReportRequest dimensions. */
                    public dimensions: google.analytics.data.v1beta.IDimension[];

                    /** RunReportRequest metrics. */
                    public metrics: google.analytics.data.v1beta.IMetric[];

                    /** RunReportRequest dateRanges. */
                    public dateRanges: google.analytics.data.v1beta.IDateRange[];

                    /** RunReportRequest dimensionFilter. */
                    public dimensionFilter?: (google.analytics.data.v1beta.IFilterExpression|null);

                    /** RunReportRequest metricFilter. */
                    public metricFilter?: (google.analytics.data.v1beta.IFilterExpression|null);

                    /** RunReportRequest offset. */
                    public offset: (number|Long|string);

                    /** RunReportRequest limit. */
                    public limit: (number|Long|string);

                    /** RunReportRequest metricAggregations. */
                    public metricAggregations: google.analytics.data.v1beta.MetricAggregation[];

                    /** RunReportRequest orderBys. */
                    public orderBys: google.analytics.data.v1beta.IOrderBy[];

                    /** RunReportRequest currencyCode. */
                    public currencyCode: string;

                    /** RunReportRequest cohortSpec. */
                    public cohortSpec?: (google.analytics.data.v1beta.ICohortSpec|null);

                    /** RunReportRequest keepEmptyRows. */
                    public keepEmptyRows: boolean;

                    /** RunReportRequest returnPropertyQuota. */
                    public returnPropertyQuota: boolean;

                    /**
                     * Creates a new RunReportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunReportRequest instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IRunReportRequest): google.analytics.data.v1beta.RunReportRequest;

                    /**
                     * Encodes the specified RunReportRequest message. Does not implicitly {@link google.analytics.data.v1beta.RunReportRequest.verify|verify} messages.
                     * @param message RunReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IRunReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunReportRequest message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.RunReportRequest.verify|verify} messages.
                     * @param message RunReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IRunReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunReportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.RunReportRequest;

                    /**
                     * Decodes a RunReportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.RunReportRequest;

                    /**
                     * Verifies a RunReportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunReportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunReportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.RunReportRequest;

                    /**
                     * Creates a plain object from a RunReportRequest message. Also converts values to other types if specified.
                     * @param message RunReportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.RunReportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunReportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RunReportResponse. */
                interface IRunReportResponse {

                    /** RunReportResponse dimensionHeaders */
                    dimensionHeaders?: (google.analytics.data.v1beta.IDimensionHeader[]|null);

                    /** RunReportResponse metricHeaders */
                    metricHeaders?: (google.analytics.data.v1beta.IMetricHeader[]|null);

                    /** RunReportResponse rows */
                    rows?: (google.analytics.data.v1beta.IRow[]|null);

                    /** RunReportResponse totals */
                    totals?: (google.analytics.data.v1beta.IRow[]|null);

                    /** RunReportResponse maximums */
                    maximums?: (google.analytics.data.v1beta.IRow[]|null);

                    /** RunReportResponse minimums */
                    minimums?: (google.analytics.data.v1beta.IRow[]|null);

                    /** RunReportResponse rowCount */
                    rowCount?: (number|null);

                    /** RunReportResponse metadata */
                    metadata?: (google.analytics.data.v1beta.IResponseMetaData|null);

                    /** RunReportResponse propertyQuota */
                    propertyQuota?: (google.analytics.data.v1beta.IPropertyQuota|null);

                    /** RunReportResponse kind */
                    kind?: (string|null);
                }

                /** Represents a RunReportResponse. */
                class RunReportResponse implements IRunReportResponse {

                    /**
                     * Constructs a new RunReportResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IRunReportResponse);

                    /** RunReportResponse dimensionHeaders. */
                    public dimensionHeaders: google.analytics.data.v1beta.IDimensionHeader[];

                    /** RunReportResponse metricHeaders. */
                    public metricHeaders: google.analytics.data.v1beta.IMetricHeader[];

                    /** RunReportResponse rows. */
                    public rows: google.analytics.data.v1beta.IRow[];

                    /** RunReportResponse totals. */
                    public totals: google.analytics.data.v1beta.IRow[];

                    /** RunReportResponse maximums. */
                    public maximums: google.analytics.data.v1beta.IRow[];

                    /** RunReportResponse minimums. */
                    public minimums: google.analytics.data.v1beta.IRow[];

                    /** RunReportResponse rowCount. */
                    public rowCount: number;

                    /** RunReportResponse metadata. */
                    public metadata?: (google.analytics.data.v1beta.IResponseMetaData|null);

                    /** RunReportResponse propertyQuota. */
                    public propertyQuota?: (google.analytics.data.v1beta.IPropertyQuota|null);

                    /** RunReportResponse kind. */
                    public kind: string;

                    /**
                     * Creates a new RunReportResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunReportResponse instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IRunReportResponse): google.analytics.data.v1beta.RunReportResponse;

                    /**
                     * Encodes the specified RunReportResponse message. Does not implicitly {@link google.analytics.data.v1beta.RunReportResponse.verify|verify} messages.
                     * @param message RunReportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IRunReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunReportResponse message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.RunReportResponse.verify|verify} messages.
                     * @param message RunReportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IRunReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunReportResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunReportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.RunReportResponse;

                    /**
                     * Decodes a RunReportResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunReportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.RunReportResponse;

                    /**
                     * Verifies a RunReportResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunReportResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunReportResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.RunReportResponse;

                    /**
                     * Creates a plain object from a RunReportResponse message. Also converts values to other types if specified.
                     * @param message RunReportResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.RunReportResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunReportResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RunPivotReportRequest. */
                interface IRunPivotReportRequest {

                    /** RunPivotReportRequest property */
                    property?: (string|null);

                    /** RunPivotReportRequest dimensions */
                    dimensions?: (google.analytics.data.v1beta.IDimension[]|null);

                    /** RunPivotReportRequest metrics */
                    metrics?: (google.analytics.data.v1beta.IMetric[]|null);

                    /** RunPivotReportRequest dateRanges */
                    dateRanges?: (google.analytics.data.v1beta.IDateRange[]|null);

                    /** RunPivotReportRequest pivots */
                    pivots?: (google.analytics.data.v1beta.IPivot[]|null);

                    /** RunPivotReportRequest dimensionFilter */
                    dimensionFilter?: (google.analytics.data.v1beta.IFilterExpression|null);

                    /** RunPivotReportRequest metricFilter */
                    metricFilter?: (google.analytics.data.v1beta.IFilterExpression|null);

                    /** RunPivotReportRequest currencyCode */
                    currencyCode?: (string|null);

                    /** RunPivotReportRequest cohortSpec */
                    cohortSpec?: (google.analytics.data.v1beta.ICohortSpec|null);

                    /** RunPivotReportRequest keepEmptyRows */
                    keepEmptyRows?: (boolean|null);

                    /** RunPivotReportRequest returnPropertyQuota */
                    returnPropertyQuota?: (boolean|null);
                }

                /** Represents a RunPivotReportRequest. */
                class RunPivotReportRequest implements IRunPivotReportRequest {

                    /**
                     * Constructs a new RunPivotReportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IRunPivotReportRequest);

                    /** RunPivotReportRequest property. */
                    public property: string;

                    /** RunPivotReportRequest dimensions. */
                    public dimensions: google.analytics.data.v1beta.IDimension[];

                    /** RunPivotReportRequest metrics. */
                    public metrics: google.analytics.data.v1beta.IMetric[];

                    /** RunPivotReportRequest dateRanges. */
                    public dateRanges: google.analytics.data.v1beta.IDateRange[];

                    /** RunPivotReportRequest pivots. */
                    public pivots: google.analytics.data.v1beta.IPivot[];

                    /** RunPivotReportRequest dimensionFilter. */
                    public dimensionFilter?: (google.analytics.data.v1beta.IFilterExpression|null);

                    /** RunPivotReportRequest metricFilter. */
                    public metricFilter?: (google.analytics.data.v1beta.IFilterExpression|null);

                    /** RunPivotReportRequest currencyCode. */
                    public currencyCode: string;

                    /** RunPivotReportRequest cohortSpec. */
                    public cohortSpec?: (google.analytics.data.v1beta.ICohortSpec|null);

                    /** RunPivotReportRequest keepEmptyRows. */
                    public keepEmptyRows: boolean;

                    /** RunPivotReportRequest returnPropertyQuota. */
                    public returnPropertyQuota: boolean;

                    /**
                     * Creates a new RunPivotReportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunPivotReportRequest instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IRunPivotReportRequest): google.analytics.data.v1beta.RunPivotReportRequest;

                    /**
                     * Encodes the specified RunPivotReportRequest message. Does not implicitly {@link google.analytics.data.v1beta.RunPivotReportRequest.verify|verify} messages.
                     * @param message RunPivotReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IRunPivotReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunPivotReportRequest message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.RunPivotReportRequest.verify|verify} messages.
                     * @param message RunPivotReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IRunPivotReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunPivotReportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunPivotReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.RunPivotReportRequest;

                    /**
                     * Decodes a RunPivotReportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunPivotReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.RunPivotReportRequest;

                    /**
                     * Verifies a RunPivotReportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunPivotReportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunPivotReportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.RunPivotReportRequest;

                    /**
                     * Creates a plain object from a RunPivotReportRequest message. Also converts values to other types if specified.
                     * @param message RunPivotReportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.RunPivotReportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunPivotReportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RunPivotReportResponse. */
                interface IRunPivotReportResponse {

                    /** RunPivotReportResponse pivotHeaders */
                    pivotHeaders?: (google.analytics.data.v1beta.IPivotHeader[]|null);

                    /** RunPivotReportResponse dimensionHeaders */
                    dimensionHeaders?: (google.analytics.data.v1beta.IDimensionHeader[]|null);

                    /** RunPivotReportResponse metricHeaders */
                    metricHeaders?: (google.analytics.data.v1beta.IMetricHeader[]|null);

                    /** RunPivotReportResponse rows */
                    rows?: (google.analytics.data.v1beta.IRow[]|null);

                    /** RunPivotReportResponse aggregates */
                    aggregates?: (google.analytics.data.v1beta.IRow[]|null);

                    /** RunPivotReportResponse metadata */
                    metadata?: (google.analytics.data.v1beta.IResponseMetaData|null);

                    /** RunPivotReportResponse propertyQuota */
                    propertyQuota?: (google.analytics.data.v1beta.IPropertyQuota|null);

                    /** RunPivotReportResponse kind */
                    kind?: (string|null);
                }

                /** Represents a RunPivotReportResponse. */
                class RunPivotReportResponse implements IRunPivotReportResponse {

                    /**
                     * Constructs a new RunPivotReportResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IRunPivotReportResponse);

                    /** RunPivotReportResponse pivotHeaders. */
                    public pivotHeaders: google.analytics.data.v1beta.IPivotHeader[];

                    /** RunPivotReportResponse dimensionHeaders. */
                    public dimensionHeaders: google.analytics.data.v1beta.IDimensionHeader[];

                    /** RunPivotReportResponse metricHeaders. */
                    public metricHeaders: google.analytics.data.v1beta.IMetricHeader[];

                    /** RunPivotReportResponse rows. */
                    public rows: google.analytics.data.v1beta.IRow[];

                    /** RunPivotReportResponse aggregates. */
                    public aggregates: google.analytics.data.v1beta.IRow[];

                    /** RunPivotReportResponse metadata. */
                    public metadata?: (google.analytics.data.v1beta.IResponseMetaData|null);

                    /** RunPivotReportResponse propertyQuota. */
                    public propertyQuota?: (google.analytics.data.v1beta.IPropertyQuota|null);

                    /** RunPivotReportResponse kind. */
                    public kind: string;

                    /**
                     * Creates a new RunPivotReportResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunPivotReportResponse instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IRunPivotReportResponse): google.analytics.data.v1beta.RunPivotReportResponse;

                    /**
                     * Encodes the specified RunPivotReportResponse message. Does not implicitly {@link google.analytics.data.v1beta.RunPivotReportResponse.verify|verify} messages.
                     * @param message RunPivotReportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IRunPivotReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunPivotReportResponse message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.RunPivotReportResponse.verify|verify} messages.
                     * @param message RunPivotReportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IRunPivotReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunPivotReportResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunPivotReportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.RunPivotReportResponse;

                    /**
                     * Decodes a RunPivotReportResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunPivotReportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.RunPivotReportResponse;

                    /**
                     * Verifies a RunPivotReportResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunPivotReportResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunPivotReportResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.RunPivotReportResponse;

                    /**
                     * Creates a plain object from a RunPivotReportResponse message. Also converts values to other types if specified.
                     * @param message RunPivotReportResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.RunPivotReportResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunPivotReportResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchRunReportsRequest. */
                interface IBatchRunReportsRequest {

                    /** BatchRunReportsRequest property */
                    property?: (string|null);

                    /** BatchRunReportsRequest requests */
                    requests?: (google.analytics.data.v1beta.IRunReportRequest[]|null);
                }

                /** Represents a BatchRunReportsRequest. */
                class BatchRunReportsRequest implements IBatchRunReportsRequest {

                    /**
                     * Constructs a new BatchRunReportsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IBatchRunReportsRequest);

                    /** BatchRunReportsRequest property. */
                    public property: string;

                    /** BatchRunReportsRequest requests. */
                    public requests: google.analytics.data.v1beta.IRunReportRequest[];

                    /**
                     * Creates a new BatchRunReportsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchRunReportsRequest instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IBatchRunReportsRequest): google.analytics.data.v1beta.BatchRunReportsRequest;

                    /**
                     * Encodes the specified BatchRunReportsRequest message. Does not implicitly {@link google.analytics.data.v1beta.BatchRunReportsRequest.verify|verify} messages.
                     * @param message BatchRunReportsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IBatchRunReportsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchRunReportsRequest message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.BatchRunReportsRequest.verify|verify} messages.
                     * @param message BatchRunReportsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IBatchRunReportsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchRunReportsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchRunReportsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.BatchRunReportsRequest;

                    /**
                     * Decodes a BatchRunReportsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchRunReportsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.BatchRunReportsRequest;

                    /**
                     * Verifies a BatchRunReportsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchRunReportsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchRunReportsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.BatchRunReportsRequest;

                    /**
                     * Creates a plain object from a BatchRunReportsRequest message. Also converts values to other types if specified.
                     * @param message BatchRunReportsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.BatchRunReportsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchRunReportsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchRunReportsResponse. */
                interface IBatchRunReportsResponse {

                    /** BatchRunReportsResponse reports */
                    reports?: (google.analytics.data.v1beta.IRunReportResponse[]|null);

                    /** BatchRunReportsResponse kind */
                    kind?: (string|null);
                }

                /** Represents a BatchRunReportsResponse. */
                class BatchRunReportsResponse implements IBatchRunReportsResponse {

                    /**
                     * Constructs a new BatchRunReportsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IBatchRunReportsResponse);

                    /** BatchRunReportsResponse reports. */
                    public reports: google.analytics.data.v1beta.IRunReportResponse[];

                    /** BatchRunReportsResponse kind. */
                    public kind: string;

                    /**
                     * Creates a new BatchRunReportsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchRunReportsResponse instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IBatchRunReportsResponse): google.analytics.data.v1beta.BatchRunReportsResponse;

                    /**
                     * Encodes the specified BatchRunReportsResponse message. Does not implicitly {@link google.analytics.data.v1beta.BatchRunReportsResponse.verify|verify} messages.
                     * @param message BatchRunReportsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IBatchRunReportsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchRunReportsResponse message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.BatchRunReportsResponse.verify|verify} messages.
                     * @param message BatchRunReportsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IBatchRunReportsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchRunReportsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchRunReportsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.BatchRunReportsResponse;

                    /**
                     * Decodes a BatchRunReportsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchRunReportsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.BatchRunReportsResponse;

                    /**
                     * Verifies a BatchRunReportsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchRunReportsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchRunReportsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.BatchRunReportsResponse;

                    /**
                     * Creates a plain object from a BatchRunReportsResponse message. Also converts values to other types if specified.
                     * @param message BatchRunReportsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.BatchRunReportsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchRunReportsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchRunPivotReportsRequest. */
                interface IBatchRunPivotReportsRequest {

                    /** BatchRunPivotReportsRequest property */
                    property?: (string|null);

                    /** BatchRunPivotReportsRequest requests */
                    requests?: (google.analytics.data.v1beta.IRunPivotReportRequest[]|null);
                }

                /** Represents a BatchRunPivotReportsRequest. */
                class BatchRunPivotReportsRequest implements IBatchRunPivotReportsRequest {

                    /**
                     * Constructs a new BatchRunPivotReportsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IBatchRunPivotReportsRequest);

                    /** BatchRunPivotReportsRequest property. */
                    public property: string;

                    /** BatchRunPivotReportsRequest requests. */
                    public requests: google.analytics.data.v1beta.IRunPivotReportRequest[];

                    /**
                     * Creates a new BatchRunPivotReportsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchRunPivotReportsRequest instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IBatchRunPivotReportsRequest): google.analytics.data.v1beta.BatchRunPivotReportsRequest;

                    /**
                     * Encodes the specified BatchRunPivotReportsRequest message. Does not implicitly {@link google.analytics.data.v1beta.BatchRunPivotReportsRequest.verify|verify} messages.
                     * @param message BatchRunPivotReportsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IBatchRunPivotReportsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchRunPivotReportsRequest message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.BatchRunPivotReportsRequest.verify|verify} messages.
                     * @param message BatchRunPivotReportsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IBatchRunPivotReportsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchRunPivotReportsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchRunPivotReportsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.BatchRunPivotReportsRequest;

                    /**
                     * Decodes a BatchRunPivotReportsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchRunPivotReportsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.BatchRunPivotReportsRequest;

                    /**
                     * Verifies a BatchRunPivotReportsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchRunPivotReportsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchRunPivotReportsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.BatchRunPivotReportsRequest;

                    /**
                     * Creates a plain object from a BatchRunPivotReportsRequest message. Also converts values to other types if specified.
                     * @param message BatchRunPivotReportsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.BatchRunPivotReportsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchRunPivotReportsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchRunPivotReportsResponse. */
                interface IBatchRunPivotReportsResponse {

                    /** BatchRunPivotReportsResponse pivotReports */
                    pivotReports?: (google.analytics.data.v1beta.IRunPivotReportResponse[]|null);

                    /** BatchRunPivotReportsResponse kind */
                    kind?: (string|null);
                }

                /** Represents a BatchRunPivotReportsResponse. */
                class BatchRunPivotReportsResponse implements IBatchRunPivotReportsResponse {

                    /**
                     * Constructs a new BatchRunPivotReportsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IBatchRunPivotReportsResponse);

                    /** BatchRunPivotReportsResponse pivotReports. */
                    public pivotReports: google.analytics.data.v1beta.IRunPivotReportResponse[];

                    /** BatchRunPivotReportsResponse kind. */
                    public kind: string;

                    /**
                     * Creates a new BatchRunPivotReportsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchRunPivotReportsResponse instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IBatchRunPivotReportsResponse): google.analytics.data.v1beta.BatchRunPivotReportsResponse;

                    /**
                     * Encodes the specified BatchRunPivotReportsResponse message. Does not implicitly {@link google.analytics.data.v1beta.BatchRunPivotReportsResponse.verify|verify} messages.
                     * @param message BatchRunPivotReportsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IBatchRunPivotReportsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchRunPivotReportsResponse message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.BatchRunPivotReportsResponse.verify|verify} messages.
                     * @param message BatchRunPivotReportsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IBatchRunPivotReportsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchRunPivotReportsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchRunPivotReportsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.BatchRunPivotReportsResponse;

                    /**
                     * Decodes a BatchRunPivotReportsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchRunPivotReportsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.BatchRunPivotReportsResponse;

                    /**
                     * Verifies a BatchRunPivotReportsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchRunPivotReportsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchRunPivotReportsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.BatchRunPivotReportsResponse;

                    /**
                     * Creates a plain object from a BatchRunPivotReportsResponse message. Also converts values to other types if specified.
                     * @param message BatchRunPivotReportsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.BatchRunPivotReportsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchRunPivotReportsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetMetadataRequest. */
                interface IGetMetadataRequest {

                    /** GetMetadataRequest name */
                    name?: (string|null);
                }

                /** Represents a GetMetadataRequest. */
                class GetMetadataRequest implements IGetMetadataRequest {

                    /**
                     * Constructs a new GetMetadataRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IGetMetadataRequest);

                    /** GetMetadataRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetMetadataRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetMetadataRequest instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IGetMetadataRequest): google.analytics.data.v1beta.GetMetadataRequest;

                    /**
                     * Encodes the specified GetMetadataRequest message. Does not implicitly {@link google.analytics.data.v1beta.GetMetadataRequest.verify|verify} messages.
                     * @param message GetMetadataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IGetMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetMetadataRequest message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.GetMetadataRequest.verify|verify} messages.
                     * @param message GetMetadataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IGetMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetMetadataRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetMetadataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.GetMetadataRequest;

                    /**
                     * Decodes a GetMetadataRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetMetadataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.GetMetadataRequest;

                    /**
                     * Verifies a GetMetadataRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetMetadataRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetMetadataRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.GetMetadataRequest;

                    /**
                     * Creates a plain object from a GetMetadataRequest message. Also converts values to other types if specified.
                     * @param message GetMetadataRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.GetMetadataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetMetadataRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RunRealtimeReportRequest. */
                interface IRunRealtimeReportRequest {

                    /** RunRealtimeReportRequest property */
                    property?: (string|null);

                    /** RunRealtimeReportRequest dimensions */
                    dimensions?: (google.analytics.data.v1beta.IDimension[]|null);

                    /** RunRealtimeReportRequest metrics */
                    metrics?: (google.analytics.data.v1beta.IMetric[]|null);

                    /** RunRealtimeReportRequest dimensionFilter */
                    dimensionFilter?: (google.analytics.data.v1beta.IFilterExpression|null);

                    /** RunRealtimeReportRequest metricFilter */
                    metricFilter?: (google.analytics.data.v1beta.IFilterExpression|null);

                    /** RunRealtimeReportRequest limit */
                    limit?: (number|Long|string|null);

                    /** RunRealtimeReportRequest metricAggregations */
                    metricAggregations?: (google.analytics.data.v1beta.MetricAggregation[]|null);

                    /** RunRealtimeReportRequest orderBys */
                    orderBys?: (google.analytics.data.v1beta.IOrderBy[]|null);

                    /** RunRealtimeReportRequest returnPropertyQuota */
                    returnPropertyQuota?: (boolean|null);

                    /** RunRealtimeReportRequest minuteRanges */
                    minuteRanges?: (google.analytics.data.v1beta.IMinuteRange[]|null);
                }

                /** Represents a RunRealtimeReportRequest. */
                class RunRealtimeReportRequest implements IRunRealtimeReportRequest {

                    /**
                     * Constructs a new RunRealtimeReportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IRunRealtimeReportRequest);

                    /** RunRealtimeReportRequest property. */
                    public property: string;

                    /** RunRealtimeReportRequest dimensions. */
                    public dimensions: google.analytics.data.v1beta.IDimension[];

                    /** RunRealtimeReportRequest metrics. */
                    public metrics: google.analytics.data.v1beta.IMetric[];

                    /** RunRealtimeReportRequest dimensionFilter. */
                    public dimensionFilter?: (google.analytics.data.v1beta.IFilterExpression|null);

                    /** RunRealtimeReportRequest metricFilter. */
                    public metricFilter?: (google.analytics.data.v1beta.IFilterExpression|null);

                    /** RunRealtimeReportRequest limit. */
                    public limit: (number|Long|string);

                    /** RunRealtimeReportRequest metricAggregations. */
                    public metricAggregations: google.analytics.data.v1beta.MetricAggregation[];

                    /** RunRealtimeReportRequest orderBys. */
                    public orderBys: google.analytics.data.v1beta.IOrderBy[];

                    /** RunRealtimeReportRequest returnPropertyQuota. */
                    public returnPropertyQuota: boolean;

                    /** RunRealtimeReportRequest minuteRanges. */
                    public minuteRanges: google.analytics.data.v1beta.IMinuteRange[];

                    /**
                     * Creates a new RunRealtimeReportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunRealtimeReportRequest instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IRunRealtimeReportRequest): google.analytics.data.v1beta.RunRealtimeReportRequest;

                    /**
                     * Encodes the specified RunRealtimeReportRequest message. Does not implicitly {@link google.analytics.data.v1beta.RunRealtimeReportRequest.verify|verify} messages.
                     * @param message RunRealtimeReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IRunRealtimeReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunRealtimeReportRequest message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.RunRealtimeReportRequest.verify|verify} messages.
                     * @param message RunRealtimeReportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IRunRealtimeReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunRealtimeReportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunRealtimeReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.RunRealtimeReportRequest;

                    /**
                     * Decodes a RunRealtimeReportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunRealtimeReportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.RunRealtimeReportRequest;

                    /**
                     * Verifies a RunRealtimeReportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunRealtimeReportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunRealtimeReportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.RunRealtimeReportRequest;

                    /**
                     * Creates a plain object from a RunRealtimeReportRequest message. Also converts values to other types if specified.
                     * @param message RunRealtimeReportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.RunRealtimeReportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunRealtimeReportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RunRealtimeReportResponse. */
                interface IRunRealtimeReportResponse {

                    /** RunRealtimeReportResponse dimensionHeaders */
                    dimensionHeaders?: (google.analytics.data.v1beta.IDimensionHeader[]|null);

                    /** RunRealtimeReportResponse metricHeaders */
                    metricHeaders?: (google.analytics.data.v1beta.IMetricHeader[]|null);

                    /** RunRealtimeReportResponse rows */
                    rows?: (google.analytics.data.v1beta.IRow[]|null);

                    /** RunRealtimeReportResponse totals */
                    totals?: (google.analytics.data.v1beta.IRow[]|null);

                    /** RunRealtimeReportResponse maximums */
                    maximums?: (google.analytics.data.v1beta.IRow[]|null);

                    /** RunRealtimeReportResponse minimums */
                    minimums?: (google.analytics.data.v1beta.IRow[]|null);

                    /** RunRealtimeReportResponse rowCount */
                    rowCount?: (number|null);

                    /** RunRealtimeReportResponse propertyQuota */
                    propertyQuota?: (google.analytics.data.v1beta.IPropertyQuota|null);

                    /** RunRealtimeReportResponse kind */
                    kind?: (string|null);
                }

                /** Represents a RunRealtimeReportResponse. */
                class RunRealtimeReportResponse implements IRunRealtimeReportResponse {

                    /**
                     * Constructs a new RunRealtimeReportResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IRunRealtimeReportResponse);

                    /** RunRealtimeReportResponse dimensionHeaders. */
                    public dimensionHeaders: google.analytics.data.v1beta.IDimensionHeader[];

                    /** RunRealtimeReportResponse metricHeaders. */
                    public metricHeaders: google.analytics.data.v1beta.IMetricHeader[];

                    /** RunRealtimeReportResponse rows. */
                    public rows: google.analytics.data.v1beta.IRow[];

                    /** RunRealtimeReportResponse totals. */
                    public totals: google.analytics.data.v1beta.IRow[];

                    /** RunRealtimeReportResponse maximums. */
                    public maximums: google.analytics.data.v1beta.IRow[];

                    /** RunRealtimeReportResponse minimums. */
                    public minimums: google.analytics.data.v1beta.IRow[];

                    /** RunRealtimeReportResponse rowCount. */
                    public rowCount: number;

                    /** RunRealtimeReportResponse propertyQuota. */
                    public propertyQuota?: (google.analytics.data.v1beta.IPropertyQuota|null);

                    /** RunRealtimeReportResponse kind. */
                    public kind: string;

                    /**
                     * Creates a new RunRealtimeReportResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunRealtimeReportResponse instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IRunRealtimeReportResponse): google.analytics.data.v1beta.RunRealtimeReportResponse;

                    /**
                     * Encodes the specified RunRealtimeReportResponse message. Does not implicitly {@link google.analytics.data.v1beta.RunRealtimeReportResponse.verify|verify} messages.
                     * @param message RunRealtimeReportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IRunRealtimeReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunRealtimeReportResponse message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.RunRealtimeReportResponse.verify|verify} messages.
                     * @param message RunRealtimeReportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IRunRealtimeReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunRealtimeReportResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunRealtimeReportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.RunRealtimeReportResponse;

                    /**
                     * Decodes a RunRealtimeReportResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunRealtimeReportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.RunRealtimeReportResponse;

                    /**
                     * Verifies a RunRealtimeReportResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunRealtimeReportResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunRealtimeReportResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.RunRealtimeReportResponse;

                    /**
                     * Creates a plain object from a RunRealtimeReportResponse message. Also converts values to other types if specified.
                     * @param message RunRealtimeReportResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.RunRealtimeReportResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunRealtimeReportResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DateRange. */
                interface IDateRange {

                    /** DateRange startDate */
                    startDate?: (string|null);

                    /** DateRange endDate */
                    endDate?: (string|null);

                    /** DateRange name */
                    name?: (string|null);
                }

                /** Represents a DateRange. */
                class DateRange implements IDateRange {

                    /**
                     * Constructs a new DateRange.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IDateRange);

                    /** DateRange startDate. */
                    public startDate: string;

                    /** DateRange endDate. */
                    public endDate: string;

                    /** DateRange name. */
                    public name: string;

                    /**
                     * Creates a new DateRange instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DateRange instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IDateRange): google.analytics.data.v1beta.DateRange;

                    /**
                     * Encodes the specified DateRange message. Does not implicitly {@link google.analytics.data.v1beta.DateRange.verify|verify} messages.
                     * @param message DateRange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IDateRange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DateRange message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.DateRange.verify|verify} messages.
                     * @param message DateRange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IDateRange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DateRange message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DateRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.DateRange;

                    /**
                     * Decodes a DateRange message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DateRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.DateRange;

                    /**
                     * Verifies a DateRange message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DateRange message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DateRange
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.DateRange;

                    /**
                     * Creates a plain object from a DateRange message. Also converts values to other types if specified.
                     * @param message DateRange
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.DateRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DateRange to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MinuteRange. */
                interface IMinuteRange {

                    /** MinuteRange startMinutesAgo */
                    startMinutesAgo?: (number|null);

                    /** MinuteRange endMinutesAgo */
                    endMinutesAgo?: (number|null);

                    /** MinuteRange name */
                    name?: (string|null);
                }

                /** Represents a MinuteRange. */
                class MinuteRange implements IMinuteRange {

                    /**
                     * Constructs a new MinuteRange.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IMinuteRange);

                    /** MinuteRange startMinutesAgo. */
                    public startMinutesAgo?: (number|null);

                    /** MinuteRange endMinutesAgo. */
                    public endMinutesAgo?: (number|null);

                    /** MinuteRange name. */
                    public name: string;

                    /** MinuteRange _startMinutesAgo. */
                    public _startMinutesAgo?: "startMinutesAgo";

                    /** MinuteRange _endMinutesAgo. */
                    public _endMinutesAgo?: "endMinutesAgo";

                    /**
                     * Creates a new MinuteRange instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MinuteRange instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IMinuteRange): google.analytics.data.v1beta.MinuteRange;

                    /**
                     * Encodes the specified MinuteRange message. Does not implicitly {@link google.analytics.data.v1beta.MinuteRange.verify|verify} messages.
                     * @param message MinuteRange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IMinuteRange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MinuteRange message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.MinuteRange.verify|verify} messages.
                     * @param message MinuteRange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IMinuteRange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MinuteRange message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MinuteRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.MinuteRange;

                    /**
                     * Decodes a MinuteRange message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MinuteRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.MinuteRange;

                    /**
                     * Verifies a MinuteRange message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MinuteRange message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MinuteRange
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.MinuteRange;

                    /**
                     * Creates a plain object from a MinuteRange message. Also converts values to other types if specified.
                     * @param message MinuteRange
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.MinuteRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MinuteRange to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Dimension. */
                interface IDimension {

                    /** Dimension name */
                    name?: (string|null);

                    /** Dimension dimensionExpression */
                    dimensionExpression?: (google.analytics.data.v1beta.IDimensionExpression|null);
                }

                /** Represents a Dimension. */
                class Dimension implements IDimension {

                    /**
                     * Constructs a new Dimension.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IDimension);

                    /** Dimension name. */
                    public name: string;

                    /** Dimension dimensionExpression. */
                    public dimensionExpression?: (google.analytics.data.v1beta.IDimensionExpression|null);

                    /**
                     * Creates a new Dimension instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Dimension instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IDimension): google.analytics.data.v1beta.Dimension;

                    /**
                     * Encodes the specified Dimension message. Does not implicitly {@link google.analytics.data.v1beta.Dimension.verify|verify} messages.
                     * @param message Dimension message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IDimension, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Dimension message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.Dimension.verify|verify} messages.
                     * @param message Dimension message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IDimension, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Dimension message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Dimension
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.Dimension;

                    /**
                     * Decodes a Dimension message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Dimension
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.Dimension;

                    /**
                     * Verifies a Dimension message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Dimension message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Dimension
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.Dimension;

                    /**
                     * Creates a plain object from a Dimension message. Also converts values to other types if specified.
                     * @param message Dimension
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.Dimension, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Dimension to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DimensionExpression. */
                interface IDimensionExpression {

                    /** DimensionExpression lowerCase */
                    lowerCase?: (google.analytics.data.v1beta.DimensionExpression.ICaseExpression|null);

                    /** DimensionExpression upperCase */
                    upperCase?: (google.analytics.data.v1beta.DimensionExpression.ICaseExpression|null);

                    /** DimensionExpression concatenate */
                    concatenate?: (google.analytics.data.v1beta.DimensionExpression.IConcatenateExpression|null);
                }

                /** Represents a DimensionExpression. */
                class DimensionExpression implements IDimensionExpression {

                    /**
                     * Constructs a new DimensionExpression.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IDimensionExpression);

                    /** DimensionExpression lowerCase. */
                    public lowerCase?: (google.analytics.data.v1beta.DimensionExpression.ICaseExpression|null);

                    /** DimensionExpression upperCase. */
                    public upperCase?: (google.analytics.data.v1beta.DimensionExpression.ICaseExpression|null);

                    /** DimensionExpression concatenate. */
                    public concatenate?: (google.analytics.data.v1beta.DimensionExpression.IConcatenateExpression|null);

                    /** DimensionExpression oneExpression. */
                    public oneExpression?: ("lowerCase"|"upperCase"|"concatenate");

                    /**
                     * Creates a new DimensionExpression instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DimensionExpression instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IDimensionExpression): google.analytics.data.v1beta.DimensionExpression;

                    /**
                     * Encodes the specified DimensionExpression message. Does not implicitly {@link google.analytics.data.v1beta.DimensionExpression.verify|verify} messages.
                     * @param message DimensionExpression message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IDimensionExpression, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DimensionExpression message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.DimensionExpression.verify|verify} messages.
                     * @param message DimensionExpression message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IDimensionExpression, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DimensionExpression message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DimensionExpression
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.DimensionExpression;

                    /**
                     * Decodes a DimensionExpression message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DimensionExpression
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.DimensionExpression;

                    /**
                     * Verifies a DimensionExpression message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DimensionExpression message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DimensionExpression
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.DimensionExpression;

                    /**
                     * Creates a plain object from a DimensionExpression message. Also converts values to other types if specified.
                     * @param message DimensionExpression
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.DimensionExpression, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DimensionExpression to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace DimensionExpression {

                    /** Properties of a CaseExpression. */
                    interface ICaseExpression {

                        /** CaseExpression dimensionName */
                        dimensionName?: (string|null);
                    }

                    /** Represents a CaseExpression. */
                    class CaseExpression implements ICaseExpression {

                        /**
                         * Constructs a new CaseExpression.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.analytics.data.v1beta.DimensionExpression.ICaseExpression);

                        /** CaseExpression dimensionName. */
                        public dimensionName: string;

                        /**
                         * Creates a new CaseExpression instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CaseExpression instance
                         */
                        public static create(properties?: google.analytics.data.v1beta.DimensionExpression.ICaseExpression): google.analytics.data.v1beta.DimensionExpression.CaseExpression;

                        /**
                         * Encodes the specified CaseExpression message. Does not implicitly {@link google.analytics.data.v1beta.DimensionExpression.CaseExpression.verify|verify} messages.
                         * @param message CaseExpression message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.analytics.data.v1beta.DimensionExpression.ICaseExpression, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CaseExpression message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.DimensionExpression.CaseExpression.verify|verify} messages.
                         * @param message CaseExpression message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.analytics.data.v1beta.DimensionExpression.ICaseExpression, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CaseExpression message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CaseExpression
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.DimensionExpression.CaseExpression;

                        /**
                         * Decodes a CaseExpression message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CaseExpression
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.DimensionExpression.CaseExpression;

                        /**
                         * Verifies a CaseExpression message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CaseExpression message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CaseExpression
                         */
                        public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.DimensionExpression.CaseExpression;

                        /**
                         * Creates a plain object from a CaseExpression message. Also converts values to other types if specified.
                         * @param message CaseExpression
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.analytics.data.v1beta.DimensionExpression.CaseExpression, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CaseExpression to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ConcatenateExpression. */
                    interface IConcatenateExpression {

                        /** ConcatenateExpression dimensionNames */
                        dimensionNames?: (string[]|null);

                        /** ConcatenateExpression delimiter */
                        delimiter?: (string|null);
                    }

                    /** Represents a ConcatenateExpression. */
                    class ConcatenateExpression implements IConcatenateExpression {

                        /**
                         * Constructs a new ConcatenateExpression.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.analytics.data.v1beta.DimensionExpression.IConcatenateExpression);

                        /** ConcatenateExpression dimensionNames. */
                        public dimensionNames: string[];

                        /** ConcatenateExpression delimiter. */
                        public delimiter: string;

                        /**
                         * Creates a new ConcatenateExpression instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ConcatenateExpression instance
                         */
                        public static create(properties?: google.analytics.data.v1beta.DimensionExpression.IConcatenateExpression): google.analytics.data.v1beta.DimensionExpression.ConcatenateExpression;

                        /**
                         * Encodes the specified ConcatenateExpression message. Does not implicitly {@link google.analytics.data.v1beta.DimensionExpression.ConcatenateExpression.verify|verify} messages.
                         * @param message ConcatenateExpression message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.analytics.data.v1beta.DimensionExpression.IConcatenateExpression, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ConcatenateExpression message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.DimensionExpression.ConcatenateExpression.verify|verify} messages.
                         * @param message ConcatenateExpression message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.analytics.data.v1beta.DimensionExpression.IConcatenateExpression, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ConcatenateExpression message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ConcatenateExpression
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.DimensionExpression.ConcatenateExpression;

                        /**
                         * Decodes a ConcatenateExpression message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ConcatenateExpression
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.DimensionExpression.ConcatenateExpression;

                        /**
                         * Verifies a ConcatenateExpression message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ConcatenateExpression message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ConcatenateExpression
                         */
                        public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.DimensionExpression.ConcatenateExpression;

                        /**
                         * Creates a plain object from a ConcatenateExpression message. Also converts values to other types if specified.
                         * @param message ConcatenateExpression
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.analytics.data.v1beta.DimensionExpression.ConcatenateExpression, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ConcatenateExpression to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a Metric. */
                interface IMetric {

                    /** Metric name */
                    name?: (string|null);

                    /** Metric expression */
                    expression?: (string|null);

                    /** Metric invisible */
                    invisible?: (boolean|null);
                }

                /** Represents a Metric. */
                class Metric implements IMetric {

                    /**
                     * Constructs a new Metric.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IMetric);

                    /** Metric name. */
                    public name: string;

                    /** Metric expression. */
                    public expression: string;

                    /** Metric invisible. */
                    public invisible: boolean;

                    /**
                     * Creates a new Metric instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Metric instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IMetric): google.analytics.data.v1beta.Metric;

                    /**
                     * Encodes the specified Metric message. Does not implicitly {@link google.analytics.data.v1beta.Metric.verify|verify} messages.
                     * @param message Metric message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Metric message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.Metric.verify|verify} messages.
                     * @param message Metric message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Metric message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Metric
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.Metric;

                    /**
                     * Decodes a Metric message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Metric
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.Metric;

                    /**
                     * Verifies a Metric message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Metric message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Metric
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.Metric;

                    /**
                     * Creates a plain object from a Metric message. Also converts values to other types if specified.
                     * @param message Metric
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.Metric, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Metric to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FilterExpression. */
                interface IFilterExpression {

                    /** FilterExpression andGroup */
                    andGroup?: (google.analytics.data.v1beta.IFilterExpressionList|null);

                    /** FilterExpression orGroup */
                    orGroup?: (google.analytics.data.v1beta.IFilterExpressionList|null);

                    /** FilterExpression notExpression */
                    notExpression?: (google.analytics.data.v1beta.IFilterExpression|null);

                    /** FilterExpression filter */
                    filter?: (google.analytics.data.v1beta.IFilter|null);
                }

                /** Represents a FilterExpression. */
                class FilterExpression implements IFilterExpression {

                    /**
                     * Constructs a new FilterExpression.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IFilterExpression);

                    /** FilterExpression andGroup. */
                    public andGroup?: (google.analytics.data.v1beta.IFilterExpressionList|null);

                    /** FilterExpression orGroup. */
                    public orGroup?: (google.analytics.data.v1beta.IFilterExpressionList|null);

                    /** FilterExpression notExpression. */
                    public notExpression?: (google.analytics.data.v1beta.IFilterExpression|null);

                    /** FilterExpression filter. */
                    public filter?: (google.analytics.data.v1beta.IFilter|null);

                    /** FilterExpression expr. */
                    public expr?: ("andGroup"|"orGroup"|"notExpression"|"filter");

                    /**
                     * Creates a new FilterExpression instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FilterExpression instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IFilterExpression): google.analytics.data.v1beta.FilterExpression;

                    /**
                     * Encodes the specified FilterExpression message. Does not implicitly {@link google.analytics.data.v1beta.FilterExpression.verify|verify} messages.
                     * @param message FilterExpression message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IFilterExpression, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FilterExpression message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.FilterExpression.verify|verify} messages.
                     * @param message FilterExpression message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IFilterExpression, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FilterExpression message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FilterExpression
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.FilterExpression;

                    /**
                     * Decodes a FilterExpression message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FilterExpression
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.FilterExpression;

                    /**
                     * Verifies a FilterExpression message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FilterExpression message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FilterExpression
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.FilterExpression;

                    /**
                     * Creates a plain object from a FilterExpression message. Also converts values to other types if specified.
                     * @param message FilterExpression
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.FilterExpression, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FilterExpression to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FilterExpressionList. */
                interface IFilterExpressionList {

                    /** FilterExpressionList expressions */
                    expressions?: (google.analytics.data.v1beta.IFilterExpression[]|null);
                }

                /** Represents a FilterExpressionList. */
                class FilterExpressionList implements IFilterExpressionList {

                    /**
                     * Constructs a new FilterExpressionList.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IFilterExpressionList);

                    /** FilterExpressionList expressions. */
                    public expressions: google.analytics.data.v1beta.IFilterExpression[];

                    /**
                     * Creates a new FilterExpressionList instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FilterExpressionList instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IFilterExpressionList): google.analytics.data.v1beta.FilterExpressionList;

                    /**
                     * Encodes the specified FilterExpressionList message. Does not implicitly {@link google.analytics.data.v1beta.FilterExpressionList.verify|verify} messages.
                     * @param message FilterExpressionList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IFilterExpressionList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FilterExpressionList message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.FilterExpressionList.verify|verify} messages.
                     * @param message FilterExpressionList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IFilterExpressionList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FilterExpressionList message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FilterExpressionList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.FilterExpressionList;

                    /**
                     * Decodes a FilterExpressionList message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FilterExpressionList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.FilterExpressionList;

                    /**
                     * Verifies a FilterExpressionList message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FilterExpressionList message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FilterExpressionList
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.FilterExpressionList;

                    /**
                     * Creates a plain object from a FilterExpressionList message. Also converts values to other types if specified.
                     * @param message FilterExpressionList
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.FilterExpressionList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FilterExpressionList to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Filter. */
                interface IFilter {

                    /** Filter fieldName */
                    fieldName?: (string|null);

                    /** Filter stringFilter */
                    stringFilter?: (google.analytics.data.v1beta.Filter.IStringFilter|null);

                    /** Filter inListFilter */
                    inListFilter?: (google.analytics.data.v1beta.Filter.IInListFilter|null);

                    /** Filter numericFilter */
                    numericFilter?: (google.analytics.data.v1beta.Filter.INumericFilter|null);

                    /** Filter betweenFilter */
                    betweenFilter?: (google.analytics.data.v1beta.Filter.IBetweenFilter|null);
                }

                /** Represents a Filter. */
                class Filter implements IFilter {

                    /**
                     * Constructs a new Filter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IFilter);

                    /** Filter fieldName. */
                    public fieldName: string;

                    /** Filter stringFilter. */
                    public stringFilter?: (google.analytics.data.v1beta.Filter.IStringFilter|null);

                    /** Filter inListFilter. */
                    public inListFilter?: (google.analytics.data.v1beta.Filter.IInListFilter|null);

                    /** Filter numericFilter. */
                    public numericFilter?: (google.analytics.data.v1beta.Filter.INumericFilter|null);

                    /** Filter betweenFilter. */
                    public betweenFilter?: (google.analytics.data.v1beta.Filter.IBetweenFilter|null);

                    /** Filter oneFilter. */
                    public oneFilter?: ("stringFilter"|"inListFilter"|"numericFilter"|"betweenFilter");

                    /**
                     * Creates a new Filter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Filter instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IFilter): google.analytics.data.v1beta.Filter;

                    /**
                     * Encodes the specified Filter message. Does not implicitly {@link google.analytics.data.v1beta.Filter.verify|verify} messages.
                     * @param message Filter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Filter message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.Filter.verify|verify} messages.
                     * @param message Filter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Filter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Filter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.Filter;

                    /**
                     * Decodes a Filter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Filter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.Filter;

                    /**
                     * Verifies a Filter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Filter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Filter
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.Filter;

                    /**
                     * Creates a plain object from a Filter message. Also converts values to other types if specified.
                     * @param message Filter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.Filter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Filter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Filter {

                    /** Properties of a StringFilter. */
                    interface IStringFilter {

                        /** StringFilter matchType */
                        matchType?: (google.analytics.data.v1beta.Filter.StringFilter.MatchType|keyof typeof google.analytics.data.v1beta.Filter.StringFilter.MatchType|null);

                        /** StringFilter value */
                        value?: (string|null);

                        /** StringFilter caseSensitive */
                        caseSensitive?: (boolean|null);
                    }

                    /** Represents a StringFilter. */
                    class StringFilter implements IStringFilter {

                        /**
                         * Constructs a new StringFilter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.analytics.data.v1beta.Filter.IStringFilter);

                        /** StringFilter matchType. */
                        public matchType: (google.analytics.data.v1beta.Filter.StringFilter.MatchType|keyof typeof google.analytics.data.v1beta.Filter.StringFilter.MatchType);

                        /** StringFilter value. */
                        public value: string;

                        /** StringFilter caseSensitive. */
                        public caseSensitive: boolean;

                        /**
                         * Creates a new StringFilter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StringFilter instance
                         */
                        public static create(properties?: google.analytics.data.v1beta.Filter.IStringFilter): google.analytics.data.v1beta.Filter.StringFilter;

                        /**
                         * Encodes the specified StringFilter message. Does not implicitly {@link google.analytics.data.v1beta.Filter.StringFilter.verify|verify} messages.
                         * @param message StringFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.analytics.data.v1beta.Filter.IStringFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StringFilter message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.Filter.StringFilter.verify|verify} messages.
                         * @param message StringFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.analytics.data.v1beta.Filter.IStringFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StringFilter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StringFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.Filter.StringFilter;

                        /**
                         * Decodes a StringFilter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StringFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.Filter.StringFilter;

                        /**
                         * Verifies a StringFilter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StringFilter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StringFilter
                         */
                        public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.Filter.StringFilter;

                        /**
                         * Creates a plain object from a StringFilter message. Also converts values to other types if specified.
                         * @param message StringFilter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.analytics.data.v1beta.Filter.StringFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StringFilter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace StringFilter {

                        /** MatchType enum. */
                        enum MatchType {
                            MATCH_TYPE_UNSPECIFIED = 0,
                            EXACT = 1,
                            BEGINS_WITH = 2,
                            ENDS_WITH = 3,
                            CONTAINS = 4,
                            FULL_REGEXP = 5,
                            PARTIAL_REGEXP = 6
                        }
                    }

                    /** Properties of an InListFilter. */
                    interface IInListFilter {

                        /** InListFilter values */
                        values?: (string[]|null);

                        /** InListFilter caseSensitive */
                        caseSensitive?: (boolean|null);
                    }

                    /** Represents an InListFilter. */
                    class InListFilter implements IInListFilter {

                        /**
                         * Constructs a new InListFilter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.analytics.data.v1beta.Filter.IInListFilter);

                        /** InListFilter values. */
                        public values: string[];

                        /** InListFilter caseSensitive. */
                        public caseSensitive: boolean;

                        /**
                         * Creates a new InListFilter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InListFilter instance
                         */
                        public static create(properties?: google.analytics.data.v1beta.Filter.IInListFilter): google.analytics.data.v1beta.Filter.InListFilter;

                        /**
                         * Encodes the specified InListFilter message. Does not implicitly {@link google.analytics.data.v1beta.Filter.InListFilter.verify|verify} messages.
                         * @param message InListFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.analytics.data.v1beta.Filter.IInListFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InListFilter message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.Filter.InListFilter.verify|verify} messages.
                         * @param message InListFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.analytics.data.v1beta.Filter.IInListFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InListFilter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InListFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.Filter.InListFilter;

                        /**
                         * Decodes an InListFilter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InListFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.Filter.InListFilter;

                        /**
                         * Verifies an InListFilter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InListFilter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InListFilter
                         */
                        public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.Filter.InListFilter;

                        /**
                         * Creates a plain object from an InListFilter message. Also converts values to other types if specified.
                         * @param message InListFilter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.analytics.data.v1beta.Filter.InListFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InListFilter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a NumericFilter. */
                    interface INumericFilter {

                        /** NumericFilter operation */
                        operation?: (google.analytics.data.v1beta.Filter.NumericFilter.Operation|keyof typeof google.analytics.data.v1beta.Filter.NumericFilter.Operation|null);

                        /** NumericFilter value */
                        value?: (google.analytics.data.v1beta.INumericValue|null);
                    }

                    /** Represents a NumericFilter. */
                    class NumericFilter implements INumericFilter {

                        /**
                         * Constructs a new NumericFilter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.analytics.data.v1beta.Filter.INumericFilter);

                        /** NumericFilter operation. */
                        public operation: (google.analytics.data.v1beta.Filter.NumericFilter.Operation|keyof typeof google.analytics.data.v1beta.Filter.NumericFilter.Operation);

                        /** NumericFilter value. */
                        public value?: (google.analytics.data.v1beta.INumericValue|null);

                        /**
                         * Creates a new NumericFilter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NumericFilter instance
                         */
                        public static create(properties?: google.analytics.data.v1beta.Filter.INumericFilter): google.analytics.data.v1beta.Filter.NumericFilter;

                        /**
                         * Encodes the specified NumericFilter message. Does not implicitly {@link google.analytics.data.v1beta.Filter.NumericFilter.verify|verify} messages.
                         * @param message NumericFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.analytics.data.v1beta.Filter.INumericFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NumericFilter message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.Filter.NumericFilter.verify|verify} messages.
                         * @param message NumericFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.analytics.data.v1beta.Filter.INumericFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NumericFilter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NumericFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.Filter.NumericFilter;

                        /**
                         * Decodes a NumericFilter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NumericFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.Filter.NumericFilter;

                        /**
                         * Verifies a NumericFilter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NumericFilter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NumericFilter
                         */
                        public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.Filter.NumericFilter;

                        /**
                         * Creates a plain object from a NumericFilter message. Also converts values to other types if specified.
                         * @param message NumericFilter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.analytics.data.v1beta.Filter.NumericFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NumericFilter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace NumericFilter {

                        /** Operation enum. */
                        enum Operation {
                            OPERATION_UNSPECIFIED = 0,
                            EQUAL = 1,
                            LESS_THAN = 2,
                            LESS_THAN_OR_EQUAL = 3,
                            GREATER_THAN = 4,
                            GREATER_THAN_OR_EQUAL = 5
                        }
                    }

                    /** Properties of a BetweenFilter. */
                    interface IBetweenFilter {

                        /** BetweenFilter fromValue */
                        fromValue?: (google.analytics.data.v1beta.INumericValue|null);

                        /** BetweenFilter toValue */
                        toValue?: (google.analytics.data.v1beta.INumericValue|null);
                    }

                    /** Represents a BetweenFilter. */
                    class BetweenFilter implements IBetweenFilter {

                        /**
                         * Constructs a new BetweenFilter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.analytics.data.v1beta.Filter.IBetweenFilter);

                        /** BetweenFilter fromValue. */
                        public fromValue?: (google.analytics.data.v1beta.INumericValue|null);

                        /** BetweenFilter toValue. */
                        public toValue?: (google.analytics.data.v1beta.INumericValue|null);

                        /**
                         * Creates a new BetweenFilter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BetweenFilter instance
                         */
                        public static create(properties?: google.analytics.data.v1beta.Filter.IBetweenFilter): google.analytics.data.v1beta.Filter.BetweenFilter;

                        /**
                         * Encodes the specified BetweenFilter message. Does not implicitly {@link google.analytics.data.v1beta.Filter.BetweenFilter.verify|verify} messages.
                         * @param message BetweenFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.analytics.data.v1beta.Filter.IBetweenFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BetweenFilter message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.Filter.BetweenFilter.verify|verify} messages.
                         * @param message BetweenFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.analytics.data.v1beta.Filter.IBetweenFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BetweenFilter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BetweenFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.Filter.BetweenFilter;

                        /**
                         * Decodes a BetweenFilter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BetweenFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.Filter.BetweenFilter;

                        /**
                         * Verifies a BetweenFilter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BetweenFilter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BetweenFilter
                         */
                        public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.Filter.BetweenFilter;

                        /**
                         * Creates a plain object from a BetweenFilter message. Also converts values to other types if specified.
                         * @param message BetweenFilter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.analytics.data.v1beta.Filter.BetweenFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BetweenFilter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of an OrderBy. */
                interface IOrderBy {

                    /** OrderBy metric */
                    metric?: (google.analytics.data.v1beta.OrderBy.IMetricOrderBy|null);

                    /** OrderBy dimension */
                    dimension?: (google.analytics.data.v1beta.OrderBy.IDimensionOrderBy|null);

                    /** OrderBy pivot */
                    pivot?: (google.analytics.data.v1beta.OrderBy.IPivotOrderBy|null);

                    /** OrderBy desc */
                    desc?: (boolean|null);
                }

                /** Represents an OrderBy. */
                class OrderBy implements IOrderBy {

                    /**
                     * Constructs a new OrderBy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IOrderBy);

                    /** OrderBy metric. */
                    public metric?: (google.analytics.data.v1beta.OrderBy.IMetricOrderBy|null);

                    /** OrderBy dimension. */
                    public dimension?: (google.analytics.data.v1beta.OrderBy.IDimensionOrderBy|null);

                    /** OrderBy pivot. */
                    public pivot?: (google.analytics.data.v1beta.OrderBy.IPivotOrderBy|null);

                    /** OrderBy desc. */
                    public desc: boolean;

                    /** OrderBy oneOrderBy. */
                    public oneOrderBy?: ("metric"|"dimension"|"pivot");

                    /**
                     * Creates a new OrderBy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OrderBy instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IOrderBy): google.analytics.data.v1beta.OrderBy;

                    /**
                     * Encodes the specified OrderBy message. Does not implicitly {@link google.analytics.data.v1beta.OrderBy.verify|verify} messages.
                     * @param message OrderBy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IOrderBy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OrderBy message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.OrderBy.verify|verify} messages.
                     * @param message OrderBy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IOrderBy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OrderBy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OrderBy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.OrderBy;

                    /**
                     * Decodes an OrderBy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OrderBy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.OrderBy;

                    /**
                     * Verifies an OrderBy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OrderBy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OrderBy
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.OrderBy;

                    /**
                     * Creates a plain object from an OrderBy message. Also converts values to other types if specified.
                     * @param message OrderBy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.OrderBy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OrderBy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace OrderBy {

                    /** Properties of a MetricOrderBy. */
                    interface IMetricOrderBy {

                        /** MetricOrderBy metricName */
                        metricName?: (string|null);
                    }

                    /** Represents a MetricOrderBy. */
                    class MetricOrderBy implements IMetricOrderBy {

                        /**
                         * Constructs a new MetricOrderBy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.analytics.data.v1beta.OrderBy.IMetricOrderBy);

                        /** MetricOrderBy metricName. */
                        public metricName: string;

                        /**
                         * Creates a new MetricOrderBy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MetricOrderBy instance
                         */
                        public static create(properties?: google.analytics.data.v1beta.OrderBy.IMetricOrderBy): google.analytics.data.v1beta.OrderBy.MetricOrderBy;

                        /**
                         * Encodes the specified MetricOrderBy message. Does not implicitly {@link google.analytics.data.v1beta.OrderBy.MetricOrderBy.verify|verify} messages.
                         * @param message MetricOrderBy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.analytics.data.v1beta.OrderBy.IMetricOrderBy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MetricOrderBy message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.OrderBy.MetricOrderBy.verify|verify} messages.
                         * @param message MetricOrderBy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.analytics.data.v1beta.OrderBy.IMetricOrderBy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MetricOrderBy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MetricOrderBy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.OrderBy.MetricOrderBy;

                        /**
                         * Decodes a MetricOrderBy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MetricOrderBy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.OrderBy.MetricOrderBy;

                        /**
                         * Verifies a MetricOrderBy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MetricOrderBy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MetricOrderBy
                         */
                        public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.OrderBy.MetricOrderBy;

                        /**
                         * Creates a plain object from a MetricOrderBy message. Also converts values to other types if specified.
                         * @param message MetricOrderBy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.analytics.data.v1beta.OrderBy.MetricOrderBy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MetricOrderBy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DimensionOrderBy. */
                    interface IDimensionOrderBy {

                        /** DimensionOrderBy dimensionName */
                        dimensionName?: (string|null);

                        /** DimensionOrderBy orderType */
                        orderType?: (google.analytics.data.v1beta.OrderBy.DimensionOrderBy.OrderType|keyof typeof google.analytics.data.v1beta.OrderBy.DimensionOrderBy.OrderType|null);
                    }

                    /** Represents a DimensionOrderBy. */
                    class DimensionOrderBy implements IDimensionOrderBy {

                        /**
                         * Constructs a new DimensionOrderBy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.analytics.data.v1beta.OrderBy.IDimensionOrderBy);

                        /** DimensionOrderBy dimensionName. */
                        public dimensionName: string;

                        /** DimensionOrderBy orderType. */
                        public orderType: (google.analytics.data.v1beta.OrderBy.DimensionOrderBy.OrderType|keyof typeof google.analytics.data.v1beta.OrderBy.DimensionOrderBy.OrderType);

                        /**
                         * Creates a new DimensionOrderBy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DimensionOrderBy instance
                         */
                        public static create(properties?: google.analytics.data.v1beta.OrderBy.IDimensionOrderBy): google.analytics.data.v1beta.OrderBy.DimensionOrderBy;

                        /**
                         * Encodes the specified DimensionOrderBy message. Does not implicitly {@link google.analytics.data.v1beta.OrderBy.DimensionOrderBy.verify|verify} messages.
                         * @param message DimensionOrderBy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.analytics.data.v1beta.OrderBy.IDimensionOrderBy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DimensionOrderBy message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.OrderBy.DimensionOrderBy.verify|verify} messages.
                         * @param message DimensionOrderBy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.analytics.data.v1beta.OrderBy.IDimensionOrderBy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DimensionOrderBy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DimensionOrderBy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.OrderBy.DimensionOrderBy;

                        /**
                         * Decodes a DimensionOrderBy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DimensionOrderBy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.OrderBy.DimensionOrderBy;

                        /**
                         * Verifies a DimensionOrderBy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DimensionOrderBy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DimensionOrderBy
                         */
                        public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.OrderBy.DimensionOrderBy;

                        /**
                         * Creates a plain object from a DimensionOrderBy message. Also converts values to other types if specified.
                         * @param message DimensionOrderBy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.analytics.data.v1beta.OrderBy.DimensionOrderBy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DimensionOrderBy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace DimensionOrderBy {

                        /** OrderType enum. */
                        enum OrderType {
                            ORDER_TYPE_UNSPECIFIED = 0,
                            ALPHANUMERIC = 1,
                            CASE_INSENSITIVE_ALPHANUMERIC = 2,
                            NUMERIC = 3
                        }
                    }

                    /** Properties of a PivotOrderBy. */
                    interface IPivotOrderBy {

                        /** PivotOrderBy metricName */
                        metricName?: (string|null);

                        /** PivotOrderBy pivotSelections */
                        pivotSelections?: (google.analytics.data.v1beta.OrderBy.PivotOrderBy.IPivotSelection[]|null);
                    }

                    /** Represents a PivotOrderBy. */
                    class PivotOrderBy implements IPivotOrderBy {

                        /**
                         * Constructs a new PivotOrderBy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.analytics.data.v1beta.OrderBy.IPivotOrderBy);

                        /** PivotOrderBy metricName. */
                        public metricName: string;

                        /** PivotOrderBy pivotSelections. */
                        public pivotSelections: google.analytics.data.v1beta.OrderBy.PivotOrderBy.IPivotSelection[];

                        /**
                         * Creates a new PivotOrderBy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PivotOrderBy instance
                         */
                        public static create(properties?: google.analytics.data.v1beta.OrderBy.IPivotOrderBy): google.analytics.data.v1beta.OrderBy.PivotOrderBy;

                        /**
                         * Encodes the specified PivotOrderBy message. Does not implicitly {@link google.analytics.data.v1beta.OrderBy.PivotOrderBy.verify|verify} messages.
                         * @param message PivotOrderBy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.analytics.data.v1beta.OrderBy.IPivotOrderBy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PivotOrderBy message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.OrderBy.PivotOrderBy.verify|verify} messages.
                         * @param message PivotOrderBy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.analytics.data.v1beta.OrderBy.IPivotOrderBy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PivotOrderBy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PivotOrderBy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.OrderBy.PivotOrderBy;

                        /**
                         * Decodes a PivotOrderBy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PivotOrderBy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.OrderBy.PivotOrderBy;

                        /**
                         * Verifies a PivotOrderBy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PivotOrderBy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PivotOrderBy
                         */
                        public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.OrderBy.PivotOrderBy;

                        /**
                         * Creates a plain object from a PivotOrderBy message. Also converts values to other types if specified.
                         * @param message PivotOrderBy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.analytics.data.v1beta.OrderBy.PivotOrderBy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PivotOrderBy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace PivotOrderBy {

                        /** Properties of a PivotSelection. */
                        interface IPivotSelection {

                            /** PivotSelection dimensionName */
                            dimensionName?: (string|null);

                            /** PivotSelection dimensionValue */
                            dimensionValue?: (string|null);
                        }

                        /** Represents a PivotSelection. */
                        class PivotSelection implements IPivotSelection {

                            /**
                             * Constructs a new PivotSelection.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.analytics.data.v1beta.OrderBy.PivotOrderBy.IPivotSelection);

                            /** PivotSelection dimensionName. */
                            public dimensionName: string;

                            /** PivotSelection dimensionValue. */
                            public dimensionValue: string;

                            /**
                             * Creates a new PivotSelection instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PivotSelection instance
                             */
                            public static create(properties?: google.analytics.data.v1beta.OrderBy.PivotOrderBy.IPivotSelection): google.analytics.data.v1beta.OrderBy.PivotOrderBy.PivotSelection;

                            /**
                             * Encodes the specified PivotSelection message. Does not implicitly {@link google.analytics.data.v1beta.OrderBy.PivotOrderBy.PivotSelection.verify|verify} messages.
                             * @param message PivotSelection message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.analytics.data.v1beta.OrderBy.PivotOrderBy.IPivotSelection, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PivotSelection message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.OrderBy.PivotOrderBy.PivotSelection.verify|verify} messages.
                             * @param message PivotSelection message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.analytics.data.v1beta.OrderBy.PivotOrderBy.IPivotSelection, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PivotSelection message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PivotSelection
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.OrderBy.PivotOrderBy.PivotSelection;

                            /**
                             * Decodes a PivotSelection message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PivotSelection
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.OrderBy.PivotOrderBy.PivotSelection;

                            /**
                             * Verifies a PivotSelection message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PivotSelection message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PivotSelection
                             */
                            public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.OrderBy.PivotOrderBy.PivotSelection;

                            /**
                             * Creates a plain object from a PivotSelection message. Also converts values to other types if specified.
                             * @param message PivotSelection
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.analytics.data.v1beta.OrderBy.PivotOrderBy.PivotSelection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PivotSelection to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }

                /** Properties of a Pivot. */
                interface IPivot {

                    /** Pivot fieldNames */
                    fieldNames?: (string[]|null);

                    /** Pivot orderBys */
                    orderBys?: (google.analytics.data.v1beta.IOrderBy[]|null);

                    /** Pivot offset */
                    offset?: (number|Long|string|null);

                    /** Pivot limit */
                    limit?: (number|Long|string|null);

                    /** Pivot metricAggregations */
                    metricAggregations?: (google.analytics.data.v1beta.MetricAggregation[]|null);
                }

                /** Represents a Pivot. */
                class Pivot implements IPivot {

                    /**
                     * Constructs a new Pivot.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IPivot);

                    /** Pivot fieldNames. */
                    public fieldNames: string[];

                    /** Pivot orderBys. */
                    public orderBys: google.analytics.data.v1beta.IOrderBy[];

                    /** Pivot offset. */
                    public offset: (number|Long|string);

                    /** Pivot limit. */
                    public limit: (number|Long|string);

                    /** Pivot metricAggregations. */
                    public metricAggregations: google.analytics.data.v1beta.MetricAggregation[];

                    /**
                     * Creates a new Pivot instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Pivot instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IPivot): google.analytics.data.v1beta.Pivot;

                    /**
                     * Encodes the specified Pivot message. Does not implicitly {@link google.analytics.data.v1beta.Pivot.verify|verify} messages.
                     * @param message Pivot message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IPivot, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Pivot message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.Pivot.verify|verify} messages.
                     * @param message Pivot message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IPivot, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Pivot message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Pivot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.Pivot;

                    /**
                     * Decodes a Pivot message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Pivot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.Pivot;

                    /**
                     * Verifies a Pivot message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Pivot message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Pivot
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.Pivot;

                    /**
                     * Creates a plain object from a Pivot message. Also converts values to other types if specified.
                     * @param message Pivot
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.Pivot, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Pivot to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CohortSpec. */
                interface ICohortSpec {

                    /** CohortSpec cohorts */
                    cohorts?: (google.analytics.data.v1beta.ICohort[]|null);

                    /** CohortSpec cohortsRange */
                    cohortsRange?: (google.analytics.data.v1beta.ICohortsRange|null);

                    /** CohortSpec cohortReportSettings */
                    cohortReportSettings?: (google.analytics.data.v1beta.ICohortReportSettings|null);
                }

                /** Represents a CohortSpec. */
                class CohortSpec implements ICohortSpec {

                    /**
                     * Constructs a new CohortSpec.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.ICohortSpec);

                    /** CohortSpec cohorts. */
                    public cohorts: google.analytics.data.v1beta.ICohort[];

                    /** CohortSpec cohortsRange. */
                    public cohortsRange?: (google.analytics.data.v1beta.ICohortsRange|null);

                    /** CohortSpec cohortReportSettings. */
                    public cohortReportSettings?: (google.analytics.data.v1beta.ICohortReportSettings|null);

                    /**
                     * Creates a new CohortSpec instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CohortSpec instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.ICohortSpec): google.analytics.data.v1beta.CohortSpec;

                    /**
                     * Encodes the specified CohortSpec message. Does not implicitly {@link google.analytics.data.v1beta.CohortSpec.verify|verify} messages.
                     * @param message CohortSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.ICohortSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CohortSpec message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.CohortSpec.verify|verify} messages.
                     * @param message CohortSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.ICohortSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CohortSpec message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CohortSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.CohortSpec;

                    /**
                     * Decodes a CohortSpec message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CohortSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.CohortSpec;

                    /**
                     * Verifies a CohortSpec message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CohortSpec message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CohortSpec
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.CohortSpec;

                    /**
                     * Creates a plain object from a CohortSpec message. Also converts values to other types if specified.
                     * @param message CohortSpec
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.CohortSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CohortSpec to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Cohort. */
                interface ICohort {

                    /** Cohort name */
                    name?: (string|null);

                    /** Cohort dimension */
                    dimension?: (string|null);

                    /** Cohort dateRange */
                    dateRange?: (google.analytics.data.v1beta.IDateRange|null);
                }

                /** Represents a Cohort. */
                class Cohort implements ICohort {

                    /**
                     * Constructs a new Cohort.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.ICohort);

                    /** Cohort name. */
                    public name: string;

                    /** Cohort dimension. */
                    public dimension: string;

                    /** Cohort dateRange. */
                    public dateRange?: (google.analytics.data.v1beta.IDateRange|null);

                    /**
                     * Creates a new Cohort instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Cohort instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.ICohort): google.analytics.data.v1beta.Cohort;

                    /**
                     * Encodes the specified Cohort message. Does not implicitly {@link google.analytics.data.v1beta.Cohort.verify|verify} messages.
                     * @param message Cohort message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.ICohort, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Cohort message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.Cohort.verify|verify} messages.
                     * @param message Cohort message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.ICohort, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Cohort message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Cohort
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.Cohort;

                    /**
                     * Decodes a Cohort message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Cohort
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.Cohort;

                    /**
                     * Verifies a Cohort message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Cohort message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Cohort
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.Cohort;

                    /**
                     * Creates a plain object from a Cohort message. Also converts values to other types if specified.
                     * @param message Cohort
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.Cohort, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Cohort to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CohortsRange. */
                interface ICohortsRange {

                    /** CohortsRange granularity */
                    granularity?: (google.analytics.data.v1beta.CohortsRange.Granularity|keyof typeof google.analytics.data.v1beta.CohortsRange.Granularity|null);

                    /** CohortsRange startOffset */
                    startOffset?: (number|null);

                    /** CohortsRange endOffset */
                    endOffset?: (number|null);
                }

                /** Represents a CohortsRange. */
                class CohortsRange implements ICohortsRange {

                    /**
                     * Constructs a new CohortsRange.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.ICohortsRange);

                    /** CohortsRange granularity. */
                    public granularity: (google.analytics.data.v1beta.CohortsRange.Granularity|keyof typeof google.analytics.data.v1beta.CohortsRange.Granularity);

                    /** CohortsRange startOffset. */
                    public startOffset: number;

                    /** CohortsRange endOffset. */
                    public endOffset: number;

                    /**
                     * Creates a new CohortsRange instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CohortsRange instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.ICohortsRange): google.analytics.data.v1beta.CohortsRange;

                    /**
                     * Encodes the specified CohortsRange message. Does not implicitly {@link google.analytics.data.v1beta.CohortsRange.verify|verify} messages.
                     * @param message CohortsRange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.ICohortsRange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CohortsRange message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.CohortsRange.verify|verify} messages.
                     * @param message CohortsRange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.ICohortsRange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CohortsRange message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CohortsRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.CohortsRange;

                    /**
                     * Decodes a CohortsRange message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CohortsRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.CohortsRange;

                    /**
                     * Verifies a CohortsRange message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CohortsRange message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CohortsRange
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.CohortsRange;

                    /**
                     * Creates a plain object from a CohortsRange message. Also converts values to other types if specified.
                     * @param message CohortsRange
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.CohortsRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CohortsRange to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace CohortsRange {

                    /** Granularity enum. */
                    enum Granularity {
                        GRANULARITY_UNSPECIFIED = 0,
                        DAILY = 1,
                        WEEKLY = 2,
                        MONTHLY = 3
                    }
                }

                /** Properties of a CohortReportSettings. */
                interface ICohortReportSettings {

                    /** CohortReportSettings accumulate */
                    accumulate?: (boolean|null);
                }

                /** Represents a CohortReportSettings. */
                class CohortReportSettings implements ICohortReportSettings {

                    /**
                     * Constructs a new CohortReportSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.ICohortReportSettings);

                    /** CohortReportSettings accumulate. */
                    public accumulate: boolean;

                    /**
                     * Creates a new CohortReportSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CohortReportSettings instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.ICohortReportSettings): google.analytics.data.v1beta.CohortReportSettings;

                    /**
                     * Encodes the specified CohortReportSettings message. Does not implicitly {@link google.analytics.data.v1beta.CohortReportSettings.verify|verify} messages.
                     * @param message CohortReportSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.ICohortReportSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CohortReportSettings message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.CohortReportSettings.verify|verify} messages.
                     * @param message CohortReportSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.ICohortReportSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CohortReportSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CohortReportSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.CohortReportSettings;

                    /**
                     * Decodes a CohortReportSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CohortReportSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.CohortReportSettings;

                    /**
                     * Verifies a CohortReportSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CohortReportSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CohortReportSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.CohortReportSettings;

                    /**
                     * Creates a plain object from a CohortReportSettings message. Also converts values to other types if specified.
                     * @param message CohortReportSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.CohortReportSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CohortReportSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ResponseMetaData. */
                interface IResponseMetaData {

                    /** ResponseMetaData dataLossFromOtherRow */
                    dataLossFromOtherRow?: (boolean|null);

                    /** ResponseMetaData schemaRestrictionResponse */
                    schemaRestrictionResponse?: (google.analytics.data.v1beta.ResponseMetaData.ISchemaRestrictionResponse|null);

                    /** ResponseMetaData currencyCode */
                    currencyCode?: (string|null);

                    /** ResponseMetaData timeZone */
                    timeZone?: (string|null);

                    /** ResponseMetaData emptyReason */
                    emptyReason?: (string|null);
                }

                /** Represents a ResponseMetaData. */
                class ResponseMetaData implements IResponseMetaData {

                    /**
                     * Constructs a new ResponseMetaData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IResponseMetaData);

                    /** ResponseMetaData dataLossFromOtherRow. */
                    public dataLossFromOtherRow: boolean;

                    /** ResponseMetaData schemaRestrictionResponse. */
                    public schemaRestrictionResponse?: (google.analytics.data.v1beta.ResponseMetaData.ISchemaRestrictionResponse|null);

                    /** ResponseMetaData currencyCode. */
                    public currencyCode?: (string|null);

                    /** ResponseMetaData timeZone. */
                    public timeZone?: (string|null);

                    /** ResponseMetaData emptyReason. */
                    public emptyReason?: (string|null);

                    /** ResponseMetaData _schemaRestrictionResponse. */
                    public _schemaRestrictionResponse?: "schemaRestrictionResponse";

                    /** ResponseMetaData _currencyCode. */
                    public _currencyCode?: "currencyCode";

                    /** ResponseMetaData _timeZone. */
                    public _timeZone?: "timeZone";

                    /** ResponseMetaData _emptyReason. */
                    public _emptyReason?: "emptyReason";

                    /**
                     * Creates a new ResponseMetaData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResponseMetaData instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IResponseMetaData): google.analytics.data.v1beta.ResponseMetaData;

                    /**
                     * Encodes the specified ResponseMetaData message. Does not implicitly {@link google.analytics.data.v1beta.ResponseMetaData.verify|verify} messages.
                     * @param message ResponseMetaData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IResponseMetaData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResponseMetaData message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.ResponseMetaData.verify|verify} messages.
                     * @param message ResponseMetaData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IResponseMetaData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResponseMetaData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResponseMetaData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.ResponseMetaData;

                    /**
                     * Decodes a ResponseMetaData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResponseMetaData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.ResponseMetaData;

                    /**
                     * Verifies a ResponseMetaData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResponseMetaData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResponseMetaData
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.ResponseMetaData;

                    /**
                     * Creates a plain object from a ResponseMetaData message. Also converts values to other types if specified.
                     * @param message ResponseMetaData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.ResponseMetaData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResponseMetaData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ResponseMetaData {

                    /** Properties of a SchemaRestrictionResponse. */
                    interface ISchemaRestrictionResponse {

                        /** SchemaRestrictionResponse activeMetricRestrictions */
                        activeMetricRestrictions?: (google.analytics.data.v1beta.ResponseMetaData.SchemaRestrictionResponse.IActiveMetricRestriction[]|null);
                    }

                    /** Represents a SchemaRestrictionResponse. */
                    class SchemaRestrictionResponse implements ISchemaRestrictionResponse {

                        /**
                         * Constructs a new SchemaRestrictionResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.analytics.data.v1beta.ResponseMetaData.ISchemaRestrictionResponse);

                        /** SchemaRestrictionResponse activeMetricRestrictions. */
                        public activeMetricRestrictions: google.analytics.data.v1beta.ResponseMetaData.SchemaRestrictionResponse.IActiveMetricRestriction[];

                        /**
                         * Creates a new SchemaRestrictionResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SchemaRestrictionResponse instance
                         */
                        public static create(properties?: google.analytics.data.v1beta.ResponseMetaData.ISchemaRestrictionResponse): google.analytics.data.v1beta.ResponseMetaData.SchemaRestrictionResponse;

                        /**
                         * Encodes the specified SchemaRestrictionResponse message. Does not implicitly {@link google.analytics.data.v1beta.ResponseMetaData.SchemaRestrictionResponse.verify|verify} messages.
                         * @param message SchemaRestrictionResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.analytics.data.v1beta.ResponseMetaData.ISchemaRestrictionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SchemaRestrictionResponse message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.ResponseMetaData.SchemaRestrictionResponse.verify|verify} messages.
                         * @param message SchemaRestrictionResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.analytics.data.v1beta.ResponseMetaData.ISchemaRestrictionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SchemaRestrictionResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SchemaRestrictionResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.ResponseMetaData.SchemaRestrictionResponse;

                        /**
                         * Decodes a SchemaRestrictionResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SchemaRestrictionResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.ResponseMetaData.SchemaRestrictionResponse;

                        /**
                         * Verifies a SchemaRestrictionResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SchemaRestrictionResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SchemaRestrictionResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.ResponseMetaData.SchemaRestrictionResponse;

                        /**
                         * Creates a plain object from a SchemaRestrictionResponse message. Also converts values to other types if specified.
                         * @param message SchemaRestrictionResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.analytics.data.v1beta.ResponseMetaData.SchemaRestrictionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SchemaRestrictionResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace SchemaRestrictionResponse {

                        /** Properties of an ActiveMetricRestriction. */
                        interface IActiveMetricRestriction {

                            /** ActiveMetricRestriction metricName */
                            metricName?: (string|null);

                            /** ActiveMetricRestriction restrictedMetricTypes */
                            restrictedMetricTypes?: (google.analytics.data.v1beta.RestrictedMetricType[]|null);
                        }

                        /** Represents an ActiveMetricRestriction. */
                        class ActiveMetricRestriction implements IActiveMetricRestriction {

                            /**
                             * Constructs a new ActiveMetricRestriction.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.analytics.data.v1beta.ResponseMetaData.SchemaRestrictionResponse.IActiveMetricRestriction);

                            /** ActiveMetricRestriction metricName. */
                            public metricName?: (string|null);

                            /** ActiveMetricRestriction restrictedMetricTypes. */
                            public restrictedMetricTypes: google.analytics.data.v1beta.RestrictedMetricType[];

                            /** ActiveMetricRestriction _metricName. */
                            public _metricName?: "metricName";

                            /**
                             * Creates a new ActiveMetricRestriction instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ActiveMetricRestriction instance
                             */
                            public static create(properties?: google.analytics.data.v1beta.ResponseMetaData.SchemaRestrictionResponse.IActiveMetricRestriction): google.analytics.data.v1beta.ResponseMetaData.SchemaRestrictionResponse.ActiveMetricRestriction;

                            /**
                             * Encodes the specified ActiveMetricRestriction message. Does not implicitly {@link google.analytics.data.v1beta.ResponseMetaData.SchemaRestrictionResponse.ActiveMetricRestriction.verify|verify} messages.
                             * @param message ActiveMetricRestriction message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.analytics.data.v1beta.ResponseMetaData.SchemaRestrictionResponse.IActiveMetricRestriction, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ActiveMetricRestriction message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.ResponseMetaData.SchemaRestrictionResponse.ActiveMetricRestriction.verify|verify} messages.
                             * @param message ActiveMetricRestriction message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.analytics.data.v1beta.ResponseMetaData.SchemaRestrictionResponse.IActiveMetricRestriction, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an ActiveMetricRestriction message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ActiveMetricRestriction
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.ResponseMetaData.SchemaRestrictionResponse.ActiveMetricRestriction;

                            /**
                             * Decodes an ActiveMetricRestriction message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ActiveMetricRestriction
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.ResponseMetaData.SchemaRestrictionResponse.ActiveMetricRestriction;

                            /**
                             * Verifies an ActiveMetricRestriction message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an ActiveMetricRestriction message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ActiveMetricRestriction
                             */
                            public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.ResponseMetaData.SchemaRestrictionResponse.ActiveMetricRestriction;

                            /**
                             * Creates a plain object from an ActiveMetricRestriction message. Also converts values to other types if specified.
                             * @param message ActiveMetricRestriction
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.analytics.data.v1beta.ResponseMetaData.SchemaRestrictionResponse.ActiveMetricRestriction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ActiveMetricRestriction to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }

                /** Properties of a DimensionHeader. */
                interface IDimensionHeader {

                    /** DimensionHeader name */
                    name?: (string|null);
                }

                /** Represents a DimensionHeader. */
                class DimensionHeader implements IDimensionHeader {

                    /**
                     * Constructs a new DimensionHeader.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IDimensionHeader);

                    /** DimensionHeader name. */
                    public name: string;

                    /**
                     * Creates a new DimensionHeader instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DimensionHeader instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IDimensionHeader): google.analytics.data.v1beta.DimensionHeader;

                    /**
                     * Encodes the specified DimensionHeader message. Does not implicitly {@link google.analytics.data.v1beta.DimensionHeader.verify|verify} messages.
                     * @param message DimensionHeader message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IDimensionHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DimensionHeader message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.DimensionHeader.verify|verify} messages.
                     * @param message DimensionHeader message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IDimensionHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DimensionHeader message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DimensionHeader
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.DimensionHeader;

                    /**
                     * Decodes a DimensionHeader message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DimensionHeader
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.DimensionHeader;

                    /**
                     * Verifies a DimensionHeader message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DimensionHeader message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DimensionHeader
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.DimensionHeader;

                    /**
                     * Creates a plain object from a DimensionHeader message. Also converts values to other types if specified.
                     * @param message DimensionHeader
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.DimensionHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DimensionHeader to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MetricHeader. */
                interface IMetricHeader {

                    /** MetricHeader name */
                    name?: (string|null);

                    /** MetricHeader type */
                    type?: (google.analytics.data.v1beta.MetricType|keyof typeof google.analytics.data.v1beta.MetricType|null);
                }

                /** Represents a MetricHeader. */
                class MetricHeader implements IMetricHeader {

                    /**
                     * Constructs a new MetricHeader.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IMetricHeader);

                    /** MetricHeader name. */
                    public name: string;

                    /** MetricHeader type. */
                    public type: (google.analytics.data.v1beta.MetricType|keyof typeof google.analytics.data.v1beta.MetricType);

                    /**
                     * Creates a new MetricHeader instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MetricHeader instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IMetricHeader): google.analytics.data.v1beta.MetricHeader;

                    /**
                     * Encodes the specified MetricHeader message. Does not implicitly {@link google.analytics.data.v1beta.MetricHeader.verify|verify} messages.
                     * @param message MetricHeader message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IMetricHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MetricHeader message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.MetricHeader.verify|verify} messages.
                     * @param message MetricHeader message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IMetricHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetricHeader message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MetricHeader
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.MetricHeader;

                    /**
                     * Decodes a MetricHeader message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MetricHeader
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.MetricHeader;

                    /**
                     * Verifies a MetricHeader message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MetricHeader message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetricHeader
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.MetricHeader;

                    /**
                     * Creates a plain object from a MetricHeader message. Also converts values to other types if specified.
                     * @param message MetricHeader
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.MetricHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetricHeader to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PivotHeader. */
                interface IPivotHeader {

                    /** PivotHeader pivotDimensionHeaders */
                    pivotDimensionHeaders?: (google.analytics.data.v1beta.IPivotDimensionHeader[]|null);

                    /** PivotHeader rowCount */
                    rowCount?: (number|null);
                }

                /** Represents a PivotHeader. */
                class PivotHeader implements IPivotHeader {

                    /**
                     * Constructs a new PivotHeader.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IPivotHeader);

                    /** PivotHeader pivotDimensionHeaders. */
                    public pivotDimensionHeaders: google.analytics.data.v1beta.IPivotDimensionHeader[];

                    /** PivotHeader rowCount. */
                    public rowCount: number;

                    /**
                     * Creates a new PivotHeader instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PivotHeader instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IPivotHeader): google.analytics.data.v1beta.PivotHeader;

                    /**
                     * Encodes the specified PivotHeader message. Does not implicitly {@link google.analytics.data.v1beta.PivotHeader.verify|verify} messages.
                     * @param message PivotHeader message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IPivotHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PivotHeader message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.PivotHeader.verify|verify} messages.
                     * @param message PivotHeader message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IPivotHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PivotHeader message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PivotHeader
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.PivotHeader;

                    /**
                     * Decodes a PivotHeader message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PivotHeader
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.PivotHeader;

                    /**
                     * Verifies a PivotHeader message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PivotHeader message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PivotHeader
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.PivotHeader;

                    /**
                     * Creates a plain object from a PivotHeader message. Also converts values to other types if specified.
                     * @param message PivotHeader
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.PivotHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PivotHeader to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PivotDimensionHeader. */
                interface IPivotDimensionHeader {

                    /** PivotDimensionHeader dimensionValues */
                    dimensionValues?: (google.analytics.data.v1beta.IDimensionValue[]|null);
                }

                /** Represents a PivotDimensionHeader. */
                class PivotDimensionHeader implements IPivotDimensionHeader {

                    /**
                     * Constructs a new PivotDimensionHeader.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IPivotDimensionHeader);

                    /** PivotDimensionHeader dimensionValues. */
                    public dimensionValues: google.analytics.data.v1beta.IDimensionValue[];

                    /**
                     * Creates a new PivotDimensionHeader instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PivotDimensionHeader instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IPivotDimensionHeader): google.analytics.data.v1beta.PivotDimensionHeader;

                    /**
                     * Encodes the specified PivotDimensionHeader message. Does not implicitly {@link google.analytics.data.v1beta.PivotDimensionHeader.verify|verify} messages.
                     * @param message PivotDimensionHeader message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IPivotDimensionHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PivotDimensionHeader message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.PivotDimensionHeader.verify|verify} messages.
                     * @param message PivotDimensionHeader message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IPivotDimensionHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PivotDimensionHeader message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PivotDimensionHeader
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.PivotDimensionHeader;

                    /**
                     * Decodes a PivotDimensionHeader message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PivotDimensionHeader
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.PivotDimensionHeader;

                    /**
                     * Verifies a PivotDimensionHeader message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PivotDimensionHeader message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PivotDimensionHeader
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.PivotDimensionHeader;

                    /**
                     * Creates a plain object from a PivotDimensionHeader message. Also converts values to other types if specified.
                     * @param message PivotDimensionHeader
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.PivotDimensionHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PivotDimensionHeader to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Row. */
                interface IRow {

                    /** Row dimensionValues */
                    dimensionValues?: (google.analytics.data.v1beta.IDimensionValue[]|null);

                    /** Row metricValues */
                    metricValues?: (google.analytics.data.v1beta.IMetricValue[]|null);
                }

                /** Represents a Row. */
                class Row implements IRow {

                    /**
                     * Constructs a new Row.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IRow);

                    /** Row dimensionValues. */
                    public dimensionValues: google.analytics.data.v1beta.IDimensionValue[];

                    /** Row metricValues. */
                    public metricValues: google.analytics.data.v1beta.IMetricValue[];

                    /**
                     * Creates a new Row instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Row instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IRow): google.analytics.data.v1beta.Row;

                    /**
                     * Encodes the specified Row message. Does not implicitly {@link google.analytics.data.v1beta.Row.verify|verify} messages.
                     * @param message Row message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IRow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Row message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.Row.verify|verify} messages.
                     * @param message Row message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IRow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Row message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Row
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.Row;

                    /**
                     * Decodes a Row message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Row
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.Row;

                    /**
                     * Verifies a Row message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Row message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Row
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.Row;

                    /**
                     * Creates a plain object from a Row message. Also converts values to other types if specified.
                     * @param message Row
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.Row, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Row to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DimensionValue. */
                interface IDimensionValue {

                    /** DimensionValue value */
                    value?: (string|null);
                }

                /** Represents a DimensionValue. */
                class DimensionValue implements IDimensionValue {

                    /**
                     * Constructs a new DimensionValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IDimensionValue);

                    /** DimensionValue value. */
                    public value?: (string|null);

                    /** DimensionValue oneValue. */
                    public oneValue?: "value";

                    /**
                     * Creates a new DimensionValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DimensionValue instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IDimensionValue): google.analytics.data.v1beta.DimensionValue;

                    /**
                     * Encodes the specified DimensionValue message. Does not implicitly {@link google.analytics.data.v1beta.DimensionValue.verify|verify} messages.
                     * @param message DimensionValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IDimensionValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DimensionValue message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.DimensionValue.verify|verify} messages.
                     * @param message DimensionValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IDimensionValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DimensionValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DimensionValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.DimensionValue;

                    /**
                     * Decodes a DimensionValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DimensionValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.DimensionValue;

                    /**
                     * Verifies a DimensionValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DimensionValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DimensionValue
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.DimensionValue;

                    /**
                     * Creates a plain object from a DimensionValue message. Also converts values to other types if specified.
                     * @param message DimensionValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.DimensionValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DimensionValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MetricValue. */
                interface IMetricValue {

                    /** MetricValue value */
                    value?: (string|null);
                }

                /** Represents a MetricValue. */
                class MetricValue implements IMetricValue {

                    /**
                     * Constructs a new MetricValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IMetricValue);

                    /** MetricValue value. */
                    public value?: (string|null);

                    /** MetricValue oneValue. */
                    public oneValue?: "value";

                    /**
                     * Creates a new MetricValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MetricValue instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IMetricValue): google.analytics.data.v1beta.MetricValue;

                    /**
                     * Encodes the specified MetricValue message. Does not implicitly {@link google.analytics.data.v1beta.MetricValue.verify|verify} messages.
                     * @param message MetricValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IMetricValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MetricValue message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.MetricValue.verify|verify} messages.
                     * @param message MetricValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IMetricValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetricValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MetricValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.MetricValue;

                    /**
                     * Decodes a MetricValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MetricValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.MetricValue;

                    /**
                     * Verifies a MetricValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MetricValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetricValue
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.MetricValue;

                    /**
                     * Creates a plain object from a MetricValue message. Also converts values to other types if specified.
                     * @param message MetricValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.MetricValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetricValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a NumericValue. */
                interface INumericValue {

                    /** NumericValue int64Value */
                    int64Value?: (number|Long|string|null);

                    /** NumericValue doubleValue */
                    doubleValue?: (number|null);
                }

                /** Represents a NumericValue. */
                class NumericValue implements INumericValue {

                    /**
                     * Constructs a new NumericValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.INumericValue);

                    /** NumericValue int64Value. */
                    public int64Value?: (number|Long|string|null);

                    /** NumericValue doubleValue. */
                    public doubleValue?: (number|null);

                    /** NumericValue oneValue. */
                    public oneValue?: ("int64Value"|"doubleValue");

                    /**
                     * Creates a new NumericValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NumericValue instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.INumericValue): google.analytics.data.v1beta.NumericValue;

                    /**
                     * Encodes the specified NumericValue message. Does not implicitly {@link google.analytics.data.v1beta.NumericValue.verify|verify} messages.
                     * @param message NumericValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.INumericValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NumericValue message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.NumericValue.verify|verify} messages.
                     * @param message NumericValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.INumericValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NumericValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NumericValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.NumericValue;

                    /**
                     * Decodes a NumericValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NumericValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.NumericValue;

                    /**
                     * Verifies a NumericValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NumericValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NumericValue
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.NumericValue;

                    /**
                     * Creates a plain object from a NumericValue message. Also converts values to other types if specified.
                     * @param message NumericValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.NumericValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NumericValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PropertyQuota. */
                interface IPropertyQuota {

                    /** PropertyQuota tokensPerDay */
                    tokensPerDay?: (google.analytics.data.v1beta.IQuotaStatus|null);

                    /** PropertyQuota tokensPerHour */
                    tokensPerHour?: (google.analytics.data.v1beta.IQuotaStatus|null);

                    /** PropertyQuota concurrentRequests */
                    concurrentRequests?: (google.analytics.data.v1beta.IQuotaStatus|null);

                    /** PropertyQuota serverErrorsPerProjectPerHour */
                    serverErrorsPerProjectPerHour?: (google.analytics.data.v1beta.IQuotaStatus|null);

                    /** PropertyQuota potentiallyThresholdedRequestsPerHour */
                    potentiallyThresholdedRequestsPerHour?: (google.analytics.data.v1beta.IQuotaStatus|null);
                }

                /** Represents a PropertyQuota. */
                class PropertyQuota implements IPropertyQuota {

                    /**
                     * Constructs a new PropertyQuota.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IPropertyQuota);

                    /** PropertyQuota tokensPerDay. */
                    public tokensPerDay?: (google.analytics.data.v1beta.IQuotaStatus|null);

                    /** PropertyQuota tokensPerHour. */
                    public tokensPerHour?: (google.analytics.data.v1beta.IQuotaStatus|null);

                    /** PropertyQuota concurrentRequests. */
                    public concurrentRequests?: (google.analytics.data.v1beta.IQuotaStatus|null);

                    /** PropertyQuota serverErrorsPerProjectPerHour. */
                    public serverErrorsPerProjectPerHour?: (google.analytics.data.v1beta.IQuotaStatus|null);

                    /** PropertyQuota potentiallyThresholdedRequestsPerHour. */
                    public potentiallyThresholdedRequestsPerHour?: (google.analytics.data.v1beta.IQuotaStatus|null);

                    /**
                     * Creates a new PropertyQuota instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PropertyQuota instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IPropertyQuota): google.analytics.data.v1beta.PropertyQuota;

                    /**
                     * Encodes the specified PropertyQuota message. Does not implicitly {@link google.analytics.data.v1beta.PropertyQuota.verify|verify} messages.
                     * @param message PropertyQuota message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IPropertyQuota, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PropertyQuota message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.PropertyQuota.verify|verify} messages.
                     * @param message PropertyQuota message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IPropertyQuota, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PropertyQuota message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PropertyQuota
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.PropertyQuota;

                    /**
                     * Decodes a PropertyQuota message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PropertyQuota
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.PropertyQuota;

                    /**
                     * Verifies a PropertyQuota message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PropertyQuota message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PropertyQuota
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.PropertyQuota;

                    /**
                     * Creates a plain object from a PropertyQuota message. Also converts values to other types if specified.
                     * @param message PropertyQuota
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.PropertyQuota, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PropertyQuota to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QuotaStatus. */
                interface IQuotaStatus {

                    /** QuotaStatus consumed */
                    consumed?: (number|null);

                    /** QuotaStatus remaining */
                    remaining?: (number|null);
                }

                /** Represents a QuotaStatus. */
                class QuotaStatus implements IQuotaStatus {

                    /**
                     * Constructs a new QuotaStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IQuotaStatus);

                    /** QuotaStatus consumed. */
                    public consumed: number;

                    /** QuotaStatus remaining. */
                    public remaining: number;

                    /**
                     * Creates a new QuotaStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QuotaStatus instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IQuotaStatus): google.analytics.data.v1beta.QuotaStatus;

                    /**
                     * Encodes the specified QuotaStatus message. Does not implicitly {@link google.analytics.data.v1beta.QuotaStatus.verify|verify} messages.
                     * @param message QuotaStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IQuotaStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QuotaStatus message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.QuotaStatus.verify|verify} messages.
                     * @param message QuotaStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IQuotaStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QuotaStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QuotaStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.QuotaStatus;

                    /**
                     * Decodes a QuotaStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QuotaStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.QuotaStatus;

                    /**
                     * Verifies a QuotaStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QuotaStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QuotaStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.QuotaStatus;

                    /**
                     * Creates a plain object from a QuotaStatus message. Also converts values to other types if specified.
                     * @param message QuotaStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.QuotaStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QuotaStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DimensionMetadata. */
                interface IDimensionMetadata {

                    /** DimensionMetadata apiName */
                    apiName?: (string|null);

                    /** DimensionMetadata uiName */
                    uiName?: (string|null);

                    /** DimensionMetadata description */
                    description?: (string|null);

                    /** DimensionMetadata deprecatedApiNames */
                    deprecatedApiNames?: (string[]|null);

                    /** DimensionMetadata customDefinition */
                    customDefinition?: (boolean|null);

                    /** DimensionMetadata category */
                    category?: (string|null);
                }

                /** Represents a DimensionMetadata. */
                class DimensionMetadata implements IDimensionMetadata {

                    /**
                     * Constructs a new DimensionMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IDimensionMetadata);

                    /** DimensionMetadata apiName. */
                    public apiName: string;

                    /** DimensionMetadata uiName. */
                    public uiName: string;

                    /** DimensionMetadata description. */
                    public description: string;

                    /** DimensionMetadata deprecatedApiNames. */
                    public deprecatedApiNames: string[];

                    /** DimensionMetadata customDefinition. */
                    public customDefinition: boolean;

                    /** DimensionMetadata category. */
                    public category: string;

                    /**
                     * Creates a new DimensionMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DimensionMetadata instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IDimensionMetadata): google.analytics.data.v1beta.DimensionMetadata;

                    /**
                     * Encodes the specified DimensionMetadata message. Does not implicitly {@link google.analytics.data.v1beta.DimensionMetadata.verify|verify} messages.
                     * @param message DimensionMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IDimensionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DimensionMetadata message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.DimensionMetadata.verify|verify} messages.
                     * @param message DimensionMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IDimensionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DimensionMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DimensionMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.DimensionMetadata;

                    /**
                     * Decodes a DimensionMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DimensionMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.DimensionMetadata;

                    /**
                     * Verifies a DimensionMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DimensionMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DimensionMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.DimensionMetadata;

                    /**
                     * Creates a plain object from a DimensionMetadata message. Also converts values to other types if specified.
                     * @param message DimensionMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.DimensionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DimensionMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MetricMetadata. */
                interface IMetricMetadata {

                    /** MetricMetadata apiName */
                    apiName?: (string|null);

                    /** MetricMetadata uiName */
                    uiName?: (string|null);

                    /** MetricMetadata description */
                    description?: (string|null);

                    /** MetricMetadata deprecatedApiNames */
                    deprecatedApiNames?: (string[]|null);

                    /** MetricMetadata type */
                    type?: (google.analytics.data.v1beta.MetricType|keyof typeof google.analytics.data.v1beta.MetricType|null);

                    /** MetricMetadata expression */
                    expression?: (string|null);

                    /** MetricMetadata customDefinition */
                    customDefinition?: (boolean|null);

                    /** MetricMetadata blockedReasons */
                    blockedReasons?: (google.analytics.data.v1beta.MetricMetadata.BlockedReason[]|null);

                    /** MetricMetadata category */
                    category?: (string|null);
                }

                /** Represents a MetricMetadata. */
                class MetricMetadata implements IMetricMetadata {

                    /**
                     * Constructs a new MetricMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IMetricMetadata);

                    /** MetricMetadata apiName. */
                    public apiName: string;

                    /** MetricMetadata uiName. */
                    public uiName: string;

                    /** MetricMetadata description. */
                    public description: string;

                    /** MetricMetadata deprecatedApiNames. */
                    public deprecatedApiNames: string[];

                    /** MetricMetadata type. */
                    public type: (google.analytics.data.v1beta.MetricType|keyof typeof google.analytics.data.v1beta.MetricType);

                    /** MetricMetadata expression. */
                    public expression: string;

                    /** MetricMetadata customDefinition. */
                    public customDefinition: boolean;

                    /** MetricMetadata blockedReasons. */
                    public blockedReasons: google.analytics.data.v1beta.MetricMetadata.BlockedReason[];

                    /** MetricMetadata category. */
                    public category: string;

                    /**
                     * Creates a new MetricMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MetricMetadata instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IMetricMetadata): google.analytics.data.v1beta.MetricMetadata;

                    /**
                     * Encodes the specified MetricMetadata message. Does not implicitly {@link google.analytics.data.v1beta.MetricMetadata.verify|verify} messages.
                     * @param message MetricMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IMetricMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MetricMetadata message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.MetricMetadata.verify|verify} messages.
                     * @param message MetricMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IMetricMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetricMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MetricMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.MetricMetadata;

                    /**
                     * Decodes a MetricMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MetricMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.MetricMetadata;

                    /**
                     * Verifies a MetricMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MetricMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetricMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.MetricMetadata;

                    /**
                     * Creates a plain object from a MetricMetadata message. Also converts values to other types if specified.
                     * @param message MetricMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.MetricMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetricMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace MetricMetadata {

                    /** BlockedReason enum. */
                    enum BlockedReason {
                        BLOCKED_REASON_UNSPECIFIED = 0,
                        NO_REVENUE_METRICS = 1,
                        NO_COST_METRICS = 2
                    }
                }

                /** Properties of a DimensionCompatibility. */
                interface IDimensionCompatibility {

                    /** DimensionCompatibility dimensionMetadata */
                    dimensionMetadata?: (google.analytics.data.v1beta.IDimensionMetadata|null);

                    /** DimensionCompatibility compatibility */
                    compatibility?: (google.analytics.data.v1beta.Compatibility|keyof typeof google.analytics.data.v1beta.Compatibility|null);
                }

                /** Represents a DimensionCompatibility. */
                class DimensionCompatibility implements IDimensionCompatibility {

                    /**
                     * Constructs a new DimensionCompatibility.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IDimensionCompatibility);

                    /** DimensionCompatibility dimensionMetadata. */
                    public dimensionMetadata?: (google.analytics.data.v1beta.IDimensionMetadata|null);

                    /** DimensionCompatibility compatibility. */
                    public compatibility?: (google.analytics.data.v1beta.Compatibility|keyof typeof google.analytics.data.v1beta.Compatibility|null);

                    /** DimensionCompatibility _dimensionMetadata. */
                    public _dimensionMetadata?: "dimensionMetadata";

                    /** DimensionCompatibility _compatibility. */
                    public _compatibility?: "compatibility";

                    /**
                     * Creates a new DimensionCompatibility instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DimensionCompatibility instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IDimensionCompatibility): google.analytics.data.v1beta.DimensionCompatibility;

                    /**
                     * Encodes the specified DimensionCompatibility message. Does not implicitly {@link google.analytics.data.v1beta.DimensionCompatibility.verify|verify} messages.
                     * @param message DimensionCompatibility message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IDimensionCompatibility, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DimensionCompatibility message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.DimensionCompatibility.verify|verify} messages.
                     * @param message DimensionCompatibility message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IDimensionCompatibility, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DimensionCompatibility message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DimensionCompatibility
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.DimensionCompatibility;

                    /**
                     * Decodes a DimensionCompatibility message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DimensionCompatibility
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.DimensionCompatibility;

                    /**
                     * Verifies a DimensionCompatibility message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DimensionCompatibility message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DimensionCompatibility
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.DimensionCompatibility;

                    /**
                     * Creates a plain object from a DimensionCompatibility message. Also converts values to other types if specified.
                     * @param message DimensionCompatibility
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.DimensionCompatibility, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DimensionCompatibility to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MetricCompatibility. */
                interface IMetricCompatibility {

                    /** MetricCompatibility metricMetadata */
                    metricMetadata?: (google.analytics.data.v1beta.IMetricMetadata|null);

                    /** MetricCompatibility compatibility */
                    compatibility?: (google.analytics.data.v1beta.Compatibility|keyof typeof google.analytics.data.v1beta.Compatibility|null);
                }

                /** Represents a MetricCompatibility. */
                class MetricCompatibility implements IMetricCompatibility {

                    /**
                     * Constructs a new MetricCompatibility.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IMetricCompatibility);

                    /** MetricCompatibility metricMetadata. */
                    public metricMetadata?: (google.analytics.data.v1beta.IMetricMetadata|null);

                    /** MetricCompatibility compatibility. */
                    public compatibility?: (google.analytics.data.v1beta.Compatibility|keyof typeof google.analytics.data.v1beta.Compatibility|null);

                    /** MetricCompatibility _metricMetadata. */
                    public _metricMetadata?: "metricMetadata";

                    /** MetricCompatibility _compatibility. */
                    public _compatibility?: "compatibility";

                    /**
                     * Creates a new MetricCompatibility instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MetricCompatibility instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IMetricCompatibility): google.analytics.data.v1beta.MetricCompatibility;

                    /**
                     * Encodes the specified MetricCompatibility message. Does not implicitly {@link google.analytics.data.v1beta.MetricCompatibility.verify|verify} messages.
                     * @param message MetricCompatibility message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IMetricCompatibility, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MetricCompatibility message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.MetricCompatibility.verify|verify} messages.
                     * @param message MetricCompatibility message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IMetricCompatibility, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetricCompatibility message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MetricCompatibility
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.MetricCompatibility;

                    /**
                     * Decodes a MetricCompatibility message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MetricCompatibility
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.MetricCompatibility;

                    /**
                     * Verifies a MetricCompatibility message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MetricCompatibility message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetricCompatibility
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.MetricCompatibility;

                    /**
                     * Creates a plain object from a MetricCompatibility message. Also converts values to other types if specified.
                     * @param message MetricCompatibility
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.MetricCompatibility, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetricCompatibility to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** MetricAggregation enum. */
                enum MetricAggregation {
                    METRIC_AGGREGATION_UNSPECIFIED = 0,
                    TOTAL = 1,
                    MINIMUM = 5,
                    MAXIMUM = 6,
                    COUNT = 4
                }

                /** MetricType enum. */
                enum MetricType {
                    METRIC_TYPE_UNSPECIFIED = 0,
                    TYPE_INTEGER = 1,
                    TYPE_FLOAT = 2,
                    TYPE_SECONDS = 4,
                    TYPE_MILLISECONDS = 5,
                    TYPE_MINUTES = 6,
                    TYPE_HOURS = 7,
                    TYPE_STANDARD = 8,
                    TYPE_CURRENCY = 9,
                    TYPE_FEET = 10,
                    TYPE_MILES = 11,
                    TYPE_METERS = 12,
                    TYPE_KILOMETERS = 13
                }

                /** RestrictedMetricType enum. */
                enum RestrictedMetricType {
                    RESTRICTED_METRIC_TYPE_UNSPECIFIED = 0,
                    COST_DATA = 1,
                    REVENUE_DATA = 2
                }

                /** Compatibility enum. */
                enum Compatibility {
                    COMPATIBILITY_UNSPECIFIED = 0,
                    COMPATIBLE = 1,
                    INCOMPATIBLE = 2
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
            UNORDERED_LIST = 6,
            NON_EMPTY_DEFAULT = 7
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
    }
}
